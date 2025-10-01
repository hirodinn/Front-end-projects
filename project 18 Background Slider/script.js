let currentIndex = 1;
const total = 5;
const left = document.getElementById("left");
const right = document.getElementById("right");
const sliders = document.querySelectorAll(".slide");
const container = document.querySelector("slider-container");
const body = document.body;
body.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight") {
    forRight();
  } else if (event.key === "ArrowLeft") {
    forLeft();
  }
});
left.addEventListener("click", () => forLeft);
function forLeft() {
  if (currentIndex === 1) currentIndex = total;
  else currentIndex--;
  change();
}
right.addEventListener("click", () => forRight);
function forRight() {
  if (currentIndex === total) currentIndex = 1;
  else currentIndex++;
  change();
}
function change() {
  sliders.forEach((slider) => {
    slider.classList.remove("active");
  });
  const active = document.querySelector(
    `.slider-container .slide:nth-of-type(${currentIndex})`
  );
  active.classList.add("active");
  body.style.backgroundImage = active.style.backgroundImage;
}
change();
