import Projects from './projects';
import Project from './project';

const projects = new Projects();
test('Create a Projects object', () => {
  expect(projects).toBeInstanceOf(Projects);
});

test('Newly created project owns default project', () => {
  const expected = [new Project('default', 'hsl(204, 86%, 53%)')];
  expect(projects.myProjects).toEqual(expect.arrayContaining(expected));
});

test('Add a project to myProjects', () => {
  const expected = new Project('JavaScript', 'hsl(204, 86%, 53%)');
  const defProject = new Project('default', 'hsl(204, 86%, 53%)');
  expect(() => {
    projects.addProject(expected);
  }).toThrow("Cannot read property 'appendChild' of null");

  expect(projects.myProjects).toEqual(expect.arrayContaining([defProject, expected]));
});

test('Throw error when listProjects are called', () => {
  expect(() => {
    projects.listProjects();
  }).toThrow();
});
