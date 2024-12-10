// src/components/Header.jsx
import React from "react";
import { theme } from "../styles/theme";
import { ReactSVG } from "react-svg";
// import icon from "../../public/icons/link-icons/theme.svg";

const Header = () => {
  return (
    <header
      style={styles.header}
      className="d-flex justify-content-between px-5"
    >
      <span style={styles.title} className="m-0">
        NemesysAI
      </span>
      <ReactSVG
        src="icons/link-icons/theme.svg"
        width={35}
        height={35}
        className="d-flex align-items-center"
        // style={}
        // beforeInjection={(svg) => {
        //   svg.setAttribute("style", "width: 30px; height: 30px");
        // }}
      />
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
