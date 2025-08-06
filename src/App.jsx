import React from 'react';
import StudentList from './StudentLists';
import AddStudentForm from './AddStudentForm';

function App() {
  const students = [
  { id: 1, name: 'Alice', age: 21, marks: 85 },
  { id: 2, name: 'Bob', age: 22, marks: 45 },
  { id: 3, name: 'Charlie', age: 20, marks: 70 },
];
  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1,marks:students.marks }]);
  };


  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;