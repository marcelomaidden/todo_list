import TodoList from './todoList'
import Todo from './todo';

describe('Todo list', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it('Creates a todo list object', () => {
    expect(todoList).toBeInstanceOf(TodoList)
  });

  it('Add todo on myTodos array', () => {
    let todo = new Todo('Jest', '#FFF');
    todoList.addTodo(todo);
    expect(todoList.myTodos).toEqual(expect.arrayContaining([todo]))
  });

  it('Remove todo from myTodos array', () => {
    let todo = new Todo('Jest', '#FFF');
    todoList.addTodo(todo);
    todoList.remove(todo.id);
    expect(todoList.myTodos).toEqual(expect.arrayContaining([]))
  })

  it('Test listTodos method', () => {
    expect(todoList.listTodos()).toBe(undefined)
  })
})