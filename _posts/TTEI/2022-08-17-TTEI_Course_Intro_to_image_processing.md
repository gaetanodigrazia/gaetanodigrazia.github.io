---
layout: post
title:  "[Image processing] - Intro all'image processing"
author: gaetano
categories: [ matlab, images, processing, algorithm, matrix, vector, scripts]
image: assets/images/computer_vision.png
---

# Intro
L'elaborazione di immagini digitali, o elaborazione di immagini, è l'uso di un computer digitale per elaborare o elaborare immagini digitali con l'aiuto di un computer tramite un algoritmo.\\
Lo scopo dell'elaborazione digitale delle immagini è solitamente quello di evitare, o talvolta migliorare, il rumore e/o la distorsione incorporati in un'immagine tramite il **ripristino dell'immagine**.\\
C'è un altro campo che viene trattato principalmente in questa disciplina, la **segmentazione delle immagini** che sono alla base del moderno deep learning (nell'ambito delle immagini).
Le immagini nascono in un dominio analogico, questo dominio riguarda immagini fotografiche su carta o su 
pellicola, oppure che possono essere catturate da una scena tridimensionale, quindi si trovano su un mezzo
fisico e il sistema visivo umano può accedere all’immagine.\\
Nel dominio dell'image processing end-to-end ci sono diversi settori di attività che elenchiamo di seguito:
- Human Visual System (HVS), è il principale utilizzatore dell’immagine e può essere direttamente 
coinvolto nella sua elaborazione come ad esempio nel confronto immagini input e output;
- immagini analogiche. Sono il primo anello della catena di elaborazione delle immagini e 
rappresentano scene del mondo reale impresse su supporti fisici di varia natura;
- Dispositivi di acquisizione – permettono di catturare immagini in formato digitale (fase di imaging).
- Elaborazione dell’immagine preliminari – sono operazioni finalizzate all’organizzazione dei dati 
digitali restituiti dal dispositivo di acquisizione, finalizzati alla correzione dei difetti intrinseci del 
metodo di acquisizione utilizzato:
    - Nelle fotocamere può essere necessario bilanciare il bianco in base alle condizioni di 
illuminazione nella fase di acquisizione;
    - Negli scanner può essere necessario correggere artefatti ottici, la segmentazione delle 
immagini acquisite in corrispondenza di porzioni di testo o la gestione del colore in 
relazione alla risposta colorimetrica dello scanner.
- Visual form – immagine pronta per i trattamenti successivi, contenuta in un file di formato 
appropriato (bmp, tiff, jpeg) che ne permette la visualizzazione.
- Segmentazione – è il primo passo dell’analisi e consiste nella suddivisione dell’immagine in regioni 
significative, rappresentate attraverso caratteristiche che costituiscono un set di attributi 
dell’immagine (contorni, tessitura, colore).
- Elaborazioni di output – sono finalizzate alla caratterizzazione del colore o alla quantizzazione del 
colore in caso di dispositivi di output con palette limitate.
- Rendering – rappresenta la restituzione dell’immagine su un supporto fisico che sia esso una 
stampante o su un display.

## Bartlane method
Il sistema di trasmissione di immagini via cavo Bartlane è una tecnica inventata nel 1920 per trasmettere immagini di giornali scansionate su linee di cavi sottomarini tra Londra e New York e prende il nome dai suoi inventori Harry G. Bartholomew e Maynard D. McFarlane. \\
Il sistema del metodo Bartlane è stato utilizzato per la prima volta per trasmettere un'immagine attraverso l'Atlantico nel 1921, un'impresa che ha richiesto meno di tre ore.



# The human visual system (HVS)
Per HVS - Human Visual System si intende il sistema visivo umano, il quale è possibile scomporlo come **sistema sensoriale**(sistema ottico) e il **sistema percettivo** (cervello); si tratta di una struttura capace di sfruttare le informazioni sensoriali che provengono dal sistema ottico per elaborarle.\\
Dell'HVS studiamo solo il sistema ottico e non quello percettivo che, oltre ad essere fuori dalle nostre competenze e conoscenze, è anche oggetto di continuo studio da parte degli specialisti.

## L'occhio
L’occhio è uno strumento delicato e complesso e ha la forma di una sfera leggermente schiacciata.\\
Il bulbo oculare è allocato all’interno della cavità orbitaria del cranio ed è avvolto da tre membrane, dette tonache che hanno struttura e funzioni diverse:
- **tonaca fibrosa**, esterna che protegge e sostiene il bulbo oculare e comprende la *sclera* e la *cornea*;
    
