const card = document.querySelector(".card");
const rightCard = document.querySelector(".right-card");

card.addEventListener("click", function () {
  card.classList.toggle("open");
  rightCard.classList.toggle("closed");
});
