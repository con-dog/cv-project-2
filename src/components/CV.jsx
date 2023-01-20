import React from 'react';
import CVHeader from './CVHeader';
import CVBody from './CVBody';

function CV(props) {
  const { details } = props;
  const { firstName, lastName, job, company, description } = details;
  return (
    <div>
      <CVHeader firstName={firstName} lastName={lastName} />
      <CVBody job={job} company={company} description={description} />
    </div>
  );
}

export default CV;
