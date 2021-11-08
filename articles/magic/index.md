---
title: DPair 又不会反演了
tags:
  - math
  - magic
---

随便写一些式子的推法，这样就不用背了（（

### 二项式反演 I

一个最常用的式子，恰好和至少的互相转化：
$$
\begin{aligned}
G_i&=\sum_{j=i}^n \binom{j}{i}F_j\\
F_i&=\sum_{j=i}^{n}(-1)^{j-i}\binom{j}{i}G_j
\end{aligned}
$$

[{MDEXPAND 魔术

$$
\begin{aligned}
G_i&=\sum_{k=i}^n \binom{k}{i}F_k\\
F_i&=\sum_{k=i}^n[k-i=0]\binom{k}{i}F_k\\
[n=0]&=\sum_{i=0}^n(-1)^i\binom{n}{i}\\
\therefore F_i&=\sum_{k=i}^n\sum_{j=0}^{k-i}(-1)^j\binom{k-i}{j}\binom{k}{i}F_k\\
&=\sum_{k=i}^n\sum_{j=0}^{k-i}(-1)^j\binom{k}{j}\binom{k-j}{i}F_k\\
&=\sum_{j=0}^{n-i}(-1)^j\sum_{k=i+j}^n\binom{k}{j}\binom{k-j}{i}F_k\\
&=\sum_{j=0}^{n-i}(-1)^j\sum_{k=i+j}^n\frac{k!}{j!(k-j)!}\frac{(k-j)!}{i!(k-j-i)!}F_k\\
&=\sum_{j=0}^{n-i}(-1)^j\sum_{k=i+j}^n\frac{k!}{j!i!(k-j-i)!}F_k\\
&=\sum_{j=0}^{n-i}(-1)^j\sum_{k=i+j}^n\frac{(i+j)!k!}{j!i!(k-j-i)!(i+j)!}F_k\\
&=\sum_{j=0}^{n-i}(-1)^j\binom{i+j}{i}\sum_{k=i+j}^n\binom{k}{i+j}F_k\\
&=\sum_{j=0}^{n-i}(-1)^j\binom{i+j}{i}G_{i+j}\\
&=\sum_{j=i}^{n}(-1)^{j-i}\binom{j}{i}G_{j}
\end{aligned}
$$

}]

### 二项式反演 II

再推个恰好与至多，先上结论：
$$
\begin{aligned}
G_n&=\sum_{i=0}^n \binom{n}{i}F_i\\
F_n&=\sum_{i=0}^{n}(-1)^{n-i}\binom{n}{i}G_{i}
\end{aligned}
$$

[{MDEXPAND 魔术

$$
\begin{aligned}
G_n&=\sum_{i=0}^n \binom{n}{i}F_i\\
F_n&=\sum_{i=0}^n[n-i=0] \binom{n}{i}F_i\\
[n=0]&=\sum_{i=0}^n(-1)^i\binom{n}{i}\\
\therefore F_n&=\sum_{i=0}^n\sum_{j=0}^{n-i}(-1)^j\binom{n-i}{j} \binom{n}{i}F_i\\
&=\sum_{i=0}^n\sum_{j=0}^{n-i}(-1)^j\binom{n}{j} \binom{n-j}{i}F_i\\
&=\sum_{j=0}^{n}(-1)^j\binom{n}{j} \sum_{i=0}^{n-j}\binom{n-j}{i}F_i\\
&=\sum_{j=0}^{n}(-1)^j\binom{n}{j}G_{n-j}\\
&=\sum_{i=0}^{n}(-1)^{n-i}\binom{n}{i}G_{i}
\end{aligned}
$$

}]

