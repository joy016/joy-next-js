import Image from 'next/image';
import styles from './page.module.css';
import TourPage from './components/tours/Tours';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles['tours-header']}>Our Tours</h1>
      <hr />
      <TourPage />
    </main>
  );
}
