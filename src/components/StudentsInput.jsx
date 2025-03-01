import React, { useState, useEffect } from 'react';
import './StudentsInput.css';

const StudentsInput = ({ onAddStudent, editingStudent }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setPhone(editingStudent.phone);
      setAddress(editingStudent.address);
    }
  }, [editingStudent]);

  function handleStudentInfo(e) {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Enter Name');
      return;
    }
    if (phone.trim() === '') {
      alert('Enter Mobile Number');
      return;
    }
    if (address.trim() === '') {
      alert('Enter Address');
      return;
    }

    onAddStudent({ name, phone, address });

    setName('');
    setPhone('');
    setAddress('');
  }

  return (
    <div className='studentsInputContainer'>
      <form onSubmit={handleStudentInfo}>
        <label>Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Mobile: <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
        <label>Address: <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} /></label>
        <button type='submit'>{editingStudent ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default StudentsInput;
