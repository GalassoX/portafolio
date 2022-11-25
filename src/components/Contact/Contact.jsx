import translate from '../../data/translate';
import Discord from '../../imgs/svgs/Discord';
import Mail from '../../imgs/svgs/Mail';
import Twitter from '../../imgs/svgs/Twitter';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.main} id='contact'>
            <div className={styles.info}>
                <h1>• {translate('CONTACT')}</h1>
                <div>
                    <Mail />
                    <a href="mailto:rafaelmarrugo28@gmail.com">rafaelmarrugo28@gmail.com</a>
                </div>
                <div>
                    <Twitter />
                    <a href="https://twitter.com/x_galasso" target="_blank" rel="noopener noreferrer">@x_galasso</a>
                </div>
                <div>
                    <Discord />
                    <p>Galasso#6459</p>
                </div>
            </div>
        </section>
    )
}

export default Contact;