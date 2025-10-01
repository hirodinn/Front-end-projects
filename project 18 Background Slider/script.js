// const body = document.body;
// const slides = document.querySelectorAll(".slide");
// const leftBtn = document.getElementById("left");
// const rightBtn = document.getElementById("right");

// let activeSlide = 0;

// rightBtn.addEventListener("click", () => {
//   activeSlide++;

//   if (activeSlide > slides.length - 1) {
//     activeSlide = 0;
//   }

//   setBgToBody();
//   setActiveSlide();const body = document.body;
// const slides = document.querySelectorAll(".slide");
// const leftBtn = document.getElementById("left");
// const rightBtn = document.getElementById("right");

// let activeSlide = 0;

// rightBtn.addEventListener("click", () => {
//   activeSlide++;

//   if (activeSlide > slides.length - 1) {
//     activeSlide = 0;
//   }

//   setBgToBody();
//   setActiveSlide();
// });

// leftBtn.addEventListener("click", () => {
//   activeSlide--;

//   if (activeSlide < 0) {
//     activeSlide = slides.length - 1;
//   }

//   setBgToBody();
//   setActiveSlide();
// });

// setBgToBody();

// function setBgToBody() {
//   body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
// }

// function setActiveSlide() {
//   slides.forEach((slide) => slide.classList.remove("active"));

//   slides[activeSlide].classList.add("active");
// }
// });

// leftBtn.addEventListener("click", () => {
//   activeSlide--;

//   if (activeSlide < 0) {
//     activeSlide = slides.length - 1;
//   }

//   setBgToBody();
//   setActiveSlide();
// });

// setBgToBody();

// function setBgToBody() {
//   body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
// }

// function setActiveSlide() {
//   slides.forEach((slide) => slide.classList.remove("active"));

//   slides[activeSlide].classList.add("active");
// }

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
