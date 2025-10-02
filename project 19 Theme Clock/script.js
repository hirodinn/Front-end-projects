const hourContainer = document.querySelector(".hour");
const minuteContainer = document.querySelector(".minute");
const secondContainer = document.querySelector(".second");
const timeContainer = document.querySelector(".time");
const button = document.querySelector("button");
const date = document.querySelector(".day");

button.addEventListener("click", () => {
  button.innerText =
    button.innerText === "Dark Mode" ? "Light Mode" : "Dark Mode";
  document.body.classList.toggle("dark");
});

