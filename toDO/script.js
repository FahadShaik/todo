const myForm = document.querySelector(".todo-form");

function createItem(e) {
  e.preventDefault();
  // creating and selecting the elements from the dom tree
  const todoInput = document.querySelector(".todo-input");
  const todoValue = todoInput.value;
  const todolist = document.querySelector(".todo-list");
  const listItem = document.createElement("li");
  const checkButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  //adding value from input to list of our todo
  listItem.innerHTML = todoValue;

  todoInput.value = "";

  //adding and appending the buttons to the list
  checkButton.innerHTML = "Done";
  deleteButton.innerHTML = "X";

  listItem.append(checkButton, deleteButton);

  //adding class list for adding and deleting list this is done with styling as well
  listItem.classList.add("list-items");
  checkButton.classList.add("add-btn");
  deleteButton.classList.add("delete-btn");

  deleteButton.addEventListener("click", () => {
    listItem.classList.add("remove-items");
  });

  checkButton.addEventListener("click", () => {
    listItem.classList.add("strike-through");
  });

  if (todoValue !== "") {
    todolist.appendChild(listItem);
  }
}
