import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { login, register, isAuthenticated, isLoading, user, logout } =
    useKindeAuth();
  return (
    <section className=" flex flex-col px-[25px] pt-[18px] pb-[28px] col-[1/3] xs:col-[2/3] row-[3/4] xs:row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]">
      <AddTodoForm />

      <div className="mt-auto xs:space-y-2 flex flex-row gap-2 xs:block xs:gap-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">Logged in as {user?.email}</p>
            <Button buttonType="secondary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Log in
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
