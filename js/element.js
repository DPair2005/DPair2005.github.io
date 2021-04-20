function rand( n ) {
    return parseInt(n * Math.random());
}
function drawSaying() {
    let says = {
        "一言 (hitokoto)" : [
            '海马のspecial规则',
            '一飞冲天啊，我！',
            'They aren\'t even super soilders.',
            '你的生命已如风中残烛',
            '所列瓦多卡纳',
            '这个菜菜的 DPair 正在学习怎么搞出一言',
            '如果你看到了这行字说明 DPair 可能成功实现了一言的功能',
            '繁星流动的痕迹纺织出所有的心愿，与希望一起充满这个世界吧！',
            '王者的鼓动，现在降临于此，看这天地鸣动的力量吧！',
            '聚集的祈愿化作新生的闪耀之星，成为光明闪耀的道路吧！',
            '王者的鼓动，现在在这里排队，请看这天地鸣动的力量！',
            '王者的鼓动，现在从这里下来了，请看这天地鸣动的力量！',
            '聚集的星之光辉将照亮新的奇迹，成为光明闪耀的道路吧！',
            '希望会不断前进！',
            '我要否定这份希望！',
            '用谎言引出真相！',
            '这个世界是王马小吉的！',
            '从现在开始，这里将成为决斗都市。',
            '这就是，进化之后最强龙族的姿态！',
            '破坏神欧贝利斯克，伴随着究极的力量降临于此，成为我绝对的仆人吧！',
            '',
            '如果你在刷一言的时候刷出过空串，那并不代表 DPair 写挂了，而是 DPair 确实留了一个空串。',
            '黑色的疾风，让隐藏的感情呈现在你的翅膀上吧！',
            '冰冷的火焰将吞噬世上的一切，漆黑的花朵，绽放吧！',
            '神圣的守护之光，在此彼此交融成为永恒的生命！',
            '为了守护世界的和平，结合勇气与力量！',
            '这就是，我活下去的意志！',
            '我说过的，决斗在这一回合就会结束，我，赢了！',
            '我们的未来，由我们自己决定！',
            '王者与恶魔在这里交汇，汹涌狂暴的灵魂，展现创造天地的力量吧！',
            '聚集的梦之结晶将打开全新的进化之门，成为光明闪耀的道路吧！',
            'What ever it takes.',
            '我的回合，抽卡！',
            '用决斗……给大家……带来笑容……',
            '强韧，无敌，最强！粉碎，玉碎，大喝彩！',
            '律师越是到危难的时候越是要笑',
            '觉悟吧，你这虫混蛋！',
            'HA☆NA☆SE！',
            '全☆速☆前☆进☆da',
            '加载一言时发生错误',
            '“我觉得佛光最主要普照在我们高一身上。”',
            'Never gonna give you up, never gonna let you down.\nNever gonna run around and desert you.',
            'Never gonna make you cry, never gonna say goodbye.\nNever gonna tell a lie and hurt you.',
            '“春游我们是有机会去的。”',
            '王泥喜法介，没问题的！',
            'Let\'s do this!',
            '異議あり！',
            '異議あり！',
            '異議あり！',
            '異議あり！',
            '希望！希望！希望！希望！希望！希望！希望！希望！',
            '集いし愿いが新たに辉く星となる。光差す道となれ！シンクロ召唤！飞翔せよ、スターダスト·ドラゴン！',
            '王者の鼓动、今ここに列を成す！天地鸣动の力を见るがいい！シンクロ召唤！我が魂、レッド·デーモンズ·ドラゴン！',
            '集いし星の辉きが、新たな奇迹を照らし出す。光差す道となれ！シンクロ召唤！光来せよ、セイヴァー·スター·ドラゴン！',
            '希望は前に進むだ！',
            'You get lost...',
            'You get lost...again...',
            'You backed...again...',
            'Knives to meet you. =)',
            'It\'s a beautiful day outside.\nBirds are singing, flowers are blooming.\nOn days like this, kids like you...\nSHOULD BE BURNING IN HELL.',
            'Get dunked on!!!',
            '我将一切，都赌在这次抽卡上！',
            '闪光抽卡！',
            '场上 4 星的怪兽有 2 只，要上了游马！',
            '场上 12 星的怪兽有 3 只，要上了马利克！',
            '解放你场上的两只怪兽，送你个 8 星大宝贝！',
            '英雄也有英雄战斗的场地！',
            '新宇宙有了新的英雄！他的名字是 E·HERO NEOS！',
            '天空雷鸣混沌之时，集连锁中之远古魔导书，其力可至无限!',
            '在光与暗交织之时，开始方尖塔的仪式。其到来之时，灼热之疾风必吹荒大地，生者必皆成尸骸！',
            'You\'ll die where you stand.',
            'You get filled with determination.',
            '这不是怪兽，是神啊！',
            '魔导战士·破坏者，萃☆香☆攻☆击！',
            '比地狱还要黑的黑暗',
            '我将我自己和游马叠放！',
            '斯马拉乃。',
            '斯巴拉西哟！',
            '堕落！萌死他卡多！',
            '游星，你是我们的希望！加速同调连光都能超越！',
            '去吧！游星！',
            '顶级明镜止水之心！',
            '宝玉兽是我的家人。',
            'E·HERO 欧贝利斯克的巨神兵！',
            '我召唤究极宝玉神，降雷皇哈蒙！',
            'The game is afoot.',
            'Elementary!',
            '意☆义☆不☆明的卡牌',
            'I am iron man.',
            '真正的决斗者，连抽卡都可以由自己决定！',
            '在黑暗中闪耀的银河啊，化为希望之光寄宿于吾仆之身！光之化身，在此降临！',
            "翻涌的银河，现在在此化作怒涛之光现出身姿吧！",
            '“这个算法是 O(nlogn) 的！”',
            '“凭什么点分比边分多一只log？”',
        ],
        /* '毒瘤 (lxl)' : [
            '“他 们 都 得 死。”',
            '“哦对了忘了说题解了”',
            '“分块还需要带活？”',
            '“基本上所有单点修改都可以强化成区间推平。”',
            '“很遗憾，被我卡掉了。”',
            '“我小学就会这个了，你 naive！”',
            '“不过觉得你们很闲天天写乱搞很烦，写个复杂度对的不好吗，非要内卷（”',
            '“真不懂你们抄题解AC有啥牛逼的。。 ”',
            '“有本事自己想自己写啊，网上复制粘贴谁不会”',
            '“我不会做我自己出的题了。。你谷小学生太可怕”',
            '“好啊 500ms”',
            '“Rotate Flower Round.”',
            '“其实这个题考的不是常数优化，是膜法”',
            '“你们都会 +1-1rmq 吧？不会有关系，因为你听不懂后面我要说啥”',
            '“从上句话可以看出这出题人语文没救”',
            '“能取代红黑树和 AVL 才有鬼了”',
            '“你找找论文看看 "SBT" 学术界承不承认有这么个东西...”',
            '“那是因为 oier 乱起名字，你看看什么"猫树","主席树"搞学术的人承认不”',
            '“集训队论文那种娱乐性质的不算”',
            '“百度百科上伸展树是啥样我们都知道了对吧”',
            '“我已经不知道该说些什么了，NOI界，NOI界，你说是，那就是”',
            '“我在我研究的领域当然比他在09年的时候强”',
            '“我在我懂的领域为啥不能吊打集训队”',
            '“我之前网上看到啥就是啥然后被各路神仙怼死了（雾”',
            '“我本来以为就是个小朋友，然后发现是个民科”',
            '“和一个blue是蓝色都不知道的人有啥辩论的必要吗”',
        ], */
        '马语 (analects)' : [
            '“今天你膜拜的是我，明天我膜拜的是大家”',
            '“一个好的 OI 选手，目标一定是要拿到 IOI 金牌。” ',
            '“你要用 AK 证明自己行，那太逊了。我用 AK 证明我自己不行。” ',
            '“我疯掉了也比你强。” ',
            '“我发现你这个人理解有一些缺陷。” ',
            '“我除了 AK 一无是处。” ',
            '“我 AK 了，你爆零了。” ',
            '“你这个脑力咧，要修。” ',
            '“我听写 AK，至今没有错过。” ',
            '“我边看春晚边 AK” ',
            '“人不能不 AK” ',
            '“人最需要的是爆零的勇气” ',
            '“我 是 AK 了” ',
            '“我这 n^2 怎么这么慢啊，这 n 才两百万啊” ',
            '“呀！呀是你说哒？” ',
            '“呀不是你讲的！” ',
            '“你 AK 了，我不满意！” ',
            '“诶历史的进程总是由我掌控” ',
            '“啊你怎么跟个屎尿泡一样的” ',
            '“你反正怎么样都 D 不过我，是不是” ',
            '“我恨不得一桶水把你泼到屎坑里” ',
            '“我在！你就能 AK！” ',
            '“我姓马名 D，简称 AK！” ',
            '“我说这不好，你不能反驳！” ',
            '“啊，你怎么能敲打我哒！” ',
            '“这你不会也加进去吧，啊！” ',
            '“手指头啊，砍下来为止！” ',
            '“吔，你会卡常哒！” ',
            '“诶，我发神经勒，发神经勒！” ',
            '“我一天切 1e10 个题” ',
            '“我四个毛病：第一个，天天 AK！第二个，天天暴零！第三个，天天菲克！第四个，不允许别人菲克！” ',
            '“连 tourist 都做不出来的题，我随手就切掉了！诶我就是这么自信” ',
            '“我能证明黎曼猜想，但我不发表！” ',
            '“天天爆零还在那边叫，真是不行。” ',
            '“你怎么像一个垃圾一样。” ',
            '“我跟你讲，这一只 log 是跑不过两只 log 的。” ',
            '“D 人的本质就是要被 D。” ',
            '“被 D 不需要本质” ',
            '“人天生就是要被 D 的，所以要学会 D 人。” ',
            '“我无事不晓，只会 AK，快记下来！” ',
            '“自从联合省选之后我就变成了图论鬼才。” ',
            '“该 F 的终归是会 F 的。” ',
            '“垃圾的 DPair 还敢在那边发言？” ',
            '“迅雷不及掩耳盗铃而响叮当之势。” ',
            '“我脚朝天也比你头朝地强！” ',
            '“人不 D 就不能生存！” ',
            '“啊，你到厕（二声）所里去给我反省去！” ',
            '“你看到我不 D 人的样子也是 D 人” ',
            '“你一点 AK 的气概都没有” ',
            '“垃圾虫子不要在这里烦我”',
            '“来，我 AK 一下 ARC”',
            '“DPair 垃圾的要死”',
            '“我犯了战略性失误”',
            '“我爪巴，你爬”',
            '“DPair 像个 SB 一样”',
            '“我吃的饱饱的”',
            '“我说你还是闭上你的死嘴巴吧，嗯？”',
            '“不要以为你张了个嘴巴就是 DPair 了”',
            '“只有我有 AK 的权利”',
            '“一个 simple 一个 naive 叫什么叫”',
            '“今天爆零的是你，明天爆零的还是你！”',
            '“那卷王只能形容我，不能形容别人”',
        ],
    }
    let sayingtype = rand(Object.keys(says).length)
    let sayingtitle = Object.keys(says)[sayingtype]
    document.getElementById("sayingtype").innerText = sayingtitle
    document.getElementById("saying").innerText = says[sayingtitle][rand(says[sayingtitle].length)]
}

