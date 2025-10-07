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

function addEventForEdit() {
  const editButton = document.querySelectorAll(".edit");
  editButton.forEach((edit, i) => {
    edit.addEventListener("click", () => {
      if (current) {
        note[i] = document.querySelector("textarea").value;
        localStorage.setItem("note", JSON.stringify(note));
        loadNotes();
      } else {
        let text = edit.parentNode.parentNode.querySelector(".note").innerText;
        edit.parentNode.parentNode.querySelector(
          ".note"
        ).innerHTML = `<textarea rows='20'>${text}</textarea>`;
        const textarea = document.querySelector("textarea");
        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
        current = true;
      }
    });
  });
}

function addEventForDelete() {
  const editButton = document.querySelectorAll(".delete");
  editButton.forEach((del, i) => {
    del.addEventListener("click", () => {
      note.splice(i, 1);
      localStorage.setItem("note", JSON.stringify(note));
      loadNotes();
    });
  });
}

function loadNotes() {
  container.innerHTML = "";
  note.forEach((element) => {
    const el = document.createElement("div");
    el.classList.add("note-container");
    el.innerHTML = `<div class="header">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="note">
        ${element}
      </div>`;
    container.appendChild(el);
  });
  addEventForEdit();
  addEventForDelete();
  current = false;
}

function addAnotherNote() {
  note.push("");
  const el = document.createElement("div");
  el.classList.add("note-container");
  el.innerHTML = `<div class="header">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="note">
        <textarea rows = '20'></textarea>
      </div>`;
  container.appendChild(el);
  document.querySelector("textarea").focus();

  current = true;
}

loadNotes();

