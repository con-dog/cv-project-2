import React from 'react';
import EditPerson from './EditPerson';

function Form(props) {
  const { handleTextChange, texts } = props;
  return (
    <div>
      <EditPerson
        handleTextChange={handleTextChange}
        firstName={texts.firstName}
        lastName={texts.lastName}
        email={texts.email}
      />
    </div>
  );
}

export default Form;
