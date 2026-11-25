# usage: python3 -B yamlsync.py <yaml> <live-place.json> : sync summary/body/attributes (EN+NL, not rank) of the entry whose title matches the live title
import sys,json,yaml
f,live=sys.argv[1],json.load(open(sys.argv[2]))['place']
L=open(f).read().split('\n')
start=[i for i,l in enumerate(L) if l.startswith('- title:') and yaml.safe_load(l[2:])['title']==live['title']]
assert len(start)==1,('entry not found',live['title'])
s=start[0]; e=next((i for i in range(s+1,len(L)) if L[i].startswith('- ')),len(L))
E=L[s:e]
def q(v): return yaml.safe_dump(v,width=10**6,allow_unicode=True).strip().removesuffix('...').strip()
def find(key,ind,lo=0,hi=None):
    hi=len(E) if hi is None else hi
    for i in range(lo,hi):
        if E[i].startswith(' '*ind+key+':'): return i
def block_end(i,ind):
    j=i+1
    while j<len(E) and (E[j].strip()=='' or len(E[j])-len(E[j].lstrip())>ind): j+=1
    while j>i+1 and E[j-1].strip()=='': j-=1
    return j
def set_scalar(key,val,ind,lo=0,hi=None):
    i=find(key,ind,lo,hi); assert i is not None,key
    j=block_end(i,ind)
    E[i:j]=[' '*ind+key+': |']+[(' '*(ind+2)+x if x else '') for x in val.rstrip('\n').split('\n')] if '\n' in val else [' '*ind+key+': '+q(val)]
def set_attrs(attrs,ind,lo=0,hi=None):
    i=find('attributes',ind,lo,hi)
    if i is None: return
    j=block_end(i,ind)
    cur=yaml.safe_load('\n'.join(x[ind:] for x in E[i:j]))['attributes'] or {}
    for k in ('check','check_note','status'):
        if k in cur and k not in attrs:
            idx=[n for n in range(i+1,j) if E[n].startswith(' '*(ind+2)+k+':')]
            if idx:
                m=idx[0]+1
                while m<j and len(E[m])-len(E[m].lstrip())>ind+2: m+=1
                del E[idx[0]:m]; j-=m-idx[0]
    for k,v in attrs.items():
        if cur.get(k)!=v:
            idx=[n for n in range(i+1,j) if E[n].startswith(' '*(ind+2)+k+':')]
            line=' '*(ind+2)+k+': '+q(v)
            if idx: E[idx[0]]=line
            else: E.insert(j,line); j+=1
set_scalar('summary',live['summary'],2,0,find('nl',2))
set_scalar('body',live['body'],2,0,find('nl',2))
set_attrs({k:v for k,v in live['attributes'].items() if k!='rank'},2,0,find('nl',2))
n=live.get('translations',{}).get('nl',{})
if find('nl',2) is not None:
    if n.get('summary'): set_scalar('summary',n['summary'],4,find('nl',2))
    if n.get('body'): set_scalar('body',n['body'],4,find('nl',2))
    set_attrs(n.get('attributes') or {},4,find('nl',2))
L[s:e]=E; open(f,'w').write('\n'.join(L))
chk=[p for p in yaml.safe_load(open(f)) if p['title']==live['title']][0]
assert chk['body'].strip()==live['body'].strip() and chk['nl']['body'].strip()==n['body'].strip(),'mismatch'
print('synced',live['title'])
