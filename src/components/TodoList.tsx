import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../libs/hooks";

export default function TodoList() {
  const { handleCompleteTodo, handleDeleteTodo, todos } = useTodosContext();

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
          className={`${
            todo.isCompleted ? "line-through text-[#ccc]" : ""
          } truncate ...`}
        >
          {todo.text}
        </span>

        <DeleteButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            handleDeleteTodo(todo.id);
          }}
        />
      </li>
    );
  });

  //
  return (
    <ul className="overflow-y-auto">
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold text-gray-500">
          Start by adding a todo!
        </li>
      )}
      {renderedTodos}
    </ul>
  );
}
