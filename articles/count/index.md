---
title: 简单计数题选做
tags:
  - solution
  - counting
---

[题单](https://www.luogu.com.cn/training/2019#problems)

后面的似乎都得生成函数。。。所以就做了对建档的一些

## [P6146 [USACO20FEB]Help Yourself G](https://www.luogu.com.cn/problem/P6146)

[{MDEXPEND 显示解法

之前做过，已经忘了怎么做了，再做一次

假设我们直接做，考虑每一次新加入一条线段会产生怎样的贡献

发现可能会合并一些段，然后增加一些段，还有原来的贡献

我们考虑所有线段按左端点排序，那么就不会产生合并

那么只需要考虑新的贡献，不难发现就是只选所有与当前线段不交的线段的方案数，发现是 $2^k$ 的形式

这个可以前缀和处理

复杂度 $\mathcal{O}(n \log n)$，瓶颈在 $\mathcal{O}(n)$ 次快速幂

所以用光速幂就是 $\mathcal{O}(n)$

}]

## [P6075 [JSOI2015]子集选取](https://www.luogu.com.cn/problem/P6075)

[{MDEXPEND 显示解法 

只考虑每一个元素在每一个集合中的存在性，显然最后只需按照乘法原理全部乘起来即可。

考虑对于一个元素，一定存在一条分界线，两边一边全取一边全不取

可以考虑从左下角开始走，不难发现走 $n$ 步恰好到达边界

因此答案就是 $2^{nk}$

}]

## [P6008 [USACO20JAN]Cave Paintings P](https://www.luogu.com.cn/problem/P6008) 

[{MDEXPEND 显示解法  

首先不难发现每一个连通块相互独立

其次注意到我们若从下往上 DP，那么对于一个连通块，当前层若选，则是只有一种方案，否则就是所有下一层的块按乘法原理算出来的总方案

因此用并查集维护连通性，合并的时候贡献，最后每一个连通块 +1 即可

答案就是所有连通块的答案乘起来

}]

## [P1350 车的放置](https://www.luogu.com.cn/problem/P1350)

[{MDEXPEND 显示解法

考虑直接用组合数来放

先放高的部分，考虑枚举选出 $t$ 列放东西，那么低的部分就要选出 $k-t$ 列，显然这两部分都是可以算的，乘上一个 $\binom{a}{t}$ 和一个 $\binom{c}{k-t}$ 就行了

然后再枚举额外区域放 $s$ 个，那么我们 $\binom{t}{s}$ 列放高的，然后高的部分选 $b^{\underline{s}}$

剩下共 $k-s$ 放低的，左边的列已经选好了因此再乘上一个 $d^{\underline{(k-s)}}$ 就行了 


}]

## [P3205 [HNOI2010]合唱队](https://www.luogu.com.cn/problem/P3205)

[{MDEXPEND 显示解法

根据末尾状态的变化，可以区间 dp

设 $f_{i,j,0/1}$ 表示区间 $[i,j]$ 还有最后一个人进来的方向

状态设出来之后转移就比较显然了

}]

## [P4071 [SDOI2016]排列计数](https://www.luogu.com.cn/problem/P4071)

[{MDEXPEND 显示解法

发现选出所有匹配位置之后剩下的就是一个全错位排列

因此递推然后直接乘起来就行

}]

## [P3223 [HNOI2012]排队](https://www.luogu.com.cn/problem/P3223)

[{MDEXPEND 显示解法

小奥，懒得写

}]
