function rand( n ) {
    return parseInt(n * Math.random());
}
function drawSaying() {
    let says = [
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
        '“一个好的 OI 选手，目标一定是要拿到 IOI 金牌。” —— MYY',
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
        '“他 们 都 得 死。” —— lxl',
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
        '“很遗憾，被我卡掉了。” —— lxl',
        '意☆义☆不☆明的卡牌',
        'I am iron man.',
    ]
    document.getElementById("saying").innerText = says[rand(says.length)]
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
