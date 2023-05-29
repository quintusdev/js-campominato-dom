// Variabile per tracciare se una mina è stata colpita
let mineColpite = false;

// Funzione per disabilitare il click sui quadrati
function disableSquareClick() {
  const quadrati = document.getElementsByClassName('quadratogen');
  for (let i = 0; i < quadrati.length; i++) {
    const quadrato = quadrati[i];
    quadrato.removeEventListener('click', handleSquareClick);
    quadrato.classList.add('disabled');
  }
}

// Funzione per mostrare tutte le mine nella griglia dopo aver cliccato su una mina
function revealAllMines() {
  const quadrati = document.getElementsByClassName('quadratogen');
  for (let i = 0; i < quadrati.length; i++) {
    const quadrato = quadrati[i];
    if (quadrato.isMine) {
      quadrato.classList.add('mine');
    }
    if (!quadrato.isRevealed) {
      quadrato.isRevealed = true;
      quadrato.classList.add('revealed');
    }
  }
}

// Funzione per gestire il click su un quadrato
function handleSquareClick(quadrato) {
  if (!quadrato.isRevealed && !mineColpite) {
    quadrato.isRevealed = true;
    quadrato.classList.add('revealed');
    score++;
    document.getElementById('score').innerText = 'Punteggio: ' + score;
  } else if (quadrato.isMine) {
    disableSquareClick();
    revealAllMines();
    mineColpite = true;
    document.getElementById('score').innerText = 'Hai Perso! :( Punti totali: ' + score;
  }

  const numNonMine = difficultyMap[selectElement.value] - 16;
    if (score === numNonMine) {
      setTimeout(function() {
        document.getElementById('score').innerText = 'Hai Vinto! Punti totale: ' + score;
        disableSquareClick();
        mineColpite = true;
      }, 0);
    }
}

// Funzione per creare il quadrato
function createSquare(className, text) {
  let quadrato = document.createElement('div');
  quadrato.className = className;
  quadrato.innerText = text;

  quadrato.isMine = false;
  quadrato.isRevealed = false;

  quadrato.addEventListener('click', function() {
    handleSquareClick(quadrato);
  });

  return quadrato;
}

// Funzione per creare la griglia di gioco
function createGrid(difficulty) {
  const gridSize = difficultyMap[difficulty];
  const className = 'quadratogen ' + (gridSize === 100 ? 'quadrato' : gridSize === 81 ? 'quadratodifn' : 'quadratodifd');
  const griglia = document.getElementById('griglia');

  griglia.innerHTML = '';

  const mineIndex = generateMineIndex(gridSize, 16);

  for (let i = 0; i < gridSize; i++) {
    let quadrato = createSquare(className, i + 1);
    quadrato.isMine = mineIndex.includes(i);
    quadrato.isRevealed = false;

    quadrato.addEventListener('click', function() {
      handleSquareClick(quadrato);
    });

    griglia.appendChild(quadrato);
  }
}

// Funzione per gestire il click su un quadrato
function handleSquareClick(quadrato) {
  if (!quadrato.isRevealed && !mineColpite) {
    quadrato.isRevealed = true;
    quadrato.classList.add('revealed');
    score++;
    document.getElementById('score').innerText = 'Punteggio: ' + score;

    if (quadrato.isMine) {
      disableSquareClick();
      revealAllMines();
      mineColpite = true;
      document.getElementById('score').innerText = 'Hai Perso! :( Punti totali: ' + score;
    } else if (score === (difficultyMap[selectElement.value] - 16)) {
      disableSquareClick();
      mineColpite = true;
      document.getElementById('score').innerText = 'Hai Vinto! Punti totali: ' + score;
    }
  }
}

// Funzione per disabilitare il click sui quadrati
function disableSquareClick() {
  const quadrati = document.getElementsByClassName('quadratogen');
  for (let i = 0; i < quadrati.length; i++) {
    const quadrato = quadrati[i];
    quadrato.removeEventListener('click', function() {
      handleSquareClick(quadrato);
    });
    quadrato.classList.add('disabled');
  }
}

// Funzione per mostrare tutte le mine nella griglia dopo aver cliccato su una mina
function revealAllMines() {
  const quadrati = document.getElementsByClassName('quadratogen');
  for (let i = 0; i < quadrati.length; i++) {
    const quadrato = quadrati[i];
    if (quadrato.isMine) {
      quadrato.classList.add('mine');
    }
    quadrato.isRevealed = true;
    quadrato.classList.add('revealed');
  }
}

// Funzione per generare gli indici delle mine sulla griglia
function generateMineIndex(gridSize, numMines) {
  const mineIndex = [];
  while (mineIndex.length < numMines) {
    const index = Math.floor(Math.random() * gridSize);
    if (!mineIndex.includes(index)) {
      mineIndex.push(index);
    }
  }
  return mineIndex;
}

// Mappa delle dimensioni della griglia in base alla difficoltà
const difficultyMap = { 'Facile': 100, 'Normale': 81, 'Difficile': 49 };

// Variabile per il punteggio
let score = 0;

// Recupero gli elementi dalla pagina
const selectElement = document.getElementById('difficulty');
const griglia = document.getElementById('griglia');
const btn = document.getElementById('btn');
const newGameBtn = document.getElementById('new_game');

// Evento click del bottone
btn.addEventListener('click', function() {
  const difficulty = selectElement.value;
  createGrid(difficulty);
});

// Evento click del bottone Nuova Partita
newGameBtn.addEventListener('click', function() {
  griglia.innerHTML = '';
  score = 0;
  document.getElementById('score').innerText = 'Punteggio: 0';
  mineColpite = false;
});
