import{h as Jo,t as Or,i as ei,O as Pr,o as zr,j as ti,D as oe,R as ie,I as Er,a as Tr,C as ae,d as W,S as Ar,m as j,c as ir,k as Cr,p as Fr,l as Dr,B as ri,s as oi,E as ii,n as ai,T as ni}from"./toc-menu-items.service-ow5GF49n.js";import{M as Rr,a as Ge,R as ht,T as si,b as di}from"./site-footer.component-Dp1VJbIN.js";import"./blob-CbDcr2Fw.js";function li(){}function vt(e=0,t=Jo){return e<0&&(e=0),Or(e,e,t)}function qr(e,t=ei){return e=e??ci,r=>new Pr(n=>{let o,a=!0;r.subscribe(zr({destination:n,next:d=>{const s=t(d);(a||!e(o,s))&&(a=!1,o=s,n.next(d))}}))})}function ci(e,t){return e===t}function Nr(e){return t=>new Pr(r=>{ti(e).subscribe(zr({destination:r,next:()=>r.complete(),complete:li})),!r.closed&&t.subscribe(r)})}var pi=Object.create,ut=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,vi=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Lr=e=>{throw TypeError(e)},ui=(e,t,r)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,bi=(e,t)=>ut(e,"name",{value:t,configurable:!0}),gi=e=>[,,,pi(null)],mi=["class","method","getter","setter","accessor","field","value","get","set"],Br=e=>e!==void 0&&typeof e!="function"?Lr("Function expected"):e,fi=(e,t,r,n,o)=>({kind:mi[e],name:t,metadata:n,addInitializer:a=>r._?Lr("Already initialized"):o.push(Br(a||null))}),_i=(e,t)=>ui(t,vi("metadata"),e[3]),yi=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)a[o].call(r);return n},xi=(e,t,r,n,o,a)=>{var d,s,g,p=t&7,m=!1,i=0,f=e[i]||(e[i]=[]),l=p&&(o=o.prototype,p<5&&(p>3||!m)&&hi(o,r));bi(o,r);for(var u=n.length-1;u>=0;u--)g=fi(p,r,s={},e[3],f),d=(0,n[u])(o,g),s._=1,Br(d)&&(o=d);return _i(e,o),l&&ut(o,r,l),m?p^4?a:l:o},Wr,bt;const Te=5,Qe=12,wi=20,$i=64,ki=3.8,Si=24,Mi=40,Ii=.013,Ze=["175,192,209","142,157,186","160,138,178","212,176,230","226,170,196"],Oi=e=>Math.floor((e%1+1)%1*65536).toString(16).toUpperCase().padStart(4,"0"),Y=e=>(e%1+1)%1,pe=(e,t)=>{let r=Y(t)-Y(e);return r>.5&&(r-=1),r<-.5&&(r+=1),r};Wr=[oe({selector:"[token-ring-bg]"})];class De{node;frame=0;ro;io;onMove;onVisibility;onInit(){const t=this.node,r=t.getContext("2d");if(!r)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let o=0,a=0,d=1;const s=()=>{d=Math.min(window.devicePixelRatio||1,2),o=t.clientWidth,a=t.clientHeight,t.width=Math.round(o*d),t.height=Math.round(a*d)};this.ro=new ResizeObserver(s),this.ro.observe(t),s();let g=0,p=0,m=0,i=0;this.onMove=v=>{m=(v.clientX/window.innerWidth-.5)*2,i=(v.clientY/window.innerHeight-.5)*2},window.addEventListener("pointermove",this.onMove);let f=[];for(let v=0;v<Qe;v++){const _=Y((v+(Math.random()-.5)*.5)/Qe);f.push({start:_,owner:v%Te,shownStart:_,shownEnd:_,born:-1e9,dying:0})}f.sort((v,_)=>v.start-_.start);const l=()=>f.filter(v=>v.dying===0),u=v=>{const _=l(),y=_.indexOf(v);let P=_[(y+1)%_.length].start;return P<=v.start&&(P+=1),P};for(const v of f)v.shownEnd=u(v);const x=[];for(let v=0;v<32;v++){const _=Array.from({length:2+Math.floor(Math.random()*12)},()=>({born:-1e9}));x.push({pos:Y((v+.2+Math.random()*.6)/32),rows:_})}x.sort((v,_)=>v.pos-_.pos);const E=(v,_)=>{const y=u(v),S=_<v.start?_+1:_;return S>=v.start&&S<y},C=v=>l().find(_=>E(_,v)),h=v=>x.filter(_=>E(v,_.pos)),$=v=>h(v).reduce((_,y)=>_+y.rows.length,0);let c=Math.random();const k=v=>1-Math.pow(1-Math.min(1,Math.max(0,v)),3),Uo=v=>{c=Y(c+8e-4);const _=Y(c+(Math.random()-.5)*.24);let y=x[0],S=2;for(const M of x){const I=Math.abs(pe(M.pos,_));I<S&&(S=I,y=M)}if(S>Ii*1.5&&Math.random()<.25){if(x.push({pos:_,rows:[{born:v}]}),x.sort((M,I)=>M.pos-I.pos),x.length>Mi){let M=0;x.forEach((I,O)=>{I.rows.length<x[M].rows.length&&(M=O)}),x.splice(M,1)}}else y.rows.length<Si&&y.rows.push({born:v});const P=x[Math.floor(Math.random()*x.length)];P.rows.length>2&&Math.random()<.6&&P.rows.shift()},Go=v=>{const _=l(),y=_.reduce((S,P)=>!S||$(P)>$(S)?P:S,void 0);if(y&&$(y)>$i&&_.length<wi){const S=h(y);if(S.length>=2){const P=z=>z<y.start?z+1:z;S.sort((z,T)=>P(z.pos)-P(T.pos));const M=Math.floor(S.length/2),I=Y((P(S[M-1].pos)+P(S[M].pos))/2),O=Array.from({length:Te},(z,T)=>_.reduce((b,w)=>b+(w.owner===T?$(w):0),0));O[y.owner]=1/0;const X=O.indexOf(Math.min(...O)),L=u(y);f.push({start:I,owner:X,shownStart:I,shownEnd:L,born:v,dying:0}),f.sort((z,T)=>z.start-T.start);return}}if(_.length>Qe&&Math.random()<.5){let S=_[0],P=1/0;for(let M=0;M<_.length;M++){const I=_[(M+1)%_.length],O=$(_[M])+$(I);O<P&&(P=O,S=I)}S.dying=v}},je=Array.from({length:Te},(v,_)=>{const y=_/Te*Math.PI*2;return{x:Math.cos(y)*.3,y:Math.sin(y)*.3,vx:0,vy:0}}),jo=v=>{const _=l();je.forEach((y,S)=>{let P=0,M=0,I=0;for(const T of _){if(T.owner!==S)continue;const w=(T.start+u(T))/2*Math.PI*2-Math.PI/2+v;P+=Math.cos(w),M+=Math.sin(w),I++}const O=I?.5:0,X=I?P/I*O:0,L=I?M/I*O:0;y.vx+=(X-y.x)*.004,y.vy+=(L-y.y)*.004,je.forEach((T,b)=>{if(b===S)return;const w=y.x-T.x,F=y.y-T.y,D=Math.max(.004,w*w+F*F);y.vx+=w/D*45e-5,y.vy+=F/D*45e-5});const z=Math.hypot(y.x,y.y);z>.55&&(y.vx-=y.x*(z-.55)*.05,y.vy-=y.y*(z-.55)*.05),y.vx*=.72,y.vy*=.72,y.x+=y.vx,y.y+=y.vy})};let Kt=0,Qt=0,Ye=performance.now();const Yo=performance.now(),Xe=v=>{const _=(v-Yo)/1e3,y=Math.min(.05,(v-Ye)/1e3);Ye=v,!n&&v-Kt>90&&(Kt=v,Uo(v)),!n&&v-Qt>1900&&(Qt=v,Go(v)),f=f.filter(b=>b.dying===0||v-b.dying<1e3);const S=1-Math.pow(.02,y);for(const b of l()){b.shownStart+=pe(b.shownStart,b.start)*S;const w=u(b);b.shownEnd+=pe(b.shownEnd,w)*S}g+=(m-g)*.04,p+=(i-p)*.04;const P=o<900,M=(P?o*.5:o*.67)+g*14,I=a*.55+p*10,O=Math.min(P?o*.34:o*.28,a*.33),X=n?0:_*.01,L=b=>b*Math.PI*2-Math.PI/2+X,z=(b,w)=>[M+Math.cos(L(b))*w,I+Math.sin(L(b))*w];n||jo(X);const T=je.map(b=>[M+b.x*O,I+b.y*O]);r.setTransform(d,0,0,d,0,0),r.clearRect(0,0,o,a),r.globalAlpha=P?.45:1,r.textAlign="center",r.textBaseline="middle",r.lineWidth=1,r.strokeStyle="rgba(240,232,237,0.12)",r.beginPath(),r.arc(M,I,O,0,Math.PI*2),r.stroke();for(let b=0;b<256;b++){const w=b%16===0,[F,D]=z(b/256,O-(w?10:4)),[R,q]=z(b/256,O);r.strokeStyle=`rgba(240,232,237,${w?.4:.1})`,r.beginPath(),r.moveTo(F,D),r.lineTo(R,q),r.stroke()}r.font="600 12px 'Ubuntu Mono', ui-monospace, monospace",r.fillStyle="rgba(240,232,237,0.5)";for(let b=0;b<16;b++){const[w,F]=z(b/16,O-24);r.fillText(`${b.toString(16).toUpperCase()}000`,w,F)}for(const b of f){const w=Ze[b.owner],F=k((v-b.born)/900),D=b.dying?1-k((v-b.dying)/1e3):1,R=F*D,q=b.shownStart;let G=b.shownEnd;G<=q&&(G+=1),r.lineCap="butt",r.lineWidth=5,r.strokeStyle=`rgba(${w},${.6*R})`,r.beginPath(),r.arc(M,I,O+4,L(q)+.006,L(G)-.006),r.stroke();const[Ie,Oe]=T[b.owner];r.lineWidth=1.1,r.strokeStyle=`rgba(${w},${.32*R})`;for(const Ko of[q+.003,G-.003]){const[er,tr]=z(Ko,O-52),rr=(Ie+er)/2,or=(Oe+tr)/2,Qo=rr+(M-rr)*.3,Zo=or+(I-or)*.3;r.beginPath(),r.moveTo(Ie,Oe),r.quadraticCurveTo(Qo,Zo,er,tr),r.stroke()}const[Ke,Pe]=z(q,O-52),[ze,ce]=z(q,O+9);r.strokeStyle=`rgba(255,255,255,${.5*R})`,r.lineWidth=1.2,r.beginPath(),r.moveTo(Ke,Pe),r.lineTo(ze,ce),r.stroke();const[Ee,Xo]=z(q,O-40);r.font="700 11px 'Ubuntu Mono', ui-monospace, monospace",r.fillStyle=`rgba(${w},${.95*R})`,r.fillText(Oi(q),Ee,Xo)}x.forEach((b,w)=>{const F=x[(w-1+x.length)%x.length],D=x[(w+1)%x.length],R=Math.min(Math.abs(pe(F.pos,b.pos)),Math.abs(pe(b.pos,D.pos))),q=Math.min(.011,R*.42)*Math.PI*2,G=L(b.pos),Ie=Ze[C(b.pos)?.owner??0];b.rows.forEach((Pe,ze)=>{const ce=k((v-Pe.born)/500),Ee=1-k((v-Pe.born)/1500);r.lineWidth=2,r.lineCap="round",r.strokeStyle=Ee>.01?`rgba(255,255,255,${(.4+.55*Ee)*ce})`:`rgba(${Ie},${.62-ze*.012})`,r.beginPath(),r.arc(M,I,O+14+ze*ki,G-q*ce,G+q*ce),r.stroke()});const[Oe,Ke]=z(b.pos,O+4);r.fillStyle="rgba(255,255,255,0.85)",r.beginPath(),r.arc(Oe,Ke,1.8,0,Math.PI*2),r.fill()}),T.forEach(([b,w],F)=>{const D=Ze[F],R=r.createRadialGradient(b,w,0,b,w,30);R.addColorStop(0,`rgba(${D},0.5)`),R.addColorStop(1,`rgba(${D},0)`),r.fillStyle=R,r.beginPath(),r.arc(b,w,30,0,Math.PI*2),r.fill(),r.fillStyle=`rgba(${D},1)`,r.beginPath(),r.arc(b,w,4.5,0,Math.PI*2),r.fill()}),r.globalAlpha=1,!n&&Me&&(this.frame=requestAnimationFrame(Xe))};let Me=!1,Zt=!1;const Jt=()=>{const v=Zt&&document.visibilityState==="visible";v!==Me&&(Me=v,Me?(Ye=performance.now(),this.frame=requestAnimationFrame(Xe)):cancelAnimationFrame(this.frame))};this.io=new IntersectionObserver(([v])=>{Zt=!!v?.isIntersecting,Jt()}),this.io.observe(t),this.onVisibility=Jt,document.addEventListener("visibilitychange",this.onVisibility),n&&(this.frame=requestAnimationFrame(Xe))}onDestroy(){cancelAnimationFrame(this.frame),this.ro?.disconnect(),this.io?.disconnect(),this.onMove&&window.removeEventListener("pointermove",this.onMove),this.onVisibility&&document.removeEventListener("visibilitychange",this.onVisibility)}}bt=gi();De=xi(bt,0,"TokenRingBg",Wr,De);yi(bt,1,De);var Pi=Object.create,gt=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Ei=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Vr=e=>{throw TypeError(e)},Ti=(e,t,r)=>t in e?gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ai=(e,t)=>gt(e,"name",{value:t,configurable:!0}),Ci=e=>[,,,Pi(null)],Fi=["class","method","getter","setter","accessor","field","value","get","set"],Hr=e=>e!==void 0&&typeof e!="function"?Vr("Function expected"):e,Di=(e,t,r,n,o)=>({kind:Fi[e],name:t,metadata:n,addInitializer:a=>r._?Vr("Already initialized"):o.push(Hr(a||null))}),Ri=(e,t)=>Ti(t,Ei("metadata"),e[3]),qi=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)a[o].call(r);return n},Ni=(e,t,r,n,o,a)=>{var d,s,g,p=t&7,m=!1,i=0,f=e[i]||(e[i]=[]),l=p&&(o=o.prototype,p<5&&(p>3||!m)&&zi(o,r));Ai(o,r);for(var u=n.length-1;u>=0;u--)g=Di(p,r,s={},e[3],f),d=(0,n[u])(o,g),s._=1,Hr(d)&&(o=d);return Ri(e,o),l&&gt(o,r,l),m?p^4?a:l:o},Ur,mt;Ur=[oe({selector:"[match-height]"})];class Re{node;bindingPath;ro;onInit(){const[t=1,r=1]=(this.bindingPath?.raw??"").split("/").map(Number),n=this.node.nextElementSibling;if(n===null)return;const o=()=>{const a=n.offsetHeight;this.node.style.height=`${String(a)}px`,this.node.style.width=`${String(a*(t/r))}px`};this.ro=new ResizeObserver(o),this.ro.observe(n),o()}onDestroy(){this.ro?.disconnect()}}mt=Ci();Re=Ni(mt,0,"MatchHeight",Ur,Re);qi(mt,1,Re);const Li=`:host { display: flex; align-items: center; min-height: 100vh; padding: 7rem 2.5rem 5rem;
        position: relative; overflow: hidden; }
:host > .bg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; z-index: 0; pointer-events: none; }
:host > .shade { position: absolute; inset: 0; z-index: 0; pointer-events: none;
                 background: linear-gradient(90deg, rgba(31,10,36,0.92) 0%, rgba(31,10,36,0.6) 38%, rgba(31,10,36,0) 65%); }

:host > .hero { position: relative; width: 100%; max-width: 1200px; margin: 0 auto;
                display: flex; align-items: flex-start; gap: clamp(1.5rem, 3vw, 2.75rem); }
.hero > .logo { flex: none; }
.logo > svg { width: 100%; height: 100%; }
/* Fixed width in the row layout, so the text's height never depends on the logo beside it. */
.hero > .copy { text-align: left; flex: 0 0 auto; width: 36rem; max-width: 100%; }
.copy > .title { font-size: clamp(4rem, 9vw, 7rem); font-weight: 700; color: var(--white);
                 letter-spacing: -0.045em; line-height: 0.85; margin: -0.05em 0 1rem; perspective: 600px; }
.title > span { display: inline-block; }
.copy > .tagline { font-size: clamp(1.3rem, 2.4vw, 1.8rem); color: var(--accent); font-weight: 300;
                   margin: 0 0 1.1rem; letter-spacing: -0.01em; }
.copy > .sub { font-size: 1.08rem; color: var(--secondary); line-height: 1.7;
               margin: 0 0 2rem; font-weight: 300; }
.copy > .cta { display: flex; gap: 0.9rem; flex-wrap: wrap; }
.cta > button { font-size: 1rem; padding: 0.8rem 1.5rem; border-radius: 999px;
                font-weight: 500; letter-spacing: 0.01em; }
.cta > .primary { background: linear-gradient(135deg, #e3c3f0, #afc0d1); color: #2c0b22;
                  border: none; box-shadow: 0 10px 30px -10px rgba(212,176,230,0.7); }
.cta > .primary:hover { filter: brightness(1.06); box-shadow: 0 14px 40px -10px rgba(212,176,230,0.9); }
.cta > .ghost { background: rgba(255,255,255,0.04); color: var(--text);
                border: var(--border-width) solid rgba(255,255,255,0.16); }
.cta > .ghost:hover { border-color: var(--accent); color: var(--white); }

:host > .scroll-hint { position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
                       z-index: 1; color: var(--dim); font-size: 0.7rem; letter-spacing: 0.3em;
                       text-transform: uppercase; animation: bob 2.4s ease-in-out infinite; }
:host > .scroll-hint::after { content: ''; display: block; width: 1px; height: 28px; margin: 0.5rem auto 0;
                              background: linear-gradient(var(--dim), transparent); }
@keyframes bob { 50% { transform: translate(-50%, 6px); } }
@media (max-width: 1000px) {
    /* Narrow screens: text only, the ring behind is enough. */
    .hero > .logo { display: none; }
    :host { padding: 6rem 1.25rem 4rem; }
    :host > .hero { flex-direction: column; }
    :host > .shade { background: rgba(31,10,36,0.55); }
}
`;var Bi=Object.create,ft=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Gr=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),$e=e=>{throw TypeError(e)},jr=(e,t,r)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ar=(e,t)=>ft(e,"name",{value:t,configurable:!0}),Vi=e=>[,,,Bi(e?.[Gr("metadata")]??null)],Yr=["class","method","getter","setter","accessor","field","value","get","set"],ve=e=>e!==void 0&&typeof e!="function"?$e("Function expected"):e,Hi=(e,t,r,n,o)=>({kind:Yr[e],name:t,metadata:n,addInitializer:a=>r._?$e("Already initialized"):o.push(ve(a||null))}),Ui=(e,t)=>jr(t,Gr("metadata"),e[3]),et=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)t&1?a[o].call(r):n=a[o].call(r,n);return n},Xr=(e,t,r,n,o,a)=>{var d,s,g,p,m,i=t&7,f=!!(t&8),l=!!(t&16),u=i>3?e.length+1:i?f?1:2:0,x=Yr[i+5],E=i>3&&(e[u-1]=[]),C=e[u]||(e[u]=[]),h=i&&(!l&&!f&&(o=o.prototype),i<5&&(i>3||!l)&&Wi(i<4?o:{get[r](){return nr(this,a)},set[r](c){return sr(this,a,c)}},r));i?l&&i<4&&ar(a,(i>2?"set ":i>1?"get ":"")+r):ar(o,r);for(var $=n.length-1;$>=0;$--)p=Hi(i,r,g={},e[3],C),i&&(p.static=f,p.private=l,m=p.access={has:l?c=>ji(o,c):c=>r in c},i^3&&(m.get=l?c=>(i^1?nr:Yi)(c,o,i^4?a:h.get):c=>c[r]),i>2&&(m.set=l?(c,k)=>sr(c,o,k,i^4?a:h.set):(c,k)=>c[r]=k)),s=(0,n[$])(i?i<4?l?a:h[x]:i>4?void 0:{get:h.get,set:h.set}:o,p),g._=1,i^4||s===void 0?ve(s)&&(i>4?E.unshift(s):i?l?a=s:h[x]=s:o=s):typeof s!="object"||s===null?$e("Object expected"):(ve(d=s.get)&&(h.get=d),ve(d=s.set)&&(h.set=d),ve(d=s.init)&&E.unshift(d));return i||Ui(e,o),h&&ft(o,r,h),l?i^4?a:h:o},Gi=(e,t,r)=>jr(e,t+"",r),_t=(e,t,r)=>t.has(e)||$e("Cannot "+r),ji=(e,t)=>Object(t)!==t?$e('Cannot use the "in" operator on this value'):e.has(t),nr=(e,t,r)=>(_t(e,t,"read from private field"),r?r.call(e):t.get(e)),sr=(e,t,r,n)=>(_t(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Yi=(e,t,r)=>(_t(e,t,"access private method"),r),Kr,tt,Qr,Z;Qr=[ae({selector:"hero-section",directives:[De,Re],template:`
        <canvas class="bg" token-ring-bg></canvas>
        <div class="shade"></div>
        <div class="hero">
            <!-- As tall as the text beside it; the logo's viewBox is 835 × 1024. -->
            <lexis-logo class="logo" match-height="835/1024"></lexis-logo>
            <div class="copy">
                <h1 class="title"><span>L</span><span>e</span><span>x</span><span>i</span><span>s</span></h1>
                <p class="tagline">Distributed data, in key order.</p>
                <p class="sub">Byte-ordered partitioning built on tablets. Partitions are stored
                   and distributed in key order, so you can query any prefix or range of a
                   partition key and read it back in order, straight from the nodes that hold it.</p>
                <div class="cta">
                    <button class="primary" onclick="toInstall">Get started</button>
                    <button class="ghost" onclick="toExamples">See the queries →</button>
                </div>
            </div>
        </div>
        <div class="scroll-hint">scroll</div>
    `,styles:Li})];class qe extends(tt=ie,Kr=[Er(Tr)],tt){constructor(){super(...arguments),Gi(this,"router",et(Z,8,this)),et(Z,11,this)}toInstall(){this.router.navigate("/install")}toExamples(){this.router.navigate("/examples")}}Z=Vi(tt);Xr(Z,5,"router",Kr,qe);qe=Xr(Z,0,"HeroSection",Qr,qe);et(Z,1,qe);const Xi=`:host { display: block; max-width: 1100px; margin: 0 auto; padding: 6rem 2rem; }
:host > section { display: flex; flex-direction: column; gap: 2.5rem; }
.text > .eyebrow { display: inline-block; font-family: var(--font-mono); font-size: 0.78rem;
           letter-spacing: 0.2em; text-transform: uppercase; color: var(--sky);
           margin-bottom: 1rem; }
.text > h2 { font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 700; letter-spacing: -0.03em;
     line-height: 1.05; margin: 0 0 1.5rem; color: var(--white); max-width: 18ch; }
.text > .body { color: var(--secondary); font-size: 1.12rem; line-height: 1.8; font-weight: 300; }
.body > p { margin: 0 0 1.1rem; max-width: 68ch; }
.body > p > code { font-family: var(--font-mono); background: rgba(255,255,255,0.07);
             padding: 0.1rem 0.4rem; border-radius: 4px; color: var(--accent); font-size: 0.95em; }
.body > p > strong { color: var(--white); font-weight: 500; }
.body > .card { margin-top: 2.5rem; padding: 1.75rem; border-radius: 18px;
              background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
              border: var(--border-width) solid rgba(255,255,255,0.08);
              box-shadow: 0 30px 80px -40px rgba(0,0,0,0.8); backdrop-filter: blur(6px); }
@media (max-width: 600px) {
    :host { padding: 4rem 1.1rem; }
    .body > .card { padding: 1rem; }
}
`;var Ki=Object.create,yt=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,Zr=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ne=e=>{throw TypeError(e)},Jr=(e,t,r)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,dr=(e,t)=>yt(e,"name",{value:t,configurable:!0}),Zi=e=>[,,,Ki(e?.[Zr("metadata")]??null)],eo=["class","method","getter","setter","accessor","field","value","get","set"],ue=e=>e!==void 0&&typeof e!="function"?ne("Function expected"):e,Ji=(e,t,r,n,o)=>({kind:eo[e],name:t,metadata:n,addInitializer:a=>r._?ne("Already initialized"):o.push(ue(a||null))}),ea=(e,t)=>Jr(t,Zr("metadata"),e[3]),be=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)t&1?a[o].call(r):n=a[o].call(r,n);return n},xt=(e,t,r,n,o,a)=>{var d,s,g,p,m,i=t&7,f=!!(t&8),l=!!(t&16),u=i>3?e.length+1:i?f?1:2:0,x=eo[i+5],E=i>3&&(e[u-1]=[]),C=e[u]||(e[u]=[]),h=i&&(!l&&!f&&(o=o.prototype),i<5&&(i>3||!l)&&Qi(i<4?o:{get[r](){return lr(this,a)},set[r](c){return pr(this,a,c)}},r));i?l&&i<4&&dr(a,(i>2?"set ":i>1?"get ":"")+r):dr(o,r);for(var $=n.length-1;$>=0;$--)p=Ji(i,r,g={},e[3],C),i&&(p.static=f,p.private=l,m=p.access={has:l?c=>ra(o,c):c=>r in c},i^3&&(m.get=l?c=>(i^1?lr:oa)(c,o,i^4?a:h.get):c=>c[r]),i>2&&(m.set=l?(c,k)=>pr(c,o,k,i^4?a:h.set):(c,k)=>c[r]=k)),s=(0,n[$])(i?i<4?l?a:h[x]:i>4?void 0:{get:h.get,set:h.set}:o,p),g._=1,i^4||s===void 0?ue(s)&&(i>4?E.unshift(s):i?l?a=s:h[x]=s:o=s):typeof s!="object"||s===null?ne("Object expected"):(ue(d=s.get)&&(h.get=d),ue(d=s.set)&&(h.set=d),ue(d=s.init)&&E.unshift(d));return i||ea(e,o),h&&yt(o,r,h),l?i^4?a:h:o},ta=(e,t,r)=>Jr(e,t+"",r),wt=(e,t,r)=>t.has(e)||ne("Cannot "+r),ra=(e,t)=>Object(t)!==t?ne('Cannot use the "in" operator on this value'):e.has(t),lr=(e,t,r)=>(wt(e,t,"read from private field"),r?r.call(e):t.get(e)),cr=(e,t,r)=>t.has(e)?ne("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),pr=(e,t,r,n)=>(wt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),oa=(e,t,r)=>(wt(e,t,"access private method"),r),to,ro,rt,oo,V,$t,kt;oo=[ae({selector:"story-section",directives:[Rr],template:`
        <section>
            <div class="text" motion-reveal>
                <span class="eyebrow">{{eyebrow}}</span>
                <h2>{{heading}}</h2>
                <div class="body"><slot></slot></div>
            </div>
        </section>
    `,styles:Xi})];class J extends(rt=ie,ro=[W],to=[W],rt){constructor(){super(...arguments),cr(this,$t,be(V,8,this,"")),be(V,11,this),cr(this,kt,be(V,12,this,"")),be(V,15,this)}}V=Zi(rt);$t=new WeakMap;kt=new WeakMap;xt(V,4,"eyebrow",ro,J,$t);xt(V,4,"heading",to,J,kt);J=xt(V,0,"StorySection",oo,J);ta(J,"__stateTypes",{eyebrow:"string",heading:"string"});be(V,1,J);var ia=Object.create,St=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,na=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),io=e=>{throw TypeError(e)},sa=(e,t,r)=>t in e?St(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,da=(e,t)=>St(e,"name",{value:t,configurable:!0}),la=e=>[,,,ia(null)],ca=["class","method","getter","setter","accessor","field","value","get","set"],ao=e=>e!==void 0&&typeof e!="function"?io("Function expected"):e,pa=(e,t,r,n,o)=>({kind:ca[e],name:t,metadata:n,addInitializer:a=>r._?io("Already initialized"):o.push(ao(a||null))}),ha=(e,t)=>sa(t,na("metadata"),e[3]),va=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)a[o].call(r);return n},ua=(e,t,r,n,o,a)=>{var d,s,g,p=t&7,m=!1,i=0,f=e[i]||(e[i]=[]),l=p&&(o=o.prototype,p<5&&(p>3||!m)&&aa(o,r));da(o,r);for(var u=n.length-1;u>=0;u--)g=pa(p,r,s={},e[3],f),d=(0,n[u])(o,g),s._=1,ao(d)&&(o=d);return ha(e,o),l&&St(o,r,l),m?p^4?a:l:o},no,Mt;no=[oe({selector:"[flip]"})];class xe{node;bindingPath;spring;last=new Map;mo;ro;onInit(){const[t=160,r=20,n=1,o=0]=(this.bindingPath?.raw??"").split(/\s+/).filter(Boolean).map(Number);this.spring={stiffness:t,damping:r,mass:n,stagger:o},this.snapshot(),this.mo=new MutationObserver(()=>this.play()),this.mo.observe(this.node,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),this.ro=new ResizeObserver(()=>this.snapshot()),this.ro.observe(this.node)}onDestroy(){this.mo?.disconnect(),this.ro?.disconnect()}children(){return Array.from(this.node.children)}snapshot(){for(const t of this.children())this.last.set(t,{x:t.offsetLeft,y:t.offsetTop})}play(){const{stiffness:t,damping:r,mass:n,stagger:o}=this.spring;this.children().forEach((a,d)=>{const s={x:a.offsetLeft,y:a.offsetTop},g=this.last.get(a);if(this.last.set(a,s),g===void 0||g.x===s.x&&g.y===s.y)return;const p=new DOMMatrixReadOnly(getComputedStyle(a).transform),m=g.x+p.m41-s.x,i=g.y+p.m42-s.y;Ge(a,{x:[m,0],y:[i,0]},{type:"spring",stiffness:t,damping:r,mass:n,delay:d*o})})}}Mt=la();xe=ua(Mt,0,"Flip",no,xe);va(Mt,1,xe);const ba=`:host { display: block; position: relative; }
.controls { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between;
            align-items: center; margin-bottom: 1.25rem; }
.seg { display: inline-flex; padding: 4px; border-radius: 999px;
       background: rgba(0,0,0,0.25); border: var(--border-width) solid rgba(255,255,255,0.08); }
.seg button { background: none; border: none; color: var(--muted); padding: 0.5rem 1rem;
              border-radius: 999px; font-size: 0.85rem; transition: background 0.25s, color 0.25s; }
.seg button.on { background: rgba(255,255,255,0.1); color: var(--white);
                 box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12); }
