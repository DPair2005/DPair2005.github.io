---
title: 2021 联合省选游记
tags:
  travels
---
## Day -x
联合省选前状态差的跟个什么一样，整天不知道在干什么，然后就搭了个博客（但其实也不是自己搭的）。

## Day 0
把博客提交到了 gitee.com 上面，然后算是终于搞好了。

## Day 1
坐地铁 1h 到学紫然后离考试还有 20min 左右，结果在校门口一看一个人都没有了全是家长。

赶紧跑了进去（（

然后到楼上碰到了点王，跟点王谈笑风生了一会儿发现点王居然随身带U盘，然后点王就把U盘交给老周了（伏笔！），然后我发现自己走错考场了（捂脸

最后赶在考试前 10min 终于进了场（捂脸捂脸

上午一开题，一看这个 T1 感觉挺水的样子，准备直接 30min 切掉再看 T2T3 。

然后一上来猜一个结论必选一段前缀和一段后缀，看到他输入给你排好序直接猜这道题可以 $O(n)$ ，然后先写了个极度显然的 $O(m^2)$ 暴力准备一会儿拿过来拍。

结果发现我不会 $O(n)$ ，只会 $O(n\log n)$ 。

我一看数据范围 $10^6$ 感觉这个 $O(n\log n)$ 也还行，就开始胡 $O(n\log n)$ 。

结果发现这道题我不知道怎么二分……

然后就写了一个半小时，最后各种分讨然后判了一堆 case 勉强过了拍。

但是一测大样例，发现跑了 2s 左右，有点慌。

然后决定去开后面的题。

看完 T2T3 发现没有数据结构直接差评。

刚看到 T2 还以为是个结论题，然后胡了 20min 左右看到数据范围 $300$ 才意识到事情不对劲。

然后就想着先开 T3 拿点暴力分，总分 += 16 。

然后回来开 T2 ，发现这个 $m=2$ 的 Subtask 似乎很有前途，就先把这个东西打了，然后 $3\times 3$ 的瞎搞了一下就跑路了。

赛后发现 3×3 的 Subtask 假掉了，直接少 20pts

之后又回去开 T3 ，发现了一些很高妙的性质，然后以为自己又行了，写了个 $O(nm)$ 的假算法。

然后没过大样例，调了 40min 一直以为是自己写挂了，最后比赛快结束了才发现假掉了。

然而发现这个做法改一改可以变成 $O(n^2m)$ ，不过没时间了， 总分 -= 28 。

中途想上厕所举了 20min+ 的手才把那个阴间的监考员吸引了过来

最后只剩 10min 的时候随便玩了玩桌面上的程序，然后才发现居然有 VS code ……

赛后碰到了 Frame ，他说他嘴巴 AK 了，看来进队稳了。

然后在回来的车上玩了几把 lrs，给那些凡夫俗子们展示了一下什么叫做 DPairの盲毒 。

回到 XJ 之后上博客看到 lxl 给我评论了个 “分块需要带活？” ，大胆猜想 Day 2 有 lxl 出的毒瘤分块题。

最终估分 $[70,100]+[0,30]+16=[86,146]$ 直接退役。

## Day 2
所以为什么西溪和紫金港的校服一样啊，搞得门口保安以为我是紫金港的（（

上午到的比较早，碰到了 wasa855 和 YLWang 还有 zty 。

这个 zty 一碰到我就开始假，看来是假文化是 OI 界的普遍现象。

然后就进场开题了。

首先看到这个 T1 一眼树分块，觉得不太好写准备把 T2T3 先看看。

一看 T2。嗯？暴力分 60pts。

一看 T3。嗯？暴力分 45pts。

然后花了半个小时把暴力打完了就去开 T1 了。

T1 后来想了想感觉树分块不是很好写，准备换个算法。

然后发现可以主席树二分，但是好像也不是很好写，准备再换一个。

然后发现可以倍增解决，但好像只能处理上行路径。

然后我定睛一看这东西可以离线，所以直接掏出一个并查集解决问题。

但是这时候我发现我不会开 windows 下的栈。。。

于是拍了 6000 组随机数据跑路了。

赛后问 Frame ，他好像说他 T1 不会打了 70pts ？

话说 70 是什么部分分啊

一脸懵逼。

估分 $100+60+45=205$ 还行。

两天大概也就 $300$ 左右？退役了退役了。