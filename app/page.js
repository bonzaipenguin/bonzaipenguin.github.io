import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <header className={styles.header}>
        <h1>Jerusha Holsinger</h1>
        <h2>Designer, Amateur Photographer, Professional Coffee Drinker</h2>
      </header>
        <p>
          I’m a design nerd who believes great products start with genuine empathy.
        </p>
        <p>
          My career has been about getting inside users’ heads—understanding their pains, frustrations, the ways they work, and hidden needs.
        </p>
        <p>
          Whether I’m working with teams trying to grow their business and reach their customers, people who want to understand local and national news better, or students getting their voices heard about topics that mean the most to them in creative ways, I’m laser-focused on solving real problems for real people.
        </p>
        <p>
          My approach is all about listening first and designing second. I’ve transformed complex enterprise software from intimidating technical mazes into intuitive tools that make people’s work lives easier and more meaningful.
        </p>
        <p>
          Reach out if that sounds good.  I’d love to help you design your next product.
        </p>
        <div>
          <Link href="https://www.linkedin.com/in/jerushaholsinger" target="_blank">LinkedIn</Link>
          <Link href="https://bonzaipenguin.github.io/resume_2025.pdf" target="_blank">Resume</Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.active}>
          <Link href="/" className="active">About</Link>
        </div>
        <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        <Link href="/kqed-fm">KQED FM</Link>
        <Link href="/ymc">Youth Media Challenge</Link>
        <Link href="/create-wizard">New Journey Wizard</Link>
      </footer>
    </div>
  );
}