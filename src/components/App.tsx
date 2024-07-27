import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#F1D4B3] min-h-screen">
      <BackgroundHeading />
      <main
        className=" relative w-[900px] h-[450px] bg-white rounded-[8px]
       shadow-[0_4px_4px_rgba(0,0,0,0.08)] overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]"
      >
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
