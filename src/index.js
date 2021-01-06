import Todo from './todo';

function clearFields() {
  let inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = "";
  })
}

function createTodo(event){
  event.preventDefault();
  let project = document.querySelector('.project');
  let title = document.querySelector('.todo-title');  
  let description = document.querySelector('.description');
  let priority = document.querySelector('.priority');
  let dueDate = document.querySelector('.due-date');
  let todo = new Todo(project.value, title.value, description.value, 
    dueDate.value, priority.value);  

  clearFields();
}

let submit_button = document.querySelector('.submit');
submit_button.addEventListener("click", createTodo, false);

let cancel_button = document.querySelector('.cancel');
cancel_button.addEventListener("click", clearFields, false);