.queries { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; }
.queries > .query-list { display: contents; }
.qlabel { font-family: var(--font-mono); color: var(--dim); font-size: 0.8rem; margin-right: 0.2rem; }
.q { font-family: var(--font-mono); font-size: 0.78rem; color: var(--secondary);
     background: rgba(255,255,255,0.03); border: var(--border-width) solid rgba(255,255,255,0.1);
     padding: 0.35rem 0.65rem; border-radius: var(--radius); }
.q.on { color: var(--white); border-color: var(--accent); background: rgba(212,176,230,0.12); }

.stage { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap);
         --gap: 1rem; --pad-x: 0.75rem; --pad-top: 3.1rem; }
.stage > .nodes { display: contents; }
/* Frames and chips sit over the nodes, positioned on the same grid geometry as the slots. */
.stage > .frames, .stage > .chips { position: absolute; inset: 0; pointer-events: none; }
.col-0 { --col: 0; } .col-1 { --col: 1; } .col-2 { --col: 2; }
.row-0 { --row: 0; } .row-1 { --row: 1; } .row-2 { --row: 2; } .row-3 { --row: 3; }
.node { position: relative; border-radius: var(--radius-lg); padding: var(--pad-top) var(--pad-x) var(--pad-x);
        background: rgba(20,4,16,0.45); border: var(--border-width) solid rgba(255,255,255,0.07);
        transition: border-color 0.4s, box-shadow 0.4s; }