- **tonaca vascolare**, detta anche uvea, suddivisa a sua volta da uvea anteriore (*corpo ciliare* ed *iride*) e uvea posteriore (*coroide*).\\
L’uvea è una struttura ricca di vasi e di pigmento che ha la funzione di assicurare una corretta nutrizione alla retina esterna e di assorbire la luce;
    
- **tonaca nervosa**, interna detta *retina*, la parte sensoriale che trasforma gli stimoli luminosi in impulsi nervosi.
<a title="OpenStax College, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:1413_Structure_of_the_Eye.jpg"><img width="512" alt="1413 Structure of the Eye" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/1413_Structure_of_the_Eye.jpg/512px-1413_Structure_of_the_Eye.jpg"></a>

La parte esterna dell’occhio ha una struttura resistente ed è formata anteriormente dalla cornea e posteriormente dalla sclera, separate da una zona di transizione detta limbo.\\
Ora, nella fattispecie:
- **cornea**, trasparente alla radiazione elettromagnetica visibile;
- **sclera**, opaca per evitare infiltrazioni;
- **coroide**, serve ad alimentare l'occhio. Nella parte anteriore si trovano *iride* e *corpo ciliare*;
- **iride**, è un diaframma ottico: regola la quantità di luce che entra;
- **retina**, contiene le cellule fotosensibili che consentono la visione: sono cellule che vengono eccitate dalle radiazioni luminose.

## Retina
La retina come abbiamo visto è la parte più interna dell'occhio e afferisce alla tonaca nervosa: contiene le cellule fotosensibili e trasforma gli stimoli luminosi in impulsi nervosi.\\
La retina, dunque, occupa la parte posteriore dell'occhio; le immagini messe a fuoco vengono proiettate su di essa consentiranno ai suoi recettori *fotosensibili* di convertire le radiazioni luminose in segnali elettrochimici inviati al cervello attraverso il *nervo ottico*.\\
Nella retina troviamo i due fondamentali recettori: **coni** e **bastoncelli**.\\
Di seguito una immagine esplicativa di questi recettori (e anche del loro nome)
<a title="Christine Blume, Corrado Garbazza &amp; Manuel Spitschan, CC BY 4.0 &lt;https://creativecommons.org/licenses/by/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Overview_of_the_retina_photoreceptors_(a).png"><img width="512" alt="Overview of the retina photoreceptors (a)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Overview_of_the_retina_photoreceptors_%28a%29.png/512px-Overview_of_the_retina_photoreceptors_%28a%29.png"></a>

> Sono presenti tre tipi di pigmentazione diversa in ogni cono

### Coni
I coni sono circa 7 milioni per occhio e si concentrano nella **fovea** che è la zona di massima acuità visiva e si trova nella parte *centrale* della retina con un diametro di circa 1.5mm.\\
I coni permettono la visione **fotopica** grazie al fatto che sono sensibili al colore; inoltre vengono attivati in condizioni di elevata intensità luminosa e sono collegati *ognuno* ad una *singola* fibra nervosa.

### Bastoncelli
I bastoncelli sono più numerosi dei coni, ossia da 75mln a 150mln per occhio, e sono distribuiti in modo più uniforme sull'intera superficie della retina.\\
Questi recettori sono collegati ad un'**unica** fibra nervosa comune e sono praticamente *insensibili* al colore pur avendo una maggiore sensibilità all'intensità luminosa.\\
I bastoncelli, dunque permettono la visione **scotopica** (o *crepuscolare*, monocromatica) al buio.

### Punto cieco
L'assenza dei recettori nella zona in cui il nervo ottico si innesta è chiamato **punto cieco**; anche se a causa di questa zona non dovremmo vedere alcuni porzioni dell'immagini, questa lacuna è colmata dal continuo movimento dell'occhio.

<a title="Jochen Burghardt, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Distribution_of_Cones_and_Rods_on_Human_Retina.png"><img width="512" alt="Distribution of Cones and Rods on Human Retina" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Distribution_of_Cones_and_Rods_on_Human_Retina.png/512px-Distribution_of_Cones_and_Rods_on_Human_Retina.png"></a>

## Cristallino e corpo ciliare
È una lente biconvessa posizionata appena dietro l'iride, 5mm dietro la cornea.\\
Il cristallino contiene al suo interno un pigmento che gli conferisce una lieve colorazione gialla comportando un assorbimento della luce incidente dell'8% in maniera eterogenea rispetto allo spettro della radiazione visibile, con un maggiore assorbimento per la luce blu.\\
Il corpo ciliare, invece, è composto da un insieme di fibre che regola la messa a fuoco tramite la deformazione del cristallino.

