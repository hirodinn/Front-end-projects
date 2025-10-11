const open = document.querySelector(".open-btn");
const nav = document.querySelector("nav");

open.addEventListener("click", () => {
  nav.classList.remove("hide");
  document.querySelector(".black").style.transitionDelay = `0s`;
  document.querySelector(".red").style.transitionDelay = `0.5s`;
  document.querySelector(".white").style.transitionDelay = `1s`;
});

