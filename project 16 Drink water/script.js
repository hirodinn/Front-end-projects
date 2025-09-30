const options = document.querySelectorAll(".option");
options.forEach((option, i) => {
  option.addEventListener("click", () => {
    selectOptionsTill(i);
  });
});
function selectOptionsTill(n) {
  if (options[n].classList.contains("selected")) {
    if (
      n === 7 ||
      !options[n].nextElementSibling.classList.contains("selected")
    )
      n--;
  }
  options.forEach((option, i) => {
    if (i <= n) option.classList.add("selected");
    else option.classList.remove("selected");
  });
  changeHeight(n + 1);
}

function changeHeight(n) {
  const filledHeight = 12.5 * n;
  const unfilledHeight = 12.5 * (8 - n);
  document.querySelector(".unfilled").style.height = `${unfilledHeight}%`;
  document.querySelector(".unfilled h3").innerText = `${
    (2 * unfilledHeight) / 100
  }L`;
  document.querySelector(".filled").style.height = `${filledHeight}%`;
  document.querySelector(".filled h3").innerText = `${filledHeight}%`;
}
