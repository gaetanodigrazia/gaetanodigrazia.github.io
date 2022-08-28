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
## Rotazione di immagini
## Trasformazioni geometriche
## Similarità e adiacenza

# Trasformazioni di intensità
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
### Operazioni logiche (AND, OR)
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