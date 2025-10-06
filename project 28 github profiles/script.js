const container = document.querySelector(".container");
const input = document.getElementById("text-input");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    loadRepository(input.value);
    console.log("runned");
  }
});
async function loadRepository(username) {
  const element = document.querySelector(".response");
  element.innerHTML = "";

  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    console.error("Error:", response.status, response.statusText);
    element.innerHTML =
      "<h1 style='margin:auto;text-align:center;'>No User</h1>";
    return;
  }

  const res = await response.json();

