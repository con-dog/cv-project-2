import React from 'react';

function CVBody(props) {
  const { job, company, description, university, degree } = props;
  return (
    <div>
      <h2>Experience</h2>
      <hr />
      <p>{job}</p>
      <p>{company}</p>
      <p>{description}</p>
      <h2>Education</h2>
      <p>{university}</p>
      <p>{degree}</p>
      <hr />
    </div>
  );
}

export default CVBody;
