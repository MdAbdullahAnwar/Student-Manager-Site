import React from 'react';
import './AllStudentsInfo.css';

const AllStudentsInfo = ({ students, onDeleteStudent, onEditStudent }) => {
  return (
    <div className='allStudentsInfo'>
      <h1>All Students</h1>
      {students.map((student, index) => (
        <div key={index} className='studentCard'>
          <p>Name: {student.name}</p>
          <p>Mobile: {student.phone}</p>
          <p>Address: {student.address}</p>
          <button onClick={() => onEditStudent(index)}>Edit</button>
          <button onClick={() => onDeleteStudent(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllStudentsInfo;
