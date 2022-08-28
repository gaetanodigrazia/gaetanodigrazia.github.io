---
layout: post
title:  "[Image processing] - Mathematical background"
author: gaetano
categories: [ images, processing, algorithm, computer, vision, math, functions]
image: assets/images/computer_vision.png
hidden: true
---
To better understand the next article that I will post, the second part named "Intro to computer vision", I think that it's important to introduce some mathematical concepts that we will encounter in the article.

# Analysis
## Derivative
#### Rapporto incrementale
Il concetto di derivata presuppone di avere la conoscenza di rapporto incrementale, il rapporto incrementale, in modo grossolano, è un numero che misura "quanto velocemente" la funzione cresce o decresce al variare della coordinata indipendente attorno a un dato punto.

Considerando una funzione reale nella variabile reale $$x$$, ossia $f: \mathbf{R}\to \mathbf{R}, y = f(x)$, definiamo il rapporto incrementale della funzione $f$ nel punto $x_0$ il valore

$\frac{\Delta y}{\Delta x} = \frac{\Delta f}{\Delta x} := \frac{f(x_0 + h)- f(x_0)}{h}$

dove la quantità $\Delta y = \Delta f:=f(x_0 + h)- f(x_0)$ è definita *incremento della funzione (o della variabile dipendente* $y$, ricordando che $y = f(x)$ e quindi anche $f(x_0) = y_0$) mentre la quantità $\Delta x_0 :=(x_0 + h) - x_0 = h$ è definita *incremento della variabile indipendente*

#### Derivative
### Gradient
### Partial derivative
### Chain rule

## Fourier transform
## Deconvoluzione di Wiener


## Functions: minimum and maximum
### Local minimum
### Global minimum
### Saddle point
### Sigmoid and it's derivative


# Geometry
## Vector
Un vettore è la classe di equivalenza di tutti i segmenti che hanno gli stessi moduli direzione e verso, ovvero tutti i segmenti equipollenti ad un dato segmento che quindi saranno paralleli, con modulo uguale e stesso verso.\\
Si noti, inoltre, che il vettore nullo, ovvero la classe d'equivalenza di tutti i segmenti di lunghezza pari a 0 (segmenti degeneri in un punto), rappresenta l'elemento neutro rispetto alla somma tra vettori.\\
Esiste anche, per ogni vettore, il vettore opposto, ovvero la classe di equivalenza costituita da tutti i segmenti con uguale direzione e modulo ma verso opposto.\\

Per quanto riguarda le proprietà, l'insieme di tutti i possibili vettori è un gruppo rispetto alla somma tra vettori, inoltre è possibile verificare che vale anche la proprietà \textit{commutativa} e che quindi l'insieme dei vettori è un \textbf{gruppo abeliano} rispetto alla somma.\\
Due vettori qualsiasi sono \textbf{sempre complanari} tra loro in quanto sono rappresentanti di due classi di equivalenze, ciò perché ad ogni classe di equivalenza apparterrà sempre almeno un segmento complanare con almeno un altro segmento che appartiene ad un'altra classe di equivalenza.\\
Si definisce anche il \textit{prodotto} tra un vettore e uno scalare, il cui risultato sarà un vettore, ossia
\[\lambda\;\overline{v} = \overline{w}\]
Il vettore risultante $\overline{w}$ avrà: 
- la stessa direzione di $\overline{v}$;
- il verso dato dal segno di $\lambda$, infatti se $\lambda$ è positivo allora $\overline{w}$ ha lo stesso verso di $\overline{v}$, altrimenti avrà verso opposto;
- modulo dato dal prodotto tra il valore assoluto di $\lambda$ per il modulo di $\overline{v}$, $\abs{\lambda}\overline{v} = \overline{w}$.
Bisogna poi prestare grande attenzione alla differenza tra segmento e vettore, infatti un vettore è una classe di equivalenza costituita da infiniti segmenti che ha come rappresentante uno qualsiasi di esso.\\
Si deve poi fare la distinzione tra $\emptyset$ e il vettore nullo $\overline{0}$, infatti mentre il primo è uno scalare (un numero), il vettore nullo è un vettore a tutti gli effetti ed è complanare a tutti gli altri vettori.

Please note that sometimes the modulus of the vector is also called magnitude.

## Norma
La norma di un vettore $\vec{u} = (u_1, u_2,..., u_n) \in \mathbf{R}^n$ è un'applicazione che ad un vettore associa un numero reale
\[\norm{\cdot} : \mathbf{R}^n \rightarrow \mathbf{R}\;|\;f:\mathbf{R}^n \rightarrow \mathbf{R}^{+} \cup \{0\}\]
cosè definito:
\[\norm{\vec{u}} = \sqrt{u_1^2 + u_2^2+...+u_n^2}\]
 in sintesi, altro non è che la radice quadrata della somma dei quadrati delle componenti del vettore.
 
