(function(win){
    var Storage = window.localStorage;
    var cur = Storage.getItem('Background');
    cur = BackgroundAdjust(cur);
    if (win.Background != undefined) {
        if (win.Background == 'enable' || win.Background == 'on' || win.Background == 'yes' || win.Background == 'true') { if(cur < 0) cur = -cur; }
        else if (win.Background == 'disable' || win.Background == 'off' || win.Background == 'no' || win.Background == 'false') { if(cur > 0) cur = -cur; }
        else if (win.Background == 'rand' || win.Background == 'random') cur = rand(NumberOfBGPs) + 1;
        else if(BackgroundLegal(win.Background)) cur = BackgroundAdjust(win.Background);
    }
    console.log("background = ", cur);
    if(cur == 'xtw') ChangeBackgroundxtw();
    else {
        if(cur > 0) ChangeBackground(cur);
        else DisableBackground();
    }
    Storage.setItem('Background', cur);
})(document);