function loadMath() {
    window.MathJax = {
        loader: {
            source: {
                '[tex]/amsCd': '[tex]/amscd',
                '[tex]/AMScd': '[tex]/amscd'
            }
        },
        tex: {
            inlineMath: { '[+]': [['$', '$']] },
            tags: 'ams'
        },
        options: {
            renderActions: {
                findScript: [10, doc => {
                    document.querySelectorAll('script[type^="math/tex"]').forEach(node => {
                        const display = !!node.type.match(/; *mode=display/);
                        const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
                        const text = document.createTextNode('');
                        node.parentNode.replaceChild(text, node);
                        math.start = { node: text, delim: '', n: 0 };
                        math.end = { node: text, delim: '', n: 0 };
                        doc.math.push(math);
                    });
                }, '', false],
                insertedScript: [150, () => {
                    document.querySelectorAll('mjx-container').forEach(node => {
                        let target = node.parentNode;
                        if (target.nodeName.toLowerCase() === 'li') {
                            target.parentNode.classList.add('has-jax');
                        }
                    });
                }, '', false]
            }
        }
    };
    (function () {
        var script = document.createElement('script');
        script.src = '//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
        script.defer = true;
        document.head.appendChild(script);
    })();
}


const total = 7
const constid = 3
function ChangeBackground( x ) {
    if (x == 0) {
        document.body.style.backgroundImage="none"
        return
    }
    document.body.style.backgroundImage="url(/bgp/bgp" + x + ".png)"
}

function RandomBackground( x ) {
    ChangeBackground(rand(total) + 1)
}

function SaveBackground( x ){
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'))
    if ((typeof(cur) != "number" || cur > total || cur < 1)) cur = constid
    ChangeBackground(cur)
}

function NextBackground() {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'))
    // console.log(cur, typeof(cur))
    if ((typeof(cur) != "number" || cur > total || cur < 1)) cur = constid
    cur = Number(cur) + 1
    if (cur > total) cur -= total
    ChangeBackground(cur)
    Storage.setItem('Background', cur);
}