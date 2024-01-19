const myForm = document.querySelector(".todo-form");

function createItem(e) {
  e.preventDefault();
  const todoInput = document.querySelector(".todo-input");
  const todoValue = todoInput.value;
  const todolist = document.querySelector(".todo-list");
  const listItem = document.createElement("li");

  listItem.innerHTML = todoValue;

  todoInput.value = "";

  if (todoValue !== "") {
    todolist.appendChild(listItem);
  }
}
