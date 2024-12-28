import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import StudentTable from "../Component/StudentTable";
import AdvisorTable from "../Component/AdvisorTable";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [advisors, setAdvisors] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchAdvisors();
    fetchStudents();
  }, []);

  const fetchAdvisors = async () => {
    try {
      const response = await axios.get("/api/advisors"); // Update with real API
      setAdvisors(response.data);
    } catch (error) {
      console.error("Error fetching advisors:", error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get("/api/students"); // Update with real API
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDeleteAdvisor = async (id) => {
    try {
      await axios.delete(`/api/advisors/${id}`);
      setAdvisors(advisors.filter((advisor) => advisor.id !== id));
    } catch (error) {
      console.error("Error deleting advisor:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleUpdateAdvisor = (id) => {
    console.log(`Update advisor with ID: ${id}`);
  };

  const handleUpdateStudent = (id) => {
    console.log(`Update student with ID: ${id}`);
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <Link to="/AdminDashboard" className="admin-button">
          Dashboard
        </Link>
        <Link to="/AdminDashboard/students" className="admin-button">
          Student Table
        </Link>
        <Link to="/AdminDashboard/advisors" className="admin-button">
          Advisor Table
        </Link>
      </aside>

      <main className="admin-content">
        <div className="admin-summary">
          <div className="admin-card">
            <h3>No of Advisors</h3>
            <p>{advisors.length}</p>
          </div>
          <div className="admin-card">
            <h3>No of Students</h3>
            <p>{students.length}</p>
          </div>
        </div>

        <Routes>
          <Route
            path="advisors"
            element={
              <AdvisorTable
                advisors={advisors}
                handleUpdateAdvisor={handleUpdateAdvisor}
                handleDeleteAdvisor={handleDeleteAdvisor}
              />
            }
          />
          <Route
            path="students"
            element={
              <StudentTable
                students={students}
                handleUpdateStudent={handleUpdateStudent}
                handleDeleteStudent={handleDeleteStudent}
              />
            }
          />
          {/* <Route path="/" element={<h2>Welcome to the Admin Dashboard</h2>} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
