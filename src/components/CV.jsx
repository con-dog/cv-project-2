import React from 'react';
import CVHeader from './CVHeader';

function CV(props) {
  const { details } = props;
  const { firstName, lastName } = details;
  return (
    <div>
      <CVHeader firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default CV;
