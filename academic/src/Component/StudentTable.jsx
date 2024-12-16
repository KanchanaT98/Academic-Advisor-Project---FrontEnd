import React from "react";
// import "./StudentTable.css"; // Optional: separate CSS file for styling

const StudentTable = ({ students, handleUpdateStudent, handleDeleteStudent }) => {
  return (
    <section className="table-section">
      <h2>Students</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject Area</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.subjectArea}</td>
              <td>
                <button onClick={() => handleUpdateStudent(student.id)}>Update</button>
                <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentTable;
