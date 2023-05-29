PROBLEMA: L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1. CREO UN BUTTON;
2. CREAO UN CONTENITORE DOVE INSERIRE LA GRIGLIA GENERATA;
3. RICHIAMO IL BOTTONE IN JS;
4. DEFINISCO UNA FUNZIONE CHE CREI UN QUADRATINO SINGOLO;
5. AGGIUNGO UNA FUNZIONE PER CREARE LA GRIGLIA AL CLIC DEL BOTTONE;
    5.1.- CREO UN CICLO FOR CHE CREI TANTI QUADRATI SINGOLI FINO A CREARE UNA GRIGLIA DI 10 X 10;
6. CREO UNA FUNZIONE CHE GENERI DEI NUMERI DA ASSOCIARE ALLE SINGOLE CASELLE;
7. QUANDO L'UTENTE CLICCA SULLA CASELLA, LA STESSA CAMBIA COLORE E IN CONSOLE VISUALIZZA IL NUMERO DELLA CASELLA STESSA;

PROBLEMA BONUS 1: Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
                    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
                    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
                    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

1. AGGIUNGO UNA SELECT ACCANTO AL BOTTONE;
2. INSERISCO LE TRE OPZIONI DI SCELTA NELLA SELECT;
3. CREO UN IF PER OGNI CONDIZIONE DI SCELTA;
4. GENERO LA TABELLA CON IL NUMERO DI CASELLE INDICATO IN BASE AL LIVELLO DI DIFFICOLTA';

SUPER BONUS 1 (da fare solo una volta terminato il bonus)
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.

- Utilizzo la funzione `disableSquareClick()` per disabilitare il clic sulle caselle dopo aver colpito una mina.

    1. Recupero gli elementi HTML delle caselle della griglia utilizzando la classe CSS "quadratogen".
    2. Itera su ciascun elemento casella.
    3. Rimuove l'evento di click precedentemente associato alla casella utilizzando la funzione `removeEventListener()`.
    4. Aggiunge la classe CSS "disabled" alla casella per indicare che è stata disabilitata.


SUPER BONUS 2  (da fare solo una volta terminato il bonus)
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

- Utilizzo la funzione `revealAllMines()` per mostrare tutte le mine nella griglia dopo aver colpito una mina.

    1. Recupera tutti gli elementi HTML delle caselle della griglia utilizzando la classe CSS "quadratogen".
    2. Itera su ciascun elemento casella.
    3. Se la casella rappresenta una mina (proprietà `isMine` impostata su `true`), aggiunge la classe CSS "mine" per mostrare visivamente la mina.
    4. Se la casella non è stata ancora rivelata (proprietà `isRevealed` impostata su `false`), imposta `isRevealed` su `true` e aggiunge la classe CSS "revealed" per rivelare la casella.