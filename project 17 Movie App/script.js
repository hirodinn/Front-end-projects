const apiKey = "74b43a25d15b1e6f4e82f78a9a9f55fa";
const container = document.querySelector(".movie-container");
const search = document.querySelector("input");
search.addEventListener("input", () => {
  if (search.value === "") initialLoad();
});
search.addEventListener("keyup", (event) => {
  if (event.key === "Enter") loadByKeyWord(search.value);
});
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
async function loadByKeyWord(keyword) {
  // 1️⃣ Search for keyword
  const keywordRes = await fetch(
    `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${encodeURIComponent(
      keyword
    )}`
  );
  const keywordObj = await keywordRes.json();
  container.innerHTML = "";
  container.classList.remove("flex");
  if (!keywordObj.results.length) {
    container.innerHTML = "<h1 style='color:red'>Keyword Not Found</h1>";
    container.classList.add("flex");
    return console.log("Keyword not found");
  }

  const keywordId = keywordObj.results[0].id; // take first match

  // 2️⃣ Get movies for keyword ID
  const moviesRes = await fetch(
    `https://api.themoviedb.org/3/keyword/${keywordId}/movies?api_key=${apiKey}`
  );
  const moviesObj = await moviesRes.json();
  const movieIds = moviesObj.results.map((movie) => movie.id);

  // 3️⃣ Fetch full movie objects
  const movies = await Promise.all(movieIds.map((id) => getMovieById(id)));

  movies.forEach((movie) => {
    loadMovie(movie);
  });
}

async function getMovieById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const res = await fetch(url);
  return await res.json();
}
