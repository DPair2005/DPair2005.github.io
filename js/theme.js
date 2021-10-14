function rand(n) {
    return parseInt(n * Math.random());
}

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

function JudgeBackground(cur) {
    if(typeof(cur) == "number"
        && cur <= NumberOfBGPs 
        && cur >= -NumberOfBGPs 
        && cur != 0 ) return false;
    else return true;
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

function NextBackground() {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'));
    
    if (JudgeBackground(cur)) cur = default_value;
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