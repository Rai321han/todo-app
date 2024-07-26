function App() {
  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#F1D4B3] min-h-screen">
      <h1 className="text-[120px] font-bold absolute left-1/2 -translate-x-1/2 text-black/5 uppercase tracking-[0.2em]">
        TodoApp
      </h1>

      <main
        className=" relative w-[900px] h-[450px] bg-white rounded-[8px]
       shadow-[0_4px_4px_rgba(0,0,0,0.08)] overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]"
      >
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]"></header>
        <ul></ul>
        <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]"></section>
      </main>
      <footer className="flex justify-between w-[900px] items-center text-[11px] p[acity-30 mt-[12px]">
        <small>&copy; 2024. Copyright by .</small>
        <p>
          Version <b>1.5</b>
        </p>
      </footer>
    </div>
  );
}

export default App;
