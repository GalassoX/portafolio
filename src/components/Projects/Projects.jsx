import React from 'react'
import { PROJECTS } from '../../data/info';
import translate from '../../data/translate';

import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={styles.main} id='projects'>
            <h1>{translate('PROJECTS')}</h1>
            <div className={styles.grid}>
                {PROJECTS.map((p, i) => (
                    <div className={styles.grid_item} key={i}>
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <a href={p.repository} target="_blank" rel="noopener noreferrer">{translate('VIEW_REPO')}</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;