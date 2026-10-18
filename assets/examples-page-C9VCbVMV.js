import{R as U,c as T,C as G}from"./lexis-logo.component-BxhodInO.js";import{d as ne,r as ae,a as _,h as re,T as ie,e as g}from"./code-block.component-D0xEHoS8.js";import{e as le,i as de,a as pe,T as he,b as me,c as ge,M as ve}from"./site-footer.component-BGYMMwMu.js";import"./blob-CbDcr2Fw.js";import"./toc-menu.service-DU5C2wki.js";function be(e,o){if(e==="first")return 0;{const t=o-1;return e==="last"?t:t/2}}function ue(e=.1,{startDelay:o=0,from:t=0,ease:a}={}){return(c,n)=>{const i=typeof t=="number"?t:be(t,n),r=Math.abs(i-c);let h=e*r;if(a){const l=n*e;h=le(a)(h/l)*l}return o+h}}var fe=Object.create,R=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,V=(e,o)=>(o=Symbol[e])?o:Symbol.for("Symbol."+e),k=e=>{throw TypeError(e)},j=(e,o,t)=>o in e?R(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,P=(e,o)=>R(e,"name",{value:o,configurable:!0}),xe=e=>[,,,fe(e?.[V("metadata")]??null)],K=["class","method","getter","setter","accessor","field","value","get","set"],w=e=>e!==void 0&&typeof e!="function"?k("Function expected"):e,ke=(e,o,t,a,c)=>({kind:K[e],name:o,metadata:a,addInitializer:n=>t._?k("Already initialized"):c.push(w(n||null))}),_e=(e,o)=>j(o,V("metadata"),e[3]),y=(e,o,t,a)=>{for(var c=0,n=e[o>>1],i=n&&n.length;c<i;c++)o&1?n[c].call(t):a=n[c].call(t,a);return a},E=(e,o,t,a,c,n)=>{var i,r,h,l,d,s=o&7,u=!!(o&8),p=!!(o&16),f=s>3?e.length+1:s?u?1:2:0,F=K[s+5],D=s>3&&(e[f-1]=[]),se=e[f]||(e[f]=[]),b=s&&(!p&&!u&&(c=c.prototype),s<5&&(s>3||!p)&&ye(s<4?c:{get[t](){return W(this,n)},set[t](m){return H(this,n,m)}},t));s?p&&s<4&&P(n,(s>2?"set ":s>1?"get ":"")+t):P(c,t);for(var I=a.length-1;I>=0;I--)l=ke(s,t,h={},e[3],se),s&&(l.static=u,l.private=p,d=l.access={has:p?m=>we(c,m):m=>t in m},s^3&&(d.get=p?m=>(s^1?W:Ee)(m,c,s^4?n:b.get):m=>m[t]),s>2&&(d.set=p?(m,S)=>H(m,c,S,s^4?n:b.set):(m,S)=>m[t]=S)),r=(0,a[I])(s?s<4?p?n:b[F]:s>4?void 0:{get:b.get,set:b.set}:c,l),h._=1,s^4||r===void 0?w(r)&&(s>4?D.unshift(r):s?p?n=r:b[F]=r:c=r):typeof r!="object"||r===null?k("Object expected"):(w(i=r.get)&&(b.get=i),w(i=r.set)&&(b.set=i),w(i=r.init)&&D.unshift(i));return s||_e(e,c),b&&R(c,t,b),p?s^4?n:b:c},Y=(e,o,t)=>j(e,typeof o!="symbol"?o+"":o,t),L=(e,o,t)=>o.has(e)||k("Cannot "+t),we=(e,o)=>Object(o)!==o?k('Cannot use the "in" operator on this value'):e.has(o),W=(e,o,t)=>(L(e,o,"read from private field"),t?t.call(e):o.get(e)),$=(e,o,t)=>o.has(e)?k("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,t),H=(e,o,t,a)=>(L(e,o,"write to private field"),a?a.call(e,t):o.set(e,t),t),Ee=(e,o,t)=>(L(e,o,"access private method"),t),B,Q,J,N,X,v,O,q,C;X=[G({selector:"cql-session",styles:`
        :host { display: block; border-radius: var(--radius-lg); overflow: hidden;
                background: rgba(14, 3, 11, 0.62);
                border: var(--border-width) solid rgba(255, 255, 255, 0.09);
                box-shadow: 0 24px 60px -30px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255,255,255,0.04);
                font-family: var(--font-mono); }
        .bar { display: flex; align-items: center; gap: 0.45rem; padding: 0.55rem 0.9rem;
               border-bottom: var(--border-width) solid rgba(255, 255, 255, 0.06);
               background: rgba(255, 255, 255, 0.025); font-size: 0.75rem; color: var(--dim); }
        .bar i { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.12); }
        .bar i:nth-child(1) { background: var(--rose); opacity: 0.85; }
        .bar span { margin-left: 0.5rem; flex: 1; }
        .bar .ok { flex: none; color: #2c0b22; background: var(--green); padding: 0.05rem 0.5rem;
                   border-radius: 999px; font-family: var(--font-sans); font-size: 0.66rem;
                   letter-spacing: 0.05em; text-transform: uppercase; }
        .bar .err { background: var(--red); }
        .stmt { display: flex; gap: 0.7rem; padding: 1rem 1.25rem; overflow-x: auto; }
        .prompt { color: var(--sky); flex: none; user-select: none; font-size: 0.92rem; line-height: 1.6; }
        .stmt code { font-family: inherit; font-size: 0.92rem; line-height: 1.6; white-space: pre; color: #eadfe6; }
        .result { padding: 0 1.25rem 1rem; overflow-x: auto; }
        table { border-collapse: separate; border-spacing: 0; min-width: 60%; font-size: 0.88rem; }
        th { text-align: left; color: var(--sky); font-weight: 700; padding: 0.4rem 1.1rem 0.4rem 0.6rem;
             border-bottom: 1px solid rgba(175,192,209,0.35); white-space: nowrap; }
        td { padding: 0.38rem 1.1rem 0.38rem 0.6rem; color: var(--text); white-space: nowrap;
             border-bottom: 1px solid rgba(255,255,255,0.04); }
        tr:hover td { background: rgba(212,176,230,0.06); }
        td.pk { color: var(--accent); }
        td.blob { color: var(--gold); }
        .count { margin-top: 0.7rem; color: var(--dim); font-size: 0.8rem; }
        .message { padding: 0 1.25rem 1rem; color: var(--red); font-size: 0.85rem; white-space: pre-wrap; }
        .tk-keyword { color: #d4b0e6; } .tk-string { color: #b9dba6; } .tk-number { color: #f0a58c; }
        .tk-comment { color: #8e7a8a; font-style: italic; } .tk-type { color: #f0d29b; }
        .tk-fn { color: #afc0d1; } .tk-ident { color: #f0e8ed; } .tk-punct { color: #a99db0; }
    `})];class x extends(N=U,J=[T],Q=[T],B=[T],N){constructor(){super(...arguments),$(this,O,y(v,8,this,0)),y(v,11,this),$(this,q,y(v,12,this,"")),y(v,15,this),$(this,C,y(v,16,this,"")),y(v,19,this),Y(this,"stop")}onInit(){const o=ne(ae(this)),[t="",a]=o.split(/\n---\n/),c=this.error!=="";let i=`<div class="bar"><i></i><i></i><i></i><span>cqlsh:lexis</span>${c?`<b class="ok err">${_(this.error)}</b>`:this.badge?`<b class="ok">${_(this.badge)}</b>`:""}</div><div class="stmt"><span class="prompt">&gt;</span><code>${re(t.trim())}</code></div>`;a!==void 0&&c?i+=`<div class="message">${_(a.trim())}</div>`:a!==void 0&&(i+=`<div class="result">${this.table(a)}</div>`),this.innerHTML=i;const r=this.querySelectorAll("tbody tr");if(r.length!==0){for(const h of r)h.style.opacity="0";this.stop=de(this,()=>{pe(r,{opacity:[0,1],x:[-14,0]},{delay:ue(.07,{startDelay:.15}),type:"spring",stiffness:260,damping:24})},{amount:.3})}}onDestroy(){this.stop?.()}table(o){const t=o.split(`
`).filter(d=>d.trim()!==""),a=d=>d.split("|").map(s=>s.trim()),c=a(t[0]??""),n=t.slice(1).filter(d=>!/^[-+\s]+$/.test(d)).map(a),i=this.pk,r=c.map(d=>`<th>${_(d)}</th>`).join(""),h=n.map(d=>"<tr>"+d.map((s,u)=>`<td class="${s.startsWith("0x")?"blob":u<i?"pk":""}">${_(s)}</td>`).join("")+"</tr>").join(""),l=n.length;return`<table><thead><tr>${r}</tr></thead><tbody>${h}</tbody></table><div class="count">(${String(l)} row${l===1?"":"s"})</div>`}}v=xe(N);O=new WeakMap;q=new WeakMap;C=new WeakMap;E(v,4,"pk",J,x,O);E(v,4,"error",Q,x,q);E(v,4,"badge",B,x,C);x=E(v,0,"CqlSession",X,x);Y(x,"__stateTypes",{pk:"number",error:"string",badge:"string"});y(v,1,x);var Ie=Object.create,M=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Z=(e,o)=>(o=Symbol[e])?o:Symbol.for("Symbol."+e),ee=e=>{throw TypeError(e)},Te=(e,o,t)=>o in e?M(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,$e=(e,o)=>M(e,"name",{value:o,configurable:!0}),Ne=e=>[,,,Ie(e?.[Z("metadata")]??null)],Ae=["class","method","getter","setter","accessor","field","value","get","set"],oe=e=>e!==void 0&&typeof e!="function"?ee("Function expected"):e,Re=(e,o,t,a,c)=>({kind:Ae[e],name:o,metadata:a,addInitializer:n=>t._?ee("Already initialized"):c.push(oe(n||null))}),Le=(e,o)=>Te(o,Z("metadata"),e[3]),Oe=(e,o,t,a)=>{for(var c=0,n=e[o>>1],i=n&&n.length;c<i;c++)n[c].call(t);return a},qe=(e,o,t,a,c,n)=>{var i,r,h,l=o&7,d=!1,s=0,u=e[s]||(e[s]=[]),p=l&&(c=c.prototype,l<5&&(l>3||!d)&&Se(c,t));$e(c,t);for(var f=a.length-1;f>=0;f--)h=Re(l,t,r={},e[3],u),i=(0,a[f])(c,h),r._=1,oe(i)&&(c=i);return Le(e,c),p&&M(c,t,p),d?l^4?n:p:c},te,z,ce;const Ce=`CREATE KEYSPACE lexis WITH replication =
    {'class': 'NetworkTopologyStrategy', 'replication_factor': 1};
USE lexis;

CREATE TABLE docs (coll text, colid text, docid text, body text,
                   PRIMARY KEY ((coll, colid, docid)));`,Me=`INSERT INTO docs (coll, colid, docid, body) VALUES ('collection', 'c1',  'd1',   'x');
INSERT INTO docs (coll, colid, docid, body) VALUES ('collection', 'c1',  'd2',   'y');
INSERT INTO docs (coll, colid, docid, body) VALUES ('collection', 'c42', 'd100', 'a');
INSERT INTO docs (coll, colid, docid, body) VALUES ('collection', 'c42', 'd101', 'b');
INSERT INTO docs (coll, colid, docid, body) VALUES ('collection', 'c42', 'd250', 'c');
INSERT INTO docs (coll, colid, docid, body) VALUES ('users',      'u7',  'p1',   'z');`,ze=`SELECT * FROM docs;
---
 coll       | colid | docid | body
------------+-------+-------+------
 collection | c1    | d1    | x
 collection | c1    | d2    | y
 collection | c42   | d100  | a
 collection | c42   | d101  | b
 collection | c42   | d250  | c
 users      | u7    | p1    | z`,Fe=`SELECT * FROM docs WHERE coll = 'collection' AND colid = 'c42';
---
 coll       | colid | docid | body
------------+-------+-------+------
 collection | c42   | d100  | a
 collection | c42   | d101  | b
 collection | c42   | d250  | c`,De=`SELECT * FROM docs WHERE coll = 'collection';
---
 coll       | colid | docid | body
------------+-------+-------+------
 collection | c1    | d1    | x
 collection | c1    | d2    | y
 collection | c42   | d100  | a
 collection | c42   | d101  | b
 collection | c42   | d250  | c`,Pe=`SELECT * FROM docs WHERE coll = 'collection' AND colid = 'c42'
    AND docid > 'd100' LIMIT 2;
---
 coll       | colid | docid | body
------------+-------+-------+------
 collection | c42   | d101  | b
 collection | c42   | d250  | c`,We=`SELECT * FROM docs WHERE coll = 'collection' AND colid >= 'c1' AND colid < 'c2';
---
 coll       | colid | docid | body
------------+-------+-------+------
 collection | c1    | d1    | x
 collection | c1    | d2    | y`,He=`SELECT * FROM docs WHERE coll = 'collection' AND colid IN ('c1', 'c42');
---
 coll       | colid | docid | body
------------+-------+-------+------
 collection | c1    | d1    | x
 collection | c1    | d2    | y
 collection | c42   | d100  | a
 collection | c42   | d101  | b
 collection | c42   | d250  | c`,Ue=`SELECT * FROM docs WHERE coll = 'collection' AND colid IN ('c1', 'c42')
    AND docid > 'd1';
---
 coll       | colid | docid | body
------------+-------+-------+------
 collection | c1    | d2    | y
 collection | c42   | d100  | a
 collection | c42   | d101  | b
 collection | c42   | d250  | c`,Ge=`SELECT * FROM docs LIMIT 2;
---
 coll       | colid | docid | body
------------+-------+-------+------
 collection | c1    | d1    | x
 collection | c1    | d2    | y`,Ve=`SELECT coll, colid, docid, token(coll, colid, docid) FROM docs
    WHERE coll = 'collection' AND colid = 'c42' AND docid = 'd100';
---
 coll       | colid | docid | system.token(coll, colid, docid)
------------+-------+-------+--------------------------------------------------
 collection | c42   | d100  | 0x636f6c6c656374696f6e00006334320000643130300000`,je=`CREATE TABLE readings (sensor int PRIMARY KEY, v int);
-- insert sensors -70000, -1, 0, 1, 70000 in any order`,Ke=`SELECT sensor FROM readings WHERE sensor > -1;
---
 sensor
--------
 0
 1
 70000`;te=[G({selector:"examples-page",providers:[he],directives:[me,ge,ie,ve],template:`
        <div class="layout">
            <toc-menu toc-menu-collapse></toc-menu>
            <main class="content">
                <header class="intro" toc-section="examples">
                    <span class="eyebrow">examples</span>
                    <h1 toc-anchor="examples">Motivation</h1>
                    <p class="lede">Hierarchical keys are a common pattern: document stores, file and
                       object stores, and multi-tenant data all address records by a path. For
                       example, a document store with each document at
                       <code class="inline">/collection/{collectionId}/documents/{documentId}</code>,
                       and the whole path as the partition key.</p>
                    <p class="lede">In ScyllaDB the token is a hash of the whole path, so only a complete
                       path can be looked up efficiently. Listing a collection, paging through it, or
                       listing collections all name just the start of a path, and ScyllaDB rejects them:</p>
                    <pre class="err">Cannot execute this query as it might involve data filtering and thus may have unpredictable performance. If you want to execute this query despite the performance unpredictability, use ALLOW FILTERING</pre>
                    <p class="lede">or, for a range on part of the path:</p>
                    <pre class="err">Only EQ and IN relation are supported on the partition key (unless you use the token() function or allow filtering)</pre>
                    <p class="lede">With <code class="inline">ALLOW FILTERING</code> they run as full scans
                       of every node and return rows in hash order. The usual workarounds are a secondary
                       index, a second table keyed for each access pattern, or moving docid into a
                       clustering column, which puts a whole collection into one partition that cannot
                       be split.</p>
                    <p class="lede">In Lexis the token is the path itself, encoded so that byte order is
                       path order. Documents that share a prefix are stored together, so each of these
                       patterns becomes a read of one contiguous range of tablets, in path order, without
                       <code class="inline">ALLOW FILTERING</code>.</p>
                </header>

                <section class="cat" toc-section="setup">
                    <h2 toc-anchor="setup">Setup</h2>
                    <p class="note">One table, keyed by the whole document path.</p>

                    <section class="ex" toc-section="setup/schema">
                        <h3 toc-anchor="setup/schema">Schema</h3>
                        <p class="note">Plain CQL. Every table in Lexis is ordered, so there is no
                           partitioner option to set. Tablets are on by default for new keyspaces.</p>
                        <cql-session motion-reveal>${g`${Ce}`}</cql-session>
                        <cql-session motion-reveal>${g`${Me}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="setup/full-scan">
                        <h3 toc-anchor="setup/full-scan">Full scan</h3>
                        <p class="note">Whatever order the rows were written in, a scan returns
                           partitions sorted by key.</p>
                        <cql-session pk="3" badge="key order" motion-reveal>${g`${ze}`}</cql-session>
                    </section>
                </section>

                <section class="cat" toc-section="prefixes">
                    <h2 toc-anchor="prefixes">Prefix queries</h2>
                    <p class="note">Name the start of a path. Matches share a token prefix, so
                       they are one contiguous range.</p>

                    <section class="ex" toc-section="prefixes/one-collection">
                        <h3 toc-anchor="prefixes/one-collection" toc-label="One collection">All documents in one collection</h3>
                        <cql-session pk="3" badge="range read" motion-reveal>${g`${Fe}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="prefixes/under-a-path">
                        <h3 toc-anchor="prefixes/under-a-path" toc-label="Under a path">Every collection under a path</h3>
                        <p class="note">Just the first component: everything below
                           <code class="inline">collection</code>.</p>
                        <cql-session pk="3" badge="range read" motion-reveal>${g`${De}`}</cql-session>
                    </section>
                </section>

                <section class="cat" toc-section="ranges">
                    <h2 toc-anchor="ranges">Range queries</h2>
                    <p class="note">A range on the component after an equality prefix is a token range too.</p>

                    <section class="ex" toc-section="ranges/paging">
                        <h3 toc-anchor="ranges/paging" toc-label="Paging">A page of documents</h3>
                        <p class="note">Resume after the last document you saw.</p>
                        <cql-session pk="3" badge="range read" motion-reveal>${g`${Pe}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="ranges/collections">
                        <h3 toc-anchor="ranges/collections" toc-label="Collection range">A range of collections</h3>
                        <p class="note">Text compares byte by byte, so
                           <code class="inline">'c42' &gt;= 'c2'</code> and c42 falls outside
                           <code class="inline">['c1', 'c2')</code>.</p>
                        <cql-session pk="3" badge="range read" motion-reveal>${g`${We}`}</cql-session>
                    </section>
                </section>

                <section class="cat" toc-section="several">
                    <h2 toc-anchor="several">IN queries</h2>
                    <p class="note"><code class="inline">IN</code> on a component gives one range per value.</p>

                    <section class="ex" toc-section="several/in">
                        <h3 toc-anchor="several/in" toc-label="Several collections">Several collections at once</h3>
                        <cql-session pk="3" badge="2 ranges" motion-reveal>${g`${He}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="several/in-then-range">
                        <h3 toc-anchor="several/in-then-range" toc-label="IN, then a range">Several collections at once, from a given document on</h3>
                        <p class="note">Each path in the <code class="inline">IN</code> list can end in a range.</p>
                        <div class="paths" motion-reveal>
                            <div><span class="ok">ok</span><code>collection / c42 / *</code><em>all documents in c42</em></div>
                            <div><span class="ok">ok</span><code>collection / c42 / d100..d200</code><em>a range at the end</em></div>
                            <div><span class="ok">ok</span><code>collection / {c1, c42} / d100..*</code><em>two paths, each ending in a range</em></div>
                            <div><span class="no">not ok</span><code>collection / * / d100</code><em>a gap in the middle, so the matches are not next to each other</em></div>
                        </div>
                        <cql-session pk="3" badge="2 ranges" motion-reveal>${g`${Ue}`}</cql-session>
                        <p class="note">d1 is excluded, and since <code class="inline">'d100' &gt; 'd1'</code>
                           in text order, all of c42 is included.</p>
                    </section>
                </section>

                <section class="cat" toc-section="ordering">
                    <h2 toc-anchor="ordering">Ordering</h2>
                    <p class="note">Key order is the storage order, for every key type that has one.</p>

                    <section class="ex" toc-section="ordering/first-rows">
                        <h3 toc-anchor="ordering/first-rows" toc-label="First rows">The first rows of the whole table, in key order</h3>
                        <p class="note"><code class="inline">LIMIT</code> on a full scan returns the
                           first keys of the table.</p>
                        <cql-session pk="3" badge="key order" motion-reveal>${g`${Ge}`}</cql-session>
                    </section>

                    <section class="ex" toc-section="ordering/numbers">
                        <h3 toc-anchor="ordering/numbers">Numeric keys</h3>
                        <p class="note"><code class="inline">int</code>,
                           <code class="inline">bigint</code>, <code class="inline">varint</code>,
                           <code class="inline">decimal</code> and <code class="inline">timestamp</code>
                           keys sort in CQL order, negatives included, and ranges on them are token ranges.</p>
                        <code-block syntax="cql" filename="schema" motion-reveal>${g`${je}`}</code-block>
                        <cql-session pk="1" badge="range read" motion-reveal>${g`${Ke}`}</cql-session>
                    </section>
                </section>

                <section class="cat" toc-section="tokens">
                    <h2 toc-anchor="tokens">Tokens</h2>
                    <p class="note">The token is the key, so you can read it.</p>

                    <section class="ex" toc-section="tokens/blob">
                        <h3 toc-anchor="tokens/blob">token() is a blob</h3>
                        <p class="note"><code class="inline">token()</code> returns the encoded key:
                           each component's bytes, then <code class="inline">00 00</code>. Here that is
                           <span class="c0">collection</span>, <span class="c1">c42</span>,
                           <span class="c2">d100</span>.</p>
                        <cql-session pk="3" motion-reveal>${g`${Ve}`}</cql-session>
                        <div class="decoded" motion-reveal>
                            <span class="c0">636f6c6c656374696f6e</span><span class="t">0000</span><span class="c1">633432</span><span class="t">0000</span><span class="c2">64313030</span><span class="t">0000</span>
                        </div>
                    </section>
                </section>
            </main>
        </div>
        <site-footer></site-footer>
    `,styles:`
        :host { display: block; min-height: 100vh; color: var(--text); }
        :host > .layout { display: flex; }
        .layout > .content { flex: 1 1 0; min-width: 0; padding: 6.5rem 2.5rem 5rem; max-width: 1020px; }
        .content > .intro { margin-bottom: 3rem; }
        .intro > .eyebrow { font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.2em;
                   text-transform: uppercase; color: var(--sky); }
        .intro > h1 { color: var(--white); font-size: clamp(2.2rem, 5vw, 3.4rem); font-weight: 700;
             letter-spacing: -0.03em; margin: 0.6rem 0 1rem; line-height: 1.05; }
        .content > .cat { padding: 3rem 0 0.5rem; border-top: var(--border-width) solid rgba(255,255,255,0.08); }
        .cat > h2 { color: var(--white); font-size: 1.9rem; font-weight: 700; letter-spacing: -0.02em; margin: 0 0 0.5rem; }
        .cat > .ex { padding: 1.75rem 0 0.75rem; margin-left: 0.25rem; }
        .ex > h3 { color: var(--white); font-size: 1.2rem; font-weight: 500; margin: 0 0 0.6rem; }
        .intro > .lede { color: var(--secondary); line-height: 1.75; max-width: 70ch; margin: 0 0 1rem; font-size: 1.08rem; font-weight: 300; }
        .intro > .err { margin: 0 0 1rem; padding: 0.8rem 1rem; max-width: 70ch; white-space: pre-wrap;
                        font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.55; color: var(--subtle);
                        background: rgba(10,2,12,0.45); border-left: 2px solid var(--rose); border-radius: var(--radius-sm); }
        .note { color: var(--secondary); line-height: 1.7; max-width: 70ch; margin: 0 0 1.1rem; font-weight: 300; }
        .inline { overflow-wrap: anywhere; word-break: break-word;
                  font-family: var(--font-mono); background: rgba(255,255,255,0.07); padding: 0.08rem 0.4rem;
                  border-radius: 4px; color: var(--accent); font-size: 0.95em; }
        .ex > cql-session, .ex > code-block { margin-bottom: 1rem; }
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
        .ex .c0 { color: var(--sky); } .ex .c1 { color: var(--accent); } .ex .c2 { color: var(--gold); }
        .decoded > .t { color: var(--dim); }
        @media (max-width: 768px) {
            .layout > .content { padding: 5.5rem 1.1rem 4rem; }
            .paths > div { grid-template-columns: 3.4rem 1fr; }
            .paths > div > em { grid-column: 2; }
        }
    `})];class A extends(ce=U){}z=Ne(ce);A=qe(z,0,"ExamplesPage",te,A);Oe(z,1,A);export{A as ExamplesPage};
