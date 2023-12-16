import {
    indep, LGSElog, clrcache, getcacheextime, request, LGSE_Start,
} from "./utils.js";

const cv = "{{version}}",
    sv = "2.2.0";
let st;

// ------------------------------

const reg_lg = [
    [".am-comment-bd", [/^\/$/]],
    [".collapsed-wrapper", [/^\/discuss\/.*$/]],
    [".content", [/^\/user\/.*$/]],
    [".message", [/^\/chat.*$/]],
];

/**
 *
 */
function chk() {
    for (let i = 0; i < reg_lg.length; i++) {
        for (let j = 0; j < reg_lg[i][1].length; j++) {
            if (reg_lg[i][1][j].test(document.location.pathname)) {
                return true;
            }
        }
    }
    return false;
}

/**
 *
 */
function getcmts() {
    const cmts = [];
    for (let i = 0; i < reg_lg.length; i++) {
        for (let j = 0; j < reg_lg[i][1].length; j++) {
            if (reg_lg[i][1][j].test(document.location.pathname)) {
                cmts[cmts.length] = document.querySelectorAll(reg_lg[i][0]);
            }
        }
    }
    return cmts;
}

const emoji = [
    ["aini", "爱你"],
    ["aiq", "爱情"],
    ["am", "傲慢"],
    ["azgc", "暗中观察"],
    ["baiy", "白眼"],
    ["bangbangt", "棒棒糖"],
    ["banzz", "搬砖中"],
    ["baojin", "爆筋"],
    ["bb", "便便"],
    ["bkx", "不开心"],
    ["bl", "飙泪"],
    ["bp", "鞭炮"],
    ["bq", "抱拳"],
    ["bs", "鄙视"],
    ["bt", "拜托"],
    ["bu", "不"],
    ["bx", "拜谢"],
    ["bz", "闭嘴"],
    ["cd", "菜刀"],
    ["cg", "吃瓜"],
    ["ch", "擦汗"],
    ["cha", "茶"],
    ["chi", "吃"],
    ["cj", "差劲"],
    ["cp", "钞票"],
    ["cs", "沧桑"],
    ["cy", "呲牙"],
    ["dan", "蛋"],
    ["dao", "刀"],
    ["dax", "大笑"],
    ["db", "悠闲"],
    ["dg", "蛋糕"],
    ["dk", "大哭"],
    ["dl", "灯笼"],
    ["doge", "狗头"],
    ["dx", "凋谢"],
    ["dy", "得意"],
    ["dz", "点赞"],
    ["ee", "呃"],
    ["emm", "嗯..."],
    ["fad", "发抖"],
    ["fan", "饭"],
    ["fd", "发呆"],
    ["fendou", "奋斗"],
    ["fj", "飞机"],
    ["fn", "愤怒"],
    ["fw", "飞吻"],
    ["gg", "尴尬"],
    ["gun", "请（滚）"],
    ["gy", "勾引"],
    ["gz", "鼓掌"],
    ["hanx", "憨笑"],
    ["haob", "好棒"],
    ["hb", "红包"],
    ["hc", "花痴"],
    ["hd", "好的"],
    ["hec", "喝彩"],
    ["hhd", "呵呵哒"],
    ["hn", "喝奶"],
    ["hp", "害怕"],
    ["hq", "哈欠"],
    ["hsh", "挥手"],
    ["ht", "回头"],
    ["huaix", "坏笑"],
    ["hx", "害羞"],
    ["jd", "激动"],
    ["jh", "菊花"],
    ["jiaybb", "加油抱抱"],
    ["jiaybs", "加油必胜"],
    ["jie", "饥饿"],
    ["jk", "惊恐"],
    ["jw", "街舞"],
    ["jx", "惊喜"],
    ["jy", "惊讶"],
    ["ka", "可爱"],
    ["kb", "抠鼻"],
    ["kel", "可怜"],
    ["kf", "咖啡"],
    ["kg", "K歌"],
    ["kk", "快哭了"],
    ["kl", "骷髅"],
    ["kt", "磕头"],
    ["kuk", "酷"],
    ["kun", "困"],
    ["kzht", "口罩护体"],
    ["lb", "泪奔"],
    ["lengh", "冷汗"],
    ["lh", "流汗"],
    ["ll", "流泪"],
    ["lm", "冷漠"],
    ["lq", "篮球"],
    ["lw", "礼物"],
    ["lyj", "辣眼睛"],
    ["mdfq", "忙到飞起"],
    ["mg", "玫瑰"],
    ["mjl", "摸锦鲤"],
    ["mm", "卖萌"],
    ["mwbq", "面无表情"],
    ["my", "摸鱼"],
    ["ng", "难过"],
    ["nkt", "脑壳疼"],
    ["oh", "怄火"],
    ["oy", "噢哟"],
    ["pch", "瓢虫"],
    ["pj", "啤酒"],
    ["pp", "乒乓"],
    ["px", "喷血"],
    ["pz", "撇嘴"],
    ["qd", "糗大了"],
    ["qiang", "强"],
    ["qiao", "敲"],
    ["qidao", "祈祷"],
    ["qq", "亲亲"],
    ["qt", "拳头"],
    ["ruo", "踩"],
    ["sa", "示爱"],
    ["se", "色"],
    ["sh", "送花"],
    ["shd", "闪电"],
    ["shl", "胜利"],
    ["shq", "手枪"],
    ["shuai", "衰"],
    ["shui", "睡"],
    ["shxi", "双喜"],
    ["sr", "骚扰"],
    ["tiao", "跳跳"],
    ["tl", "托脸"],
    ["tnl", "太难了"],
    ["tp", "调皮"],
    ["ts", "托腮"],
    ["tsh", "跳绳"],
    ["tt", "头秃"],
    ["tuu", "吐"],
    ["tx", "偷笑"],
    ["ty", "太阳"],
    ["wbk", "我不看"],
    ["whl", "问号脸"],
    ["wl", "无聊"],
    ["wn", "无奈"],
    ["wosl", "我酸了"],
    ["wq", "委屈"],
    ["ws", "握手"],
    ["wul", "捂脸"],
    ["wx", "微笑"],
    ["wzm", "我最美"],
    ["xhx", "小河蟹"],
    ["xia", "吓"],
    ["xig", "西瓜"],
    ["xin", "爱心"],
    ["xjj", "小纠结"],
    ["xk", "笑哭"],
    ["xs", "心碎"],
    ["xu", "嘘"],
    ["xw", "献吻"],
    ["xy", "小样"],
    ["xyx", "斜眼笑"],
    ["yao", "药"],
    ["yb", "拥抱"],
    ["ybyb", "元宝"],
    ["yhh", "右哼哼"],
    ["yiw", "疑问"],
    ["yl", "月亮"],
    ["youl", "幽灵"],
    ["youtj", "右太极"],
    ["yt", "羊驼"],
    ["yun", "晕"],
    ["yx", "阴险"],
    ["zhd", "炸弹"],
    ["zhem", "折磨"],
    ["zhh", "左哼哼"],
    ["zhm", "咒骂"],
    ["zhq", "转圈"],
    ["zj", "再见"],
    ["zk", "抓狂"],
    ["zq", "足球"],
    ["zt", "猪头"],
    ["zuotj", "左太极"],
    ["zyj", "眨眼睛"],
];
const re = "/%EMOJI%([^<A-Za-z][^>]*<)";
let rp = "<span style=\"color: #c8c8c8; font-size: 0.3em;\">/%EMOJI%</span><img src=\"%SOURCE%\" alt=\"%NAME%\" title=\"%NAME%\" class=\"lgse-emoji-image\" width=\"28px\" height=\"28px\">$1";
/**
 *
 * @param element
 */
