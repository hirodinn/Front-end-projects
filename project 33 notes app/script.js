const deleteButton = document.querySelector(".delete");
let current;
const note = JSON.parse(localStorage.getItem("note"));

const container = document.querySelector(".total-container");
const addToCart = document.querySelector(".add-button");

addToCart.addEventListener("click", () => {
  if (!current) {
    addAnotherNote();
    addEventForEdit();
  }
});

