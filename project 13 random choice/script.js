let buttons = [];
const textarea = document.querySelector(".textarea");
textarea.addEventListener("keyup", (event) => {
  makeButtons(event.target.value);
  if (event.key === "Enter") {
    let random;
    let counter = 0;
    const key = setInterval(() => {
      random = Math.floor(Math.random() * buttons.length);
      document.querySelectorAll(".button").forEach((button) => {
        button.classList.remove("bleach");
      });
      document
        .querySelector(`.button-container .button:nth-of-type(${random + 1})`)
        .classList.add("bleach");
      counter++;
      if (counter === 10) {
        textarea.value = "";
        buttons = [];
        clearInterval(key);
      }
    }, 50);
  }
});
// textarea.addEventListener("input", () => {
//   makeButtons(textarea.value);
// });
function makeButtons(text) {
  document.querySelector(".button-container").innerHTML = "";
  buttons = [];
  text
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .forEach((text) => {
      buttons.push(text);
      const button = document.createElement("button");
      button.classList.add("button");
      button.innerText = text;
      document.querySelector(".button-container").appendChild(button);
    });
}
