export default function DeleteButton({
  onClick,
}: {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}) {
  return <button onClick={onClick}>❌</button>;
}
