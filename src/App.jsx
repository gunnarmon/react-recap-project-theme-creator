import { initialColors } from "./lib/colors";
import { useState } from "react";
import { uid } from "uid";
import ColorForm from "./Components/ColorForm/ColorForm";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...initialColors]);
  }

  function handleDeleteColor(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  }

  function handleEditColor(updatedColor) {
    setColors(
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} buttonName={"ADD COLOR"} />

      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onEditColor={handleEditColor}
          />
        );
      })}
    </>
  );
}

export default App;