.node.scan { border-color: rgba(142,157,186,0.55); box-shadow: 0 0 0 1px rgba(142,157,186,0.25), 0 0 40px -12px rgba(142,157,186,0.6); }
.node-label { position: absolute; top: 0.8rem; left: 0.9rem; font-size: 0.72rem;
              letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim); }
.node-label b { color: var(--secondary); font-weight: 500; }
.slot { height: 2.6rem; margin-bottom: 0.45rem; border-radius: var(--radius);
        border: 1px dashed rgba(255,255,255,0.05); }
.tablet { position: absolute; border-radius: 10px;
          left: calc(var(--col) * ((100% - 2 * var(--gap)) / 3 + var(--gap)) + var(--pad-x) - 5px);
          width: calc((100% - 2 * var(--gap)) / 3 - 2 * var(--pad-x) - 2px + 10px);
          top: calc(var(--pad-top) + var(--row) * 3.05rem - 5px);
          height: calc(5.65rem + 10px);
          border: 1px solid rgba(175,192,209,0.0); pointer-events: none;
          transition: border-color 0.5s, background 0.5s, box-shadow 0.5s, opacity 0.5s; opacity: 0; }
.tablet .tl { position: absolute; top: -0.55rem; right: 0.6rem; font-size: 0.62rem;
              font-family: var(--font-mono); color: var(--sky); background: var(--bg-2);
              padding: 0 0.35rem; border-radius: 4px; letter-spacing: 0.04em; }
