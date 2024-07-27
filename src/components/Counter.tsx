export default function Counter({ todos }) {
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
