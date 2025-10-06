const container = document.querySelector(".container");
const input = document.getElementById("text-input");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    loadRepository(input.value);
    console.log("runned");
  }
});

