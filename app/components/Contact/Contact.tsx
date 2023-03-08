import SOCIALS from '@root/data/socials';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.main} id='contact'>
      <h2>Contactame!</h2>
      <div className={styles.items}>
        <div className={styles.contact_item}>
          <p className={`bi bi-envelope-fill icon_size ${styles.icon}`}></p>
          <p>rafaelmarrugo28@gmail.com</p>
        </div>
        <div className={styles.contact_item}>
          <p className={`bi bi-linkedin icon_size ${styles.icon}`}></p>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">/in/rafael-marrugo</a>
        </div>
        <div className={styles.contact_item}>
          <p className={`bi bi-twitter icon_size ${styles.icon}`}></p>
          <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer">@x_galasso</a>
        </div>
      </div>
    </div>
  )
}