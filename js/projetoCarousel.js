const buttons = document.querySelectorAll('.projeto-button');
const cards = document.querySelectorAll('.projeto-card');

let currentIndex = 0;
const maxIndex = cards.length - 1;

buttons.forEach(item => {
  item.addEventListener('click', changeIndex);
});

function changeIndex() {
  if (this.classList.contains('previous')) {
    currentIndex -= 1;
  } else {
    currentIndex += 1;
  }

  fixCurrentIndex();
  centerCard();
}

function fixCurrentIndex() {
  if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  }
}

function centerCard() {
  cards.forEach(item => item.classList.remove('current'));

  const currentCard = cards[currentIndex];

  currentCard.scrollIntoView({ block: 'end', inline: 'center' });
}
