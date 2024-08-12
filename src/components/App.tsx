import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="px-5 flex flex-col justify-center items-stretch xs:items-center font-sans bg-[#F1D4B3] min-h-screen">
      <BackgroundHeading />
      <div>
        <main
          className=" relative max-w-[950px] h-[80vh] xs:h-[450px] bg-white rounded-[8px]
       shadow-[0_4px_4px_rgba(0,0,0,0.08)] overflow-hidden grid grid-cols-[1fr]  xs:grid-cols-[5fr_4fr] sm:grid-cols-[7fr_4fr] grid-rows-[59px_5fr_1fr] xs:grid-rows-[59px_1fr]"
        >
          <Header />
          <TodoList />
          <Sidebar />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
