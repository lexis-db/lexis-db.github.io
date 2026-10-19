const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-page-Br3x9hjy.js","assets/toc-menu-items.service-ow5GF49n.js","assets/blob-CbDcr2Fw.js","assets/site-footer.component-Dp1VJbIN.js","assets/install-page-DyxGIfeU.js","assets/code-block.component-Cs7-O2r1.js","assets/toc-menu.service-x3NBinY3.js","assets/examples-page-BLpk3rfm.js"])))=>i.map(i=>d[i]);
import{s as ue,g as pe,R as L,I as K,C as A,a as P,B as ve,m as W,c as fe,D as he,b as ge,d as _e,e as be,f as me,T as xe,_ as O}from"./toc-menu-items.service-ow5GF49n.js";import{T as Q}from"./toc-menu.service-x3NBinY3.js";import"./blob-CbDcr2Fw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var q=function(e,t,n,o,r,a){function s(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var c=o.kind,u=c==="getter"?"get":c==="setter"?"set":"value",l=!t&&e?o.static?e:e.prototype:null,p=t||(l?Object.getOwnPropertyDescriptor(l,o.name):{}),i,g=!1,d=n.length-1;d>=0;d--){var v={};for(var b in o)v[b]=b==="access"?{}:o[b];for(var b in o.access)v.access[b]=o.access[b];v.addInitializer=function(x){if(g)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(x||null))};var _=(0,n[d])(c==="accessor"?{get:p.get,set:p.set}:p[u],v);if(c==="accessor"){if(_===void 0)continue;if(_===null||typeof _!="object")throw new TypeError("Object expected");(i=s(_.get))&&(p.get=i),(i=s(_.set))&&(p.set=i),(i=s(_.init))&&r.unshift(i)}else(i=s(_))&&(c==="field"?r.unshift(i):p[u]=i)}l&&Object.defineProperty(l,o.name,p),g=!0},I=function(e,t,n){for(var o=arguments.length>2,r=0;r<t.length;r++)n=o?t[r].call(e,n):t[r].call(e);return o?n:void 0};(()=>{let e=[A({selector:"rx-router-outlet"})],t,n=[],o,r=L,a,s=[],c=[];return class extends r{static{o=this}static{const u=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;a=[K(P)],q(null,null,a,{kind:"field",name:"router",static:!1,private:!1,access:{has:l=>"router"in l,get:l=>l.router,set:(l,p)=>{l.router=p}},metadata:u},s,c),q(null,t={value:o},e,{kind:"class",name:o.name,metadata:u},null,n),o=t.value,u&&Object.defineProperty(o,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:u}),I(o,n)}router=I(this,s,void 0);sub=I(this,c);current;onInit(){this.sub=this.router.route$.pipe(ue(u=>this.router.resolve(u))).subscribe(u=>{if(this.current?.remove(),this.current=void 0,u===void 0)return;const l=pe(u);l!==void 0&&(this.current=this.querySelector(":scope > "+l)??void 0,this.current===void 0&&(this.current=this.appendChild(document.createElement(l))),queueMicrotask(()=>queueMicrotask(()=>this.router.pageReady$.next(this.router.route$.getValue()))))})}onDestroy(){this.sub?.unsubscribe()}},o})();var ye=Object.create,M=Object.defineProperty,we=Object.getOwnPropertyDescriptor,ke=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),J=e=>{throw TypeError(e)},$e=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oe=(e,t)=>M(e,"name",{value:t,configurable:!0}),Se=e=>[,,,ye(null)],Ee=["class","method","getter","setter","accessor","field","value","get","set"],X=e=>e!==void 0&&typeof e!="function"?J("Function expected"):e,Pe=(e,t,n,o,r)=>({kind:Ee[e],name:t,metadata:o,addInitializer:a=>n._?J("Already initialized"):r.push(X(a||null))}),ze=(e,t)=>$e(t,ke("metadata"),e[3]),Te=(e,t,n,o)=>{for(var r=0,a=e[t>>1],s=a&&a.length;r<s;r++)a[r].call(n);return o},Ie=(e,t,n,o,r,a)=>{var s,c,u,l=t&7,p=!1,i=0,g=e[i]||(e[i]=[]),d=l&&(r=r.prototype,l<5&&(l>3||!p)&&we(r,n));Oe(r,n);for(var v=o.length-1;v>=0;v--)u=Pe(l,n,c={},e[3],g),s=(0,o[v])(r,u),c._=1,X(s)&&(r=s);return ze(e,r),d&&M(r,n,d),p?l^4?a:d:r},Y,C;const De="(max-width: 768px)";Y=[he({selector:"[toc-menu-toggle]"}),ge([Q,P])];class S{node;sidebar;router;active=!1;subs=[];constructor(t,n){this.sidebar=t,this.router=n}onInit(){this.node.classList.add("has-funnel");const t=window.matchMedia(De),n=new ve(t.matches);t.addEventListener("change",()=>n.next(t.matches)),this.node.addEventListener("click",r=>{this.active&&(r.preventDefault(),r.stopPropagation(),this.sidebar.toggle())});const o=this.router.pageReady$.pipe(W(()=>this.sidebar.isAvailable()));this.subs.push(fe([o,n]).subscribe(([r,a])=>{this.active=!!(r&&a),this.node.classList.toggle("has-menu",this.active);const s=!!(r&&a);this.node.classList.toggle("funnel-visible",s)}),this.sidebar.open$.subscribe(r=>{this.node.classList.toggle("menu-open",r)}))}onDestroy(){for(const t of this.subs)t.unsubscribe();this.node.classList.remove("funnel-visible","has-menu","menu-open"),this.sidebar.close()}}C=Se();S=Ie(C,0,"TocMenuToggle",Y,S);Te(C,1,S);const Le=`nav { position: fixed; top: 0; left: 0; right: 0; z-index: 300;
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.8rem 2rem; background: rgba(31, 10, 36, 0.72);
      backdrop-filter: blur(14px) saturate(140%);
      -webkit-backdrop-filter: blur(14px) saturate(140%);
      border-bottom: var(--border-width) solid rgba(255, 255, 255, 0.06); }
