const first = document.getElementById("firstset");
const sec = document.getElementById("secondset");
const pre = document.getElementById("scroll-left");
const next = document.getElementById("scroll-right");

const cards = [first, sec];
let currentcard = 0;

// Initially show only the first set
showSlide(cards[currentcard]);

next.addEventListener("click", () => {
  if (currentcard < cards.length - 1) {
    currentcard += 1;
  } else {
    currentcard = 0;
  }
  showSlide(cards[currentcard]);
});

pre.addEventListener("click", () => {
  if (currentcard > 0) {
    currentcard -= 1;
  } else {
    currentcard = cards.length - 1;
  }
  showSlide(cards[currentcard]);
});

function showSlide(cardToShow) {
  cards.forEach((card) => (card.style.display = "none")); // hide all
  cardToShow.style.display = "flex"; // show selected one
}
