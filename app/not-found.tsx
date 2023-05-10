import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Pagina no encontrada</h1>
      <Link href="/">Volver a la pagina principal</Link>
    </div>
  )
}