.logo { display: flex; align-items: center; gap: 0.6rem;
        font-weight: 700; font-size: 1.3rem; color: var(--white);
        text-decoration: none; letter-spacing: -0.5px;
        margin-right: 2rem; position: relative; cursor: default;
        -webkit-tap-highlight-color: transparent; }
.mark { width: 1.6rem; height: auto; display: block; }
.logo.has-menu { cursor: pointer; }
.logo-text { position: relative; }
.logo.has-funnel > .logo-text::after { content: ''; position: absolute;
           bottom: -7px; left: 0; width: 100%; height: 8px;
           background:
               linear-gradient(var(--text), var(--text)) center 0    / 70% 1px no-repeat,
               linear-gradient(var(--text), var(--text)) center 50%  / 50% 1px no-repeat,
               linear-gradient(var(--text), var(--text)) center 100% / 30% 1px no-repeat;
           opacity: 0; transition: opacity 0.8s ease, background 0.3s ease; }
.logo.has-funnel.funnel-visible > .logo-text::after { opacity: 0.7; }
.logo.menu-open > .logo-text::after {
           opacity: 1;
           background:
               linear-gradient(var(--accent), var(--accent)) center 0    / 70% 1px no-repeat,
               linear-gradient(var(--accent), var(--accent)) center 50%  / 50% 1px no-repeat,
               linear-gradient(var(--accent), var(--accent)) center 100% / 30% 1px no-repeat; }
.links { display: flex; gap: 2rem; overflow-x: auto; scrollbar-width: none; align-items: center; }
.links::-webkit-scrollbar { display: none; }
.links a { color: var(--muted); text-decoration: none; font-size: 0.92rem;
           letter-spacing: 0.03em; cursor: pointer; transition: color 0.2s;
           white-space: nowrap; position: relative;
           -webkit-tap-highlight-color: transparent; }
.links a:hover { color: var(--white); }
.links a.active { color: var(--white); }
.links a.active::after { content: ''; position: absolute;
           left: 0; right: 0; bottom: -6px; height: 2px; border-radius: 2px;
           background: linear-gradient(90deg, var(--sky), var(--accent)); }
.links a.gh { padding: 0.35rem 0.8rem; border-radius: 999px;
              border: var(--border-width) solid rgba(255,255,255,0.14); }
