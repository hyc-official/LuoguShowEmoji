const indep = true;

const css = "color: #E67E22;";

/**
 *
 * @param str
 * @param {...any} s
 */
function LGSElog(str, ...s) {
    console.log(`%c[lgse] ${str}`, css, ...s);
}

/**
 *
 * @param key
 */
function getcache(key) {
    const res = {};
    LGSElog("Find cache", key);
    const d = new Date(),
        e = new Date(),
        n = new Date().getTime();
    d.setTime(parseInt(GM_getValue(`cache/time_${key}`, "0"), 10));
    e.setTime(parseInt(GM_getValue(`cache/expired`, "0"), 10));
    if (d === 0) {
        LGSElog("Cache miss", key);
        res.status = "miss";
    } else if (n - d > 86400000 || d < e) {
        LGSElog("Cache expired", key);
        res.status = "expired";
    } else {
        LGSElog("Cache hit", key);
        res.status = "hit";
        res.content = GM_getValue(`cache/content_${key}`);
    }
    return res;
}
/**
 *
 * @param key
 * @param cont
 */
function setcache(key, cont) {
    LGSElog("Set cache", key, "=>", cont);
    GM_setValue(`cache/content_${key}`, cont);
    GM_setValue(`cache/time_${key}`, new Date().getTime().toString());
}
/**
 *
 */
function clrcache() {
    LGSElog("Clear cache");
    GM_setValue("cache/expired", new Date().getTime().toString());
}
/**
 *
 */
function getcacheextime() {
    return parseInt(GM_getValue("cache/expired", "0"), 10);
}

/**
 *
 * @param url
 * @param call
 * @param {...any}  s
 */
function request(url, call, ...s) {
    const c = getcache(url);
    if (c.status === "hit") {
        call(JSON.parse(c.content), ...s);
    } else {
        LGSElog("Request", url);
        GM_xmlhttpRequest({
            method: "GET",
            url,
            onload(response) {
                LGSElog("Request succeed", response.status, response.responseText);
                const res = {
                    error: false,
                    status: response.status,
                    content: response.responseText,
                };
                if (response.status === 200) {
                    setcache(url, JSON.stringify(res));
                }
                call(res, ...s);
            },
            onerror() {
                LGSElog("Request fail");
            },
        });
    }
}

/**
 *
 * @param LG
 * @param ST
 */
function LGSE_Start(LG, ST) {
    if (/.*\.luogu\..*/.test(document.location.hostname)) {
        LG();
    } else {
        ST();
    }
}

export {
    indep, LGSElog, getcache, setcache, clrcache, getcacheextime, request, LGSE_Start,
};
