import { useModalDialog } from "../hooks/useModalDialog";

function ButtonModal() {
  const { isOpen, toggle } = useModalDialog();
  return (
    <>
      <button onClick={toggle}>Open</button>
      {isOpen ? <button onClick={toggle}>Close</button> : null}
    </>
  );
}
export default ButtonModal;
