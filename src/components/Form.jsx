import React from 'react';
import EditCardPerson from './EditCardPerson';
import EditCardJobs from './EditCardJobs';

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
    </div>
  );
}

export default Form;
