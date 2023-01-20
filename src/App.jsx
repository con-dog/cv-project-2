import React, { useState } from 'react';
import CV from './components/CV';
import Form from './components/Form';

function App() {
  const [isEditing, setMode] = useState(true);

  const toggleMode = () => {
    setMode(!isEditing);
  };

  return (
    <div>
      <button type="button" onClick={toggleMode}>{isEditing ? 'Generate' : 'Edit'}</button>
      {isEditing ? <Form /> : <CV />}
    </div>
  );
}

export default App;
