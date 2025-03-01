import React, { useState, useEffect } from 'react';
import './App.css';
import AllStudentsInfo from './components/AllStudentsInfo';
import Header from './components/Header';
import StudentsCount from './components/StudentsCount';
import StudentsInput from './components/StudentsInput';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  const addStudent = (student) => {
    let updatedStudents;
    
    if (editingStudent !== null) {
      updatedStudents = students.map((s, index) =>
        index === editingStudent ? student : s
      );
      setEditingStudent(null);
    } else {
      updatedStudents = [...students, student];
    }

    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const editStudent = (index) => {
    setEditingStudent(index);
  };

  return (
    <div>
      <Header />
      <StudentsCount count={students.length} />
      <StudentsInput onAddStudent={addStudent} editingStudent={editingStudent !== null ? students[editingStudent] : null} />
      <AllStudentsInfo students={students} onDeleteStudent={deleteStudent} onEditStudent={editStudent} />
    </div>
  );
}

export default App;
