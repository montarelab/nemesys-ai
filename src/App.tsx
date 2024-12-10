import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./main/Header";
import Sidebar from "./main/Sidebar";
import "./styles/styles.css";
import AppTable from "./pages/AppTable";
import { theme } from "./styles/theme";
import {
  Anomalies,
  AddApp,
  Dashboard,
  Rules,
  ModelConfig,
} from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div style={styles.container}>
          <Sidebar />
          <div style={styles.content}>
            {/* <div> */}
            <Routes>
              <Route index path="/" element={<Dashboard />} />
              <Route path="/applications" element={<AppTable />} />
              <Route path="/addApp" element={<AddApp />} />
              <Route path="/anomalies" element={<Anomalies />} />
              <Route path="/modelConfig" element={<ModelConfig />} />
              <Route path="/rules" element={<Rules />} />
            </Routes>
            {/* </div> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100%",
    // height: "calc(100vh - 80px)", // Adjusts for the header's height
  },
  content: {
    flex: 1,
    padding: "20px 200px",
    overflow: "auto",
    backgroundColor: theme.colors.backgroundPrimary,
    border: "2px solid var(--background-primary)",
  },
};

export default App;
