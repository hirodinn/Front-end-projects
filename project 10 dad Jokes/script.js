const jokeEl = document.querySelector(".joke");
const getAnotherButton = document.querySelector(".get-another-joke");
function renderRandomJoke(joke) {
  jokeEl.innerText = joke;
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
getAnotherButton.addEventListener("click", () => {
  loadJoke();
});