## Lenti e lunghezza focale
Diciamo intanto che:
1. le *diottrie* misurano la potenza ottica di un sistema ottico;
2. la potenza ottica $P_0$ è il reciproco della lunghezza focale ($L_F$) di una lente
    $$P_0 = \frac{1}{L_F}$$
3. lunghezza focale e potenza focale sono *positive* in lenti *convergenti* e *negative* in lenti *divergenti*;
4. se due o più lenti con lo stesso asse sono a contatto, le loro potenze ottiche si sommano.

Dunque, dal punto di vista ottico, l'occhio umano può essere considerato come un sistema fatto da due lenti *positive* in cui la cornea ha una potenza ottica pari a 43D (diottrie) mentre il cristallino ha una potenza ottica di 19D.\\
Per la proprietà (4), allora, la potenza ottica di un occhio umano è di circa 60D e la sua lunghezza focale è di 17mm.

> In una macchina fotografica la lunghezza focale è fissa e la messa a fuoco avviene modificando la distanza tra la lente e il piano dell'immagine nel quale è posto il chip di acquisizione.\\
Nell'occhio umano, invece, la distanza tra la lente e il piano dell'immagine è fissa e quindi la messa a fuoco avviene modificando la lunghezza focale tramite la deformazione del cristallino.

La distanza tra il centro della lente e la retina è di circa 17mm ma grazie alla modifica della forma del cristallino è possibile ottenere lunghezze focali comprese tra i 14 e i 17mm rispettivamente in condizioni di minimo e massimo rilassamento dell'occhio umano, ottenendo così una messa a fuoco per distanze maggiori di 3 metri
$$\frac{h_\text{OGGETTO}}{D_\text{OGGETTO}} = \frac{h_\text{PROIEZIONE}}{D_\text{FOCALE}} $$

> Occhio **rilassato**, massimo rilassamento $->$ lunghezza focale 17 mm \\
> Occhio **contratto** , minimo rilassamento $->$ lunghezza focale 14 mm
    

## Disfunzioni del sistema visivo
### Miopia
La miopia è un’anomalia rifrattiva a causa della quale i raggi luminosi provenienti da un oggetto a grande distanza vengono focalizzati **davanti la retina** e non su di essa con la conseguente visione sfocata degli oggetti lontani.\\
È generalmente dovuta a una **lunghezza eccessiva del bulbo oculare**, che comporta 
l’esigenza di una lunghezza focale maggiore per riportare il piano focale sulla retina
$$\frac{1}{F} = \frac{1}{F_{NORM}}+\frac{1}{F_{CORN}}$$

### Ipermetropia
L’ipermetropia comporta invece che i raggi luminosi provenienti da oggetti a grande distanza vengono focalizzati **dietro la retina**, generalmente a causa di una **ridotta lunghezza del bulbo oculare**.\\
Questo disturbo e generalmente compensato dal meccanismo autonomo dell’accomodazione, in cui attraverso la contrazione del cristallino permette di creare sulla retina immagini a fuoco di oggetti posti in lontananza.

### Astigmatismo
L’astigmatismo provoca una visione sfocata per l’incapacità del sistema ottico di mettere l’immagine a fuoco a causa di irregolarità della curvatura della cornea o del cristallino.




## Adattamento visivo
### Brillanza
La brillanza è l’intensità percepita dal sistema visivo umano, calcolata come una funzione logaritmica dell'intensità luminosa della luce incidente sull'occhio.\\
Il sistema visivo umano non funziona simultaneamente sull'intera gamma dei livelli di intensità, ma modifica la sua sensibilità passando attraverso diversi *livelli di adattamento* all'intensità della luce.

### Adattamento visivo
L'adattamento visivo è il processo con cui l’occhio modifica il suo stato adattandosi all'ultima sollecitazione luminosa; l’occhio è in grado di adattarsi sia al buio che, nel caso opposto, alla luce.\\
In entrambi i casi si possono osservare una fase transitoria (poco più di un secondo) e una fase lenta (anche diverse decine di minuti); maggiore è la differenza tra il livello iniziale e finale di intensità luminosa, maggiore sarà il tempo necessario all'adattamento.

