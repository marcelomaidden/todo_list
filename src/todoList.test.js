import TodoList from './todoList'

describe('Todo list', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList()
  });

  it('Creates a todo list object', () => {
    expect(todoList).toBeInstanceOf(TodoList)
  })
})