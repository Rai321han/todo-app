type ButtonProps = {
  onClick: () => Promise<void>;
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ onClick, buttonType, children }: ButtonProps) {
  const classnames = `mb-[10px] h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${
    buttonType === "secondary" ? "opacity-[85%]" : ""
  }`;
  return (
    <button onClick={onClick} className={classnames}>
      {children}
    </button>
  );
}
