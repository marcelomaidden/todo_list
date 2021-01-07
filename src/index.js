import TodoList from './todoList';
import Todo from './todo';
import Projects from './projects';
import Project from './project';

const projects = new Projects();
projects.listProjects();
const todoList = new TodoList();
todoList.listTodos();

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
    dueDate.value, priority.value, false);
  todo.createCard();
  todoList.addTodo(todo);

  clearFields();
}
function addOptions(value) {
  const select = document.querySelector('.project');
  const option = document.createElement('option');
  option.text = value;
  select.add(option);
}

function refreshProjects() {
  const select = document.querySelector('.project');
  select.innerHTML = '';
  projects.myProjects.map(p => addOptions(p.name));
}

function hideModal() {
  const modalClose = document.querySelector('.modal');
  modalClose.setAttribute('class', 'modal');
}

function activeModal() {
  const modalClose = document.querySelector('.modal');
  modalClose.setAttribute('class', 'modal is-active');
}

function addProject() {
  const projectName = document.querySelector('.project-name');
  const projectColor = document.querySelector('.project-color');
  const project = new Project(projectName.value, projectColor.value);
  projects.addProject(project);
  addOptions(project.name);

  hideModal();
}

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', createTodo, false);

const cancelButton = document.querySelector('.cancel');
cancelButton.addEventListener('click', clearFields, false);

const cancelProject = document.querySelector('.cancel-project');
cancelProject.addEventListener('click', hideModal, false);

const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', hideModal, false);

const modalButton = document.querySelector('.modal-button');
modalButton.addEventListener('click', activeModal, false);

const submitProject = document.querySelector('.submit-project');
submitProject.addEventListener('click', addProject, false);

refreshProjects();
