const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;
let firstCard, secondCard

function swichCard() {
  this.classList.toggle('swiched')

  if (!hasFlippedCard) {
    //first card
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //second card
    hasFlippedCard = false;
    secondCard = this;
  }
    if (firstCard.dataset.shape === secondCard.dataset.shape ) {
      firstCard.removeEventListener('click', swichCard)
      secondCard.removeEventListener('click', swichCard)
    } else {
      setTimeout(() => { 
      firstCard.classList.remove('switched');
      secondCard.classList.remove('switched');
    }, 1500);
    }

}
cards.forEach(card => card.addEventListener('click', swichCard))

