const main = document.querySelector(".container main");
const input = document.querySelector("header input");
let data;

async function initialLoad() {
  const response = await fetch("https://randomuser.me/api/1.4/?results=100");
  const result = await response.json();
  data = result.results;
  console.log(data);
  loadData(data);
}

initialLoad();

function loadData(data) {
  main.innerHTML = "";
  data.forEach((d) => {
    const el = document.createElement("div");
    el.classList.add("each-container");
    el.innerHTML = `
          <img src="${d.picture.large}" />
          <div class="info">
            <h3>${d.name.first} ${d.name.last}</h3>
            <h4>${d.location.city}, ${d.location.country}</h4>
          </div>
        `;
    main.appendChild(el);
  });
}

