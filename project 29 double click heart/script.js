const image = document.querySelector(".image-container");
const text = document.querySelector("h4 span");

let like = 0;
let clicked = false;
let key;

image.addEventListener("click", (e) => {
  if (clicked) {
    // Double click
    const x = e.offsetX;
    const y = e.offsetY;

    like++;
    text.innerText = like;

    // create a NEW heart each time
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;

    image.appendChild(heart);

    // remove heart after animation
    setTimeout(() => heart.remove(), 1000);

    clicked = false;
    if (key) clearTimeout(key);
  } else {
    // single click
    clicked = true;
    key = setTimeout(() => {
      clicked = false;
    }, 800);
  }
});

