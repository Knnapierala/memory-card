const cards = document.querySelectorAll('.game-card');

function swichCard() {
  this.classList.toggle('swiched')
}

cards.forEach(card => card.addEventListener('click', swichCard))

