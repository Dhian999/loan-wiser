import React from "react";

const FileList = ({
  files,
  activeFileIndex,
  deleteFileFromApplication,
  setActiveFileIndex,
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {files.map((file, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: index === activeFileIndex ? "bold" : "normal",
          }}
        >
          <span
            onClick={() => setActiveFileIndex(index)}
            style={{ margin: "10px", width: "60%" }}
          >
            {file.name}
          </span>
          <button
            onClick={() => deleteFileFromApplication(file.name)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
