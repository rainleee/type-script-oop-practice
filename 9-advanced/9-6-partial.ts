{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldToUpdate: Partial<ToDo>): ToDo {
    return {
      ...todo,
      ...fieldToUpdate,
    };
  }

  const todo: ToDo = {
    title: 'ts',
    description: 'hello world',
    label: 'minwoo',
    priority: 'high',
  };

  const updateTodoProps = updateTodo(todo, { title: 'js' });

  console.log(updateTodoProps);

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, 'title' | 'description'>;

  const todo2: TodoPreview = {
    title: 'Clean room',
    description: 'dsad',
    // completed: false,
  };

  todo2;
}
