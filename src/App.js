import React, { useState, useEffect } from 'react';

const App = () => {
  const [mode, setMode] = useState('Edit');

  const toggleMode = () => {
    if (mode === 'Edit') {
      setMode('Generate');
    } else {
      setMode('Edit');
    }
  };

  return (
    <div>
      <button onClick={toggleMode}>{mode}</button>
    </div>
  );
};

export default App;
