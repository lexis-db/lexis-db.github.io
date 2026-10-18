import{D as Jr,R as re,I as rr,a as or,C as oe,c as Y}from"./lexis-logo.component-BxhodInO.js";import{M as ir,a as j,T as eo,b as to,c as ro}from"./site-footer.component-BGYMMwMu.js";import{m as Ue}from"./map-DVfgpDne.js";import"./blob-CbDcr2Fw.js";var oo=Object.create,it=Object.defineProperty,io=Object.getOwnPropertyDescriptor,so=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),sr=t=>{throw TypeError(t)},ao=(t,e,r)=>e in t?it(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,no=(t,e)=>it(t,"name",{value:e,configurable:!0}),lo=t=>[,,,oo(null)],co=["class","method","getter","setter","accessor","field","value","get","set"],ar=t=>t!==void 0&&typeof t!="function"?sr("Function expected"):t,ho=(t,e,r,o,i)=>({kind:co[t],name:e,metadata:o,addInitializer:a=>r._?sr("Already initialized"):i.push(ar(a||null))}),po=(t,e)=>ao(e,so("metadata"),t[3]),go=(t,e,r,o)=>{for(var i=0,a=t[e>>1],l=a&&a.length;i<l;i++)a[i].call(r);return o},mo=(t,e,r,o,i,a)=>{var l,n,x,m=e&7,f=!1,s=0,w=t[s]||(t[s]=[]),d=m&&(i=i.prototype,m<5&&(m>3||!f)&&io(i,r));no(i,r);for(var y=o.length-1;y>=0;y--)x=ho(m,r,n={},t[3],w),l=(0,o[y])(i,x),n._=1,ar(l)&&(i=l);return po(t,i),d&&it(i,r,d),f?m^4?a:d:i},nr,st;const Ee=5,De=12,uo=20,vo=64,bo=3.8,fo=24,yo=40,_o=.013,Fe=["175,192,209","142,157,186","160,138,178","212,176,230","226,170,196"],xo=t=>Math.floor((t%1+1)%1*65536).toString(16).toUpperCase().padStart(4,"0"),X=t=>(t%1+1)%1,ce=(t,e)=>{let r=X(e)-X(t);return r>.5&&(r-=1),r<-.5&&(r+=1),r};nr=[Jr({selector:"[token-ring-bg]"})];class Te{node;canvas;frame=0;ro;onMove;onInit(){const e=this.node,r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;",e.appendChild(r),this.canvas=r;const o=r.getContext("2d");if(!o)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let a=0,l=0,n=1;const x=()=>{n=Math.min(window.devicePixelRatio||1,2),a=e.clientWidth,l=e.clientHeight,r.width=Math.round(a*n),r.height=Math.round(l*n)};this.ro=new ResizeObserver(x),this.ro.observe(e),x();let m=0,f=0,s=0,w=0;this.onMove=p=>{s=(p.clientX/window.innerWidth-.5)*2,w=(p.clientY/window.innerHeight-.5)*2},window.addEventListener("pointermove",this.onMove);let d=[];for(let p=0;p<De;p++){const u=X((p+(Math.random()-.5)*.5)/De);d.push({start:u,owner:p%Ee,shownStart:u,shownEnd:u,born:-1e9,dying:0})}d.sort((p,u)=>p.start-u.start);const y=()=>d.filter(p=>p.dying===0),O=p=>{const u=y(),v=u.indexOf(p);let z=u[(v+1)%u.length].start;return z<=p.start&&(z+=1),z};for(const p of d)p.shownEnd=O(p);const b=[];for(let p=0;p<32;p++){const u=Array.from({length:2+Math.floor(Math.random()*12)},()=>({born:-1e9}));b.push({pos:X((p+.2+Math.random()*.6)/32),rows:u})}b.sort((p,u)=>p.pos-u.pos);const C=(p,u)=>{const v=O(p),S=u<p.start?u+1:u;return S>=p.start&&S<v},h=p=>y().find(u=>C(u,p)),$=p=>b.filter(u=>C(p,u.pos)),c=p=>$(p).reduce((u,v)=>u+v.rows.length,0);let k=Math.random();const we=p=>1-Math.pow(1-Math.min(1,Math.max(0,p)),3),Ur=p=>{k=X(k+8e-4);const u=X(k+(Math.random()-.5)*.24);let v=b[0],S=2;for(const M of b){const I=Math.abs(ce(M.pos,u));I<S&&(S=I,v=M)}if(S>_o*1.5&&Math.random()<.25){if(b.push({pos:u,rows:[{born:p}]}),b.sort((M,I)=>M.pos-I.pos),b.length>yo){let M=0;b.forEach((I,E)=>{I.rows.length<b[M].rows.length&&(M=E)}),b.splice(M,1)}}else v.rows.length<fo&&v.rows.push({born:p});const z=b[Math.floor(Math.random()*b.length)];z.rows.length>2&&Math.random()<.6&&z.rows.shift()},Xr=p=>{const u=y(),v=u.reduce((S,z)=>!S||c(z)>c(S)?z:S,void 0);if(v&&c(v)>vo&&u.length<uo){const S=$(v);if(S.length>=2){const z=P=>P<v.start?P+1:P;S.sort((P,T)=>z(P.pos)-z(T.pos));const M=Math.floor(S.length/2),I=X((z(S[M-1].pos)+z(S[M].pos))/2),E=Array.from({length:Ee},(P,T)=>u.reduce((g,_)=>g+(_.owner===T?c(_):0),0));E[v.owner]=1/0;const K=E.indexOf(Math.min(...E)),F=O(v);d.push({start:I,owner:K,shownStart:I,shownEnd:F,born:p,dying:0}),d.sort((P,T)=>P.start-T.start);return}}if(u.length>De&&Math.random()<.5){let S=u[0],z=1/0;for(let M=0;M<u.length;M++){const I=u[(M+1)%u.length],E=c(u[M])+c(I);E<z&&(z=E,S=I)}S.dying=p}},Re=Array.from({length:Ee},(p,u)=>{const v=u/Ee*Math.PI*2;return{x:Math.cos(v)*.3,y:Math.sin(v)*.3,vx:0,vy:0}}),Yr=p=>{const u=y();Re.forEach((v,S)=>{let z=0,M=0,I=0;for(const T of u){if(T.owner!==S)continue;const _=(T.start+O(T))/2*Math.PI*2-Math.PI/2+p;z+=Math.cos(_),M+=Math.sin(_),I++}const E=I?.5:0,K=I?z/I*E:0,F=I?M/I*E:0;v.vx+=(K-v.x)*.004,v.vy+=(F-v.y)*.004,Re.forEach((T,g)=>{if(g===S)return;const _=v.x-T.x,q=v.y-T.y,A=Math.max(.004,_*_+q*q);v.vx+=_/A*45e-5,v.vy+=q/A*45e-5});const P=Math.hypot(v.x,v.y);P>.55&&(v.vx-=v.x*(P-.55)*.05,v.vy-=v.y*(P-.55)*.05),v.vx*=.72,v.vy*=.72,v.x+=v.vx,v.y+=v.vy})};let Mt=0,It=0,Et=performance.now();const Qr=performance.now(),zt=p=>{const u=(p-Qr)/1e3,v=Math.min(.05,(p-Et)/1e3);Et=p,!i&&p-Mt>90&&(Mt=p,Ur(p)),!i&&p-It>1900&&(It=p,Xr(p)),d=d.filter(g=>g.dying===0||p-g.dying<1e3);const S=1-Math.pow(.02,v);for(const g of y()){g.shownStart+=ce(g.shownStart,g.start)*S;const _=O(g);g.shownEnd+=ce(g.shownEnd,_)*S}m+=(s-m)*.04,f+=(w-f)*.04;const z=a<900,M=(z?a*.5:a*.67)+m*14,I=l*.55+f*10,E=Math.min(z?a*.34:a*.28,l*.33),K=i?0:u*.01,F=g=>g*Math.PI*2-Math.PI/2+K,P=(g,_)=>[M+Math.cos(F(g))*_,I+Math.sin(F(g))*_];i||Yr(K);const T=Re.map(g=>[M+g.x*E,I+g.y*E]);o.setTransform(n,0,0,n,0,0),o.clearRect(0,0,a,l),o.globalAlpha=z?.45:1,o.textAlign="center",o.textBaseline="middle",o.lineWidth=1,o.strokeStyle="rgba(240,232,237,0.12)",o.beginPath(),o.arc(M,I,E,0,Math.PI*2),o.stroke();for(let g=0;g<256;g++){const _=g%16===0,[q,A]=P(g/256,E-(_?10:4)),[L,R]=P(g/256,E);o.strokeStyle=`rgba(240,232,237,${_?.4:.1})`,o.beginPath(),o.moveTo(q,A),o.lineTo(L,R),o.stroke()}o.font="600 12px 'Ubuntu Mono', ui-monospace, monospace",o.fillStyle="rgba(240,232,237,0.5)";for(let g=0;g<16;g++){const[_,q]=P(g/16,E-24);o.fillText(`${g.toString(16).toUpperCase()}000`,_,q)}for(const g of d){const _=Fe[g.owner],q=we((p-g.born)/900),A=g.dying?1-we((p-g.dying)/1e3):1,L=q*A,R=g.shownStart;let G=g.shownEnd;G<=R&&(G+=1),o.lineCap="butt",o.lineWidth=5,o.strokeStyle=`rgba(${_},${.6*L})`,o.beginPath(),o.arc(M,I,E+4,F(R)+.006,F(G)-.006),o.stroke();const[ke,$e]=T[g.owner];o.lineWidth=1.1,o.strokeStyle=`rgba(${_},${.32*L})`;for(const jr of[R+.003,G-.003]){const[Ot,Pt]=P(jr,E-52),Tt=(ke+Ot)/2,Ct=($e+Pt)/2,Vr=Tt+(M-Tt)*.3,Zr=Ct+(I-Ct)*.3;o.beginPath(),o.moveTo(ke,$e),o.quadraticCurveTo(Vr,Zr,Ot,Pt),o.stroke()}const[Ne,Se]=P(R,E-52),[Me,le]=P(R,E+9);o.strokeStyle=`rgba(255,255,255,${.5*L})`,o.lineWidth=1.2,o.beginPath(),o.moveTo(Ne,Se),o.lineTo(Me,le),o.stroke();const[Ie,Kr]=P(R,E-40);o.font="700 11px 'Ubuntu Mono', ui-monospace, monospace",o.fillStyle=`rgba(${_},${.95*L})`,o.fillText(xo(R),Ie,Kr)}b.forEach((g,_)=>{const q=b[(_-1+b.length)%b.length],A=b[(_+1)%b.length],L=Math.min(Math.abs(ce(q.pos,g.pos)),Math.abs(ce(g.pos,A.pos))),R=Math.min(.011,L*.42)*Math.PI*2,G=F(g.pos),ke=Fe[h(g.pos)?.owner??0];g.rows.forEach((Se,Me)=>{const le=we((p-Se.born)/500),Ie=1-we((p-Se.born)/1500);o.lineWidth=2,o.lineCap="round",o.strokeStyle=Ie>.01?`rgba(255,255,255,${(.4+.55*Ie)*le})`:`rgba(${ke},${.62-Me*.012})`,o.beginPath(),o.arc(M,I,E+14+Me*bo,G-R*le,G+R*le),o.stroke()});const[$e,Ne]=P(g.pos,E+4);o.fillStyle="rgba(255,255,255,0.85)",o.beginPath(),o.arc($e,Ne,1.8,0,Math.PI*2),o.fill()}),T.forEach(([g,_],q)=>{const A=Fe[q],L=o.createRadialGradient(g,_,0,g,_,30);L.addColorStop(0,`rgba(${A},0.5)`),L.addColorStop(1,`rgba(${A},0)`),o.fillStyle=L,o.beginPath(),o.arc(g,_,30,0,Math.PI*2),o.fill(),o.fillStyle=`rgba(${A},1)`,o.beginPath(),o.arc(g,_,4.5,0,Math.PI*2),o.fill()}),o.globalAlpha=1,i||(this.frame=requestAnimationFrame(zt))};this.frame=requestAnimationFrame(zt)}onDestroy(){cancelAnimationFrame(this.frame),this.ro?.disconnect(),this.onMove&&window.removeEventListener("pointermove",this.onMove),this.canvas?.remove()}}st=lo();Te=mo(st,0,"TokenRingBg",nr,Te);go(st,1,Te);var wo=Object.create,at=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,lr=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),_e=t=>{throw TypeError(t)},cr=(t,e,r)=>e in t?at(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,qt=(t,e)=>at(t,"name",{value:e,configurable:!0}),$o=t=>[,,,wo(t?.[lr("metadata")]??null)],dr=["class","method","getter","setter","accessor","field","value","get","set"],he=t=>t!==void 0&&typeof t!="function"?_e("Function expected"):t,So=(t,e,r,o,i)=>({kind:dr[t],name:e,metadata:o,addInitializer:a=>r._?_e("Already initialized"):i.push(he(a||null))}),Mo=(t,e)=>cr(e,lr("metadata"),t[3]),Xe=(t,e,r,o)=>{for(var i=0,a=t[e>>1],l=a&&a.length;i<l;i++)e&1?a[i].call(r):o=a[i].call(r,o);return o},hr=(t,e,r,o,i,a)=>{var l,n,x,m,f,s=e&7,w=!!(e&8),d=!!(e&16),y=s>3?t.length+1:s?w?1:2:0,O=dr[s+5],b=s>3&&(t[y-1]=[]),C=t[y]||(t[y]=[]),h=s&&(!d&&!w&&(i=i.prototype),s<5&&(s>3||!d)&&ko(s<4?i:{get[r](){return Lt(this,a)},set[r](c){return Rt(this,a,c)}},r));s?d&&s<4&&qt(a,(s>2?"set ":s>1?"get ":"")+r):qt(i,r);for(var $=o.length-1;$>=0;$--)m=So(s,r,x={},t[3],C),s&&(m.static=w,m.private=d,f=m.access={has:d?c=>Io(i,c):c=>r in c},s^3&&(f.get=d?c=>(s^1?Lt:Eo)(c,i,s^4?a:h.get):c=>c[r]),s>2&&(f.set=d?(c,k)=>Rt(c,i,k,s^4?a:h.set):(c,k)=>c[r]=k)),n=(0,o[$])(s?s<4?d?a:h[O]:s>4?void 0:{get:h.get,set:h.set}:i,m),x._=1,s^4||n===void 0?he(n)&&(s>4?b.unshift(n):s?d?a=n:h[O]=n:i=n):typeof n!="object"||n===null?_e("Object expected"):(he(l=n.get)&&(h.get=l),he(l=n.set)&&(h.set=l),he(l=n.init)&&b.unshift(l));return s||Mo(t,i),h&&at(i,r,h),d?s^4?a:h:i},At=(t,e,r)=>cr(t,typeof e!="symbol"?e+"":e,r),nt=(t,e,r)=>e.has(t)||_e("Cannot "+r),Io=(t,e)=>Object(e)!==e?_e('Cannot use the "in" operator on this value'):t.has(e),Lt=(t,e,r)=>(nt(t,e,"read from private field"),r?r.call(t):e.get(t)),Rt=(t,e,r,o)=>(nt(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),Eo=(t,e,r)=>(nt(t,e,"access private method"),r),pr,Ye,gr,V;const zo=835/1024;gr=[oe({selector:"hero-section",directives:[Te],template:`
        <div class="bg" token-ring-bg></div>
        <div class="shade"></div>
        <div class="hero">
            <lexis-logo class="logo"></lexis-logo>
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
    `,styles:`
        :host { display: flex; align-items: center; min-height: 100vh; padding: 7rem 2.5rem 5rem;
                position: relative; overflow: hidden; }
        :host > .bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
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
    `})];class Ce extends(Ye=re,pr=[rr(or)],Ye){constructor(){super(...arguments),At(this,"router",Xe(V,8,this)),Xe(V,11,this),At(this,"ro")}onInit(){const e=this.querySelector(".hero > .logo"),r=this.querySelector(".hero > .copy"),o=window.matchMedia("(max-width: 1000px)"),i=()=>{const a=o.matches?140:r.offsetHeight;e.style.height=`${String(a)}px`,e.style.width=`${String(a*zo)}px`};this.ro=new ResizeObserver(i),this.ro.observe(r),i()}onDestroy(){this.ro?.disconnect()}toInstall(){this.router.navigate("/install")}toExamples(){this.router.navigate("/examples")}}V=$o(Ye);hr(V,5,"router",pr,Ce);Ce=hr(V,0,"HeroSection",gr,Ce);Xe(V,1,Ce);var Oo=Object.create,lt=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,mr=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ie=t=>{throw TypeError(t)},ur=(t,e,r)=>e in t?lt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Nt=(t,e)=>lt(t,"name",{value:e,configurable:!0}),To=t=>[,,,Oo(t?.[mr("metadata")]??null)],vr=["class","method","getter","setter","accessor","field","value","get","set"],pe=t=>t!==void 0&&typeof t!="function"?ie("Function expected"):t,Co=(t,e,r,o,i)=>({kind:vr[t],name:e,metadata:o,addInitializer:a=>r._?ie("Already initialized"):i.push(pe(a||null))}),qo=(t,e)=>ur(e,mr("metadata"),t[3]),ge=(t,e,r,o)=>{for(var i=0,a=t[e>>1],l=a&&a.length;i<l;i++)e&1?a[i].call(r):o=a[i].call(r,o);return o},ct=(t,e,r,o,i,a)=>{var l,n,x,m,f,s=e&7,w=!!(e&8),d=!!(e&16),y=s>3?t.length+1:s?w?1:2:0,O=vr[s+5],b=s>3&&(t[y-1]=[]),C=t[y]||(t[y]=[]),h=s&&(!d&&!w&&(i=i.prototype),s<5&&(s>3||!d)&&Po(s<4?i:{get[r](){return Dt(this,a)},set[r](c){return Wt(this,a,c)}},r));s?d&&s<4&&Nt(a,(s>2?"set ":s>1?"get ":"")+r):Nt(i,r);for(var $=o.length-1;$>=0;$--)m=Co(s,r,x={},t[3],C),s&&(m.static=w,m.private=d,f=m.access={has:d?c=>Lo(i,c):c=>r in c},s^3&&(f.get=d?c=>(s^1?Dt:Ro)(c,i,s^4?a:h.get):c=>c[r]),s>2&&(f.set=d?(c,k)=>Wt(c,i,k,s^4?a:h.set):(c,k)=>c[r]=k)),n=(0,o[$])(s?s<4?d?a:h[O]:s>4?void 0:{get:h.get,set:h.set}:i,m),x._=1,s^4||n===void 0?pe(n)&&(s>4?b.unshift(n):s?d?a=n:h[O]=n:i=n):typeof n!="object"||n===null?ie("Object expected"):(pe(l=n.get)&&(h.get=l),pe(l=n.set)&&(h.set=l),pe(l=n.init)&&b.unshift(l));return s||qo(t,i),h&&lt(i,r,h),d?s^4?a:h:i},Ao=(t,e,r)=>ur(t,e+"",r),dt=(t,e,r)=>e.has(t)||ie("Cannot "+r),Lo=(t,e)=>Object(e)!==e?ie('Cannot use the "in" operator on this value'):t.has(e),Dt=(t,e,r)=>(dt(t,e,"read from private field"),r?r.call(t):e.get(t)),Ft=(t,e,r)=>e.has(t)?ie("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Wt=(t,e,r,o)=>(dt(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),Ro=(t,e,r)=>(dt(t,e,"access private method"),r),br,fr,Qe,yr,W,ht,pt;yr=[oe({selector:"story-section",directives:[ir],template:`
        <section>
            <div class="text" motion-reveal>
                <span class="eyebrow">{{eyebrow}}</span>
                <h2>{{heading}}</h2>
                <div class="body"><slot></slot></div>
            </div>
        </section>
    `,styles:`
        :host { display: block; max-width: 1100px; margin: 0 auto; padding: 6rem 2rem; }
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
    `})];class Z extends(Qe=re,fr=[Y],br=[Y],Qe){constructor(){super(...arguments),Ft(this,ht,ge(W,8,this,"")),ge(W,11,this),Ft(this,pt,ge(W,12,this,"")),ge(W,15,this)}}W=To(Qe);ht=new WeakMap;pt=new WeakMap;ct(W,4,"eyebrow",fr,Z,ht);ct(W,4,"heading",br,Z,pt);Z=ct(W,0,"StorySection",yr,Z);Ao(Z,"__stateTypes",{eyebrow:"string",heading:"string"});ge(W,1,Z);var No=Object.create,gt=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,_r=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),se=t=>{throw TypeError(t)},xr=(t,e,r)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ht=(t,e)=>gt(t,"name",{value:e,configurable:!0}),Fo=t=>[,,,No(t?.[_r("metadata")]??null)],wr=["class","method","getter","setter","accessor","field","value","get","set"],me=t=>t!==void 0&&typeof t!="function"?se("Function expected"):t,Wo=(t,e,r,o,i)=>({kind:wr[t],name:e,metadata:o,addInitializer:a=>r._?se("Already initialized"):i.push(me(a||null))}),Ho=(t,e)=>xr(e,_r("metadata"),t[3]),U=(t,e,r,o)=>{for(var i=0,a=t[e>>1],l=a&&a.length;i<l;i++)e&1?a[i].call(r):o=a[i].call(r,o);return o},Le=(t,e,r,o,i,a)=>{var l,n,x,m,f,s=e&7,w=!!(e&8),d=!!(e&16),y=s>3?t.length+1:s?w?1:2:0,O=wr[s+5],b=s>3&&(t[y-1]=[]),C=t[y]||(t[y]=[]),h=s&&(!d&&!w&&(i=i.prototype),s<5&&(s>3||!d)&&Do(s<4?i:{get[r](){return Bt(this,a)},set[r](c){return Gt(this,a,c)}},r));s?d&&s<4&&Ht(a,(s>2?"set ":s>1?"get ":"")+r):Ht(i,r);for(var $=o.length-1;$>=0;$--)m=Wo(s,r,x={},t[3],C),s&&(m.static=w,m.private=d,f=m.access={has:d?c=>Bo(i,c):c=>r in c},s^3&&(f.get=d?c=>(s^1?Bt:Go)(c,i,s^4?a:h.get):c=>c[r]),s>2&&(f.set=d?(c,k)=>Gt(c,i,k,s^4?a:h.set):(c,k)=>c[r]=k)),n=(0,o[$])(s?s<4?d?a:h[O]:s>4?void 0:{get:h.get,set:h.set}:i,m),x._=1,s^4||n===void 0?me(n)&&(s>4?b.unshift(n):s?d?a=n:h[O]=n:i=n):typeof n!="object"||n===null?se("Object expected"):(me(l=n.get)&&(h.get=l),me(l=n.set)&&(h.set=l),me(l=n.init)&&b.unshift(l));return s||Ho(t,i),h&&gt(i,r,h),d?s^4?a:h:i},H=(t,e,r)=>xr(t,typeof e!="symbol"?e+"":e,r),mt=(t,e,r)=>e.has(t)||se("Cannot "+r),Bo=(t,e)=>Object(e)!==e?se('Cannot use the "in" operator on this value'):t.has(e),Bt=(t,e,r)=>(mt(t,e,"read from private field"),r?r.call(t):e.get(t)),We=(t,e,r)=>e.has(t)?se("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Gt=(t,e,r,o)=>(mt(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),Go=(t,e,r)=>(mt(t,e,"access private method"),r),kr,$r,Sr,Ke,Mr,D,ut,vt,bt;const He=["collection/c1/d1","collection/c1/d2","collection/c42/d100","collection/c42/d101","collection/c42/d250","collection/c7/d3","collection/c9/d8","orders/o1/i1","orders/o1/i2","users/u2/p4","users/u7/p1","users/u7/p2"],Uo=[3,10,6,0,8,2,11,5,1,9,4,7],qe=3,je=4,B=2,Ut=[{label:"coll = 'collection' AND colid = 'c42'",prefix:"collection/c42/"},{label:"coll = 'collection'",prefix:"collection/"},{label:"coll = 'users'",prefix:"users/"}],ze=(t,e)=>{if(t==="murmur")return Uo.indexOf(e);const r=Math.floor(e/B),o=r%qe,i=Math.floor(r/qe);return o*je+i*B+e%B},Xo=t=>t.split("/")[0];Mr=[oe({selector:"partition-viz",template:`
        <div class="controls">
            <div class="seg">
                <button [class.on]="isMode('murmur')" onclick="setMurmur">Hashed · Murmur3</button>
                <button [class.on]="isMode('lexis')" onclick="setLexis">Ordered · Lexis</button>
            </div>
            <div class="queries">
                <span class="qlabel">WHERE</span>
                <button class="q" [class.on]="isQuery('0')" onclick="query0">coll = 'collection' AND colid = 'c42'</button>
                <button class="q" [class.on]="isQuery('1')" onclick="query1">coll = 'collection'</button>
                <button class="q" [class.on]="isQuery('2')" onclick="query2">coll = 'users'</button>
            </div>
        </div>
        <div class="stage"></div>
        <div class="verdict" [class.bad]="isMode('murmur')">
            <span class="dot"></span><span>{{verdict}}</span>
        </div>
    `,styles:`
        :host { display: block; position: relative; }
        .controls { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between;
                    align-items: center; margin-bottom: 1.25rem; }
        .seg { display: inline-flex; padding: 4px; border-radius: 999px;
               background: rgba(0,0,0,0.25); border: var(--border-width) solid rgba(255,255,255,0.08); }
        .seg button { background: none; border: none; color: var(--muted); padding: 0.5rem 1rem;
                      border-radius: 999px; font-size: 0.85rem; transition: background 0.25s, color 0.25s; }
        .seg button.on { background: rgba(255,255,255,0.1); color: var(--white);
                         box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12); }
        .queries { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; }
        .qlabel { font-family: var(--font-mono); color: var(--dim); font-size: 0.8rem; margin-right: 0.2rem; }
        .q { font-family: var(--font-mono); font-size: 0.78rem; color: var(--secondary);
             background: rgba(255,255,255,0.03); border: var(--border-width) solid rgba(255,255,255,0.1);
             padding: 0.35rem 0.65rem; border-radius: var(--radius); }
        .q.on { color: var(--white); border-color: var(--accent); background: rgba(212,176,230,0.12); }

        .stage { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .node { position: relative; border-radius: var(--radius-lg); padding: 3.1rem 0.75rem 0.75rem;
                background: rgba(20,4,16,0.45); border: var(--border-width) solid rgba(255,255,255,0.07);
                transition: border-color 0.4s, box-shadow 0.4s; }
        .node.scan { border-color: rgba(142,157,186,0.55); box-shadow: 0 0 0 1px rgba(142,157,186,0.25), 0 0 40px -12px rgba(142,157,186,0.6); }
        .node-label { position: absolute; top: 0.8rem; left: 0.9rem; font-size: 0.72rem;
                      letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim); }
        .node-label b { color: var(--secondary); font-weight: 500; }
        .slot { height: 2.6rem; margin-bottom: 0.45rem; border-radius: var(--radius);
                border: 1px dashed rgba(255,255,255,0.05); }
        .slot:nth-child(2n+1):not(:first-child) { }
        .tablet { position: absolute; left: 0.4rem; right: 0.4rem; border-radius: 10px;
                  border: 1px solid rgba(175,192,209,0.0); pointer-events: none;
                  transition: border-color 0.5s, background 0.5s, box-shadow 0.5s, opacity 0.5s; opacity: 0; }
        .tablet .tl { position: absolute; top: -0.55rem; right: 0.6rem; font-size: 0.62rem;
                      font-family: var(--font-mono); color: var(--sky); background: var(--bg-2);
                      padding: 0 0.35rem; border-radius: 4px; letter-spacing: 0.04em; }
        .lexis .tablet { opacity: 1; border-color: rgba(175,192,209,0.28); }
        .lexis .tablet.hit { border-color: rgba(212,176,230,0.9); background: rgba(212,176,230,0.07);
                             box-shadow: 0 0 30px -8px rgba(212,176,230,0.7); }

        .chip { position: absolute; top: 0; left: 0; height: 2.6rem; display: flex; align-items: center;
                gap: 0.55rem; padding: 0 0.75rem; border-radius: var(--radius);
                font-family: var(--font-mono); font-size: 0.85rem; color: var(--text);
                background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
                border: var(--border-width) solid rgba(255,255,255,0.1);
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis; will-change: transform;
                transition: opacity 0.4s, border-color 0.4s, box-shadow 0.4s, background 0.4s; }
        .chip i { width: 8px; height: 8px; border-radius: 50%; flex: none; }
        .chip.g-collection i { background: var(--sky); }
        .chip.g-orders i { background: var(--indigo); }
        .chip.g-users i { background: var(--lilac); }
        .chip.dim { opacity: 0.32; }
        .chip.hit { border-color: rgba(212,176,230,0.85); color: var(--white);
                    background: linear-gradient(180deg, rgba(212,176,230,0.28), rgba(212,176,230,0.12));
                    box-shadow: 0 6px 24px -8px rgba(212,176,230,0.8); }

        .verdict { margin-top: 1.25rem; display: flex; align-items: center; gap: 0.7rem;
                   font-size: 0.98rem; color: var(--secondary); min-height: 1.6rem; }
        .verdict .dot { width: 10px; height: 10px; border-radius: 50%; background: var(--green);
                        box-shadow: 0 0 12px var(--green); flex: none; transition: background 0.3s, box-shadow 0.3s; }
        .verdict.bad .dot { background: var(--steel); box-shadow: 0 0 12px var(--steel); }
        @media (max-width: 720px) {
            .stage { gap: 0.4rem; }
            .node { padding: 2.9rem 0.3rem 0.3rem; }
            .chip { font-size: 0.62rem; padding: 0 0.35rem; gap: 0.3rem; }
            .chip i { width: 6px; height: 6px; }
            .tablet .tl { display: none; }
        }
    `})];class Q extends(Ke=re,Sr=[Y],$r=[Y],kr=[Y],Ke){constructor(){super(...arguments),We(this,ut,U(D,8,this,"murmur")),U(D,11,this),We(this,vt,U(D,12,this,0)),U(D,15,this),We(this,bt,U(D,16,this,"")),U(D,19,this),H(this,"stage"),H(this,"nodes",[]),H(this,"slots",[]),H(this,"chips",[]),H(this,"tablets",[]),H(this,"auto",0),H(this,"ro")}onInit(){this.stage=this.querySelector(".stage"),this.stage.replaceChildren();for(let e=0;e<qe;e++){const r=document.createElement("div");r.className="node",r.innerHTML=`<span class="node-label">node <b>${String(e+1)}</b></span>`;for(let o=0;o<je;o++){const i=document.createElement("div");i.className="slot",r.appendChild(i),this.slots.push(i)}this.stage.appendChild(r),this.nodes.push(r)}for(let e=0;e<He.length/B;e++){const r=document.createElement("div");r.className="tablet",r.innerHTML=`<span class="tl">tablet ${String(e)}</span>`,this.stage.appendChild(r),this.tablets.push(r)}for(const e of He){const r=document.createElement("div");r.className=`chip g-${Xo(e)}`,r.innerHTML=`<i></i>${e}`,this.stage.appendChild(r),this.chips.push(r)}this.ro=new ResizeObserver(()=>this.layout(!1)),this.ro.observe(this.stage),this.layout(!1),this.mode$.subscribe(()=>this.layout(!0)),this.queryIndex$.subscribe(()=>this.highlight()),this.startAuto()}onDestroy(){clearInterval(this.auto),this.ro?.disconnect()}isMode(e){return this.mode$.pipe(Ue(r=>r===e))}isQuery(e){return this.queryIndex$.pipe(Ue(r=>String(r)===e))}setMurmur(){this.stopAuto(),this.mode="murmur"}setLexis(){this.stopAuto(),this.mode="lexis"}query0(){this.stopAuto(),this.queryIndex=0}query1(){this.stopAuto(),this.queryIndex=1}query2(){this.stopAuto(),this.queryIndex=2}startAuto(){let e=0;this.auto=window.setInterval(()=>{e++,e%2===0&&(this.queryIndex=(this.queryIndex+1)%Ut.length),this.mode=this.mode==="murmur"?"lexis":"murmur"},3800)}stopAuto(){clearInterval(this.auto)}slotRect(e){const r=e.parentElement;return{x:r.offsetLeft+e.offsetLeft,y:r.offsetTop+e.offsetTop,w:e.offsetWidth,h:e.offsetHeight}}layout(e){if(this.slots.length===0)return;const r=this.mode;this.stage.classList.toggle("lexis",r==="lexis"),this.chips.forEach((o,i)=>{const a=this.slotRect(this.slots[ze(r,i)]);o.style.width=`${String(a.w)}px`,e?j(o,{x:a.x,y:a.y},{type:"spring",stiffness:170,damping:22,mass:.9,delay:i*.025}):j(o,{x:a.x,y:a.y},{duration:0})}),this.tablets.forEach((o,i)=>{const a=this.slotRect(this.slots[ze("lexis",i*B)]),l=this.slotRect(this.slots[ze("lexis",i*B+B-1)]),n=5;o.style.left=`${String(a.x-n)}px`,o.style.width=`${String(a.w+n*2)}px`,o.style.top=`${String(a.y-n)}px`,o.style.height=`${String(l.y+l.h-a.y+n*2)}px`}),this.highlight()}highlight(){if(this.chips.length===0)return;const{prefix:e}=Ut[this.queryIndex],r=He.map(l=>l.startsWith(e));this.chips.forEach((l,n)=>{l.classList.toggle("hit",r[n]),l.classList.toggle("dim",!r[n])});const o=new Set;r.forEach((l,n)=>{l&&o.add(Math.floor(n/B))}),this.tablets.forEach((l,n)=>l.classList.toggle("hit",o.has(n)));const i=this.mode==="murmur";this.nodes.forEach(l=>l.classList.toggle("scan",i));const a=r.filter(Boolean).length;if(i){const l=new Set;r.forEach((n,x)=>{n&&l.add(Math.floor(ze("murmur",x)/je))}),this.verdict=`Hashed by the whole path: ${String(a)} matches spread over ${String(l.size)} of ${String(qe)} nodes.`}else{const l=o.size;this.verdict=`Ordered by path: ${String(a)} matches in one contiguous range, ${String(l)} adjacent tablet${l===1?"":"s"}, read in key order.`}}}D=Fo(Ke);ut=new WeakMap;vt=new WeakMap;bt=new WeakMap;Le(D,4,"mode",Sr,Q,ut);Le(D,4,"queryIndex",$r,Q,vt);Le(D,4,"verdict",kr,Q,bt);Q=Le(D,0,"PartitionViz",Mr,Q);H(Q,"__stateTypes",{mode:"Mode",queryIndex:"number",verdict:"string"});U(D,1,Q);var Yo=Object.create,ft=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Ir=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ae=t=>{throw TypeError(t)},Er=(t,e,r)=>e in t?ft(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Xt=(t,e)=>ft(t,"name",{value:e,configurable:!0}),Ko=t=>[,,,Yo(t?.[Ir("metadata")]??null)],zr=["class","method","getter","setter","accessor","field","value","get","set"],ue=t=>t!==void 0&&typeof t!="function"?ae("Function expected"):t,jo=(t,e,r,o,i)=>({kind:zr[t],name:e,metadata:o,addInitializer:a=>r._?ae("Already initialized"):i.push(ue(a||null))}),Vo=(t,e)=>Er(e,Ir("metadata"),t[3]),Ve=(t,e,r,o)=>{for(var i=0,a=t[e>>1],l=a&&a.length;i<l;i++)e&1?a[i].call(r):o=a[i].call(r,o);return o},Or=(t,e,r,o,i,a)=>{var l,n,x,m,f,s=e&7,w=!!(e&8),d=!!(e&16),y=s>3?t.length+1:s?w?1:2:0,O=zr[s+5],b=s>3&&(t[y-1]=[]),C=t[y]||(t[y]=[]),h=s&&(!d&&!w&&(i=i.prototype),s<5&&(s>3||!d)&&Qo(s<4?i:{get[r](){return Yt(this,a)},set[r](c){return Qt(this,a,c)}},r));s?d&&s<4&&Xt(a,(s>2?"set ":s>1?"get ":"")+r):Xt(i,r);for(var $=o.length-1;$>=0;$--)m=jo(s,r,x={},t[3],C),s&&(m.static=w,m.private=d,f=m.access={has:d?c=>Zo(i,c):c=>r in c},s^3&&(f.get=d?c=>(s^1?Yt:ei)(c,i,s^4?a:h.get):c=>c[r]),s>2&&(f.set=d?(c,k)=>Qt(c,i,k,s^4?a:h.set):(c,k)=>c[r]=k)),n=(0,o[$])(s?s<4?d?a:h[O]:s>4?void 0:{get:h.get,set:h.set}:i,m),x._=1,s^4||n===void 0?ue(n)&&(s>4?b.unshift(n):s?d?a=n:h[O]=n:i=n):typeof n!="object"||n===null?ae("Object expected"):(ue(l=n.get)&&(h.get=l),ue(l=n.set)&&(h.set=l),ue(l=n.init)&&b.unshift(l));return s||Vo(t,i),h&&ft(i,r,h),d?s^4?a:h:i},Pe=(t,e,r)=>Er(t,typeof e!="symbol"?e+"":e,r),yt=(t,e,r)=>e.has(t)||ae("Cannot "+r),Zo=(t,e)=>Object(e)!==e?ae('Cannot use the "in" operator on this value'):t.has(e),Yt=(t,e,r)=>(yt(t,e,"read from private field"),r?r.call(t):e.get(t)),Jo=(t,e,r)=>e.has(t)?ae("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Qt=(t,e,r,o)=>(yt(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),ei=(t,e,r)=>(yt(t,e,"access private method"),r),Pr,Ze,Tr,J,_t;const Oe=[["collection","c1","d1"],["collection","c1","d2"],["collection","c42","d100"],["collection","c42","d101"],["collection","c42","d250"],["users","u7","p1"]],Be=["-1503622098384930114","6911453290184477201","-8410235776021639452","2287409312844011925","-4290117745509316688","409812277361002437"],Je=t=>{const e=[];for(const r of new TextEncoder().encode(t))r===0?e.push("00","01"):e.push(r.toString(16).padStart(2,"0"));return e},ti=t=>t.map((e,r)=>`<span class="c c${String(r)}">${Je(e).join("")}</span><span class="t">0000</span>`).join(""),ri=(t,e)=>{const r=t.map(i=>Je(i).join("")+"0000").join(""),o=e.map(i=>Je(i).join("")+"0000").join("");return r<o?-1:r>o?1:0};Tr=[oe({selector:"token-sort",template:`
        <div class="head">
            <span class="hk">partition key</span>
            <span class="hm" [class.on]="isBy('murmur')">murmur3 token</span>
            <span class="hl" [class.on]="isBy('lexis')">lexis token</span>
        </div>
        <div class="rows"></div>
        <div class="foot">
            <div class="seg">
                <button [class.on]="isBy('murmur')" onclick="byMurmur">sort by hash</button>
                <button [class.on]="isBy('lexis')" onclick="byLexis">sort by Lexis token</button>
            </div>
            <span class="legend"><i class="c0"></i>coll <i class="c1"></i>colid <i class="c2"></i>docid <i class="t"></i>terminator</span>
        </div>
    `,styles:`
        :host { display: block; font-family: var(--font-mono); }
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
    `})];class fe extends(Ze=re,Pr=[Y],Ze){constructor(){super(...arguments),Jo(this,_t,Ve(J,8,this,"murmur")),Ve(J,11,this),Pe(this,"rowsEl"),Pe(this,"rows",[]),Pe(this,"auto",0)}onInit(){this.rowsEl=this.querySelector(".rows"),Oe.forEach((e,r)=>{const o=document.createElement("div");o.className="row",o.innerHTML=`<span class="key">${e.join("<b>/</b>")}</span><span class="m">${Be[r]}</span><span class="l">${ti(e)}</span>`,this.rows.push(o)}),this.by$.subscribe(e=>this.sort(e)),this.auto=window.setInterval(()=>{this.by=this.by==="murmur"?"lexis":"murmur"},4200)}onDestroy(){clearInterval(this.auto)}isBy(e){return this.by$.pipe(Ue(r=>r===e))}byMurmur(){clearInterval(this.auto),this.by="murmur"}byLexis(){clearInterval(this.auto),this.by="lexis"}sort(e){const r=Oe.map((i,a)=>a);e==="murmur"?r.sort((i,a)=>BigInt(Be[i])<BigInt(Be[a])?-1:1):r.sort((i,a)=>ri(Oe[i],Oe[a]));const o=new Map(this.rows.map(i=>[i,i.getBoundingClientRect().top]));for(const i of r)this.rowsEl.appendChild(this.rows[i]);this.rowsEl.classList.toggle("by-lexis",e==="lexis"),this.rowsEl.classList.toggle("by-murmur",e==="murmur");for(const i of this.rows){const a=o.get(i),l=a-i.getBoundingClientRect().top;a!==0&&l!==0&&j(i,{y:[l,0]},{type:"spring",stiffness:160,damping:20})}}}J=Ko(Ze);_t=new WeakMap;Or(J,4,"by",Pr,fe,_t);fe=Or(J,0,"TokenSort",Tr,fe);Pe(fe,"__stateTypes",{by:"By"});Ve(J,1,fe);var oi=Object.create,xt=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,Cr=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),ne=t=>{throw TypeError(t)},qr=(t,e,r)=>e in t?xt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Kt=(t,e)=>xt(t,"name",{value:e,configurable:!0}),si=t=>[,,,oi(t?.[Cr("metadata")]??null)],Ar=["class","method","getter","setter","accessor","field","value","get","set"],ve=t=>t!==void 0&&typeof t!="function"?ne("Function expected"):t,ai=(t,e,r,o,i)=>({kind:Ar[t],name:e,metadata:o,addInitializer:a=>r._?ne("Already initialized"):i.push(ve(a||null))}),ni=(t,e)=>qr(e,Cr("metadata"),t[3]),et=(t,e,r,o)=>{for(var i=0,a=t[e>>1],l=a&&a.length;i<l;i++)e&1?a[i].call(r):o=a[i].call(r,o);return o},Lr=(t,e,r,o,i,a)=>{var l,n,x,m,f,s=e&7,w=!!(e&8),d=!!(e&16),y=s>3?t.length+1:s?w?1:2:0,O=Ar[s+5],b=s>3&&(t[y-1]=[]),C=t[y]||(t[y]=[]),h=s&&(!d&&!w&&(i=i.prototype),s<5&&(s>3||!d)&&ii(s<4?i:{get[r](){return jt(this,a)},set[r](c){return Vt(this,a,c)}},r));s?d&&s<4&&Kt(a,(s>2?"set ":s>1?"get ":"")+r):Kt(i,r);for(var $=o.length-1;$>=0;$--)m=ai(s,r,x={},t[3],C),s&&(m.static=w,m.private=d,f=m.access={has:d?c=>li(i,c):c=>r in c},s^3&&(f.get=d?c=>(s^1?jt:di)(c,i,s^4?a:h.get):c=>c[r]),s>2&&(f.set=d?(c,k)=>Vt(c,i,k,s^4?a:h.set):(c,k)=>c[r]=k)),n=(0,o[$])(s?s<4?d?a:h[O]:s>4?void 0:{get:h.get,set:h.set}:i,m),x._=1,s^4||n===void 0?ve(n)&&(s>4?b.unshift(n):s?d?a=n:h[O]=n:i=n):typeof n!="object"||n===null?ne("Object expected"):(ve(l=n.get)&&(h.get=l),ve(l=n.set)&&(h.set=l),ve(l=n.init)&&b.unshift(l));return s||ni(t,i),h&&xt(i,r,h),d?s^4?a:h:i},N=(t,e,r)=>qr(t,typeof e!="symbol"?e+"":e,r),wt=(t,e,r)=>e.has(t)||ne("Cannot "+r),li=(t,e)=>Object(e)!==e?ne('Cannot use the "in" operator on this value'):t.has(e),jt=(t,e,r)=>(wt(t,e,"read from private field"),r?r.call(t):e.get(t)),ci=(t,e,r)=>e.has(t)?ne("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Vt=(t,e,r,o)=>(wt(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),di=(t,e,r)=>(wt(t,e,"access private method"),r),Rr,tt,Nr,ee,kt;const de=["node 1 · shard 0","node 1 · shard 1","node 2 · shard 0","node 2 · shard 1"],Zt=["#afc0d1","#8e9dba","#8786b0","#a08ab2"],Ge=16,hi=10;Nr=[oe({selector:"tablet-split",template:`
        <div class="sky"></div>
        <div class="bar"></div>
        <div class="ruler"></div>
        <div class="shards"></div>
        <div class="log">{{log}}</div>
    `,styles:`
        :host { display: block; position: relative; }
        /* The ring's scale, laid flat under the bar: 256 ticks, a labelled major every 0x1000. */
        :host > .ruler { position: relative; height: 1.5rem; margin-top: 3px; }
        .ruler > i { position: absolute; top: 0; width: 1px; height: 4px; margin-left: -0.5px;
                     background: rgba(240,232,237,0.22); }
        .ruler > i.major { height: 9px; background: rgba(240,232,237,0.55); }
        .ruler > span { position: absolute; top: 12px; transform: translateX(-50%);
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
            .ruler > span.odd { display: none; }
            .tablet .tag { display: none; }
        }
    `})];class ye extends(tt=re,Rr=[Y],tt){constructor(){super(...arguments),ci(this,kt,et(ee,8,this,"writes arriving…")),et(ee,11,this),N(this,"tablets",[]),N(this,"bar"),N(this,"sky"),N(this,"meters",[]),N(this,"counts",[]),N(this,"timer",0),N(this,"hotspot",.3),N(this,"t",0),N(this,"splits",0),N(this,"visible",!1),N(this,"io")}onInit(){this.bar=this.querySelector(".bar"),this.sky=this.querySelector(".sky");const e=this.querySelector(".ruler");for(let o=0;o<=256;o++){const i=document.createElement("i");if(i.style.left=`${String(o/256*100)}%`,o%16===0&&(i.className="major"),e.appendChild(i),o%16===0&&o>0&&o<256){const a=document.createElement("span");a.style.left=`${String(o/256*100)}%`,a.className=o/16%2===0?"even":"odd",a.textContent=`${(o/16).toString(16).toUpperCase()}000`,e.appendChild(a)}}const r=this.querySelector(".shards");de.forEach((o,i)=>{const a=document.createElement("div");a.className="shard",a.style.setProperty("--c",Zt[i]),a.innerHTML=`<b><i></i>${o}</b><div class="meter"><span></span></div><small>0 tablets</small>`,r.appendChild(a),this.meters.push(a.querySelector(".meter span")),this.counts.push(a.querySelector("small"))}),this.reset(),this.io=new IntersectionObserver(([o])=>{this.visible=!!o?.isIntersecting}),this.io.observe(this),this.timer=window.setInterval(()=>{this.visible&&this.step()},140)}onDestroy(){clearInterval(this.timer),this.io?.disconnect()}reset(){for(const e of this.tablets)e.el.remove();this.tablets=[],this.add(0,.5,0,0),this.add(.5,1,2,0),this.render()}add(e,r,o,i){const a=document.createElement("div");a.className="tablet",a.innerHTML='<div class="fill"></div><span class="tag"></span>',this.bar.appendChild(a);const l={start:e,end:r,shard:o,load:i,el:a};return this.tablets.push(l),l}render(){for(const o of this.tablets)o.el.style.left=`${String(o.start*100)}%`,o.el.style.width=`${String((o.end-o.start)*100)}%`,o.el.style.setProperty("--c",Zt[o.shard]),o.el.firstElementChild.style.height=`${String(Math.min(100,o.load/Ge*100))}%`,o.el.classList.toggle("hot",o.load>Ge*.75),o.el.lastElementChild.textContent=`n${String((o.shard>>1)+1)}·s${String(o.shard&1)}`;const e=de.map((o,i)=>this.tablets.filter(a=>a.shard===i)),r=Math.max(1,...e.map(o=>o.reduce((i,a)=>i+a.load,0)));e.forEach((o,i)=>{const a=o.reduce((l,n)=>l+n.load,0);this.meters[i].style.width=`${String(a/r*100)}%`,this.counts[i].textContent=`${String(o.length)} tablet${o.length===1?"":"s"}`})}step(){this.t++,this.hotspot=.5+.38*Math.sin(this.t/90);const e=(Math.random()+Math.random()+Math.random())/3-.5,r=Math.min(.999,Math.max(0,this.hotspot+e*.35));this.drop(r)}drop(e){const r=document.createElement("div");r.className="drop",r.style.left=`${String(e*100)}%`,this.sky.appendChild(r);const o=this.sky.offsetHeight+18;j(r,{y:[0,o],opacity:[0,1,1,0]},{duration:.55,ease:"easeIn"}).then(()=>{r.remove();const i=this.tablets.find(a=>e>=a.start&&e<a.end);i&&(i.load++,j(i.el,{scaleY:[1.08,1]},{type:"spring",stiffness:500,damping:15}),i.load>=Ge&&this.split(i),this.decay(),this.render())})}decay(){for(const e of this.tablets)e.load=Math.max(0,e.load-.04)}split(e){if(this.tablets.length>=hi){this.log="cycle complete, starting over",this.reset();return}const r=(e.start+e.end)/2,o=de.map((x,m)=>this.tablets.filter(f=>f.shard===m).reduce((f,s)=>f+s.load,0));o[e.shard]=(o[e.shard]??0)+1e6,this.splits++,this.splits%2===0&&o.forEach((x,m)=>{m>>1===e.shard>>1&&(o[m]=1/0)});const i=o.indexOf(Math.min(...o)),a=this.add(r,e.end,e.shard,e.load/2);e.end=r,e.load/=2,this.render();const l=e.shard;window.setTimeout(()=>{a.shard=i,this.render(),j(a.el,{y:[0,14,0]},{duration:.5})},380);const n=x=>Math.round(x*255).toString(16).padStart(2,"0").toUpperCase();this.log=`split [${n(e.start)}, ${n(a.end)}) at ${n(r)} → migrate [${n(r)}, ${n(a.end)}) from ${de[l]} to ${de[i]}`}}ee=si(tt);kt=new WeakMap;Lr(ee,4,"log",Rr,ye,kt);ye=Lr(ee,0,"TabletSplit",Nr,ye);N(ye,"__stateTypes",{log:"string"});et(ee,1,ye);var pi=Object.create,$t=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,Dr=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),xe=t=>{throw TypeError(t)},Fr=(t,e,r)=>e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Jt=(t,e)=>$t(t,"name",{value:e,configurable:!0}),mi=t=>[,,,pi(t?.[Dr("metadata")]??null)],Wr=["class","method","getter","setter","accessor","field","value","get","set"],be=t=>t!==void 0&&typeof t!="function"?xe("Function expected"):t,ui=(t,e,r,o,i)=>({kind:Wr[t],name:e,metadata:o,addInitializer:a=>r._?xe("Already initialized"):i.push(be(a||null))}),vi=(t,e)=>Fr(e,Dr("metadata"),t[3]),rt=(t,e,r,o)=>{for(var i=0,a=t[e>>1],l=a&&a.length;i<l;i++)e&1?a[i].call(r):o=a[i].call(r,o);return o},Hr=(t,e,r,o,i,a)=>{var l,n,x,m,f,s=e&7,w=!!(e&8),d=!!(e&16),y=s>3?t.length+1:s?w?1:2:0,O=Wr[s+5],b=s>3&&(t[y-1]=[]),C=t[y]||(t[y]=[]),h=s&&(!d&&!w&&(i=i.prototype),s<5&&(s>3||!d)&&gi(s<4?i:{get[r](){return er(this,a)},set[r](c){return tr(this,a,c)}},r));s?d&&s<4&&Jt(a,(s>2?"set ":s>1?"get ":"")+r):Jt(i,r);for(var $=o.length-1;$>=0;$--)m=ui(s,r,x={},t[3],C),s&&(m.static=w,m.private=d,f=m.access={has:d?c=>fi(i,c):c=>r in c},s^3&&(f.get=d?c=>(s^1?er:yi)(c,i,s^4?a:h.get):c=>c[r]),s>2&&(f.set=d?(c,k)=>tr(c,i,k,s^4?a:h.set):(c,k)=>c[r]=k)),n=(0,o[$])(s?s<4?d?a:h[O]:s>4?void 0:{get:h.get,set:h.set}:i,m),x._=1,s^4||n===void 0?be(n)&&(s>4?b.unshift(n):s?d?a=n:h[O]=n:i=n):typeof n!="object"||n===null?xe("Object expected"):(be(l=n.get)&&(h.get=l),be(l=n.set)&&(h.set=l),be(l=n.init)&&b.unshift(l));return s||vi(t,i),h&&$t(i,r,h),d?s^4?a:h:i},bi=(t,e,r)=>Fr(t,e+"",r),St=(t,e,r)=>e.has(t)||xe("Cannot "+r),fi=(t,e)=>Object(e)!==e?xe('Cannot use the "in" operator on this value'):t.has(e),er=(t,e,r)=>(St(t,e,"read from private field"),r?r.call(t):e.get(t)),tr=(t,e,r,o)=>(St(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r),yi=(t,e,r)=>(St(t,e,"access private method"),r),Br,ot,Gr,te;Gr=[oe({selector:"home-page",providers:[eo],directives:[ir,to,ro],template:`
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
                    <h4>Prefix scans</h4>
                    <p>Name the start of a partition key, get every partition under it as one
                       contiguous range, in key order.</p>
                    <code>WHERE coll = 'collection'</code>
                </div>
                <div class="feat" motion-reveal="0.08">
                    <h4>Ranges on the last component</h4>
                    <p>Page through a collection, or take a range of collections, with no
                       full-cluster scatter.</p>
                    <code>AND docid &gt; 'd100' LIMIT 2</code>
                </div>
                <div class="feat" motion-reveal="0.16">
                    <h4>IN, then a range</h4>
                    <p>Several prefixes at once, each ending in a range: one bounded read per prefix.</p>
                    <code>colid IN ('c1','c42') AND docid &gt; 'd1'</code>
                </div>
                <div class="feat" motion-reveal="0.24">
                    <h4>LIMIT means first</h4>
                    <p>A LIMIT on a full scan returns the first keys of the table, in order.</p>
                    <code>SELECT * FROM docs LIMIT 2</code>
                </div>
                <div class="feat" motion-reveal="0.32">
                    <h4>Simpler data models</h4>
                    <p>For range-ordered access patterns, secondary indexes and denormalized
                       tables become unnecessary. One table, keyed by path.</p>
                    <code>PRIMARY KEY ((coll, colid, docid))</code>
                </div>
                <div class="feat" motion-reveal="0.4">
                    <h4>Routed by the drivers</h4>
                    <p>The Python and Rust drivers compute Lexis tokens on the client and send each
                       query to the node and shard that own it.</p>
                    <code>token() → blob</code>
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
    `,styles:`
        :host { display: block; min-height: 100vh; }
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
    `})];class Ae extends(ot=re,Br=[rr(or)],ot){constructor(){super(...arguments),bi(this,"router",rt(te,8,this)),rt(te,11,this)}toInstall(){this.router.navigate("/install")}toExamples(){this.router.navigate("/examples")}}te=mi(ot);Hr(te,5,"router",Br,Ae);Ae=Hr(te,0,"HomePage",Gr,Ae);rt(te,1,Ae);export{Ae as HomePage};
