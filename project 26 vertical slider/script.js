const up = document.querySelector(".up");
const down = document.querySelector(".down");
const infos = document.querySelectorAll(".info");
let currentIndex = 0;
up.addEventListener("click", () => {
  if (currentIndex == 3) currentIndex = 0;
  else currentIndex++;
  updateInfo();
});
down.addEventListener("click", () => {
  if (currentIndex == 0) currentIndex = 3;
  else currentIndex--;
  updateInfo();
});
function updateInfo() {
  infos.forEach((info, i) => {
    if (i < currentIndex) info.style.top = `${(currentIndex - i) * 100}vh`;
    else if (i == currentIndex) info.style.top = "0";
    else info.style.top = `-${(i - currentIndex) * 100}vh`;
    console.log(info.style.top);
  });
}
updateInfo();
