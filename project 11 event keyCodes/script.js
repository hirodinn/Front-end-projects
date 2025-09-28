window.addEventListener("keydown", (event) => {
  changeLabel(event.key, event.keyCode, event.code);
});
function changeLabel(eventKey, eventKeyCode, eventCode) {
  document.querySelector(".button-container").classList.remove("hidden");
  document.querySelector(".info").classList.add("hidden");
  document.querySelector(".button-1").innerText = eventKey;
  document.querySelector(".button-2").innerText = eventKeyCode;
  document.querySelector(".button-3").innerText = eventCode;
}
