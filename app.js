const 
main=document.getElementById('main'),nav=document.getElementById('nav'); 
T.forEach(t=>{
 nav.insertAdjacentHTML('beforeend',`<a 
 href="#${t.id}">${t.nav}<small>${t.items.length}</small></a>`); 
 main.insertAdjacentHTML('beforeend',`<section 
 class="topic" id="${t.id}"><div 
 class="wrap"> 
 <h2>${t.title}</h2><p 
 class="lead">${t.lead}</p> 
 <figure>${S[t.id==='ice'?'cryo':t.id]}<figcaption>${t.cap}</figcaption></figure> 
 <div 
 class="acc">${t.items.map((i,k)=>`<button 
 aria-expanded="${k==0}" 
 aria-controls="${t.id}${k}">${i[0]}</button><div 
 class="pan" 
 id="${t.id}${k}"><p>${i[1]}</p></div>`).join('')}</div> 
 ${t.lab?`<div 
 class="lab"><h3>Albedo 
 lab</h3><p>Albedo is the share 
 of sunlight a surface reflects. 
 Pick a surface to 
 compare.</p><div class="chips" 
 id="chips"></div><div 
 class="meter"><i 
 id="bar"></i></div><p 
 id="alb"></p></div>`:''} 
 </div></section>`)});
// accordion
function 
open(b,o){b.setAttribute('aria-expanded',o);const 
p=b.nextElementSibling;p.style.maxHeight=o?p.scrollHeight+'px':0} 
document.querySelectorAll('.acc').forEach(a=>{const 
bs=[...a.querySelectorAll('button')];bs.forEach((b,i)=>{if(i==0)open(b,true);b.onclick=()=>{const 
o=b.getAttribute('aria-expanded')!=='true';bs.forEach(x=>open(x,false));open(b,o)}})});
// albedo lab
const A=[['Fresh 
snow',90,'Reflects up to 90% of 
sunlight, so it stays 
cold.'],['Clouds',70,'Among the 
brightest features of Earth; they 
send much sunlight back to 
space.'],['Desert',35,'Bright 
sand reflects a good share of 
sunlight.'],['Forest',12,'Dark 
canopies absorb most 
light.'],['Open ocean',8,'Absorbs 
over 90% of sunlight, which is 
why melting ice speeds up 
warming.']]; const 
chips=document.getElementById('chips'); 
A.forEach((a,i)=>{const 
b=document.createElement('button');b.textContent=a[0];b.setAttribute('aria-pressed',i==0);b.onclick=()=>{[...chips.children].forEach(c=>c.setAttribute('aria-pressed',false));b.setAttribute('aria-pressed',true);show(a)};chips.append(b)}); 
function 
show(a){document.getElementById('bar').style.width=a[1]+'%';document.getElementById('alb').textContent=a[0]+': 
about '+a[1]+'% reflected. 
'+a[2]} 
setTimeout(()=>show(A[0]),300);
// counters
const io=new 
IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const 
el=e.target,n=+el.dataset.n,s=el.dataset.s,d=n%1?2:0;let 
t=0;const f=()=>{t+=.04;const 
v=Math.min(1,t);el.textContent=(n*v).toFixed(d)+(s==='%+'?'%':s);if(v<1)requestAnimationFrame(f)};f()}),{threshold:.6}); 
document.querySelectorAll('[data-n]').forEach(e=>io.observe(e));
// scroll spy
const 
links=[...nav.querySelectorAll('a')]; 
const spy=new 
IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-40% 
0px -55% 0px'}); 
document.querySelectorAll('.topic').forEach(s=>spy.observe(s));
// theme
document.getElementById('th').onclick=()=>{const 
r=document.documentElement,d=getComputedStyle(r).colorScheme.includes('dark');r.dataset.theme=d?'light':'dark'};
// sidebar drawer + search
const 
side=document.getElementById('side'),q=document.getElementById('q'); 
document.getElementById('burger').onclick=()=>side.classList.toggle('open'); 
nav.onclick=e=>{if(e.target.closest('a'))side.classList.remove('open')};
q.oninput=()=>{const v=q.value.trim().toLowerCase();document.querySelectorAll('.topic').forEach(s=>{let n=0;s.querySelectorAll('.acc button').forEach((b,i)=>{const p=b.nextElementSibling,m=!v||(b.textContent+p.textContent).toLowerCase().includes(v);b.style.display=p.style.display=m?'':'none';if(m)n++;open(b,v?m:i==0)});s.style.display=n?'':'none'})};
