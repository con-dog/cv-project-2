import React, { useState } from 'react';
import CV from './components/CV';
import Form from './components/Form';

function App() {
  const [isEditing, setMode] = useState(true);
  const [texts, setTexts] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [details, setDetails] = useState({
    firstName: texts.firstName,
    lastName: texts.lastName,
    email: texts.email,
  });

  const handleOnClick = () => {
    if (isEditing) {
      const updatedValues = {
        firstName: texts.firstName,
        lastName: texts.lastName,
        email: texts.email,
      };
      setDetails({
        ...details,
        ...updatedValues,
      });
    }

    setMode(!isEditing);
  };

  const handleTextChange = (e) => {
    const updatedValue = {
      [e.target.id]: e.target.value,
    };
    setTexts({
      ...texts,
      ...updatedValue,
    });
  };

  return (
    <div>
      <button type="button" onClick={handleOnClick}>
        {isEditing ? 'Generate' : 'Edit'}
      </button>
      {isEditing ? (
        <Form handleTextChange={handleTextChange} texts={texts} />
      ) : (
        <CV />
      )}
    </div>
  );
}

export default App;
