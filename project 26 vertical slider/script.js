const up = document.querySelector(".up");
const down = document.querySelector(".down");
const infos = document.querySelectorAll(".info");
const images = document.querySelectorAll(".image");
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
  infos.forEach((info, i) => {
    if (i < currentIndex) info.style.top = `${(currentIndex - i) * 100}vh`;
    else if (i == currentIndex) info.style.top = "0";
    else info.style.top = `-${(i - currentIndex) * 100}vh`;
    console.log(info.style.top);
  });
}
function updateImage() {
  images.forEach((image, i) => {
    if (i < currentIndex) image.style.bottom = `${(currentIndex - i) * 100}vh`;
    else if (i == currentIndex) image.style.bottom = "0";
    else image.style.bottom = `-${(i - currentIndex) * 100}vh`;
    console.log(image.style.bottom);
  });
}
updateInfo();
updateImage();
