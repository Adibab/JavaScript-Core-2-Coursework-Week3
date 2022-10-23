function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let todo of todos) {
    let newListItem = listItem(todo);
    list.appendChild(newListItem);
  }
}

/* completing task via check button. After clicking the check button a line will go through the task*/

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

function listItem(item) {
  let list = document.getElementById("todo-list");
  let liEle = document.createElement("li");
  liEle.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let textNode = document.createTextNode(item.task);
  liEle.appendChild(textNode);

  let spanEle = document.createElement("span");
  spanEle.className = "badge bg-primary rounded-pill";

  liEle.appendChild(spanEle);

  const checkBtn = document.createElement("i");
  checkBtn.setAttribute("class", "fa fa-check");
  checkBtn.setAttribute("aria-hidden", "true");
  checkBtn.addEventListener("click", completeTask);
  function completeTask() {
    liEle.classList.toggle("line-through");
  }
  spanEle.appendChild(checkBtn);

  let trashBtn = document.createElement("i");
  trashBtn.setAttribute("class", "fa fa-trash");
  trashBtn.setAttribute("aria-hidden", "true");
  trashBtn.addEventListener("click", removeTask);
  function removeTask() {
    list.removeChild(liEle);
  }
  spanEle.appendChild(trashBtn);

  return liEle;
}

function addNewTodo(event) {
  let list = document.getElementById("todo-list");
  //  get the input field value
  const input = document.getElementById("todoInput");

  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  const value = input.value;
  let items;
  if (value) {
    items = listItem(value);
    list.appendChild(items);
    input.value = "";
  }

  let newTodoItem = listItem({ task: input.value, completed: false });
  list.appendChild(newTodoItem);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
