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
});

