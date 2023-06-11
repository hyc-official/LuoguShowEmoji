import { LGSElog, request } from "./utils.js";

const cv = "2.1.1";

// ------------------------------

const reg_lg = [/\/discuss\/[0-9]+/, /\/user\/[0-9]+/];

/**
 *
 */
function chk() {
    if (document.location.pathname === "/") {
        return true;
    }
    for (let i = 0; i < reg_lg.length; i++) {
        if (reg_lg[i].test(document.location.pathname)) {
            return true;
        }
    }
    return false;
}

const emoji = [
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
    "cha",
    "chi",
    "cj",
    "cp",
    "cs",
    "cy",
    "dan",
    "dao",
    "dax",
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
    "jy",
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
    "pz",
    "qd",
    "qiang",
    "qiao",
    "qidao",
    "qq",
    "qt",
    "ruo",
    "sa",
    "se",
    "sh",
    "shd",
    "shl",
    "shq",
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
    "zyj",
];
const re = "(>[^<]*?)(/%EMOJI%)([^<A-Za-z])";
let rp = "$1<span style=\"color: #dfdfdf; font-size: 0.3em;\">$2</span><img src=\"%SOURCE%\" alt=\"/%EMOJI%\" width=\"28px\" height=\"28px\">$3";
/**
 *
 */
function run() {
    const cmts = [document.querySelectorAll(".am-comment-bd"), document.querySelectorAll(".content")];
    for (let x = 0; x < cmts.length; x++) {
        for (let i = 0; i < cmts[x].length; i++) {
            if (cmts[x][i].innerHTML.indexOf("<!--LGSE Replaced-->") === -1) {
                let str = cmts[x][i].innerHTML;
                for (let j = emoji.length - 1; j >= 0; j--) {
                    str = str.replace(new RegExp(`(/${emoji[j]})(<span)`, "g"), "$1 $2");
                    str = str.replace(new RegExp(`(/${emoji[j]})(</{0,1}[^s/])`, "g"), "$1 $2");
                    const regex = new RegExp(re.replace(/%EMOJI%/g, emoji[j]), "g");
                    while (regex.test(str)) {
                        str = str.replace(regex, rp.replace(/%EMOJI%/g, emoji[j]));
                    }
                }
                str += "<!--LGSE Replaced-->";
                cmts[x][i].innerHTML = str;
            }
        }
    }
    LGSElog("Replaced");
}
/**
 *
 */
function start() {
    run();
    setTimeout(start, 1000);
}

// ------------------------------

let se_html = `<style>
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
</script>
<div class="se-ent" id="se-ent" onclick="se_cge()" oncontextmenu="window.open('https://lgse.netlify.app/lgse-settings-${cv}.html')" title="右键打开设置" status="ordinary">
    <img src="%SOURCE_CY%" width="28px" height="28px">
</div>
<div class="se-mnu" id="se-mnu">
    <div class="se-dsp" id="se-srh">
        <input type="text" class="se-ipt" id="se-ipt" placeholder="搜索表情..." oninput="se_srh()">
        <div class="se-dsp" id="se-dsp"></div>
    </div>
    <center><div class="se-dsp" id="se-upd"></div></center>
</div>`;
/**
 *
 */
function srhemj() {
    $("body").append(se_html);
}

// ------------------------------

const vr = /[0-9]+\.[0-9]+\.[0-9]+/g;
const updurl = "https://lgse-source.netlify.app/version";
const updsvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="28px" width="28px">
    <circle cx="14" cy="14" r="14" stroke-width="0" fill="#fe4c61" />
    <line x1="14" y1="5" x2="5" y2="14" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    <line x1="14" y1="5" x2="23" y2="14" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    <line x1="14" y1="5" x2="14" y2="23" stroke="#fff" stroke-width="3" stroke-linecap="round" />
