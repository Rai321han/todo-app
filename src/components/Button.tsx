type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ buttonType, children }: ButtonProps) {
  const classnames = `mb-[10px] h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${
    buttonType === "secondary" ? "opacity-[85%]" : ""
  }`;
  return <button className={classnames}>{children}</button>;
}
