const NumberOfBGPs = 6
const default_value = 3

function BackgroundStatus() {
    var Storage = window.localStorage;
    var cur = Storage.getItem('Background-Enable');
    if(typeof(cur) == 'string') return cur != 'false';
    if(typeof(cur) == 'boolean') return cur;
    if(typeof(cur) == 'number') return cur != 0;
    return true;
}

function ChangeBackground(x) {
    console.log("change = ", x);
    document.body.style.backgroundImage = "url(/bgp/bgp" + x + ".png)"
}

function DisableBackground() {
    document.body.style.backgroundImage = "none"
}

function BackgroundAdjust(cur) {
    if(typeof(cur) != "number") {
        if(cur == 'xtw') return 'xtw';
        if(Number(cur) != Number(cur)) return default_value;
        cur = Number(cur);
    }
    if(1 <= cur && cur <= NumberOfBGPs) return cur;
    else return default_value;
}

function BackgroundLegal(cur) {
    if(typeof(cur) != "number") {
        if(cur == 'xtw') return true;
        if(Number(cur) != Number(cur)) return false;
        cur = Number(cur);
    }
    if(1 <= cur && cur <= NumberOfBGPs) return true;
    else return false;
}

const jpglist = [2, 3, 4, 5, 7, 8, 9, 10, 61];

function GetUrlxtw(x) {
    const len = jpglist.length;
    var l = 0, r = len - 1;
    while(l <= r) { // 不要在意这个二分 qwq
        var mid = (l + r) >> 1, y = jpglist[mid]; 
        if(y == x) return "https://pealfrog.gitee.io/images/picture/" + FillZero3(x) + ".jpg";
        if(y < x) l = mid + 1;
        else r = mid - 1;
    }
    return "https://pealfrog.gitee.io/images/picture/" + FillZero3(x) + ".png";
}


function ChangeBackgroundxtw() {
    var total = 107;
    var cur = rand(total) + 1;
    while (cur > 62 && cur < 70) cur = rand(total) + 1;
    document.body.style.backgroundImage = "url(" + GetUrlxtw(cur) + ")";
}

function NextBackground() {
    var Storage = window.localStorage;
    var cur = Storage.getItem('Background');
    cur = BackgroundAdjust(cur);
    if(cur == 'xtw') {
        if(BackgroundStatus()) ChangeBackgroundxtw();
    }
    else {
        cur = Number(cur) + 1;
        if (cur > NumberOfBGPs) cur -= NumberOfBGPs;
        if(BackgroundStatus()) ChangeBackground(cur);
    }
    Storage.setItem('Background', cur);
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