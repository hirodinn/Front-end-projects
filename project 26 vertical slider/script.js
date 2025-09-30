const up = document.querySelector(".up");
const down = document.querySelector(".down");
const info = document.querySelector(".info-container");
const image = document.querySelector(".image-container");
let currentIndex = 0;
up.addEventListener("click", () => {
  if (currentIndex == 3) currentIndex = 0;
  else currentIndex++;
  updateInfo();
  updateImage();
});
down.addEventListener("click", () => {
  if (currentIndex == 0) currentIndex = 3;
  else currentIndex--;
  updateInfo();
  updateImage();
});
function updateInfo() {
  info.style.transform = `translateY(-${currentIndex * 100}vh)`;
}
function updateImage() {
  image.style.transform = `translateY(-${300 - currentIndex * 100}vh)`;
}
updateInfo();
updateImage();
