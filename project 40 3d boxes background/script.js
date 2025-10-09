const container = document.querySelector(".container");
const magic = document.querySelector("button");
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const el = document.createElement("div");
    el.classList.add("box");
    el.style.backgroundPosition = `-${j * 125}px -${i * 125}px`;
    container.appendChild(el);
  }
}
magic.addEventListener("click", () => {
  container.classList.toggle("big");
});
