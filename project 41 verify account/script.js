let current = 0;
let focus = true;
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (
      e.target.value !== " " &&
      (Number(e.target.value) || Number(e.target.value) === 0)
    ) {
      if (current === 5) {
        window.location.reload();
      } else {
        inputs[current].classList.add("valid");
        inputs[current].setAttribute("readonly", "true");
        current++;
        makeFocus(current);
      }
    } else {
      inputs[current].value = "";
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      if (current !== 0) {
        inputs[current].setAttribute("readonly", "true");
        inputs[current].classList.remove("valid");
        current--;
        inputs[current].removeAttribute("readonly");
        makeFocus(current);
        inputs[current].value = "";
      }
    }
  });
});

function makeFocus(i) {
  inputs[i].removeAttribute("readonly");
  inputs[i].focus();
}
makeFocus(0);

