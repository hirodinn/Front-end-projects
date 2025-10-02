const image = document.querySelector(".image-container");
const text = document.querySelector("h4 span");
const heart = document.querySelector(".heart");
let like = 0;
let clicked = false;
let key;
let element = document.createElement("div");
element.classList.add("heart");
element.innerText = "❤️";
image.addEventListener("click", (e) => {
  if (clicked) {
    const x = e.offsetX;
    const y = e.offsetY;
    like++;
    text.innerText = like;
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
    image.appendChild(element);
    clicked = false;
    if (key) clearTimeout(key);
  } else {
    clicked = true;
    if (image.querySelector(".heart")) image.removeChild(element);
    console.log("single click");
    key = setTimeout(() => {
      clicked = false;
    }, 800);
  }
});
