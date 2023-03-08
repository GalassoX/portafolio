import LinkButtons from '../LinkButtons/LinkButtons';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <h1>Rafael Marrugo</h1>
      <div className={styles.info}>
        <p className={styles.info_about}>
          Soy un desarrollador FullStack, FrontEnd o Backend apasionado por la tecnología.
          <br />
          Soy autodidacta con +2 años de experiencia en el desarrollo web.
        </p>
        <div className={styles.info_lang}>
          <p>Lenguajes he usado y tengo experiencia:</p>
          <p>JavaScript, TypeScript, Go, Python, SQL, Java, Rust</p>
        </div>
        <div className={styles.buttons}>
          <div>
            <button className={`${styles.button} ${styles.button_cv}`}>
              <p>Ver CV</p>
              <i className="bi bi-box-arrow-up-right"></i>
            </button>
          </div>
          <div className={styles.link_buttons}>
            <LinkButtons />
          </div>
        </div>
      </div>
    </>
  )
}