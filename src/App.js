import React, { useState } from "react";
import ApplicationList from "./Components/ApplicationList";
import FileNavigation from "./Components/FileNavigation";
import FileList from "./Components/FileList";
import FileInput from "./Components/FileInput";
import { Layout } from "antd";
import "./App.css";

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [applications, setApplications] = useState([
    // { id: 1, name: "Application_1", files: [] },
  ]);
  const [activeAppId, setActiveAppId] = useState(1);
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  // const addApplication = () => {
  //   const newAppId = applications.length + 1;
  //   const newApp = { id: newAppId, name: `Application_${newAppId}`, files: [] };
  //   setApplications([...applications, newApp]);
  //   setActiveAppId(newAppId);
  //   setActiveFileIndex(0);
  // };

  const addApplication = () => {
    const appName = prompt("Enter the name for the new application:");
    if (!appName) {
      alert("Application name cannot be empty.");
      return;
    }
    if (applications.some((app) => app.name === appName)) {
      alert("An application with this name already exists.");
      return;
    }
    const newAppId = applications.length
      ? Math.max(...applications.map((app) => app.id)) + 1
      : 1;
    const newApp = { id: newAppId, name: appName, files: [] };
    setApplications([...applications, newApp]);
    setActiveAppId(newAppId);
    setActiveFileIndex(0);
  };

  const deleteApplication = (id) => {
    setApplications(applications.filter((app) => app.id !== id));
    if (activeAppId === id) {
      setActiveAppId(applications[0]?.id || null);
      setActiveFileIndex(0);
    }
  };

  const addFileToApplication = (fileName) => {
    setApplications(
      applications.map((app) =>
        app.id === activeAppId
          ? { ...app, files: [...app.files, { name: fileName }] }
          : app
      )
    );
  };

  const deleteFileFromApplication = (fileName) => {
    setApplications(
      applications.map((app) =>
        app.id === activeAppId
          ? {
              ...app,
              files: app.files.filter((file) => file.name !== fileName),
            }
          : app
      )
    );
  };

  const goToPreviousFile = () => {
    const currentAppIndex = applications.findIndex(
      (app) => app.id === activeAppId
    );
    if (activeFileIndex > 0) {
      setActiveFileIndex(activeFileIndex - 1);
    } else if (currentAppIndex > 0) {
      const previousApp = applications[currentAppIndex - 1];
      setActiveAppId(previousApp.id);
      setActiveFileIndex(previousApp.files.length - 1);
    }
  };

  const goToNextFile = () => {
    const currentAppIndex = applications.findIndex(
      (app) => app.id === activeAppId
    );
    const currentApp = applications[currentAppIndex];
    if (activeFileIndex < currentApp.files.length - 1) {
      setActiveFileIndex(activeFileIndex + 1);
    } else if (currentAppIndex < applications.length - 1) {
      const nextApp = applications[currentAppIndex + 1];
      setActiveAppId(nextApp.id);
      setActiveFileIndex(0);
    }
  };

  const currentApp = applications.find((app) => app.id === activeAppId);
  console.log("current app is", currentApp);
  const currentFile = currentApp?.files[activeFileIndex];
  console.log("current file", currentFile);
  const isFirstApp =
    applications.findIndex((app) => app.id === activeAppId) === 0;
  const isLastApp =
    applications.findIndex((app) => app.id === activeAppId) ===
    applications.length - 1;

  const disablePreviousButton = isFirstApp && activeFileIndex === 0;
  const disableNextButton =
    isLastApp && activeFileIndex === currentApp?.files.length - 1;

  return (
    <div className="main-layout">
      <Layout>
        <Header className="headers">
          <ApplicationList
            applications={applications}
            activeAppId={activeAppId}
            setActiveAppId={setActiveAppId}
            addApplication={addApplication}
            deleteApplication={deleteApplication}
          />
        </Header>
        <Layout className="sub-layout">
          <Sider className="sider">
            <FileList
              files={currentApp?.files || []}
              activeFileIndex={activeFileIndex}
              deleteFileFromApplication={deleteFileFromApplication}
              setActiveFileIndex={setActiveFileIndex}
            />
          </Sider>

          <Content className="content">
            <FileInput addFileToApplication={addFileToApplication} />
            <div>{currentFile?.name}</div>
          </Content>
        </Layout>
        <Footer className="footer">
          <FileNavigation
            goToPreviousFile={goToPreviousFile}
            goToNextFile={goToNextFile}
            disablePreviousButton={disablePreviousButton}
            disableNextButton={disableNextButton}
          />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
