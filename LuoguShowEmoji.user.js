// ==UserScript==
// @name         Luogu Show Emoji
// @namespace    blog.heyc.eu.org
// @version      2.0.3
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

var css = "color: #E67E22;";
console.log("%c[lgse] Started", css);

var cv = "2.0.3";
var reg_lg = [new RegExp("/discuss/[0-9]+"), new RegExp("/user/[0-9]+")];

function chk()
{
    if (document.location.pathname == "/")
    {
        return true;
    }
    for (let i = 0; i < reg_lg.length; i++)
    {
        if (reg_lg[i].test(document.location.pathname))
        {
            return true;
        }
    }
    return false;
}

var emoji = [
    "aini",
    "aiq",
    "am",
    "azgc",
    "baiy",
    "bangbangt",
    "banzz",
    "baojin",
    "bb",
    "bkx",
    "bl",
    "bp",
    "bq",
    "bs",
    "bt",
    "bu",
    "bz",
    "cd",
    "cg",
    "ch",
    "chi",
    "cj",
    "cp",
    "cs",
    "cy",
    "dan",
    "dao",
    "db",
    "dg",
    "dk",
    "dl",
    "doge",
    "dx",
    "dy",
    "dz",
    "ee",
    "emm",
    "fad",
    "fade",
    "fan",
    "fd",
    "fendou",
    "fj",
    "fn",
    "fw",
    "gg",
    "gy",
    "gz",
    "hanx",
    "haob",
    "hb",
    "hc",
    "hd",
    "hec",
    "hhd",
    "hn",
    "hp",
    "hq",
    "hsh",
    "ht",
    "huaix",
    "hx",
    "jd",
    "jh",
    "jiaybb",
    "jiaybs",
    "jie",
    "jk",
    "jw",
    "jx",
    "ka",
    "kb",
    "kel",
    "kf",
    "kg",
    "kk",
    "kl",
    "kt",
    "kuk",
    "kun",
    "kzht",
    "lb",
    "lengh",
    "lh",
    "ll",
    "lm",
    "lq",
    "lw",
    "lyj",
    "mdfq",
    "mg",
    "mm",
    "ng",
    "nkt",
    "oh",
    "oy",
    "pch",
    "pj",
    "pp",
    "px",
    "qd",
    "qiang",
    "qiao",
    "qq",
    "qt",
    "ruo",
    "sa",
    "se",
    "sh",
    "shd",
    "shl",
    "shuai",
    "shui",
    "shxi",
    "sr",
    "tiao",
    "tl",
    "tnl",
    "tp",
    "ts",
    "tsh",
    "tt",
    "tuu",
    "tx",
    "ty",
    "wbk",
    "whl",
    "wl",
    "wn",
    "wosl",
    "wq",
    "ws",
    "wul",
    "wx",
    "wzm",
    "xhx",
    "xia",
    "xig",
    "xin",
    "xjj",
    "xk",
    "xs",
    "xu",
    "xw",
    "xy",
    "xyx",
    "yao",
    "yb",
    "yhh",
    "yiw",
    "yl",
    "youl",
    "youtj",
    "yt",
    "yun",
    "yx",
    "zhd",
    "zhem",
    "zhh",
    "zhm",
    "zhq",
    "zj",
    "zk",
    "zq",
    "zt",
    "zuotj",
];
var re = "(>[^<]*?)(\/%EMOJI%)([^<A-Za-z])";
var rp = "$1<span style=\"color: #dfdfdf; font-size: 0.3em;\">$2</span><img src=\"%SOURCE%\" alt=\"/%EMOJI%\">$3";
function run()
{
    let cmts = [document.querySelectorAll(".am-comment-bd"), document.querySelectorAll(".content")];
    for (let x = 0; x < cmts.length; x++)
    {
        for (let i = 0; i < cmts[x].length; i++)
        {
            if (cmts[x][i].innerHTML.indexOf("<!--LGSE Replaced-->") != -1)
            {
                continue;
            }
            let str = cmts[x][i].innerHTML;
            for (let j = emoji.length - 1; j >= 0; j--)
            {
                str = str.replace(new RegExp(`(\/${emoji[j]})(<span)`, "g"), "$1 $2");
                str = str.replace(new RegExp(`(\/${emoji[j]})(<\/{0,1}[^s\/])`, "g"), "$1 $2");
                let regex = new RegExp(re.replace(/%EMOJI%/g, emoji[j]), "g");
                while (regex.test(str))
                {
                    str = str.replace(regex, rp.replace(/%EMOJI%/g, emoji[j]));
                }
            }
            str += "<!--LGSE Replaced-->";
            cmts[x][i].innerHTML = str;
        }
    }
    console.log("%c[lgse] Replaced", css);
}
function start()
{
    run();
    setTimeout(start, 1000);
}

