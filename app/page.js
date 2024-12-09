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
          I&apos;m a designer for a little over 10 years, who has worked at every size company from seed level to Fortune 500. I&apos;ve been the only designer and one of 30. To me, teamwork is key and the best idea always wins - which is usually a hybrid of all the ideas on the table.
        </p>
        <ul>
          <li><a href="https://www.linkedin.com/in/jerushaholsinger" target="_blank">LinkedIn</a></li>
          <li><a href="../public/resume_2024.pdf" target="_blank">Resume</a></li>
        </ul>
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