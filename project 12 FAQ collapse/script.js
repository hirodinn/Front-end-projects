const answers = [
  "They make up everything",
  "Nobody knows.",
  "Inheritance.",
  "Ten-tickles!",
  "Depends on who are you asking.",
];

document.querySelectorAll(".show-button").forEach((button, i) => {
  button.addEventListener("click", () => {
    console.log(i);
    document.querySelector(`.question-${i}`).classList.add("opened");
    addAnswer(i);
  });
});
document.querySelectorAll(".hide-button").forEach((button, i) => {
  button.addEventListener("click", () => {
    document.querySelector(`.question-${i}`).classList.remove("opened");
    removeAnswer(i);
  });
});
function addAnswer(i) {
  const target = document.querySelector(`.question-${i} .answer`);
  target.innerText = answers[i];
  document.querySelector(`.question-${i} .show-button`).classList.add("hidden");
  document
    .querySelector(`.question-${i} .hide-button`)
    .classList.remove("hidden");
}
function removeAnswer(i) {
  const target = document.querySelector(`.question-${i} .answer`);
  target.innerText = "";
  document.querySelector(`.question-${i} .hide-button`).classList.add("hidden");
  document
    .querySelector(`.question-${i} .show-button`)
    .classList.remove("hidden");
}
console.log(document.querySelector(`.question-${1} .answer`).innerText);
