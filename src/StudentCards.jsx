import React from 'react';

function StudentCard({ student }) {
  const status = student.marks >= 50 ? 'Passed' : 'Failed';
  const color = status === 'Passed' ? 'green' : 'red';


  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Marks: {student.marks}</p>
      <p style={{ color }}>Status: {status}</p>
    </div>
  );
}


export default StudentCard;