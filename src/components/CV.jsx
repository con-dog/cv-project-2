import React from 'react';
import CVHeader from './CVHeader';
import CVBody from './CVBody';

function CV(props) {
  const { details } = props;
  const { firstName, lastName, job, company, description, university, degree } =
    details;
  return (
    <div>
      <CVHeader firstName={firstName} lastName={lastName} />
      <CVBody
        job={job}
        company={company}
        description={description}
        university={university}
        degree={degree}
      />
    </div>
  );
}

export default CV;
