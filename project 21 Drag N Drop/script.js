const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Add drag event listeners to the fill element
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Add drag event listeners to all empty containers
empties.forEach((empty) => {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
  empty.addEventListener("dragover", dragOver);
});

function dragStart() {
  console.log("drag start");
  this.classList.add("dragging");
}

function dragEnd() {
  console.log("drag end");
  this.classList.remove("dragging");
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hover");
}

function dragLeave(e) {
  e.preventDefault();
  this.classList.remove("hover");
}

function dragDrop(e) {
  e.preventDefault();
  this.classList.remove("hover");

  // Move the dragged element into this empty
  const dragged = document.querySelector(".dragging");
  if (dragged) {
    this.appendChild(dragged);
  }
}

function dragOver(e) {
  e.preventDefault(); // Needed to allow drop
}
