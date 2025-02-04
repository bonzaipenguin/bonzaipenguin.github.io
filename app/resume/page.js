'use client';
import styles from "../studies.module.css";
import Link from "next/link";
import { Paper } from "@mui/material";

export default function Resume() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1>Resume / CV</h1>
            </header>
            <main className={styles.main}>
                <Paper elevation={0}>
                    <div>
                        <iframe
                            style={{width: '100%', height: '100%',}}
                            type='document/pdf'
                            src={'.../public/resume_2024.pdf'}
                            />
                    </div>
                </Paper>
            </main>
            <footer className={styles.footer}>
                <Link href="/">About</Link>
                <Link href="/scheduled-journeys">Scheduled Journeys</Link>
                <Link href="/advanced-reporting">Advanced Reporting</Link>
                <Link href="/push-notification">Rich Push Notification Workflow</Link>
                <Link href="/kqed-fm">KQED FM</Link>
            </footer>
        </div>

    );
  }