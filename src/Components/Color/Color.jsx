import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [editColor, setEditColor] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {editColor ? (
        <>
          <button onClick={() => setEditColor(false)}>EDIT</button>
          <ColorForm
            buttonName="EDIT COLOR"
            onAddColor={(updatedColor) => {
              onEditColor({ id: color.id, ...updatedColor });
              setEditColor(false);
            }}
          ></ColorForm>
        </>
      ) : (
        <button onClick={() => setEditColor(true)}>EDIT</button>
      )}

      {deleteMessage ? (
        <>
          <p className="color-card-highlight">Are you sure?</p>
          <button onClick={() => setDeleteMessage(false)}>CANCEL</button>
          <button onClick={() => onDeleteColor(color.id)}>DELETE</button>
        </>
      ) : (
        <>
          <button onClick={() => setDeleteMessage(true)}>DELETE</button>
        </>
      )}
    </div>
  );
}
