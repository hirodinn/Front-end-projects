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

