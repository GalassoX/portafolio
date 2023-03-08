import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_options}>
        <a href="#">
          <div className={styles.sidebar_item}>
            About me
          </div>
        </a>
        <a href="#projects">
          <div className={styles.sidebar_item}>
            Projects
          </div>
        </a>
        <a href="#contact">
          <div className={styles.sidebar_item}>
            Contact me
          </div>
        </a>
      </div>
    </aside>
  )
}
