import{p as ge,q as _e,D as K,R as ve,d as R,m as be,C as Q,n as Ee}from"./toc-menu-items.service-ow5GF49n.js";import{d as ye,r as ke,h as xe,D as Se,T as Re,e as d}from"./code-block.component-Cs7-O2r1.js";import{e as we,i as Te,a as Ie,R as Oe,T as Ne,b as $e,M as Ae}from"./site-footer.component-Dp1VJbIN.js";import"./blob-CbDcr2Fw.js";import"./toc-menu.service-x3NBinY3.js";function Le(e,o){if(e==="first")return 0;{const s=o-1;return e==="last"?s:s/2}}function Ce(e=.1,{startDelay:o=0,from:s=0,ease:t}={}){return(r,n)=>{const i=typeof s=="number"?s:Le(s,n),c=Math.abs(i-r);let u=e*c;if(t){const l=n*e;u=we(t)(u/l)*l}return o+u}}const qe=`.content > .intro { margin-bottom: 3rem; }
.intro > .lede { color: var(--secondary); line-height: 1.75; max-width: 70ch; margin: 0 0 1rem; font-size: 1.08rem; font-weight: 300; }
.intro > .err, .ex > .err { margin: 0 0 1rem; padding: 0.8rem 1rem; max-width: 70ch; white-space: pre-wrap;
                font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.55; color: var(--subtle);
                background: rgba(10,2,12,0.45); border-left: 2px solid var(--rose); border-radius: var(--radius-sm); }
.inline { overflow-wrap: anywhere; word-break: break-word;
          font-family: var(--font-mono); background: rgba(255,255,255,0.07); padding: 0.08rem 0.4rem;
          border-radius: 4px; color: var(--accent); font-size: 0.95em; }
.ex > cql-session, .ex > code-block { margin-bottom: 1rem; }
.ex > .footnote { margin-left: 1.25rem; }
.ex > .paths { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1.25rem;
         font-family: var(--font-mono); font-size: 0.9rem; }
.paths > div { display: grid; grid-template-columns: 3.6rem minmax(14rem, auto) 1fr; gap: 0.9rem;
             align-items: center; padding: 0.55rem 0.9rem; border-radius: var(--radius);
             background: rgba(255,255,255,0.03); border: var(--border-width) solid rgba(255,255,255,0.06); }
.paths > div > code { color: var(--text); }
.paths > div > em { color: var(--dim); font-style: normal; font-family: var(--font-sans); font-size: 0.85rem; }
.paths > div > .ok, .paths > div > .no { font-size: 0.66rem; white-space: nowrap; text-transform: uppercase; letter-spacing: 0.06em; text-align: center;
                         border-radius: 999px; padding: 0.1rem 0; color: #2c0b22; font-family: var(--font-sans); }
.paths > div > .ok { background: var(--green); }
.paths > div > .no { background: var(--red); }
.ex > .decoded { font-family: var(--font-mono); font-size: 1rem; padding: 1rem 1.25rem; border-radius: var(--radius-lg);
           background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.12);
           overflow-x: auto; white-space: nowrap; letter-spacing: 0.04em; }
.ex .c0 { color: var(--sky); }
.ex .c1 { color: var(--accent); }
.ex .c2 { color: var(--gold); }
.decoded > .t { color: var(--dim); }
@media (max-width: 768px) {
    .paths > div { grid-template-columns: 3.4rem 1fr; }
    .paths > div > em { grid-column: 2; }
}
`;var De=function(e,o,s,t,r,n){function i(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var c=t.kind,u=c==="getter"?"get":c==="setter"?"set":"value",l=!o&&e?t.static?e:e.prototype:null,m=o||(l?Object.getOwnPropertyDescriptor(l,t.name):{}),a,b=!1,p=s.length-1;p>=0;p--){var f={};for(var k in t)f[k]=k==="access"?{}:t[k];for(var k in t.access)f.access[k]=t.access[k];f.addInitializer=function(x){if(b)throw new TypeError("Cannot add initializers after decoration has completed");n.push(i(x||null))};var E=(0,s[p])(c==="accessor"?{get:m.get,set:m.set}:m[u],f);if(c==="accessor"){if(E===void 0)continue;if(E===null||typeof E!="object")throw new TypeError("Object expected");(a=i(E.get))&&(m.get=a),(a=i(E.set))&&(m.set=a),(a=i(E.init))&&r.unshift(a)}else(a=i(E))&&(c==="field"?r.unshift(a):m[u]=a)}l&&Object.defineProperty(l,t.name,m),b=!0},Me=function(e,o,s){for(var t=arguments.length>2,r=0;r<o.length;r++)s=t?o[r].call(e,s):o[r].call(e);return t?s:void 0};let We=(()=>{let e=[K({selector:"[rx-if]"})],o,s=[],t;return class{static{t=this}static{const r=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;De(null,o={value:t},e,{kind:"class",name:t.name,metadata:r},null,s),t=o.value,r&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r}),Me(t,s)}node;sub;template;onInit(){const r=this.node.querySelector(":scope > template[rx-if-store]");if(r)this.template=r;else{this.template=document.createElement("template"),this.template.setAttribute("rx-if-store","");for(const c of Array.from(this.node.childNodes))this.template.content.appendChild(c);this.node.appendChild(this.template)}const n=this.node.getAttribute("rx-if")??"",i=ge(n);this.sub=_e(this.node,i,c=>{if(c)for(const u of Array.from(this.template.content.childNodes))this.node.insertBefore(u,this.template);else for(const u of Array.from(this.node.childNodes))u!==this.template&&this.template.content.appendChild(u)})}onDestroy(){this.sub?.unsubscribe()}},t})();var Fe=Object.create,C=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,He=(e,o)=>(o=Symbol[e])?o:Symbol.for("Symbol."+e),J=e=>{throw TypeError(e)},ze=(e,o,s)=>o in e?C(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,Be=(e,o)=>C(e,"name",{value:o,configurable:!0}),Ue=e=>[,,,Fe(null)],Ge=["class","method","getter","setter","accessor","field","value","get","set"],X=e=>e!==void 0&&typeof e!="function"?J("Function expected"):e,Ve=(e,o,s,t,r)=>({kind:Ge[e],name:o,metadata:t,addInitializer:n=>s._?J("Already initialized"):r.push(X(n||null))}),Ye=(e,o)=>ze(o,He("metadata"),e[3]),je=(e,o,s,t)=>{for(var r=0,n=e[o>>1],i=n&&n.length;r<i;r++)n[r].call(s);return t},Ke=(e,o,s,t,r,n)=>{var i,c,u,l=o&7,m=!1,a=0,b=e[a]||(e[a]=[]),p=l&&(r=r.prototype,l<5&&(l>3||!m)&&Pe(r,s));Be(r,s);for(var f=t.length-1;f>=0;f--)u=Ve(l,s,c={},e[3],b),i=(0,t[f])(r,u),c._=1,X(i)&&(r=i);return Ye(e,r),p&&C(r,s,p),m?l^4?n:p:r},Z,q;Z=[K({selector:"[stagger-in]"})];class O{node;revealed=!1;mo;stop;onInit(){const o=t=>{t instanceof HTMLElement&&(t.style.opacity="0")};for(const t of this.node.children)o(t);this.mo=new MutationObserver(t=>{if(!this.revealed)for(const r of t)for(const n of r.addedNodes)n instanceof Element&&o(n)}),this.mo.observe(this.node,{childList:!0});const s=this.node.hostNode??this.node;this.stop=Te(s,()=>{this.revealed=!0,this.mo?.disconnect(),Ie(Array.from(this.node.children),{opacity:[0,1],x:[-14,0]},{delay:Ce(.07,{startDelay:.15}),type:"spring",stiffness:260,damping:24})},{amount:.3})}onDestroy(){this.mo?.disconnect(),this.stop?.()}}q=Ue();O=Ke(q,0,"StaggerIn",Z,O);je(q,1,O);const Qe=`:host { display: block; border-radius: var(--radius-lg); overflow: hidden;
        background: rgba(14, 3, 11, 0.62);
        border: var(--border-width) solid rgba(255, 255, 255, 0.09);
        box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255,255,255,0.04);
        font-family: var(--font-mono); }
/* rx-if wrappers take no box of their own. */
.if { display: contents; }
.bar { display: flex; align-items: center; gap: 0.45rem; padding: 0.55rem 0.9rem;
       border-bottom: var(--border-width) solid rgba(255, 255, 255, 0.06);
       background: rgba(255, 255, 255, 0.025); font-size: 0.75rem; color: var(--dim); }
.bar > i { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.12); }
.bar > i:nth-child(1) { background: var(--rose); opacity: 0.85; }
.bar > .prompt-label { margin-left: 0.5rem; flex: 1; }
.bar .ok { flex: none; color: #2c0b22; background: var(--green); padding: 0.05rem 0.5rem;
           border-radius: 999px; font-family: var(--font-sans); font-size: 0.66rem;
           letter-spacing: 0.05em; text-transform: uppercase; }
/* One horizontal scroll for the statement and its result together. */
.body { overflow-x: auto; }
.stmt { display: flex; gap: 0.7rem; padding: 1rem 1.25rem; }
.prompt { color: var(--sky); flex: none; user-select: none; font-size: 0.92rem; line-height: 1.6; }
.stmt code { font-family: inherit; font-size: 0.92rem; line-height: 1.6; white-space: pre; color: #eadfe6; }
.result { padding: 0 1.25rem 1rem; }
table { border-collapse: separate; border-spacing: 0; min-width: 60%; font-size: 0.88rem; }
th { text-align: left; color: var(--sky); font-weight: 700; padding: 0.4rem 1.1rem 0.4rem 0.6rem;
     border-bottom: 1px solid rgba(175,192,209,0.35); white-space: nowrap; }
td { padding: 0.38rem 1.1rem 0.38rem 0.6rem; color: var(--text); white-space: nowrap;
     border-bottom: 1px solid rgba(255,255,255,0.04); }
tr:hover td { background: rgba(212,176,230,0.06); }
td.pk { color: var(--accent); }
td.blob { color: var(--gold); }
.count { margin-top: 0.7rem; color: var(--dim); font-size: 0.8rem; }
.tk-keyword { color: #d4b0e6; } .tk-string { color: #b9dba6; } .tk-number { color: #f0a58c; }
.tk-comment { color: #8e7a8a; font-style: italic; } .tk-type { color: #f0d29b; }
.tk-fn { color: #afc0d1; } .tk-ident { color: #f0e8ed; } .tk-punct { color: #a99db0; }
`;var Je=Object.create,D=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,ee=(e,o)=>(o=Symbol[e])?o:Symbol.for("Symbol."+e),T=e=>{throw TypeError(e)},oe=(e,o,s)=>o in e?D(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,V=(e,o)=>D(e,"name",{value:o,configurable:!0}),Ze=e=>[,,,Je(e?.[ee("metadata")]??null)],se=["class","method","getter","setter","accessor","field","value","get","set"],I=e=>e!==void 0&&typeof e!="function"?T("Function expected"):e,eo=(e,o,s,t,r)=>({kind:se[e],name:o,metadata:t,addInitializer:n=>s._?T("Already initialized"):r.push(I(n||null))}),oo=(e,o)=>oe(o,ee("metadata"),e[3]),_=(e,o,s,t)=>{for(var r=0,n=e[o>>1],i=n&&n.length;r<i;r++)o&1?n[r].call(s):t=n[r].call(s,t);return t},S=(e,o,s,t,r,n)=>{var i,c,u,l,m,a=o&7,b=!!(o&8),p=!!(o&16),f=a>3?e.length+1:a?b?1:2:0,k=se[a+5],E=a>3&&(e[f-1]=[]),x=e[f]||(e[f]=[]),v=a&&(!p&&!b&&(r=r.prototype),a<5&&(a>3||!p)&&Xe(a<4?r:{get[s](){return Y(this,n)},set[s](g){return j(this,n,g)}},s));a?p&&a<4&&V(n,(a>2?"set ":a>1?"get ":"")+s):V(r,s);for(var N=t.length-1;N>=0;N--)l=eo(a,s,u={},e[3],x),a&&(l.static=b,l.private=p,m=l.access={has:p?g=>so(r,g):g=>s in g},a^3&&(m.get=p?g=>(a^1?Y:ro)(g,r,a^4?n:v.get):g=>g[s]),a>2&&(m.set=p?(g,$)=>j(g,r,$,a^4?n:v.set):(g,$)=>g[s]=$)),c=(0,t[N])(a?a<4?p?n:v[k]:a>4?void 0:{get:v.get,set:v.set}:r,l),u._=1,a^4||c===void 0?I(c)&&(a>4?E.unshift(c):a?p?n=c:v[k]=c:r=c):typeof c!="object"||c===null?T("Object expected"):(I(i=c.get)&&(v.get=i),I(i=c.set)&&(v.set=i),I(i=c.init)&&E.unshift(i));return a||oo(e,r),v&&D(r,s,v),p?a^4?n:v:r},re=(e,o,s)=>oe(e,typeof o!="symbol"?o+"":o,s),M=(e,o,s)=>o.has(e)||T("Cannot "+s),so=(e,o)=>Object(o)!==o?T('Cannot use the "in" operator on this value'):e.has(o),Y=(e,o,s)=>(M(e,o,"read from private field"),s?s.call(e):o.get(e)),w=(e,o,s)=>o.has(e)?T("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,s),j=(e,o,s,t)=>(M(e,o,"write to private field"),t?t.call(e,s):o.set(e,s),s),ro=(e,o,s)=>(M(e,o,"access private method"),s),te,ne,ae,ie,ce,de,A,le,h,W,F,P,H,z,B;le=[Q({selector:"cql-session",directives:[We,Oe,O],template:`
        <div class="bar">
            <i></i><i></i><i></i><span class="prompt-label">cqlsh:lexis</span>
            <span class="if" rx-if="badge"><b class="ok">{{badge}}</b></span>
        </div>
        <div class="body">
            <div class="stmt"><span class="prompt">&gt;</span><code rx-for="t of statement"><span [className]="t.cls">{{t.text}}</span></code></div>
            <div class="if" rx-if="hasResult">
                <div class="result">
                    <table>
                        <thead><tr rx-for="h of headers"><th>{{h}}</th></tr></thead>
                        <tbody rx-for="row of rows by key" stagger-in>
                            <tr rx-for="cell of row.cells"><td [class.pk]="cell.pk" [class.blob]="cell.blob">{{cell.text}}</td></tr>
                        </tbody>
                    </table>
                    <div class="count">{{count}}</div>
                </div>
            </div>
        </div>
        <div class="source" hidden #sourceEl><slot></slot></div>
    `,styles:Qe})];class y extends(A=ve,de=[R],ce=[R],ie=[R],ae=[R],ne=[R],te=[R],A){constructor(){super(...arguments),w(this,W,_(h,8,this,0)),_(h,11,this),w(this,F,_(h,12,this,"")),_(h,15,this),w(this,P,_(h,16,this,[])),_(h,19,this),w(this,H,_(h,20,this,!1)),_(h,23,this),w(this,z,_(h,24,this,[])),_(h,27,this),w(this,B,_(h,28,this,[])),_(h,31,this),re(this,"sourceEl")}get count$(){return this.rows$.pipe(be(o=>`(${String(o.length)} row${o.length===1?"":"s"})`))}onRender(){const[o="",s]=ye(ke(this.sourceEl)).split(/\n---\n/);if(this.statement=xe(o.trim()),s===void 0)return;const t=s.split(`
`).filter(n=>n.trim()!==""),r=n=>n.split("|").map(i=>i.trim());this.headers=r(t[0]??""),this.rows=t.slice(1).filter(n=>!/^[-+\s]+$/.test(n)).map((n,i)=>({key:i,cells:r(n).map((c,u)=>({text:c,pk:u<this.pk&&!c.startsWith("0x"),blob:c.startsWith("0x")}))})),this.hasResult=!0}}h=Ze(A);W=new WeakMap;F=new WeakMap;P=new WeakMap;H=new WeakMap;z=new WeakMap;B=new WeakMap;S(h,4,"pk",de,y,W);S(h,4,"badge",ce,y,F);S(h,4,"statement",ie,y,P);S(h,4,"hasResult",ae,y,H);S(h,4,"headers",ne,y,z);S(h,4,"rows",te,y,B);y=S(h,0,"CqlSession",le,y);re(y,"__stateTypes",{pk:"number",badge:"string",statement:"Array",hasResult:"boolean",headers:"Array",rows:"Array"});_(h,1,y);var to=Object.create,U=Object.defineProperty,no=Object.getOwnPropertyDescriptor,ue=(e,o)=>(o=Symbol[e])?o:Symbol.for("Symbol."+e),pe=e=>{throw TypeError(e)},ao=(e,o,s)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,io=(e,o)=>U(e,"name",{value:o,configurable:!0}),co=e=>[,,,to(e?.[ue("metadata")]??null)],lo=["class","method","getter","setter","accessor","field","value","get","set"],he=e=>e!==void 0&&typeof e!="function"?pe("Function expected"):e,uo=(e,o,s,t,r)=>({kind:lo[e],name:o,metadata:t,addInitializer:n=>s._?pe("Already initialized"):r.push(he(n||null))}),po=(e,o)=>ao(o,ue("metadata"),e[3]),ho=(e,o,s,t)=>{for(var r=0,n=e[o>>1],i=n&&n.length;r<i;r++)n[r].call(s);return t},mo=(e,o,s,t,r,n)=>{var i,c,u,l=o&7,m=!1,a=0,b=e[a]||(e[a]=[]),p=l&&(r=r.prototype,l<5&&(l>3||!m)&&no(r,s));io(r,s);for(var f=t.length-1;f>=0;f--)u=uo(l,s,c={},e[3],b),i=(0,t[f])(r,u),c._=1,he(i)&&(r=i);return po(e,r),p&&U(r,s,p),m?l^4?n:p:r},me,G,fe;const fo=`CREATE TABLE user_orders (user_id text, order_id text, item text,
                          PRIMARY KEY ((user_id, order_id)))
    WITH PARTITION ORDER BY (user_id ASC, order_id DESC);`,go=`CREATE KEYSPACE lexis WITH replication =
    {'class': 'NetworkTopologyStrategy', 'replication_factor': 1};
USE lexis;

CREATE TABLE user_orders (user_id text, order_id text, item text,
                          PRIMARY KEY ((user_id, order_id)))
    WITH PARTITION ORDER BY (user_id ASC, order_id DESC);`,_o=`INSERT INTO user_orders (user_id, order_id, item) VALUES ('u7',  'o5',   'pen');
INSERT INTO user_orders (user_id, order_id, item) VALUES ('u42', 'o250', 'mug');
INSERT INTO user_orders (user_id, order_id, item) VALUES ('u1',  'o2',   'lamp');
INSERT INTO user_orders (user_id, order_id, item) VALUES ('u42', 'o100', 'desk');
INSERT INTO user_orders (user_id, order_id, item) VALUES ('u1',  'o1',   'book');
INSERT INTO user_orders (user_id, order_id, item) VALUES ('u42', 'o101', 'chair');`,vo=`SELECT * FROM user_orders;
---
 user_id | order_id | item
---------+----------+-------
 u1      | o2       | lamp
 u1      | o1       | book
 u42     | o250     | mug
 u42     | o101     | chair
 u42     | o100     | desk
 u7      | o5       | pen`,bo=`SELECT * FROM user_orders WHERE user_id = 'u42';
---
 user_id | order_id | item
---------+----------+-------
 u42     | o250     | mug
 u42     | o101     | chair
 u42     | o100     | desk`,Eo=`SELECT * FROM user_orders WHERE user_id = 'u42' LIMIT 2;
---
 user_id | order_id | item
---------+----------+-------
 u42     | o250     | mug
 u42     | o101     | chair`,yo=`SELECT * FROM user_orders WHERE user_id = 'u42'
    AND order_id < 'o101' LIMIT 2;
---
 user_id | order_id | item
---------+----------+-------
 u42     | o100     | desk`,ko=`SELECT * FROM user_orders WHERE user_id = 'u42'
    AND order_id >= 'o100' AND order_id < 'o200';
---
 user_id | order_id | item
---------+----------+-------
 u42     | o101     | chair
 u42     | o100     | desk`,xo=`SELECT * FROM user_orders WHERE user_id = 'u42' AND order_id <= 'o101';
---
 user_id | order_id | item
---------+----------+-------
 u42     | o101     | chair
 u42     | o100     | desk`,So=`SELECT * FROM user_orders WHERE user_id >= 'u1' AND user_id < 'u5';
---
 user_id | order_id | item
---------+----------+-------
 u1      | o2       | lamp
 u1      | o1       | book
 u42     | o250     | mug
 u42     | o101     | chair
 u42     | o100     | desk`,Ro=`SELECT * FROM user_orders WHERE user_id > 'u1';
---
 user_id | order_id | item
---------+----------+-------
 u42     | o250     | mug
 u42     | o101     | chair
 u42     | o100     | desk
 u7      | o5       | pen`,wo=`SELECT * FROM user_orders WHERE user_id < 'u7';
---
 user_id | order_id | item
---------+----------+-------
 u1      | o2       | lamp
 u1      | o1       | book
 u42     | o250     | mug
 u42     | o101     | chair
 u42     | o100     | desk`,To=`SELECT * FROM user_orders WHERE user_id IN ('u1', 'u42');
---
 user_id | order_id | item
---------+----------+-------
 u1      | o2       | lamp
 u1      | o1       | book
 u42     | o250     | mug
 u42     | o101     | chair
 u42     | o100     | desk`,Io=`SELECT * FROM user_orders WHERE user_id IN ('u1', 'u42')
    AND order_id > 'o1';
---
 user_id | order_id | item
---------+----------+-------
 u1      | o2       | lamp
 u42     | o250     | mug
 u42     | o101     | chair
 u42     | o100     | desk`,Oo=`SELECT * FROM user_orders WHERE user_id IN ('u1', 'u42')
    AND order_id >= 'o100' AND order_id < 'o200';
---
 user_id | order_id | item
---------+----------+-------
 u1      | o2       | lamp
 u42     | o101     | chair
 u42     | o100     | desk`,No=`SELECT * FROM user_orders WHERE user_id = 'u42'
    AND order_id IN ('o100', 'o250');
---
 user_id | order_id | item
---------+----------+-------
 u42     | o250     | mug
 u42     | o100     | desk`,$o=`SELECT * FROM user_orders WHERE user_id IN ('u1', 'u42')
    AND order_id IN ('o1', 'o100');
---
 user_id | order_id | item
---------+----------+-------
 u1      | o1       | book
 u42     | o100     | desk`,Ao=`SELECT * FROM user_orders LIMIT 2;
---
 user_id | order_id | item
---------+----------+-------
 u1      | o2       | lamp
 u1      | o1       | book`,Lo=`CREATE TABLE scores (score double, player text,
                     PRIMARY KEY ((score, player)))
    WITH PARTITION ORDER BY (score DESC);`,Co=`INSERT INTO scores (score, player) VALUES (42.25, 'dee');
INSERT INTO scores (score, player) VALUES (88,    'cy');
INSERT INTO scores (score, player) VALUES (-3.5,  'eve');
INSERT INTO scores (score, player) VALUES (97.5,  'ana');
INSERT INTO scores (score, player) VALUES (88,    'bo');`,qo=`SELECT * FROM scores;
---
 score | player
-------+--------
 97.5  | ana
 88    | bo
 88    | cy
 42.25 | dee
 -3.5  | eve`,Do=`SELECT * FROM scores LIMIT 3;
---
 score | player
-------+--------
 97.5  | ana
 88    | bo
 88    | cy`,Mo=`SELECT * FROM scores WHERE score > 0 AND score < 90;
---
 score | player
-------+--------
 88    | bo
 88    | cy
 42.25 | dee`,Wo=`SELECT * FROM scores WHERE score < 50;
---
 score | player
-------+--------
 42.25 | dee
 -3.5  | eve`,Fo=`SELECT * FROM scores WHERE score = 88 AND player > 'bo';
---
 score | player
-------+--------
 88    | cy`,Po=`SELECT user_id, order_id, token(user_id, order_id) FROM user_orders
    WHERE user_id = 'u42' AND order_id = 'o100';
---
 user_id | order_id | system.token(user_id, order_id)
---------+----------+---------------------------------
 u42     | o100     | 0x753432000090cecfcfffff`,Ho=`SELECT * FROM user_orders
    WHERE token(user_id, order_id) > 0x7531000090ceffff LIMIT 2;
---
 user_id | order_id | item
---------+----------+-------
 u42     | o250     | mug
 u42     | o101     | chair`,zo=`q = session.prepare("SELECT * FROM user_orders WHERE user_id = ?"
                    " AND order_id < ? LIMIT 2")
session.execute(q, ('u42', 'o101'))`,Bo="SELECT * FROM user_orders WHERE order_id = 'o100';",Uo="SELECT * FROM user_orders WHERE user_id > 'u1' AND order_id = 'o5';",Go=`SELECT * FROM user_orders WHERE user_id > 'u1' AND order_id = 'o5'
    ALLOW FILTERING;
---
 user_id | order_id | item
---------+----------+-------
 u7      | o5       | pen`;me=[Q({selector:"examples-page",providers:[Ee],directives:[Ne,$e,Re,Ae],template:`
        <div class="layout">
            <toc-menu toc-menu-collapse></toc-menu>
            <main class="content">
                <header class="intro" toc-section="examples">
                    <span class="eyebrow">examples</span>
                    <h1 toc-anchor="examples">Motivation</h1>
                    <p class="lede">Records that belong to a parent are a common pattern: a user's
                       orders, a tenant's documents, a device's readings. Key them by the parent's id
                       and then their own, with both as the partition key, and every record is its own
                       partition. For example, <code class="inline">user_orders</code> keyed by
                       <code class="inline">(user_id, order_id)</code>, with each user's newest orders
                       first.</p>
                    <p class="lede">In ScyllaDB the token is a hash of the whole key, so only a complete
                       key can be looked up efficiently. Listing a user's orders, paging through them,
                       or ranging over users all name just the start of the key, and ScyllaDB rejects them:</p>
                    <pre class="err">Cannot execute this query as it might involve data filtering and thus may have unpredictable performance. If you want to execute this query despite the performance unpredictability, use ALLOW FILTERING</pre>
                    <p class="lede">or, for a range on part of the key:</p>
                    <pre class="err">Only EQ and IN relation are supported on the partition key (unless you use the token() function or allow filtering)</pre>
                    <p class="lede">With <code class="inline">ALLOW FILTERING</code> they run as full scans
                       of every node and return rows in hash order. The usual workarounds are a secondary
                       index, a second table keyed for each access pattern, or moving order_id into a
                       clustering column, which puts all of a user's orders into one partition that cannot
                       be split.</p>
                    <p class="lede">In Lexis the token is the key itself, encoded so that byte order is
                       key order. Keys that share a prefix are stored together, so each of these patterns
                       becomes a read of one contiguous range of tablets, in key order, without
                       <code class="inline">ALLOW FILTERING</code>.</p>
                </header>

                <section class="cat" toc-section="order">
                    <h2 toc-anchor="order">Partition key order</h2>
                    <p class="note">Partitions are stored, distributed and returned in key order, and
                       Lexis adds <code class="inline">PARTITION ORDER BY</code> to choose that order.</p>

                    <section class="ex" toc-section="order/direction">
                        <h3 toc-anchor="order/direction" toc-label="ASC or DESC">ASC or DESC per column</h3>
                        <p class="note">Each partition key column can be declared ASC or DESC, as
                           <code class="inline">CLUSTERING ORDER BY</code> does for clustering columns.
                           The direction is fixed when the table is created, ASC is the default, and
                           directions can be mixed.</p>
                        <cql-session motion-reveal>${d`${fo}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="order/types">
                        <h3 toc-anchor="order/types">Types</h3>
                        <p class="note">The token encodes each column in its direction: an ASC column as
                           order-preserving bytes, a DESC column as their complement, so its largest value
                           comes first. Every scalar key type sorts as CQL compares it, in either direction and
                           with every range operator; text and blobs sort lexicographically.</p>
                    </section>
                </section>

                <section class="cat" toc-section="setup">
                    <h2 toc-anchor="setup">Setup</h2>
                    <p class="note">One table, keyed by the user and then the order.</p>

                    <section class="ex" toc-section="setup/schema">
                        <h3 toc-anchor="setup/schema">Schema</h3>
                        <p class="note">Plain CQL. Tablets are on by default for new keyspaces.</p>
                        <cql-session motion-reveal>${d`${go}`}</cql-session>
                        <cql-session motion-reveal>${d`${_o}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="setup/full-scan">
                        <h3 toc-anchor="setup/full-scan">Full scan</h3>
                        <p class="note">Whatever order the rows were written in, a scan returns
                           partitions sorted by key*.</p>
                        <cql-session pk="2" badge="key order" motion-reveal>${d`${vo}`}</cql-session>
                        <p class="note footnote">* <code class="inline">'u42'</code> comes before
                           <code class="inline">'u7'</code> due to lexicographic ordering. If you want numeric
                           order, make the column a numeric type such as <code class="inline">bigint</code>.</p>
                    </section>
                </section>

                <section class="cat" toc-section="prefixes">
                    <h2 toc-anchor="prefixes">Partial partition key queries</h2>
                    <p class="note">Name the start of a partition key. Matches share a token prefix, so
                       they are one contiguous range.</p>

                    <section class="ex" toc-section="prefixes/one-user">
                        <h3 toc-anchor="prefixes/one-user" toc-label="One user">All of one user's orders</h3>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${bo}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="prefixes/latest">
                        <h3 toc-anchor="prefixes/latest" toc-label="Latest">A user's latest orders</h3>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${Eo}`}</cql-session>
                    </section>
                </section>

                <section class="cat" toc-section="ranges">
                    <h2 toc-anchor="ranges">Range queries</h2>
                    <p class="note">A range on contiguous partition key columns, beginning at the
                       first column, is a token range too.</p>

                    <section class="ex" toc-section="ranges/paging">
                        <h3 toc-anchor="ranges/paging" toc-label="Paging">A page of a user's orders</h3>
                        <p class="note">Resume after the last order you saw*.</p>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${yo}`}</cql-session>
                        <p class="note footnote">* <code class="inline">order_id</code> is DESC, so the next
                           page is the smaller ids and resumes with <code class="inline">&lt;</code>.</p>
                    </section>

                    <section class="ex" toc-section="ranges/window">
                        <h3 toc-anchor="ranges/window" toc-label="Window">A window of a user's orders</h3>
                        <p class="note">Both ends bounded, on the component after the prefix.</p>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${ko}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="ranges/up-to">
                        <h3 toc-anchor="ranges/up-to" toc-label="Up to">A user's orders up to a given one</h3>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${xo}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="ranges/users">
                        <h3 toc-anchor="ranges/users" toc-label="User range">A range of users</h3>
                        <p class="note">No order named: every order of every user in the range*.</p>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${So}`}</cql-session>
                        <p class="note footnote">* <code class="inline">'u42'</code> falls inside <code class="inline">['u1', 'u5')</code> due to lexicographic ordering.</p>
                    </section>

                    <section class="ex" toc-section="ranges/after">
                        <h3 toc-anchor="ranges/after" toc-label="Open-ended">Every user after a given one</h3>
                        <p class="note">A one-sided range on the leading component: every order of
                           every user after <code class="inline">'u1'</code>, in key order.</p>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${Ro}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="ranges/before">
                        <h3 toc-anchor="ranges/before" toc-label="Before">Every user before a given one</h3>
                        <p class="note">The other direction: every order of every user before <code class="inline">'u7'</code>*.</p>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${wo}`}</cql-session>
                        <p class="note footnote">* <code class="inline">'u42'</code> is included due to lexicographic ordering.</p>
                    </section>
                </section>

                <section class="cat" toc-section="several">
                    <h2 toc-anchor="several">IN queries</h2>
                    <p class="note"><code class="inline">IN</code> on a component gives one range per value.</p>

                    <section class="ex" toc-section="several/in">
                        <h3 toc-anchor="several/in" toc-label="Several users">Several users at once</h3>
                        <cql-session pk="2" badge="2 ranges" motion-reveal>${d`${To}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="several/in-then-range">
                        <h3 toc-anchor="several/in-then-range" toc-label="IN, then a range">Several users at once, from a given order on</h3>
                        <p class="note">Each user in the <code class="inline">IN</code> list can end in a range*.</p>
                        <div class="paths" motion-reveal>
                            <div><span class="ok">ok</span><code>u42 / *</code><em>all of <code class="inline">'u42'</code>'s orders</em></div>
                            <div><span class="ok">ok</span><code>u42 / o100..o200</code><em>a range at the end</em></div>
                            <div><span class="ok">ok</span><code>{u1, u42} / o100..*</code><em>two users, each ending in a range</em></div>
                            <div><span class="ok">ok</span><code>u1..u5 / *</code><em>a range of users, no order named</em></div>
                            <div><span class="no">not ok</span><code>* / o100</code><em>no user named, so the matches are not next to each other</em></div>
                        </div>
                        <cql-session pk="2" badge="2 ranges" motion-reveal>${d`${Io}`}</cql-session>
                        <p class="note footnote">* <code class="inline">'o1'</code> is excluded, and all of <code class="inline">'u42'</code>'s orders are included since
                           <code class="inline">'o100' &gt; 'o1'</code> lexicographically.</p>
                    </section>

                    <section class="ex" toc-section="several/in-then-window">
                        <h3 toc-anchor="several/in-then-window" toc-label="IN, then a window">Several users at once, within a window of orders</h3>
                        <p class="note">Each user's range can be bounded at both ends*.</p>
                        <cql-session pk="2" badge="2 ranges" motion-reveal>${d`${Oo}`}</cql-session>
                        <p class="note footnote">* <code class="inline">'o2'</code> falls inside <code class="inline">['o100', 'o200')</code> due to lexicographic ordering.</p>
                    </section>

                    <section class="ex" toc-section="several/orders">
                        <h3 toc-anchor="several/orders" toc-label="Specific orders">Specific orders of one user</h3>
                        <p class="note"><code class="inline">IN</code> on the second component: one exact key per value.</p>
                        <cql-session pk="2" badge="2 keys" motion-reveal>${d`${No}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="several/cross">
                        <h3 toc-anchor="several/cross" toc-label="IN × IN">Specific orders of several users</h3>
                        <p class="note"><code class="inline">IN</code> on both components: every
                           combination, and only the ones that exist come back.</p>
                        <cql-session pk="2" badge="4 keys" motion-reveal>${d`${$o}`}</cql-session>
                    </section>
                </section>

                <section class="cat" toc-section="ordering">
                    <h2 toc-anchor="ordering">Key ordering</h2>
                    <p class="note">Partition key order is the storage order, just as clustering key order already was.</p>

                    <section class="ex" toc-section="ordering/first-rows">
                        <h3 toc-anchor="ordering/first-rows" toc-label="First rows">The first rows of the whole table, in key order</h3>
                        <p class="note"><code class="inline">LIMIT</code> on a full scan returns the
                           first keys of the table.</p>
                        <cql-session pk="2" badge="key order" motion-reveal>${d`${Ao}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="ordering/highest">
                        <h3 toc-anchor="ordering/highest" toc-label="Highest first">Highest first, and numbers in numeric order</h3>
                        <p class="note">DESC on the leading column, with a <code class="inline">double</code> key.</p>
                        <cql-session motion-reveal>${d`${Lo}`}</cql-session>
                        <cql-session motion-reveal>${d`${Co}`}</cql-session>
                        <cql-session pk="2" badge="key order" motion-reveal>${d`${qo}`}</cql-session>
                        <cql-session pk="2" badge="key order" motion-reveal>${d`${Do}`}</cql-session>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${Mo}`}</cql-session>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${Wo}`}</cql-session>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${Fo}`}</cql-session>
                    </section>
                </section>

                <section class="cat" toc-section="tokens">
                    <h2 toc-anchor="tokens">Tokens</h2>
                    <p class="note">The token is the key, so you can read it.</p>

                    <section class="ex" toc-section="tokens/blob">
                        <h3 toc-anchor="tokens/blob">token() is a blob</h3>
                        <p class="note"><code class="inline">token()</code> returns the encoded key:
                           each component's bytes, then <code class="inline">00 00</code>. A DESC
                           component is the complement, ending in <code class="inline">ff ff</code>. Here
                           that is <span class="c0">u42</span>, then <span class="c1">o100</span>.</p>
                        <cql-session pk="2" motion-reveal>${d`${Po}`}</cql-session>
                        <div class="decoded" motion-reveal>
                            <span class="c0">753432</span><span class="t">0000</span><span class="c1">90cecfcf</span><span class="t">ffff</span>
                        </div>
                    </section>

                    <section class="ex" toc-section="tokens/page">
                        <h3 toc-anchor="tokens/page" toc-label="Whole-table paging">The next page of the whole table</h3>
                        <p class="note">Resume after the last key seen.</p>
                        <cql-session pk="2" badge="range read" motion-reveal>${d`${Ho}`}</cql-session>
                    </section>
                </section>

                <section class="cat" toc-section="bind">
                    <h2 toc-anchor="bind">Bind markers</h2>

                    <section class="ex" toc-section="bind/routing">
                        <h3 toc-anchor="bind/routing" toc-label="Routing">Prepared, and routed by the drivers</h3>
                        <p class="note">Every query above can be prepared. The Lexis drivers compute the
                           same token range as the server and send the statement to the replica and shard
                           that hold it: a full key goes straight to its partition, and a prefix, or a
                           prefix ending in a range, goes to the tablet where its range starts, which for
                           most prefixes is the only one.</p>
                        <code-block syntax="python" filename="app.py" motion-reveal>${d`${zo}`}</code-block>
                    </section>
                </section>

                <section class="cat" toc-section="filtering">
                    <h2 toc-anchor="filtering" toc-label="ALLOW FILTERING">Queries that still need ALLOW FILTERING</h2>

                    <section class="ex" toc-section="filtering/no-user">
                        <h3 toc-anchor="filtering/no-user">No user named</h3>
                        <cql-session motion-reveal>${d`${Bo}`}</cql-session>
                        <pre class="err">Cannot execute this query as it might involve data filtering and thus may have unpredictable performance. If you want to execute this query despite the performance unpredictability, use ALLOW FILTERING</pre>
                        <p class="note">With <code class="inline">ALLOW FILTERING</code> this scans the whole table.</p>
                    </section>

                    <section class="ex" toc-section="filtering/after-range">
                        <h3 toc-anchor="filtering/after-range">A column after a range</h3>
                        <cql-session motion-reveal>${d`${Uo}`}</cql-session>
                        <pre class="err">Only EQ and IN relation are supported on the partition key (unless you use the token() function or ALLOW FILTERING)</pre>
                        <p class="note">With <code class="inline">ALLOW FILTERING</code> this reads only the
                           users after <code class="inline">'u1'</code> and filters them.</p>
                        <cql-session pk="2" badge="filtered" motion-reveal>${d`${Go}`}</cql-session>
                    </section>
                </section>
            </main>
        </div>
        <site-footer></site-footer>
    `,styles:qe})];class L extends(fe=Se){}G=co(fe);L=mo(G,0,"ExamplesPage",me,L);ho(G,1,L);export{L as ExamplesPage};
