'use client';
import styles from "../studies.module.css";
import Link from "next/link";

export default function Resume() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1>Resume / CV</h1>
            </header>
            <main className={styles.main}>
                <object type="document/pdf" src="../resume_2024.pdf" width="100%" height="1040"></object>
            </main>
            <footer className={styles.footer}>
                <Link href="/scheduled-journeys">Scheduled Journeys</Link>
                <Link href="/advanced-reporting">Advanced Reporting</Link>
                <Link href="/push-notification">Rich Push Notification Workflow</Link>
                <Link href="/kqed-fm">KQED FM</Link>
            </footer>
        </div>

    );
  }