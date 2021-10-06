{
  type ToDo = {
    title: string;
    description: string;
  };

  /** only display func
   * @param {ToDo} instance
   */
  function display(todo: Readonly<ToDo>) {
    // return todo;
  }

  const todo: ToDo = {
    title: 'hey',
    description: 'minwoo!',
  };
  const todo2 = display(todo);

  //-?: optional이 아닌 절대적으로 필요한값들로 만들어줌.
  type Required<T> = {
    [P in keyof T]-?: T[P];
  };
}
