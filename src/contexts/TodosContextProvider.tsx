import { createContext, useEffect, useState } from "react";
import { Todo } from "../libs/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

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

const getInitialTodos = function () {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else return [];
};

export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {
  const { isAuthenticated } = useKindeAuth();
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
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

  //side effect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //fetching data from API
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const response = await fetch(
  //       "https://bytegrad.com/course-assets/api/todos"
  //     );
  //     const todos = await response.json();
  //     setTodos(todos);
  //   };
  //   fetchTodos();
  // }, []);

  //
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
