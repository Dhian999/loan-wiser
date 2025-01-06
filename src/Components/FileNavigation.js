import React from "react";

const FileNavigation = ({
  goToPreviousFile,
  goToNextFile,
  disablePreviousButton,
  disableNextButton,
}) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20%",
        width: "100%",
      }}
    >
      <button
        onClick={goToPreviousFile}
        disabled={disablePreviousButton}
        style={{
          marginRight: "10px",
          backgroundColor: disablePreviousButton ? "lightgray" : "purple",
          color: "white",
          padding: "5px",
        }}
      >
        Previous File
      </button>
      <button
        onClick={goToNextFile}
        disabled={disableNextButton}
        style={{
          backgroundColor: disableNextButton ? "lightgray" : "orange",
          color: "white",
          padding: "5px",
        }}
      >
        Next File
      </button>
    </div>
  );
};

export default FileNavigation;
