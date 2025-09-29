const container = document.querySelector(".container");
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    container.classList.toggle("active");
  });
});
