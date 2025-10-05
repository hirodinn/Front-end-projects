const button = document.querySelector(".show-notification");
const notification = document.querySelector(".notification-container");
const colors = [
  "red",
  "green",
  "orange",
  "orangered",
  "black",
  "purple",
  "blue",
];
const numbers = ["one", "two", "three", "four", "five"];
button.addEventListener("click", () => {
  const element = document.createElement("div");
  element.innerText = `Message ${numbers[Math.floor(Math.random() * 5)]}`;
  element.style.color = colors[Math.floor(Math.random() * 7)];
  element.classList.add("notification");
  notification.appendChild(element);
  setTimeout(() => {
    notification.removeChild(element);
  }, 4000);
});
