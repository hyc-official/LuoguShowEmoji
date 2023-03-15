// ==UserScript==
// @name         Luogu Show Emoji
// @namespace    blog.heyc.eu.org
// @version      1.3.6
// @description  Show emoji in Luogu
// @author       Heyc
// @match        https://www.luogu.com.cn/
// @match        https://www.luogu.com.cn/user/*
// @match        https://www.luogu.com.cn/discuss/*
// @icon         https://cdn.jsdelivr.net/gh/hyc-official/LGSE-page/favicon.ico
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @connect      cdn.jsdelivr.net
// @grant        GM_xmlhttpRequest
// ==/UserScript==

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
    "bobo",
    "bp",
    "bq",
    "bs",
    "bt",
    "bu",
    "bz",
    "cd",
    "cengyiceng",
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
    "dgg",
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
    "pt",
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
    "tyt",
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
var css = "color: #E67E22;";
var re = "(>[^<]*?)(\/%EMOJI%)([^<A-Za-z])";
var rp = "$1<span style=\"color: #dfdfdf; font-size: 0.3em;\">$2</span><img src=\"https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji@latest/qqemoji/-%EMOJI%.gif\" alt=\"/%EMOJI%\">$3";

function run()
{
    let cmts = [document.querySelectorAll(".am-comment-bd"), document.querySelectorAll(".content")];
    let sta = false;
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

start();
// run();
console.log("%c[lgse] Started", css);

// ------------------------------

function srhemj()
{
    $("body").append(`<style>
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
        width: 100%;
        height: 1.5em;
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }
    .se-dsp {
        width: auto;
        height: calc(100% - 2em);
        overflow: auto;
    }
</style>
<script>
    var st = 0;
    var emoji = ["aini","aiq","am","azgc","baiy","bangbangt","banzz","baojin","bb","bkx","bl","bobo","bp","bq","bs","bt","bu","bz","cd","cengyiceng","cg","ch","chi","cj","cp","cs","cy","dan","dao","db","dg","dgg","dk","dl","doge","dx","dy","dz","ee","emm","fad","fade","fan","fd","fendou","fj","fn","fw","gg","gy","gz","hanx","haob","hb","hc","hd","hec","hhd","hn","hp","hq","hsh","ht","huaix","hx","jd","jh","jiaybb","jiaybs","jie","jk","jw","jx","ka","kb","kel","kf","kg","kk","kl","kt","kuk","kun","kzht","lb","lengh","lh","ll","lm","lq","lw","lyj","mdfq","mg","mm","ng","nkt","oh","oy","pch","pj","pp","pt","px","qd","qiang","qiao","qq","qt","ruo","sa","se","sh","shd","shl","shuai","shui","shxi","sr","tiao","tl","tnl","tp","ts","tsh","tt","tuu","tx","ty","tyt","wbk","whl","wl","wn","wosl","wq","ws","wul","wx","wzm","xhx","xia","xig","xin","xjj","xk","xs","xu","xw","xy","xyx","yao","yb","yhh","yiw","yl","youl","youtj","yt","yun","yx","zhd","zhem","zhh","zhm","zhq","zj","zk","zq","zt","zuotj"];
    var emjhtml = '<div class="se-emj"><img src=\"https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji@latest/qqemoji/-%EMOJI%.gif\" alt=\"/%EMOJI%\"> | %EMOJI%</div>';
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
<div class="se-ent" id="se-ent" onclick="se_cge()"><img src="https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji@latest/qqemoji/-cy.gif"></div>
<div class="se-mnu" id="se-mnu"><input type="text" class="se-ipt" id="se-ipt" placeholder="搜索表情..." oninput="se_srh()"><div class="se-dsp" id="se-dsp"></div></div>`);
}

srhemj();

// ------------------------------

var cv = "1.3.6";
var vr = new RegExp("[0-9]+\.[0-9]+\.[0-9]+", "g");

function upd()
{
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji@latest/version",
        onload: function(response) {
            var f = true;
            var sc = response.status;
            if (sc != 200)
            {
                f = false;
                console.log(`%c[lgse] Get version failed: ${sc}`, css);
            }
            var lv = response.responseText;
            console.log("%c[lgse] Version: CV " + cv + " | LV " + lv, css);
            if (!vr.test(lv))
            {
                f = false;
            }
            if (f && cv < lv)
            {
                $(".lg-punch").append(`<center><b>LGSE 有新版本 <span style="color: #e67e22;">${lv}</span>，当前版本 <span style="color: #e67e22;">${cv}</span>，<a href="https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji@latest/LuoguShowEmoji.min.user.js">点击这里安装新版本</a>。</b></center>`);
                console.log("%c[lgse] Popped upgrade content", css);
            }
            if (f && cv > lv)
            {
                $(".lg-punch").append(`<center><b>LGSE 最新版本为 <span style="color: #e67e22;">${lv}</span>，小于当前版本 <span style="color: #e67e22;">${cv}</span>，<a href="https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji@latest/LuoguShowEmoji.min.user.js">点击这里安装旧版（可选）</a>。</b></center>`);
                console.log("%c[lgse] Popped downgrade content", css);
            }
            if (!f)
            {
                $(".lg-punch").append(`<center><b><span style="color: #e67e22;">LGSE 自动检测更新失败！</span>当前版本：<span style="color: #e67e22;">${cv}</span></b></center>`);
            }
        },
        onerror: function(response) {
            $(".lg-punch").append(`<center><b><span style="color: #e67e22;">LGSE 自动检测更新失败！</span>当前版本：<span style="color: #e67e22;">${cv}</span></b></center>`);
        },
    });
}

if (window.location.pathname == "/")
{
    upd();
}