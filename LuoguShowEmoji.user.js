// ==UserScript==
// @name         Luogu Show Emoji
// @namespace    blog.heyc.eu.org
// @version      1.1.2
// @description  Show emoji in Luogu
// @author       Heyc
// @match        https://www.luogu.com.cn/*
// @icon         https://ghproxy.com/https://raw.githubusercontent.com/hyc-official/LGSE-page/master/favicon.ico
// @grant        none
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
    "ls",
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
var rp = "$1<span style=\"color: #dfdfdf; font-size: 0.3em;\">$2</span><img src=\"https://ghproxy.com/https://raw.githubusercontent.com/hyc-official/LuoguShowEmoji/latest/qqemoji/-%EMOJI%.gif\" alt=\"/%EMOJI%\">$3";

function run()
{
    let cmts = [document.querySelectorAll(".am-comment-bd"), document.querySelectorAll(".content")];
    let sta = false;
    for (let x = 0; x < cmts.length; x++)
    {
        for (let i = 0; i < cmts[x].length; i++)
        {
            let str = cmts[x][i].innerHTML + " ";
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
            if (cmts[x][i].innerHTML != str)
            {
                cmts[x][i].innerHTML = str;
                sta = true;
            }
        }
    }
    if (sta)
    {
        console.log("%c[lgse] Replaced", css);
    }
}

function start()
{
    run();
    setTimeout(start, 1000);
}

console.log("%c[lgse] Started", css);
start();
// run();