import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./main/Header";
import Sidebar from "./main/Sidebar";
import "./styles/styles.css";
import AppTable from "./pages/AppTable";
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

        {/* <header className="App-header">  */}

        <div style={styles.container}>
          <Sidebar />
          <div style={styles.content}>
            <div>
              {/* Define your navigation */}
              {/* <nav> */}
              {/* <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> */}
              {/* </nav> */}

              {/* Define the routes */}
              <Routes>
                <Route index path="/" element={<Dashboard />} />
                <Route path="/appTable" element={<AppTable />} />
                <Route path="/addApp" element={<AddApp />} />
                <Route path="/anomalies" element={<Anomalies />} />
                <Route path="/modelConfig" element={<ModelConfig />} />
                <Route path="/rules" element={<Rules />} />
              </Routes>
            </div>
            {/* <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
          </div>
        </div>
        {/* </header> */}
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "calc(100vh - 80px)", // Adjusts for the header's height
  },
  content: {
    flex: 1,
    padding: "20px",
    overflow: "auto",
  },
};

export default App;
