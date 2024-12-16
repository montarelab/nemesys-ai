// src/components/Header.jsx
import React from "react";
import { theme } from "../styles/theme";
import { ReactSVG } from "react-svg";
import { useState } from "react";
// import icon from "../../public/icons/link-icons/theme.svg";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header
      style={styles.header}
      className="d-flex justify-content-between px-5"
    >
      <div className="row d-flex justify-content-between">
        <ReactSVG
          src="icons/link-icons/burger.svg"
          width={35}
          height={35}
          onClick={toggleSidebar}
          className="d-flex align-items-center d-lg-none mr-5 "
        />
        <span style={styles.title} className="m-0">
          NemesysAI
        </span>
      </div>

      {/* <div className="row d-flex justify-content-between"> */}
      <ReactSVG
        src="icons/link-icons/theme.svg"
        width={35}
        height={35}
        className="d-flex align-items-center"
      />
      {/* </div> */}
    </header>
  );
};

const styles: {
  header: React.CSSProperties;
  title: React.CSSProperties;
} = {
  header: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: "20px",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: "24px",
    lineHeight: 1.6,
  },
};

export default Header;
