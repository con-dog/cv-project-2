import React from 'react';
import EditCardPerson from './EditCardPerson';
import EditCardJobs from './EditCardJobs';
import EditCardEducation from './EditCardEducation';

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
      <EditCardJobs
        handleTextChange={handleTextChange}
        job={texts.job}
        company={texts.company}
        description={texts.description}
      />
      <EditCardEducation
        handleTextChange={handleTextChange}
        university={texts.university}
        degree={texts.degree}
      />
    </div>
  );
}

export default Form;
