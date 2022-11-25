import { useEffect } from 'react';
import styles from './About.module.css';

const description = 'Me gusta programar tanto como los juegos.\nSoy un desarrollador de software con ganas de aprender todos los días algo nuevo y tener cosas que hacer a toda hora.\n\nCuento con experiencia en multiples lenguajes como:';

const langs = ['JavaScript', 'TypeScript', 'HTML', 'Java', 'Rust', 'SQL', 'C#', 'Python', 'C++'];

const About = () => {

    useEffect(() => {
        const desc = document.querySelector(`#d-text`);
        desc.innerHTML
            = description.replaceAll('\n', '<br />')
    }, []);

    return (
        <section className={styles.main} id='about'>
            <h1>About me</h1>
            <div className={styles.description}>
                <p id='d-text'></p>
                <ul>
                    {langs.map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default About;