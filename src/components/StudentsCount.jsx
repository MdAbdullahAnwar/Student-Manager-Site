import React from 'react';
import './StudentsCount.css';

const StudentsCount = ({ count }) => {
  return (
    <div>
      <p>All Students: {count}</p>
    </div>
  );
};

export default StudentsCount;
