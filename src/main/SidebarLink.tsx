import { theme } from "../styles/theme";
import { ReactSVG } from "react-svg";
import { Link } from "react-router";

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
      textDecoration: "none",
      color: isActive ? theme.colors.primary : "#ffffff",
      backgroundColor: isActive ? theme.colors.backgroundLight : "transparent",
      borderRadius: "4px",
      transition: "background-color 0.3s, color 0.3s",
      fontSize: "16px",
      padding: "20px 10px",
      cursor: "pointer",
    },
    icon: {
      marginRight: "12px",
      stroke: isActive ? theme.colors.primary : theme.colors.text,
      width: "30px",
      height: "30px",
    },
    linkText: {
      fontWeight: isActive ? "600" : "400",
    },
  };

  return (
    <Link to={link.href} style={styles.container} title={link.name}>
      {icon && (
        <ReactSVG
          width={30}
          height={30}
          src={icon}
          style={styles.icon}
          beforeInjection={(svg) => {
            svg.setAttribute(
              "stroke",
              isActive ? theme.colors.primary : theme.colors.text
            );
          }}
        />
      )}
      <span style={styles.linkText}>{link.name}</span>
    </Link>
  );
}

export default SidebarLink;
