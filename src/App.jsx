import React, { useState } from 'react';
import CV from './components/CV';
import Form from './components/Form';

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [texts, setTexts] = useState({
    firstName: '',
    lastName: '',
    email: '',
    job: '',
    company: '',
    description: '',
    university: '',
    degree: '',
  });
  const [details, setDetails] = useState({
    firstName: texts.firstName,
    lastName: texts.lastName,
    email: texts.email,
    job: texts.job,
    company: texts.company,
    description: texts.description,
    university: texts.university,
    degree: texts.degree,
  });

  const handleOnClick = () => {
    if (isEditing) {
      const updatedValues = {
        firstName: texts.firstName,
        lastName: texts.lastName,
        email: texts.email,
        job: texts.job,
        company: texts.company,
        description: texts.description,
        university: texts.university,
        degree: texts.degree,
      };
      setDetails({
        ...details,
        ...updatedValues,
      });
    }

    setIsEditing(!isEditing);
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
        <CV details={details} />
      )}
    </div>
  );
}

export default App;
