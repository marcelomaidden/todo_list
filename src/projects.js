import Project from './project';

class Projects {
  constructor() {
    if (localStorage.myProjects) {
      this.myProjects = JSON.parse(localStorage.myProjects || '[]');
    } else {
      const defaultProject = new Project('default', 'hsl(204, 86%, 53%)');
      this.myProjects = [];
      this.myProjects.push(defaultProject);
      this.setStorage();
    }

    this.setStorage = this.setStorage.bind(this);
  }

  setStorage() {
    localStorage.setItem('myProjects', JSON.stringify(this.myProjects));
  }

  static createCard(project, color) {
    const main = document.querySelector('main');
    const box = document.createElement('div');
    box.setAttribute('class', `box ${project}`);
    box.setAttribute('style', `background-color:${color}`);
    const div = document.createElement('div');
    const name = document.createElement('strong');
    name.innerText = project.split('-').join(' ');
    div.appendChild(name);
    box.appendChild(div);
    main.appendChild(box);
  }

  addProject(project) {
    this.myProjects.push(project);
    this.setStorage();
    Projects.createCard(project.name, project.color);
  }

  listProjects() {
    this.myProjects.map(project => Projects.createCard(project.name, project.color));
  }
}

export default Projects;