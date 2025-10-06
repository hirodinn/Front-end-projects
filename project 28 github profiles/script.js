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
  const repoResponse = await fetch(
    `https://api.github.com/users/${username}/repos?sort=stars&per_page=5`,
    {
      headers: { Accept: "application/vnd.github+json" },
    }
  );

  let repoData = [];
  if (repoResponse.ok) {
    repoData = await repoResponse.json();
  }

  let repos = "";
  if (repoData.length > 0) {
    repos =
      `<div class="repos">` +
      repoData
        .map(
          (repo, i) =>
            `<a href="${repo.clone_url}" target="_blank">Repo ${i + 1}: ${
              repo.name
            }</a>`
        )
        .join("<br/>") +
      `</div>`;
  } else {
    repos = `<p>No repositories found</p>`;
  }

  element.innerHTML = `
    <img src="${res.avatar_url}" alt="" />
    <div class="info-container">
      <div class="name">${res.name ?? username}</div>
      <div class="description">${res.bio ?? ""}</div>
      <div class="details">
        <p>${res.followers} Followers</p>
        <p>${res.following} Following</p>
        <p>${res.public_repos} Repos</p>
      </div>
      ${repos}
    </div>
  `;
}
