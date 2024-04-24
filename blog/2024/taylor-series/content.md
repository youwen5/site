## Introduction

The following content is a test post for the blog's markdown and $\KaTeX$ rendering capabilities.
There's a few errors, and wikilinks aren't supported. This file was copy pasted directly out of my
`obsidian.md` notebook, so it contains some weird formatting.

<br />

The methods in [[9.8 Power Series]] and
[[9.9 Representation of (Rational) Functions by Power Series]] allow us to find power series for
rational functions, $\ln$, and $\arctan$. To get power series for other elementary functions, we
need a more general method.

We can approximate some non-polynomial functions by constructing a polynomial with the _same
derivatives_ as the function. This is called a _Taylor Polynomial_.

> [!NOTE] In general, if $c \neq 0$, it's called a Taylor Polynomial. If $c = 0$, then it's a
> Maclaurin Polynomial.

> [!CAUTION] test lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
> voluptate velit esse cillum dolore eu fugiat nulla pariatur.

> [!WARNING] test lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
> voluptate velit esse cillum dolore eu fugiat nulla pariatur.

> [!TIP] test lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
> voluptate velit esse cillum dolore eu fugiat nulla pariatur.

> [!IMPORTANT] test lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
> voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Consider $f(x) = e^x$. Let's find the best cubic approximation $P_3(x)$ for $f(x)$ at $c=0$.

$$
P_3(0) = f(0)
$$

$$
f'(x) = e^x,\,P_3'(0)=f'(0)
$$

$$
f''(x) = e^x,\,P_3''(0) = f''(0)
$$

$$
f'''(x) = e^x,\,P_3'''(0) = f'''(0)
$$

$$
f(0) = f'(0) = f''(0) = f'''(0) = 1
$$

We know that $P_3(x)$ will be of the form

$$
P_3(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3
$$

We can differentiate both sides $n$ times to find the values of $a_0$, $a_1$, $\dots$, $a_n$.

$$
P_3(x) = 1 + x + \frac{1}{2} x^2 + \frac{1}{6} x^3
$$

You can confirm that this polynomial has the same first, second, and third derivatives as $e^x$.

## Generalizing

Taking repeated derivatives like this leads to a common pattern in all Taylor polynomials.

> [!NOTE] We use the notation $P_n(x)$ to denote the $n^{th}$ Taylor polynomial

Taylor polynomials take the form:

$$
P_n(x) = a_0 + a_1 (x-c) + a_2(x-c)^2 + a_3 (x-c)^3 + \dots + a_n(x-c)^n
$$

where $a_n$ is the coefficient of the $n^{th}$ term (indexed from 0). It turns out that these
coefficients are actually common across Taylor polynomials.

$$
P_n(c) = a_0 = f(c)
$$

$$
P_n'(c) = a_1 = f'(c)
$$

$$
P_n''(c) = 2 a_2 = 2!\,a_2
$$

$$
P_n'''(c) = 6a_3 = 3!\,a_3 = f'''(c)
$$

$$
P_n^{(n)}(c) = n!\,a_n = f^{(n)}(c)
$$

$$
\implies a_n = \frac{f^{(n)}(c)}{n!}
$$

## Tying up loose ends

We've seen Taylor and Maclaurin polynomials. We will eventually extend them to
[[9.10 Taylor and Maclaurin Series|Maclaurin and Taylor series]]. Before this is mathematically
valid (at least, valid enough), we need to do some stuff first.

We can use Maclaurin and Taylor polynomials (or series) to estimate the value of functions by hand.

### Taylor Remainder

If you have $f(x)$ and $P_n(x)$ (centered at $c$), then $f(x) = P_n(x) + R_n(x)$, where $R_n$ is

$$
R_n(x) = \frac{f^{(n+1)}(z)}{(n+1)!}\,(x-c)^{n+1}
$$

$$
z \in [c,\,x]
$$

> [!TIP] This is a fancy way of saying that $z$ is between $c$ and $x$.

$$
\text{Error} = \left|R_n(x)\right|
$$

> [!NOTE] > $R_n$ would be the "next term" in $P_n(x)$ except we put $z$ instead of $c$.

#### Applying to $e^x$

How many terms of the Maclaurin Polynomial for $f(x) = e^x$ do we need to guarantee that our
estimate for $f(1) = e$ is within $\displaystyle\frac{1}{1000000}$? The error is

$$
|R_n(1)| = \frac{|f^{(n+1)}(z)|}{(n+1)!}\,\cancel{|1-0|^{n+1}}
$$

for some $z$ between $c=0$ and $x=1$ So we want an $n$ such that

$$
\frac{|e^z|}{(n+1)!} \le \frac{1}{1000000}
$$

The worst case scenario is $z=1$. If $\displaystyle\frac{e}{(n+1)!} \le \frac{1}{1000000}$, we're
all set.

![Test image](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png)

Assume that $e \le 3$, which implies that if $\displaystyle\frac{3}{(n+1)!} \le \frac{1}{1000000}$,
we're all set. After trying terms, we find that $n=9$ works. So
$P_9(1) = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \dots + \frac{1}{9!}$ is within $\frac{1}{1000000}$
of $e$.

```rust
let mut var: u32 = 10030;

fn takes_var(var: &mut u32) {
  var += 1;
}
```
