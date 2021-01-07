import Storage from './storage';

const storage = new Storage();
const main = document.querySelector('main');

class Projects {
  createCard(project, color) {
    const box = document.createElement('div');
    box.setAttribute('class', `box ${project}`);
    box.setAttribute('style', `background-color:${color}`);
    const name = document.createElement('div');
    name.innerText = project;
    box.appendChild(name);
    main.appendChild(box);
  }

  addProject(project) {
    storage.addProject(project);
    this.createCard(project.name, project.color);
  }

  listProjects() {
    storage.myProjects.map(project => this.createCard(project.name, project.color));
  }
}

export default Projects;