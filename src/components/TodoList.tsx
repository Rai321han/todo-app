import DeleteButton from "./DeleteButton";

export default function TodoList({
  todos,
  handleCompleteTodo,
  handleDeleteTodo,
}) {
  const renderedTodos = todos.map((todo) => {
    return (
      <li
        onClick={() => {
          handleCompleteTodo(todo.id);
        }}
        key={todo.id}
        className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
      >
        <span
          className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
        >
          {todo.text}
        </span>

        <DeleteButton
          onClick={(event) => {
            event.stopPropagation();
            handleDeleteTodo(todo.id);
          }}
        />
      </li>
    );
  });
  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold text-gray-500">
          Start by adding a todo!
        </li>
      )}
      {renderedTodos}
    </ul>
  );
}
