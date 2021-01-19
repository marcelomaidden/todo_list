const { TestScheduler } = require("jest");
import Project from './project';

test('Create a project object', () => {
  let project = new Project('Tests in JavaScript', '#FFF');
  expect(project).toBeInstanceOf(Project);
});

test("Throw error if Project's name and color were provided", () => {
  expect(() => {
    new Project();
  }).toThrow("Cannot read property 'split' of undefined");
});