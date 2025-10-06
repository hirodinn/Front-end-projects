const container = "We Love Programming!";
const input = document.querySelector("input");
const h1 = document.querySelector("h1");
let speed = 1000;
let interval;
let currentIndex = 0;
let text = "";
function startInterval(delay) {
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    if (currentIndex >= container.length) {
      h1.innerText = "";
      currentIndex = 0;
      text = "";
    }
    text += container[currentIndex++];
    h1.innerText = text;
  }, delay);
}
input.addEventListener("input", (e) => {
  startInterval(1000 / e.target.value);
});
startInterval(1000);
