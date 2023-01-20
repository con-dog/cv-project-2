import React from 'react';

function EditCardEducation(props) {
  const { university, degree, handleTextChange } = props;
  return (
    <div>
      <input
        id="university"
        type="text"
        placeholder="University"
        onChange={handleTextChange}
        value={university}
      />
      <input
        id="degree"
        type="text"
        placeholder="Degree"
        onChange={handleTextChange}
        value={degree}
      />
    </div>
  );
}

export default EditCardEducation;
