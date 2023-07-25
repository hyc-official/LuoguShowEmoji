// ==UserScript==
// @name         Luogu Show Emoji
// @namespace    blog.heyc.eu.org
// @version      2.2.9
// @description  Show emoji in Luogu
// @author       Heyc
// @match        https://www.luogu.com.cn/*
// @match        *://*/*lgse-settings*
// @icon         https://lgse.heyc.eu.org/favicon.ico
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://unpkg.com/marked/marked.min.js
// @connect      lgse-source.heyc.eu.org
// @connect      lgse-source.netlify.app
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(()=>{var O="color: #E67E22;";function s(e,...t){console.log(`%c[lgse] ${e}`,O,...t)}function G(e){let t={};s("Find cache",e);let n=new Date,c=new Date,i=new Date().getTime();return n.setTime(parseInt(GM_getValue(`cache/time_${e}`,"0"),10)),c.setTime(parseInt(GM_getValue("cache/expired","0"),10)),n===0?(s("Cache miss",e),t.status="miss"):i-n>864e5||n<c?(s("Cache expired",e),t.status="expired"):(s("Cache hit",e),t.status="hit",t.content=GM_getValue(`cache/content_${e}`)),t}function R(e,t){s("Set cache",e,"=>",t),GM_setValue(`cache/content_${e}`,t),GM_setValue(`cache/time_${e}`,new Date().getTime().toString())}function h(){s("Clear cache"),GM_setValue("cache/expired",new Date().getTime().toString())}function j(){return parseInt(GM_getValue("cache/expired","0"),10)}function f(e,t,...n){let c=G(e);c.status==="hit"?t(JSON.parse(c.content),...n):(s("Request",e),GM_xmlhttpRequest({method:"GET",url:e,onload(i){s("Request succeed",i.status,i.responseText);let a={error:!1,status:i.status,content:i.responseText};i.status===200&&R(e,JSON.stringify(a)),t(a,...n)},onerror(){s("Request fail")}}))}function I(e,t){/.*\.luogu\..*/.test(document.location.hostname)?e():t()}var r="2.2.9",C="2.2.0",o,d=[[".am-comment-bd",[/^\/$/,/^\/discuss\/.*$/]],[".content",[/^\/user\/.*$/]],[".message",[/^\/chat.*$/]]];function J(){for(let e=0;e<d.length;e++)for(let t=0;t<d[e][1].length;t++)if(d[e][1][t].test(document.location.pathname))return!0;return!1}function N(){let e=[];for(let t=0;t<d.length;t++)for(let n=0;n<d[t][1].length;n++)d[t][1][n].test(document.location.pathname)&&(e[e.length]=document.querySelectorAll(d[t][0]));return e}var l=[["aini","\u7231\u4F60"],["aiq","\u7231\u60C5"],["am","\u50B2\u6162"],["azgc","\u6697\u4E2D\u89C2\u5BDF"],["baiy","\u767D\u773C"],["bangbangt","\u68D2\u68D2\u7CD6"],["banzz","\u642C\u7816\u4E2D"],["baojin","\u7206\u7B4B"],["bb","\u4FBF\u4FBF"],["bkx","\u4E0D\u5F00\u5FC3"],["bl","\u98D9\u6CEA"],["bp","\u97AD\u70AE"],["bq","\u62B1\u62F3"],["bs","\u9119\u89C6"],["bt","\u62DC\u6258"],["bu","\u4E0D"],["bx","\u62DC\u8C22"],["bz","\u95ED\u5634"],["cd","\u83DC\u5200"],["cg","\u5403\u74DC"],["ch","\u64E6\u6C57"],["cha","\u8336"],["chi","\u5403"],["cj","\u5DEE\u52B2"],["cp","\u949E\u7968"],["cs","\u6CA7\u6851"],["cy","\u5472\u7259"],["dan","\u86CB"],["dao","\u5200"],["dax","\u5927\u7B11"],["db","\u60A0\u95F2"],["dg","\u86CB\u7CD5"],["dk","\u5927\u54ED"],["dl","\u706F\u7B3C"],["doge","\u72D7\u5934"],["dx","\u51CB\u8C22"],["dy","\u5F97\u610F"],["dz","\u70B9\u8D5E"],["ee","\u5443"],["emm","\u55EF..."],["fad","\u53D1\u6296"],["fan","\u996D"],["fd","\u53D1\u5446"],["fendou","\u594B\u6597"],["fj","\u98DE\u673A"],["fn","\u6124\u6012"],["fw","\u98DE\u543B"],["gg","\u5C34\u5C2C"],["gun","\u8BF7\uFF08\u6EDA\uFF09"],["gy","\u52FE\u5F15"],["gz","\u9F13\u638C"],["hanx","\u61A8\u7B11"],["haob","\u597D\u68D2"],["hb","\u7EA2\u5305"],["hc","\u82B1\u75F4"],["hd","\u597D\u7684"],["hec","\u559D\u5F69"],["hhd","\u5475\u5475\u54D2"],["hn","\u559D\u5976"],["hp","\u5BB3\u6015"],["hq","\u54C8\u6B20"],["hsh","\u6325\u624B"],["ht","\u56DE\u5934"],["huaix","\u574F\u7B11"],["hx","\u5BB3\u7F9E"],["jd","\u6FC0\u52A8"],["jh","\u83CA\u82B1"],["jiaybb","\u52A0\u6CB9\u62B1\u62B1"],["jiaybs","\u52A0\u6CB9\u5FC5\u80DC"],["jie","\u9965\u997F"],["jk","\u60CA\u6050"],["jw","\u8857\u821E"],["jx","\u60CA\u559C"],["jy","\u60CA\u8BB6"],["ka","\u53EF\u7231"],["kb","\u62A0\u9F3B"],["kel","\u53EF\u601C"],["kf","\u5496\u5561"],["kg","K\u6B4C"],["kk","\u5FEB\u54ED\u4E86"],["kl","\u9AB7\u9AC5"],["kt","\u78D5\u5934"],["kuk","\u9177"],["kun","\u56F0"],["kzht","\u53E3\u7F69\u62A4\u4F53"],["lb","\u6CEA\u5954"],["lengh","\u51B7\u6C57"],["lh","\u6D41\u6C57"],["ll","\u6D41\u6CEA"],["lm","\u51B7\u6F20"],["lq","\u7BEE\u7403"],["lw","\u793C\u7269"],["lyj","\u8FA3\u773C\u775B"],["mdfq","\u5FD9\u5230\u98DE\u8D77"],["mg","\u73AB\u7470"],["mjl","\u6478\u9526\u9CA4"],["mm","\u5356\u840C"],["mwbq","\u9762\u65E0\u8868\u60C5"],["my","\u6478\u9C7C"],["ng","\u96BE\u8FC7"],["nkt","\u8111\u58F3\u75BC"],["oh","\u6004\u706B"],["oy","\u5662\u54DF"],["pch","\u74E2\u866B"],["pj","\u5564\u9152"],["pp","\u4E52\u4E53"],["px","\u55B7\u8840"],["pz","\u6487\u5634"],["qd","\u7CD7\u5927\u4E86"],["qiang","\u5F3A"],["qiao","\u6572"],["qidao","\u7948\u7977"],["qq","\u4EB2\u4EB2"],["qt","\u62F3\u5934"],["ruo","\u8E29"],["sa","\u793A\u7231"],["se","\u8272"],["sh","\u9001\u82B1"],["shd","\u95EA\u7535"],["shl","\u80DC\u5229"],["shq","\u624B\u67AA"],["shuai","\u8870"],["shui","\u7761"],["shxi","\u53CC\u559C"],["sr","\u9A9A\u6270"],["tiao","\u8DF3\u8DF3"],["tl","\u6258\u8138"],["tnl","\u592A\u96BE\u4E86"],["tp","\u8C03\u76AE"],["ts","\u6258\u816E"],["tsh","\u8DF3\u7EF3"],["tt","\u5934\u79C3"],["tuu","\u5410"],["tx","\u5077\u7B11"],["ty","\u592A\u9633"],["wbk","\u6211\u4E0D\u770B"],["whl","\u95EE\u53F7\u8138"],["wl","\u65E0\u804A"],["wn","\u65E0\u5948"],["wosl","\u6211\u9178\u4E86"],["wq","\u59D4\u5C48"],["ws","\u63E1\u624B"],["wul","\u6342\u8138"],["wx","\u5FAE\u7B11"],["wzm","\u6211\u6700\u7F8E"],["xhx","\u5C0F\u6CB3\u87F9"],["xia","\u5413"],["xig","\u897F\u74DC"],["xin","\u7231\u5FC3"],["xjj","\u5C0F\u7EA0\u7ED3"],["xk","\u7B11\u54ED"],["xs","\u5FC3\u788E"],["xu","\u5618"],["xw","\u732E\u543B"],["xy","\u5C0F\u6837"],["xyx","\u659C\u773C\u7B11"],["yao","\u836F"],["yb","\u62E5\u62B1"],["ybyb","\u5143\u5B9D"],["yhh","\u53F3\u54FC\u54FC"],["yiw","\u7591\u95EE"],["yl","\u6708\u4EAE"],["youl","\u5E7D\u7075"],["youtj","\u53F3\u592A\u6781"],["yt","\u7F8A\u9A7C"],["yun","\u6655"],["yx","\u9634\u9669"],["zhd","\u70B8\u5F39"],["zhem","\u6298\u78E8"],["zhh","\u5DE6\u54FC\u54FC"],["zhm","\u5492\u9A82"],["zhq","\u8F6C\u5708"],["zj","\u518D\u89C1"],["zk","\u6293\u72C2"],["zq","\u8DB3\u7403"],["zt","\u732A\u5934"],["zuotj","\u5DE6\u592A\u6781"],["zyj","\u7728\u773C\u775B"]],V="/%EMOJI%([^<A-Za-z][^>]*<)",E='<span style="color: #c8c8c8; font-size: 0.3em;">/%EMOJI%</span><img src="%SOURCE%" alt="%NAME%" title="%NAME%" class="lgse-emoji-image" width="28px" height="28px">$1';function S(e){if(e.nodeType===1){if(e.tagName==="A"||e.tagName==="CODE")return[!1,e.outerHTML];let t=e.childNodes,n=!1,c="";for(let i=0;i<t.length;i++){let a=S(t[i]);n=n||a[0],c+=a[1]}return n&&(e.innerHTML=c),[n,e.outerHTML]}if(e.nodeType===3){let t=!1,n=`>${e.data} <`;for(let c=0;c<l.length;c++){let i=new RegExp(V.replace(/%EMOJI%/g,l[c][0]),"g"),a=E.replace(/%EMOJI%/g,l[c][0]).replace(/%NAME%/g,l[c][1]);for(;i.test(n);)n=n.replace(i,a),t=!0}return[t,n.substring(1,n.length-2)]}return[!1,""]}function T(){let e=N(),t=!1;for(let n=0;n<e.length;n++)for(let c=0;c<e[n].length;c++)if(e[n][c].lgse_replaced!=="true"){let i=S(e[n][c]);t=t||i[0],e[n][c].lgse_replaced="true"}t&&s("Replaced"),setTimeout(T,1e3)}var b=`<style>
    .se-ent {
        z-index: 100;
        position: fixed;
        left: 30px;
        bottom: 30px;
        border-radius: 5px;
        background-color: #fff;
        padding: 11px;
        width: auto;
        height: auto;
        cursor: pointer;
    }
    .se-ent:hover {
        background-color: #ccc;
    }
    .se-mnu {
        z-index: 999;
        position: fixed;
        top: 30px;
        left: 30px;
        border-radius: 5px;
        background-color: #fff;
        padding: 5px;
        display: none;
        width: max(35%, 300px);
        height: calc(100% - 130px);
        border: 1px solid #0e90d2;
    }
    .se-emj {
        float: left;
        background-color: #eee;
        width: calc(28px + 7em);
        height: auto;
        border-radius: 2px;
        margin: 5px;
    }
    .se-emj:hover {
        background-color: #ccc;
    }
    .se-ipt {
        width: calc(100% - 10px);
        height: 1.5em;
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }
    .se-dsp {
        width: auto;
        height: auto;
        overflow: auto;
    }
    .se-hlt {
        color: #e67e22;
    }
</style>
<div class="se-ent" id="se-ent" oncontextmenu="window.open('https://lgse.heyc.eu.org/lgse-settings-${C}.html')" title="\u53F3\u952E\u6253\u5F00\u8BBE\u7F6E" status="ordinary">
    <img src="%SOURCE_CY%" width="28px" height="28px">
</div>
<div class="se-mnu" id="se-mnu">
    <div class="se-dsp" id="se-srh">
        <input type="text" class="se-ipt" id="se-ipt" placeholder="\u641C\u7D22\u8868\u60C5...">
        <div class="se-dsp" id="se-dsp"></div>
    </div>
    <div class="se-dsp" id="se-upd" style="display: none;">
        <center id="se-upm"><b>LGSE \u66F4\u65B0</b><br></center>
        <div class="se-dsp" id="se-cgl" style="display: none;"><center><b>\u66F4\u65B0\u65E5\u5FD7</b><br></center></div>
    </div>
</div>`,g=0,y=0,w='<div class="se-emj"><img src="%SOURCE%" alt="/%EMOJI%" width="28px" height="28px">  %TEXT%</div>',_='<span class="se-hlt">%TEXT%</span>';function M(){let e=document.getElementById("se-ipt").value,t="";for(let n=0;n<l.length;n++)(e===""||l[n][0].replace(e,"")!==l[n][0]||l[n][1].replace(e,"")!==l[n][1])&&(t+=w.replace(/%EMOJI%/g,l[n][0]).replace(/%TEXT%/g,`${l[n][0].replaceAll(e,_.replace(/%TEXT%/g,e))}<br>${l[n][1].replaceAll(e,_.replace(/%TEXT%/g,e))}`));document.getElementById("se-dsp").innerHTML=t}function x(){(o["srh-emj"]||document.getElementById("se-upd").innerText!=="")&&(g=1-g,document.getElementById("se-mnu").style.display=g===0?"none":"grid"),o["srh-emj"]&&g===1&&(document.getElementById("se-ipt").focus(),M())}function q(){y=1-y,document.getElementById("se-cgl").style.display=y===0?"none":"block"}function U(){$("body").append(b),o["srh-emj"]||(document.getElementById("se-srh").style.display="none"),document.getElementById("se-mnu").addEventListener("click",e=>{document.getElementById("se-mnu").style.display="grid",e.stopPropagation()}),document.getElementById("se-ent").addEventListener("click",e=>{x(),e.stopPropagation()}),document.addEventListener("click",()=>{g&&x()}),document.getElementById("se-ipt").addEventListener("input",()=>{M()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&g&&x()})}var A=/^[0-9]+\.[0-9]+\.[0-9]+$/g,D="https://lgse-source.heyc.eu.org/version",H="https://lgse-source.heyc.eu.org/changelog.txt",P=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="28px" width="28px">
    <circle cx="14" cy="14" r="14" stroke-width="0" fill="#fe4c61" />
    <line x1="14" y1="5" x2="5" y2="14" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    <line x1="14" y1="5" x2="23" y2="14" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    <line x1="14" y1="5" x2="14" y2="23" stroke="#fff" stroke-width="3" stroke-linecap="round" />
</svg>`,k='<img src="%SOURCE_CY%" width="28px" height="28px">';function X(e){$("#se-upm").append(`\u5F53\u524D <b><span style="color: #e67e22;">${r}</span></b> --&gt; \u6700\u65B0 <b><span style="color: #52c41a;">${e}</span></b><br><a href="https://lgse-source.heyc.eu.org/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">\u70B9\u51FB\u5347\u7EA7</a> <a id="se_cgl" style="font-size: 0.7em">\u663E\u793A/\u9690\u85CF\u66F4\u65B0\u65E5\u5FD7</a>`),document.getElementById("se_cgl").addEventListener("click",()=>{q()}),s("Popped upgrade content")}function Y(e){$("#se-upm").append(`\u5F53\u524D <b><span style="color: #52c41a;">${r}</span></b> &lt;-- \u6700\u65B0 <b><span style="color: #e67e22;">${e}</span></b><br><a href="https://lgse-source.heyc.eu.org/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">\u70B9\u51FB\u964D\u7EA7</a> <a id="se_cgl" style="font-size: 0.7em">\u663E\u793A/\u9690\u85CF\u66F4\u65B0\u65E5\u5FD7</a>`),document.getElementById("se_cgl").addEventListener("click",()=>{q()}),s("Popped downgrade content")}function F(){$("#se-upm").append(`\u5F53\u524D <b><span style="color: #52c41a;">${r}</span></b> --- <b><span style="color: #e67e22;">\u5931\u8D25\uFF01</span></b>`),s("Popped CFU failed content")}function B(){document.getElementById("se-ent").status===null||document.getElementById("se-ent").status==="ordinary"?(document.getElementById("se-ent").innerHTML=P,document.getElementById("se-ent").status="update-icon"):(document.getElementById("se-ent").innerHTML=k,document.getElementById("se-ent").status="ordinary"),setTimeout(B,1e3)}function K(e){!e.error&&e.status===200?(s("Get update log success"),$("#se-cgl").append(marked.parse(e.content))):s("Get update log failed")}function Z(e){!e.error&&e.status===200&&A.test(e.content)?(s("Get version succeed",r,e.content),e.content>r&&(X(e.content),B()),e.content<r&&Y(e.content),e.content!==r&&(document.getElementById("se-upd").style.display="block",f(H,K))):(s("Get version fail"),F())}var p=["https://cdn.jsdelivr.net/gh/hyc1230/qqemoji/56x56/%EMOJI%.gif","https://ghproxy.com/https://raw.githubusercontent.com/hyc1230/qqemoji/master/56x56/%EMOJI%.gif","https://qqemoji.heyc.eu.org/56x56/%EMOJI%.gif","https://qqemoji.netlify.app/56x56/%EMOJI%.gif"],v={"rep-emj":!0,"srh-emj":!0,"img-src":2,"chk-upd":!0},m=["rep-emj","srh-emj","img-src","chk-upd"];function Q(){try{let e=GM_getValue(`${!0?"":"LGSE_"}settings`,"{}");s("Settings",e),o=JSON.parse(e)}catch(e){s(`ERROR ${e}`),s("Using default settings"),o=v}for(let e=0;e<m.length;e++)o[m[e]]==null&&(o[m[e]]=v[m[e]])}function W(){s("Loading for Luogu"),E=E.replace(/%SOURCE%/g,p[o["img-src"]]),b=b.replace(/%SOURCE_CY%/g,p[o["img-src"]].replace(/%EMOJI%/g,"cy")),w=w.replace(/%SOURCE%/g,p[o["img-src"]]),k=k.replace(/%SOURCE_CY%/g,p[o["img-src"]].replace(/%EMOJI%/g,"cy")),o["rep-emj"]&&J()&&(s("Start replacing"),T()),U(),o["chk-upd"]&&!0&&f(D,Z)}var ee=`<style>
    .se-clr {
        z-index: 999;
        position: fixed;
        right: 30px;
        bottom: 30px;
        border-radius: 5px;
        border: 0px;
        padding-top: .5em;
        padding-bottom: .5em;
        padding-left: 1em;
        padding-right: 1em;
        color: #fff;
        background-color: rgb(52, 152, 219);
        font-size: 1em;
        cursor: pointer;
    }
    .se-clr:hover {
        background-color: rgba(52, 152, 219, 0.9);
    }
</style>
<button class="se-clr" id="se-clr">\u6E05\u9664 LGSE \u7F13\u5B58</button>`;function te(){s("Loading for Settings page"),document.getElementById("rep-emj").checked=o["rep-emj"],document.getElementById("srh-emj").checked=o["srh-emj"],document.getElementById("img-src").selectedIndex=o["img-src"],document.getElementById("chk-upd").checked=o["chk-upd"],document.getElementById("status").style.color="#52c41a",document.getElementById("status").innerText="\u52A0\u8F7D\u5B8C\u6210",document.getElementById("info").innerText=JSON.stringify(o),$("body").append(ee),document.getElementById("se-clr").addEventListener("click",()=>{let e=new Date().getTime(),t=j();e-t<6e5?window.alert(`\u8DDD\u79BB\u4E0A\u6B21\u6E05\u9664\u7F13\u5B58\u8FD8\u6CA1\u6709 10 \u5206\u949F\uFF0C\u8BF7\u5728 ${Math.ceil((6e5-(e-t))/6e4)} \u5206\u949F\u540E\u91CD\u8BD5\u3002`):(h(),window.alert("\u6E05\u9664\u7F13\u5B58\u6210\u529F\uFF0C\u8BF7\u5237\u65B0\u5176\u5B83\u9875\u9762\u4EE5\u4F7F\u66F4\u6539\u751F\u6548\u3002"))}),!0||(document.getElementById("se-clr").style.display="none")}function z(){let e=document.getElementById("info").innerText;e!==""&&e!==JSON.stringify(o)&&(o=JSON.parse(e),GM_setValue(`${!0?"":"LGSE_"}settings`,e),document.getElementById("status").style.color="#52c41a",document.getElementById("status").innerText="\u5DF2\u4FDD\u5B58",s("Saved")),setInterval(z,1e3)}function L(){s("Starting"),Q()}function ne(){!0&&GM_getValue(`${!0?"":"LGSE_"}ver`,"")!==r&&(s("Installed version not match"),h(),GM_setValue(`${!0?"":"LGSE_"}ver`,r))}function se(){try{L(),ne(),W()}catch(e){s(`ERROR ${e}`),s("Crash")}}function ce(){try{L(),te(),z()}catch(e){s(`ERROR ${e}`),s("Crash")}}I(se,ce);})();
