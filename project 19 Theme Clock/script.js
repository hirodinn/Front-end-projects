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
  hourContainer.style.transform = `rotate(${(hour + minute / 60) * 30 - 90}deg)`;

  timeContainer.innerText = `${hour} : ${minute < 10 ? "0"+minute : minute} ${
    hour >= 12 ? "PM" : "AM"
  }`;
}, 1000);
function initialLoad() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  secondContainer.style.transform = `rotate(${second * 6 - 90}deg)`;
  minuteContainer.style.transform = `rotate(${minute * 6 - 90}deg)`;
  hourContainer.style.transform = `rotate(${(hour + minute / 60) * 30 - 90}deg)`;

  timeContainer.innerText = `${hour} : ${minute < 10 ? "0" + minute : minute} ${
    hour >= 12 ? "PM" : "AM"
  }`;

  const formatted = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
  });
  const day = now.getDate();
  date.innerHTML = `${formatted} <span>${day}</span>`;

  console.log(now.toString());
}

initialLoad();

