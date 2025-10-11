const open = document.querySelector(".open-btn");
const nav = document.querySelector("nav");

open.addEventListener("click", () => {
  nav.classList.remove("hide");
  document.querySelector(".black").style.transitionDelay = `0s`;
  document.querySelector(".red").style.transitionDelay = `0.5s`;
  document.querySelector(".white").style.transitionDelay = `1s`;
});

const close = document.querySelector(".close-btn");

close.addEventListener("click", () => {
  nav.classList.add("hide");
  document.querySelector(".black").style.transitionDelay = `1s`;
  document.querySelector(".red").style.transitionDelay = `0.5s`;
  document.querySelector(".white").style.transitionDelay = `0s`;
});

