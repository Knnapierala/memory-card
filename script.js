const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;
let lockBoard = false;

let firstCard, secondCard

function swichCard() {
  if (lockBoard) return;
  this.classList.toggle('swiched')

  if (!hasFlippedCard) {
    //first card
    hasFlippedCard = true;
    firstCard = this;

    return
  } else {
    //second card
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }
}

function checkForMatch(){
  let isMatch = firstCard.dataset.shape === secondCard.dataset.shape;

  isMatch ? matchFound() : unflipCards();
}

function matchFound() {
  firstCard.removeEventListener('click', swichCard)
  secondCard.removeEventListener('click', swichCard)
}

function unflipCards(){
  lockBoard = true;

  setTimeout(() => { 
    firstCard.classList.remove('swiched');
    secondCard.classList.remove('swiched');

    lockBoard = false;
  }, 1500);
}

cards.forEach(card => card.addEventListener('click', swichCard))

