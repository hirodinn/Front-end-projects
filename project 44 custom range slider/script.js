const slider = document.getElementById("slider");
const box = document.querySelector(".box");
slider.addEventListener("input", () => {
  box.innerText = slider.value;
  box.style.left = `${slider.value}%`;
  box.style.transform = `translate(-${scale(slider.value, 0, 100, 33, 67)}%)`;
});

// initialize
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
