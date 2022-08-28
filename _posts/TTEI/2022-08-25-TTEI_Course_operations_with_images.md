---
layout: post
title:  "[Image processing course] - Part 3/3: Matlab for image processing"
author: gaetano
categories: [ matlab, images, processing, algorithm, matrix, vector, scripts]
image: assets/images/computer_vision.png
hidden: true
---

# Up-sampling e down-sampling

## Interpolazione delle immagini
È principalmente utilizzata per operazioni di resizing come l’up-sampling in caso di zooming-in o il down sampling in caso di shrinking (o zooming-out). L’interpolazione è il processo di utilizzo i dati conosciuti per stimare valori in posizioni sconosciute e consiste di due step
\begin{itemize}
    \item Creazione di nuove posizioni dei pixels tramite la media di una o più trasformazioni geometriche
    \item Assegnazione dei nuovi livelli di grigio ai nuovi pixels generati
\end{itemize}
Il modo più semplice di effettuare l’interpolazione di un’immagine è la nearest neighbor interpolation, in cui si crea una griglia immaginaria con la stessa spaziatura dell’immagine originale, effettuare lo shrink e di assegnare ai pixels generati nelle nuove posizioni il valore del pixel a loro più vicino.\\
Questo metodo tende a produrre artefatti come la checkerboards effect e la distorsione dei bordi.\\
La \textbf{pixel replication} è utile quando il fattore di zooming è un numero intero e prevede una riduzione della 
risoluzione spaziale mantenendo le dimensioni dell’immagine e prevede:

\begin{itemize}
    \item La costruzione di un’\textbf{immagine intermedia} composta dalla duplicazioni dii ogni colonna dell’immagine originale
    \item La costruzione di un’\textbf{immagine finale} composta dalla duplicazione di ogni riga dell’immagine 
intermedia.
\end{itemize}
L’\textbf{interpolazione bilineare} o di primo ordine è un approccio migliore che utilizza i 4 pixels più vicini per la 
stima del valore di intensità della nuova posizione. Consiste nella determinazione del valore di intensità 
$f(x, y)$ un punto arbitrario interno ad un quadrato di lato unitario ai cui vertici l’intensità è nota. Per non 
rischiare di sovra-determinare il problema, si può utilizzare l’equazione bilineare che definisce un 
paraboloide iperbolico: $f(x, y) = ax+by+cxy+d$ coefficienti devono essere determinati in 
modo che $f(x, y)$ disfi i valori noti dei quattro angoli.
\begin{multicols}{2}

