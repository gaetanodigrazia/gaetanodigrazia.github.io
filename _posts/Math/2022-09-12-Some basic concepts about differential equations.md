---
layout: post
title:  "Analisys II - Differential equations "
author: gaetano
categories: [ Math, Analysis, Formulary, Cheatsheet, Calculus, Differential, Equations ]
image: assets/images/math.jpg

---
<object>
<p>This is brief introduction to differential equations</p>
</object>


# Differential equations
Solving a differential equation means finding all the functions $$x(t)$$ that satisfy the given <em>relation for each</em> $ t $ belonging to the definition set.

## Definitions
> #### Order

The order of a differential equation is the highest order of derivation that appears in it. \\
In general, a differential equation of order $ n $ takes the form:

$$F (x ^ {(n)} (t), ..., \dot {x} (t), x (t), t) = 0 $$



> #### Autonomous

A differential equation is said to be autonomous if $ t $ appears only as a variable on which $ x $ depends

$$x ^ {n} (t) $$


> #### Normal form

A differential equation is said in normal form if it is written in such a way that the derivative of higher order is "obtained", therefore the equation is presented in the form:

$$ x ^ {(n)} = \Phi (x ^ {n-1} (t), ..., \dot {x} (t), x (t), t)$$


> #### Separable variables

A differential equation of the first order, in normal form, is said to have separable variables if, taking a normal equation: $ \dot {x} = \Phi (x, t) $ then it can be written

$$\Phi (x, t) = f (t) \cdot g (x), $$

that is, it can be expressed as the product of functions that depend individually on $ t $ and $ x. $

**N.b.** all the differential functions of the first order, in normal and autonomous form, have separable variables.


> #### Linear

A differential equation of any order is said to be linear if it is of the form

