import React from "react";
import { theme } from "../styles/theme";
import { ReactSVG } from "react-svg";

interface LinkProps {
  href: string;
  name: string;
}

function SidebarLink({
  link,
  icon,
  isActive = false,
}: {
  link: LinkProps;
  icon: string;
  isActive: boolean;
}) {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      padding: "12px 16px",
      textDecoration: "none",
      color: isActive ? "#c293ff" : "#ffffff", // Active color is purple; default is white
      backgroundColor: isActive ? "#292b3d" : "transparent", // Highlight background for active
      borderRadius: "4px",
      transition: "background-color 0.3s, color 0.3s",
      fontSize: "16px",
      cursor: "pointer",
    },
    icon: {
      marginRight: "12px",
      fill: isActive ? theme.colors.primary : theme.colors.text, // Highlight background for active
      width: "20px",
      height: "20px",
    },
    linkText: {
      fontWeight: isActive ? "600" : "400", // Bold text for active link
    },
  };

  return (
    <a
      href={link.href}
      style={styles.container}
      title={link.name} // Tooltip on hover
    >
      {icon && (
        <ReactSVG
          width={30}
          height={30}
          src={icon}
          style={styles.icon}
          beforeInjection={(svg) => {
            svg.setAttribute("style", "fill: " + isActive ? "red" : "yellow"); // Change the color dynamically
          }}
          // beforeInjection={(svg)}
        />
        // <svg style={styles.icon} viewBox="0 0 30 30">
        // <image href={icon} />
        // </svg>
      )}
      <span style={styles.linkText}>{link.name}</span>
    </a>
  );
}

export default SidebarLink;
