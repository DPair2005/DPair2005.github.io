function rand(n) {
    return parseInt(n * Math.random());
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

const total = 10
const constid = 3
function ChangeBackground(x) {
    document.body.style.backgroundImage = "url(/bgp/bgp" + x + ".png)"
}

function RandomBackground(x) {
    ChangeBackground(rand(total) + 1)
}

function SaveBackground(x) {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'))
    if ((typeof (cur) != "number" || cur > total || cur < 1)) cur = constid
    ChangeBackground(cur)
}

function NextBackground() {
    var Storage = window.localStorage;
    var cur = Number(Storage.getItem('Background'))
    if ((typeof (cur) != "number" || cur > total || cur < 1)) cur = constid
    cur = Number(cur) + 1
    if (cur > total) cur -= total
    ChangeBackground(cur)
    Storage.setItem('Background', cur);
}