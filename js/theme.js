function rand(n) {
    return parseInt(n * Math.random());
}
const NumberOfBGPs = 7
const constid = 3
function ChangeBackground(x) {
    document.body.style.backgroundImage = "url(/bgp/bgp" + x + ".png)"
}

function DisableBackground() {
    document.body.style.backgroundImage = "none"
}

function RandomBackground() {
    ChangeBackground(rand(NumberOfBGPs) + 1)
}

function SetBackground() {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'));
    if (typeof (cur) == "number" && cur < 0) {
        DisableBackground();
        return ;
    }
    if (typeof (cur) != "number" || cur > NumberOfBGPs || cur < -NumberOfBGPs) cur = constid;
    ChangeBackground(cur);
}

function NextBackground() {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'));
    if (typeof (cur) == "number" && cur < 0) {
        cur = Number(cur) - 1;
        if (cur < -NumberOfBGPs) cur += NumberOfBGPs;
        Storage.setItem('Background', cur);
        return ;
    }
    if (typeof (cur) != "number" || cur > NumberOfBGPs || cur < -NumberOfBGPs) cur = constid;
    cur = Number(cur) + 1;
    if (cur > NumberOfBGPs) cur -= NumberOfBGPs;
    ChangeBackground(cur);
    Storage.setItem('Background', cur);
}

function SwitchBackground() {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'))
    if (typeof (cur) != "number" || cur > NumberOfBGPs || cur < -NumberOfBGPs) cur = constid
    if (typeof (cur) == "number" && cur < 0) {
        cur = -cur;
        ChangeBackground(cur);
    }
    else {
        cur = -cur;
        DisableBackground();
    }
    Storage.setItem('Background', cur);
}