const container = document.querySelector(".container");
for (let i = 0; i < 15; i++) {
  const el = document.createElement("img");
  el.classList.add("image-container");
  el.src = `https://picsum.photos/id/${returnRandom()}/300/200`;
  container.appendChild(el);
}
function returnRandom() {
  return Math.floor(Math.random() * 1024);
}
