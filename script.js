
const startDate = new Date("2024-06-23T00:00:00"); // início do relacionamento
const timerElement = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  const msInSec = 1000;
  const msInMin = msInSec * 60;
  const msInHour = msInMin * 60;
  const msInDay = msInHour * 24;
  const msInMonth = msInDay * 30.44; // média

  const months = Math.floor(diff / msInMonth);
  diff %= msInMonth;

  const days = Math.floor(diff / msInDay);
  diff %= msInDay;

  const hours = Math.floor(diff / msInHour);
  diff %= msInHour;

  const minutes = Math.floor(diff / msInMin);
  diff %= msInMin;

  const seconds = Math.floor(diff / msInSec);

  timerElement.innerText = `${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos juntos 💖`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Carrossel de imagens
const images = ["img01.jpeg", "img02.jpeg", "img03.jpeg", "img04.jpeg", "img05.jpeg", "img06.jpeg", "img07.jpeg"];
let currentImage = 0;
const imageElement = document.getElementById("carousel-image");

document.querySelector(".next").onclick = () => {
  currentImage = (currentImage + 1) % images.length;
  imageElement.src = images[currentImage];
};

document.querySelector(".prev").onclick = () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  imageElement.src = images[currentImage];
};