> La fase transitoria è generalmente caratterizzata da una forte perdita di sensibilità di pochi secondi, causato da una *iperpolarizzazione massiva* dei foto-ricettori in caso di passaggio da buio a luce o da una loro *inibizione* in caso di passaggio da luce a buio.\\
In determinate condizioni ambientali e ad un certo livello di adattamento, la gamma dei livelli di intensità che l'occhio può discriminare è limitato in quanto al di sotto di un certo livello, nessuno stimolo produce una sensazione diversa dal nero, mentre al di sopra di un altro, gli stimoli spostano semplicemente il livello di adattamento verso valori più grandi.\\

Nella figura sotto possiamo notare il cosiddetto *ginocchio della curva* di adattamento.

<a title="Copyright to telescope-optics.net;https://www.telescope-optics.net/eye_intensity_response.htm&gt;" href="https://www.telescope-optics.net/eye_intensity_response.htm"><img width="512" alt="Eye response to light intensity" src="https://www.telescope-optics.net/images/response.PNG"></a>

> Generalmente, l'adattamento alla luce è normalmente più rapido rispetto all'adattamento al buio, a causa dei tempi di adattamento di coni (7 minuti circa) e bastoncelli (60 minuti circa).


### Irradianza e radianza
La **irradianza** è la quantità di luce che entra a contatto con una superficie ed è calcolabile mediante la seguente
$$E = \frac{d\Phi}{d\,A_0}$$

La **radianza**, invece,  è la quantità di luce emessa da una superficie che può essere ricevuta da un sistema ottico puntato su quella superficie e caratterizzato da un'apertura equivalente all'angolo solido preso in considerazione.


### Radianza spettrale
La *radianza spettrale* considera una singola frequenza o lunghezza d’onda, mentre la radianza considera l'insieme di tutte le emissioni, equivalente all'integrale di tutte le radianze spettrali.\\
Se il sistema ottico preso in considerazione coincide con l’occhio umano, la radianza rappresenta una buona stima della brillantezza della superficie di un oggetto.

### Luminanza
La luminanza è definita come il rapporto tra l’intensità luminose emessa da una sorgente verso una superficie perpendicolare e l’area della superficie stessa, rappresentando una radianza spettrale pesata attraverso la curva di sensibilità dell’HVS sull’intero spettro visibile.

### Chiarezza (brillanza)
La chiarezza o brillanza è considerata come una misura percettiva della sensazione soggettiva non misurabile prodotta dalla luce, che può essere stimata attraverso esperimenti psicofisici.

### Contrasto
Il contrasto è un fenomeno legato alle differenze di luminosità tra le parti di una scena, in base all'ampiezza delle variazioni di illuminazione.\\
Nella fattispecie la percezione dell'osservatore varia (in particolare migliora, ovvero riesce meglio a discernere le differenze di luminosità) all'aumentare dell'ampiezza delle variazioni di illuminazioni.

### Rapporto di Weber
Il rapporto di Weber rappresenta la variazione delle illuminazioni che il soggetto è capace di percepire nel 50\% delle ripetizione dell'esperimento.\\

> Piccoli valori di questo indice significano una buona capacità di discernimento.

La capacità di discriminazione aumenta al crescere dell'illuminazione dello s fondo con crescita diversa per visione fotopica e scotopica.\\
In particolare, un *indice di contrasto* tra un oggetto è il suo sfondo può essere calcolato come il rapporto tra la differenza dei loro livelli di luminosità e il livello di intensità dello sfondo
$$C = \frac{L_0 - L_S}{L_S}$$

Dunque, la luminosità percepita da un osservatore non è solo funzione dell'intensità ma questa è influenzata da altri fenomeni
- **contrasto simultaneo**. Il contesto contribuisce alla determinazione della luminosità percepita in una regione;
- **illusioni ottiche**. L'occhio può essere ingannato da caratteristiche dell'immagine desumendo informazioni errate o inesistenti.
Secondo la definizione data da **{Michelson}, il contrasto può essere calcolato come
$$C = \frac{I_{\text{MAX}}-I_{\text{MIN}}}{I_{\text{MAX}}+I_{\text{MAX}}} = \frac{I_{\text{MAX}}-I_{\text{MIN}}}{2\,I_{\text{MEZZO}}}$$

Una immagine monocromatica e reale può essere caratterizzata come la distribuzione spaziale dell'energia radiante prodotta da una sorgente luminosa
$$f= f(x, y, \lambda, t)$$

L'immagine effettivamente percepita o acquisita è la $f$ modificata dalla risposta dell'osservatore o del traduttore tipicamente secondo una media temporale e una media rispetto alle varie lunghezze d'onda.\\
L'immagine può quindi essere caratterizzata come una distribuzione bidimensionale di intensità 
$$f= f(x, y)$$