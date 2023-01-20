import React from 'react';

function CVBody(props) {
  const { job, company, description } = props;
  return (
    <div>
      <h2>Experience</h2>
      <hr />
      <p>{job}</p>
      <p>{company}</p>
      <p>{description}</p>
      <h2>Education</h2>
      <hr />
    </div>
  );
}

export default CVBody;
