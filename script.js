const startDate = new Date("2024-06-23T00:00:00");
const timerElement = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  const msInSec = 1000;
  const msInMin = msInSec * 60;
  const msInHour = msInMin * 60;
  const msInDay = msInHour * 24;
  const msInMonth = msInDay * 30.44;

  const months = Math.floor(diff / msInMonth);
  diff %= msInMonth;

  const days = Math.floor(diff / msInDay);
  diff %= msInDay;

  const hours = Math.floor(diff / msInHour);
  diff %= msInHour;

  const minutes = Math.floor(diff / msInMin);
  diff %= msInMin;

  const seconds = Math.floor(diff / msInSec);

  timerElement.innerText = `⭐  ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos  ⭐`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Carrossel de imagens com transição suave e automática
const images = ["img01.jpeg", "img03.jpeg", "img04.jpeg", "img05.jpeg", "img06.jpeg", "img07.jpeg"];
let currentImage = 0;
const imageElement = document.getElementById("carousel-image");

function showImage(index) {
  imageElement.classList.add("fade-out");

  setTimeout(() => {
    imageElement.src = images[index];
    imageElement.classList.remove("fade-out");
  }, 700);
}

document.querySelector(".next").onclick = () => {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
};

document.querySelector(".prev").onclick = () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
};

setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}, 3000);

// Corações flutuando
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.innerText = "💖";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 800);
