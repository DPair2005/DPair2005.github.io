---
title: 支配树学习笔记
tags:
  - trees
  - graphs
---
学习自 [Jacder's blog](https://coderoj.gitee.io/articles/dominator/)，~~妈呀怎么和他写的一模一样。~~

## 定义
对于一个有向图 $G$ 和起点 $s$，定义 $u$ 支配 $v$ 当且仅当所有从 $s$ 到 $v$ 的路径都经过点 $u$。

所有支配关系构成的树就是支配树。

后文中假设所有点都可以被 $s$ 到达。

## DAG
DAG 上的支配树还是比较好求的。

我们考虑直接拓扑排序，由于 $s$ 可以到达其它所有点，所以 $s$ 没有入边一定优先进队。

然后考虑确定一棵树的方式之一就是确定每一个结点的父亲，显然 $s$ 没有父亲。

而对于一个结点 $v$，我们不难发现它的父亲一定支配了它在图中所有入边对应的结点。

考虑若 $v$ 被访问到，则它所有的入边对应的结点也已经被访问到并出现在支配树上，因此这些点的 LCA 就是 $v$ 在支配树上的父亲，这部分倍增处理即可。

## 一般图
我们先对这幅图建出 dfs 树并求出其 dfn 序。

然后引入一个概念： **“半支配点”** 。

定义一个点 $u$ 是 $v$ 的半支配点当且仅当存在一条路径 $u\rightarrow u\_1 \rightarrow u\_2 \rightarrow \dots \rightarrow u\_k \rightarrow v$，使得 $\forall i\in[1, k], dfn\_{u\_i} > dfn\_{v\_i}$。

首先不难发现半支配点可能有多个，例如 $fa\_{v}$ 就一定是 $v$ 的一个半支配点。

定义 $v$ 的 **“最小半支配点”** 为 $v$ 的所有半支配点中 dfn 最小的一个，设它为 $\text{semi}(v)$，显然是唯一的。

这东西是有一些性质的。

***

### 1) $\text{semi}(v)$ 一定是 $v$ 的祖先
其实仔细想想也挺显然的。

由于显然存在一个 dfn 比 $v$ 小的半支配点，因此 $\text{semi}(v)$ 不可能 dfn 比 $v$ 更大。

因此考虑 $\text{semi}(v)$ 若 dfn 序比 $v$ 更小，考虑它到达 $v$ 一定需要经过一个 $v$ 的祖先，因此除非它本身就是 $v$ 的祖先，否则存在矛盾。

### 2) 删除原图非树边，加入形如 $(\text{semi}(u), u)$ 的边，支配关系不变
其实就是证明支配关系在原图和新图的中不变。

首先考虑祖先与后代之间的边的删去对支配关系显然无影响。

考虑删去一条横杈边 $(u, v)$，首先显然 $v$ 的 dfn 序更小，而且 $u$ 到 $lca(u, v)$ 上的所有点本来就不可能构成支配点，因此只可能导致删去后支配关系增多。

那么只需要考虑证明这么操作后支配关系不会增多就行。

不难发现新图中若存在 $(x, u)$ 这一对支配关系，当且仅当 $(x, u)$ 路径上的每一个点 $y$，都有 $dfn\_{\text{semi}(y)} \ge dfn\_x$。

考虑如果存在一个 $y$ 不满足该条件，说明存在一个点可以不经过 $x$ 到达 $y$，由于 $y$ 又可以到达 $u$，那么就存在一个点可以不经过 $x$ 到达 $u$，这与 $x$ 支配 $u$ 矛盾。

然后我们再假设原图中 $(x, u)$ 这对关系不存在，换言之就是有另一条路径可以不经过 $x$ 到达 $u$。

然后考虑这条不经过 $x$ 的路径上的一个点 $y$，然后假设它的前驱为 $w$，我们要找到一个点使得 $dfn\_w < dfn\_x < dfn\_y$，显然存在一个这样的点。

我们设 $(y,u)$ 这条路径和 $(x,u)$ 的最初的交点为 $z$（可能与 $u$ 相等）。

考虑 $dfn\_{\text{semi}(z)}$ 一定 $\le dfn\_{w}$，显然出现了矛盾。

***

有了这些性质，显然我们可以删掉所有非树边然后加入所有 $(\text{semi}(u), u)$，显然图变为了 DAG，并且原支配关系不变。

那么最后的问题在于如何求出所有点的 $\text{semi}$

首先我们对于每一条边 $(u, v)$ 进行讨论：

+ 若 $dfn\_u < dfn\_v$，显然 $u$ 是 $v$ 的半支配点，而且显然 $\text{semi}(v)$ 不会超过 $u$
+ 否则，考虑每一个 dfn 比 $v$ 大的 $u$ 的祖先，这些点的半支配点显然都可以尝试对 $v$ 产生贡献

因此按 dfn 排序，然后带权并查集优化上述过程即可。

据说有更优实现，但我觉得卡 $\mathcal O(n\log n)$ 而只放 $\mathcal O(n)$ 过的出题人还是少之又少吧