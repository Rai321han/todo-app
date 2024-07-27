import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar({ handleAddTodo }) {
  return (
    <section className=" flex flex-col px-[25px] pt-[18px] pb-[28px] col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]">
      <AddTodoForm handleAddTodo={handleAddTodo} />

      <div className="mt-auto">
        <Button buttonType="secondary">Log in</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}
