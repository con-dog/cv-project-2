import React from 'react';
import EditCardPerson from './EditCardPerson';

function Form(props) {
  const { handleTextChange, texts } = props;
  return (
    <div>
      <EditCardPerson
        handleTextChange={handleTextChange}
        firstName={texts.firstName}
        lastName={texts.lastName}
        email={texts.email}
      />
    </div>
  );
}

export default Form;
