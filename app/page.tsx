import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={''}>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <div className={`${styles.content_item} ${styles.content_items}`}>
            <div>
              <About />
            </div>
            <div className={styles.content_right}>
              <Contact />
            </div>
          </div>
          <div className={`${styles.content_item} ${styles.content_item_last}`}>
            {/* @ts-ignore Server Component */}
            <Projects />
          </div>
        </div>
      </div>
    </main >
  )
}
