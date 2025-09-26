let percent = document.querySelector(".percentage");
let i = 0;
document.body.style.setProperty("--blur", "0px");
document.body.style.setProperty("--opacity", "0");
let key = setInterval(() => {
  i++;
  percent.innerHTML = `${i}%`;

  // gradually reduce blur (13px → 0px)
  let blurValue = 13 - (13 * i) / 100;
  document.body.style.setProperty("--blur", `${blurValue}px`);

  // gradually reduce opacity (1 → 0)
  let opacityValue = 1 - i / 100;
  document.body.style.setProperty("--opacity", opacityValue);

  if (i === 100) clearInterval(key);
}, 30);
