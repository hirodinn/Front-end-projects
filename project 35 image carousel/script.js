let current = 0;
let imageContainer = document.querySelector(".image-container");
let key;

function setInt() {
  key = setInterval(() => {
    current++;
    if (current === 9) current = 0;
    imageContainer.style.left = `-${current * 500}px`;
  }, 2000);
}

setInt();

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  clearInterval(key);
  current--;
  if (current === -1) current = 8;
  imageContainer.style.left = `-${current * 500}px`;
  setInt();
});

next.addEventListener("click", () => {
  clearInterval(key);
  current++;
  if (current === 9) current = 0;
  imageContainer.style.left = `-${current * 500}px`;
  setInt();
});

