import TodoList from './todoList';
import Todo from './todo';
import Projects from './projects';
import Project from './project';

const projects = new Projects();
projects.listProjects();
const todoList = new TodoList();
todoList.listTodos();

const clearFields = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
  });
};

const validTodo = (fields) => {
  let valid = true;
  const divErrors = document.querySelector('.todo-errors');
  divErrors.innerHTML = '';
  fields.forEach(field => {
    if (!field.value.length) {
      const error = document.createElement('p');
      error.setAttribute('class', 'help is-danger');
      error.innerHTML = `${field.name} can't be empty`;
      divErrors.appendChild(error);
      divErrors.setAttribute('style', 'border: 2px solid red');
      valid = valid && false;
    }
  });
  return valid;
};

const createTodo = (event) => {
  event.preventDefault();
  const project = document.querySelector('.project');
  const title = document.querySelector('.todo-title');
  const description = document.querySelector('.description');
  const priority = document.querySelector('.priority');
  const dueDate = document.querySelector('.due-date');
  if (validTodo([project, title, description, priority, dueDate])) {
    const todo = new Todo(false, project.value, title.value, description.value,
      dueDate.value, priority.value, false);
    todo.card();
    todoList.addTodo(todo);

    clearFields();
  }
};

const addOptions = (value) => {
  const select = document.querySelector('.project');
  const option = document.createElement('option');
  option.setAttribute('value', value);
  option.text = value;
  select.add(option);
};

const refreshProjects = () => {
  const select = document.querySelector('.project');
  select.innerHTML = '';
  projects.myProjects.map(p => addOptions(p.name));
};

const hideModal = () => {
  const modalClose = document.querySelector('.modal');
  modalClose.setAttribute('class', 'modal');
};

const activeModal = () => {
  const modalClose = document.querySelector('.modal');
  modalClose.setAttribute('class', 'modal is-active');
};

const addProject = () => {
  const projectName = document.querySelector('.project-name');

  if (!projectName.value.length) {
    const divErrors = document.querySelector('.project-errors');
    divErrors.innerHTML = '';
    const error = document.createElement('p');
    error.setAttribute('class', 'help is-danger');
    error.innerHTML = "Project name can't be empty";
    divErrors.setAttribute('style', 'border: 2px solid red');
    divErrors.appendChild(error);
  } else {
    const projectColor = document.querySelector('.project-color');
    const project = new Project(projectName.value, projectColor.value);
    projects.addProject(project);
    addOptions(project.name);

    hideModal();
  }
};

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
