import React from "react";
import SidebarLink from "./SidebarLink";
import { useState, useEffect } from "react";
import { theme } from "../styles/theme";
import { useLocation } from "react-router";
import SearchInput from "../control/SearchInput";

const Sidebar = () => {
  const location = useLocation(); // Tracks the current URL path
  const [activeLink, setActiveLink] = useState(location.pathname);
  const links = [
    {
      href: "/",
      name: "Dashboard",
      icon: "icons/link-icons/dashboard.svg",
    },
    {
      href: "/applications",
      name: "Applications",
      icon: "icons/link-icons/apps.svg",
    },
    {
      href: "/attack-discovery",
      name: "Attack Discovery",
      icon: "icons/link-icons/anomalies.svg",
    },
    {
      href: "/networks",
      name: "Networks",
      icon: "icons/link-icons/networks.svg",
    },
    {
      href: "/api-security",
      name: "API Security",
      icon: "icons/link-icons/api-security.svg",
    },
    { href: "/alerts", name: "Alerts", icon: "icons/link-icons/alerts.svg" },
    {
      href: "/analytics",
      name: "Analytics",
      icon: "icons/link-icons/analytics.svg",
    },
    {
      href: "/modelConfig",
      name: "AI Configuration",
      icon: "icons/link-icons/ai-config.svg",
    },
  ];

  const settingsLinks = [
    {
      href: "/settings",
      name: "Settings",
      icon: "icons/link-icons/settings.svg",
    },
    { href: "/account", name: "Account", icon: "icons/link-icons/account.svg" },
  ];

  const styles = {
    sidebar: {
      width: "300px",
      padding: "20px",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      marginBottom: "15px",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontSize: "16px",
      fontWeight: "bold",
    },
    aside: {
      backgroundColor: theme.colors.backgroundSecondary,
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      border: "2px solid var(--background-primary)",
    },
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <aside style={styles.aside}>
      <nav style={styles.sidebar}>
        <div className="sidebar-item">
          <SearchInput />
        </div>
        {links.map((link) => (
          <div className="sidebar-item">
            <SidebarLink
              key={link.href}
              link={link}
              icon={link.icon}
              isActive={link.href === activeLink}
            />
          </div>
        ))}

        {/* Horizontal Divider */}
        <hr
          style={{ margin: "16px 0", border: "0", borderTop: "1px solid #333" }}
        />

        {/* Settings and Account Links */}
        {settingsLinks.map((link) => (
          <div className="sidebar-item">
            <SidebarLink
              key={link.href}
              link={link}
              icon={link.icon}
              isActive={link.href === activeLink}
            />
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
