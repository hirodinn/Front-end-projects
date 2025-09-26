const body = document.querySelector("body");

document
  .querySelector(".play-station-container")
  .addEventListener("mouseenter", () => {
    removeClass();
    body.classList.add("expand-play-station");
  });
document.querySelector(".xbox-container").addEventListener("mouseover", () => {
  removeClass();
  body.classList.add("expand-xbox");
});
body.addEventListener("mouseout", () => {
  removeClass();
});
function removeClass() {
  while (body.classList.length > 0) {
    body.classList.remove(body.classList.item(0));
  }
}