.links a.gh:hover { border-color: var(--accent); }
@media (max-width: 768px) {
    nav { padding: 0.7rem 1rem; }
    .logo { margin-right: 1rem; }
    .links { gap: 1rem; }
}
@media (max-width: 480px) {
    .logo { font-size: 1.1rem; margin-right: 0.75rem; gap: 0.45rem; }
    .links a { font-size: 0.8rem; letter-spacing: 0; }
}
`;var Ae=Object.create,R=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Z=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),w=e=>{throw TypeError(e)},ee=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H=(e,t)=>R(e,"name",{value:t,configurable:!0}),Ce=e=>[,,,Ae(e?.[Z("metadata")]??null)],te=["class","method","getter","setter","accessor","field","value","get","set"],k=e=>e!==void 0&&typeof e!="function"?w("Function expected"):e,Re=(e,t,n,o,r)=>({kind:te[e],name:t,metadata:o,addInitializer:a=>n._?w("Already initialized"):r.push(k(a||null))}),je=(e,t)=>ee(t,Z("metadata"),e[3]),$=(e,t,n,o)=>{for(var r=0,a=e[t>>1],s=a&&a.length;r<s;r++)t&1?a[r].call(n):o=a[r].call(n,o);return o},j=(e,t,n,o,r,a)=>{var s,c,u,l,p,i=t&7,g=!!(t&8),d=!!(t&16),v=i>3?e.length+1:i?g?1:2:0,b=te[i+5],_=i>3&&(e[v-1]=[]),x=e[v]||(e[v]=[]),h=i&&(!d&&!g&&(r=r.prototype),i<5&&(i>3||!d)&&Me(i<4?r:{get[n](){return U(this,a)},set[n](f){return G(this,a,f)}},n));i?d&&i<4&&H(a,(i>2?"set ":i>1?"get ":"")+n):H(r,n);for(var z=o.length-1;z>=0;z--)l=Re(i,n,u={},e[3],x),i&&(l.static=g,l.private=d,p=l.access={has:d?f=>Fe(r,f):f=>n in f},i^3&&(p.get=d?f=>(i^1?U:Ve)(f,r,i^4?a:h.get):f=>f[n]),i>2&&(p.set=d?(f,T)=>G(f,r,T,i^4?a:h.set):(f,T)=>f[n]=T)),c=(0,o[z])(i?i<4?d?a:h[b]:i>4?void 0:{get:h.get,set:h.set}:r,l),u._=1,i^4||c===void 0?k(c)&&(i>4?_.unshift(c):i?d?a=c:h[b]=c:r=c):typeof c!="object"||c===null?w("Object expected"):(k(s=c.get)&&(h.get=s),k(s=c.set)&&(h.set=s),k(s=c.init)&&_.unshift(s));return i||je(e,r),h&&R(r,n,h),d?i^4?a:h:r},re=(e,t,n)=>ee(e,typeof t!="symbol"?t+"":t,n),F=(e,t,n)=>t.has(e)||w("Cannot "+n),Fe=(e,t)=>Object(t)!==t?w('Cannot use the "in" operator on this value'):e.has(t),U=(e,t,n)=>(F(e,t,"read from private field"),n?n.call(e):t.get(e)),Ne=(e,t,n)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),G=(e,t,n,o)=>(F(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n),Ve=(e,t,n)=>(F(e,t,"access private method"),n),ne,ae,D,oe,m,N;oe=[A({selector:"nav-bar",directives:[S],template:`
        <nav>
            <a class="logo" toc-menu-toggle>
                <lexis-logo class="mark"></lexis-logo>
                <span class="logo-text">Lexis</span>
            </a>
            <div class="links">
                <a [class.active]="isActive('/')" onclick="navigateHome">Concept</a>
                <a [class.active]="isActive('/install')" onclick="navigateInstall">Install</a>
                <a [class.active]="isActive('/examples')" onclick="navigateExamples">Examples</a>
                <a class="gh" href="https://github.com/jk89/lexisdb" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
        </nav>
    `,styles:Le})];class y extends(D=L,ae=[_e],ne=[K(P)],D){constructor(){super(...arguments),Ne(this,N,$(m,8,this,"/")),$(m,11,this),re(this,"router",$(m,12,this)),$(m,15,this)}onInit(){this.router.route$.subscribe(t=>{this.route=t})}isActive(t){return this.route$.pipe(W(n=>n===t||t==="/"&&n==="/overview"))}navigateHome(){this.router.navigate("/")}navigateInstall(){this.router.navigate("/install")}navigateExamples(){this.router.navigate("/examples")}}m=Ce(D);N=new WeakMap;j(m,4,"route",ae,y,N);j(m,5,"router",ne,y);y=j(m,0,"NavBar",oe,y);re(y,"__stateTypes",{route:"string"});$(m,1,y);var Be=Object.create,V=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,ie=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),se=e=>{throw TypeError(e)},He=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ue=(e,t)=>V(e,"name",{value:t,configurable:!0}),Ge=e=>[,,,Be(e?.[ie("metadata")]??null)],Ke=["class","method","getter","setter","accessor","field","value","get","set"],le=e=>e!==void 0&&typeof e!="function"?se("Function expected"):e,We=(e,t,n,o,r)=>({kind:Ke[e],name:t,metadata:o,addInitializer:a=>n._?se("Already initialized"):r.push(le(a||null))}),Qe=(e,t)=>He(t,ie("metadata"),e[3]),Je=(e,t,n,o)=>{for(var r=0,a=e[t>>1],s=a&&a.length;r<s;r++)a[r].call(n);return o},Xe=(e,t,n,o,r,a)=>{var s,c,u,l=t&7,p=!1,i=0,g=e[i]||(e[i]=[]),d=l&&(r=r.prototype,l<5&&(l>3||!p)&&qe(r,n));Ue(r,n);for(var v=o.length-1;v>=0;v--)u=We(l,n,c={},e[3],g),s=(0,o[v])(r,u),c._=1,le(s)&&(r=s);return Qe(e,r),d&&V(r,n,d),p?l^4?a:d:r},ce,B,de;ce=[A({selector:"app-root",providers:[Q],template:`
        <nav-bar></nav-bar>
        <rx-router-outlet></rx-router-outlet>
    `,styles:`
        :host { display: block; }
    `})];class E extends(de=L){}B=Ge(de);E=Xe(B,0,"AppRoot",ce,E);Je(B,1,E);const Ye=`:root {
    /* backgrounds: aubergine leaning blue, dark to light */
    --black: #1f0a24;
    --bg-1: #240d29;
    --bg-2: #29102e;
    --bg-3: #311536;
    --bg-4: #381a3e;
    --bg-5: #422147;
    --bg-6: #4c2951;
    --bg-7: #57325c;

    /* borders */
    --border: #67406c;
    --border-light: #7a547f;

    /* foreground, dim to bright */
    --dim: #a68f9f;
    --slate: #a99db0;
    --muted: #b9a6b4;
    --muted-alt: #c4b3bf;
    --secondary: #d7c9d2;
    --subtle: #e2d7de;
    --text: #f0e8ed;
    --text-light: #f7f2f5;
    --white: #fff;

    /* accent + semantic: the logo's colours, muted */
    --accent: #d4b0e6;
    --sky: #afc0d1;
    --steel: #8e9dba;
    --indigo: #8786b0;
    --lilac: #a08ab2;
    --rose: #e3a8c7;
    --navy: #2a1e4a;
    --green: #a6d6a0;
    --red: #f08a8a;
    --blue: #8e9dba;
    --amber: #f0c27b;
    --gold: #f0d29b;
    --salmon: #f0a58c;

    /* typography */
    --font-sans: 'Ubuntu', system-ui, -apple-system, 'Segoe UI', sans-serif;
    --font-mono: 'Ubuntu Mono', 'Fira Code', ui-monospace, monospace;
    --tracking: 0.08em;

    /* shape */
    --radius-sm: 4px;
    --radius: 8px;
    --radius-lg: 12px;
    --border-width: 1px;
}

