const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
];
const listitems = document.querySelectorAll("li");
const imageContainer = document.querySelector(".image-container");
listitems.forEach((list, i) => {
  list.addEventListener("click", () => {
    changeImage(Number(i));
  });
});
function changeImage(i) {
  listitems.forEach((list) => {
    list.classList.remove("active");
  });
  listitems[i].classList.add("active");
  imageContainer.style.backgroundImage = `url("${images[i]}")`;
}
changeImage(0);
