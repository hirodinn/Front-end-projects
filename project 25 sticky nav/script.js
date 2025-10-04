const imageDiv = document.querySelector(".image-div");
const nav = document.querySelector(".nav");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("triggered");
//   else nav.classList.remove("triggered");
// });
window.addEventListener("scroll", () => {
  const triggerBottom = (window.innerHeight / 8) * 5;
  console.log(
    triggerBottom,
    document.querySelector("main").getBoundingClientRect().top
  );
  if (triggerBottom > imageDiv.getBoundingClientRect().bottom)
    nav.classList.add("triggered");
  else nav.classList.remove("triggered");
});
