let stack=[],route='',U={};
const AUTH=new Set(['welcome','signup','login','forgot','checkemail','newpass','setup1','setup2','setup3','allset','offline','oops','loading','expired','update']);
const parse=r=>{const a=r.split('|');return [a[0],a.slice(1)]};
function applyTheme(v){let t=v||S.phoneTheme;if(t==='match')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';$('#phone').dataset.theme=t;document.documentElement.dataset.t=t;}
function sheet(html){closeSheet();const p=$('#phone');p.insertAdjacentHTML('beforeend',`<div class="scrim" data-a="closesheet"></div><div class="sheet" id="sheet"><div class="grab"></div>${html}</div>`)}
function closeSheet(){document.querySelectorAll('.scrim,.sheet').forEach(e=>e.remove())}
let tt;function toast(t){document.querySelectorAll('.toast').forEach(e=>e.remove());$('#phone').insertAdjacentHTML('beforeend',`<div class="toast">${esc(t)}</div>`);clearTimeout(tt);tt=setTimeout(()=>document.querySelectorAll('.toast').forEach(e=>e.remove()),2400)}
let DIR='fwd';const NAVR=new Set(['home','explore','stories','growth','journal']);
function countUp(){document.querySelectorAll('.stat').forEach(el=>{const t=el.textContent.trim();if(!/^\d+$/.test(t))return;const n=+t;if(n<1)return;const t0=performance.now();el.textContent='0';const step=now=>{const k=Math.min(1,(now-t0)/900);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(step)};setTimeout(()=>requestAnimationFrame(step),350)})}
let ANIM=false,_pill=null;
function placeNav(){const n=$('.nav');if(!n){_pill=null;return}const bs=[...n.querySelectorAll('button')],b=n.querySelector('button.on'),p=n.querySelector('.pill');if(!b||!p)return;const t={l:b.offsetLeft,w:b.offsetWidth,pos:bs.map(x=>x.offsetLeft)};p.style.left=t.l+'px';p.style.width=t.w+'px';
if(_pill&&(_pill.l!==t.l||_pill.w!==t.w)){const o={duration:520,easing:'cubic-bezier(.45,.05,.2,1)'};p.animate([{left:_pill.l+'px',width:_pill.w+'px'},{left:t.l+'px',width:t.w+'px'}],o);bs.forEach((x,k)=>{const d=_pill.pos[k]-t.pos[k];if(d)x.animate([{transform:`translateX(${d}px)`},{transform:'none'}],o);const sp=x.querySelector('span');});b.animate([{color:'var(--ts)'},{color:'var(--onbrand)'}],{duration:520,easing:'ease'})}_pill=t}
function fades(){const s=$('.scr'),t=$('#topfade'),b=$('.botfade');if(!s||!t)return;const top=Math.min(1,Math.max(0,s.scrollTop-4)/28),rem=s.scrollHeight-s.clientHeight-s.scrollTop;t.style.opacity=top;if(b)b.style.opacity=Math.min(1,Math.max(0,rem)/48)}
function render(noAnim){ANIM=!noAnim;closeSheet();const [name,p]=parse(route);const fn=R[name]||R.home;const r=fn(p,U);const sc=$('.scr');const keep=noAnim&&sc?sc.scrollTop:0;
const cls=(noAnim||DIR==='fwd'||DIR==='bck'||DIR==='fade')?'none':DIR;DIR='fwd';const scr=$('#screen'),oldp=scr.querySelector('.page');const lay=false;
if(lay){oldp.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));const o=oldp.querySelector('.scr');o&&o.classList.replace('scr','oscr');oldp.classList.add('out','o-'+cls);oldp.style.pointerEvents='none';setTimeout(()=>oldp.remove(),420)}
const html=`<div class="page ${cls}${noAnim?' still':''}${(!noAnim&&!r.raw)?' pgin':''}${lay?' in in-'+cls:''}" style="position:absolute;inset:0"><div class="scr ${r.b?'fixedbtm':''} ${r.raw?'':'stg'}" ${r.raw?'style="padding:0;overflow:hidden"':''}>${r.h}</div>${(r.b||r.n)?'<div class="botfade"></div>':''}${r.b?`<div class="btm${r.n?' withnav':''}${r.bo?' old':''}">${r.b}</div>`:''}${r.n?nav(r.n):''}</div>`;
let bg=scr.querySelector('#bg');if(!bg){scr.innerHTML=`<div id="bg">${glows(1)}</div>`;bg=scr.querySelector('#bg')}bg.classList.toggle('off',!r.g);scr.querySelectorAll('.page').forEach(x=>x.remove());scr.insertAdjacentHTML('beforeend',html);
if(!r.raw){[...$('.scr').children].forEach((el,i)=>el.style.setProperty('--i',Math.min(i,12)))}
{const sc2=$('.scr'),bt=$('.btm');if(sc2&&!r.raw)sc2.style.paddingBottom=(bt?bt.offsetHeight-28+(r.n?100:0):(r.n?130:48))+(window.SAB||0)+'px'}fades();{const s3=$('.scr');if(s3)s3.addEventListener('scroll',fades,{passive:true})}if(keep)$('.scr').scrollTop=keep;placeNav();if(r.after)r.after();if(!noAnim)countUp();document.querySelectorAll('#side [data-r]').forEach(b=>b.style.background=b.dataset.r===route?'#262850':'');}
function go(to,reset){const nv=NAVR.has(parse(to)[0])&&NAVR.has(parse(route)[0]);const inX=route.startsWith('x|'),toX=to.startsWith('x|');if(reset)stack=[];else if(inX){stack=stack.filter(r=>!r.startsWith('x|'));if(toX&&false)stack.push(route)}else if(route)stack.push(route);if(nv||reset)DIR='fade';route=to;U={};render();$('.scr')&&($('.scr').scrollTop=0)}
function back(){applyTheme();if(!stack.length){go('home',true);return}route=stack.pop();U={};DIR='bck';render()}
function reload(){render(true)}
const val=id=>{const e=document.getElementById(id);return e?e.value:''};
const num=(n)=>{};
function keypress(n){U.digits=U.digits||'';U.wrong=false;if(n==='del')U.digits=U.digits.slice(0,-1);else if(U.digits.length<4)U.digits+=n;
if(U.digits.length===4){if(S.pin){if(U.digits===S.pin){UNLOCKED=true;stack.pop();route='journal';U={};render();return}U.wrong=true;U.shake=true;U.digits='';reload();setTimeout(()=>{U.shake=false},500);return}
if(!U.first){U.first=U.digits;U.digits='';reload();return}if(U.first===U.digits){S.pin=U.digits;save();UNLOCKED=true;route='journal';U={};render();toast('PIN set. Your journal is ready.');return}U.first=null;U.digits='';U.wrong=true;reload();return}
reload()}
const ACT={
go(el){go(el.dataset.to)},back(){back()},reset(el){go(el.dataset.to,true)},toast(el){toast(el.dataset.t||'Saved')},
eye(el){const i=document.getElementById(el.dataset.id);const show=i.type==='password';i.type=show?'text':'password';el.innerHTML=ic(show?'eye-off':'eye',22,'eye')},
signup(){const n=val('su_name').trim(),e=val('su_email').trim(),pw=val('su_pw');U.name=n;U.email=e;if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)){U.err='email';reload();return}if(pw.length<7){U.err='pw';reload();return}S.name=n||'Sam';S.email=e;S.loggedIn=true;save();go('setup1',true)},
login(){const e=val('li_email').trim(),pw=val('li_pw');U.email=e;if(!e||pw.length<7){U.err=true;reload();return}S.loggedIn=true;S.email=e;save();go('home',true)},
sendreset(){U.email=val('fp_email');const em=U.email;go('checkemail');U.email=em;render()},
savepw(){toast('Password updated');go('login',true)},
grade(el){S.grade=+el.dataset.id;save();reload()},grade2(el){S.grade=+el.dataset.id;save();reload()},
int(el){const id=el.dataset.id;const i=S.interests.indexOf(id);i>=0?S.interests.splice(i,1):S.interests.push(id);save();el.classList.toggle('on')},
savesub(){toast('Interests saved');back()},
remind(){S.remind['Weekly reflection']=true;save();go('allset')},
tog(el){const k=el.dataset.k;if(k in S.remind){S.remind[k]=!S.remind[k]}else if(k.startsWith('Show my')){S.showFields=!S.showFields}save();el.classList.toggle('on')},
field(el){go('field|'+el.dataset.id)},level(el){S.level[el.dataset.id]=+el.dataset.v;save();reload()},
exp(el){const id=el.dataset.id;if(!id)return;closeSheet();S.prog[id]=S.prog[id]||{step:0,ans:[]};go('x|'+id+'|intro')},
preview(el){U.prev=el.dataset.id;reload()},closeprev(){U.prev=null;reload()},closesheet(){closeSheet()},
xgo(el){const s=el.dataset.s;route='x|'+el.dataset.id+'|'+s;U={};render()},
pick(el){const e=el.dataset.id;S.prog[e].ans[+el.dataset.k]=+el.dataset.i;save();reload()},
xnext(el){const k=+el.dataset.k;route='x|'+el.dataset.id+'|'+(k<2?'q'+(k+1):'reflect');U={};render()},
mood(el){U.text=document.getElementById('rtext')?val('rtext'):U.text;U.mood=el.dataset.id;reload()},
xsave(el){const id=el.dataset.id;const t=val('rtext');S.entries.unshift({id:'e'+Date.now(),date:new Date().toISOString(),mood:U.mood,text:t,exp:id});S.done[id]=true;delete S.prog[id];save();route='x|'+id+'|complete';U={};render()},
leave(el){const id=el.dataset.id;const [,p]=parse(route);if(p[1]==='complete'||p[1]==='intro'){stack=stack.filter(r=>!r.startsWith('x|'));if(!stack.length){route='field|'+exp(id).field;U={};DIR='bck';render();return}route=stack.pop();U={};DIR='bck';render();return}const e=exp(id);sheet(`<h2 class="h2">Leave this exercise?</h2><p class="b ts mt12">Your answers so far are saved. You can pick this up again from ${FLABEL[e.field]}.</p><div class="col g4 mt24" style="align-items:center">${btn('Keep going',{act:'closesheet'})}${btn('Leave',{s:'ghost',sm:1,act:'leaveok'}).replace('data-a="leaveok"',`data-a="leaveok" data-id="${id}"`)}</div>`)},
leaveok(el){const e=exp(el.dataset.id);stack=stack.filter(r=>!r.startsWith('x|'));closeSheet();route='field|'+e.field;U={};render()},
clearq(){U.q='';reload()},setq(el){U.q=el.dataset.q;reload()},
tab(el){S.tab=el.dataset.id;save();reload()},story(el){go('story|'+el.dataset.id)},
save(el){const k=el.dataset.id;if(!S.saved.includes(k))S.saved.push(k);save();toast('Saved to your list');reload()},unsave(el){S.saved=S.saved.filter(x=>x!==el.dataset.id);save();toast('Removed from saved');reload()},
felt(el){const k=el.dataset.id;S.felt.includes(k)?S.felt=S.felt.filter(x=>x!==k):S.felt.push(k);save();reload()},
follow(el){const k=el.dataset.id;S.following.includes(k)?S.following=S.following.filter(x=>x!==k):S.following.push(k);save();reload()},
opener(el){U.text=val('mtext');U.op=+el.dataset.i;reload()},
sendmsg(el){const k=el.dataset.id;const v=PEOPLE[k];S.msgs[k]={opener:v.openers[U.op],text:val('mtext')||v.hint};save();route='msgsent|'+k;U={};render()},
reply(el){const k=el.dataset.id;const t=val('reply').trim();if(!t)return;S.msgs[k]=S.msgs[k]||{opener:PEOPLE[k].openers[0],text:''};(S.msgs[k].replies=S.msgs[k].replies||[]).push(t);save();reload();$('.scr').scrollTop=9999},
sendq(el){const k=el.dataset.id;S.asked[k]=val('qtext').trim()||PEOPLE[k].q;save();route='asksent|'+k;U={};render()},
key(el){keypress(el.dataset.n)},
erase(){S.entries=[];S.pin=null;UNLOCKED=false;save();stack=[];route='journal';U={};render();toast('Journal erased. Set a new PIN.')},
erasesheet(){sheet(`<h2 class="h2">Erase your journal?</h2><p class="b ts mt12">All entries are deleted from this device and can’t be recovered.</p><div class="col g4 mt24" style="align-items:center">${btn('Erase journal',{s:'danger',act:'erase'})}${btn('Cancel',{s:'ghost',sm:1,act:'closesheet'})}</div>`)},
chpin(){S.pin=null;UNLOCKED=false;save();go('pin')},
saveentry(){const t=val('rtext');const m=U.mood;if(U.edit){const e=S.entries.find(x=>x.id===U.edit);e.text=t;if(m)e.mood=m}else{S.entries.unshift({id:'e'+Date.now(),date:new Date().toISOString(),mood:m,text:t})}save();toast('Entry saved');stack=[];route='journal';U={};render()},
entry(el){go('entry|'+el.dataset.id)},
edit(el){const id=el.dataset.id;route='newentry';U={edit:id};render()},
del(el){const id=el.dataset.id;sheet(`<h2 class="h2">Delete this entry?</h2><p class="b ts mt12">This can’t be undone.</p><div class="col g4 mt24" style="align-items:center">${btn('Delete entry',{s:'danger',act:'delok'}).replace('data-a="delok"',`data-a="delok" data-id="${id}"`)}${btn('Cancel',{s:'ghost',sm:1,act:'closesheet'})}</div>`)},
delok(el){S.entries=S.entries.filter(e=>e.id!==el.dataset.id);save();stack=[];route='journal';U={};render();toast('Entry deleted')},
logoutsheet(){sheet(`<h2 class="h2">Log out of Illume?</h2><p class="b ts mt12">Your journal stays saved and locked. You can log back in any time.</p><div class="col g4 mt24" style="align-items:center">${btn('Log out',{s:'danger',act:'logout'})}${btn('Cancel',{s:'ghost',sm:1,act:'closesheet'})}</div>`)},
logout(){S.loggedIn=false;UNLOCKED=false;save();go('welcome',true)},
delete(){const k=KEY;S=blank();try{localStorage.removeItem(k)}catch(e){}UNLOCKED=false;go('welcome',true)},
savepw2(){toast('Password updated');back()},
theme(el){U.th=el.dataset.id;applyTheme(U.th);reload()},savetheme(){S.phoneTheme=U.th||S.phoneTheme;save();applyTheme();toast('Appearance saved');back()}
};
document.addEventListener('click',e=>{const el=e.target.closest('[data-a]');if(!el)return;const f=ACT[el.dataset.a];if(f){e.preventDefault();f(el)}});
document.addEventListener('input',e=>{const t=e.target;
if(t.id==='q'){U.q=t.value;const pos=t.selectionStart;reload();const n=document.getElementById('q');n.focus();n.setSelectionRange(pos,pos)}
if(t.id==='mtext'){const c=document.getElementById('cnt');if(c)c.textContent=t.value.length+' / 280'}
if(t.id==='rtext'&&route.startsWith('x|')){}});
document.addEventListener('keydown',e=>{if(document.querySelector('.key')&&!/INPUT|TEXTAREA/.test((e.target||{}).tagName||'')){if(/^[0-9]$/.test(e.key)){keypress(e.key);return}if(e.key==='Backspace'){keypress('del');return}}if(e.key==='Enter'&&e.target.id==='reply'){const b=document.querySelector('[data-a=reply]');b&&b.click()}});
// ---------- shell ----------
const MENU=[['Sign up & log in',['splash','welcome','signup','login','forgot','checkemail','newpass']],['First-time setup',['setup1','setup2','setup3','allset']],['Home & Explore',['home','explore','search']],
['Field pages',FIELDS.map(f=>'field|'+f.id)],['Do an exercise',['x|why-did-i-do-that|intro','x|why-did-i-do-that|scene','x|why-did-i-do-that|q0','x|why-did-i-do-that|reflect','x|why-did-i-do-that|complete']],
['Stories & connect',['stories','story|jordan','story|alex','person|priya','msg|priya','convo|priya','person|dana','ask|dana','answer|dana','saved']],['Growth & journal',['growth','journal','newentry','forgotpin']],
['Profile & settings',['profile','interests','reminders','privacy','account','chpass','appearance','delacct','help']],['System states',['offline','oops','loading','expired','update']]];
const LBL=r=>{const [n,p]=parse(r);const m={splash:'Splash',welcome:'Welcome',signup:'Sign up',login:'Log in',forgot:'Forgot password',checkemail:'Check your email',newpass:'New password',setup1:'Grade',setup2:'Interests',setup3:'Reminders',allset:'All set',home:'Home',explore:'Explore map',search:'Search',stories:'Stories',saved:'Saved stories',growth:'Growth',journal:'Journal',newentry:'New entry',forgotpin:'Forgot PIN',profile:'Profile',interests:'Interests',reminders:'Reminders',privacy:'Privacy & journal',account:'Account',chpass:'Change password',appearance:'Appearance',delacct:'Delete account',help:'Help',offline:'Offline',oops:'Something went wrong',loading:'Loading',expired:'Session expired',update:'Update needed'};
if(m[n])return m[n];if(n==='field')return FLABEL[p[0]];if(n==='x')return {intro:'1 Intro',scene:'2 Scene',q0:'3 Question',reflect:'4 Reflect',complete:'5 Complete'}[p[1]];if(n==='story')return 'Story · '+PEOPLE[p[0]].first;
return({person:'Profile · ',msg:'Message · ',convo:'Chat · ',ask:'Ask · ',answer:'Answer · '}[n]||n)+(PEOPLE[p[0]]?PEOPLE[p[0]].first:'')};
function buildSide(){$('#side').innerHTML=`<div class="logo">Illume</div><p>Clickable prototype of the Figma design. Use the app on the right, or jump to any screen below.</p><div style="margin-top:10px"><button data-t="dark">Dark</button><button data-t="light">Light</button></div>`+MENU.map(([h,l])=>`<h4>${h}</h4>`+l.map(r=>`<button data-r="${r}">${LBL(r)}</button>`).join('')).join('')+`<h4>Data</h4><button data-reset>Reset all demo data</button>`}
document.addEventListener('click',e=>{const b=e.target.closest('#side button');if(!b)return;if(b.dataset.r){stack=[];route=b.dataset.r;U={};if(route==='journal'||route==='newentry')UNLOCKED=true;render()}if(b.dataset.t){S.phoneTheme=b.dataset.t;save();applyTheme()}if(b.hasAttribute('data-reset')){S=blank();save();UNLOCKED=false;go('welcome',true)}});
function fit(){
const APP=innerWidth<=500||(matchMedia('(pointer:coarse)').matches&&innerWidth<=900);
document.body.classList.toggle('app',APP);
const F=$('#frame');
if(APP){
const s=innerWidth/440,pr=$('#probe'),cs=pr?getComputedStyle(pr):null;
const st=cs?parseFloat(cs.paddingTop)||0:0,sb=cs?parseFloat(cs.paddingBottom)||0:0;
window.SAB=Math.round(sb/s);
document.documentElement.style.setProperty('--pt',Math.round(st/s+18)+'px');
document.documentElement.style.setProperty('--sab',window.SAB+'px');
F.style.width='440px';F.style.height=(innerHeight/s)+'px';F.style.transform=`scale(${s})`;F.style.transformOrigin='0 0';F.style.margin='0';F.style.position='fixed';F.style.left='0';F.style.top='0';
}else{
window.SAB=0;
document.documentElement.style.removeProperty('--pt');document.documentElement.style.removeProperty('--sab');
const sw=DEV&&innerWidth>820?310:0;const s=Math.min((innerWidth-sw)/440,innerHeight/1000,1.15);
F.style.width='440px';F.style.height='956px';F.style.position='relative';F.style.left='';F.style.top='';F.style.transformOrigin='center';
F.style.transform=`scale(${s})`;F.style.margin=`${(956*s-956)/2}px ${(440*s-440)/2}px`;
}}
function clock(){}
const DEV=new URLSearchParams(location.search).has('dev');
document.body.innerHTML=`<div id="probe"></div><div id="stage"><div id="side"></div><div id="frame"><div id="phone"><div id="screen"></div><div id="topfade"></div><div id="sys">${SYSBAR}</div><div id="home"></div></div></div></div>`;
if(DEV)buildSide();else $('#side').remove();applyTheme();fit();addEventListener('resize',fit);addEventListener('orientationchange',()=>setTimeout(fit,200));
const startRoute=new URLSearchParams(location.search).get('r');
route=startRoute||'splash';if(startRoute&&startRoute==='journal')UNLOCKED=true;render();
