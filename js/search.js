(function (win) {



'use strict',



AnalyzeSearch = function (s) {
    let ret = {}, t, r;
    for (t of (s.startsWith('?') ? s.substr(1) : s).split('&'))
        if (r = t.split('='), r[1])
            ret[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
    return ret;
}

win.Search = AnalyzeSearch(location.search)
win.Funval = win.Search['funval']






})(document);