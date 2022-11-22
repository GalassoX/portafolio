import Github from '../../imgs/svgs/Github';
import LinkedIn from '../../imgs/svgs/LinkedIn';
import Twitter from '../../imgs/svgs/Twitter';

import styles from './Home.module.css';

const social = [
    {
        name: 'Github',
        img: <Github />,
        link: 'https://github.com/GalassoX'
    },
    {
        name: 'LinkedIn',
        img: <LinkedIn />,
        link: 'https://www.linkedin.com/in/rafael-marrugo/'
    },
    {
        name: 'Twitter',
        img: <Twitter />,
        link: 'https://twitter.com/x_galasso'
    }
];

const Home = () => {
    return (
        <section className={styles.main}>
            <h1>Rafael Marrugo</h1>
            <p><u>Software Developer, technologies enjoyer</u></p>
            <div className={styles.social}>
                {social.map(s => (
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                        {s.img}
                    </a>
                ))}
            </div>
        </section >
    )
}

export default Home;