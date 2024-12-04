'use client'
import styles from "../studies.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img src="./resume_2024.pdf" />
      </main>
      <footer className={styles.footer}>
        <Link href="/">Home</Link>
        <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        <Link href="/journeys-redesign">Journeys Redesign</Link>
        <Link href="/advanced-reporting">Advanced Reporting</Link>
        <Link href="/kqed-fm">KQED FM</Link>
      </footer>
    </div>
  );
}
