import React from 'react'
import ChangeMode from '../ChangeMode/ChangeMode';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.main}>
            <div>
                <ChangeMode />
            </div>
            <div className={styles.links}>
                <a href="#about"><i><b>About me</b></i></a>
                <a href="#projects"><i><b>Projects</b></i></a>
                <a href="#contact"><i><b>Contact</b></i></a>
            </div>
        </nav>
    )
}

export default NavBar;