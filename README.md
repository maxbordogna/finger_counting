SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 2: Antologia a due mani  

# Conteggio con le mani
Autore: Massimo Bordogna  
[MediaPipe demo-ES6](https://ixd-supsi.github.io/2023/esempi/mp_hands/es6/1_landmarks)

Breve video dimostrativo<br>
LINK VIDEO

## Introduzione e tema
La consegna consisteva nell'effettuare una ricerca su un argomento dato legato al tema generale delle mani, nel mio caso si trattava
del "conteggio con le mani". Dopo aver fatto una ricerca generale per ottenere le informazioni 
di base, ho stilato la lista dei tre argomenti più importanti da trattare:
<br>
<b>storia<br>
diversità culturali<br>
sistema binario</b>
<br><br>
Ho quindi proseguito con l'approfondire i tre capitoli, in particolare svariati documenti trovati online 
di diverse ricerche universitarie mi hanno permesso di ottenere le informazioni necessarie.
<br><br>
Oltre alla ricerca è stata inserito un piccolo sistema interattivo che permette (a dipendenza della tipologia di 
conteggio selezionata) di riconoscere il numero che l'utente mostra alla webcam. 
<br><br>
Infine una catalogazione delle principali metodologie di conteggio con le mani racchiude le 
informazioni essenziali per comprenderle e metterle in pratica.

## Riferimenti progettuali
Non ho sfruttato un modello preciso come riferimento progettuale, ho riflettuto più che altro sui diversi contenuti 
da inserire e le loro esigenze di impaginazione e creazione.

L'aspetto più importante è stato quello di scegliere una modalità di presentazione che valorizzasse ed esaltasse 
il contenuto e la funzionalità degli argomenti trattati.



## Design dell’interfraccia e modalià di interazione
Tutte le scelte sono state effettuate per aumentare l'ergonomia del sito attraverso semplicità, chiarezza e coerenza. 
Tutte le pagine del sito web presentano la medesima impostazione: navigazione in alto a sinistra, footer in basso e contenuti nel centro sinistra della finestra.
Non è stato fatto uso del colore, lo sfondo è sempre bianco, il testo è sempre nero e le immagini sono in scala di grigi. 


Il bottone per tornare al sito web del corso è posto nella sezione con le informazioni del progetto "Antologia a due mani" nel footer in basso a sinistra.<br>


L'unica pagina all'interno del sito sviluppata in modo differente, è quella di interazione. Essa presenta 
una navigazione secondaria che permette di selezionare la tipologia di metodo di conteggio desiderato. L'interazione avviene attraverso la webcam che, 
riprendendo e trasmettendo quanto avviene di fronte al computer, permette all'utente di interagire direttamente con la piattaforma. 
Una legenda esemplificativa sul metodo di conteggio selezionato è posta sulla sinistra della pagina e gli elementi interattivi al centro. 
Dal momento che una mano viene riconosciuta, la scritta scompare e, se il gesto corretto è rappresentato attraverso la mano, il numero corrispondente compare al centro della schermata.

[<img src="img_readme/interazione_1.png" width="200" alt="Interazione base">]()[<img src="img_readme/interazione_2.png" width="200" alt="Interazione in corso">]()[<img src="img_readme/catalogo.png" width="200" alt="Catalogazione">]()[<img src="img_readme/binario.png" width="200" alt="Sistema binario">]()
<br>
<i>Schermate di: interazione base, interazione in corso, catalogazione, sistema binario </i>
<br>


## Tecnologia usata
L'intero sito è strutturato su un sistema di 10 colonne, le quali vengono sfruttate per l'organizzazione dei contenuti all'interno delle varie pagine.
Qui di seguito un esempio di suddivisione in colonne nel CSS:
```CSS
header,
section,
footer {
	display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
	font-weight: 400;
}```

```JavaScript
//funzione occhi mappati
function pupillaFermaSx(pfSxX, pfSxY) {
	let varX = map (pfSxX, 0, 640, -20, +20)
    let varY = map (pfSxY, 0, 480, -20, +20)

	noStroke()
	fill(0)
	ellipse (pfSxX + varX, pfSxY + varY, 35, 35)
}

//----------------------------------------------
//esempio p5js modificato ed utilizzato per i capelli
//il codice realmente utilizzato è eccessivamente lungo per essere inserito
let s1, s2;
let gravity = 9.0;
let mass = 2.0;

function setup() {
  createCanvas(720, 400);
  fill(255, 126);
  // Inputs: x, y, mass, gravity
  s1 = new Spring2D(0.0, width / 2, mass, gravity);
  s2 = new Spring2D(0.0, width / 2, mass, gravity);
}

function draw() {
  background(0);
  s1.update(mouseX, mouseY);
  s1.display(mouseX, mouseY);
  s2.update(s1.x, s1.y);
  s2.display(s1.x, s1.y);
}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 0; // The x- and y-axis velocities
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 30;
  this.stiffness = 0.2;
  this.damping = 0.7;

  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    stroke(255);
    line(this.x, this.y, nx, ny);
  }
}
```

## Target e contesto d’uso
Non avendo costruito l’elaborato pensando in anticipo ad un target e ad un contesto specifico è 
difficile individuarne uno perfettamente calzante. Ovviamente andrebbe quindi adeguato al suo utilizzo 
finale, potrei però vedere la marionetta applicata ad un contesto espositivo quale magari una fiera 
o un’esposizione in cui i visitatori possono provare allo stand di riferimento la marionetta. 
Oppure potrebbe essere utilizzata all’interno di un sito web come interazione con l’utente stuzzicandone 
l’interesse e creando un legame di interazione attiva.

[<img src="doc/munari.jpg" width="300" alt="Supplemento al dizionario italiano">]()
