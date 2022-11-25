import { useEffect } from 'react';
import translate from '../../data/translate';
import styles from './About.module.css';

const langs = ['JavaScript', 'TypeScript', 'HTML', 'Java', 'Rust', 'SQL', 'C#', 'Python', 'C++'];

const About = () => {

    useEffect(() => {
        const desc = document.querySelector(`#d-text`);
        desc.innerHTML = translate('LONG_DESC').replaceAll('\n', '<br />');
    }, []);

    return (
        <section className={styles.main} id='about'>
            <h1>{translate('ABOUT_ME')}</h1>
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