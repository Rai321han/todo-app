import { useTodosContext } from "../libs/hooks";

export default function Counter() {
  const { todos } = useTodosContext();
  const totalTodos = todos.length;

  let completedTodos = 0;
  todos.forEach((todo) => {
    if (todo.isCompleted) completedTodos++;
  });

  return (
    <p>
      <b>{completedTodos}</b> / {totalTodos} todos completed
    </p>
  );
}
