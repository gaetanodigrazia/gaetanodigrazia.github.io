---
layout: post
title:  "[Image processing] - Immagini digitali"
author: gaetano
categories: [ matlab, images, processing, algorithm, matrix, vector, scripts]
image: assets/images/computer_vision.png
hidden: true
---
# Digital images
## How an image born
## Image definition
## Image modeling
Quando un'immagine è generata da un processo fisico, la sua intensità è proporzionale all'energia irradiata da una sorgente fisica; tale intensità può essere pensata come la combinazione moltiplicativa della quantità di illuminazione diretta (chiamata \textbf{illuminazione}) e della quantità di illuminazione riflessa (chiamata \textbf{riflettanza}), in formule
\[f(x, y) = i(x, y) \star r(x, y)\]
Ora, in particolare
\begin{itemize}
    \item la componente di \textit{illuminazione} è responsabile delle \textbf{variazioni} \textbf{lente} di luminosità. La natura di questa componente è determinata dalla sorgente luminosa;
    \item la componente di \textit{riflettanza} è responsabile delle \textbf{variazioni} \textbf{brusche} di luminosità.\\
    La natura di questa componente è determinata delle caratteristiche degli oggetti presenti nella scena, il suo valore varia tra 0 (\textbf{assorbimento totale}) e 1 (\textbf{riflettanza completa}).
\end{itemize}
Non è difficile da immaginare, si pensi alla luce del Sole, infatti basta chiedersi: quanto velocemente, o lentamente per meglio dire, varia questa nella generazione di una immagine? E se invece avessimo uno specchio?

### Scala dei grigi
In un'immagine monocromatica, l'\textbf{**intervallo**} tra la luminosità minima $L_{min}$ e la luminosità massima $L_{max}$
prende il nome di \textit{**scala dei grigi**}, mentre l'\textbf{**intensità**} prende il nome di \textit{**livello di grigio**}.\\
Si considerano \textbf{L} (con L$\in\big[0, L-1\big]$) livelli discreti di grigio per tenere conto del carattere digitale della funzione $f$ dopo la quantizzazione 
dell'intensità.\\

Come ulteriore definizione di contrasto, visto che abbiamo introdotto il concetto della scala dei grigi, possiamo dare la seguente
> Il contrasto è la differenza tra massimo e minimo valore di grigio presenti nell'immagine

Considerando il \textbf{campionamento spaziale} e assumendo che l'immagine continua venga approssimata in una matrice composta da \textbf{M x N} campioni, si ottiene la rappresentazione classica di un'immagine digitale in forma di \textit{matrice}.
### Frequenza spaziale
La \textbf{frequenza spaziale} è una caratteristica di tutte le strutture variabili nello spazio, che fa riferimento alla ripetizione nello spazio di gruppi di pixel di uguale valore.\\
Un'immagine $f(x, y)$ può essere considerata come un segnale spazio-variante scomponibile secondo Fourier in una somma di infiniti termini sinusoidali, ciascuno caratterizzato da una sua frequenza.\\
È possibile misurare la frequenza spaziale secondo:
- il numero di cicli per unità di lunghezza;
- il numero di cicli per grado di angolo visivo.

I due metodi di misura possono essere correlati considerando che un angolo visivo di 1° corrisponde ad una lunghezza di 1 cm vista da circa 57 cm di distanza.

### Granting
Un \textbf{granting} è un'immagine in cui l'intensità varia in una sola direzione, permettendo così di considerarla come una ripetizione di \textbf{linee di scansione} tutte uguali.\\

### Sensibilità al contrasto
La sensibilità al contrasto del sistema visivo umano dipende anche dalla frequenza spaziale.\\
Per dimostrare questa dipendenza si fa uso della \textbf{Modulation Transfer Function (MTF)}, espressione del grado di attenuazione o amplificazione delle differenti frequenze da parte del sistema.\\
È possibile inoltre definire una \textbf{Contrast Sensitivity Function (CSF)} così da poter descrivere la sensibilità al contrasto dell'osservatore di fronte ad un grating sinusoidale in funzione della frequenza spaziale.

## Acquisizione dell'immagine
È il processo di rivelazione e \textbf{registrazione} (imaging) che forma l'immagine di una scena, illuminata da una sorgente, su un supporto adatto agli usi successivi.\\ Ai fini della formazione dell'immagine, l'energia della sorgente può essere riflessa dagli oggetti o trasmessa su di essi per essere poi catturata.\\
L'acquisizione, dunque, ha lo scopo di produrre un'immagine numerica su un supporto accessibile da dispositivi di calcolo.\\
Il processo di acquisizione può avvenire con tecnologie \textit{fotochimiche}(analogiche) o \textit{fotoelettroniche}(parzialmente o completamente digitali) e, inoltre, spesso si usa un metodo detto \textbf{raster scan}, ossia una scansione da sinistra a destra, una riga dopo l'altra dall'alto verso il basso.\\
Le fasi del processo di imaging sono:
\begin{itemize}
    \item \textbf{scansione};
    \item \textbf{trasduzione} (rivelazione da parte del sensore);
    \item \textbf{campionamento} (discretizzazione dei valori delle coordinate spaziali);
    \item \textbf{quantizzazione} (discretizzazione dei valori di intensità);
    \item \textbf{scrittura} (memorizzazione).
