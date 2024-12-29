import React, { useState } from "react";
import DeleteAlert from "./DeleteAlert";

const AdvisorTable = ({
  advisors,
  handleDeleteAdvisor,
  searchTerm, setSearchTerm 
}) => {

    const [showAlert, setShowAlert] = useState(false); // State to show/hide the alert
    const [advisorToDelete, setAdvisorToDelete] = useState(null); // Store the student to delete
  
    // Show the confirmation alert
    const confirmDelete = (id) => {
      setAdvisorToDelete(id); // Store the student ID to delete
      setShowAlert(true); // Show the alert
    };
  
    // Cancel deletion
    const cancelDelete = () => {
      setShowAlert(false); // Close the alert without deleting
      setAdvisorToDelete(null); // Clear the student ID
    };
  return (
    <section className="table-section">
      <div style={{display:"flex" , justifyContent:"space-between", alignItems:"center", marginBottom:'10px'}}>
      <h2 style={{fontFamily:'monospace', fontSize:'28px'}}>Advisors Details</h2>
      <input
          type="text"
          placeholder="Search Advisor..."
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
            <th>Subject Area</th>
            <th>Education Qualification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {advisors.filter((advisor) =>
              advisor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              advisor.email.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((advisor) => (
            <tr key={advisor.id}>
              <td>{advisor.name}</td>
              <td>{advisor.email}</td>
              <td>{advisor.subjectArea}</td>
              <td>{advisor.educationQualification}</td>
              <td>
                {/* <button onClick={() => handleUpdateAdvisor(advisor.id)}>
                  Update
                </button> */}
                <button className="delete-button" onClick={() => confirmDelete(advisor.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteAlert
        isOpen={showAlert}
        message="Are you sure you want to delete this student?"
        onConfirm={() =>{ handleDeleteAdvisor(advisorToDelete)
            setShowAlert(false)
        }}
        onCancel={cancelDelete}
      />
    </section>
  );
};

export default AdvisorTable;