.lexis .tablet { opacity: 1; border-color: rgba(175,192,209,0.28); }
.lexis .tablet.hit { border-color: rgba(212,176,230,0.9); background: rgba(212,176,230,0.07);
                     box-shadow: 0 0 30px -8px rgba(212,176,230,0.7); }

.chip { position: absolute; height: 2.6rem;
        left: calc(var(--col) * ((100% - 2 * var(--gap)) / 3 + var(--gap)) + var(--pad-x));
        width: calc((100% - 2 * var(--gap)) / 3 - 2 * var(--pad-x) - 2px);
        top: calc(var(--pad-top) + var(--row) * 3.05rem); display: flex; align-items: center;
        gap: 0.55rem; padding: 0 0.75rem; border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 0.85rem; color: var(--text);
        background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
        border: var(--border-width) solid rgba(255,255,255,0.1);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis; will-change: transform;
        transition: opacity 0.4s, border-color 0.4s, box-shadow 0.4s, background 0.4s; }
.chip i { width: 8px; height: 8px; border-radius: 50%; flex: none; }
.chip.tone-0 i { background: var(--sky); }
.chip.tone-1 i { background: var(--indigo); }
.chip.tone-2 i { background: var(--lilac); }
.chip.dim { opacity: 0.32; }
.chip.hit { border-color: rgba(212,176,230,0.85); color: var(--white);
            background: linear-gradient(180deg, rgba(212,176,230,0.28), rgba(212,176,230,0.12));
            box-shadow: 0 6px 24px -8px rgba(212,176,230,0.8); }

.verdict { margin-top: 1.25rem; display: flex; align-items: center; gap: 0.7rem;
           font-size: 0.98rem; color: var(--secondary); min-height: 1.6rem; }
.verdict > .texts { display: grid; }
.texts > span { grid-area: 1 / 1; align-self: center; visibility: hidden; }
.texts > span.on { visibility: visible; }
.verdict .dot { width: 10px; height: 10px; border-radius: 50%; background: var(--green);
                box-shadow: 0 0 12px var(--green); flex: none; transition: background 0.3s, box-shadow 0.3s; }
.verdict.bad .dot { background: var(--steel); box-shadow: 0 0 12px var(--steel); }
@media (max-width: 720px) {
    .stage { --gap: 0.4rem; --pad-x: 0.3rem; --pad-top: 2.9rem; }
    .chip { font-size: 0.62rem; padding: 0 0.35rem; gap: 0.3rem; }
    .chip i { width: 6px; height: 6px; }
    .tablet .tl { display: none; }
}
`;var ga=Object.create,It=Object.defineProperty,ma=Object.getOwnPropertyDescriptor,so=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),se=e=>{throw TypeError(e)},lo=(e,t,r)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,hr=(e,t)=>It(e,"name",{value:t,configurable:!0}),fa=e=>[,,,ga(e?.[so("metadata")]??null)],co=["class","method","getter","setter","accessor","field","value","get","set"],ge=e=>e!==void 0&&typeof e!="function"?se("Function expected"):e,_a=(e,t,r,n,o)=>({kind:co[e],name:t,metadata:n,addInitializer:a=>r._?se("Already initialized"):o.push(ge(a||null))}),ya=(e,t)=>lo(t,so("metadata"),e[3]),me=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)t&1?a[o].call(r):n=a[o].call(r,n);return n},Ot=(e,t,r,n,o,a)=>{var d,s,g,p,m,i=t&7,f=!!(t&8),l=!!(t&16),u=i>3?e.length+1:i?f?1:2:0,x=co[i+5],E=i>3&&(e[u-1]=[]),C=e[u]||(e[u]=[]),h=i&&(!l&&!f&&(o=o.prototype),i<5&&(i>3||!l)&&ma(i<4?o:{get[r](){return vr(this,a)},set[r](c){return br(this,a,c)}},r));i?l&&i<4&&hr(a,(i>2?"set ":i>1?"get ":"")+r):hr(o,r);for(var $=n.length-1;$>=0;$--)p=_a(i,r,g={},e[3],C),i&&(p.static=f,p.private=l,m=p.access={has:l?c=>xa(o,c):c=>r in c},i^3&&(m.get=l?c=>(i^1?vr:wa)(c,o,i^4?a:h.get):c=>c[r]),i>2&&(m.set=l?(c,k)=>br(c,o,k,i^4?a:h.set):(c,k)=>c[r]=k)),s=(0,n[$])(i?i<4?l?a:h[x]:i>4?void 0:{get:h.get,set:h.set}:o,p),g._=1,i^4||s===void 0?ge(s)&&(i>4?E.unshift(s):i?l?a=s:h[x]=s:o=s):typeof s!="object"||s===null?se("Object expected"):(ge(d=s.get)&&(h.get=d),ge(d=s.set)&&(h.set=d),ge(d=s.init)&&E.unshift(d));return i||ya(e,o),h&&It(o,r,h),l?i^4?a:h:o},Ce=(e,t,r)=>lo(e,typeof t!="symbol"?t+"":t,r),Pt=(e,t,r)=>t.has(e)||se("Cannot "+r),xa=(e,t)=>Object(t)!==t?se('Cannot use the "in" operator on this value'):e.has(t),vr=(e,t,r)=>(Pt(e,t,"read from private field"),r?r.call(e):t.get(e)),ur=(e,t,r)=>t.has(e)?se("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),br=(e,t,r,n)=>(Pt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),wa=(e,t,r)=>(Pt(e,t,"access private method"),r),po,ho,ot,vo,H,zt,Et;const Ne=["u1/o1","u1/o2","u42/o100","u42/o101","u42/o250","u5/o3","u5/o9","u7/o5","u7/o6","u9/o2","u9/o4","u9/o8"],Tt=e=>e.split("/")[0],$a=[...new Set(Ne.map(Tt))],ka=[3,10,6,0,8,2,11,5,1,9,4,7],Le=3,Be=4,Q=2,Fe=[{label:"user_id = 'u42'",matches:e=>e==="u42"},{label:"user_id >= 'u5' AND user_id < 'u8'",matches:e=>e>="u5"&&e<"u8"},{label:"user_id = 'u9'",matches:e=>e==="u9"}],it=(e,t)=>{if(e==="murmur")return ka.indexOf(t);const r=Math.floor(t/Q),n=r%Le,o=Math.floor(r/Le);return n*Be+o*Q+t%Q},gr=e=>`col-${String(Math.floor(e/Be))} row-${String(e%Be)}`,at=e=>Ne.map(t=>Fe[e].matches(Tt(t))),uo=e=>{const t=new Set;return e.forEach((r,n)=>{r&&t.add(Math.floor(n/Q))}),t},Sa=Array.from({length:Le},(e,t)=>({id:t,num:String(t+1)})),Ma=["murmur","lexis"],Ia=(e,t)=>{const r=at(t),n=r.filter(Boolean).length;if(e==="murmur"){const a=new Set;return r.forEach((d,s)=>{d&&a.add(Math.floor(it("murmur",s)/Be))}),`Hashed by the whole key: ${String(n)} matches spread over ${String(a.size)} of ${String(Le)} nodes.`}const o=uo(r).size;return`Ordered by key: ${String(n)} matches in one contiguous range, ${String(o)} adjacent tablet${o===1?"":"s"}, read in key order.`};vo=[ae({selector:"partition-viz",directives:[ht,xe],template:`
        <div class="controls">
            <div class="seg">
                <button [class.on]="isMode('murmur')" onclick="setMurmur">Hashed · Murmur3</button>
                <button [class.on]="isMode('lexis')" onclick="setLexis">Ordered · Lexis</button>
            </div>
            <div class="queries">
                <span class="qlabel">WHERE</span>
                <span class="query-list" rx-for="q of queryViews by i"><button class="q" [class.on]="q.on" onclick="setQuery(q.i)">{{q.label}}</button></span>
            </div>
        </div>
        <div class="stage" [class.lexis]="isMode('lexis')">
            <div class="nodes" rx-for="n of nodes by id">
                <div class="node" [class.scan]="isMode('murmur')"><span class="node-label">node <b>{{n.num}}</b></span><div class="slot"></div><div class="slot"></div><div class="slot"></div><div class="slot"></div></div>
            </div>
            <div class="frames" rx-for="f of frames by id">
                <div [className]="f.cls"><span class="tl">{{f.label}}</span></div>
            </div>
            <div class="chips" rx-for="c of chips by id" flip="170 22 0.9 0.025">
                <div [className]="c.cls"><i></i>{{c.key}}</div>
            </div>
        </div>
        <div class="verdict" [class.bad]="isMode('murmur')">
            <span class="dot"></span><span class="texts" rx-for="v of verdicts by id"><span [class.on]="v.on">{{v.text}}</span></span>
        </div>
    `,styles:ba})];class ee extends(ot=ie,ho=[W],po=[W],ot){constructor(){super(...arguments),ur(this,zt,me(H,8,this,"murmur")),me(H,11,this),ur(this,Et,me(H,12,this,0)),me(H,15,this),Ce(this,"nodes",Sa),Ce(this,"stopAuto",new Ar),Ce(this,"auto")}get queryViews$(){return this.queryIndex$.pipe(j(t=>Fe.map((r,n)=>({i:n,label:r.label,on:n===t}))))}get chips$(){return ir([this.mode$,this.queryIndex$]).pipe(j(([t,r])=>{const n=at(r);return Ne.map((o,a)=>({id:a,key:o.replace(/^([^/]+)\/(.+)$/,"user_id:$1/order_id:$2"),cls:`chip tone-${String($a.indexOf(Tt(o))%3)} ${gr(it(t,a))} ${n[a]?"hit":"dim"}`}))}))}get frames$(){return this.queryIndex$.pipe(j(t=>{const r=uo(at(t));return Array.from({length:Ne.length/Q},(n,o)=>({id:o,label:`tablet ${String(o)}`,cls:`tablet ${gr(it("lexis",o*Q))}${r.has(o)?" hit":""}`}))}))}get verdicts$(){return ir([this.mode$,this.queryIndex$]).pipe(j(([t,r])=>Ma.flatMap(n=>Fe.map((o,a)=>({id:`${n}-${String(a)}`,text:Ia(n,a),on:n===t&&a===r})))))}onInit(){let t=0;this.auto=vt(3800).pipe(Nr(this.stopAuto)).subscribe(()=>{t++,t%2===0&&(this.queryIndex=(this.queryIndex+1)%Fe.length),this.mode=this.mode==="murmur"?"lexis":"murmur"})}onDestroy(){this.auto?.unsubscribe()}isMode(t){return this.mode$.pipe(j(r=>r===t))}setMurmur(){this.stopAuto.next(),this.mode="murmur"}setLexis(){this.stopAuto.next(),this.mode="lexis"}setQuery(t){this.stopAuto.next(),this.queryIndex=t}}H=fa(ot);zt=new WeakMap;Et=new WeakMap;Ot(H,4,"mode",ho,ee,zt);Ot(H,4,"queryIndex",po,ee,Et);ee=Ot(H,0,"PartitionViz",vo,ee);Ce(ee,"__stateTypes",{mode:"Mode",queryIndex:"number"});me(H,1,ee);const Oa=`:host { display: block; font-family: var(--font-mono); }
