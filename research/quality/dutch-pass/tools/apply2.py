import json,glob,subprocess,os,sys,tempfile
D=sys.argv[1]; note=sys.argv[2]
env={k:v for k,v in os.environ.items() if k not in ('DC_URL','DC_TOKEN')}
inn={x['id']:x for f in glob.glob(D+'/in/*.json') for x in json.load(open(f))}
outs=[v for f in sorted(glob.glob(D+'/out/*.json')) for v in json.load(open(f))]
n=lambda s:' '.join((s or '').split())
def fields(p):
  nl=((p.get('translations') or {}).get('nl') or {})
  return {'summary':p.get('summary'),'body':p.get('body'),'nl.summary':nl.get('summary'),'nl.body':nl.get('body')}
log={'applied':[],'already':[],'skipped':[],'failed':[],'toolong':[]}
for x in outs:
  pid=x['id']; snap=inn[pid]; pt=x.get('patch') or {}
  pf={k:v for k,v in fields(pt).items() if v is not None}
  if not pf and not pt.get('attributes'): continue
  if any(len(v)>280 for k,v in pf.items() if k.endswith('summary')): log['toolong'].append(x['title']); continue
  live=json.loads(subprocess.run(['pnpm','-s','dc','place',pid],capture_output=True,text=True,env=env).stdout)['place']
  lf=fields(live); sf={'summary':snap['summary'],'body':snap['body'],'nl.summary':snap['nl']['summary'],'nl.body':snap['nl']['body']}
  if all(n(lf[k])==n(v) for k,v in pf.items()): log['already'].append(x['title']); continue
  if any(n(lf[k])!=n(sf[k]) for k in pf): log['skipped'].append(x['title']); continue
  with tempfile.NamedTemporaryFile('w',suffix='.json',delete=False) as t: json.dump(pt,t,ensure_ascii=False)
  r=subprocess.run(['pnpm','-s','dc','update',pid,t.name,'--note',note],capture_output=True,text=True,env=env)
  if '"approved"' in r.stdout: log['applied'].append(x['title'])
  else: log['failed'].append((x['title'],(r.stdout+r.stderr)[-300:]))
json.dump(log,open(D+'/apply-log.json','w'),ensure_ascii=False,indent=1)
print({k:len(v) for k,v in log.items()}); print('skipped:',log['skipped']); print('toolong:',log['toolong']); print('failed:',log['failed'][:3])