html {
    font-size: 100%;
    scroll-behavior: smooth;
}

html, body {
    margin: 0;
    background: var(--black);
    color: var(--text);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
}

body {
    background:
        radial-gradient(1200px 700px at 85% -10%, rgba(104, 38, 126, 0.35), transparent 60%),
        radial-gradient(900px 600px at -10% 30%, rgba(80, 42, 100, 0.35), transparent 60%),
        var(--black);
    background-attachment: fixed;
}

*, *::before, *::after {
    box-sizing: border-box;
}

::selection {
    background: rgba(212, 176, 230, 0.35);
}

a {
    color: var(--accent);
}

button {
    user-select: none;
    cursor: pointer;
    font-family: inherit;
    transition: transform 0.1s ease, filter 0.1s ease;
}

button:active {
    transform: scale(0.96);
    filter: brightness(1.2);
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
`;await be({root:E,globals:{styles:Ye},providers:[{provide:me,useValue:[{path:"/",load:()=>O(()=>import("./home-page-Br3x9hjy.js"),__vite__mapDeps([0,1,2,3])).then(e=>e.HomePage)},{path:"/overview",load:()=>O(()=>import("./home-page-Br3x9hjy.js"),__vite__mapDeps([0,1,2,3])).then(e=>e.HomePage)},{path:"/install",load:()=>O(()=>import("./install-page-DyxGIfeU.js"),__vite__mapDeps([4,1,2,5,6,3])).then(e=>e.InstallPage)},{path:"/examples",load:()=>O(()=>import("./examples-page-BLpk3rfm.js"),__vite__mapDeps([7,1,2,5,6,3])).then(e=>e.ExamplesPage)}]},P,{provide:xe,useValue:""}]});
