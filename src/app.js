import { filterTodo, filterOption } from "./jobs/filterTodo";
import { addTodo, todoButton, todoList } from "./jobs/addTodo";
import { taskClick } from "./jobs/taskClick";

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", taskClick);
filterOption.addEventListener("change", filterTodo);
