JSnack #1
===
> Dato un elenco di utenti (nome, cognome, age) trovare gli utenti minorenni e quelli over-65.
<!-- ## Development
-  -->
---
JSnack #2
===
> Dato un elenco degli studenti di una facoltà universitaria. Ognuno degli studenti ha un nome, un cognome, un numero di matricola e la media voti.
### Bonus
- Aggiungere la foto o l'avatar dello studente e stampare tutti gli studenti con delle *card* `html` in ordine alfabetico per cognome.
<!-- ## Development
-  -->
---
JSnack #4
===
> Dato un elenco di studenti di una facoltà, di cui possediamo: Nome Completo, id e somma totale dei rispettivi voti d'esame:
---
## Milestone #1
Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti e creare una lista contenente il loro nome tutto in maiuscolo.
## Milestone #2
Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70.
## Milestone #3
Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e anche l'id con un numero superiore a 120.

## Development
- Con `.map` è stato generato un nuovo array *(newStudentList)* al cui interno sono state destrutturate le chiavi ed i relativi valori dell'array originale, aggiungendo per il *'fullName* il `toUpperCase()`;
- Con `.filter` sono stati estrapolati dapprima gli studenti la cui somma dei voti è superiore a 70 e successivamente gli studenti il cui valore numero dell'ID è superiore a 120;
- Infine con tre cicli `for-of`sono stati stampati i pagina gli output.
---
JSnack #5
===
> Creare un array di oggetti; <br>
Ogni oggetto descriverà una bicicletta da corsa con le seguenti proprietà: nome e peso; <br>
Stampare in console la bicicletta con peso minore utilizzando `destructuring` ed il `template literal`.
---
JSnack #6
===
> Creare un array di oggetti di squadre di calcio; <br>
Ogni squadra avrà diverse proprietà: *nome*, *punti*, *goal fatti*, *goal subiti*; <br>
*Nome* sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0; <br>
Generare numeri random al posto degli 0 nelle proprietà: *punti*, *goal fatti*, *goal subiti*;<br>
Usando la destrutturazione si crei un nuovo array i cui elementi contengono solo *nomi* e *punti*;<br>
Stampare il tutto in *console* e in *pagina*.