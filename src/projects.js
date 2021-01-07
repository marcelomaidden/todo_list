import Project from './project';

const main = document.querySelector('main');

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
    const box = document.createElement('div');
    box.setAttribute('class', `box ${project}`);
    box.setAttribute('style', `background-color:${color}`);
    main.appendChild(box);
  }

  listProjects() {
    this.myProjects.map(project => {
      return Projects.createCard(project.name, project.color);
    });
  }
}

export default Projects;