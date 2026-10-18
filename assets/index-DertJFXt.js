const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-page-BHyNCiRg.js","assets/lexis-logo.component-BxhodInO.js","assets/blob-CbDcr2Fw.js","assets/site-footer.component-BGYMMwMu.js","assets/map-DVfgpDne.js","assets/install-page-DbHD0m0I.js","assets/code-block.component-D0xEHoS8.js","assets/toc-menu.service-DU5C2wki.js","assets/examples-page-CSdRjD3z.js"])))=>i.map(i=>d[i]);
import{s as ue,g as pe,R as L,I as K,C as A,a as E,B as ve,D as fe,b as he,c as ge,d as _e,e as be,_ as O}from"./lexis-logo.component-BxhodInO.js";import{c as me,T as W}from"./toc-menu.service-DU5C2wki.js";import{m as Q}from"./map-DVfgpDne.js";import"./blob-CbDcr2Fw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();var B=function(e,t,a,o,r,n){function s(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var c=o.kind,u=c==="getter"?"get":c==="setter"?"set":"value",l=!t&&e?o.static?e:e.prototype:null,p=t||(l?Object.getOwnPropertyDescriptor(l,o.name):{}),i,g=!1,d=a.length-1;d>=0;d--){var v={};for(var b in o)v[b]=b==="access"?{}:o[b];for(var b in o.access)v.access[b]=o.access[b];v.addInitializer=function(x){if(g)throw new TypeError("Cannot add initializers after decoration has completed");n.push(s(x||null))};var _=(0,a[d])(c==="accessor"?{get:p.get,set:p.set}:p[u],v);if(c==="accessor"){if(_===void 0)continue;if(_===null||typeof _!="object")throw new TypeError("Object expected");(i=s(_.get))&&(p.get=i),(i=s(_.set))&&(p.set=i),(i=s(_.init))&&r.unshift(i)}else(i=s(_))&&(c==="field"?r.unshift(i):p[u]=i)}l&&Object.defineProperty(l,o.name,p),g=!0},T=function(e,t,a){for(var o=arguments.length>2,r=0;r<t.length;r++)a=o?t[r].call(e,a):t[r].call(e);return o?a:void 0};(()=>{let e=[A({selector:"rx-router-outlet"})],t,a=[],o,r=L,n,s=[],c=[];return class extends r{static{o=this}static{const u=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;n=[K(E)],B(null,null,n,{kind:"field",name:"router",static:!1,private:!1,access:{has:l=>"router"in l,get:l=>l.router,set:(l,p)=>{l.router=p}},metadata:u},s,c),B(null,t={value:o},e,{kind:"class",name:o.name,metadata:u},null,a),o=t.value,u&&Object.defineProperty(o,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:u}),T(o,a)}router=T(this,s,void 0);sub=T(this,c);current;onInit(){this.sub=this.router.route$.pipe(ue(u=>this.router.resolve(u))).subscribe(u=>{if(this.current?.remove(),this.current=void 0,u===void 0)return;const l=pe(u);l!==void 0&&(this.current=this.querySelector(":scope > "+l)??void 0,this.current===void 0&&(this.current=this.appendChild(document.createElement(l))),queueMicrotask(()=>queueMicrotask(()=>this.router.pageReady$.next(this.router.route$.getValue()))))})}onDestroy(){this.sub?.unsubscribe()}},o})();var xe=Object.create,M=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,we=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),J=e=>{throw TypeError(e)},ke=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,$e=(e,t)=>M(e,"name",{value:t,configurable:!0}),Oe=e=>[,,,xe(null)],Se=["class","method","getter","setter","accessor","field","value","get","set"],X=e=>e!==void 0&&typeof e!="function"?J("Function expected"):e,Pe=(e,t,a,o,r)=>({kind:Se[e],name:t,metadata:o,addInitializer:n=>a._?J("Already initialized"):r.push(X(n||null))}),Ee=(e,t)=>ke(t,we("metadata"),e[3]),ze=(e,t,a,o)=>{for(var r=0,n=e[t>>1],s=n&&n.length;r<s;r++)n[r].call(a);return o},Ie=(e,t,a,o,r,n)=>{var s,c,u,l=t&7,p=!1,i=0,g=e[i]||(e[i]=[]),d=l&&(r=r.prototype,l<5&&(l>3||!p)&&ye(r,a));$e(r,a);for(var v=o.length-1;v>=0;v--)u=Pe(l,a,c={},e[3],g),s=(0,o[v])(r,u),c._=1,X(s)&&(r=s);return Ee(e,r),d&&M(r,a,d),p?l^4?n:d:r},Y,C;const Te="(max-width: 768px)";Y=[fe({selector:"[toc-menu-toggle]"}),he([W,E])];class S{node;sidebar;router;active=!1;subs=[];constructor(t,a){this.sidebar=t,this.router=a}onInit(){this.node.classList.add("has-funnel");const t=window.matchMedia(Te),a=new ve(t.matches);t.addEventListener("change",()=>a.next(t.matches)),this.node.addEventListener("click",r=>{this.active&&(r.preventDefault(),r.stopPropagation(),this.sidebar.toggle())});const o=this.router.pageReady$.pipe(Q(()=>this.sidebar.isAvailable()));this.subs.push(me([o,a]).subscribe(([r,n])=>{this.active=!!(r&&n),this.node.classList.toggle("has-menu",this.active);const s=!!(r&&n);this.node.classList.toggle("funnel-visible",s)}),this.sidebar.open$.subscribe(r=>{this.node.classList.toggle("menu-open",r)}))}onDestroy(){for(const t of this.subs)t.unsubscribe();this.node.classList.remove("funnel-visible","has-menu","menu-open"),this.sidebar.close()}}C=Oe();S=Ie(C,0,"TocMenuToggle",Y,S);ze(C,1,S);var De=Object.create,R=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Z=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),w=e=>{throw TypeError(e)},ee=(e,t,a)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,H=(e,t)=>R(e,"name",{value:t,configurable:!0}),Ae=e=>[,,,De(e?.[Z("metadata")]??null)],te=["class","method","getter","setter","accessor","field","value","get","set"],k=e=>e!==void 0&&typeof e!="function"?w("Function expected"):e,Me=(e,t,a,o,r)=>({kind:te[e],name:t,metadata:o,addInitializer:n=>a._?w("Already initialized"):r.push(k(n||null))}),Ce=(e,t)=>ee(t,Z("metadata"),e[3]),$=(e,t,a,o)=>{for(var r=0,n=e[t>>1],s=n&&n.length;r<s;r++)t&1?n[r].call(a):o=n[r].call(a,o);return o},j=(e,t,a,o,r,n)=>{var s,c,u,l,p,i=t&7,g=!!(t&8),d=!!(t&16),v=i>3?e.length+1:i?g?1:2:0,b=te[i+5],_=i>3&&(e[v-1]=[]),x=e[v]||(e[v]=[]),h=i&&(!d&&!g&&(r=r.prototype),i<5&&(i>3||!d)&&Le(i<4?r:{get[a](){return U(this,n)},set[a](f){return G(this,n,f)}},a));i?d&&i<4&&H(n,(i>2?"set ":i>1?"get ":"")+a):H(r,a);for(var z=o.length-1;z>=0;z--)l=Me(i,a,u={},e[3],x),i&&(l.static=g,l.private=d,p=l.access={has:d?f=>Re(r,f):f=>a in f},i^3&&(p.get=d?f=>(i^1?U:Fe)(f,r,i^4?n:h.get):f=>f[a]),i>2&&(p.set=d?(f,I)=>G(f,r,I,i^4?n:h.set):(f,I)=>f[a]=I)),c=(0,o[z])(i?i<4?d?n:h[b]:i>4?void 0:{get:h.get,set:h.set}:r,l),u._=1,i^4||c===void 0?k(c)&&(i>4?_.unshift(c):i?d?n=c:h[b]=c:r=c):typeof c!="object"||c===null?w("Object expected"):(k(s=c.get)&&(h.get=s),k(s=c.set)&&(h.set=s),k(s=c.init)&&_.unshift(s));return i||Ce(e,r),h&&R(r,a,h),d?i^4?n:h:r},re=(e,t,a)=>ee(e,typeof t!="symbol"?t+"":t,a),F=(e,t,a)=>t.has(e)||w("Cannot "+a),Re=(e,t)=>Object(t)!==t?w('Cannot use the "in" operator on this value'):e.has(t),U=(e,t,a)=>(F(e,t,"read from private field"),a?a.call(e):t.get(e)),je=(e,t,a)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),G=(e,t,a,o)=>(F(e,t,"write to private field"),o?o.call(e,a):t.set(e,a),a),Fe=(e,t,a)=>(F(e,t,"access private method"),a),ae,ne,D,oe,m,N;oe=[A({selector:"nav-bar",directives:[S],template:`
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
    `,styles:`
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 300;
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
    `})];class y extends(D=L,ne=[ge],ae=[K(E)],D){constructor(){super(...arguments),je(this,N,$(m,8,this,"/")),$(m,11,this),re(this,"router",$(m,12,this)),$(m,15,this)}onInit(){this.router.route$.subscribe(t=>{this.route=t})}isActive(t){return this.route$.pipe(Q(a=>a===t||t==="/"&&a==="/overview"))}navigateHome(){this.router.navigate("/")}navigateInstall(){this.router.navigate("/install")}navigateExamples(){this.router.navigate("/examples")}}m=Ae(D);N=new WeakMap;j(m,4,"route",ne,y,N);j(m,5,"router",ae,y);y=j(m,0,"NavBar",oe,y);re(y,"__stateTypes",{route:"string"});$(m,1,y);var Ne=Object.create,V=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ie=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),se=e=>{throw TypeError(e)},qe=(e,t,a)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Be=(e,t)=>V(e,"name",{value:t,configurable:!0}),He=e=>[,,,Ne(e?.[ie("metadata")]??null)],Ue=["class","method","getter","setter","accessor","field","value","get","set"],le=e=>e!==void 0&&typeof e!="function"?se("Function expected"):e,Ge=(e,t,a,o,r)=>({kind:Ue[e],name:t,metadata:o,addInitializer:n=>a._?se("Already initialized"):r.push(le(n||null))}),Ke=(e,t)=>qe(t,ie("metadata"),e[3]),We=(e,t,a,o)=>{for(var r=0,n=e[t>>1],s=n&&n.length;r<s;r++)n[r].call(a);return o},Qe=(e,t,a,o,r,n)=>{var s,c,u,l=t&7,p=!1,i=0,g=e[i]||(e[i]=[]),d=l&&(r=r.prototype,l<5&&(l>3||!p)&&Ve(r,a));Be(r,a);for(var v=o.length-1;v>=0;v--)u=Ge(l,a,c={},e[3],g),s=(0,o[v])(r,u),c._=1,le(s)&&(r=s);return Ke(e,r),d&&V(r,a,d),p?l^4?n:d:r},ce,q,de;ce=[A({selector:"app-root",providers:[W],template:`
        <nav-bar></nav-bar>
        <rx-router-outlet></rx-router-outlet>
    `,styles:`
        :host { display: block; }
    `})];class P extends(de=L){}q=He(de);P=Qe(q,0,"AppRoot",ce,P);We(q,1,P);const Je=`:root {
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
`;await _e({root:P,globals:{styles:Je},providers:[{provide:be,useValue:[{path:"/",load:()=>O(()=>import("./home-page-BHyNCiRg.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>e.HomePage)},{path:"/overview",load:()=>O(()=>import("./home-page-BHyNCiRg.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>e.HomePage)},{path:"/install",load:()=>O(()=>import("./install-page-DbHD0m0I.js"),__vite__mapDeps([5,1,2,6,7,3])).then(e=>e.InstallPage)},{path:"/examples",load:()=>O(()=>import("./examples-page-CSdRjD3z.js"),__vite__mapDeps([8,1,2,6,7,3])).then(e=>e.ExamplesPage)}]},E]});
