/* eslint-disable import/no-cycle */
import TodoList from './todoList';

class Todo {
  constructor(id = false, project, title, description, dueDate, priority, complete) {
    if (!id) this.id = Todo.id;
    else {
      Todo.id = id;
      this.id = Todo.id;
    }

    this.project = project;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.card = this.card.bind(this);
    this.complete = complete;

    Todo.id += 1;
  }

  static priorityColor(priority) {
    switch (priority) {
      case '1':
        return 'hsl(0, 0%, 100%)';
      case '2':
        return 'hsl(171, 100%, 41%)';
      case '3':
        return 'hsl(204, 86%, 53%)';
      case '4':
        return 'hsl(141, 53%, 53%)';
      case '5':
        return 'hsl(348, 100%, 61%)';
      default:
        return 'hsl(0, 0%, 100%)';
    }
  }

  static deleteTodo(todoId) {
    const todos = new TodoList();
    const todo = todos.myTodos.filter(item => item.id === todoId)[0];
    const project = document.querySelector(`.${todo.project}`);
    const id = `.todo${todoId}`;
    const card = document.querySelector(id);
    project.removeChild(card);
    todos.remove(todoId);
  }

  card() {
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
    title.innerText = `Title: ${this.title}`;

    const description = document.createElement('p');
    description.setAttribute('class', 'subtitle is-6');
    description.innerText = `Description: ${this.description}`;

    const priority = document.createElement('p');
    priority.setAttribute('class', 'subtitle is-6');
    priority.innerText = `Priority: ${this.priority}`;


    const dueDate = document.createElement('p');
    dueDate.setAttribute('class', 'subtitle is-6');
    dueDate.innerText = `Due date: ${this.dueDate}`;

    const labelCheck = document.createElement('label');
    labelCheck.innerText = ' Mark as complete: ';
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', this.id);
    if (this.complete === true) {
      check.setAttribute('checked', 'true');
      card.setAttribute('style', 'background-color: hsl(0, 0%, 86%)');
    } else card.setAttribute('style', `background-color: ${Todo.priorityColor(this.priority)}`);

    check.addEventListener('click', () => {
      const todos = new TodoList();
      const todo = todos.myTodos.filter(item => item.id === this.id)[0];
      const cardCheck = document.querySelector(`.todo${todo.id}`);
      if (todo.complete === true) {
        cardCheck.setAttribute('style', `background-color: ${Todo.priorityColor(todo.priority)}`);
        todo.complete = false;
      } else {
        todo.complete = true;
        cardCheck.setAttribute('style', 'background-color: hsl(0, 0%, 86%)');
      }

      const todoCopy = todo;
      todos.remove(todo.id);
      todos.addTodo(todoCopy);
    }, false);

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
    mediaContent.appendChild(labelCheck);
    mediaContent.appendChild(check);
    media.appendChild(mediaContent);
    cardContent.appendChild(media);
    card.appendChild(cardContent);
    const project = document.querySelector(`.${this.project}`);
    project.appendChild(card);
  }
}

Todo.id = 0;

export default Todo;