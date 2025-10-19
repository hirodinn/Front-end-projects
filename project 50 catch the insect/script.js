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

const maxX = 1400;
const maxY = 600;

function returnRandomposition() {
  return [Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY)];
}

function addEventForInsects() {
  document.querySelectorAll(".insect").forEach((insect) => {
    insect.addEventListener("click", () => {
      gamePage.removeChild(insect);
      score++;
      updateScore();
      addInsect();
      addInsect();
      addEventForInsects();
    });
  });
}

function addInsect() {
  const el1 = document.createElement("div");
  el1.classList.add("insect");
  el1.style.backgroundImage = `url(${insectChoice})`;
  const position = returnRandomposition();
  el1.style.left = `${position[0]}px`;
  el1.style.top = `${position[1]}px`;
  gamePage.appendChild(el1);
}

function updateScore() {
  if (score === 20) {
    const el = document.createElement("div");
    el.classList.add("warning");
    el.innerHTML =
      "<h3>Are you annoyed yet?</h3><h3>you are playing an impossible game!!</h3>";
    gamePage.appendChild(el);
  }
  gamePage.querySelector(".score").innerText = `Score: ${score}`;
}

