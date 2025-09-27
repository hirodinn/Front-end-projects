function renderRandomJoke(joke) {
  document.querySelector(".joke").innerText = joke;
}

async function loadJoke() {
  const textJson = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json", // same as curl -H
    },
  });
  const text = await textJson.json();
  renderRandomJoke(text.joke);
}
loadJoke();
document.querySelector(".get-another-joke").addEventListener("click", () => {
  loadJoke();
});
