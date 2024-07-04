export default function ConfirmDelete({ onDeleteColor }) {
  return (
    <>
      <p>Are you sure you want to delete this color?</p>
      <button>CANCEL</button>
      <button type="click" onClick={onDeleteColor}>
        DELETE
      </button>
    </>
  );
}
