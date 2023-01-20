import React from 'react';

function EditCardJobs(props) {
  const { job, company, description, handleTextChange } = props;
  return (
    <div>
      <input
        id="job"
        type="text"
        placeholder="Job Title"
        onChange={handleTextChange}
        value={job}
      />
      <input
        id="company"
        type="text"
        placeholder="Company"
        onChange={handleTextChange}
        value={company}
      />
      <input
        id="description"
        type="text"
        placeholder="Job Description"
        onChange={handleTextChange}
        value={description}
      />
    </div>
  );
}

export default EditCardJobs;
