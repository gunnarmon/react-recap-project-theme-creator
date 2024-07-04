import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({ onAddColor, buttonName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = new FormData(event.target);
    const data = Object.fromEntries(formElements);
    onAddColor(data);
    console.log(data);

    event.target.reset();
    event.target.role.focus();
  }

  return (
    <form className="addColorForm" onSubmit={handleSubmit}>
      <label htmlFor="role">Role: </label>
      <input
        type="text"
        name="role"
        id="role"
        placeholder={"give your color a role..."}
      />
      <label htmlFor="hex">Hex: </label>
      <ColorInput id="hex" defaultValue="#ffffff" />
      <label htmlFor="contrastText">Contrast Text: </label>
      <ColorInput id="contrastText" defaultValue="#000000" />
      <button type="submit">{buttonName}</button>
    </form>
  );
}
