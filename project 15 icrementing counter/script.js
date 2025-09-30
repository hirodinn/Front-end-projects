// const twitter = document.querySelector(".twitter-container h2");
// const youtube = document.querySelector(".youtube-container h2");
// const facebook = document.querySelector(".facebook-container h2");
// changeInnerText(5000, twitter, 25);
// changeInnerText(12000, youtube, 50);
// changeInnerText(7500, facebook, 50);
document.querySelectorAll(".container h2").forEach((h) => {
  const target = Number(h.dataset.target);
  changeInnerText(target, h, Math.ceil(target / 200));
});
function changeInnerText(maxValue, target, increment) {
  let counter = 0;
  const key = setInterval(() => {
    target.innerText = counter;
    counter += increment;
    if (counter > maxValue) {
      clearInterval(key);
      target.innerText = maxValue;
    }
  }, 1);
}
