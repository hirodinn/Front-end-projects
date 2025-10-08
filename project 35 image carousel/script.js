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

