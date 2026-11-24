import subprocess,sys,re
sc=sys.argv[1]; n=sys.argv[2] if len(sys.argv)>2 else '330'
a=subprocess.run(['python3','-B','show.py',sc,n],capture_output=True,text=True).stdout
b=subprocess.run(['python3','-B','review.py',sc],capture_output=True,text=True).stdout
extra={}
cur=None
for l in b.split('\n'):
    m=re.match(r'^([A-Z]+-\d+) ',l)
    if m: cur=m.group(1); extra[cur]=[]
    elif cur and (l.startswith('   D') or l.startswith('   X')): extra[cur].append(l[:190])
cur=None
for l in a.split('\n'):
    m=re.match(r'^([A-Z]+-\d+) ',l)
    if m and cur: print('\n'.join(extra.get(cur,[])))
    if m: cur=m.group(1)
    if l.startswith('  Second') or l.startswith('  Caveat') and len(l)<20: continue
    print(l)
if cur: print('\n'.join(extra.get(cur,[])))