.head, .row { display: grid; grid-template-columns: minmax(11rem, 1fr) minmax(12rem, 1fr) minmax(0, 2.2fr);
              gap: 1rem; align-items: center; padding: 0 1rem; }
.head { font-family: var(--font-sans); font-size: 0.68rem; letter-spacing: 0.14em;
        text-transform: uppercase; color: var(--dim); padding-bottom: 0.6rem; }
.head .on { color: var(--accent); }
.rows { position: relative; }
.row { height: 2.9rem; border-radius: var(--radius); font-size: 0.9rem;
       background: rgba(255,255,255,0.03); border: var(--border-width) solid rgba(255,255,255,0.06);
       margin-bottom: 0.4rem; will-change: transform; }
.key { color: var(--text); white-space: nowrap; }
.key b { color: var(--dim); font-weight: 400; }
.m { color: var(--muted); font-size: 0.82rem; transition: color 0.3s, opacity 0.3s; }
.l { font-size: 0.78rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
     transition: opacity 0.3s; letter-spacing: 0.02em; }
.by-lexis .m { opacity: 0.45; }
.by-murmur .l { opacity: 0.45; }
.c0 { color: var(--sky); } .c1 { color: var(--accent); } .c2 { color: var(--gold); }
.t { color: var(--dim); opacity: 0.6; }
.foot { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;
        gap: 1rem; margin-top: 1rem; }
.seg { display: inline-flex; padding: 4px; border-radius: 999px; font-family: var(--font-sans);
       background: rgba(0,0,0,0.25); border: var(--border-width) solid rgba(255,255,255,0.08); }
.seg button { background: none; border: none; color: var(--muted); padding: 0.45rem 0.95rem;
              border-radius: 999px; font-size: 0.82rem; transition: background 0.25s, color 0.25s; }
.seg button.on { background: rgba(255,255,255,0.1); color: var(--white);
                 box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12); }
.legend { font-size: 0.72rem; color: var(--dim); display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; }
.legend i { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-left: 0.5rem; }
.legend i.c0 { background: var(--sky); } .legend i.c1 { background: var(--accent); }
.legend i.c2 { background: var(--gold); } .legend i.t { background: var(--dim); }
@media (max-width: 720px) {
    .head, .row { grid-template-columns: 1fr; gap: 0.15rem; padding: 0.5rem 0.75rem; }
    .row { height: auto; }
    .head .hm, .head .hl { display: none; }
}
`;var Pa=Object.create,At=Object.defineProperty,za=Object.getOwnPropertyDescriptor,bo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),de=e=>{throw TypeError(e)},go=(e,t,r)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,mr=(e,t)=>At(e,"name",{value:t,configurable:!0}),Ea=e=>[,,,Pa(e?.[bo("metadata")]??null)],mo=["class","method","getter","setter","accessor","field","value","get","set"],fe=e=>e!==void 0&&typeof e!="function"?de("Function expected"):e,Ta=(e,t,r,n,o)=>({kind:mo[e],name:t,metadata:n,addInitializer:a=>r._?de("Already initialized"):o.push(fe(a||null))}),Aa=(e,t)=>go(t,bo("metadata"),e[3]),nt=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)t&1?a[o].call(r):n=a[o].call(r,n);return n},fo=(e,t,r,n,o,a)=>{var d,s,g,p,m,i=t&7,f=!!(t&8),l=!!(t&16),u=i>3?e.length+1:i?f?1:2:0,x=mo[i+5],E=i>3&&(e[u-1]=[]),C=e[u]||(e[u]=[]),h=i&&(!l&&!f&&(o=o.prototype),i<5&&(i>3||!l)&&za(i<4?o:{get[r](){return fr(this,a)},set[r](c){return _r(this,a,c)}},r));i?l&&i<4&&mr(a,(i>2?"set ":i>1?"get ":"")+r):mr(o,r);for(var $=n.length-1;$>=0;$--)p=Ta(i,r,g={},e[3],C),i&&(p.static=f,p.private=l,m=p.access={has:l?c=>Ca(o,c):c=>r in c},i^3&&(m.get=l?c=>(i^1?fr:Da)(c,o,i^4?a:h.get):c=>c[r]),i>2&&(m.set=l?(c,k)=>_r(c,o,k,i^4?a:h.set):(c,k)=>c[r]=k)),s=(0,n[$])(i?i<4?l?a:h[x]:i>4?void 0:{get:h.get,set:h.set}:o,p),g._=1,i^4||s===void 0?fe(s)&&(i>4?E.unshift(s):i?l?a=s:h[x]=s:o=s):typeof s!="object"||s===null?de("Object expected"):(fe(d=s.get)&&(h.get=d),fe(d=s.set)&&(h.set=d),fe(d=s.init)&&E.unshift(d));return i||Aa(e,o),h&&At(o,r,h),l?i^4?a:h:o},st=(e,t,r)=>go(e,typeof t!="symbol"?t+"":t,r),Ct=(e,t,r)=>t.has(e)||de("Cannot "+r),Ca=(e,t)=>Object(t)!==t?de('Cannot use the "in" operator on this value'):e.has(t),fr=(e,t,r)=>(Ct(e,t,"read from private field"),r?r.call(e):t.get(e)),Fa=(e,t,r)=>t.has(e)?de("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),_r=(e,t,r,n)=>(Ct(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Da=(e,t,r)=>(Ct(e,t,"access private method"),r),_o,dt,yo,te,Ft;const Ra=[["u1","o1"],["u1","o2"],["u42","o100"],["u42","o101"],["u42","o250"],["u7","o5"]],qa=["-1503622098384930114","6911453290184477201","-8410235776021639452","2287409312844011925","-4290117745509316688","409812277361002437"],yr=e=>{let t="";for(const r of new TextEncoder().encode(e))t+=r===0?"0001":r.toString(16).padStart(2,"0");return t},xo=Ra.map(([e,t],r)=>{const n=[{cls:"c c0",hex:yr(e)},{cls:"c c1",hex:yr(t)}];return{id:r,segments:[{text:`user_id:${e}`,sep:""},{text:`order_id:${t}`,sep:"/"}],murmur:qa[r],components:n,lexis:n.map(o=>o.hex+"0000").join("")}}),Na=[...xo].sort((e,t)=>BigInt(e.murmur)<BigInt(t.murmur)?-1:1),La=[...xo].sort((e,t)=>e.lexis<t.lexis?-1:e.lexis>t.lexis?1:0);yo=[ae({selector:"token-sort",directives:[ht,xe],template:`
        <div class="head">
            <span class="hk">partition key</span>
            <span class="hm" [class.on]="isBy('murmur')">murmur3 token</span>
            <span class="hl" [class.on]="isBy('lexis')">lexis token</span>
        </div>
        <div class="rows" rx-for="row of rows by id" flip="160 20"
             [class.by-lexis]="isBy('lexis')" [class.by-murmur]="isBy('murmur')">
            <div class="row"><span class="key" rx-for="s of row.segments"><span><b>{{s.sep}}</b>{{s.text}}</span></span><span class="m">{{row.murmur}}</span><span class="l" rx-for="c of row.components"><span><span [className]="c.cls">{{c.hex}}</span><span class="t">0000</span></span></span></div>
        </div>
        <div class="foot">
            <div class="seg">
                <button [class.on]="isBy('murmur')" onclick="byMurmur">sort by hash</button>
                <button [class.on]="isBy('lexis')" onclick="byLexis">sort by Lexis token</button>
            </div>
            <span class="legend"><i class="c0"></i>user_id <i class="c1"></i>order_id <i class="t"></i>terminator</span>
        </div>
    `,styles:Oa})];class we extends(dt=ie,_o=[W],dt){constructor(){super(...arguments),Fa(this,Ft,nt(te,8,this,"murmur")),nt(te,11,this),st(this,"stopAuto",new Ar),st(this,"auto")}get rows$(){return this.by$.pipe(j(t=>t==="murmur"?Na:La))}onInit(){this.auto=vt(4200).pipe(Nr(this.stopAuto)).subscribe(()=>{this.by=this.by==="murmur"?"lexis":"murmur"})}onDestroy(){this.auto?.unsubscribe()}isBy(t){return this.by$.pipe(j(r=>r===t))}byMurmur(){this.stopAuto.next(),this.by="murmur"}byLexis(){this.stopAuto.next(),this.by="lexis"}}te=Ea(dt);Ft=new WeakMap;fo(te,4,"by",_o,we,Ft);we=fo(te,0,"TokenSort",yo,we);st(we,"__stateTypes",{by:"By"});nt(te,1,we);var Ba=Object.create,Dt=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,Va=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),wo=e=>{throw TypeError(e)},Ha=(e,t,r)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ua=(e,t)=>Dt(e,"name",{value:t,configurable:!0}),Ga=e=>[,,,Ba(null)],ja=["class","method","getter","setter","accessor","field","value","get","set"],$o=e=>e!==void 0&&typeof e!="function"?wo("Function expected"):e,Ya=(e,t,r,n,o)=>({kind:ja[e],name:t,metadata:n,addInitializer:a=>r._?wo("Already initialized"):o.push($o(a||null))}),Xa=(e,t)=>Ha(t,Va("metadata"),e[3]),Ka=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)a[o].call(r);return n},Qa=(e,t,r,n,o,a)=>{var d,s,g,p=t&7,m=!1,i=0,f=e[i]||(e[i]=[]),l=p&&(o=o.prototype,p<5&&(p>3||!m)&&Wa(o,r));Ua(o,r);for(var u=n.length-1;u>=0;u--)g=Ya(p,r,s={},e[3],f),d=(0,n[u])(o,g),s._=1,$o(d)&&(o=d);return Xa(e,o),l&&Dt(o,r,l),m?p^4?a:l:o},ko,Rt;ko=[oe({selector:"[fall]"})];class We{node;onInit(){const t=(this.node.parentElement?.offsetHeight??0)+18;Ge(this.node,{y:[0,t],opacity:[0,1,1,0]},{duration:.55,ease:"easeIn"}).then(()=>this.node.dispatchEvent(new CustomEvent("landed")))}onDestroy(){}}Rt=Ga();We=Qa(Rt,0,"Fall",ko,We);Ka(Rt,1,We);var Za=Object.create,qt=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,en=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),So=e=>{throw TypeError(e)},tn=(e,t,r)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rn=(e,t)=>qt(e,"name",{value:t,configurable:!0}),on=e=>[,,,Za(null)],an=["class","method","getter","setter","accessor","field","value","get","set"],Mo=e=>e!==void 0&&typeof e!="function"?So("Function expected"):e,nn=(e,t,r,n,o)=>({kind:an[e],name:t,metadata:n,addInitializer:a=>r._?So("Already initialized"):o.push(Mo(a||null))}),sn=(e,t)=>tn(t,en("metadata"),e[3]),dn=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)a[o].call(r);return n},ln=(e,t,r,n,o,a)=>{var d,s,g,p=t&7,m=!1,i=0,f=e[i]||(e[i]=[]),l=p&&(o=o.prototype,p<5&&(p>3||!m)&&Ja(o,r));rn(o,r);for(var u=n.length-1;u>=0;u--)g=nn(p,r,s={},e[3],f),d=(0,n[u])(o,g),s._=1,Mo(d)&&(o=d);return sn(e,o),l&&qt(o,r,l),m?p^4?a:l:o},Io,Nt;Io=[oe({selector:"[pulse]"})];class Ve{node;bindingPath;sub;onInit(){this.sub=Cr(this.node,Fr(this.bindingPath?.raw??"")).pipe(qr(),Dr(1)).subscribe(()=>{Ge(this.node,{scaleY:[1.08,1]},{type:"spring",stiffness:500,damping:15})})}onDestroy(){this.sub?.unsubscribe()}}Nt=on();Ve=ln(Nt,0,"Pulse",Io,Ve);dn(Nt,1,Ve);var cn=Object.create,Lt=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,hn=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Oo=e=>{throw TypeError(e)},vn=(e,t,r)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,un=(e,t)=>Lt(e,"name",{value:t,configurable:!0}),bn=e=>[,,,cn(null)],gn=["class","method","getter","setter","accessor","field","value","get","set"],Po=e=>e!==void 0&&typeof e!="function"?Oo("Function expected"):e,mn=(e,t,r,n,o)=>({kind:gn[e],name:t,metadata:n,addInitializer:a=>r._?Oo("Already initialized"):o.push(Po(a||null))}),fn=(e,t)=>vn(t,hn("metadata"),e[3]),_n=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)a[o].call(r);return n},yn=(e,t,r,n,o,a)=>{var d,s,g,p=t&7,m=!1,i=0,f=e[i]||(e[i]=[]),l=p&&(o=o.prototype,p<5&&(p>3||!m)&&pn(o,r));un(o,r);for(var u=n.length-1;u>=0;u--)g=mn(p,r,s={},e[3],f),d=(0,n[u])(o,g),s._=1,Po(d)&&(o=d);return fn(e,o),l&&Lt(o,r,l),m?p^4?a:l:o},zo,Bt;zo=[oe({selector:"[hop]"})];class He{node;bindingPath;sub;onInit(){this.sub=Cr(this.node,Fr(this.bindingPath?.raw??"")).pipe(qr(),Dr(1)).subscribe(()=>{Ge(this.node,{y:[0,14,0]},{duration:.5})})}onDestroy(){this.sub?.unsubscribe()}}Bt=bn();He=yn(Bt,0,"Hop",zo,He);_n(Bt,1,He);const xn=`:host { display: block; position: relative; }
