(function(win){
    var Storage = window.localStorage;
    // background
    var cur = Storage.getItem('Background');
    cur = BackgroundAdjust(cur);
    var val = BackgroundStatus();
    if (win.Background != undefined) {
        if (win.Background == 'enable' || win.Background == 'on' || win.Background == 'yes' || win.Background == 'true') { 
            val = true;
        }
        else if (win.Background == 'disable' || win.Background == 'off' || win.Background == 'no' || win.Background == 'false' || win.Background == '0') { 
            val = false;
        }
        else if (win.Background == 'rand' || win.Background == 'random') {
            cur = rand(NumberOfBGPs) + 1;
            val = true;
        }
        else if (win.Background == 'default') {
            cur = default_value;
            val = true;
        }
        else if (BackgroundLegal(win.Background)) {
            cur = BackgroundAdjust(win.Background);
            val = true;
        }
    }
    console.log("background = ", cur);
    console.log("status = ", val);
    if(val == false) DisableBackground();
    else {
        if(cur == 'xtw') ChangeBackgroundxtw();
        else ChangeBackground(cur);
    }
    Storage.setItem('Background', cur);
    Storage.setItem('Background-Enable', val);

    // heartland
    win.heartland = false;
    if (win.Funval == 'heartland') {
        Storage.setItem('heartland', true);
        win.heartland = true;
        location.href = "/heartland";
    }
    else {
        win.heartland = Storage.getItem('heartland');
        if(typeof(win.heartland) == 'string')  win.heartland = (win.heartland != 'false');
        else if(typeof(win.heartland) == 'boolean') win.heartland = (win.heartland);
        else if(typeof(win.heartland) == 'number')  win.heartland = (win.heartland != 0);
        else win.heartland = false;
    }
})(document);