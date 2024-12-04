// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Welcome to My React App</h1>
        </header>
    );
};

const styles: {
    header: React.CSSProperties;
    title: React.CSSProperties;
} = {
    header: {
        backgroundColor: '#282c34',
        padding: '20px',
        textAlign: 'center',
    },
    title: {
        color: 'white',
        fontSize: '24px',
    },
};

export default Header;