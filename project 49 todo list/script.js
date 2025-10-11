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

