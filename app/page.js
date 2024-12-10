import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <header className={styles.header}>
        <h1>Jerusha Holsinger</h1>
        <h2>Designer, Amateur Photographer, Coffee Drinker</h2>
      </header>
        <p>
          I have over 10 years of design experience, having worked at companies ranging from startups to Fortune 500 corporations. I have experience as both a solo designer and part of a team of 30. Teamwork is essential, as great ideas often emerge from diverse perspectives.
        </p>
        <div>
          <Link href="https://www.linkedin.com/in/jerushaholsinger" target="_blank">LinkedIn</Link>
          <Link href="../public/resume_2024.pdf" target="_blank">Resume</Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        <Link href="/journeys-redesign">Journeys Redesign</Link>
        <Link href="/advanced-reporting">Advanced Reporting</Link>
        <Link href="/push-notification">Rich Push Notification Workflow</Link>
        <Link href="/kqed-fm">KQED FM</Link>
      </footer>
    </div>
  );
}