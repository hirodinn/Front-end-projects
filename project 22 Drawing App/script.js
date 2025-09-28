const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clearButton = document.getElementById("clear");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const input = document.getElementById("color");

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, 800, 800); // clears a part
});

let size = 20;
let color = "black";
let initialX;
let initialY;
increaseButton.addEventListener("click", () => {
  if (size === 50) return;
  size += 5;
  updateSize();
});
decreaseButton.addEventListener("click", () => {
  if (size === 5) return;
  size -= 5;
  updateSize();
});
input.addEventListener("input", (e) => {
  color = e.target.value;
});
function updateSize() {
  document.getElementById("size").innerText = size;
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
canvas.addEventListener("mousedown", (e) => {
  initialX = e.offsetX;
  initialY = e.offsetY;
  canvas.addEventListener("mousemove", paint);
});
canvas.addEventListener("mouseup", (e) => {
  initialX = undefined;
  initialY = undefined;
  canvas.removeEventListener("mousemove", paint);
});
function paint(e) {
  drawCircle(e.offsetX, e.offsetY);
  drawLine(initialX, initialY, e.offsetX, e.offsetY);
  initialX = e.offsetX;
  initialY = e.offsetY;
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
