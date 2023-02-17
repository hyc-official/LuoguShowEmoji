// ==UserScript==
// @name         Luogu Show Emoji
// @namespace    blog.heyc.eu.org
// @version      0.1.0
// @description  Show emoji in Luogu
// @author       Heyc
// @match        https://www.luogu.com.cn/*
// @icon         https://www.luogu.com.cn/favicon.ico
// @grant        none
// ==/UserScript==
var emoji=["aini","aiq","am","azgc","baiy","bangbangt","banzz","baojin","bb","bkx","bl","bobo","bp","bq","bs","bt","bu","bz","cd","cengyiceng","cg","ch","chi","cj","cp","cs","cy","dan","dao","db","dg","dgg","dk","dl","doge","dx","dy","dz","ee","emm","fad","fade","fan","fd","fendou","fj","fn","fw","gg","gy","gz","hanx","haob","hb","hc","hd","hec","hhd","hn","hp","hq","hsh","ht","huaix","hx","jd","jh","jiaybb","jiaybs","jie","jk","jw","jx","ka","kb","kel","kf","kg","kk","kl","kt","kuk","kun","kzht","lb","lengh","lh","ll","lm","lq","ls","lw","lyj","mdfq","mg","mm","ng","nkt","oh","oy","pch","pj","pp","pt","px","qd","qiang","qiao","qq","qt","ruo","sa","se","sh","shd","shl","shuai","shui","shxi","sr","tiao","tl","tnl","tp","ts","tsh","tt","tuu","tx","ty","tyt","wbk","whl","wl","wn","wosl","wq","ws","wul","wx","wzm","xhx","xia","xig","xin","xjj","xk","xs","xu","xw","xy","xyx","yao","yb","yhh","yiw","yl","youl","youtj","yt","yun","yx","zhd","zhem","zhh","zhm","zhq","zj","zk","zq","zt","zuotj",];var re="(>[^<]*?)\/%EMOJI%([^A-Za-z]+?)";var rp="$1<img src=\"https://cdn.jsdelivr.net/gh/hyc-official/LuoguShowEmoji/qqemoji/-%EMOJI%.gif\">$2";function run(){let cmts=document.querySelectorAll(".am-comment-bd");for(let i=0;i<cmts.length;i++){let str=cmts[i].innerHTML;for(let j=0;j<emoji.length;j++){let regex=new RegExp(re.replace(/%EMOJI%/g,emoji[j]),"g");str=str.replace(regex,rp.replace(/%EMOJI%/g,emoji[j]))}cmts[i].innerHTML=str}}function start(){run();setTimeout(start,100)}start();