$$a_ {n} (t) x ^ {(n} + a_ {n-1} (t) x ^ {(n-1} + ... + a_ {1} (t) \dot {x} + a_0 (t) x = f (t) $$

where $ n $ is the maximum order of derivation.
In other words, $ x $ and all its derivatives appear of first order and not within functions.



> #### Constant coefficients

A differential equation is said to have constant coefficients if the multiplicative coefficients $ a_n, a_ {n-1}, ..., a_1, a_0 $ of the equation, which multiply the derivatives are "numbers", i.e. constants, and not functions of $ t $, that is, it is of the form

$$a_ {n} x ^ {(n} + a_ {n-1} x ^ {(n-1} + ... + a_ {1} \dot {x} + a_0 x = f (t) $$



> #### Homogeneous

A differential equation is said to be homogeneous if

$$f (t) = 0 $$

**N.b.** linear + autonomous $ \neq $ homogeneous


> #### Maximum range

The maximal interval of existence is the portion of the defining set that contains the initial instant.



> #### Life time

The life time of the solution (lifespan) is the upper extreme of the maximal interval of existence.



> #### Global existence

The solution of a differential equation is said to have global existence in the future if $ t = + \infty $, i.e. if the solution exists for every  $t \geq t_0 $



> #### Blow-up / break-down

When the life time of $ T $ is $ <+ \infty $, we say that there is a blow-up if

$$\lim_{t \to {T ^ -}} x (t) = \pm \infty $$

Let's say instead that there is a break-down if there is no blow-up and that is the case

$$\lim_{t \to {T ^ -}} \dot {x} (t) = \pm \infty $$



## Classes of equations

1. First-order equations with separable variables: $$ \dot {x} = g (x) f (t) $$
2. First-order linear equations: $$ \dot {x} + a (t) x = b (t) $$
3. Equations of order $$ n $$ with constant coefficients: $$ a_{n} x ^ {(n} + a_ {n-1} x ^ {(n-1} + ... + a_ {1} \dot { x} + a_0 x = f (t) $$




**Remark:** these classes are not disjoint. \\
**N.b.** in general all homogeneous lines of the 1st order have separable variables.








## Cauchy problem
It appears as a differential equation to which the given initial conditions, which are equal in number to the order of the equation, are added as a boundary.
Let $ f (t, x (t)) $ be an assigned function, continuous with respect to both variables, we formally define the problem but of Cauchy as

$$ \begin{cases}
\dot {x} = f (t, x (t)) \\
x (t_0) = x_0
\end{cases} $$



**N.b.** to have a Cauchy problem the values of all derivatives $ n-1 $ must be assigned in the same point $ t_0 $. 







### Existence and uniqueness theorem
Taking a differential equation of order $ n $ in normal form, considered as a Cauchy problem, then\\
$$
\begin{cases}
 x ^ {(n)} = \Phi (x ^ {(n-1)}, ..., \dot {x}, x, t) \\
x (t_0) = x_0  \\
 \dot {x} (t_0) = x_1  \\
. \\
. \\
. \\
x ^ {(n-1)} (t_0) = x_n \\
\end{cases}
$$

Then it happens that:
1. If $$ \Phi $$ is **continue** then it allows <em>at least</em> one <em>local</em> solution, i.e. defined at least for the values   of $$ t_0 $$ close to $$ t_0 $$
2. If $$ \Phi $$ is <em>locally Lipschitz with respect to time</em> (differentiable) then the solution is unique.


<!-- 
## Steps to solve a separable differential equation
In general, given a first-order differential equation with separable variables, it is possible to find the general formula of the solution following a series of steps. \\
Taking an example equation $ \dot {x} = t ^ 2x ^ 3 $, then the phases are
1. **Separate** ($ x $ on the left, $ t $ on the right)\\
   
    $$\dot {x} = t ^ 2x ^ 3 &rarr; \frac{dx} {dt} = t ^ 2x ^ 3 = \frac{dx} {x ^ 3} = t ^ 2dt $$
    
2. **Integrate** \\
    $$\int \frac{dx} {x ^ 3} = \int t ^ 2 dt &rarr; - \frac{1} {2x ^ 2} = \frac{t ^ 3} {3} + C $$
    
3. **Obtain** ($ x $ as a function of $ t $) \\
    $$ - \frac{1} {2x ^ 2} = \frac{t ^ 3} {3} + C = \frac{-t ^ 3} {C} &rarr; 2x ^ 2 = \frac{3} { -t ^ 3 + C} &rarr; x ^ 2 = \frac{3} {2 (c-t ^ 3)} = \sqrt {\frac{3} {2 (c-t ^ 3)}} $$ \\
**N.b.** this formula gives the infinite solutions of the equation.

4. **Determine** (the value of $ C $ if we have a Cauchy problem) \\
    $$
    \begin{cases}
     \dot {x} = t ^ 2x ^ 3  \\
     x (0) = 1 
    \end{cases}
    $$
    
    Since $ x (0) $ is $> 0 $, I choose the positive root then
    $$x (0) = \sqrt {\frac{3} {2C}} = 1 &rarr; C = \frac{3} {2} $$
    The solution to Cauchy's problem then is: $ x (t) $ = $ \sqrt {\frac{3} {2 \big (\frac{3} {2} -t ^ 3 \big)}} = \sqrt {\frac{3} {3-2t ^ 3}} $
    
    <li> **Check** ($ x $ as a function of $ t $) \\
    <ul>
        <li> You have to substitute in the equation after having derived;
        <li> To check the initial conditions just replace $ t = 0 $ \\
        $$t = 0 &rarr; x (0) = \sqrt {\frac{3} {3-2 (0) ^ 3}} = \sqrt {\frac{3} {3}} = 1 \ hspace {5px } \ text {C.V.D.} $$
    </ul>
    
    <li> **Studying the solution** ($ x $ as a function of $ t $) \\
    $$x (t) = \sqrt {\frac{3} {3-2t ^ 3}} &rarr; \exists &harr; 3-2t ^ 3> 0 &harr; 2t ^ 3 <3 &harr; t <\sqrt [ 3] {\frac{3} {2}} $$ \\
    exists in a neighborhood of $ t_0 $ by the existence and uniqueness theorem.

**N.b.** taken $ \dot {x} = f (t) g (x) $ if $ \exists \ bar {x} \ in \mathbf {R}: g (\ bar {x}) = 0 &rarr; x (t) = \ bar {x} $ is a solution of the differential equation.




## I order linear equations (variable coefficients)
A first-order linear equation with variable coefficients is presented in the form
$$\dot {x} + a (t) x = b (t) $$
for R to isolate it we use the **integral factor method**. \\
Let $ A (t) $ be a primitive of $ a (t) &rarr; A '(t) = a (t) $, then
<ol>
    <li> I multiply left and right by $ e ^ {A (t)} $ (called an integral factor)
    $$\dot {x} e ^ {A (t)} + a (t) e ^ {A (t)} x = b (t) e ^ {A (t)} $$
    at this point i got the derivative then
    $$\big (x e ^ {A (t)} \big) '= b (t) e ^ {A (t)} $$
    
    
    <li> Healthy left and right
    $$x (t) e ^ {A (t)} = \int b (t) e ^ {A (t)} dt + C $$
    
    
    <li> Multiply by $ e ^ {- A (t)} $
    $$x (t) = e ^ {- A (t)} \big \ {C + \int b (t) e ^ {A (t)} dt \big \} $$
    This is the **general solution** of the first order equations.
</ol>
**Remark:** unlike the Cauchy problem, a linear equation always exists "as long as it can", ie as long as the coefficients are defined; in particular, the maximal interval of existence does not depend on the initial data but only on the coefficients.



## First order linear equations with homogeneous constant coefficients
Taken a differential equation of the form $ a_ {n} x ^ {(n} + a_ {n-1} x ^ {(n-1} + ... + a_ {1} \dot {x} + a_0 x = f (t) $, this is said to be homogeneous $ &harr; f (t) = 0 $. \\
In this case the maximal interval of existence of the solution is the same as $ f (t) $, so in the homogeneous case it is all $ \mathbf {R} $.

> #### Theorem

The set of solutions of a **homogeneous linear** differential equation of order $ n $ (even with non-constant coefficients) is a vector space of dimension $ n $. \\
Given a base $ x_1 (t), ..., x_n (t) $ of this space, all the elements are written in the form
$$x (t) = C_1 x_1 (t) + C_2 x_2 (t) + ... + C_n x_n (t) $$

*In summary:* if I can determine a basis, I know the general solution, that is, I can describe the set of infinite solutions. \\




In the case of equations with constant coefficients, there is a procedure that allows you to determine a basis, provided you know how to find the roots of a polynomial of degree $ n $. \\
Taken an equation
$ a \ddot {x} + b \dot {x} + cx = 0 $
we consider the associated polynomial $ ax ^ 2 + bx + c $ and calculate its $ \Delta $
1.  **Case $ \Delta> 0 $**
    1.  a base is $ e ^ {\lambda_1 t}, e ^ {\lambda_2 \, t} $
    2.  the general solution is therefore: $ x (t) = C_1 \, e ^ {\lambda t} + C_2 \, e ^ {\lambda_2 \, t} $
2.  **Case $ \Delta = 0 $**
    1.  a real root $ \lambda $ of multiplicity $ 2 $; a base is $ e ^ {\lambda t}, t e ^ {\lambda \, t} $
    2.  the general solution is therefore: $ x (t) = C_1 \, e ^ {\lambda t} + C_2 \, \, t \, e ^ {\lambda \, t} $
3.  **Case $ \Delta <0 $**
   1. two complex and conjugate roots: $ \ alpha \pm i \, \ beta, \; \; (\ alpha, \ beta) \ in \mathbf {R} $
   2. the general solution is therefore: $ x (t) = C_1 \, e ^ {\ alpha t} \cos {(\ beta t)} + C_2 \, e ^ {\ alpha t} \sin {( \ beta t)} $
    </ol>
</ul>






### Equations of order $ n $
Taking an equation of order $ n $: $ a_n x ^ {(n)} + ... + a_1 \ddot {x} + a_0 x = 0 $, then
1. I consider the associated polynomial: $ \ alpha x ^ n + ... + \ beta x + \ gamma = 0 $ \\
    This on complexes has $ n $ roots (counted with multiplicity)
    1. **Real roots**
        1. Each root $ \lambda \ in \mathbf {R} $ of multiplicity $ 1 $ yields $ e ^ {\lambda t} $
        2. Each root $ \lambda \ in \mathbf {R} $ of multiplicity $ k $ yields $ e ^ {\lambda t}, t e ^ {\lambda t}, ..., t ^ {k-1} and ^ {\lambda t} $
    2. **Complex roots**

2. each pair $ \ alpha \pm i \, \ beta $ of complex and conjugate roots of multiplicity 1 yields $ e ^ {\ alpha t} \cos {(\ beta t)}, \, e ^ {\ alpha t } \sin {(\ beta t)} $
3. each pair $ \ alpha \pm i \, \ beta $ of complex and conjugate roots of multiplicity k yields $ 2k $ elements of the basis $ e ^ {\ alpha t} \cos {(\ beta t)}, \, e ^ {\ alpha t} \sin {(\ beta t)}, ..., t ^ {k-1} e ^ {\ alpha t} \cos {(\ beta t)}, \, t ^ { k-1} and ^ {\ alpha t} \sin {(\ beta t)} $

### Inhomogeneous equations

> #### Theorem

The general solution of a non-homogeneous equation is of the form:
$$x (t) = c_1 x_1 (t) + ... + c_n x_n (t) + \ bar {x} (t) $$


where the terms $ n-th $ are the general solution of the homogeneous equation and the $ \ bar {x} (t) $ represents the solution of the particular. \\
*In summary:* if I know a solution **any** $ \ bar {x} (t) $, I know them all.
There are two methods to find any solution of the non-homogeneous equation:
- method of similarity;
- method of variation of constants.





### General diagram
Taken a differential equation in the form
$$ a_2 \frac{d ^ x} {dt ^ 2} + a_1 \frac{dx} {dt} + a_0 x = f (t) $$
It is possible to generalize some particular solutions of the equations according to this scheme:

1. if $ f (t) = P_n (t) &rarr; x_P = t ^ m A_n (t) $
- if $ f (t) = P_n (t) \, e ^ {\lambda t} &rarr; x_P = t ^ m A_n (t) \, e ^ {\lambda t} $
- if $ f (t) = P_n (t) \, e ^ {\lambda t} \, \cos {(k \, t)} &rarr; x_P = t ^ m A_n (t) \, e ^ { \lambda t} \big [A_n (t) \cos {(k \, t)} + B_n (t) \sin {(k \, t)} \big] $
-  if $ f (t) = P_n (t) \, e ^ {\lambda t} \, \sin {(k \, t)} &rarr; x_P = t ^ m A_n (t) \, e ^ { \lambda t} \big [A_n (t) \cos {(k \, t)} + B_n (t) \sin {(k \, t)} \big] $


where $$ A_n (t), B_n (t), P_n (t) $$ are polynomials of the type $$ a_0 + a_1 \, t + a_2 \, t ^ 2 + ... + a_n \, t ^ n $$ and $ m $ is the smallest integer between $ 0.1 $ and $ 2 $ which ensures that no term is a solution of the corresponding homogeneous equation 

$$ a_2 \frac{d ^ x} {dt ^ 2} + a_1 \frac{dx} { dt} + a_0 x = 0 $$



-->



<object data="../assets/documents/analisi2_equazioni_differenziali.pdf" type="application/pdf" width="100%" height="940px">
