'use client'
import styles from "../studies.module.css";
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>New Journey Wizard</h1>
      </header>
      <main className={styles.main}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Image src="/imgs/create/Create Journey Wizard.jpg" alt="New Journey Wizard" width={4096} height={1947} style={{objectFit: "cover"}}></Image>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <p>
              The Create New Journey Wizard is designed to help new users successfully create their first three to four journeys within 90 days without relying on documentation or individualized, one-on-one training. 
            </p>
          </Grid>
        </Grid>
      </main>
      <footer className={styles.footer}>
        <Link href="/">About</Link>
        <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        <Link href="/kqed-fm">KQED FM</Link>
        <Link href="/ymc">Youth Media Challenge</Link>
        <div className={styles.active}>
            <Link href="/create-wizard" className="active">New Journey Wizard</Link>
        </div>
      </footer>
    </div>
  );
}