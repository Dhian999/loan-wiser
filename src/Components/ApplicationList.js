import React from "react";

const ApplicationList = ({
  applications,
  activeAppId,
  setActiveAppId,
  addApplication,
  deleteApplication,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          marginBottom: "0px",
          alignItems: "center",
          height: "3rem",
        }}
      >
        {applications.map((app) => (
          <button
            key={app.id}
            onClick={() => {
              setActiveAppId(app.id);
            }}
            style={{
              marginRight: "10px",
              backgroundColor: activeAppId === app.id ? "green" : "gray",
              color: "white",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            {app.name}
          </button>
        ))}
        <button
          onClick={addApplication}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          Add Application
        </button>
      </div>
      <div style={{ marginTop: "0px" }}>
        <button
          onClick={() => deleteApplication(activeAppId)}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          Delete Active Application
        </button>
      </div>
    </>
  );
};

export default ApplicationList;
