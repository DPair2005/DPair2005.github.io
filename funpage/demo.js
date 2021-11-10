
const n = [" hehezhou ", " mayiyang ", "叉义叉", "小跳蛙", "卷王", "颓怪", " ZK ", "高质量好题", "世界", "人们", "现实", "小丑", " NOI ", " NOIp "];
const suj = [" hehezhou ", " mayiyang ", "叉义叉", "小跳蛙", "卷王", "颓怪", " ZK ", "人们", "现实", "小丑"];
const obj = n;
const vt = ["击杀", "愚弄", "怒斥", "畏惧", "阿鲁巴", "膜拜", "是", "乳", "爆切", " AK ", "歌颂", "控制", "模仿", "吊打", "成为", "反对", "支持", "激烈反对", "尽情嘲笑着"];
const linkv = ["是", "不再是", "早已是"];
const vi = ["内卷", "不行", "复辟", "爬", "爬来爬去", "女装", "乳叉", "搞笑", "流泪", "叹息", "欢呼", "爬", "怪叫", "内卷", "颓废", "忏悔", "在拉莱耶沉睡", "嘬题"];
const vc = ["的不行", "的无知", "的过于强大", "的过于内卷", "的毫无素质"];
const adj = ["不太行的", "巨大的", "小", "丧失理智的", "变态的", "可怜的", "邪恶的", "善良的", "无敌的", "搞笑的", "卷疯了的", "伟大的", "神圣的", "奇怪的", "奇异的", "恐怖的", "不可名状的", "经常容易在竞赛中出现这样那样问题的"];
const adv = ["迷惑地", "狂笑着", "堂而皇之地", "迅速地", "狂怒地", "不得不", "冷静地", "沉着地", "谨慎地"];
const short_sent = ["%a%s%b%v%a%o", "%a%s%b%w"]; // %g
const last_form = ["%g", "%s钦定%g", "%a%s%l%a%o", "%o被%s%b%v"]; // %L
const small_form = ["%L"]; // %f
const form = [
    "%f。",
    "但是，",
    "为什么要%b%v%a%o呢？",
    "正因为如此，%f。",
    "由于%f，%a%s才能%b%v%a%o。",
    "尽管%f，但%n还是%A。",
    "真是一个%A%n！",
    "%g。",
    "%g，所以%a%s才能%b%v%a%o。",
    "%g的原因在于，%a%s%b%w。",
    "问题的关键在于：%a%s为什么会%b%v%a%o呢？",
    "这真的是%A啊！",
    "换句话说：",
    "尽管这样，但%n还是%A。",
    "%a%o被%a%s所%b%v。",
];
function print(s) {
    var k = s.length;
    var ret = '';
    for (var j = 0; j < k; ++j) {
        if (s[j] != '%')
            ret = ret + s[j];
        else {
            ++ j;
            if (s[j] == 'n')
                ret = ret + n[rand(n.length)];
            else if (s[j] == 'v')
                ret = ret + vt[rand(vt.length)];
            else if (s[j] == 'a') {
                if (rand() & 1)
                    ret = ret + adj[rand(adj.length)];
            }
            else if (s[j] == 'A')
                ret = ret + adj[rand(adj.length)];
            else if (s[j] == 'b') {
                if (rand() & 1)
                    ret = ret + adv[rand(adv.length)];
            }
            else if (s[j] == 's')
                ret = ret + suj[rand(suj.length)];
            else if (s[j] == 'o')
                ret = ret + obj[rand(obj.length)];
            else if (s[j] == 'w')
                ret = ret + vi[rand(vi.length)];
            else if (s[j] == 'c')
                ret = ret + vc[rand(vc.length)];
            else if (s[j] == 'l')
                ret = ret + linkv[rand(linkv.length)];
            else if (s[j] == 'L')
                ret = ret + print(last_form[rand(last_form.length)]);
            else if (s[j] == 'f')
                ret = ret + print(small_form[rand(small_form.length)]);
            else if (s[j] == 'g')
                ret = ret + print(short_sent[rand(short_sent.length)]);
        }
    }
    return ret;
}

function Generate( leng ) {
    var ret = ''
    for (var i = 1; i <= leng; i++)
        ret = ret + print(form[rand(form.length)]);
    return ret;
}


var ResultText = document.createElement('p');

function NewText() {
    ResultText.textContent = Generate(document.LengthOfText);
}

(function(win){
    let qwq = win.getElementById('post');
    ResultText.style = 'font-size: 18px';
    qwq.appendChild(ResultText);
    NewText();
})(document);