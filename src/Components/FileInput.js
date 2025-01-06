import React from "react";

const FileInput = ({ addFileToApplication }) => {
  const handleAddFile = () => {
    const fileName = document.getElementById("fileInput").value.trim();
    if (fileName) {
      addFileToApplication(fileName);
      document.getElementById("fileInput").value = "";
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter file name"
        id="fileInput"
        style={{ marginRight: "10px", padding: "8px", borderRadius: "8px" }}
      />
      <button
        onClick={handleAddFile}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "8px",
          borderRadius: "8px",
        }}
      >
        Add File
      </button>
    </div>
  );
};

export default FileInput;