function run_replace(element) {
    if (element.nodeType === 1) {
        if (element.tagName === "A" || element.tagName === "CODE") {
            return [false, element.outerHTML];
        }
        const cld = element.childNodes;
        let flag = false,
            str = "";
        for (let i = 0; i < cld.length; i++) {
            const res = run_replace(cld[i]);
            flag = flag || res[0];
            str += res[1];
        }
        if (flag) {
            element.innerHTML = str;
        }
        return [flag, element.outerHTML];
    }
    if (element.nodeType === 3) {
        let flag = false,
            str = `>${element.data} <`;
        for (let i = 0; i < emoji.length; i++) {
            const rg = new RegExp(re.replace(/%EMOJI%/g, emoji[i][0]), "g"),
                rs = rp.replace(/%EMOJI%/g, emoji[i][0]).replace(/%NAME%/g, emoji[i][1]);
            while (rg.test(str)) {
                str = str.replace(rg, rs);
                flag = true;
            }
        }
        return [flag, str.substring(1, str.length - 2)];
    }
    return [false, ""];
}
/**
 *
 */
function start_replace() {
    const cmts = getcmts();
    let flag = false;
    for (let x = 0; x < cmts.length; x++) {
        for (let i = 0; i < cmts[x].length; i++) {
            if (cmts[x][i].lgse_replaced !== "true") {
                const res = run_replace(cmts[x][i]);
                flag = flag || res[0];
                cmts[x][i].lgse_replaced = "true";
            }
        }
    }
    if (flag) {
        LGSElog("Replaced");
    }
    setTimeout(start_replace, 100);
}

