import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TodoList from "./TodoList";
import { useState } from "react";

const initialTodos = [
  { id: 1, text: "buy groceries", isCompleted: false },
  { id: 2, text: "a new project", isCompleted: true },
  { id: 3, text: "do exercise", isCompleted: false },
  { id: 4, text: "do laundry", isCompleted: false },
];

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
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

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = function (id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#F1D4B3] min-h-screen">
      <BackgroundHeading />
      <main
        className=" relative w-[900px] h-[450px] bg-white rounded-[8px]
       shadow-[0_4px_4px_rgba(0,0,0,0.08)] overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]"
      >
        <Header todos={todos} />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
        <Sidebar handleAddTodo={handleAddTodo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