\end{itemize}
### Campionamento spaziale
Il campionamento compie una discretizzazione dei valori delle coordinate spaziali e dipende dalla posizione dei sensori utilizzata e dalla qualità dei componenti ottici del sistema di imaging.
> Il campionamento spaziale determina la **risoluzione spaziale**.

### Quantizzazione
Nella quantizzazione avviene una discretizzazione dei valori di intensità e questa dipende dal numero di livelli adoperati e dal contenuto di rumore.
> La quantizzazione determina la **risoluzione di intensità**.

## Sensore
Un \textbf{sensore} è un dispositivo capace di trasformare l'energia luminosa entrante in corrente.\\
Il risultato del sensore è un'onda continua, dalla cui digitalizzazione si ottiene il valore dell'intensità di un punto dell'immagine corrispondente alla posizione del sensore.\\
Alcune configurazioni di sensori sono:
\begin{itemize}
    \item un \textbf{singolo sensore} che effettua spostamenti relativi lungo gli assi delle x e delle y permette di acquisire con elevata precisione immagini ad elevata risoluzione. Questo metodo risulta poco costoso ma molto lento;
    
    \item usare una \textbf{striscia di sensori allineati} permette di acquisire un'intera riga di elementi contemporaneamente, muovendosi perpendicolarmente alla striscia stessa.\\
    Questo metodo è molto utilizzato implementando strisce con più di 4.000 sensori allineati.\\
    È possibile unire anche le estremità della striscia di sensori (ottenendo così una struttura ad anello);
    
    \item dei \textbf{sensori disposti su un piano} permettono di catturare un'immagine senza movimento, focalizzando la luce all'interno del piano su cui risiedono i sensori.\\
    Questo metodo viene utilizzato principalmente per realizzare le fotocamere digitali: l'energia riflessa da un elemento è raccolta e focalizzata dal sistema di acquisizione all'interno del piano dell'immagine, in cui sono posizionati i sensori.\\
    I sensori producono un output proporzionale all'integrale della luce ricevuta da ogni sensore.\\
    L'output viene convertito in un segnale analogico che viene digitalizzato e quantizzato per produrre l'immagine digitale finale.
    
\end{itemize}


## Gamma dinamica
Un'immagine digitalizzata ha normalmente una gamma dinamica, ossia una scala dei grigi, molto meno ampia di quella percepibile dal sistema visivo umano (ne sono un esempio le immagini ad elevato contrasto).
La capacità di discriminazione dell'occhio umano è peggiore nelle zone più scure (Weber, $\Delta I_c/I$); i filtraggi omomorfi, però, permettono di comprimere la gamma dinamica e di aumentare il contrasto nelle zone più scure.\\
È possibile migliorare la qualità delle immagini comprimendo la gamma dinamica e aumentando il contrasto nelle zone più scure.\\ 
L'accuratezza della quantizzazione dipende dal numero di livelli adoperati e dal contenuto di rumore, mentre il metodo di campionamento dipende dalla configurazione di sensori utilizzata.\\
In caso di spostamenti molto piccoli e di elevata densità di sensori, l'accuratezza del campionamento è limitata da fattori come la qualità dei componenti ottici utilizzata. 

\tip{La gamma dinamica è definita come il rapporto tra la più grande intensità misurabile e la più piccola intensità rilevabile.\\
Rappresenta il livello più piccolo e il livello più grande rappresentabili dal dispositivo e quindi eventualmente presenti in un'immagine acquisita con esso.\\
Il limite superiore è il livello di saturazione del sistema, il limite inferiore è determinato dal rumore.}


## Image representation
Le \textbf{coordinate spaziali} $(x, y)$ indicano la posizione del campione all'interno della matrice e non sono collegate alla coordinata fisica dei punti corrispondenti all'immagine della scena.\\
La sezione del piano reale diviso dalle coordinate di un'immagine è chiamato \textbf{dominio spaziale} o \textbf{dominio del pixel}; si noti che il primo elemento di una matrice è posizionato convenzionalmente in alto a sinistra.\\

Un'immagine monocromatica è dunque composta d a $M\ast N$ \textbf{pixels} e ogni pixel ha valori compresi tra $\big[0, L-1\big]$, con $L$ pari al numero massimo di livelli di grigio.\\

## Pixels depth
Un altro importante concetto, invece, è la profondità dei pixels
\tip{La profondità dei pixels è pari al numero di bit 
necessari per ottenere tutti i livelli di grigio stabiliti con $L = 2^k$.}
In un'immagine a colori invece ogni pixel deve tenere informazioni riguardanti i livelli di intensità di rosso, verde e blu, la cui combinazione restituisce uno specifico colore; questi tre livelli hanno solitamente lo stesso 
range e la profondità dei singoli colori è calcolata come nelle immagini a scala di grigio.\\
Nella rappresentazione delle immagini digitali, il valore dell'intensità del singolo punto è proporzionale al valore della $f$ del singolo pixel.
Il range dei valori che un pixel può assumere viene chiamato \textbf{range dinamico} e viene calcolato come il rapporto tra la massima e la minima intensità misurabile nel sistema, ossia 
\[R = \frac{L_{max}}{L_{min}}\]
Inoltre
\begin{itemize}
    \item il limite superiore viene determinato per \textbf{saturazione};
    \item il limite inferiore viene determinato per \textbf{disturbo}.
