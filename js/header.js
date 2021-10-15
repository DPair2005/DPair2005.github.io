function rand(n) { return parseInt(n * Math.random()); }

// add leading zeros till len 3
function FillZero3(x) {
    if(x < 10) return "00" + x;
    if(x < 100) return "0" + x;
    return x;
}
