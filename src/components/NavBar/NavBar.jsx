import React from 'react'
import translate from '../../data/translate';
import ChangeMode from '../ChangeMode/ChangeMode';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.main}>
            <div>
                <ChangeMode />
            </div>
            <div className={styles.links}>
                <a href="/#"><i><b>{translate('HOME')}</b></i></a>
                <a href="/#about"><i><b>{translate('ABOUT_ME')}</b></i></a>
                <a href="/#projects"><i><b>{translate('PROJECTS')}</b></i></a>
                <a href="/#contact"><i><b>{translate('CONTACT')}</b></i></a>
            </div>
        </nav>
    )
}

export default NavBar;