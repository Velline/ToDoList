(function () {
  'use strict';

  const todoInput = document.querySelector(".todo-input");
  const todoButton = document.querySelector(".todo-button");
  const todoList = document.querySelector(".todo-list");

  //Function to create the todo list
  function addTodo(event) {
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

  const filterOption = document.querySelector(".filter-todo");

  //Filter function
  function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    });
  }

  //Function for checking and deleting tasks
  function taskClick(e) {
    const item = e.target;

    //Delete task
    if (item.classList[0] === "delete-btn") {
      const todo = item.parentElement;
      //Delete animation
      todo.classList.add("deleteAnimation");
      todo.addEventListener("transitionend", function () {
        todo.remove();
      });
    }
    //Mark task as completed
    else if (item.classList[0] === "completed-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  }

  //Event listeners
  todoButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", taskClick);
  filterOption.addEventListener("change", filterTodo);

}());
