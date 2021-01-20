import Todo from './todo'

describe('Todo tests', (id=false) => {
  let todo;
  beforeEach(() => {
    todo = new Todo(id, 'project', 'title', 'description', 'dueDate', 'priority', 'complete');
  });

  it('Creates a todo object', () => {
    expect(todo).toBeInstanceOf(Todo)
  });

  it('Creates a todo with an id', (id=1) => {
    expect(todo.id).toEqual(1)
  });

  it('Expect card method to throw error because it depends on DOM', () => {
    expect(() => {
      todo.card()
    }).toThrow()
  });

  it('Return color depending on the priority', () => {
    expect(Todo.priorityColor('4')).toEqual('hsl(141, 53%, 53%)')
  })

  it('Delete throws an error because depends on the DOM card', () => {
    expect(() => {
      Todo.deleteTodo(1)
    }).toThrow()
  })
})
