import SOCIALS from "@root/data/socials";
import styles from './LinkButtons.module.css';

export default function LinkButtons() {
  return (
    <>
      <div>
        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
          <p className={`bi bi-github icon_size ${styles.icon}`}></p>
        </a>
      </div>
      <div>
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">
          <p className={`bi bi-linkedin icon_size ${styles.icon}`}></p>
        </a>
      </div>
      <div>
        <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer">
          <p className={`bi bi-twitter icon_size ${styles.icon}`}></p>
        </a>
      </div>
    </>
  )
}
