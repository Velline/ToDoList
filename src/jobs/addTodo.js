const todoInput = document.querySelector(".todo-input");
export const todoButton = document.querySelector(".todo-button");
export const todoList = document.querySelector(".todo-list");

//Function to create the todo list
export function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  //Make sure to not create empty tasks
  if (todoInput.value != "") {
    // Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Finished task button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    //Delete task button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //Append to list div
    todoList.appendChild(todoDiv);

    //Clear input field
    todoInput.value = "";
  }
}