\end{itemize}

Dunque, come detto precedentemente, il contrasto dell'immagine è definito come la differenza (normalizzata se necessario) di intensità tra il 
massimo e il minimo livello di intensità dell'immagine:
\begin{itemize}
    \item quando un discreto numero di pixels di un'immagine hanno un alto range dinamico, l'immagine presenta probabilmente un elevato livello di contrasto;
    
    \item quando un discreto numero di pixels di un'immagine hanno un basso range dinamico, l'immagine presenta probabilmente un basso livello di contrasto (immagine sembra sbiadita).
\end{itemize}

## Risoluzioni
### Risoluzione spaziale
Le caratteristiche del metodo di acquisizione dei campioni, contribuisce a determinare la risoluzione spaziale dell'immagine.\\
La \textbf{risoluzione dell'immagine} è una misura del più piccolo dettaglio distinguibile in 
un'immagine, calcolata solitamente come:
\begin{itemize}
    \item coppie di linee per distanza unitaria;
    \item pixel per distanza unitaria.
\end{itemize}

Ma la dimensione di un'immagine in pixel non è sufficiente in quanto non informa sulle dimensioni spaziali 
dell'immagine.

### Risoluzione di intensità
La risoluzione di intensità o risoluzione di contrasto si riferisce al più piccolo cambio di intensità distinguibile, ed e direttamente collegato al numero di livelli quantizzati.\\
Il suo valore è solitamente una 
potenza di 2 e l'esponente della potenza è solitamente il numero di bit utilizzato per rappresentare un singolo pixel e può essere assunto come un'espressione della risoluzione di intensità.\\
È possibile quindi dire che un'immagine con intensità quantizzata in 256 livelli ha una risoluzione di intensità pari a 8 bits.\\
Poiché i cambiamenti distinguibili nell'intensità di un'immagine non sono influenzati solo dal range dinamico, dire che un'immagine ha 8 bits di risoluzione di intensità vuol dire che un sistema a 8-bit è in grado di quantizzare l'intensità a incrementi fissi di 1/256 unità del livello di intensità.

## Riduzione della risoluzione spaziale
La riduzione della risoluzione spaziale rende un'immagine più piccola dell'originale.\\
Un'immagine può essere invece \textbf{zoomata} per facilitarne il confronto con una più grande, modificando la dimensione dei pixel che vengono avvicinati all'immagine.\\
Un'immagine molto zoomata infatti è 
caratterizzata da una \textbf{scarsa risoluzione} e da \textbf{discontinuità tra i livelli di grigio} maggiormente visibile.\\ 
Normalmente, dato un certo sistema di imaging, non è possibile cambiare le caratteristiche del sensore, che determina automaticamente la dimensione dei pixels e la risoluzione dell'immagine acquisita.\\
La qualità di un'immagine dipende dall'applicazione d'uso, ma può essere influenzata anche dalla risoluzione di intensità, che può portare la generazione di \textbf{falsi contorni} in aree di intensità simile (quasi costante).
## Relazione tra N e K
Siano K il range di intensità ed  N il numero di pixel, lo studio di Huang ci dice che: prese 3 immagini caratterizzate da quantità di dettaglio differente (basso, medio e alto), viene chiesto di valutare soggettivamente la qualità dell'immagine al variare dei valori di K e N.\\
Dallo studio delle risposte degli intervistati sono emerse delle \textbf{curve di iso-preferenza}, rappresentate su un 
piano cartesiano NK in cui i punti che giacciono sulla stessa curva rappresentano immagini di pari qualità 
soggettiva:
\begin{itemize}
    \item all'aumentare del range dell'intensità (K) non è necessaria un elevato numero di pixel (N);
    \item all'aumentare del numero di dettagli o pixels (N), non è necessario un ampio range di intensità (K).
\end{itemize}
\tip{In intervalli in cui il livello di campionamento aumenta ma il numero di livelli di intensità decresce la qualità dell'immagine rimane la stessa.}

Questo accade perché una riduzione del valore di K porta ad aumentare il contrasto apparente che l'occhio umano percepisce come un miglioramento della qualità dell'immagine.

## Campionamento non uniforme e quantizzazione
Campionamenti non uniformi possono essere accettabili per le aree di un’immagine con pochi dettagli, mentre per aree con cambiamenti rapidi dell'intensità di grigio sono necessari campionamenti più fini.\\
In modo simile, la quantizzazione può essere ottenuta attraverso livelli spaziati non uniformemente nella scala di grigi.\\
Esistono comunque diverse tecniche per riallocare i livelli di grigio dopo la digitalizzazione, modificandone i valori senza causare danni visivamente significativi all'immagine.

