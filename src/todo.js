import TodoList from "./todoList";

class Todo {
  constructor(project, title, description, dueDate, priority) {
    this.id = Todo.id
    this.project = project;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.createCard = this.createCard.bind(this);

    Todo.id += 1;
  }

  static deleteTodo(todoId) {
    let todos = new TodoList();
    const main = document.querySelector('main');
    const id = `.todo${todoId}`;
    const todo = document.querySelector(id);
    main.removeChild(todo);
    todos.deleteTodo(todoId);
  }

  createCard() {
    const card = document.createElement('div');
    card.setAttribute('class', `card todo${this.id}`);

    const cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');

    const media = document.createElement('div');
    media.setAttribute('class', 'media');

    const mediaContent = document.createElement('div');
    mediaContent.setAttribute('class', 'media-content');

    const title = document.createElement('p');
    title.setAttribute('class', 'title is-4');
    title.innerText = this.title;

    const description = document.createElement('p');
    description.setAttribute('class', 'subtitle is-6');
    description.innerText = this.description;

    const priority = document.createElement('p');
    priority.setAttribute('class', 'subtitle is-6');
    priority.innerText = this.priority;


    const dueDate = document.createElement('p');
    dueDate.setAttribute('class', 'subtitle is-6');
    dueDate.innerText = this.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'button submit is-link');
    deleteButton.setAttribute('id', this.id);
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      Todo.deleteTodo(this.id);
    });

    mediaContent.appendChild(title);
    mediaContent.appendChild(description);
    mediaContent.appendChild(priority);
    mediaContent.appendChild(dueDate);
    mediaContent.appendChild(deleteButton);
    media.appendChild(mediaContent);
    cardContent.appendChild(media);
    card.appendChild(cardContent);

    const project = document.querySelector(`.${this.project}`);
    project.appendChild(card);
  }
}

Todo.id = 0;

export default Todo;