import React, { useState } from "react";
import DeleteAlert from "./DeleteAlert";

const StudentTable = ({ students , handleDeleteStudent ,searchTerm, setSearchTerm }) => {
  const [showAlert, setShowAlert] = useState(false); // State to show/hide the alert
  const [studentToDelete, setStudentToDelete] = useState(null); // Store the student to delete

  // Show the confirmation alert
  const confirmDelete = (id) => {
    setStudentToDelete(id); // Store the student ID to delete
    setShowAlert(true); // Show the alert
  };

  // Cancel deletion
  const cancelDelete = () => {
    setShowAlert(false); // Close the alert without deleting
    setStudentToDelete(null); // Clear the student ID
  };

  return (
    <section className="table-section">
      <div style={{display:"flex" , justifyContent:"space-between", alignItems:"center", marginBottom:'10px'}}>
      <h2 style={{fontFamily:'monospace', fontSize:'28px'}}>Student Details</h2>
      <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{padding:'5px' , fontSize:'14px', width:'35%' , height: '30px',borderRadius:'12px',border:'1px solid #ccc' }}
        />
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Combination No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {students
            .filter((student) =>
              student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              student.email.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.combinationNo}</td>
              <td>
                {/* <button onClick={() => handleUpdateStudent(student.id)}>Update</button> */}
                <button className="delete-button" onClick={() => confirmDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteAlert
        isOpen={showAlert}
        message="Are you sure you want to delete this student?"
        onConfirm={() =>{ handleDeleteStudent(studentToDelete)
            setShowAlert(false)
        }}
        onCancel={cancelDelete}
      />
    </section>
  );
};

export default StudentTable;
