import * as React from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className={`${styles.common} ${styles.header}`}>
                <p>Header from child1 (PORT 8081)</p>
            </div>
        </>
    )
}
export default Header;


/**
<div className={styles.intro}>
                <nav className={styles.navbar}>
                    <div className={styles[`navbar-title`]}>Cool Company</div>
                    <a href="#" className={styles[`toggle-button`]}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </a>
                    <div className={styles[`navbar-link`]}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
 */