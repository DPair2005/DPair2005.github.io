(function (win) {
    'use strict';
    let winbody = win.querySelector('body');
    if (win.Funval == 'MYYAKAK')
        winbody.style.setProperty("--fun-display", 'default');
    else 
        winbody.style.setProperty("--fun-display", 'none');
})(document);