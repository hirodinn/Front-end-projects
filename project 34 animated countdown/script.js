let counter = 2;
const container = document.querySelector(".counter");
const key = setInterval(() => {
  container.innerHTML = `<p>${counter}</p>`;
  counter--;
  if (counter === -1) {
    setTimeout(() => {
      container.innerHTML = `Go`;
    }, 1200);
    clearInterval(key);
  }
}, 1200);
document.querySelector(".reload").addEventListener("click", () => {
  window.location.reload();
});
