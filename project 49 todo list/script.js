const input = document.querySelector("input");
const todoContainer = document.querySelector(".todo-container");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log("enter is clicked");
    const todo = JSON.parse(localStorage.getItem("todo"));
    todo.push(input.value);
    input.value = "";
    localStorage.setItem("todo", JSON.stringify(todo));
    loadTodo();
  }
});

function loadTodo() {
  const todo = JSON.parse(localStorage.getItem("todo"));
  todoContainer.innerHTML = "";
  todo.forEach((t) => {
    const el = document.createElement("div");
    el.innerText = t;
    todoContainer.appendChild(el);
  });
  addEvent();
}

function addEvent() {
  const todos = todoContainer.querySelectorAll("div");

  todos.forEach((todo) => {
    todo.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  });

  todos.forEach((todo) => {
    todo.addEventListener("mouseup", (event, i) => {
      if (event.button === 0) {
        todo.classList.toggle("spoil");
      } else if (event.button === 2) {
        const t = JSON.parse(localStorage.getItem("todo"));
        t.splice(i, 1);
        localStorage.setItem("todo", JSON.stringify(t));
        loadTodo();
      }
    });
  });
}

loadTodo();

