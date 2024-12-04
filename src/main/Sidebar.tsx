import React from 'react';
import SidebarLink from './SidebarLink';
import { useState, useEffect } from 'react';
import { theme } from '../styles/theme';
import { useLocation } from 'react-router';

const Sidebar = () => {
    const location = useLocation(); // Tracks the current URL path
    const [activeLink, setActiveLink] = useState(location.pathname);
    const links = [
        { href: "/dashboard", name: "Dashboard", icon: 'icons/link-icons/dashboard.svg' },
        { href: "/applications", name: "Applications", icon: "icons/link-icons/apps.svg" },
        { href: "/attack-discovery", name: "Attack Discovery", icon: "icons/link-icons/anomalies.svg" },
        { href: "/networks", name: "Networks", icon: "icons/link-icons/networks.svg" },
        { href: "/api-security", name: "API Security", icon: "icons/link-icons/api-security.svg" },
        { href: "/alerts", name: "Alerts", icon: "icons/link-icons/alerts.svg" },
        { href: "/analytics", name: "Analytics", icon: "icons/link-icons/analytics.svg" },
        { href: "/ai-configuration", name: "AI Configuration", icon: "icons/link-icons/ai-config.svg" },
    ];

    const settingsLinks = [
        { href: "/settings", name: "Settings", icon: "icons/link-icons/settings.svg" },
        { href: "/account", name: "Account", icon: "icons/link-icons/account.svg" },
    ];

    const styles = {
        sidebar: {
            width: '200px',
            backgroundColor: theme.colors.backgroundPrimary,
            padding: '20px',
            height: '100vh',
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        },
        list: {
            listStyleType: 'none',
            padding: 0,
            margin: 0,
        },
        listItem: {
            marginBottom: '15px',
        },
        link: {
            textDecoration: 'none',
            color: '#333',
            fontSize: '16px',
            fontWeight: 'bold',
        },
    };

    useEffect(() => {
        setActiveLink(location.pathname);
      }, [location.pathname]);

    return (
        <aside style={styles.sidebar}>
            <nav>
            {/* {links.map((link) => (
                <SidebarLink
                    key={link.href}
                    link={link}
                    icon={link.icon}
                    isActive={link.href === activeLink}
                />
            ))} */}

{/* <hr style={{ margin: "16px 0", border: "0", borderTop: "1px solid #333" }} /> */}
      {/* Main Sidebar Links */}
      {links.map((link) => (
        <SidebarLink
          key={link.href}
          link={link}
          icon={link.icon}
          isActive={link.href === activeLink}
        />
      ))}

      {/* Horizontal Divider */}
      <hr style={{ margin: "16px 0", border: "0", borderTop: "1px solid #333" }} />

      {/* Settings and Account Links */}
      {settingsLinks.map((link) => (
        <SidebarLink
          key={link.href}
          link={link}
          icon={link.icon}
          isActive={link.href === activeLink}
        />
      ))}

            </nav>
        </aside>
    );
};



export default Sidebar;
