import React, { useState } from 'react';
import ThemeEditor from './components/ThemeEditor';
import Preview from './components/Preview';

const App = () => {
  const [color, setColor] = useState('#fff');

  return (
    <div>
      <ThemeEditor setColor={setColor} />
      <Preview color={color} />
    </div>
  );
};

export default App;