### Proprietà norma
- $f(x) \geq 0\;\forall x \in \mathbf{R}^n\;e\; f(x) = 0 \Leftrightarrow x = 0$;
- $f(\alpha\cdot x) = \abs{\alpha}\cdot f(x)\;,\; \forall\alpha\in\mathbf{R}\;,\;\forall x\in\mathbf{R}^n$;
- disuguaglianza triangolare: $f(x+y) \leq f(x) + f(y)\;,\;\forall x,y \in \mathbf{R}^n\;$.
 

## Scalar product (dot product)
Siano $v_1$ e $v_2$ due vettori.\\
Il prodotto scalare tra $v_1$ e $v_2$ è uno scalare dato dal prodotto tra i moduli dei due vettori e il coseno dell'angolo tra essi compreso, ossia
$$v_1 \cdot v_2 = \lVert v_1 \rVert\cdot \lVert v_2\rVert \cdot \cos \hat{v_1 v_2}$$\\
Il prodotto scalare può anche essere definito come un'applicazione $f:V\times V \to \mathbb{C}$.\\
Inoltre, l'operazione di prodotto scalare gode delle seguenti proprietà
- commutativa: $v_1 \cdot v_2 = v_2 \cdot v_1$;
- distributiva rispetto alla somma: $(v_1 + v_2)\cdot v_3 = v_1 \cdot v_3 + v_2 \cdot v_3$;
- associativa rispetto al prodotto per uno scalare: $(\lambda v_1)\cdot v_2 = v_1 \cdot (\lambda v_2) = \lambda(v_1\cdot v_2)$;
- positività: $v\cdot v = v^2 = \lVert v\rVert^2 \geq 0 \land  v\cdot v = 0 \Leftrightarrow v = 0$

<a title="No machine-readable author provided. Mazin07 assumed (based on copyright claims)., Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Dot_Product.svg"><img width="256" alt="Dot Product" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dot_Product.svg/256px-Dot_Product.svg.png"></a>

So, in the figure shown before we are making the scalar product between the vectors $A$ and $B$.
## Vector product (cross product)
<a title="User:Acdx, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Cross_product_vector.svg"><img width="256" alt="Cross product vector" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cross_product_vector.svg/256px-Cross_product_vector.svg.png"></a>
In mathematics, the cross product or vector product (occasionally directed area product, to emphasize its geometric significance) is a binary operation on two vectors in a three-dimensional oriented Euclidean vector space and is denoted by the symbol $\times$.\\
Siano $v_1$ e $v_2$ due vettori linearmente indipendenti.\\
Il prodotto vettoriale tra $v_1$ e $v_2$, detto anche prodotto esterno, è un vettore il cui modulo è dato dal prodotto dei moduli dei vettori $v_1$ e $v_2$ per il seno dell'angolo tra essi compreso, che ha direzione perpendicolare al piano che i due versi formano e verso tale da generare una terna tale che sia una base per lo spazio $v^3$ equiversa alla base ortonormale ${i,j,k}$-\\
$$v_1 \land v_2 = v\;\;ovvero\;\;\lVert v\rVert= \lVert v_1\rVert\lVert v_2\rVert \cdot \sin \hat{v_1 v_2}$$\\
Siano $v_1$ e $v_2$ due vettori e sia $\alpha$ uno scalare, allora valgono le seguenti proprietà:
- anticommutativa: $v_1 \land v_2 =-( v_2 \land v_1$);
- distributiva rispetto alla somma: $(v_1 + v_2)\cdot v_3 = v_1 \cdot v_3 + v_2 \cdot v_3$;
- associativa rispetto al prodotto per uno scalare: $(\alpha v_1)\land v_2 = v_1 \land (\alpha v_2) = \alpha(v_1\land v_2)$;
- distributiva rispetto alla somma tra vettori:
    $(v_1 + v_2) \land v_3 = v_1 \land v_3 + v_2 \land v_3$\\
     $v_3 \land(v_1 + v_2) = v_3 \land v_1 + v_3 \land v_2$

<a title="User:Acdx, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Cross_product_parallelogram.svg"><img width="256" alt="Cross product parallelogram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cross_product_parallelogram.svg/256px-Cross_product_parallelogram.svg.png"></a>

## Piano contenente due rette
In geometria è possibile trovare l'equazione di un piano contenente due rette $r_1$ ed $r_2$ ma questo cambia (ed esiste) a seconda della posizione reciproca che assumono le due rette nello spazio, nella fattispecie:
- se le due rette sono sghembe non esiste alcun piano che le contiene;
- se le due rette sono parallele e coincidenti, vi sono infiniti piani che le contengono (e in particolare sono tutti i piani del fascio che ha come sostegno una delle due rette);
- se le due rette sono parallele e distinte o incidenti esiste uno e uno solo piano che le contiene.
Questo argomento non viene approfondito in quanto esistono diversi siti che lo fanno in modo approfondito e con molti esempi: questa nozione è importante per avere contezza del fatto che è possibile calcolare l'iperpiano passante per due neuroni (che sono due rette ovvero due vettori nello spazio).


Now navigate to: [localhost:9000](http://localhost:9000){:target="_blank"}
<div style="text-align:center" width="auto" height="50%" markdown="1">
![title](../assets/images/airflow_minio/im_1.jpg)
</div>
