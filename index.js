const card = document.querySelector(".card");
const rightCard = document.querySelector(".right-card");

// 負責控制卡片的開合
card.addEventListener("click", function () {
  card.classList.toggle("open");
  rightCard.classList.toggle("closed");
});