// ------------------------------

var se_html = `<style>
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
    width: max(30%, 300px);
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
var emoji = ["aini","aiq","am","azgc","baiy","bangbangt","banzz","baojin","bb","bkx","bl","bp","bq","bs","bt","bu","bz","cd","cg","ch","chi","cj","cp","cs","cy","dan","dao","db","dg","dk","dl","doge","dx","dy","dz","ee","emm","fad","fade","fan","fd","fendou","fj","fn","fw","gg","gy","gz","hanx","haob","hb","hc","hd","hec","hhd","hn","hp","hq","hsh","ht","huaix","hx","jd","jh","jiaybb","jiaybs","jie","jk","jw","jx","ka","kb","kel","kf","kg","kk","kl","kt","kuk","kun","kzht","lb","lengh","lh","ll","lm","lq","lw","lyj","mdfq","mg","mm","ng","nkt","oh","oy","pch","pj","pp","px","qd","qiang","qiao","qq","qt","ruo","sa","se","sh","shd","shl","shuai","shui","shxi","sr","tiao","tl","tnl","tp","ts","tsh","tt","tuu","tx","ty","wbk","whl","wl","wn","wosl","wq","ws","wul","wx","wzm","xhx","xia","xig","xin","xjj","xk","xs","xu","xw","xy","xyx","yao","yb","yhh","yiw","yl","youl","youtj","yt","yun","yx","zhd","zhem","zhh","zhm","zhq","zj","zk","zq","zt","zuotj"];
var emjhtml = '<div class="se-emj"><img src=\"%SOURCE%\" alt=\"/%EMOJI%\"> | %EMOJI%</div>';
function se_cge()
{
    st = 1 - st;
    document.getElementById("se-mnu").style.display = (st == 0 ? "none" : "grid");
    if (st == 1)
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
</script>
<div class="se-ent" id="se-ent" onclick="%CLICK%" oncontextmenu="window.open('https://lgse.netlify.app/lgse-settings-${cv}.html')" title="右键打开设置"><img src="%SOURCE_CY%"></div>
<div class="se-mnu" id="se-mnu"><input type="text" class="se-ipt" id="se-ipt" placeholder="搜索表情..." oninput="se_srh()"><div class="se-dsp" id="se-dsp"></div><footer id="se-ftr"></footer></div>`
function srhemj()
{
    $("body").append(se_html);
}

// ------------------------------

var vr = new RegExp("[0-9]+\.[0-9]+\.[0-9]+", "g");
var upduri = "https://lgse-source.netlify.app/version";
function upd_u(lv)
{
    $("#se-ftr").append(`<center><b>LGSE 更新</b><br>当前 <b><span style="color: #e67e22;">${cv}</span></b> --&gt; 最新 <b><span style="color: #52c41a;">${lv}</span></b><br><a href="https://lgse-source.netlify.app/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">点击升级</a></center>`);
    console.log("%c[lgse] Popped upgrade content", css);
}
function upd_d(lv)
{
    $("#se-ftr").append(`<center><b>LGSE 更新</b><br>当前 <b><span style="color: #52c41a;">${cv}</span></b> &lt;-- 最新 <b><span style="color: #e67e22;">${lv}</span></b><br><a href="https://lgse-source.netlify.app/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">点击降级</a></center>`);
    console.log("%c[lgse] Popped downgrade content", css);
}
function upd_f()
{
    $("#se-ftr").append(`<center><b>LGSE 更新</b><br>当前 <b><span style="color: #52c41a;">${cv}</span></b> --- <b><span style="color: #e67e22;">失败！</span></b></center>`);
    console.log("%c[lgse] Popped CFU failed content", css);
}
function upd()
{
    GM_xmlhttpRequest({
        method: "GET",
        url: upduri,
        onload: function(response) {
            var f = true;
            var sc = response.status;
            var lv = response.responseText;
            if (sc == 200)
            {
                console.log("%c[lgse] Version: CV " + cv + " | LV " + lv, css);
            }
            else
            {
                f = false;
                console.log(`%c[lgse] Get version failed: HTTP ${sc}, Request success`, css);
                console.log(`%c[lgse] Return text: ${lv}`, css);
            }
            if (!vr.test(lv))
            {
                f = false;
            }
            if (f && cv < lv)
            {
                upd_u(lv);
            }
            if (f && cv > lv)
            {
                upd_d(lv);
            }
            if (!f)
            {
                upd_f();
            }
        },
        onerror: function(response) {
            var sc = response.status;
            console.log(`%c[lgse] Get version failed: HTTP ${sc}, Request failed`, css);
            upd_f();
        },
    });
}

