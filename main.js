const carousel = document.querySelector('.product-carousel');
const cards = carousel.querySelectorAll('.product-card');

let index = 0;

function getStep() {
  const gap = 20;
  return cards[0].offsetWidth + gap;
}

setInterval(() => {
  const step = getStep();

  index++;

  // loop BEFORE it overflows visible area
  if (index > cards.length - 3) {
    index = 0;
  }

  carousel.scrollTo({
    left: index * step,
    behavior: 'smooth'
  });

}, 2500);