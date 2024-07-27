import { createContext, useState } from "react";
import { Todo } from "../libs/types";

type TodoContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleCompleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Log in to add more than 3 todos!");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = function (id: number) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleCompleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