// ------------------------------

var src = ["https://cdn.jsdelivr.net/gh/hyc1230/qqemoji/%EMOJI%.gif", "https://ghproxy.com/https://raw.githubusercontent.com/hyc1230/qqemoji/latest/%EMOJI%.gif", "https://qqemoji.heyc.eu.org/%EMOJI%.gif", "https://qqemoji.netlify.app/%EMOJI%.gif"];

function readst()
{
    let val = GM_getValue("settings", "1\\1\\0\\1");
    return val;
}
var st = readst();
console.log(`%c[lgse] Settings: ${st}`, css);

const ST_NUM = 4;
function load_lg()
{
    try
    {
        console.log("%c[lgse] Loading settings for Luogu", css);
        let sts = st.split("\\");
        if (sts.length < ST_NUM)
        {
            console.log("%c[lgse] Settings wrong, using default", css);
            throw "Settings wrong";
        }
        rp = rp.replace(/%SOURCE%/g, src[parseInt(sts[2])]);
        if (parseInt(sts[0]) && chk())
        {
            console.log("%c[lgse] Started replacing", css);
            start();
        }
        se_html = se_html.replace(/%SOURCE%/g, src[parseInt(sts[2])]).replace(/%SOURCE_CY%/g, src[parseInt(sts[2])].replace(/%EMOJI%/g, "cy"));
        if (parseInt(sts[1]))
        {
            se_html = se_html.replace(/%CLICK%/g, "se_cge()");
        }
        else
        {
            se_html = se_html.replace(/%CLICK%/g, `window.open('https://lgse.netlify.app/lgse-settings-${cv}.html')`);
        }
        srhemj();
        if (parseInt(sts[1]) && parseInt(sts[3]))
        {
            upd();
        }
    }
    catch (err)
    {
        console.log("%c[lgse] Load settings failed, using default", css);
        console.log("%c[lgse] Started replacing", css);
        start();
        se_html = se_html.replace(/%SOURCE%/g, src[0]).replace(/%SOURCE_CY%/g, src[0].replace(/%EMOJI%/g, "cy")).replace(/%CLICK%/g, "se_cge()");
        srhemj();
        upd();
    }
}
function load_st()
{
    try
    {
        console.log("%c[lgse] Loading settings for Settings page", css);
        let sts = st.split("\\");
        if (sts.length >= ST_NUM)
        {
            document.getElementById("rep-emj").checked = parseInt(sts[0]);
            document.getElementById("srh-emj").checked = parseInt(sts[1]);
            document.getElementById("img-src").selectedIndex = parseInt(sts[2]);
            document.getElementById("chk-upd").checked = parseInt(sts[3]);
        }
        else
        {
            console.log("%c[lgse] Settings wrong, using default", css);
        }
        document.getElementById("status").style.color = "#52c41a";
        document.getElementById("status").innerText = "加载完成";
        document.getElementById("info").innerText = st;
    }
    catch (err)
    {
        console.log(`%c[lgse] ${err}`, css);
        throw "In load_st: Setting load failed";
    }
}

function listen_st()
{
    let stn = document.getElementById("info").innerText;
    if (stn != "" && stn != st)
    {
        st = stn;
        GM_setValue("settings", stn);
        document.getElementById("status").style.color = "#52c41a";
        document.getElementById("status").innerText = "已保存";
        console.log("%c[lgse] Saved", css);
    }
    setInterval(listen_st, 1000);
}

if (document.location.hostname == "www.luogu.com.cn")
{
    load_lg();
}
else
{
    try
    {
        load_st();
        listen_st();
    }
    catch (err)
    {
        document.getElementById("status").style.color = "#e74c3c";
        document.getElementById("status").innerText = "脚本出现错误";
        console.log(`%c[lgse] Fatal error: ${err}`, css);
        console.log("%c[lgse] Terminating", css);
    }
}