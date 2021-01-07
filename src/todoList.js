import Storage from './storage';
import Todo from './todo';

const storage = new Storage();

class TodoList {
  static list() {
    const refreshIds = [];
    storage.myTodos.forEach(todo => {
      const {
        project, title, description, dueDate, priority
      } = todo;
      const newTodo = new Todo(project, title, description, dueDate, priority);
      newTodo.createCard();
      refreshIds.push(newTodo);
    });
    storage.myTodos = refreshIds;
    storage.setStorage();
  }
}

export default TodoList;