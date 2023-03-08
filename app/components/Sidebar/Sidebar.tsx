import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_options}>
        <a href="#">
          <div className={styles.sidebar_item}>
            Sobre mí
          </div>
        </a>
        <a href="#contact">
          <div className={styles.sidebar_item}>
            Contactame!
          </div>
        </a>
        <a href="#projects">
          <div className={styles.sidebar_item}>
            Proyectos
          </div>
        </a>
      </div>
    </aside>
  )
}
