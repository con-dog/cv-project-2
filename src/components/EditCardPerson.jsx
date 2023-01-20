import React from 'react';

function EditCardPerson(props) {
  const { handleTextChange, firstName, lastName, email } = props;
  return (
    <div>
      <input
        id="firstName"
        type="text"
        placeholder="First name"
        onChange={handleTextChange}
        value={firstName}
      />
      <input
        id="lastName"
        type="text"
        placeholder="Last name"
        onChange={handleTextChange}
        value={lastName}
      />
      <input
        id="email"
        type="text"
        placeholder="Email"
        onChange={handleTextChange}
        value={email}
      />
    </div>
  );
}

export default EditCardPerson;
