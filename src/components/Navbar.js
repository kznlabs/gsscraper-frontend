import React from 'react';
import styles from '../styles/Navbar.module.css'; // Import CSS module

function Navbar() {
    return (
        <div className={styles.navbar}>
            <h1>GSScraper <sup>v23.0811.3</sup></h1>
        </div>
    );
}

export default Navbar;
