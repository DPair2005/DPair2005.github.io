function rand(n) {
    return parseInt(n * Math.random());
}
(function(win){
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'));

    if (JudgeBackground(cur)) cur = default_value;
    if (win.Background != undefined) {
        if (win.Background == 'enable' || win.Background == 'on' || win.Background == 'yes' || win.Background == 'true') { if(cur < 0) cur = -cur; }
        else if (win.Background == 'disable' || win.Background == 'off' || win.Background == 'no' || win.Background == 'false') { if(cur > 0) cur = -cur; }
        else if (win.Background == 'rand' || win.Background == 'random') cur = rand(NumberOfBGPs) + 1;
        if (!JudgeBackground(Number(win.Background))) { cur = Number(win.Background); }
    }
    
    if(cur > 0) ChangeBackground(cur);
    else DisableBackground();
    Storage.setItem('Background', cur);
})(document);