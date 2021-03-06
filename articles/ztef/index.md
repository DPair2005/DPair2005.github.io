---
title: 整体二分学习笔记
tags:
  - ds
  - divide&conquer
---
~~DPair 早期作品.jpg~~

爬了，都这个时间点了才刚刚开始学整体二分，还学了两个晚上才会。

言归正传，开始理解一下整体二分。

个人理解：整体二分，顾名思义就是把多次二分答案合并到一次完成的一种技巧。需要离线。

先看一道例题：

[Dyanmic Rankings](https://www.luogu.com.cn/problem/P2617)

（~~某神仙：这不是一道树套树裸题吗？~~）

然而由于这道题可以离线。整体二分也可做。

首先顾名思义，整体二分基于二分，我们先看看这道题二分怎么做。

二分做法：对于每一个询问进行一次二分答案，每一次 $check$ 一遍当前区间内比 $mid$ 小的数的个数。直到最后范围缩小到 $k$ 。

复杂度发现是 $O(nmloga_i)$ 的。

我们发现，这么做的劣势在于进行了过多的二分与过多有重叠的 $check$ ，因此考虑把这一些东西优化掉。

我们考虑把所有询问一起二分。

每一次二分这么操作：把每一次 $check$ 把所有区间都扫一遍，并把它们分为两类，一类是答案 $\le mid$ 的，另一类是答案 $> mid$ 的。

然后最后还是一样的不断缩小，就能离线得到每一个询问的答案。

比如这道题。

等等，这道题不是有修改吗？

那就把修改也丢进去就行了啊。

我们大可以把修改也看做询问，我们会发现修改也分为了两部分，一部分 $\le mid$ 的对这一次二分有影响，对后面 $\le mid$ 的 $check$ 可能有影响，且对 $> mid$ 的 $check$ 必有影响，另一类 $> mid$ 的对这一次和其他所有 $\le mid$ 的 $check$ 都显然没有影响，又可以分两类。

然后，我们就得到了一个 $O(mlog^2a)$ 的离线做法，稍微带一点常数。

而且有一个好处，你的每一个操作都是按时间戳加入询问的，换言之，所有询问和修改的先后顺序是不变的。

## 【代码】
```cpp
#include <bits/stdc++.h>
using namespace std;

template <typename T>
inline void read(T &x){
    x = 0;int fu = 1;
    char c = getchar();
    while(c > 57 || c < 48){
        if(c == 45) fu = -1;
        c = getchar();
    }
    while(c <= 57 && c >= 48){
        x = (x << 3) + (x << 1) + c - 48;
        c = getchar();
    }
    x *= fu;
}
template <typename T>
inline void fprint(T x){
    if(x < 0) putchar(45), x = -x;
    if(x > 9) fprint(x / 10);
    putchar(x % 10 + 48);
}
template <typename T>
inline void fprint(T x, char ch){
    fprint(x);putchar(ch);
}
inline char next_char(){
    char ch = getchar();
    while(!isalpha(ch)) ch = getchar();
    return ch;
}


int n, m, cnt;
struct Que{
    int l, r, k;
    int opt, id;
}q[600005], q1[600005], q2[600005];
int ans[200005];
inline Que make(int tmp1, int tmp2, int tmp3, int tmp4, int tmp5){
    Que ret;
    ret.l = tmp1;ret.r = tmp2;ret.k = tmp3;
    ret.opt = tmp4;ret.id = tmp5;
    return ret;
}

int c[200005];
inline int lowbit(int x){return x & (-x);}
inline int query(int x){int ret = 0;for (int i = x;i;i -= lowbit(i)) ret += c[i];return ret;}
inline void modify(int x, int val){for (int i = x;i <= n;i += lowbit(i)) c[i] += val;}


int a[200005];
void solve(int l, int r, int L, int R){
    if(L > R) return ;
    if(l == r){
        for (int i = L;i <= R;i ++){
            if(q[i].opt == 2){
                ans[q[i].id] = l;
            }
        }
        return ;
    }
    int cnt1 = 0, cnt2 = 0, mid = (l + r) >> 1;
    for (int i = L;i <= R;i ++){
        if(q[i].opt == 1){
            if(q[i].l <= mid) q1[++ cnt1] = q[i], modify(q[i].id, q[i].r);
            else q2[++ cnt2] = q[i];
        }
        else{
            int num = query(q[i].r) - query(q[i].l - 1);
            if(num >= q[i].k) q1[++ cnt1] = q[i];
            else q[i].k -= num, q2[++ cnt2] = q[i];
        }
    }
    for (int i = 1;i <= cnt1;i ++){
        if(q1[i].opt == 1) modify(q1[i].id, -q1[i].r);
    }
    for (int i = L;i <= L + cnt1 - 1;i ++) q[i] = q1[i - L + 1];
    for (int i = L + cnt1;i <= R;i ++) q[i] = q2[i - L - cnt1 + 1];
    solve(l, mid, L, L + cnt1 - 1);
    solve(mid + 1, r, L + cnt1, R);
}


int main(){
    read(n);read(m);
    for (int i = 1;i <= n;i ++) read(a[i]), q[++ cnt] = make(a[i], 1, 0, 1, i);
    int tot = 0;
    for (int i = 1;i <= m;i ++){
        int l, r, k;
        char opt = next_char();read(l);read(r);
        if(opt == 'Q') read(k), q[++ cnt] = make(l, r, k, 2, ++ tot);
        else q[++ cnt] = make(a[l], -1, 0, 1, l), q[++ cnt] = make(a[l] = r, 1, 0, 1, l);
    }
    solve(-1000000000, 1000000000, 1, cnt);
    for (int i = 1;i <= tot;i ++) fprint(ans[i], 10);
    return 0;
}
```

例题2：[K大数查询](https://www.luogu.com.cn/problem/P3332)

和之前那道题其实也没什么区别了，只要能掌握二分的思路就行。

唯二不同的是需要区间修改，还有 $k$ 小变成了 $k$ 大。

把树状数组改成线段树，然后把每一个元素取相反数第 $k$ 小就变成第 $k$ 大了。

（~~其实线段树直接推平也很方便，当我懒得写还是一个一个删的~~）

```cpp
#include <bits/stdc++.h>
using namespace std;

template <typename T>
inline void read(T &x){
    x = 0;int fu = 1;
    char c = getchar();
    while(c > 57 || c < 48){
        if(c == 45) fu = -1;
        c = getchar();
    }
    while(c <= 57 && c >= 48){
        x = (x << 3) + (x << 1) + c - 48;
        c = getchar();
    }
    x *= fu;
}
template <typename T>
inline void fprint(T x){
    if(x < 0) putchar(45), x = -x;
    if(x > 9) fprint(x / 10);
    putchar(x % 10 + 48);
}
template <typename T>
inline void fprint(T x, char ch){
    fprint(x);putchar(ch);
}
inline char next_char(){
    char ch = getchar();
    while(!isalpha(ch)) ch = getchar();
    return ch;
}
#define int long long 

int n, m, cnt;
struct Que{
    int l, r, k;
    int opt, id;
}q[600005], q1[600005], q2[600005];
int ans[200005];
inline Que make(int tmp1, int tmp2, int tmp3, int tmp4, int tmp5){
    Que ret;
    ret.l = tmp1;ret.r = tmp2;ret.k = tmp3;
    ret.opt = tmp4;ret.id = tmp5;
    return ret;
}

#define LSON rt << 1, l, mid
#define RSON rt << 1 | 1, mid + 1, r
int t[200005], lazy[200005];

inline void pushup(int rt){t[rt] = t[rt << 1] + t[rt << 1 | 1];}
inline void update(int rt, int l, int r, int val){
    t[rt] += (r - l + 1) * val;
    lazy[rt] += val;
}
inline void pushdown(int rt, int l, int r){
    if(lazy[rt]){
        int mid = (l + r) >> 1;
        update(LSON, lazy[rt]);
        update(RSON, lazy[rt]);
        lazy[rt] = 0;
    }
}
void modify(int rt, int l, int r, int x, int y, int z){
    if(x <= l && r <= y) return update(rt, l, r, z);
    pushdown(rt, l, r);
    int mid = (l + r) >> 1;
    if(x <= mid) modify(LSON, x, y, z);
    if(y > mid) modify(RSON, x, y, z);
    pushup(rt);
}
int query(int rt, int l, int r, int x, int y){
    if(x <= l && r <= y) return t[rt];
    pushdown(rt, l, r);
    int mid = (l + r) >> 1, ret = 0;
    if(x <= mid) ret += query(LSON, x, y);
    if(y > mid) ret += query(RSON, x, y);
    return ret;
}
void solve(int l, int r, int L, int R){
    if(L > R) return ;
    if(l == r){
        for (int i = L;i <= R;i ++){
            if(q[i].opt == 2){
                ans[q[i].id] = l;
            }
        }
        return ;
    }
    int cnt1 = 0, cnt2 = 0, mid = (l + r) >> 1;
    for (int i = L;i <= R;i ++){
        if(q[i].opt == 1){
            if(q[i].k <= mid) q1[++ cnt1] = q[i], modify(1, 1, n, q[i].l, q[i].r, 1ll);
            else q2[++ cnt2] = q[i];
        }
        else{
            int num = query(1, 1, n, q[i].l, q[i].r);
            if(num >= q[i].k) q1[++ cnt1] = q[i];
            else q[i].k -= num, q2[++ cnt2] = q[i];
        }
    }
    for (int i = 1;i <= cnt1;i ++) if(q1[i].opt == 1) modify(1, 1, n, q1[i].l, q1[i].r, -1ll);
    for (int i = L;i <= L + cnt1 - 1;i ++) q[i] = q1[i - L + 1];
    for (int i = L + cnt1;i <= R;i ++) q[i] = q2[i - L - cnt1 + 1];
    solve(l, mid, L, L + cnt1 - 1);
    solve(mid + 1, r, L + cnt1, R);
}


signed main(){
    read(n);read(m);
    int tot = 0;
    for (int i = 1;i <= m;i ++){
        int opt, l, r, x;
        read(opt);read(l);read(r);read(x);
        if(opt == 1) q[++ cnt] = make(l, r, -x, 1, 0ll);
        else q[++ cnt] = make(l, r, x, 2, ++ tot);
    }
    solve(-n, n, 1, cnt);
    for (int i = 1;i <= tot;i ++) fprint(-ans[i], 10);
    return 0;
}
```