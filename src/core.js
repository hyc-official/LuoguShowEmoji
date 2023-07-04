import {
    indep, LGSElog, clrcache, request, LGSE_Start,
} from "./utils.js";

const cv = "2.1.3";

// ------------------------------

const reg_lg = [/\/discuss\/[0-9]+/, /\/user\/[0-9]+/, /\/chat.*/];

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
const re1 = "(>[^<]*?)(/%EMOJI%)([^<A-Za-z][^<]*</[^a]>)";
const re2 = "(>[^<]*?)(/%EMOJI%)([^<A-Za-z][^<]*<[^/])";
let rp = "$1<span style=\"color: #c8c8c8; font-size: 0.3em;\">$2</span><img src=\"%SOURCE%\" alt=\"/%EMOJI%\" width=\"28px\" height=\"28px\">$3";
/**
 *
 */
function run() {
    const cmts = [document.querySelectorAll(".am-comment-bd"), document.querySelectorAll(".content"), document.querySelectorAll(".message-block")];
    let flag = false;
    for (let x = 0; x < cmts.length; x++) {
        for (let i = 0; i < cmts[x].length; i++) {
            if (cmts[x][i].innerHTML.indexOf("<!--LGSE Replaced-->") === -1) {
                let str = cmts[x][i].innerHTML;
                for (let j = emoji.length - 1; j >= 0; j--) {
                    str = str.replace(new RegExp(`(/${emoji[j]})(<span)`, "g"), "$1 $2")
                             .replace(new RegExp(`(/${emoji[j]})(</{0,1}[^s/])`, "g"), "$1 $2");
                    const rg1 = new RegExp(re1.replace(/%EMOJI%/g, emoji[j]), "g"), 
                          rg2 = new RegExp(re2.replace(/%EMOJI%/g, emoji[j]), "g");
                    while (rg1.test(str)) {
                        str = str.replace(rg1, rp.replace(/%EMOJI%/g, emoji[j]));
                        flag = true;
                    }
                    while (rg2.test(str)) {
                        str = str.replace(rg2, rp.replace(/%EMOJI%/g, emoji[j]));
                        flag = true;
                    }
                }
                str += "<!--LGSE Replaced-->";
                cmts[x][i].innerHTML = str;
            }
        }
    }
    if (flag) {
        LGSElog("Replaced");
    }
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
    .se-clr {
        z-index: 999;
        position: fixed;
        left: 100px;
        bottom: 30px;
        border-radius: 5px;
        border: 0px;
        padding-top: .5em;
        padding-bottom: .5em;
        padding-left: 1em;
        padding-right: 1em;
        color: #fff;
        background-color: rgb(52, 152, 219);
    }
    .se-clr:hover {
        background-color: rgba(52, 152, 219, 0.9);
    }
</style>
<div class="se-ent" id="se-ent" oncontextmenu="window.open('https://lgse.netlify.app/lgse-settings-${cv}.html')" title="右键打开设置" status="ordinary">
    <img src="%SOURCE_CY%" width="28px" height="28px">
</div>
<div class="se-mnu" id="se-mnu">
    <div class="se-dsp" id="se-srh">
        <input type="text" class="se-ipt" id="se-ipt" placeholder="搜索表情..." oninput="se_srh()">
        <div class="se-dsp" id="se-dsp"></div>
    </div>
    <div class="se-dsp" id="se-upd" style="display: none;">
        <center id="se-upm"><b>LGSE 更新</b><br></center>
        <div class="se-dsp" id="se-cgl" style="display: none;"><center><b>更新日志</b><br></center></div>
    </div>
</div>
<button class="se-clr" id="se-clr">清除 LGSE 缓存</button>
<script>
    var st_mnu = 0, st_cgl = 0;
    var emoji=["aini","aiq","am","azgc","baiy","bangbangt","banzz","baojin","bb","bkx","bl","bp","bq","bs","bt","bu","bz","cd","cg","ch","cha","chi","cj","cp","cs","cy","dan","dao","dax","db","dg","dk","dl","doge","dx","dy","dz","ee","emm","fad","fan","fd","fendou","fj","fn","fw","gg","gy","gz","hanx","haob","hb","hc","hd","hec","hhd","hn","hp","hq","hsh","ht","huaix","hx","jd","jh","jiaybb","jiaybs","jie","jk","jw","jx","jy","ka","kb","kel","kf","kg","kk","kl","kt","kuk","kun","kzht","lb","lengh","lh","ll","lm","lq","lw","lyj","mdfq","mg","mm","ng","nkt","oh","oy","pch","pj","pp","px","pz","qd","qiang","qiao","qidao","qq","qt","ruo","sa","se","sh","shd","shl","shq","shuai","shui","shxi","sr","tiao","tl","tnl","tp","ts","tsh","tt","tuu","tx","ty","wbk","whl","wl","wn","wosl","wq","ws","wul","wx","wzm","xhx","xia","xig","xin","xjj","xk","xs","xu","xw","xy","xyx","yao","yb","yhh","yiw","yl","youl","youtj","yt","yun","yx","zhd","zhem","zhh","zhm","zhq","zj","zk","zq","zt","zuotj","zyj"];
    var emjhtml = '<div class="se-emj"><img src="%SOURCE%" alt="/%EMOJI%" width="28px" height="28px"> | %EMOJI%</div>';
    var srh = %SRH%;
    var se_mnu_element = document.getElementById("se-mnu");
    if (!srh) {
        document.getElementById("se-srh").style.display = "none";
    }
    function se_mnu() {
        if (srh || document.getElementById("se-upd").innerText != "") {
            st_mnu = 1 - st_mnu;
            se_mnu_element.style.display = (st_mnu == 0 ? "none" : "grid");
        }
        if (srh && st_mnu == 1) {
            se_srh();
        }
    }
    function se_srh() {
        let wd = document.getElementById("se-ipt").value;
        let ih = "";
        for (let i = 0; i < emoji.length; i++) {
            if (wd == "" || emoji[i].replace(wd, "") != emoji[i]) {
                ih += emjhtml.replace(/%EMOJI%/g, emoji[i]);
            }
        }
        document.getElementById("se-dsp").innerHTML = ih;
    }
    function se_cgl() {
        st_cgl = 1 - st_cgl;
        document.getElementById("se-cgl").style.display = (st_cgl == 0 ? "none" : "block");
    }
    document.getElementById("se-mnu").addEventListener("click", (event) => {
        se_mnu_element.style.display = "grid";
        event.stopPropagation();
    });
    document.getElementById("se-ent").addEventListener("click", (event) => {
        se_mnu();
        event.stopPropagation();
    })
    document.addEventListener("click", (event) => {
        if (st_mnu) {
            se_mnu();
        }
    })
</script>`;
/**
 *
 */
function srhemj() {
    $("body").append(se_html);
    document.getElementById("se-clr").addEventListener("click", () => {clrcache();});
}

// ------------------------------

const vr = /[0-9]+\.[0-9]+\.[0-9]+/g;
const updurl = "https://lgse-source.netlify.app/version";
const cglurl = "https://lgse-source.netlify.app/changelog.txt";
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
    $("#se-upm").append(`当前 <b><span style="color: #e67e22;">${cv}</span></b> --&gt; 最新 <b><span style="color: #52c41a;">${lv}</span></b><br><a href="https://lgse-source.netlify.app/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">点击升级</a> <a onclick="se_cgl()" style="font-size: 0.7em">显示/隐藏更新日志</a>`);
    LGSElog("Popped upgrade content");
}
/**
 *
 * @param lv
 */
function upd_d(lv) {
    $("#se-upm").append(`当前 <b><span style="color: #52c41a;">${cv}</span></b> &lt;-- 最新 <b><span style="color: #e67e22;">${lv}</span></b><br><a href="https://lgse-source.netlify.app/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">点击降级</a> <a onclick="se_cgl()" style="font-size: 0.7em">显示/隐藏更新日志</a>`);
    LGSElog("Popped downgrade content");
}
/**
 *
 */
function upd_f() {
    $("#se-upm").append(`当前 <b><span style="color: #52c41a;">${cv}</span></b> --- <b><span style="color: #e67e22;">失败！</span></b>`);
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
    setTimeout(upd_blink, 1000);
}
/**
 *
 * @param res
 */
function upd_cglog(res) {
    if (!res.error && res.status === 200) {
        LGSElog("Get update log success");
        $("#se-cgl").append(marked.parse(res.content));
    } else {
        LGSElog("Get update log failed");
    }
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
        if (res.content !== cv) {
            document.getElementById("se-upd").style.display = "block";
            request(cglurl, upd_cglog);
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
    if (st["chk-upd"] && indep) {
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

/**
 *
 */
function init() {
    LGSElog("Started");
    readst();
}
/**
 *
 */
function LG() {
    try {
        init();
        load_lg();
    } catch (err) {
        LGSElog(`ERROR ${err}`);
        LGSElog("Crash");
    }
}
/**
 *
 */
function ST() {
    try {
        init();
        load_st();
        listen_st();
    } catch (err) {
        LGSElog(`ERROR ${err}`);
        LGSElog("Crash");
    }
}

LGSE_Start(LG, ST);
