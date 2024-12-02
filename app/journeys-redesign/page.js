'use client'
import styles from "../page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Journeys Redesign</h1>
      </main>
      <footer className={styles.footer}>
        <Link href="/">Home</Link>
        <Link href="/about-me">About</Link>
        <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        <Link href="/journeys-redesign">Journeys Redesign</Link>
        <Link href="/advanced-reporting">Advanced Reporting</Link>
        <Link href="/push-notification">Rich Push Notification Workflow</Link>
        <Link href="/kqed-fm">KQED FM</Link>
      </footer>
    </div>
  );
}
