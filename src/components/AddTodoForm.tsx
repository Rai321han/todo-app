import Button from "./Button";
import { useTodosContext } from "../libs/hooks";
import { useState } from "react";

export default function AddTodoForm() {
  const { handleAddTodo } = useTodosContext();
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="p-[16px] h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px block w-full"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
