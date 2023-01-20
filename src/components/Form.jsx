import React from 'react';

function Form(props) {
  const { handleTextChange, texts } = props;
  return (
    <div>
      <input id="firstName" type="text" placeholder="First name" onChange={handleTextChange} value={texts.firstName} />
      <input id="lastName" type="text" placeholder="Last name" />
      <input id="email" type="text" placeholder="Email name" />
    </div>
  );
}

export default Form;
