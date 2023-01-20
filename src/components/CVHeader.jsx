import React from 'react';

function CVHeader(props) {
  const { firstName, lastName } = props;
  const fullName = `${firstName} ${lastName}`;
  return (
    <div>
      <h1>{fullName}</h1>
    </div>
  );
}

export default CVHeader;
