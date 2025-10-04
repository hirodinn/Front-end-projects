const imageDiv = document.querySelector(".image-div");
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("triggered");
  else nav.classList.remove("triggered");
});
