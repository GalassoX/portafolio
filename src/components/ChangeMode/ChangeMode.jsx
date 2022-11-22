import React, { useEffect, useState } from 'react';
import Moon from '../../imgs/svgs/Moon';
import Sun from '../../imgs/svgs/Sun';

import styles from './ChangeMode.module.css';

const ChangeMode = () => {

    const [lightMode, setLightMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const dataTheme = lightMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', dataTheme);
    }, [lightMode]);

    return (
        <div className={styles.main}>
            <svg className={styles.icons}>
                <Moon />
            </svg>
            <label className={styles.switch}>
                <input type="checkbox" value={lightMode} onChange={() => setLightMode(!lightMode)} />
                <div className={styles.slider}></div>
            </label>
            <svg className={styles.icons}>
                <Sun />
            </svg>
        </div>
    )
}

export default ChangeMode;