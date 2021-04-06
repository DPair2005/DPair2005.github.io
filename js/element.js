function rand( n ) {
    return parseInt(n * Math.random());
}
function drawSaying() {
    let says = new Array()
    says[0] = '这个菜菜的 DPair 正在学习怎么搞出一言'
    says[1] = '如果你看到了这行字说明他可能成功了'
    says[2] = '繁星流动的痕迹纺织出所有的心愿，与希望一起充满这个世界吧！'
    document.getElementById("saying").innerText = says[rand(3)]
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
