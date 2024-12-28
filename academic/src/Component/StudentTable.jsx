import React, { useState } from "react";
// import "./StudentTable.css"; // Optional: separate CSS file for styling
import DeleteAlert from "./DeleteAlert";
import axios from "axios";

const StudentTable = ({ students, handleUpdateStudent }) => {
  const [showAlert, setShowAlert] = useState(false); // State to show/hide the alert
  const [studentToDelete, setStudentToDelete] = useState(null); // Store the student to delete

  // 10 Dummy students for testing
  const [student, setStudent] = useState([
      {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      combinationNo: "26",
      subjectArea: ("Computer Science", "Mathematics"),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      combinationNo: "21",
      subjectArea: "Mathematics",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      combinationNo: "10",
      subjectArea: "Physics",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      combinationNo: "31",
      subjectArea: "Chemistry",
    },
    {
      id: 5,
      name: "Charlie Lee",
      email: "charlie.lee@example.com",
      combinationNo: "28",
      subjectArea: "Biology",
    },
    {
      id: 6,
      name: "David Kim",
      email: "david.kim@example.com",
      combinationNo: "13",
      subjectArea: "Philosophy",
    },
    {
      id: 7,
      name: "Eva White",
      email: "eva.white@example.com",
      combinationNo: "22",
      subjectArea: "Economics",
    },
    {
      id: 8,
      name: "Frank Green",
      email: "frank.green@example.com",
      combinationNo: "01",
      subjectArea: "History",
    },
    {
      id: 9,
      name: "Grace Harris",
      email: "grace.harris@example.com",
      combinationNo: "26",
      subjectArea: "Literature",
    },
    {
      id: 10,
      name: "Henry Adams",
      email: "henry.adams@example.com",
      combinationNo: "26",
      subjectArea: "Sociology",
    },
  ]);

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`); // Connect to real API here
      setStudent(students.filter((student) => student.id !== id)); // Update the students state
      setShowAlert(false); // Close the alert after deletion
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

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
      <h2>Students</h2>
      <table className="data-table" style={{}}>
        <thead style={{ backgroundColor: "aqua" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Combination No</th>
            <th>Subject Areas</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.combinationNo}</td>
              <td>{student.subjectArea}</td>
              <td style={{ textAlign: "center" }}>
                {/* <button onClick={() => handleUpdateStudent(student.id)}>Update</button> */}
                <button onClick={() => confirmDelete(student.id)}>
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteAlert
        isOpen={showAlert}
        message="Are you sure you want to delete this student?"
        onConfirm={() => handleDeleteStudent(studentToDelete)}
        onCancel={cancelDelete}
      />
    </section>
  );
};

export default StudentTable;