// ------------------------------

let se_html = `<style>
    .se-ent {
        z-index: 100;
        position: fixed;
        left: calc(3.7em + 30px);
        bottom: 30px;
        border-radius: 5px;
        background-color: #fff;
        padding: 11px;
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .se-ent:hover {
        background-color: #ccc;
    }
    .se-mnu {
        z-index: 999;
        position: fixed;
        top: 30px;
        left: calc(3.7em + 30px);
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
    @media screen and (max-width: 576px) {
        .se-ent, .se-mnu {
            left: 30px !important;
        }
    }
</style>
<div class="se-ent" id="se-ent" oncontextmenu="window.open('https://lgse.heyc.eu.org/lgse-settings-${sv}.html')" title="右键打开设置" status="ordinary">
    <img src="%SOURCE_CY%" width="28px" height="28px">
</div>
<div class="se-mnu" id="se-mnu">
    <div class="se-dsp" id="se-srh">
        <input type="text" class="se-ipt" id="se-ipt" placeholder="搜索表情...">
        <div class="se-dsp" id="se-dsp"></div>
    </div>
    <div class="se-dsp" id="se-upd" style="display: none;">
        <center id="se-upm"><b>LGSE 更新</b><br></center>
        <div class="se-dsp" id="se-cgl" style="display: none;"><center><b>更新日志</b><br></center></div>
    </div>
</div>`;
let st_mnu = 0,
    st_cgl = 0;
let emjhtml = "<div class=\"se-emj\"><img src=\"%SOURCE%\" alt=\"/%EMOJI%\" width=\"28px\" height=\"28px\">  %TEXT%</div>";
const hlhtml = "<span class=\"se-hlt\">%TEXT%</span>";
/**
 *
 */
function se_srh() {
    const wd = document.getElementById("se-ipt").value;
    let ih = "";
    for (let i = 0; i < emoji.length; i++) {
        if (wd === "" || emoji[i][0].replace(wd, "") !== emoji[i][0] || emoji[i][1].replace(wd, "") !== emoji[i][1]) {
            ih += emjhtml.replace(/%EMOJI%/g, emoji[i][0]).replace(/%TEXT%/g, `${emoji[i][0].replaceAll(wd, hlhtml.replace(/%TEXT%/g, wd))}<br>${emoji[i][1].replaceAll(wd, hlhtml.replace(/%TEXT%/g, wd))}`);
        }
    }
    document.getElementById("se-dsp").innerHTML = ih;
}
/**
 *
 */
