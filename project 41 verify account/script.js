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

