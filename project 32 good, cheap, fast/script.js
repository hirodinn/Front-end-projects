const live = [false, false, false];
const sliderContainer = document.querySelectorAll(".slider-Container");

sliderContainer.forEach((slider, i) => {
  slider.addEventListener("click", () => {
    if (live[i]) {
      kill(i);
    } else {
      live[i] = true;
      displayResult(i);
    }
  });
});function displayResult(i) {
  let alive = 0;
  for (let j = 0; j < live.length; j++) {
    if (i === j) continue;
    if (live[j]) alive++;
  }
  if (alive === 0 || alive === 1) {
    sliderContainer[i].querySelector(".slide").classList.add("move");
    sliderContainer[i].classList.add("change-color");
  } else {
    let removeIndex;
    if (i === 1) removeIndex = 2;
    else if (i === 0) removeIndex = 1;
    else removeIndex = 0;
    sliderContainer[i].querySelector(".slide").classList.add("move");
    sliderContainer[i].classList.add("change-color");
    kill(removeIndex);
  }
}

function kill(i) {
  sliderContainer[i].querySelector(".slide").classList.remove("move");
  sliderContainer[i].classList.remove("change-color");
  live[i] = false;
}

