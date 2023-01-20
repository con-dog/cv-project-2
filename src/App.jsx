import React, { useState } from 'react';
import CV from './components/CV';
import Form from './components/Form';

function App() {
  const [isEdit, setMode] = useState(true);

  const toggleMode = () => {
    setMode(!isEdit);
  };

  return (
    <div>
      <button type="button" onClick={toggleMode}>{isEdit ? 'Generate' : 'Edit'}</button>
      {isEdit ? <Form /> : <CV />}
    </div>
  );
}

export default App;
