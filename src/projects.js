import Project from './project';

let main = document.querySelector('main');

class Projects {
  constructor() {
    if (localStorage.myProjects) {
      this.myProjects = JSON.parse(localStorage.myProjects || '[]');
    } else {
      let defaultProject = new Project('default', 'hsl(204, 86%, 53%)');
      this.myProjects = [];
      this.myProjects.push(defaultProject);
      this.setStorage();
    }

    this.setStorage = this.setStorage.bind(this);

    this.listProjects();
  }

  setStorage() {
    localStorage.setItem('myProjects', JSON.stringify(this.myProjects));
  }

  listProjects() {
    this.myProjects.forEach(project => {
      var box = document.createElement('div');
      box.setAttribute('class', `box ${project.name}`);
      box.setAttribute('style', `background-color:${project.color}`)
      main.appendChild(box);
    })
  }
}

export default Projects;