/* The ring's scale, laid flat under the bar: 256 ticks, a labelled major every 0x1000. */
:host > .ruler { position: relative; height: 1.5rem; margin-top: 3px; }
.ruler > .ticks, .ruler > .labels { display: contents; }
.ticks > i { position: absolute; top: 0; width: 1px; height: 4px; margin-left: -0.5px;
             background: rgba(240,232,237,0.22); }
.ticks > i.major { height: 9px; background: rgba(240,232,237,0.55); }
.labels > span { position: absolute; top: 12px; transform: translateX(-50%);
                font-family: var(--font-mono); font-size: 0.68rem; line-height: 1;
                font-weight: 400; letter-spacing: 0; color: var(--dim); white-space: nowrap; }
.sky { position: relative; height: 70px; }
.drop { position: absolute; top: 0; width: 6px; height: 6px; margin-left: -3px; border-radius: 50%;
        background: var(--accent); box-shadow: 0 0 10px var(--accent); }
.bar { position: relative; height: 64px; border-radius: 10px;
       background: rgba(0,0,0,0.25); border: var(--border-width) solid rgba(255,255,255,0.08); }
.tablet { position: absolute; top: 4px; bottom: 4px; border-radius: 7px; overflow: hidden;
          background: rgba(255,255,255,0.05); border: 1.5px solid var(--c);
          transition: left 0.6s cubic-bezier(0.22,1,0.36,1), width 0.6s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.6s; }
.tablet .fill { position: absolute; left: 0; right: 0; bottom: 0; height: 0%;
                background: linear-gradient(0deg, var(--c), transparent); opacity: 0.55;
                transition: height 0.25s ease; }
.tablet.hot { box-shadow: 0 0 24px -4px rgba(227,168,199,0.8); border-color: var(--rose); }
.tablet .tag { position: absolute; left: 6px; top: 4px; font-family: var(--font-mono);
               font-size: 0.6rem; color: var(--text); opacity: 0.8; white-space: nowrap; }
.shards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; margin-top: 1rem; }
.shard { border-radius: var(--radius); padding: 0.55rem 0.7rem; font-size: 0.72rem;
         background: rgba(255,255,255,0.03); border: var(--border-width) solid rgba(255,255,255,0.07);
         color: var(--muted); display: flex; flex-direction: column; gap: 0.35rem; }
.shard b { display: flex; align-items: center; gap: 0.4rem; font-weight: 500; color: var(--secondary); }
.shard b i { width: 8px; height: 8px; border-radius: 2px; background: var(--c); }
.meter { height: 4px; border-radius: 2px; background: rgba(255,255,255,0.06); overflow: hidden; }
.meter span { display: block; height: 100%; width: 0%; background: var(--c); transition: width 0.4s; }
.log { margin-top: 0.9rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent);
       min-height: 1.2rem; }
