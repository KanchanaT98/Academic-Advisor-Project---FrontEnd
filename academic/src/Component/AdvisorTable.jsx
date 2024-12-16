import React from "react";
// import "./AdvisorTable.css"; // Optional: separate CSS file for styling

const AdvisorTable = ({ advisors, handleUpdateAdvisor, handleDeleteAdvisor }) => {
  return (
    <section className="table-section">
      <h2>Advisors</h2>
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
          {advisors.map((advisor) => (
            <tr key={advisor.id}>
              <td>{advisor.name}</td>
              <td>{advisor.email}</td>
              <td>{advisor.subjectArea}</td>
              <td>
                <button onClick={() => handleUpdateAdvisor(advisor.id)}>Update</button>
                <button onClick={() => handleDeleteAdvisor(advisor.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdvisorTable;
