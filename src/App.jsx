import React, { useState } from 'react';
import CV from './components/CV';
import Form from './components/Form';

function App() {
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
      <button type="button" onClick={toggleMode}>{mode}</button>
      <Form />
      <CV />
    </div>
  );
}

export default App;
