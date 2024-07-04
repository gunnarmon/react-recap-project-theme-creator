import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  const [deleteMessage, setDeleteMessage] = useState(false);

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
