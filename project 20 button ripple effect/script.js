document.querySelector(".container").addEventListener("click", (event) => {
  document.querySelector(".container").innerHTML = "Click Me";
  const x = event.offsetX;
  const y = event.offsetY;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.top = `${y}px`;
  ripple.style.left = `${x}px`;
  // setTimeout(() => {
  //   document.querySelector(".container").classList.remove("active");
  // }, 300);
  document.querySelector(".container").appendChild(ripple);
});