</svg>`;
let entimg = "<img src=\"%SOURCE_CY%\" width=\"28px\" height=\"28px\">";
/**
 *
 * @param lv
 */
function upd_u(lv) {
    $("#se-upd").append(`<center><b>LGSE 更新</b><br>当前 <b><span style="color: #e67e22;">${cv}</span></b> --&gt; 最新 <b><span style="color: #52c41a;">${lv}</span></b><br><a href="https://lgse-source.netlify.app/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">点击升级</a></center>`);
    LGSElog("Popped upgrade content");
}
/**
 *
 * @param lv
 */
function upd_d(lv) {
    $("#se-upd").append(`<center><b>LGSE 更新</b><br>当前 <b><span style="color: #52c41a;">${cv}</span></b> &lt;-- 最新 <b><span style="color: #e67e22;">${lv}</span></b><br><a href="https://lgse-source.netlify.app/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">点击降级</a></center>`);
    LGSElog("Popped downgrade content");
}
/**
 *
 */
function upd_f() {
    $("#se-upd").append(`<center><b>LGSE 更新</b><br>当前 <b><span style="color: #52c41a;">${cv}</span></b> --- <b><span style="color: #e67e22;">失败！</span></b></center>`);
    LGSElog("Popped CFU failed content");
}
/**
 *
 */
function upd_blink() {
    if (document.getElementById("se-ent").status === null || document.getElementById("se-ent").status === "ordinary") {
        document.getElementById("se-ent").innerHTML = updsvg;
        document.getElementById("se-ent").status = "update-icon";
    } else {
        document.getElementById("se-ent").innerHTML = entimg;
        document.getElementById("se-ent").status = "ordinary";
    }
    LGSElog(`upd_blink ${document.getElementById("se-ent").status}`);
    setTimeout(upd_blink, 1000);
}
/**
 *
 * @param res
 */
function upd(res) {
    if (!res.error && res.status === 200 && vr.test(res.content)) {
        LGSElog(`Get version success: CV ${cv} | LV ${res.content}`);
        if (res.content > cv) {
            upd_u(res.content);
            upd_blink();
        }
        if (res.content < cv) {
            upd_d(res.content);
        }
    } else {
        LGSElog("Get version failed");
        upd_f();
    }
}

// ------------------------------

const src = ["https://cdn.jsdelivr.net/gh/hyc1230/qqemoji/56x56/%EMOJI%.gif", "https://ghproxy.com/https://raw.githubusercontent.com/hyc1230/qqemoji/master/56x56/%EMOJI%.gif", "https://qqemoji.heyc.eu.org/56x56/%EMOJI%.gif", "https://qqemoji.netlify.app/56x56/%EMOJI%.gif"];

const stdef = {
        "rep-emj": true,
        "srh-emj": true,
        "img-src": 0,
        "chk-upd": true,
    },
    stlist = [
        "rep-emj",
        "srh-emj",
        "img-src",
        "chk-upd",
    ];
let st;
/**
 *
 */
function readst() {
    try {
        const val = GM_getValue("settings", `{}`);
        LGSElog(`Settings: ${val}`);
        st = JSON.parse(val);
    } catch (err) {
        LGSElog(`ERROR ${err}`);
        LGSElog("Using default settings");
        st = stdef;
    }
    for (let i = 0; i < stlist.length; i++) if (st[stlist[i]] == null) st[stlist[i]] = stdef[stlist[i]];
}

/**
 *
 */
function load_lg() {
    LGSElog("Loading settings for Luogu");
    rp = rp.replace(/%SOURCE%/g, src[st["img-src"]]);
    se_html = se_html.replace(/%SOURCE%/g, src[st["img-src"]]).replace(/%SOURCE_CY%/g, src[st["img-src"]].replace(/%EMOJI%/g, "cy"));
    entimg = entimg.replace(/%SOURCE_CY%/g, src[st["img-src"]].replace(/%EMOJI%/g, "cy"));
    if (st["rep-emj"] && chk()) {
        LGSElog("Started replacing");
        start();
    }
    if (st["srh-emj"]) {
        se_html = se_html.replace(/%SRH%/g, "true");
    } else {
        se_html = se_html.replace(/%SRH%/g, "false");
    }
    srhemj();
    if (st["chk-upd"]) {
        request(updurl, upd);
    }
}
/**
 *
 */
function load_st() {
    LGSElog("Loading settings for Settings page");
    document.getElementById("rep-emj").checked = st["rep-emj"];
    document.getElementById("srh-emj").checked = st["srh-emj"];
    document.getElementById("img-src").selectedIndex = st["img-src"];
    document.getElementById("chk-upd").checked = st["chk-upd"];
    document.getElementById("status").style.color = "#52c41a";
    document.getElementById("status").innerText = "加载完成";
    document.getElementById("info").innerText = JSON.stringify(st);
}

/**
 *
 */
function listen_st() {
    const stn = document.getElementById("info").innerText;
    if (stn !== "" && stn !== JSON.stringify(st)) {
        st = JSON.parse(stn);
        GM_setValue("settings", stn);
        document.getElementById("status").style.color = "#52c41a";
        document.getElementById("status").innerText = "已保存";
        LGSElog("Saved");
    }
    setInterval(listen_st, 1000);
}

try {
    LGSElog("Started");
    readst();
    if (document.location.hostname === "www.luogu.com.cn") {
        load_lg();
    } else {
        load_st();
        listen_st();
    }
} catch (err) {
    LGSElog(`ERROR ${err}`);
    LGSElog("Crash");
}
