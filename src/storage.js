import Project from './project';

class Storage {
  constructor() {
    if (localStorage.myProjects) {
      this.myProjects = JSON.parse(localStorage.myProjects || '[]');
    } else {
      const defaultProject = new Project('default', 'hsl(204, 86%, 53%)');
      this.myProjects = [];
      this.myProjects.push(defaultProject);
    }

    if (localStorage.myTodos) {
      this.myTodos = JSON.parse(localStorage.myTodos || '[]');
    } else {
      this.myTodos = [];
    }
    this.setStorage = this.setStorage.bind(this);
    this.setStorage();
    this.removeTodo = this.removeTodo.bind(this);
    this.findTodo = this.findTodo.bind(this);
  }

  setStorage() {
    localStorage.setItem('myProjects', JSON.stringify(this.myProjects));
    localStorage.setItem('myTodos', JSON.stringify(this.myTodos));
  }

  findTodo(id) {
    return this.myTodos.filter(todo => todo.id === id);
  }

  removeTodo(id) {
    const todos = this.myTodos.filter(todo => todo.id !== id);

    this.myTodos = todos;
    this.setStorage();
  }

  addTodo(todo) {
    this.myTodos.push(todo);
    this.setStorage();
  }

  addProject(project) {
    this.myProjects.push(project);
    this.setStorage();
  }
}

export default Storage;