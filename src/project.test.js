const { TestScheduler } = require("jest");
test('Create a project object', () => {
  let project = new Project('Tests in JavaScript', '#FFF');
  expect(project).toBe(project);
})