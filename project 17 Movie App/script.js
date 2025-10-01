const apiKey = "74b43a25d15b1e6f4e82f78a9a9f55fa";
const container = document.querySelector(".movie-container");
async function initialLoad() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    {
      headers: {
        Accept: "application/json", // same as curl -H
      },
    }
  );
  const obj = await response.json();
  const movies = obj.results;
  container.innerHTML = "";
  container.classList.remove("flex");
  movies.forEach((movie) => {
    loadMovie(movie);
  });
}
initialLoad();
function loadMovie(obj) {
  const image = obj.poster_path;
  const description = obj.overview;
  const rating = obj.vote_average.toFixed(1);
  const title = obj.original_title;
  let ratingColor = "";
  if (rating > 8) ratingColor = "lightgreen";
  else if (rating > 5) ratingColor = "orange";
  else ratingColor = "red";
  const display = document.createElement("div");
  display.classList.add("movie");
  display.innerHTML = `
    <div class='image-container'>
      <img src='https://image.tmdb.org/t/p/w500${image}'>
    </div>
    <div class='info-container'>
      <h4>${title}</h4>
      <p style='color:${ratingColor}'>${rating}</p>
    </div>
    <div class='description-container'>
      ${description}
    </div>
  `;
  container.appendChild(display);
}
