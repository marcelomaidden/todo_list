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

  remove(id){
    let newTodos = [];
    this.myTodos.map(todo => {
      if(todo.id !== id)
        newTodos.push(todo);
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
      let {project, title, description, priority, dueDate} = todo;
      let newTodo = new Todo(project, title, description, priority, dueDate);
      newTodo.createCard();
    })
    
  }
}

export default TodoList;