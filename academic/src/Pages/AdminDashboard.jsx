import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaSignOutAlt,
} from "react-icons/fa";
import StudentTable from "../Component/StudentTable";
import AdvisorTable from "../Component/AdvisorTable";
import Search from "../Component/Search";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./AdminDashboard.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [advisors, setAdvisors] = useState([]);
  const [students, setStudents] = useState([]);
  const location = useLocation(); // Track current route
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAdvisors();
    fetchStudents();
  }, []);

  const fetchAdvisors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8083/api/users/advisors"
      );
      const filteredAdvisors = response.data.map((advisor) => ({
        id: advisor.id,
        name: advisor.username,
        email: advisor.email,
        subjectArea: advisor.subjectArea,
        educationQualification: advisor.educationQualification,
      }));
      setAdvisors(filteredAdvisors);
    } catch (error) {
      console.error("Error fetching advisors:", error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8083/api/users/students"
      );
      const filteredStudents = response.data.map((students) => ({
        id: students.id,
        name: students.username,
        email: students.email,
        combinationNo: students.combinationNo,
      }));
      setStudents(filteredStudents);
    } catch (error) {
      console.error("Error fetching advisors:", error);
    }
  };

  const handleDeleteAdvisor = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8083/api/users/deleteUser/${id}`
      );
      setAdvisors(advisors.filter((advisor) => advisor.id !== id));
      alert("Student deleted successfully!");
      console.log(response.data); // Optional: Log success message
    } catch (error) {
      console.error("Error deleting advisor:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8083/api/users/deleteUser/${id}`
      );
      setStudents(students.filter((student) => student.id !== id));
      alert("Student deleted successfully!");
      console.log(response.data); // Optional: Log success message
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleUpdateAdvisor = (id) => {
    console.log(`Update advisor with ID: ${id}`);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  // Prepare data for the chart
  const subjectAreaCounts = advisors.reduce((acc, advisor) => {
    const subject = advisor.subjectArea || "Unknown";
    acc[subject] = acc[subject] ? acc[subject] + 1 : 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(subjectAreaCounts),
    datasets: [
      {
        label: "Number of Advisors",
        data: Object.values(subjectAreaCounts),
        backgroundColor: [
          "rgba(54, 162, 162, 0.6)",
          "rgba(220, 39, 39, 0.6)",
          "rgba(40, 130, 200, 0.6)",
          "rgba(255, 165, 0, 0.6)",
          "rgba(128, 0, 128, 0.6)",
          "rgba(255, 140, 0, 0.6)",
        ],

        borderColor: [
          "rgba(54, 162, 162, 1)",
          "rgba(220, 39, 39, 1)",
          "rgba(40, 130, 200, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(128, 0, 128, 1)",
          "rgba(255, 140, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to take the height and width of the container
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "Arial, sans-serif",
            weight: "bold",
          },
          color: "#333",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Advisors",
          font: {
            size: 16,
            weight: "bold",
          },
          color: "#333",
        },
        ticks: {
          color: "#333",
          stepSize: 1,
        },
      },
      x: {
        title: {
          display: true,
          text: "Subject Areas",
          font: {
            size: 16,
            weight: "bold",
          },
          color: "#333",
        },
        ticks: {
          color: "#333",
        },
      },
    },
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <Link to="/AdminDashboard" className="admin-button">
          <FaTachometerAlt className="admin-icon" />
          Dashboard
        </Link>
        <Link to="/AdminDashboard/students" className="admin-button">
          <FaUsers className="admin-icon" />
          Student Table
        </Link>
        <Link to="/AdminDashboard/advisors" className="admin-button">
          <FaChalkboardTeacher className="admin-icon" />
          Advisor Table
        </Link>
        <button onClick={handleLogout} className="admin-logoutbutton">
          <FaSignOutAlt className="admin-icon" />
          Log Out
        </button>
      </aside>

      <main className="admin-content">
        <div className="admin-summary">
          <div className="admin-card">
            <h3 style={{ fontSize: "24px" }}>No of Advisors</h3>
            <p style={{ fontSize: "32px" }}>{advisors.length}</p>
          </div>
          <div className="admin-card">
            <h3 style={{ fontSize: "24px" }}>No of Students</h3>
            <p style={{ fontSize: "32px" }}>{students.length}</p>
          </div>
        </div>
        {location.pathname === "/AdminDashboard" && (
          <div className="admin-chart">
            <h3>Advisor Count by Subject Area</h3>
            <Bar data={chartData} options={options} />
          </div>
        )}

        <Routes>
          <Route
            path="advisors"
            element={
              <AdvisorTable
                advisors={advisors}
                handleDeleteAdvisor={handleDeleteAdvisor}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          <Route
            path="students"
            element={
              <StudentTable
                students={students}
                handleDeleteStudent={handleDeleteStudent}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
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
