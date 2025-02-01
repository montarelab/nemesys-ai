import { useState, useEffect } from "react";
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

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />

        <div
          style={styles.container}
          className="d-flex flex-column flex-lg-row "
        >
          {(isSidebarVisible || isScreenLarge) && <Sidebar />}
          <div style={styles.content} className="d-flex row m-0 w-100">
            <div className="col-md-0 col-lg-1 col-xxl-2"></div>
            <div
              className="col-md-12 col-lg-10 col-xxl-8"
              style={{ height: "100%" }}
            >
              <Routes>
                <Route index path="/" element={<Dashboard />} />
                <Route path="/applications" element={<AppTable />} />
                <Route path="/addApp" element={<AddApp />} />
                <Route path="/anomalies" element={<Anomalies />} />
                <Route path="/modelConfig" element={<ModelConfig />} />
                <Route path="/rules" element={<Rules />} />
              </Routes>
            </div>
            <div className="col-md-0 col-lg-1 col-xxl-2"></div>
          </div>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  container: {},
  content: {
    minHeight: "100vh",
    padding: "20px 0",
    backgroundColor: theme.colors.backgroundPrimary,
    border: "2px solid var(--background-primary)",
  },
};

export default App;
