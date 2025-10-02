const hourContainer = document.querySelector(".hour");
const minuteContainer = document.querySelector(".minute");
const secondContainer = document.querySelector(".second");
const timeContainer = document.querySelector(".time");
const button = document.querySelector("button");
const date = document.querySelector(".day");
button.addEventListener("click", () => {
  button.innerText =
    button.innerText === "Dark Mode" ? "Light Mode" : "Dark Mode";
  document.body.classList.toggle("dark");
});
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  secondContainer.style.transform = `rotate(${second * 6 - 90}deg)`;
  minuteContainer.style.transform = `rotate(${minute * 6 - 90}deg)`;
  hourContainer.style.transform = `rotate(${
    (hour + minute / 60) * 30 - 90
  }deg)`;
  timeContainer.innerText = `${hour} : ${minute} ${hour >= 12 ? "PM" : "AM"}`;
}, 1000);
function initialLoad() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  secondContainer.style.transform = `rotate(${second * 6 - 90}deg)`;
  minuteContainer.style.transform = `rotate(${minute * 6 - 90}deg)`;
  hourContainer.style.transform = `rotate(${
    (hour + minute / 60) * 30 - 90
  }deg)`;
  timeContainer.innerText = `${hour} : ${minute < 10 ? "0" + minute : minute} ${
    hour >= 12 ? "PM" : "AM"
  }`;
  let formatted = now.toLocaleDateString("en-US", {
    weekday: "long", // Sunday
    month: "long", // September
  });
  let day = now.getDate();
  date.innerHTML = `${formatted} <span>${day}</span>`; // "Sunday, September 29"

  console.log(now.toString());
}
initialLoad();
