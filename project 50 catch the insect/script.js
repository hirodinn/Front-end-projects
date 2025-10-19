// First Page Script
const firstPageButton = document.querySelector(".play");
firstPageButton.addEventListener("click", () => {
  document.body.style.transform = "translateY(-100vh)";
});

// Second page Script
let startTime;
let insectChoice;
document.querySelectorAll(".choose-insect-btn").forEach((insect) => {
  insect.addEventListener("click", () => {
    insectChoice = insect.querySelector("img").src;
    console.log(insectChoice);
    document.body.style.transform = "translateY(-200vh)";
    start();
    startTime = Date.now();
    addInsect();
    addEventForInsects();
  });
});

// Third page Script
const gamePage = document.querySelector(".third-page");
const timeElement = document.querySelector(".timer");
let score = 0;

function startTimer() {
  let elapsed = 0;
  const now = Date.now();
  const diff = now - startTime + elapsed; // total time
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  // format mm:ss
  timeElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function start() {
  setInterval(startTimer, 1000);
}

