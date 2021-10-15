
const NumberOfBGPs = 6
const default_value = 3

function ChangeBackground(x) {
    document.body.style.backgroundImage = "url(/bgp/bgp" + x + ".png)"
}

function DisableBackground() {
    document.body.style.backgroundImage = "none"
}

/* function RandomBackground() {
    ChangeBackground(rand(NumberOfBGPs) + 1)
} */

function BackgroundAdjust(cur) {
    if(typeof(cur) != "number") {
        if(cur == 'xtw') return 'xtw';
        if(Number(cur) != Number(cur)) return default_value;
        cur = Number(cur);
    }
    if(cur <= NumberOfBGPs 
        && cur >= -NumberOfBGPs 
        && cur != 0 ) return cur;
    else return default_value;
}

function BackgroundLegal(cur) {
    if(typeof(cur) != "number") {
        if(cur == 'xtw') return true;
        if(Number(cur) != Number(cur)) return false;
        cur = Number(cur);
    }
    if(cur <= NumberOfBGPs 
        && cur >= -NumberOfBGPs 
        && cur != 0 ) return true;
    else return false;
}

/* function SetBackground() {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'));
    if (typeof (cur) == "number" && cur < 0) {
        DisableBackground();
        return ;
    }
    if (JudgeBackground(cur)) cur = default_value;
    ChangeBackground(cur);
} */


function GetUrlxtw(x) {
    return "https://pealfrog.gitee.io/images/picture/" + FillZero3(x) + ".png";
}

function ChangeBackgroundxtw() {
    var total = 107;
    var cur = rand(total) + 1;
    while (cur > 61 && cur < 70) cur = rand(total) + 1;
    document.body.style.backgroundImage = "url(" + GetUrlxtw(cur) + ")";
}

function NextBackground() {
    var Storage = window.localStorage;
    var cur = Storage.getItem('Background');
    cur = BackgroundAdjust(cur);
    if(cur == 'xtw') {
        ChangeBackgroundxtw();
        return ;
    }
    if (cur < 0) {
        cur = Number(cur) - 1;
        if (cur < -NumberOfBGPs) cur += NumberOfBGPs;
        DisableBackground();
        Storage.setItem('Background', cur);
    }
    else {
        cur = Number(cur) + 1;
        if (cur > NumberOfBGPs) cur -= NumberOfBGPs;
        ChangeBackground(cur);
        Storage.setItem('Background', cur);
    }
}

/* function SwitchBackground() {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'))
    if (JudgeBackground(cur)) cur = default_value
    if (cur < 0) {
        cur = -cur;
        ChangeBackground(cur);
    }
    else {
        cur = -cur;
        DisableBackground();
    }
    Storage.setItem('Background', cur);
} */