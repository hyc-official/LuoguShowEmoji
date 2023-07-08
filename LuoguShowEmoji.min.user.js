// ==UserScript==
// @name         Luogu Show Emoji
// @namespace    blog.heyc.eu.org
// @version      2.2.4
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

(()=>{var G="color: #E67E22;";function n(e){console.log(`%c[lgse] ${e}`,G)}function R(e){let t={};n(`Finding cache: ${e}`);let s=new Date,l=new Date,i=new Date().getTime();return s.setTime(parseInt(GM_getValue(`cache/time_${e}`,"0"),10)),l.setTime(parseInt(GM_getValue("cache/expired","0"),10)),s===0?(n("Cache miss"),t.status="miss"):i-s>864e5||s<l?(n("Cache expired"),t.status="expired"):(n("Cache hit"),t.status="hit",t.content=GM_getValue(`cache/content_${e}`)),t}function C(e,t){n(`Setting cache: ${e} => ${t}`),GM_setValue(`cache/content_${e}`,t),GM_setValue(`cache/time_${e}`,new Date().getTime().toString())}function f(){n("Clearing cache"),GM_setValue("cache/expired",new Date().getTime().toString())}function j(){return parseInt(GM_getValue("cache/expired","0"),10)}function y(e,t){let s=R(e);s.status==="hit"?t(JSON.parse(s.content)):(n(`Requesting ${e}`),GM_xmlhttpRequest({method:"GET",url:e,onload(l){n(`Request success: HTTP ${l.status}, Content: ${l.responseText}`);let i={error:!1,status:l.status,content:l.responseText};l.status===200&&C(e,JSON.stringify(i)),t(i)},onerror(){n("Request failed")}}))}function v(e,t){/.*\.luogu\..*/.test(document.location.hostname)?e():t()}var a="2.2.4",J="2.2.0",c,d=[[".am-comment-bd",[/^\/$/,/^\/discuss\/.*$/]],[".content",[/^\/user\/.*$/]],[".message-block",[/^\/chat.*$/]]];function V(){for(let e=0;e<d.length;e++)for(let t=0;t<d[e][1].length;t++)if(d[e][1][t].test(document.location.pathname))return!0;return!1}function N(){let e=[];for(let t=0;t<d.length;t++)for(let s=0;s<d[t][1].length;s++)d[t][1][s].test(document.location.pathname)&&(e[e.length]=document.querySelectorAll(d[t][0]));return e}var o=[["aini","\u7231\u4F60"],["aiq","\u7231\u60C5"],["am","\u50B2\u6162"],["azgc","\u6697\u4E2D\u89C2\u5BDF"],["baiy","\u767D\u773C"],["bangbangt","\u68D2\u68D2\u7CD6"],["banzz","\u642C\u7816\u4E2D"],["baojin","\u7206\u7B4B"],["bb","\u4FBF\u4FBF"],["bkx","\u4E0D\u5F00\u5FC3"],["bl","\u98D9\u6CEA"],["bp","\u97AD\u70AE"],["bq","\u62B1\u62F3"],["bs","\u9119\u89C6"],["bt","\u62DC\u6258"],["bu","\u4E0D"],["bz","\u95ED\u5634"],["cd","\u83DC\u5200"],["cg","\u5403\u74DC"],["ch","\u64E6\u6C57"],["cha","\u8336"],["chi","\u5403"],["cj","\u5DEE\u52B2"],["cp","\u949E\u7968"],["cs","\u6CA7\u6851"],["cy","\u5472\u7259"],["dan","\u86CB"],["dao","\u5200"],["dax","\u5927\u7B11"],["db","\u60A0\u95F2"],["dg","\u86CB\u7CD5"],["dk","\u5927\u54ED"],["dl","\u706F\u7B3C"],["doge","\u72D7\u5934"],["dx","\u51CB\u8C22"],["dy","\u5F97\u610F"],["dz","\u70B9\u8D5E"],["ee","\u5443"],["emm","\u55EF..."],["fad","\u53D1\u6296"],["fan","\u996D"],["fd","\u53D1\u5446"],["fendou","\u594B\u6597"],["fj","\u98DE\u673A"],["fn","\u6124\u6012"],["fw","\u98DE\u543B"],["gg","\u5C34\u5C2C"],["gy","\u52FE\u5F15"],["gz","\u9F13\u638C"],["hanx","\u61A8\u7B11"],["haob","\u597D\u68D2"],["hb","\u7EA2\u5305"],["hc","\u82B1\u75F4"],["hd","\u597D\u7684"],["hec","\u559D\u5F69"],["hhd","\u5475\u5475\u54D2"],["hn","\u559D\u5976"],["hp","\u5BB3\u6015"],["hq","\u54C8\u6B20"],["hsh","\u6325\u624B"],["ht","\u56DE\u5934"],["huaix","\u574F\u7B11"],["hx","\u5BB3\u7F9E"],["jd","\u6FC0\u52A8"],["jh","\u83CA\u82B1"],["jiaybb","\u52A0\u6CB9\u62B1\u62B1"],["jiaybs","\u52A0\u6CB9\u5FC5\u80DC"],["jie","\u9965\u997F"],["jk","\u60CA\u6050"],["jw","\u8857\u821E"],["jx","\u60CA\u559C"],["jy","\u60CA\u8BB6"],["ka","\u53EF\u7231"],["kb","\u62A0\u9F3B"],["kel","\u53EF\u601C"],["kf","\u5496\u5561"],["kg","K\u6B4C"],["kk","\u5FEB\u54ED\u4E86"],["kl","\u9AB7\u9AC5"],["kt","\u78D5\u5934"],["kuk","\u9177"],["kun","\u56F0"],["kzht","\u53E3\u7F69\u62A4\u4F53"],["lb","\u6CEA\u5954"],["lengh","\u51B7\u6C57"],["lh","\u6D41\u6C57"],["ll","\u6D41\u6CEA"],["lm","\u51B7\u6F20"],["lq","\u7BEE\u7403"],["lw","\u793C\u7269"],["lyj","\u8FA3\u773C\u775B"],["mdfq","\u5FD9\u5230\u98DE\u8D77"],["mg","\u73AB\u7470"],["mm","\u5356\u840C"],["ng","\u96BE\u8FC7"],["nkt","\u8111\u58F3\u75BC"],["oh","\u6004\u706B"],["oy","\u5662\u54DF"],["pch","\u74E2\u866B"],["pj","\u5564\u9152"],["pp","\u4E52\u4E53"],["px","\u55B7\u8840"],["pz","\u6487\u5634"],["qd","\u7CD7\u5927\u4E86"],["qiang","\u5F3A"],["qiao","\u6572"],["qidao","\u7948\u7977"],["qq","\u4EB2\u4EB2"],["qt","\u62F3\u5934"],["ruo","\u8E29"],["sa","\u793A\u7231"],["se","\u8272"],["sh","\u9001\u82B1"],["shd","\u95EA\u7535"],["shl","\u80DC\u5229"],["shq","\u624B\u67AA"],["shuai","\u8870"],["shui","\u7761"],["shxi","\u53CC\u559C"],["sr","\u9A9A\u6270"],["tiao","\u8DF3\u8DF3"],["tl","\u6258\u8138"],["tnl","\u592A\u96BE\u4E86"],["tp","\u8C03\u76AE"],["ts","\u6258\u816E"],["tsh","\u8DF3\u7EF3"],["tt","\u5934\u79C3"],["tuu","\u5410"],["tx","\u5077\u7B11"],["ty","\u592A\u9633"],["wbk","\u6211\u4E0D\u770B"],["whl","\u95EE\u53F7\u8138"],["wl","\u65E0\u804A"],["wn","\u65E0\u5948"],["wosl","\u6211\u9178\u4E86"],["wq","\u59D4\u5C48"],["ws","\u63E1\u624B"],["wul","\u6342\u8138"],["wx","\u5FAE\u7B11"],["wzm","\u6211\u6700\u7F8E"],["xhx","\u5C0F\u6CB3\u87F9"],["xia","\u5413"],["xig","\u897F\u74DC"],["xin","\u7231\u5FC3"],["xjj","\u5C0F\u7EA0\u7ED3"],["xk","\u7B11\u54ED"],["xs","\u5FC3\u788E"],["xu","\u5618"],["xw","\u732E\u543B"],["xy","\u5C0F\u6837"],["xyx","\u659C\u773C\u7B11"],["yao","\u836F"],["yb","\u62E5\u62B1"],["yhh","\u53F3\u54FC\u54FC"],["yiw","\u7591\u95EE"],["yl","\u6708\u4EAE"],["youl","\u5E7D\u7075"],["youtj","\u53F3\u592A\u6781"],["yt","\u7F8A\u9A7C"],["yun","\u6655"],["yx","\u9634\u9669"],["zhd","\u70B8\u5F39"],["zhem","\u6298\u78E8"],["zhh","\u5DE6\u54FC\u54FC"],["zhm","\u5492\u9A82"],["zhq","\u8F6C\u5708"],["zj","\u518D\u89C1"],["zk","\u6293\u72C2"],["zq","\u8DB3\u7403"],["zt","\u732A\u5934"],["zuotj","\u5DE6\u592A\u6781"],["zyj","\u7728\u773C\u775B"]],U="(>[^<]*?)/%EMOJI%([^<A-Za-z][^<]*</[^a])",A="(>[^<]*?)/%EMOJI%([^<A-Za-z][^<]*<[^/])",h='$1<span style="color: #c8c8c8; font-size: 0.3em;">/%EMOJI%</span><img src="%SOURCE%" alt="%NAME%" title="%NAME%" width="28px" height="28px">$2';function H(){let e=N(),t=!1;for(let s=0;s<e.length;s++)for(let l=0;l<e[s].length;l++)if(e[s][l].innerHTML.indexOf("<!--LGSE Replaced-->")===-1){let i=`${e[s][l].innerHTML} `;for(let r=o.length-1;r>=0;r--){i=i.replace(new RegExp(`(/${o[r][0]})(<span)`,"g"),"$1 $2").replace(new RegExp(`(/${o[r][0]})(</{0,1}[^s/])`,"g"),"$1 $2");let k=new RegExp(U.replace(/%EMOJI%/g,o[r][0]),"g"),I=new RegExp(A.replace(/%EMOJI%/g,o[r][0]),"g");for(;k.test(i);)i=i.replace(k,h.replace(/%EMOJI%/g,o[r][0]).replace(/%NAME%/g,o[r][1])),t=!0;for(;I.test(i);)i=i.replace(I,h.replace(/%EMOJI%/g,o[r][0]).replace(/%NAME%/g,o[r][1])),t=!0}i+="<!--LGSE Replaced-->",e[s][l].innerHTML=i}t&&n("Replaced")}function T(){H(),setTimeout(T,1e3)}var E=`<style>
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
<div class="se-ent" id="se-ent" oncontextmenu="window.open('https://lgse.heyc.eu.org/lgse-settings-${J}.html')" title="\u53F3\u952E\u6253\u5F00\u8BBE\u7F6E" status="ordinary">
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
</div>`,g=0,x=0,b='<div class="se-emj"><img src="%SOURCE%" alt="/%EMOJI%" width="28px" height="28px">  %TEXT%</div>',_='<span class="se-hlt">%TEXT%</span>';function O(){let e=document.getElementById("se-ipt").value,t="";for(let s=0;s<o.length;s++)(e===""||o[s][0].replace(e,"")!==o[s][0]||o[s][1].replace(e,"")!==o[s][1])&&(t+=b.replace(/%EMOJI%/g,o[s][0]).replace(/%TEXT%/g,`${o[s][0].replaceAll(e,_.replace(/%TEXT%/g,e))}<br>${o[s][1].replaceAll(e,_.replace(/%TEXT%/g,e))}`));document.getElementById("se-dsp").innerHTML=t}function S(){(c["srh-emj"]||document.getElementById("se-upd").innerText!=="")&&(g=1-g,document.getElementById("se-mnu").style.display=g===0?"none":"grid"),c["srh-emj"]&&g===1&&O()}function L(){x=1-x,document.getElementById("se-cgl").style.display=x===0?"none":"block"}function D(){$("body").append(E),c["srh-emj"]||(document.getElementById("se-srh").style.display="none"),document.getElementById("se-mnu").addEventListener("click",e=>{document.getElementById("se-mnu").style.display="grid",e.stopPropagation()}),document.getElementById("se-ent").addEventListener("click",e=>{S(),e.stopPropagation()}),document.addEventListener("click",()=>{g&&S()}),document.getElementById("se-ipt").addEventListener("input",()=>{O()})}var P=/[0-9]+\.[0-9]+\.[0-9]+/g,X="https://lgse-source.heyc.eu.org/version",Y="https://lgse-source.heyc.eu.org/changelog.txt",F=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="28px" width="28px">
    <circle cx="14" cy="14" r="14" stroke-width="0" fill="#fe4c61" />
    <line x1="14" y1="5" x2="5" y2="14" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    <line x1="14" y1="5" x2="23" y2="14" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    <line x1="14" y1="5" x2="14" y2="23" stroke="#fff" stroke-width="3" stroke-linecap="round" />
</svg>`,w='<img src="%SOURCE_CY%" width="28px" height="28px">';function Z(e){$("#se-upm").append(`\u5F53\u524D <b><span style="color: #e67e22;">${a}</span></b> --&gt; \u6700\u65B0 <b><span style="color: #52c41a;">${e}</span></b><br><a href="https://lgse-source.heyc.eu.org/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">\u70B9\u51FB\u5347\u7EA7</a> <a id="se_cgl" style="font-size: 0.7em">\u663E\u793A/\u9690\u85CF\u66F4\u65B0\u65E5\u5FD7</a>`),document.getElementById("se_cgl").addEventListener("click",()=>{L()}),n("Popped upgrade content")}function K(e){$("#se-upm").append(`\u5F53\u524D <b><span style="color: #52c41a;">${a}</span></b> &lt;-- \u6700\u65B0 <b><span style="color: #e67e22;">${e}</span></b><br><a href="https://lgse-source.heyc.eu.org/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">\u70B9\u51FB\u964D\u7EA7</a> <a id="se_cgl" style="font-size: 0.7em">\u663E\u793A/\u9690\u85CF\u66F4\u65B0\u65E5\u5FD7</a>`),document.getElementById("se_cgl").addEventListener("click",()=>{L()}),n("Popped downgrade content")}function Q(){$("#se-upm").append(`\u5F53\u524D <b><span style="color: #52c41a;">${a}</span></b> --- <b><span style="color: #e67e22;">\u5931\u8D25\uFF01</span></b>`),n("Popped CFU failed content")}function q(){document.getElementById("se-ent").status===null||document.getElementById("se-ent").status==="ordinary"?(document.getElementById("se-ent").innerHTML=F,document.getElementById("se-ent").status="update-icon"):(document.getElementById("se-ent").innerHTML=w,document.getElementById("se-ent").status="ordinary"),setTimeout(q,1e3)}function W(e){!e.error&&e.status===200?(n("Get update log success"),$("#se-cgl").append(marked.parse(e.content))):n("Get update log failed")}function ee(e){!e.error&&e.status===200&&P.test(e.content)?(n(`Get version success: CV ${a} | LV ${e.content}`),e.content>a&&(Z(e.content),q()),e.content<a&&K(e.content),e.content!==a&&(document.getElementById("se-upd").style.display="block",y(Y,W))):(n("Get version failed"),Q())}var p=["https://cdn.jsdelivr.net/gh/hyc1230/qqemoji/56x56/%EMOJI%.gif","https://ghproxy.com/https://raw.githubusercontent.com/hyc1230/qqemoji/master/56x56/%EMOJI%.gif","https://qqemoji.heyc.eu.org/56x56/%EMOJI%.gif","https://qqemoji.netlify.app/56x56/%EMOJI%.gif"],M={"rep-emj":!0,"srh-emj":!0,"img-src":2,"chk-upd":!0},m=["rep-emj","srh-emj","img-src","chk-upd"];function te(){try{let e=GM_getValue(`${!0?"":"LGSE_"}settings`,"{}");n(`Settings: ${e}`),c=JSON.parse(e)}catch(e){n(`ERROR ${e}`),n("Using default settings"),c=M}for(let e=0;e<m.length;e++)c[m[e]]==null&&(c[m[e]]=M[m[e]])}function ne(){n("Loading for Luogu"),h=h.replace(/%SOURCE%/g,p[c["img-src"]]),E=E.replace(/%SOURCE_CY%/g,p[c["img-src"]].replace(/%EMOJI%/g,"cy")),b=b.replace(/%SOURCE%/g,p[c["img-src"]]),w=w.replace(/%SOURCE_CY%/g,p[c["img-src"]].replace(/%EMOJI%/g,"cy")),c["rep-emj"]&&V()&&(n("Started replacing"),T()),D(),c["chk-upd"]&&!0&&y(X,ee)}var se=`<style>
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
<button class="se-clr" id="se-clr">\u6E05\u9664 LGSE \u7F13\u5B58</button>`;function ce(){n("Loading for Settings page"),document.getElementById("rep-emj").checked=c["rep-emj"],document.getElementById("srh-emj").checked=c["srh-emj"],document.getElementById("img-src").selectedIndex=c["img-src"],document.getElementById("chk-upd").checked=c["chk-upd"],document.getElementById("status").style.color="#52c41a",document.getElementById("status").innerText="\u52A0\u8F7D\u5B8C\u6210",document.getElementById("info").innerText=JSON.stringify(c),$("body").append(se),document.getElementById("se-clr").addEventListener("click",()=>{let e=new Date().getTime(),t=j();e-t<6e5?window.alert(`\u8DDD\u79BB\u4E0A\u6B21\u6E05\u9664\u7F13\u5B58\u8FD8\u6CA1\u6709 10 \u5206\u949F\uFF0C\u8BF7\u5728 ${Math.ceil((6e5-(e-t))/6e4)} \u5206\u949F\u540E\u91CD\u8BD5\u3002`):(f(),window.alert("\u6E05\u9664\u7F13\u5B58\u6210\u529F\uFF0C\u8BF7\u5237\u65B0\u5176\u5B83\u9875\u9762\u4EE5\u4F7F\u66F4\u6539\u751F\u6548\u3002"))}),!0||(document.getElementById("se-clr").style.display="none")}function z(){let e=document.getElementById("info").innerText;e!==""&&e!==JSON.stringify(c)&&(c=JSON.parse(e),GM_setValue(`${!0?"":"LGSE_"}settings`,e),document.getElementById("status").style.color="#52c41a",document.getElementById("status").innerText="\u5DF2\u4FDD\u5B58",n("Saved")),setInterval(z,1e3)}function B(){n("Started"),te()}function oe(){!0&&GM_getValue(`${!0?"":"LGSE_"}ver`,"")!==a&&(n("Installed version not match"),f(),GM_setValue(`${!0?"":"LGSE_"}ver`,a))}function ie(){try{B(),oe(),ne()}catch(e){n(`ERROR ${e}`),n("Crash")}}function le(){try{B(),ce(),z()}catch(e){n(`ERROR ${e}`),n("Crash")}}v(ie,le);})();
