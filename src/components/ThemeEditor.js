import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ThemeEditor = ({ setColor }) => {
  const [color, setColorState] = useState('#fff');

  const handleColorChange = (newColor) => {
    setColorState(newColor.hex);
    setColor(newColor.hex);
  };

  return (
    <div>
      <h1>Theme Editor</h1>
      <SketchPicker color={color} onChangeComplete={handleColorChange} />
      <p>Selected Color: {color}</p>
    </div>
  );
};

export default ThemeEditor;