@media (max-width: 640px) {
    .shards { grid-template-columns: repeat(2, 1fr); }
    .labels > span.odd { display: none; }
    .tablet .tag { display: none; }
}
`;var wn=Object.create,Wt=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,Eo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),le=e=>{throw TypeError(e)},To=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xr=(e,t)=>Wt(e,"name",{value:t,configurable:!0}),kn=e=>[,,,wn(e?.[Eo("metadata")]??null)],Ao=["class","method","getter","setter","accessor","field","value","get","set"],_e=e=>e!==void 0&&typeof e!="function"?le("Function expected"):e,Sn=(e,t,r,n,o)=>({kind:Ao[e],name:t,metadata:n,addInitializer:a=>r._?le("Already initialized"):o.push(_e(a||null))}),Mn=(e,t)=>To(t,Eo("metadata"),e[3]),B=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)t&1?a[o].call(r):n=a[o].call(r,n);return n},ke=(e,t,r,n,o,a)=>{var d,s,g,p,m,i=t&7,f=!!(t&8),l=!!(t&16),u=i>3?e.length+1:i?f?1:2:0,x=Ao[i+5],E=i>3&&(e[u-1]=[]),C=e[u]||(e[u]=[]),h=i&&(!l&&!f&&(o=o.prototype),i<5&&(i>3||!l)&&$n(i<4?o:{get[r](){return wr(this,a)},set[r](c){return $r(this,a,c)}},r));i?l&&i<4&&xr(a,(i>2?"set ":i>1?"get ":"")+r):xr(o,r);for(var $=n.length-1;$>=0;$--)p=Sn(i,r,g={},e[3],C),i&&(p.static=f,p.private=l,m=p.access={has:l?c=>In(o,c):c=>r in c},i^3&&(m.get=l?c=>(i^1?wr:On)(c,o,i^4?a:h.get):c=>c[r]),i>2&&(m.set=l?(c,k)=>$r(c,o,k,i^4?a:h.set):(c,k)=>c[r]=k)),s=(0,n[$])(i?i<4?l?a:h[x]:i>4?void 0:{get:h.get,set:h.set}:o,p),g._=1,i^4||s===void 0?_e(s)&&(i>4?E.unshift(s):i?l?a=s:h[x]=s:o=s):typeof s!="object"||s===null?le("Object expected"):(_e(d=s.get)&&(h.get=d),_e(d=s.set)&&(h.set=d),_e(d=s.init)&&E.unshift(d));return i||Mn(e,o),h&&Wt(o,r,h),l?i^4?a:h:o},N=(e,t,r)=>To(e,typeof t!="symbol"?t+"":t,r),Vt=(e,t,r)=>t.has(e)||le("Cannot "+r),In=(e,t)=>Object(t)!==t?le('Cannot use the "in" operator on this value'):e.has(t),wr=(e,t,r)=>(Vt(e,t,"read from private field"),r?r.call(e):t.get(e)),Ae=(e,t,r)=>t.has(e)?le("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),$r=(e,t,r,n)=>(Vt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),On=(e,t,r)=>(Vt(e,t,"access private method"),r),Co,Fo,Do,Ro,lt,qo,A,Ht,Ut,Gt,jt;const he=["node 1 · shard 0","node 1 · shard 1","node 2 · shard 0","node 2 · shard 1"],kr=["#afc0d1","#8e9dba","#8786b0","#a08ab2"],Je=16,Pn=10,K=e=>`${String(e*100)}%`,zn=Array.from({length:257},(e,t)=>({left:K(t/256),major:t%16===0})),En=Array.from({length:15},(e,t)=>({left:K((t+1)/16),cls:(t+1)%2===0?"even":"odd",text:`${(t+1).toString(16).toUpperCase()}000`}));qo=[ae({selector:"tablet-split",directives:[ht,We,Ve,He],template:`
        <div class="sky" rx-for="d of drops by id">
            <div class="drop" [style.left]="d.left" fall onlanded="land(d.id)"></div>
        </div>
        <div class="bar" rx-for="t of tabletViews by id">
            <div class="tablet" [style]="t.css" [class.hot]="t.hot" pulse="t.hits" hop="t.moves"><div class="fill" [style.height]="t.fill"></div><span class="tag">{{t.tag}}</span></div>
        </div>
        <div class="ruler">
            <div class="ticks" rx-for="tick of ticks"><i [style.left]="tick.left" [class.major]="tick.major"></i></div>
            <div class="labels" rx-for="l of labels"><span [style.left]="l.left" [className]="l.cls">{{l.text}}</span></div>
        </div>
        <div class="shards" rx-for="s of shardViews by id">
            <div class="shard" [style]="s.css"><b><i></i>{{s.name}}</b><div class="meter"><span [style.width]="s.meter"></span></div><small>{{s.count}}</small></div>
        </div>
        <div class="log">{{log}}</div>
    `,styles:xn})];class U extends(lt=ie,Ro=[W],Do=[W],Fo=[W],Co=[W],lt){constructor(){super(...arguments),Ae(this,Ht,B(A,8,this,"writes arriving…")),B(A,11,this),Ae(this,Ut,B(A,12,this,[])),B(A,15,this),Ae(this,Gt,B(A,16,this,[])),B(A,19,this),Ae(this,jt,B(A,20,this,[])),B(A,23,this),N(this,"ticks",zn),N(this,"labels",En),N(this,"tablets",[]),N(this,"nextId",0),N(this,"hotspot",.3),N(this,"t",0),N(this,"splits",0),N(this,"visible",new ri(!1)),N(this,"subs",[]),N(this,"io")}onInit(){this.reset(),this.io=new IntersectionObserver(([t])=>{this.visible.next(!!t?.isIntersecting)}),this.io.observe(this),this.subs.push(this.visible.pipe(oi(t=>t?vt(140):ii)).subscribe(()=>this.step()))}onDestroy(){for(const t of this.subs)t.unsubscribe();this.io?.disconnect()}land(t){const r=this.drops.find(o=>o.id===t);if(this.drops=this.drops.filter(o=>o.id!==t),r===void 0)return;const n=this.tablets.find(o=>r.x>=o.start&&r.x<o.end);if(n){n.load++,n.hits++,n.load>=Je&&this.split(n);for(const o of this.tablets)o.load=Math.max(0,o.load-.04);this.render()}}reset(){this.tablets=[],this.add(0,.5,0,0),this.add(.5,1,2,0),this.render()}add(t,r,n,o){const a={id:this.nextId++,start:t,end:r,shard:n,load:o,hits:0,moves:0};return this.tablets.push(a),a}render(){this.tabletViews=this.tablets.map(n=>({id:n.id,css:`--c: ${kr[n.shard]}; left: ${K(n.start)}; width: ${K(n.end-n.start)};`,fill:`${String(Math.min(100,n.load/Je*100))}%`,hot:n.load>Je*.75,tag:`n${String((n.shard>>1)+1)}·s${String(n.shard&1)}`,hits:n.hits,moves:n.moves}));const t=he.map((n,o)=>this.tablets.filter(a=>a.shard===o)),r=Math.max(1,...t.map(n=>n.reduce((o,a)=>o+a.load,0)));this.shardViews=he.map((n,o)=>{const a=t[o],d=a.reduce((s,g)=>s+g.load,0);return{id:o,name:n,css:`--c: ${kr[o]};`,meter:K(d/r),count:`${String(a.length)} tablet${a.length===1?"":"s"}`}})}step(){this.t++,this.hotspot=.5+.38*Math.sin(this.t/90);const t=(Math.random()+Math.random()+Math.random())/3-.5,r=Math.min(.999,Math.max(0,this.hotspot+t*.7));this.drops=[...this.drops,{id:this.nextId++,x:r,left:K(r)}]}split(t){if(this.tablets.length>=Pn){this.log="cycle complete, starting over",this.reset();return}const r=(t.start+t.end)/2,n=he.map((g,p)=>this.tablets.filter(m=>m.shard===p).reduce((m,i)=>m+i.load,0));n[t.shard]=(n[t.shard]??0)+1e6,this.splits++,this.splits%2===0&&n.forEach((g,p)=>{p>>1===t.shard>>1&&(n[p]=1/0)});const o=n.indexOf(Math.min(...n)),a=this.add(r,t.end,t.shard,t.load/2);t.end=r,t.load/=2;const d=t.shard;this.subs.push(Or(380).subscribe(()=>{a.shard=o,a.moves++,this.render()}));const s=g=>Math.round(g*255).toString(16).padStart(2,"0").toUpperCase();this.log=`split [${s(t.start)}, ${s(a.end)}) at ${s(r)} → migrate [${s(r)}, ${s(a.end)}) from ${he[d]} to ${he[o]}`}}A=kn(lt);Ht=new WeakMap;Ut=new WeakMap;Gt=new WeakMap;jt=new WeakMap;ke(A,4,"log",Ro,U,Ht);ke(A,4,"drops",Do,U,Ut);ke(A,4,"tabletViews",Fo,U,Gt);ke(A,4,"shardViews",Co,U,jt);U=ke(A,0,"TabletSplit",qo,U);N(U,"__stateTypes",{log:"string",drops:"Array",tabletViews:"Array",shardViews:"Array"});B(A,1,U);const Tn=`:host { display: block; min-height: 100vh; }
.compare { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
           gap: 1.25rem; margin-top: 2.5rem; }
.compare > .pane { padding: 1.75rem; border-radius: 18px; position: relative; overflow: hidden;
        background: rgba(255,255,255,0.03); border: var(--border-width) solid rgba(255,255,255,0.08); }
.compare > .pane.new { background: linear-gradient(160deg, rgba(212,176,230,0.12), rgba(175,192,209,0.04));
            border-color: rgba(212,176,230,0.3); }
.pane > h3 { color: var(--white); font-size: 1.3rem; font-weight: 500; margin: 0.9rem 0 0.6rem; }
.pane > p { font-size: 0.98rem; margin: 0 0 1.5rem; }
.pane > .pill { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
        padding: 0.25rem 0.6rem; border-radius: 999px; color: var(--muted);
        border: var(--border-width) solid rgba(255,255,255,0.15); }
