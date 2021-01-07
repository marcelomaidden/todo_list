class Project {
  constructor(name, color) {
    name = name.split(' ').join('-');
    this.name = name;
    this.color = color;
  }
}

export default Project;