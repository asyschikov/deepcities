# sync applied patches into draft YAML (text-level edit, verified by re-parsing)
import json,glob,sys,yaml,re
area,D=sys.argv[1],sys.argv[2]
outs=[v for f in sorted(glob.glob(D+'/out/*.json')) for v in json.load(open(f))]
files={}
for f in glob.glob(f'research/{area}/places/*.yaml'):
  for p in yaml.safe_load(open(f)) or []: files.setdefault(p['title'],f)
def entry_range(lines,title):
  starts=[i for i,l in enumerate(lines) if l.startswith('- title:')]
  for k,i in enumerate(starts):
    if yaml.safe_load(lines[i][2:])['title']==title: return i,(starts[k+1] if k+1<len(starts) else len(lines))
def key_range(lines,a,b,key,indent):
  pat=' '*indent+key+':'
  for i in range(a,b):
    if lines[i].startswith(pat) and (len(lines[i])==len(pat) or lines[i][len(pat)] in ' \n'):
      j=i+1
      while j<b and (lines[j].strip()=='' or len(lines[j])-len(lines[j].lstrip())>indent or (len(lines[j])-len(lines[j].lstrip())==indent and lines[j].lstrip().startswith('- '))):
        j+=1
      while j>i+1 and lines[j-1].strip()=='': j-=1
      return i,j
def render(key,val,indent,block):
  pad=' '*indent
  if not block: return [pad+key+': '+json.dumps(val,ensure_ascii=False)+'\n']
  out=[pad+key+': |\n']
  for l in val.rstrip('\n').split('\n'): out.append((pad+'  '+l if l.strip() else '')+'\n')
  return out
stats={'synced':0,'nodraft':[],'fail':[],'attrs':[]}
byfile={}
for x in outs: 
  f=files.get(x['title'])
  if not f: stats['nodraft'].append(x['title']); continue
  byfile.setdefault(f,[]).append(x)
for f,xs in byfile.items():
  orig=open(f).read(); lines=orig.splitlines(True); want={}
  for x in xs:
    pt=x['patch']; nl=(pt.get('translations') or {}).get('nl') or {}
    edits=[('summary',2,pt.get('summary'),False),('body',2,pt.get('body'),True)]
    for k,ind,v,blk in edits:
      if v is None: continue
      a,b=entry_range(lines,x['title']); r=key_range(lines,a,b,k,ind)
      if not r: stats['fail'].append((x['title'],k)); continue
      lines[r[0]:r[1]]=render(k,v,ind,blk)
    if nl:
      a,b=entry_range(lines,x['title']); rn=key_range(lines,a,b,'nl',2)
      for k,v,blk in [('summary',nl.get('summary'),False),('body',nl.get('body'),True)]:
        if v is None: continue
        a,b=entry_range(lines,x['title']); rn=key_range(lines,a,b,'nl',2)
        r=key_range(lines,rn[0],rn[1],k,4)
        if not r: stats['fail'].append((x['title'],'nl.'+k)); continue
        lines[r[0]:r[1]]=render(k,v,4,blk)
    if pt.get('attributes'): stats['attrs'].append((x['title'],pt['attributes']))
    adds=x.get('sources_add') or []
    if adds:
      a,b=entry_range(lines,x['title']); r=key_range(lines,a,b,'sources',2)
      if r:
        last=lines[r[1]-1]; ind=' '*(len(last)-len(last.lstrip())) if last.lstrip().startswith('- ') else '    '
        lines[r[1]:r[1]]=[ind+'- '+json.dumps(u,ensure_ascii=False)+'\n' for u in adds]
    want[x['title']]=(pt,nl)
  new=''.join(lines)
  try:
    parsed={p['title']:p for p in yaml.safe_load(new)}
    n=lambda s:' '.join((s or '').split())
    for t,(pt,nl) in want.items():
      p=parsed[t]
      for k in ('summary','body'):
        if pt.get(k) is not None: assert n(p[k])==n(pt[k]),(t,k)
      for k in ('summary','body'):
        if nl.get(k) is not None: assert n(p['nl'][k])==n(nl[k]),(t,'nl.'+k)
    open(f,'w').write(new); stats['synced']+=len(want)
  except Exception as e:
    stats['fail'].append((f,str(e)[:200]))
print('synced',stats['synced'],'nodraft',len(stats['nodraft']),'fail',stats['fail'][:5],'attrs to apply by hand',len(stats['attrs']))
json.dump(stats,open(D+'/sync-log.json','w'),ensure_ascii=False,indent=1)
