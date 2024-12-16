import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
      const response = await axios.get("/api/advisors"); //need to update real api
      setAdvisors(response.data);
    } catch (error) {
      console.error("Error fetching advisors:", error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get("/api/students");//need to update real api
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDeleteAdvisor = async (id) => {
    try {
      await axios.delete(`/api/advisors/${id}`);
      setAdvisors(advisors.filter((advisor) => advisor.id !== id));//need to update real api
    } catch (error) {
      console.error("Error deleting advisor:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);//need to update real api
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
    <Router>
      <div className="admin-dashboard">
        <aside className="sidebar">
          <Link to="/" className="nav-button active">Dashboard</Link>
          <Link to="/students" className="nav-button">Student Table</Link>
          <Link to="/advisors" className="nav-button">Advisor Table</Link>
        </aside>

        <main className="main-content">
          <div className="dashboard-summary">
            <div className="summary-card">
              <h3>No of Advisors</h3>
              <p>{advisors.length}</p>
            </div>
            <div className="summary-card">
              <h3>No of Students</h3>
              <p>{students.length}</p>
            </div>
          </div>

          <Routes>
            <Route path="/advisors" element={
              <AdvisorTable
                advisors={advisors}
                handleUpdateAdvisor={handleUpdateAdvisor}
                handleDeleteAdvisor={handleDeleteAdvisor}
              />
            } />
            <Route path="/students" element={
              <StudentTable
                students={students}
                handleUpdateStudent={handleUpdateStudent}
                handleDeleteStudent={handleDeleteStudent}
              />
            } />
            <Route path="/" element={<h2>Welcome to the Admin Dashboard</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AdminDashboard;
