const password = document.getElementById("password");
password.addEventListener("input", (e) => {
  const n = 40 - password.value.length * 5;
  document.body.style.backdropFilter = `blur(${n > 0 ? n : 0}px)`;
});