\columnbreak
\begin{itemize}
    \item Partendo dalla proporzione di interpolazione: 
    \item Si procede ottenendo i valori di f(0, y e f(1, y):
    \item Interpolando i due valori si ottiene così:
    \item  Sostituendo e raggruppando si ottengono i 
valori dei coefficienti dell’equazione bilineare:
\end{itemize}
\includegraphics[scale=0.45]{img/cap3/cap3_int_imm.jpg}
\end{multicols}

Questo metodo di interpolazione, pur dando risultati migliori, introduce un certo grado di \textbf{blurring} all’interno dell’immagine, generando nell’immagine di output livelli di grigio inesistenti nell’immagine di input, comportando:
\begin{itemize}
    \item Perdita di dettagli molto fini in caso di \textbf{magnificazione}.
    \item Perdita della continuità delle derivate in regioni contigue (superfici risultanti hanno stessi valori su 
confini ma pendenze differenti).
\end{itemize}
Può dunque essere necessario ricorrere a metodi di interpolazioni di ordine superiore nei quali la procedura di fitting usa funzioni più complesse.\\
È inoltre possibile utilizzare più di 4 vicini nel processo di interpolazione, utilizzando superfici più complesse per il fitting dei punti, ottenendo così blurring meno accentuato dell’immagine risultante.\\
L’\textbf{interpolazione bicubica} fa uso dei 16 pixel più vicini, rappresentando è il metodo più utilizzato.

# Registrazione di immagini
È il processo che permette di allineare due o più immagini della stessa scena, nato dalla necessità di 
compensare le distorsioni geometriche causate dalle differenti condizioni di acquisizione.
Supponendo di dover registrare un’immagine di input rispetto ad una seconda immagine detta di 
riferimento. Entrambe le immagini sono note ma non è conosciuta la trasformazione geometrica necessaria 
per passare dall’immagine di input a quella di riferimento. È dunque necessario stimare la funzione di 
trasformazione determinando i valori dei parametri di un modello adottato per rappresentare la 
distorsione geometrica. A tal fine vengono utilizzati i punti di controllo, le cui posizioni sono note in 
entrambe le immagini, determinabili in vari modi.
In molte applicazioni, sono già i dispositivi di acquisizione ad introdurre degli artefatti controllati che 
producono un insieme di punti noti nelle immagini acquisite. La selezione del numero di punti di controllo e 
la complessità del modello da adottare dipendono dalla severità della distorsione geometrica. 
Supponendo di avere 4 punti noti in ognuna delle due immagini per cui si possono scrivere otto equazioni 
che permettono di calcolare gli otto coefficienti incogniti del modello bilineare, all’interno del quale $(v, w)$
e $(x, y)$ sono le coordinate dei punti di controllo dell’immagine di input e dell’immagine di riferimento.
\[x = c_1 v + c_2 w + c_3 vw + c_4\]
\vspace{-10px}
\[y = c_5 v + c_6 w + c_7 vw + c_8\]
Una volta ottenuti i coefficienti, le due equazioni permettono di registrare le due immagini procedendo 
pixel per pixel. La qualità dell’allineamento ottenuto dipende dalla correttezza della scelta dei punti di 
controllo.
Qualora quattro punti non fossero sufficienti per una registrazione accettabile, è possibile utilizzarne un 
numero maggiore e trattare i quadrilateri formati da gruppi di 4 punti come sub-immagini. Ad ogni sub-immagine può essere applicato singolarmente il modello bilineare.

## Rotazione di immagini
## Trasformazioni geometriche
\subsection{Trasformazioni spaziali geometriche}
Questo tipo di trasformazioni modifica le relazioni spaziali tra i pixel dell’immagine di ingresso, ottenendo 
un risultato analogo alla deformazione di un’immagine stampata su foglio di plastica deformato. Consistono 
di due operazioni distinte:
\begin{itemize}
    \item trasformazione spaziale delle coordinate dei pixels;
    \item interpolazione delle intensità che assegna i valori di grigio ai pixels trasformati.
\end{itemize}
La generica trasformazione spaziale di coordinate può essere espressa come $(x, y) = T\{(v, w)\}$
ma può essere convenientemente rappresentata in coordinate omogenee, detta anche forma matriciale, con il 
vantaggio di poter concatenare più trasformazioni consecutive attraverso un’unica matrice di 
trasformazione data dal prodotto eseguito nell’ordine delle singole matrici di trasformazioni.\\
Una volta individuate le nuove posizioni, calcolare i valori dei nuovi pixel applicando l’algoritmo di 
interpolazione secondo uno dei due modi:
\begin{itemize}
    \item \textbf{mapping diretto o pixel carryover}: prevede la scansione dell’immagine originale, calcolando per 
ogni suo pixel il calcolo della nuova posizione mediante l’applicazione diretta dell’equazione di 
trasformazione delle coordinate.
Poiché l’immagine di uscita potrebbe contenere posizioni nelle quali nessun pixel di ingresso risulta 
trasferito, può essere conveniente distribuire il valore di ogni pixel di input sui quattro pixels più 
vicini dell’immagine di output. In questo modo ogni pixel accumula più frazioni derivanti dai 
differenti pixel in ingresso, risolvendo il problema dell’individuazione di un unico valore di output.
Tutta via questo metodo può comportare calcoli superflui qualora le posizioni finali dei pixels 
dovessero cadere fuori dall’immagine di output oltre a richiedere la fine del processo per ottenere 
un’immagine di output pronta;
    \item \textbf{mapping inverso}: in corrispondenza ad ogni posizione dell’immagine di output viene determinata 
la corrispondente nell’immagine di input utilizzando la trasformazione inversa $(v, w) = T^{-1}\{(x, y)\}$
\end{itemize}
## Similarità e adiacenza
\subsection{Relazioni tra pixel}
Dato un pixel P di coordinate $(x, y)$ possiamo definire le seguenti relazioni: 4-vicini orizzontali di P ($N_4(P)$), 4-vicini diagonali di P ($N_D(P)$) e 8-vicini di P $N_8(P)$.\\
Nella fattispecie:
\begin{itemize}
    \item $N_4(P)$ sono i pixel di coordinate:
    \begin{itemize}
        \item (x+1, y); (x, y+1);
        \item (x-1, y); (x, y-1);
    \end{itemize}
    \item $N_D(P)$ sono i pixel di coordinate:
    \begin{itemize}
        \item (x+1, y+1); (x+1, y-1);
        \item (x-1, y-1); (x-1, y+1);
    \end{itemize}
\end{itemize}
Infine, l’insieme degli 8-vicini di P $N_8(P)$ è dato dall’unione dei suoi 4-vicini orizzontali e diagonali.

\defbox{Due pixel si dicono \textbf{connessi} o \textbf{adiacenti} se, oltre ad essere tra loro in una certa relazione di contiguità spaziale, i loro livelli di grigio soddisfano uno specifico criterio di similarità.\\}
Tale criterio di similarità consiste nell'appartenenza di entrambi i valori ad uno specifico intervallo V.\\
In base alla relazione di contiguità adoperata si definiscono i seguenti tipi di adiacenza:
\defbox{\textbf{4-adiacenza}. Due pixel P e Q con valori in V si 
dicono 4-adiacenti se Q 
appartiene al set $N_4(P)$}

\defbox{\textbf{8-adiacenza}.Due pixel P e Q con valori in V si 
dicono 8-adiacenti se Q 
appartiene al set $N_8(P)$}

\defbox{\textbf{m-adiacenza}. Due pixel P e Q con valori in V si 
dicono m-adiacenti se:
\begin{itemize}
    \item Q è nel set $N_4(P)$;
    \item Q è nel set $N_D(P)$ e 
    \item risultano vuoti gli insiemi 
$N_4(P)$ e $N_4(Q)$
\end{itemize}}


Un \textbf{percorso} o \textbf{cammino digitale} dal pixel P di coordinate $(x, y)$ al pixel $Q$ di coordinate $(s, t)$ è una sequenza di pixel distinti di coordinate: $(x_0, y_0),(x_1, y_1),..., (x_n, y_n)$  dove $(x_0, y_0) = (x, y)$ e $(x_n, y_n) = (s, t)$ e, inoltre, $(x_i, y_i)$ è adiacente a $(x_{i-1}, y_{i-1})$ quando $1\leq i \leq n$ in cui:
\begin{itemize}
    \item $n$ è la lunghezza del cammino;
    \item se ($x_0, y_0) = (x_n, y_n)$ il cammino è \textbf{chiuso};
    \item la definizione del cammino dipende dal \textbf{tipo di connettività operata}.
\end{itemize}
Inoltre
\defbox{Dati due pixel P e Q di un subset S dell'immagine, \textbf{P} è \textbf{connesso} a Q in S se esiste un cammino tra P e Q interamente costruito da pixel in S}

Per ogni pixel P di un subset S, l’insieme di pixel connessi a P costituisce una componente connessa di S. \\
Nel caso in cui si abbia solo una componente connessa, S viene definito set connesso. Due subset $S_1$ e $S_2$ di un’immagine sono adiacenti se almeno un pixel di $S_1$ è connesso ad almeno un pixel di $S_2$.\\
Un sottoinsieme R di pixel di un’immagine costituisce una regione dell’immagine se è un set connesso.\\
Due regioni $R_1$ e $R_2$ sono adiacenti se la loro unione forma un set connesso, altrimenti sono disgiunte.\\
Data un’immagine contenente K regioni disgiunte, si distinguono:
\begin{itemize}
    \item Foreground - Ru come l’unione delle K regioni disgiunte;
    \item Background – (Ru)’ come il complemento del di Ru;
    \item il contorno interno di una regione R è il set di pixels del foreground che sono adiacenti (secondo 
uno dei metodi conosciuti) a punti del background di R
\end{itemize}
Se una regione R rappresenta un’intera immagine non esisteranno vicini, dunque il suo contorno è definito 
come il set dei pixel della prima e ultima riga e della prima e ultima colonna.
Se una regione R ha dei pixel coincidenti con parte del bordo dell’immagine, i pixel del bordo sono 
implicitamente inclusi nel contorno della regione.\\
Il contorno di una regione finita è un cammino chiuso ed è una caratteristica globale della regione.
Gli edge sono basati sulla misura della discontinuità del livello di grigio nel punto considerato e 
rappresentano caratteristiche locali della regione.
È possibile collegare i punti di edge così da formare segmenti di edge che, se a loro volta vengono collegati 
tra loro, possono comporre i contorni stessi.\\
Dati i pixels $P(x, y)$, $Q(s, t)$ e $Z(u, v)$, la funzione $D$ rappresenta una \textbf{metrica} o \textbf{funzione distanza} se
\begin{itemize}
    \item $D(P, Q) \geq 0$ e $D(P, Q) = 0$ se $P = Q$;
    \item $D(P, Q) = D(Q, P)$; 
    \item $D(P, Z) \leq D(P, Q) + D(Q, Z)$.
\end{itemize}

Data la definizione di distanza euclidea, i pixel a distanza da $(x, y)$ minore uguale di una quantità r sono 
contenuti in un disco di raggio r con centro in $(x, y)$.\\
Definita la distanza $D_4$ tra P e Q come: $D_4(P, Q) = \sqrt{x-s} + \sqrt{y-y}$ possiamo dire che i pixel a distanza 
da ($x, y$) minore o uguale di una quantità $r$ costituiscono un \textbf{diamante} centrato in ($x, y$).

Definita la distanza $D_8$ tra P e Q come: $D_8(P, Q) = max(\sqrt{x-s}, \sqrt{y-t})$ possiamo dire che i pixel a distanza 
da ($x, y$) minore o uguale di una quantità $r$ costituiscono un \textbf{quadrato} centrato in ($x, y$).

Questi tipi di metriche non dipendono dall’esistenza di un eventuale cammino connesso tra di essi. 
Tuttavia:
\begin{itemize}
    \item la distanza $D_4$ tra due punti coincide con la lunghezza del 4-cammino più breve tra di essi;
    \item la distanza $D_8$ tra due punti coincide con la lunghezza dell’8-cammino più breve tra di essi.
\end{itemize}
Nel caso della m-connettività, la lunghezza del cammino tra due pixel dipende dal valore dei pixel lungo il 
cammino e dal valore dei loro vicini. 

# Trasformazioni di intensità
Cominciamo col dare la definizione di dominio spaziale.\\
\defbox{Il \textbf{dominio spaziale} o \textbf{dominio dei pixels} è il piano che contiene l'immagine.}
I processi a cui viene sottoposta un'immagine possono essere espressi come
\[g(x, y) = T\big[f(x, y)\big]\]
in cui 
\begin{itemize}
    \item $f(x, y)$ rappresenta l'immagine di input;
    \item $g(x, y)$ rappresenta l'immagine di output;
    \item $T$ rappresenta l'operatore su $f$ definito sui vicini del punto $(x, y)$
\end{itemize}
L'operatore $T$ può essere utilizzata anche in immagini a colori applicando la trasformazione per ogni banda di colori del pixel.\\

Il numero dei vicini di un pixel o l'\textbf{intorno} di ($x, y$) definisce il tipo di processo utilizzato, infatti
\begin{itemize}
    \item \textbf{processo puntuale}. Si ha un processo puntuale quando l'intorno di un pixel coincide con il pixel stesso, in questo caso la trasformazione $T$ prende il nome di \textbf{trasformazione di intensità};
    \item \textbf{processo locale}. Si ha un processo locale quando l'intorno rappresenta una piccola regione attorno al pixel;
    \item \textbf{processo globale}. Si ha un processo globale quando l'intorno di un pixel coincide con l'intera immagine.\\
    In questo caso, il centro dell'intorno è chiamato \textbf{origine dell'intorno} e l'operatore $T$ viene applicato ai pixel appartenenti al suo intorno per generare un output: questa operazione vine volta \textbf{pixel-by-pixel}.
\end{itemize}

Le tecniche utilizzate sul dominio spaziale, chiamate anche \textbf{filtri spaziali}, sono generalmente più efficaci a livello computazionale rispetto agli altri approcci e vengono sfruttate principalmente per i processi di \textbf{miglioramento dell'immagine}.\\

Diamo dunque la seguente
\defbox{\textbf{Miglioramento delle immagini.} Il miglioramento delle immagini è il processo di manipolazione delle immagini che permette di ottenere un risultato più adatto per una 
specifica applicazione. Poiché non esiste uno standard generale per la qualità dell'immagine, questo processo è solitamente \textbf{specifico} o comunque problem oriented.}

Le \textbf{manipolazioni in scala di grigio} sono \textbf{elaborazioni omogenee} che modificano soltanto i valori dei pixel in ingresso; quando, invece, il risultato di un'elaborazione dipende \textit{anche} dalla posizione del pixel in ingresso, il processo viene definito \textbf{non-omogeneo}.\\
I processi puntali omogenei possono essere rappresentati da trasformazione dei livelli di grigio che possono essere espresse come:
\[s=T(r)\]
in cui $r$ ed $s$ sono variabili discrete che rappresentano rispettivamente l'\textbf{intensità in ingresso} e \textbf{in uscita} del pixel in posizione ($x, y$).\\

I possibili valori di queste variabili sono rappresentabili tramite una \textbf{lookup table} contenente in posizione $k$ i valori di $s_k$ corrispondenti ai valori $r_k$ nella trasformazione. In questo modo, una volta realizzata la lookup table, l’operazione di mapping avrà bisogno di un accesso diretto alla tabella, con un tempo di esecuzione che sarà indipendente dall’onere computazionale della trasformazione.\\
In caso di una trasformazione con questa forma, l’effetto della sua applicazione sarà 
quello di generare un maggiore contrasto all’interno dell’immagine (c\textbf{ontrast stretching}) in quanto:
\begin{itemize}
    \item livelli di intensità inferiori a \textbf{\textit{m}} verranno abbassati;
    \item livelli di intensità superiori a \textbf{\textit{m}} verranno alzati.
\end{itemize}
Solitamente, le operazioni puntuali comportano una \textbf{perdita di informazioni} in quanto sono \textbf{non invertibili}.\\
Un esempio di trasformazione puntuale invertibile, invece, è il \textbf{negativo} di un'immagine che risulta essere particolarmente utile per il miglioramento dei dettagli bianchi o grigi immersi in regioni scuri.\\
I dispositivi digitali hanno un minore capacità di discriminazione e un range dinamico più ristretto rispetto all’occhio umano; può dunque essere necessario, a volte, comprimere la scala dei grigi utilizzati per permettere ai dispositivi utilizzati di rappresentare l’immagine in questione.\\

\subsection{Trasformazioni logaritmiche}
Una \textbf{trasformazione logaritmica}
\[s = c\cdot log(1+r)\]
permette di mappare un range ristretto di valori bassi in uno di maggiore ampiezza caratterizzato da valori più alti (dunque maggiormente apprezzabili dall'occhio umano).\\
Risulta importante la selezione del valore della costante \textbf{\textit{c}} che permette di scalare i valori di output in range opportuno.\\
È possibile fare il discorso opposto per le \textbf{trasformazioni logaritmiche inverse} che effettuano la compressione del range dinamico, rendendo dunque possibile la rappresentazione su display limitati di immagini caratterizzate da ampie variazioni nel valore dei pixel, mantenendo comunque un elevato livello di dettaglio.\\
La lookup table risulta molto utile per trasformazioni logaritmiche in quanto le compressioni logaritmiche necessitano di un elevato numero di iterazioni su immagini di dimensioni elevate poiché richiedono:
\begin{enumerate}
    \item una conversione da intero a float;
    \item il calcolo del logaritmo;
    \item una moltiplicazione per la costante $c$;
    \item una conversione da float a intero.
\end{enumerate}
In questo modo è possibile ridurre la computazione ad una sostituzione pixel per pixel dei valori originali di intensità con il contenuto della lookup table indicizzato dal valore dell'intensità in ingresso.\\
Un'altra operazione in grado di aumentare o comprimere i livelli di intensità ma in modo più versatile è la \textbf{power-law transformation}
\[s = cr^\gamma\]
in cui $c$ e $\gamma$ sono costanti positive e la $c$ ha ancora il ruolo del fattore scalare dei valori iniziali dell'intensità.\\
Per quanto riguarda la $y$, invece, si ha che:
\begin{itemize}
    \item per valori $\gamma<1$ un ristretto range di valori scuri viene mappato in un range più ampio;
    \item per valori $\gamma>1$ ampi range di valori chiari vengono mappati in un range più ristretto.
\end{itemize}
Questa funzione permette di ottenere trasformazioni molto diverse modificando il solo valore di $y$; il processo di correzione che strutta la trasformazione power-law vengono chiamate \textbf{gamma correction}.
Le correzioni gamma sono utilizzare per l'acquisizione e il rendering che mostrano spesso risposte dai comportamenti non lineari, variabili di dispositivo in dispositivo.\\
Utilizzando valori di $\Gamma > 1$ è inoltre possibile modificare la luminosità 
e il contrasto delle immagini.\\

\subsection{Funzione lineare a pezzi}
Un'altra trasformazione in grado di modificare il contrasto di un'immagine è quella basata sulla \textbf{funzione lineare a pezzi} che ha il vantaggio che la forma della trasformazione può essere arbitrariamente complessa ma ha lo svantaggio di richiedere un certo input da parte dell'utilizzatore.\\
La più semplice funzione lineare a pezzi è la trasformazione di stretching del contrasto, utilizzata per espandere il range di intensità di un immagine. La 
posizione di un certo numero di punti di controllo viene usata per gestire la 
forma della trasformazione.
Ponendo i punti di controllo sulla stessa verticale, è possibile ottenere la 
funzione di binarizzazione dell’immagine.
Ponendo i punti di controllo sulla bisettrice, è possibile ottenere invece una 
funzione che non modifica l’intensità dell'immagine.\\
La scelta del numero e della posizione dei punti di controllo dipende dall'applicazione richiesta ma, in generale, è necessario che $r_1 \leq r_2$ e $s_1 \leq s_2$ per preservare l'ordine dei livelli e prevenire la generazione di \textbf{artefatti di intensità.}\\
Questo tipo di trasformazioni viene utilizzata per migliorare la presentazione di immagini con livelli di grigio concentrati in range ristretti della scala di grigio.\\

\subsection{Slicing di intensità}
Il processo di slicing del livello di intensità è utile per sottolineare un particolare range di intensità in un’immagine.\\
L’implementazione di questa tecnica è possibile attraverso due approcci:
\begin{itemize}
    \item l’utilizzo della funzione in figura trasforma in bianco i valori all’interno di un range di grigio, trasformando in nero tutti gli altri. Questo approccio produce dunque un’immagine binaria comportando dunque una perdita delle informazioni esterne al range di interesse;
    \item il secondo approccio, invece, permette di mantenere invariati i valori esterni al range di interesse, trasformando in un valore prossimo al bianco quelli interni.
\end{itemize}
Se l’intensità di un pixel è composta da 8 bits, è possibile considerare un’immagine composta da \textbf{8 piani descritti da 1 bit} in cui:
\begin{itemize}
    \item il \textbf{piano 0} contiene il \textbf{bit di ordine più basso};
    \item il \textbf{piano 7} contiene il \textbf{bit di ordine più alto}-
\end{itemize}
Il \textbf{bit-plane slicing} consiste nella decomposizione di un’immagine a 256 livelli di grigio in 8 immagini binarie corrispondenti ai suoi 8 piani a 1 bit:
\begin{itemize}
    \item piani di bit di ordine superiore contengono informazioni rilevanti sulla struttura dell'immagine;
    \item piani di bit di ordine inferiore contengono informazioni sui dettagli più piccoli dell'immagine.
\end{itemize}
Ricostruendo l’immagine utilizzando la somma dei contributi dei suoi piani, si ottiene un’approssimazione dell’immagine originale che utilizza una porzione minore dei bits (\textbf{compressione}), con una conseguente perdita di dettagli che rende l’immagine \textbf{piatta}.

\section{Istogramma di una immagine}
L'\textbf{istogramma di intensità} di un'immagine in scala di grigio di range [0, L-1] è una \textbf{funzione discreta} del tipo
\[p(r_k) = \frac{n_k}{n},\,k\in\big[0,L-1\big]\]
in cui
\begin{itemize}
    \item $n_k$ è il numero di pixels dell'immagine con intensità pari a $r_k$;
    \item $n = M\,N$ è il numero totale di pixel dell'immagine.
\end{itemize}

L'istogramma $p(r_k)$ è una \textbf{stima a posteriori} della probabilità delle occorrenze di intensità $r_k$ nell'immagine, utile per fornire una descrizione globale dell’immagine: la forma dell'istogramma dipende dalla frequenza dei livelli di grigio appartenenti al range dell'immagine e alla loro distribuzione.\\

\tip{La presenza di un elevato numero di valori simili tra loro in un istogramma indica solitamente la presenza di 
una regione all'interno di un’immagine, mentre la distribuzione dei valori di un istogramma può suggerire 
la necessità di effettuare manipolazioni del contrasto.}

\subsubsection{Estrazione di un'immagine monocroma da una a colori}
Presa una immagine a colori RGB, il valore \textbf{V} dell'immagine ha una banda che corrisponde alla media delle bande R, G e B dei singoli pixels:
\[V(r, c) = \frac{1}{3}R(r, c)+G(r, c) + B(r, c)\]

La luminanza \textbf{L} dell'immagine, corrisponde a un’immagine a singola banda specifica con la media ponderata 
(effettuata pixel-per-pixel) dei valori delle bande R, G e B dell’immagine:
\[L(r, c) = 0,299R(r, c)+0,587G(r, c) + 0,114B(r,c)\]

\subsection{Elaborazione dell'istogramma}
Gli istogrammi possono essere utilizzati nelle tecniche di manipolazione dell’istogramma per fornire informazioni utili relative alla presentazione dell’immagine.\\
La manipolazione dell’istogramma rientra nella classe delle \textbf{operazioni puntuali}.
L’equalizzazione dell’istogramma o linearizzazione dell’istogramma è una trasformazione di intensità che 
ha lo scopo appiattire l’istogramma, distribuendo in maniera uniforme i pixels all’interno della scala dei 
grigi, così da ottenere un’immagine maggiormente contrastata e con un elevato range dinamico.\\
A causa della natura discreta dell’intensità, non è però possibile ottenere una distribuzione perfettamente 
uniforme.\\
Supponendo che $r$ sia una variabile continua di valori compresi tra [0, L-1] e considerando che una mappatura dell'intensità di forma
\[s=T(r),\,0\leq r\leq L-1\]
si assume che:
\begin{itemize}
    \item T(r) sia una funzione \textbf{monotona strettamente crescente} nell'intervallo $0\leq r\leq L-1$.\\
    Questa condizione garantisce che la sequenza dell’intensità nella scala dei grigi venga mantenuta, eliminando il rischio di artefatti causati dall’inversione dei valori dell’intensità;
    \item $0\leq T(r) \leq L-1,\,0\leq r \leq L-1$.\\
    Questa condizione garantisce che il range dell’intensità di output rimanga lo stesso del range dell’intensità di input.
\end{itemize}
È importante che la funzione $T(r)$ sia strettamente crescente per poter effettuare anche mappature inverse.\\
Poiché i valori dell’intensità sono discreti e anche se la funzione non è strettamente monotona, il problema 
di una trasformazione inversa può essere risolto.\\
Vedendo $r$ ed $s$ come \textbf{valori casuali}, è possibile descriverli come \textbf{funzioni della densità di probabilità (PDF)} $p_r(r)$ e $p_s(s)$; in particolare se 
\begin{itemize}
    \item $p_r(r)$ e $T(r)$ sono note;
    \item $T(r)$ è una funzione continua e differenziabile sul range dei valori
\end{itemize}
allora è possibile dire che la funzione della densità di probabilità dell'intensità mappata $p_s(s)$ può essere determinata dalla PDF dell'intensità in ingresso $p_r(r)$ e la funzione di trasformazione utilizzata, ossia
\[p_s(s) = p_r(r) \abs{\frac{dr}{ds}}\]
e considerando la trasformazione della f\textbf{unzione di distribuzione cumulativa (CDF)} della variabile r, si ha
\[s = T(r) = (L-1) \int_0^r p_r(w)\,dw\]
La CDF suddisfa entrambe le condizioni viste in precedenza in quanto
\begin{itemize}
    \item la PDF è sempre positiva e il suo integrale non può decrescere all’aumentare di $r$;
    \item quando il limite superiore di integrazione è $r = L-1$, l'integrale è sempre 1 in quanto l'area sotto la PDF è sempre 1 e da questo segue che il massimo valore di $s$ è $L-1$.
    \end{itemize}
    
\begin{multicols}{2}
Per la regola di Liebniz della derivata di un integrale definito rispetto al suo limite superiore si ottiene che
\[\frac{ds}{dr} = (L-1) p_r(r)\]\\
    \columnbreak
Sostituendo questo risultato nell'espressione precedente si ottiene che:
\[p_s(s) = \frac{1}{L-1},\,0\leq s\leq L-1\]
\end{multicols}
    
In questo modo la PDF della variabile mappata è una funzione delle densità di probabilità uniforme, mentre la mappatura dell’intensità è la CDF, indipendentemente dall’intensità della forma della PDF della variabile di input.\\
Anche se l’equalizzazione dell’istogramma richiede solo l’applicazione di una funzione di trasformazione 
coincidente con la CDF, non è necessario effettuare altri calcoli.\\
Supponendo che i livelli di grigio di un'immagine abbiano PDF pari a
\[p_r(r) = \begin{cases}
\frac{2r}{(L-1)^2}\\
0
\end{cases}\]
Applicando dunque la trasformazione basata sulla CDF si ottiene che
\[s= T(r) = (L-1)\int_0^r p_r(w)\,dw = \frac{2}{L-1}\int_0^r\]
Per verificare che la PDF dell'immagine di output sia uniforme, è possibile mettere l'espressione della $p_r(r)$ e $s$ nell'equazione, assumendo che $L>1$ e si tiene conto che $r$ sia non-negativa
\includegraphics[scale=0.5]{img/cap4/pdf_uniforme.jpg}

In caso di valori discreti, è necessario utilizzare \textbf{probabilità} e \textbf{sommatorie}, ricordando che le condizioni di
monotonicità possono essere applicate.\\
Sapendo che la probabilità di avere un determinato livello di grigio è:
\[p(r_k) = \frac{n_k}{n},\,k\in\big[0,L-1\big]\]
La forma \textbf{discreta} della trasformazione di equalizzazione sarà dunque
\[s=T(r_k) = (L-1) \sum_{j=0}^k p_r(r_j) = \frac{(L-1)}{MN} \sum_{j=0}^k n_j,\, k\in \qbrackets{0, L-1}\]
Usando questa equazione è possibile ottenere l’immagine di output mappando l’intensità di ogni pixel in 
input nei livelli di intensità dell’immagine di output. Questa trasformazione prende il nome di 
\textbf{linearizzazione dell’istogramma} o \textbf{equalizzazione dell’istogramma}.


\includegraphics[scale=0.6]{img/cap4/ex81/ex81_1.jpg}
\includegraphics[scale=0.6]{img/cap4/ex81/ex81_2.jpg}
\includegraphics[scale=0.6]{img/cap4/ex81/ex81_3.jpg}
\includegraphics[scale=0.6]{img/cap4/ex81/ex81_4.jpg}

Esistono diverse tecniche che permettono di migliorare il contrasto di un immagine, ma l’equalizzazione 
dell’istogramma ha il vantaggio di essere \textbf{completamente automatica}. La sua non uniformità 
dell’equalizzazione di istogrammi è dovuta all’approssimazione necessaria trattando variabili di natura 
discreta. L’istogramma ha comunque la tendenza di distribuire i valori in input in modo da generare un 
range più ampio della scala di grigio.

\subsection{Equalizzazione dell'istogramma (Histogram matching)}
L’equalizzazione dell’istogramma ha l’obbiettivo di produrre automaticamente un immagine con 
istogramma uniforme. Questo metodo va bene quando si desidera una miglioramento automatico i cui 
risultati sono predicibili e il metodo è semplice da implementare.
Le trasformazioni di histogram matching o specification hanno l’obbiettivo di avvicinare l’istogramma di 
un’immagine a quello di un’altra, come nel restauro di immagini degradate di cui si dispone di un buon 
originale o nell’omogeneizzazione delle caratteristiche di una scena catturata da due differenti dispositivi.\\
Supponendo:
\begin{itemize}
    \item $r, s$ e $z$ come variabili continue casuali;
    \item $r$ equivalente al valore dell'intensità in input;
    \item $z$ equivalente al valore dell'intensità in output;
    \item $p_r(r)$ equivalente alla PDF stimata dall'immagine in ingresso;
    \item $p_z(z)$ equivalente alla PDF specificata che si desidera ottenere dall'immagine in uscita;
    \item $s$ equivalente al risultato dell'equalizzazione dell'immagine a $r$.
\end{itemize}

\begin{multicols}{3}
Definiamo $z$ con la proprietà\\
$G(z) = (L-1)\int_0^r p_s(t)\,dt$\\
\columnbreak
Ne segue che\\
$G(z) = T(r)$\\
\columnbreak
Dunque\\
$z=G^{-1}\qbrackets{T(r)} = G^{-1}(s)$
\end{multicols}

Dunque l'intensità di output \textbf{z} può essere determinata finché $T(r)$ è facilmente ottenuto una volta che $p_r(r)$ è stato stimato dall'immagine in input e similarmente $G(z)$ può essere ottenuto se la $p_z(z)$.\\
Un'immagine in cui livelli hanno una specifica PDF può essere ottenuta da una data immagine:
\begin{itemize}
    \item stimando la $p_r(r)$ dall'immagine di input e calcolando il valore di $s$;
    \item usando la PDF specifica $p_z(z)$ per ottenere la funzione di trasformazione $G(z)$;
    \item determinando la trasformazione inversa $z = G^{-1}(s)$ mappando da $s$ a $z$;
    \item per ogni pixel con valore di $s$ nell'immagine equalizzata, il mapping inverso da $s$ a $z$ permette di ottenere il pixel corrispondente nell’immagine di output.\\
    Quando tutti i pixels sono stati processati, la PDF dell’immagine risultate viene equalizzata alla PDF specificata.

\end{itemize}


\subsection{Histogram matching discreto}
Nel caso di variabili discrete, l’operazione di specificazione dell’istogramma restituisce un valore di $z$ per ogni valore di $s$, effettuando una mappatura da $s$ a $z$.\\
\begin{multicols}{2}
Si effettua l'equalizzazione dell'istogramma dell'immagine in input $r_k$:
\[s_k = T(r_k) = \frac{(L-1)}{MN}\sum_{j=0}^k nj,\,k\in \qbrackets{0, L-1}\]\\
    \columnbreak
Dato un valore di $s_k$ si calcola la trasformazione è necessario che per valori di $q$ che $G(z_q) = s_k$
\[G(z_q) =(L-1)\sum_{i=0}^q p_z(z_i)\]\\
\end{multicols}
dove $p_z(z_i)$ è l'$i-$esimo valore dell'istogramma specificato.\\
Il valore desiderato di $z_q$ si ottiene dalla trasformazione inversa: $z_q = G^{-1}(s_k)$.\\
Il vantaggio della formulazione discreta è che non vi è bisogno di calcolare l’inverso della funzione $G$ poiché tutti i valori di intensità sono interi. Questi valori sono scalati e arrotondati all’intero più vicino appartenente all’intervallo \qbrackets{0, L-1} e successivamente memorizzati nella tabella:
\begin{itemize}
    \item si calcola l'istogramma $p_r(r)$ dell'immagine
    \item si approssimano i valori ottenuti $s_k$ all’intervallo dei reali \qbrackets{0, L-1}
    \item si approssimano i valori di $G$ a valori interi del range per poi salvarli all’interno della tabella;
    \item per ogni valore di $s_k$ si usa il valore di $G$ per trovare il valore corrispondente $z_q$ così che $G(z_q)$ sia più vicino a $s_k$ e si memorizza questa mappatura da $s$ a $z$.\\
    Quando la mappatura non è unica si sceglie per convenzione il valore minore;
    \item si utilizza questa mappatura per formare l’immagine di output partendo dai valori $s_k$ ottenuti dall’equalizzazione dell’istogramma dell’immagine di input.
\end{itemize}
Come nel caso continuo, gli step intermedi possono essere saltati combinando le funzioni di trasformazione $T$ e $G^{-1}$.\\
\includegraphics[scale=0.6]{img/cap4/ex119/ex_119_1.jpg}
\includegraphics[scale=0.6]{img/cap4/ex119/ex_119_2.jpg}
\includegraphics[scale=0.6]{img/cap4/ex119/ex_119_3.jpg}
\includegraphics[scale=0.6]{img/cap4/ex119/ex_119_4.jpg}
\includegraphics[scale=0.6]{img/cap4/ex119/ex_119_5.jpg}
Questo processo procede principalmente a tentativi in quanto non vi sono regole per la scelta dell’istogramma da utilizzare poiché questo varia di caso in caso in base al miglioramento desiderato.
## Trasformazioni globali
## Trasformazioni puntuali
## Trasformazioni omogenee
### Contrast stretching
### Logaritm
### Gamma
### Lineare a tratti
### Slicing di intensità
### Trasformazione sui piani di bit

## Trasformazioni non omogenee
### Operazioni di base (+, -, %, *)
Le operazioni che hanno due o più immagini vengono sviluppate pixel-by-pixel e sono denominate 
operazioni su array per distinguerle da quelle più rare chiamate operazioni su matrici.
Un operatore viene definito lineare se:
\begin{itemize}
    \item la somma dei risultati ottenuti dalla sua applicazione a due input è equivalente al risultato della 
sua applicazione alla somma dei due input;
    \item la moltiplicazione di una costante per il risultato della sua applicazione ad un input è uguale al 
risultato della sua applicazione allo stesso input moltiplicato per la stessa costante.
\end{itemize}

Le operazioni aritmetiche tra due immagini $f(x, y)$ e $g(x, y)$ sono:
\begin{itemize}
    \item addizione;
    \item sottrazione;
    \item moltiplicazione;
    \item divisione.
\end{itemize}
Poiché il risultato dell’operazione in ogni posizione ($x, y$) dipende solo dai valori dei pixel nella stessa 
posizione nelle immagini di partenza, le operazioni aritmetiche trovano largo impiego nelle elaborazioni 
appartenenti alla classe delle operazioni puntuali.\\

Le operazioni locali sono elaborazioni che coinvolgono i valori dei pixel in un intorno della posizione ($x, y$) di interesse.\\
Questo tipo di operazioni si avvalgono di maschere o filtri per assegnare al pixel in posizione 
($x, y$) un valore che è funzione sia del suo livello di grigio che dei valori dei pixel a lui vicini
### Operazioni logiche (AND, OR)
L’appartenenza ad un set è basata sulla posizione del pixel.\\
Supponendo di considerare immagini binarie, 
possiamo definire gli operatori logici utilizzabili con le immagini pixel-by-pixel:
\begin{itemize}
    \item AND = P$\cdot$ Q;
    \item OR = P $+$ Q;
    \item NOT = $\hat{Q}$.
\end{itemize}
Le operazioni logiche non sono applicabili a immagini a scala di grigio in quanto bisogna tenere conto 
dell’intensità di tutti i pixels risultanti dall’operazione.\\
È comunque possibile rappresentare gli elementi di 
un’immagine a scala di grigio come un set i cui elementi sono terne ($x, y, z$) corrispondenti alle coordinate 
spaziali e all’intensità del singolo pixel.\\
Partendo da questo presupposto è possibile definire il 
complemento di un pixel come ($x, y, K-z$).\\
L’unione tra due set A e B viene definita come 
\[A\cup B = \{max_z(a, b)| a\in A, b\in B\}\]
e genera un set composto dagli elementi di massima intensità tra le coppie di elementi corrispondenti.\\

L’intersezione tra due set A e B viene definita come 
\[A\cap B = \{min_z(a, b)| a\in A, b\in B\}\]

e genera un set composto dagli elementi di minima intensità tra le coppie di elementi corrispondenti


### Miglioramenti locali
### Espansione del contrasto adattivo

# Filtraggio spaziale
## Lineare
## Non lineare
## Sharpening
## Derivativi
### Gradiente
#### Robert
#### Prewitt
#### Sobel
### Laplaciano
### Laplaciano
### Conv
#### Log
#### Drog
#### Canny

# Filtraggio in frequenza