const container = document.querySelector(".container");
for (let i = 0; i < 500; i++) {
  const btn = document.createElement("button");
  container.appendChild(btn);
}
const colors = [
  "violet",
  "red",
  "green",
  "white",
  "blue",
  "lightblue",
  "yellow",
  "orange",
  "cyan",
  "brown",
];
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    const color = colors[Math.floor(Math.random() * 10)];
    button.style.backgroundColor = color;
    button.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "rgb(29, 29, 29)";
    button.style.boxShadow = "0 0 2px #000";
  });
});