.pane > .pill.on { color: #2c0b22; background: var(--accent); border-color: var(--accent); }
.pane > .ring { width: 150px; height: 150px; border-radius: 50%; margin: 0 auto; position: relative;
        background: conic-gradient(var(--red) 0 40deg, var(--steel) 40deg 220deg,
                    var(--red) 220deg 250deg, var(--indigo) 250deg 360deg);
        -webkit-mask: radial-gradient(circle, transparent 52%, #000 53%);
        mask: radial-gradient(circle, transparent 52%, #000 53%);
        animation: spin 30s linear infinite; opacity: 0.8; }
@keyframes spin { to { transform: rotate(360deg); } }
.pane > .lanes { display: flex; flex-direction: column; gap: 0.55rem; }
.lanes > div { display: flex; gap: 4px; height: 22px; }
.lanes > div > i { display: block; border-radius: 5px; background: var(--sky); opacity: 0.85;
           animation: breathe 6s ease-in-out infinite; }
.lanes > div > i:nth-child(2) { background: var(--steel); animation-delay: -1.5s; }
.lanes > div > i:nth-child(3) { background: var(--indigo); animation-delay: -3s; }
.lanes > div > i:nth-child(4) { background: var(--lilac); animation-delay: -4.5s; }
@keyframes breathe { 50% { opacity: 0.45; } }

.body > .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
        gap: 1rem; margin-top: 0.5rem; }
.grid > .feat { padding: 1.5rem; border-radius: 16px; background: rgba(255,255,255,0.03);
        border: var(--border-width) solid rgba(255,255,255,0.07);
        transition: border-color 0.3s, transform 0.3s, background 0.3s; }
.grid > .feat:hover { border-color: rgba(212,176,230,0.45); background: rgba(212,176,230,0.06);
              transform: translateY(-3px); }
.feat > h4 { margin: 0 0 0.5rem; color: var(--white); font-size: 1.08rem; font-weight: 500; }
.feat > p { font-size: 0.95rem; line-height: 1.6; margin: 0 0 1rem; }
.feat > code { display: inline-block; font-size: 0.8rem; }
.body > .more { margin-top: 2rem; background: none; border: none; color: var(--accent); font-size: 1rem; padding: 0; }
.body > .more:hover { color: var(--white); }

:host > .final { text-align: center; padding: 6rem 2rem 7rem; max-width: 900px; margin: 0 auto; }
.final > h2 { font-size: clamp(2.2rem, 5vw, 3.6rem); letter-spacing: -0.03em; margin: 0 0 2rem;
            color: var(--white); font-weight: 700; }
.final > .cmd { display: inline-block; font-family: var(--font-mono); font-size: 1.05rem; color: var(--text);
       padding: 1rem 1.4rem; border-radius: var(--radius-lg); background: rgba(10,2,8,0.5);
       border: var(--border-width) solid rgba(255,255,255,0.1); margin-bottom: 2rem; max-width: 100%;
       overflow-x: auto; white-space: nowrap; }
.cmd > .p { color: var(--sky); margin-right: 0.6rem; }
.final > .buttons { display: flex; gap: 0.9rem; justify-content: center; flex-wrap: wrap; }
.buttons > button { font-size: 1rem; padding: 0.8rem 1.5rem; border-radius: 999px; font-weight: 500; }
.buttons > .primary { background: linear-gradient(135deg, #e3c3f0, #afc0d1); color: #2c0b22; border: none;
           box-shadow: 0 10px 30px -10px rgba(212,176,230,0.7); }
.buttons > .ghost { background: rgba(255,255,255,0.04); color: var(--text);
         border: var(--border-width) solid rgba(255,255,255,0.16); }
.buttons > .ghost:hover { border-color: var(--accent); }
`;var An=Object.create,Yt=Object.defineProperty,Cn=Object.getOwnPropertyDescriptor,No=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Se=e=>{throw TypeError(e)},Lo=(e,t,r)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Sr=(e,t)=>Yt(e,"name",{value:t,configurable:!0}),Fn=e=>[,,,An(e?.[No("metadata")]??null)],Bo=["class","method","getter","setter","accessor","field","value","get","set"],ye=e=>e!==void 0&&typeof e!="function"?Se("Function expected"):e,Dn=(e,t,r,n,o)=>({kind:Bo[e],name:t,metadata:n,addInitializer:a=>r._?Se("Already initialized"):o.push(ye(a||null))}),Rn=(e,t)=>Lo(t,No("metadata"),e[3]),ct=(e,t,r,n)=>{for(var o=0,a=e[t>>1],d=a&&a.length;o<d;o++)t&1?a[o].call(r):n=a[o].call(r,n);return n},Wo=(e,t,r,n,o,a)=>{var d,s,g,p,m,i=t&7,f=!!(t&8),l=!!(t&16),u=i>3?e.length+1:i?f?1:2:0,x=Bo[i+5],E=i>3&&(e[u-1]=[]),C=e[u]||(e[u]=[]),h=i&&(!l&&!f&&(o=o.prototype),i<5&&(i>3||!l)&&Cn(i<4?o:{get[r](){return Mr(this,a)},set[r](c){return Ir(this,a,c)}},r));i?l&&i<4&&Sr(a,(i>2?"set ":i>1?"get ":"")+r):Sr(o,r);for(var $=n.length-1;$>=0;$--)p=Dn(i,r,g={},e[3],C),i&&(p.static=f,p.private=l,m=p.access={has:l?c=>Nn(o,c):c=>r in c},i^3&&(m.get=l?c=>(i^1?Mr:Ln)(c,o,i^4?a:h.get):c=>c[r]),i>2&&(m.set=l?(c,k)=>Ir(c,o,k,i^4?a:h.set):(c,k)=>c[r]=k)),s=(0,n[$])(i?i<4?l?a:h[x]:i>4?void 0:{get:h.get,set:h.set}:o,p),g._=1,i^4||s===void 0?ye(s)&&(i>4?E.unshift(s):i?l?a=s:h[x]=s:o=s):typeof s!="object"||s===null?Se("Object expected"):(ye(d=s.get)&&(h.get=d),ye(d=s.set)&&(h.set=d),ye(d=s.init)&&E.unshift(d));return i||Rn(e,o),h&&Yt(o,r,h),l?i^4?a:h:o},qn=(e,t,r)=>Lo(e,t+"",r),Xt=(e,t,r)=>t.has(e)||Se("Cannot "+r),Nn=(e,t)=>Object(t)!==t?Se('Cannot use the "in" operator on this value'):e.has(t),Mr=(e,t,r)=>(Xt(e,t,"read from private field"),r?r.call(e):t.get(e)),Ir=(e,t,r,n)=>(Xt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Ln=(e,t,r)=>(Xt(e,t,"access private method"),r),Vo,pt,Ho,re;Ho=[ae({selector:"home-page",providers:[ai,{provide:ni,useValue:"/overview"}],directives:[Rr,si,di],template:`
        <hero-section></hero-section>

        <story-section toc-section="idea" toc-anchor="idea" eyebrow="01 · the idea" heading="Partitions, stored in key order.">
            <p>In Lexis the token of a partition <strong>is</strong> its key, encoded so that
               byte order is key order. Partitions that share a prefix are stored together,
               so a query on the start of a key reads one contiguous range of tablets.</p>
            <p>Pick a query and see where its rows live, hashed or ordered.</p>
            <div class="card"><partition-viz></partition-viz></div>
        </story-section>

        <story-section toc-section="token" toc-anchor="token" eyebrow="02 · the token" heading="The token is the key, byte for byte.">
            <p>Each partition key component is written out as order-preserving bytes
               and closed with a <code>00 00</code> terminator, so <code>memcmp</code>
               on two tokens gives the same answer as comparing the keys. Text is its
               UTF-8 bytes. Integers, varints, decimals and timestamps get encodings that
               sort in CQL order, negatives included. In cqlsh and the drivers,
               <code>token()</code> is a blob.</p>
            <div class="card"><token-sort></token-sort></div>
        </story-section>

        <story-section toc-section="tablets" toc-anchor="tablets" eyebrow="03 · the constraint" heading="Ordered partitioning, made for tablets.">
            <p>Ordered partitioning on a single cluster-global token ring meant one set of
               boundaries had to suit every table. Tablets give each table its own
               independent mapping, so every table is balanced on its own keys.</p>
            <div class="compare">
                <div class="pane old" motion-reveal="0.05">
                    <span class="pill">vnodes</span>
                    <h3>One ring for every table</h3>
                    <p>Token boundaries are shared across the cluster. Ordered keys from
                       different tables pile into different parts of the same ring.</p>
                    <div class="ring"></div>
                </div>
                <div class="pane new" motion-reveal="0.15">
                    <span class="pill on">tablets</span>
                    <h3>A mapping per table</h3>
                    <p>Each table has its own token-range-to-node-and-core mapping. There is no
                       shared ring, so one table's distribution can't unbalance another's.</p>
                    <div class="lanes">
                        <div><i style="width:18%"></i><i style="width:22%"></i><i style="width:35%"></i><i style="width:25%"></i></div>
                        <div><i style="width:40%"></i><i style="width:12%"></i><i style="width:20%"></i><i style="width:28%"></i></div>
                        <div><i style="width:25%"></i><i style="width:25%"></i><i style="width:15%"></i><i style="width:35%"></i></div>
                    </div>
                </div>
            </div>
        </story-section>

        <story-section toc-section="hotspots" toc-anchor="hotspots" eyebrow="04 · hotspots" heading="Hot tablets split and move.">
            <p>The tablet load balancer splits a hot tablet and migrates the halves, down to a
               specific core on a specific node. A high-entropy leading key component spreads
               writes across the key space; whatever concentration remains is handled by
               splitting, with no schema changes.</p>
            <div class="card"><tablet-split></tablet-split></div>
        </story-section>

        <story-section toc-section="queries" toc-anchor="queries" eyebrow="05 · what you get" heading="Partial keys become range reads.">
            <p>Queries that would need secondary indexes become efficient range reads, routed to a
               bounded set of nodes and cores. The query model gets substantially more expressive,
               with no sacrifice in distribution or performance.</p>
            <div class="grid">
                <div class="feat" motion-reveal="0">
                    <h4>Partial partition key queries</h4>
                    <p>Name the start of a partition key, get every partition under it as one
                       contiguous range, in key order.</p>
                    <code>WHERE user_id = 'u42'</code>
                </div>
                <div class="feat" motion-reveal="0.08">
                    <h4>Ranges on contiguous partition key columns, beginning at the first column</h4>
                    <p>Range over users without naming one, or page through one user's orders,
                       with no full-cluster scatter.</p>
                    <code>WHERE user_id &gt; 'u1'</code>
                </div>
                <div class="feat" motion-reveal="0.16">
                    <h4>IN, then a range</h4>
                    <p>Several prefixes at once, each ending in a range: one bounded read per prefix.</p>
                    <code>user_id IN ('u1','u42') AND order_id &gt; 'o1'</code>
                </div>
                <div class="feat" motion-reveal="0.24">
                    <h4>LIMIT means first</h4>
                    <p>A LIMIT on a full scan returns the first keys of the table, in order.</p>
                    <code>SELECT * FROM user_orders LIMIT 2</code>
                </div>
                <div class="feat" motion-reveal="0.32">
                    <h4>Simpler data models</h4>
                    <p>For range-ordered access patterns, secondary indexes and denormalized
                       tables become unnecessary. One table, keyed by parent then child.</p>
                    <code>PRIMARY KEY ((user_id, order_id))</code>
                </div>
                <div class="feat" motion-reveal="0.4">
                    <h4>Routed by the drivers</h4>
                    <p>The Python and Rust drivers compute Lexis tokens on the client and send each
                       query to the node and shard that own it.</p>
                    <code>token() → blob</code>
                </div>
                <div class="feat" motion-reveal="0.48">
                    <h4>One and/or two-sided ranges</h4>
                    <p>Bound a range at either end, or both: everything below a key, or a window
                       of one user's orders.</p>
                    <code>order_id &gt;= 'o100' AND order_id &lt; 'o200'</code>
                </div>
                <div class="feat" motion-reveal="0.64">
                    <h4>Typed key order, ASC or DESC</h4>
                    <p>Every scalar key type sorts and ranges as CQL compares it, and each key column
                       can be ASC or DESC.</p>
                    <code>PARTITION ORDER BY (order_id DESC)</code>
                </div>
            </div>
            <button class="more" onclick="toExamples">See every query, with results →</button>
        </story-section>

        <story-section toc-section="prior-art" toc-anchor="prior-art" eyebrow="06 · prior art" heading="Bigtable's query model on modern hardware.">
            <p>Lexicographic order, per-table tablets and dynamic splitting are the model Google
               Bigtable has offered since 2004. Lexis brings it to a per-core, shared-nothing
               architecture, where a tablet split moves work to a specific core on a specific node:
               a finer granularity of load balancing than anything else available.</p>
            <p>Together they make something new in open source distributed databases:
               <strong>Bigtable's query model on modern hardware.</strong></p>
        </story-section>

        <section class="final" motion-reveal>
            <h2>Try it on one node.</h2>
            <div class="cmd"><span class="p">$</span> docker run --name lexisdb -d 0x6a6f6e6e79/lexisdb</div>
            <div class="buttons">
                <button class="primary" onclick="toInstall">Installation guide</button>
                <button class="ghost" onclick="toExamples">Examples</button>
            </div>
        </section>

        <site-footer></site-footer>
    `,styles:Tn})];class Ue extends(pt=ie,Vo=[Er(Tr)],pt){constructor(){super(...arguments),qn(this,"router",ct(re,8,this)),ct(re,11,this)}toInstall(){this.router.navigate("/install")}toExamples(){this.router.navigate("/examples")}}re=Fn(pt);Wo(re,5,"router",Vo,Ue);Ue=Wo(re,0,"HomePage",Ho,Ue);ct(re,1,Ue);export{Ue as HomePage};
