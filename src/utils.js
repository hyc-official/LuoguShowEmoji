const indep = true;

const css = "color: #E67E22;";

/**
 *
 * @param str
 */
function LGSElog(str) {
    console.log(`%c[lgse] ${str}`, css);
}

/**
 *
 * @param url
 * @param call
 */
function request(url, call) {
    LGSElog(`Finding cache: ${url}`);
    const d = new Date(),
        n = new Date().getTime();
    d.setTime(parseInt(GM_getValue(`cache/time_${url}`, "0"), 10));
    let res = {};
    if (n - d > 86400000) {
        LGSElog("Cache miss");
        GM_xmlhttpRequest({
            method: "GET",
            url,
            onload(response) {
                LGSElog(`Request success: HTTP ${response.status}, Content: ${response.responseText}`);
                res = {
                    error: false,
                    status: response.status,
                    content: response.responseText,
                };
                if (response.status === 200) {
                    GM_setValue(`cache/content_${url}`, JSON.stringify(res));
                    GM_setValue(`cache/time_${url}`, new Date().getTime().toString());
                }
                call(res);
            },
            onerror(response) {
                LGSElog(`Request failed: HTTP ${response.status}`);
                res = {
                    error: true,
                    status: response.status,
                };
                call(res);
            },
        });
    } else {
        LGSElog("Cache hit");
        res = JSON.parse(GM_getValue(`cache/content_${url}`));
        call(res);
    }
}

/**
 *
 * @param LG
 * @param ST
 */
function LGSE_Start(LG, ST) {
    if (/.*\.luogu\.*/.test(document.location.hostname)) {
        LG();
    } else {
        ST();
    }
}

export {
    LGSElog, request, indep, LGSE_Start,
};
