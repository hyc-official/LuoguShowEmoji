// ==UserScript==
// @name         Luogu Show Emoji
// @namespace    blog.heyc.eu.org
// @version      2.1.2
// @description  Show emoji in Luogu
// @author       Heyc
// @match        https://www.luogu.com.cn/*
// @match        *://*/*lgse-settings*
// @icon         https://cdn.jsdelivr.net/gh/hyc-official/LGSE-page/favicon.ico
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @connect      lgse-source.netlify.app
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(()=>{var w="color: #E67E22;";function t(e){console.log(`%c[lgse] ${e}`,w)}function f(e,d){t(`Finding cache: ${e}`);let i=new Date,c=new Date().getTime();i.setTime(parseInt(GM_getValue(`cache/time_${e}`,"0"),10));let n={};c-i>864e5?(t("Cache miss"),GM_xmlhttpRequest({method:"GET",url:e,onload(o){t(`Request success: HTTP ${o.status}, Content: ${o.responseText}`),n={error:!1,status:o.status,content:o.responseText},o.status===200&&(GM_setValue(`cache/content_${e}`,JSON.stringify(n)),GM_setValue(`cache/time_${e}`,new Date().getTime().toString())),d(n)},onerror(o){t(`Request failed: HTTP ${o.status}`),n={error:!0,status:o.status},d(n)}})):(t("Cache hit"),n=JSON.parse(GM_getValue(`cache/content_${e}`)),d(n))}var a="2.1.2",y=[/\/discuss\/[0-9]+/,/\/user\/[0-9]+/,/\/chat.*/];function E(){if(document.location.pathname==="/")return!0;for(let e=0;e<y.length;e++)if(y[e].test(document.location.pathname))return!0;return!1}var r=["aini","aiq","am","azgc","baiy","bangbangt","banzz","baojin","bb","bkx","bl","bp","bq","bs","bt","bu","bz","cd","cg","ch","cha","chi","cj","cp","cs","cy","dan","dao","dax","db","dg","dk","dl","doge","dx","dy","dz","ee","emm","fad","fan","fd","fendou","fj","fn","fw","gg","gy","gz","hanx","haob","hb","hc","hd","hec","hhd","hn","hp","hq","hsh","ht","huaix","hx","jd","jh","jiaybb","jiaybs","jie","jk","jw","jx","jy","ka","kb","kel","kf","kg","kk","kl","kt","kuk","kun","kzht","lb","lengh","lh","ll","lm","lq","lw","lyj","mdfq","mg","mm","ng","nkt","oh","oy","pch","pj","pp","px","pz","qd","qiang","qiao","qidao","qq","qt","ruo","sa","se","sh","shd","shl","shq","shuai","shui","shxi","sr","tiao","tl","tnl","tp","ts","tsh","tt","tuu","tx","ty","wbk","whl","wl","wn","wosl","wq","ws","wul","wx","wzm","xhx","xia","xig","xin","xjj","xk","xs","xu","xw","xy","xyx","yao","yb","yhh","yiw","yl","youl","youtj","yt","yun","yx","zhd","zhem","zhh","zhm","zhq","zj","zk","zq","zt","zuotj","zyj"],q="(>[^<]*?)(/%EMOJI%)([^<A-Za-z])",p='$1<span style="color: #c8c8c8; font-size: 0.3em;">$2</span><img src="%SOURCE%" alt="/%EMOJI%" width="28px" height="28px">$3';function z(){let e=[document.querySelectorAll(".am-comment-bd"),document.querySelectorAll(".content"),document.querySelectorAll(".message-block")],d=!1;for(let i=0;i<e.length;i++)for(let c=0;c<e[i].length;c++)if(e[i][c].innerHTML.indexOf("<!--LGSE Replaced-->")===-1){let n=e[i][c].innerHTML;console.log(n);for(let o=r.length-1;o>=0;o--){n=n.replace(new RegExp(`(/${r[o]})(<span)`,"g"),"$1 $2"),n=n.replace(new RegExp(`(/${r[o]})(</{0,1}[^s/])`,"g"),"$1 $2");let m=new RegExp(q.replace(/%EMOJI%/g,r[o]),"g");for(;m.test(n);)n=n.replace(m,p.replace(/%EMOJI%/g,r[o])),d=!0}n+="<!--LGSE Replaced-->",e[i][c].innerHTML=n}d&&t("Replaced")}function b(){z(),setTimeout(b,1e3)}var l=`<style>
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
    z-index: 100;
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
</style>
<script>
var st = 0;
var emoji=["aini","aiq","am","azgc","baiy","bangbangt","banzz","baojin","bb","bkx","bl","bp","bq","bs","bt","bu","bz","cd","cg","ch","cha","chi","cj","cp","cs","cy","dan","dao","dax","db","dg","dk","dl","doge","dx","dy","dz","ee","emm","fad","fan","fd","fendou","fj","fn","fw","gg","gy","gz","hanx","haob","hb","hc","hd","hec","hhd","hn","hp","hq","hsh","ht","huaix","hx","jd","jh","jiaybb","jiaybs","jie","jk","jw","jx","jy","ka","kb","kel","kf","kg","kk","kl","kt","kuk","kun","kzht","lb","lengh","lh","ll","lm","lq","lw","lyj","mdfq","mg","mm","ng","nkt","oh","oy","pch","pj","pp","px","pz","qd","qiang","qiao","qidao","qq","qt","ruo","sa","se","sh","shd","shl","shq","shuai","shui","shxi","sr","tiao","tl","tnl","tp","ts","tsh","tt","tuu","tx","ty","wbk","whl","wl","wn","wosl","wq","ws","wul","wx","wzm","xhx","xia","xig","xin","xjj","xk","xs","xu","xw","xy","xyx","yao","yb","yhh","yiw","yl","youl","youtj","yt","yun","yx","zhd","zhem","zhh","zhm","zhq","zj","zk","zq","zt","zuotj","zyj"];
var emjhtml = '<div class="se-emj"><img src="%SOURCE%" alt="/%EMOJI%" width="28px" height="28px"> | %EMOJI%</div>';
var srh = %SRH%;
if (!srh)
{
    document.getElementById("se-srh").style.display = "none";
}
function se_cge()
{
    if (srh || document.getElementById("se-upd").innerText != "")
    {
        st = 1 - st;
        document.getElementById("se-mnu").style.display = (st == 0 ? "none" : "grid");
    }
    if (srh && st == 1)
    {
        se_srh();
    }
}
function se_srh()
{
    let wd = document.getElementById("se-ipt").value;
    let ih = "";
    for (let i = 0; i < emoji.length; i++)
    {
        if (wd == "" || emoji[i].replace(wd, "") != emoji[i])
        {
            ih += emjhtml.replace(/%EMOJI%/g, emoji[i]);
        }
    }
    document.getElementById("se-dsp").innerHTML = ih;
}
<\/script>
<div class="se-ent" id="se-ent" onclick="se_cge()" oncontextmenu="window.open('https://lgse.netlify.app/lgse-settings-${a}.html')" title="\u53F3\u952E\u6253\u5F00\u8BBE\u7F6E" status="ordinary">
    <img src="%SOURCE_CY%" width="28px" height="28px">
</div>
<div class="se-mnu" id="se-mnu">
    <div class="se-dsp" id="se-srh">
        <input type="text" class="se-ipt" id="se-ipt" placeholder="\u641C\u7D22\u8868\u60C5..." oninput="se_srh()">
        <div class="se-dsp" id="se-dsp"></div>
    </div>
    <center><div class="se-dsp" id="se-upd"></div></center>
</div>`;function I(){$("body").append(l)}var S=/[0-9]+\.[0-9]+\.[0-9]+/g,v="https://lgse-source.netlify.app/version",O=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="28px" width="28px">
    <circle cx="14" cy="14" r="14" stroke-width="0" fill="#fe4c61" />
    <line x1="14" y1="5" x2="5" y2="14" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    <line x1="14" y1="5" x2="23" y2="14" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    <line x1="14" y1="5" x2="14" y2="23" stroke="#fff" stroke-width="3" stroke-linecap="round" />
</svg>`,g='<img src="%SOURCE_CY%" width="28px" height="28px">';function _(e){$("#se-upd").append(`<center><b>LGSE \u66F4\u65B0</b><br>\u5F53\u524D <b><span style="color: #e67e22;">${a}</span></b> --&gt; \u6700\u65B0 <b><span style="color: #52c41a;">${e}</span></b><br><a href="https://lgse-source.netlify.app/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">\u70B9\u51FB\u5347\u7EA7</a></center>`),t("Popped upgrade content")}function M(e){$("#se-upd").append(`<center><b>LGSE \u66F4\u65B0</b><br>\u5F53\u524D <b><span style="color: #52c41a;">${a}</span></b> &lt;-- \u6700\u65B0 <b><span style="color: #e67e22;">${e}</span></b><br><a href="https://lgse-source.netlify.app/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">\u70B9\u51FB\u964D\u7EA7</a></center>`),t("Popped downgrade content")}function R(){$("#se-upd").append(`<center><b>LGSE \u66F4\u65B0</b><br>\u5F53\u524D <b><span style="color: #52c41a;">${a}</span></b> --- <b><span style="color: #e67e22;">\u5931\u8D25\uFF01</span></b></center>`),t("Popped CFU failed content")}function j(){document.getElementById("se-ent").status===null||document.getElementById("se-ent").status==="ordinary"?(document.getElementById("se-ent").innerHTML=O,document.getElementById("se-ent").status="update-icon"):(document.getElementById("se-ent").innerHTML=g,document.getElementById("se-ent").status="ordinary"),t(`upd_blink ${document.getElementById("se-ent").status}`),setTimeout(j,1e3)}function T(e){!e.error&&e.status===200&&S.test(e.content)?(t(`Get version success: CV ${a} | LV ${e.content}`),e.content>a&&(_(e.content),j()),e.content<a&&M(e.content)):(t("Get version failed"),R())}var h=["https://cdn.jsdelivr.net/gh/hyc1230/qqemoji/56x56/%EMOJI%.gif","https://ghproxy.com/https://raw.githubusercontent.com/hyc1230/qqemoji/master/56x56/%EMOJI%.gif","https://qqemoji.heyc.eu.org/56x56/%EMOJI%.gif","https://qqemoji.netlify.app/56x56/%EMOJI%.gif"],x={"rep-emj":!0,"srh-emj":!0,"img-src":0,"chk-upd":!0},u=["rep-emj","srh-emj","img-src","chk-upd"],s;function B(){try{let e=GM_getValue("settings","{}");t(`Settings: ${e}`),s=JSON.parse(e)}catch(e){t(`ERROR ${e}`),t("Using default settings"),s=x}for(let e=0;e<u.length;e++)s[u[e]]==null&&(s[u[e]]=x[u[e]])}function J(){t("Loading settings for Luogu"),p=p.replace(/%SOURCE%/g,h[s["img-src"]]),l=l.replace(/%SOURCE%/g,h[s["img-src"]]).replace(/%SOURCE_CY%/g,h[s["img-src"]].replace(/%EMOJI%/g,"cy")),g=g.replace(/%SOURCE_CY%/g,h[s["img-src"]].replace(/%EMOJI%/g,"cy")),s["rep-emj"]&&E()&&(t("Started replacing"),b()),s["srh-emj"]?l=l.replace(/%SRH%/g,"true"):l=l.replace(/%SRH%/g,"false"),I(),s["chk-upd"]&&f(v,T)}function L(){t("Loading settings for Settings page"),document.getElementById("rep-emj").checked=s["rep-emj"],document.getElementById("srh-emj").checked=s["srh-emj"],document.getElementById("img-src").selectedIndex=s["img-src"],document.getElementById("chk-upd").checked=s["chk-upd"],document.getElementById("status").style.color="#52c41a",document.getElementById("status").innerText="\u52A0\u8F7D\u5B8C\u6210",document.getElementById("info").innerText=JSON.stringify(s)}function k(){let e=document.getElementById("info").innerText;e!==""&&e!==JSON.stringify(s)&&(s=JSON.parse(e),GM_setValue("settings",e),document.getElementById("status").style.color="#52c41a",document.getElementById("status").innerText="\u5DF2\u4FDD\u5B58",t("Saved")),setInterval(k,1e3)}try{t("Started"),B(),document.location.hostname==="www.luogu.com.cn"?J():(L(),k())}catch(e){t(`ERROR ${e}`),t("Crash")}})();

