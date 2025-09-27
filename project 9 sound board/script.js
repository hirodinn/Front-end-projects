const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    removeSounds();
    document.querySelector(`.${button.innerText}`).play();
  });
});
function removeSounds() {
  document.querySelectorAll("audio").forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
