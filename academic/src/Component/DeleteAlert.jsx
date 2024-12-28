import React from "react";

const DeleteAlert = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(170, 159, 159, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p>{message || "Are you sure you want to delete this item?"}</p>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#624657",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlert;
