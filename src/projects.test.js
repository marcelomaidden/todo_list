import Projects from './projects'
import Project from './project'
let projects = new Projects();
test('Create a Projects object', () => {
  expect(projects).toBeInstanceOf(Projects);
})

test('Newly created project owns default project', () => {
  const expected = [new Project('default', 'hsl(204, 86%, 53%)')]
  expect(projects.myProjects).toEqual(expect.arrayContaining(expected));
})

