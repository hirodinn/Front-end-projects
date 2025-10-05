const typeColors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
}

async function load() {
  const container = document.querySelector(".container");

  for (let i = 1; i <= 150; i++) {
    const data = await getPokemon(i);
    const type = data.types[0].type.name;
    const color = typeColors[type] || "#777";

    const el = document.createElement("div");
    el.classList.add("card");
    el.style.backgroundColor = color;

    el.innerHTML = `
            <div class="image-container">
              <img src="${data.sprites.front_default}" alt="${data.name}">
            </div>
            <div class="id">#${data.id.toString().padStart(3, "0")}</div>
            <div class="name">${data.name}</div>
            <div class="type">${type}</div>
          `;

    container.appendChild(el);
    await sleep(500);
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
load();
