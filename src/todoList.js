/* eslint-disable import/no-cycle */
import Todo from './todo';

class TodoList {
  constructor() {
    if (localStorage.myTodos) {
      this.myTodos = JSON.parse(localStorage.myTodos || '[]');
    } else {
      this.myTodos = [];
    }

    this.setStorage = this.setStorage.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
  }

  setStorage() {
    localStorage.setItem('myTodos', JSON.stringify(this.myTodos));
  }

  remove(id) {
    const newTodos = [];
    this.myTodos.forEach(todo => {
      if (todo.id !== id) newTodos.push(todo);
    });
    this.myTodos = newTodos;
    this.setStorage();
  }

  addTodo(todo) {
    this.myTodos.push(todo);
    this.setStorage();
  }

  listTodos() {
    this.myTodos.forEach(todo => {
      const {
        id, project, title, description, priority, dueDate, complete,
      } = todo;
      const newTodo = new Todo(id, project, title, description, dueDate, priority, complete);
      newTodo.card();
    });
  }
}

export default TodoList;