function se_mnu() {
    if (st["srh-emj"] || document.getElementById("se-upd").innerText !== "") {
        st_mnu = 1 - st_mnu;
        document.getElementById("se-mnu").style.display = (st_mnu === 0 ? "none" : "grid");
    }
    if (st["srh-emj"] && st_mnu === 1) {
        document.getElementById("se-ipt").focus();
        se_srh();
    }
}
/**
 *
 */
function se_cgl() {
    st_cgl = 1 - st_cgl;
    document.getElementById("se-cgl").style.display = (st_cgl === 0 ? "none" : "block");
}
/**
 *
 */
function srhemj() {
    $("body").append(se_html);
    if (!st["srh-emj"]) {
        document.getElementById("se-srh").style.display = "none";
    }
    document.getElementById("se-mnu").addEventListener("click", (event) => {
        document.getElementById("se-mnu").style.display = "grid";
        event.stopPropagation();
    });
    document.getElementById("se-ent").addEventListener("click", (event) => {
        se_mnu();
        event.stopPropagation();
    });
    document.addEventListener("click", () => {
        if (st_mnu) {
            se_mnu();
        }
    });
    document.getElementById("se-ipt").addEventListener("input", () => {
        se_srh();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && st_mnu) {
            se_mnu();
        }
    });
}

// ------------------------------

const vr = /^[0-9]+\.[0-9]+\.[0-9]+$/g;
const updurl = "https://lgse-source.heyc.eu.org/version";
const cglurl = "https://lgse-source.heyc.eu.org/changelog.txt";
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
    $("#se-upm").append(`当前 <b><span style="color: #e67e22;">${cv}</span></b> --&gt; 最新 <b><span style="color: #52c41a;">${lv}</span></b><br><a href="https://lgse-source.heyc.eu.org/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">点击升级</a> <a id="se_cgl" style="font-size: 0.7em">显示/隐藏更新日志</a>`);
    document.getElementById("se_cgl").addEventListener("click", () => { se_cgl(); });
    LGSElog("Popped upgrade content");
}
/**
 *
 * @param lv
 */
function upd_d(lv) {
    $("#se-upm").append(`当前 <b><span style="color: #52c41a;">${cv}</span></b> &lt;-- 最新 <b><span style="color: #e67e22;">${lv}</span></b><br><a href="https://lgse-source.heyc.eu.org/LuoguShowEmoji.min.user.js" style="font-size: 0.7em">点击降级</a> <a id="se_cgl" style="font-size: 0.7em">显示/隐藏更新日志</a>`);
    document.getElementById("se_cgl").addEventListener("click", () => { se_cgl(); });
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
        LGSElog("Get version succeed", cv, res.content);
        const [c1, c2, c3] = cv.split(".").map(Number);
        const [l1, l2, l3] = res.content.split(".").map(Number);
        const cmpver = () => {
            if (c1 !== l1) {
                if (c1 < l1) {
                    return 1;
                }
                return -1;
            }
            if (c2 !== l2) {
                if (c2 < l2) {
                    return 1;
                }
                return -1;
            }
            if (c3 !== l3) {
                if (c3 < l3) {
                    return 1;
                }
                return -1;
            }
            return 0;
        };
        if (cmpver() === 1) {
            upd_u(res.content);
            upd_blink();
        }
        if (cmpver() === -1) {
            upd_d(res.content);
        }
        if (res.content !== cv) {
            document.getElementById("se-upd").style.display = "block";
            request(cglurl, upd_cglog);
        }
    } else {
        LGSElog("Get version fail");
        upd_f();
    }
}

// ------------------------------

const src = ["https://cdn.jsdelivr.net/gh/hyc1230/qqemoji/56x56/%EMOJI%.gif", "https://mirror.ghproxy.com/https://raw.githubusercontent.com/hyc1230/qqemoji/master/56x56/%EMOJI%.gif", "https://qqemoji.heyc.eu.org/56x56/%EMOJI%.gif", "https://qqemoji.netlify.app/56x56/%EMOJI%.gif"];

