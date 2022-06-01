const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;
let lockBoard = false;

let firstCard, secondCard

function swichCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.toggle('swiched')

  if (!hasFlippedCard) {
    //first card
    hasFlippedCard = true;
    firstCard = this;

    return
  } 
    //second card
    secondCard = this;

    checkForMatch();
 
}

function checkForMatch(){
  let isMatch = firstCard.dataset.shape === secondCard.dataset.shape;

  isMatch ? matchFound() : unflipCards();
}

function matchFound() {
  firstCard.removeEventListener('click', swichCard)
  secondCard.removeEventListener('click', swichCard)

  resetAll();
}

function unflipCards(){
  lockBoard = true;

  setTimeout(() => { 
    firstCard.classList.remove('swiched');
    secondCard.classList.remove('swiched');

    resetAll();
  }, 1500);
}

function resetAll() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard,secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() *12);
    card.style.order = randomPosition;
  })
})()

cards.forEach(card => card.addEventListener('click', swichCard))

