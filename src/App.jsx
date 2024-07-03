import { initialColors } from "./lib/colors";
import { useState } from "react";
import { uid } from "uid";
import ColorForm from "./Components/ColorForm/ColorForm";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([
      {
        id: uid(),
        role: newColor.role,
        hex: newColor.hex,
        contrastText: newColor.contrastText,
      },
      ...initialColors,
    ]);
  }
  console.log(colors);

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