const stdef = {
        "rep-emj": true,
        "srh-emj": true,
        "img-src": 2,
        "chk-upd": true,
    },
    stlist = [
        "rep-emj",
        "srh-emj",
        "img-src",
        "chk-upd",
    ];
/**
 *
 */
function readst() {
    try {
        const val = GM_getValue(`${!indep ? "LGSE_" : ""}settings`, "{}");
        LGSElog("Settings", val);
        st = JSON.parse(val);
    } catch (err) {
        LGSElog(`ERROR ${err}`);
        LGSElog("Using default settings");
        st = stdef;
    }
    for (let i = 0; i < stlist.length; i++) {
        if (st[stlist[i]] == null) {
            st[stlist[i]] = stdef[stlist[i]];
        }
    }
}

// ------------------------------

/**
 *
 */
function load_lg() {
    LGSElog("Loading for Luogu");
    rp = rp.replace(/%SOURCE%/g, src[st["img-src"]]);
    se_html = se_html.replace(/%SOURCE_CY%/g, src[st["img-src"]].replace(/%EMOJI%/g, "cy"));
    emjhtml = emjhtml.replace(/%SOURCE%/g, src[st["img-src"]]);
    entimg = entimg.replace(/%SOURCE_CY%/g, src[st["img-src"]].replace(/%EMOJI%/g, "cy"));
    if (st["rep-emj"] && chk()) {
        LGSElog("Start replacing");
        start_replace();
    }
    srhemj();
    if (st["chk-upd"] && indep) {
        request(updurl, upd);
    }
}
const clrbtn_html = `<style>
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
<button class="se-clr" id="se-clr">清除 LGSE 缓存</button>`;
/**
 *
 */
function load_st() {
    LGSElog("Loading for Settings page");
    document.getElementById("rep-emj").checked = st["rep-emj"];
    document.getElementById("srh-emj").checked = st["srh-emj"];
    document.getElementById("img-src").selectedIndex = st["img-src"];
    document.getElementById("chk-upd").checked = st["chk-upd"];
    document.getElementById("status").style.color = "#52c41a";
    document.getElementById("status").innerText = "加载完成";
    document.getElementById("info").innerText = JSON.stringify(st);
    $("body").append(clrbtn_html);
    document.getElementById("se-clr").addEventListener("click", () => {
        const n = new Date().getTime(),
            c = getcacheextime();
        if (n - c < 600000) {
            window.alert(`距离上次清除缓存还没有 10 分钟，请在 ${Math.ceil((600000 - (n - c)) / 60000)} 分钟后重试。`);
        } else {
            clrcache();
            window.alert("清除缓存成功，请刷新其它页面以使更改生效。");
        }
    });
    if (!indep) {
        document.getElementById("se-clr").style.display = "none";
    }
}

/**
 *
 */
function listen_st() {
    const stn = document.getElementById("info").innerText;
    if (stn !== "" && stn !== JSON.stringify(st)) {
        st = JSON.parse(stn);
        GM_setValue(`${!indep ? "LGSE_" : ""}settings`, stn);
        document.getElementById("status").style.color = "#52c41a";
        document.getElementById("status").innerText = "已保存";
        LGSElog("Saved");
    }
    setInterval(listen_st, 100);
}

/**
 *
 */
function init() {
    LGSElog("Starting");
    readst();
}
/**
 *
 */
function chkver() {
    if (indep && GM_getValue(`${!indep ? "LGSE_" : ""}ver`, "") !== cv) {
        LGSElog("Installed version not match");
        clrcache();
        GM_setValue(`${!indep ? "LGSE_" : ""}ver`, cv);
    }
}
/**
 *
 */
function LG() {
    try {
        init();
        chkver();
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
