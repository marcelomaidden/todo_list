import Todo from './todo';

function clearFields() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
  });
}

function createTodo(event) {
  event.preventDefault();
  const project = document.querySelector('.project');
  const title = document.querySelector('.todo-title');
  const description = document.querySelector('.description');
  const priority = document.querySelector('.priority');
  const dueDate = document.querySelector('.due-date');
  const todo = new Todo(project.value, title.value, description.value,
    dueDate.value, priority.value);
  todo.createCard();

  clearFields();
}

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', createTodo, false);

const cancelButton = document.querySelector('.cancel');
cancelButton.addEventListener('click', clearFields, false);