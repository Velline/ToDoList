//Function for checking and deleting tasks
export function taskClick(e) {
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
