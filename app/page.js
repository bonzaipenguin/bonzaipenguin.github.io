import styles from "./page.module.css";
import Link from "next/link";
import SiteNav from "./components/siteNav";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <header className={styles.header}>
        <h1>Jerusha Holsinger</h1>
        <h2>Designer, Amateur Photographer, Professional Coffee Drinker</h2>
      </header>
        <p>
          I’m a design nerd who believes great products start with real empathy. My work has always been about getting inside users’ heads—understanding their frustrations, workflows, and the needs they don’t always articulate.
        </p>
        <p>
          I’ve designed for teams trying to grow their businesses, audiences looking to better understand the world around them, and students finding their voice on topics that matter. Across all of it, I stay focused on solving real problems for real people.
        </p>
        <p>
          I lead with listening and follow with design. Whether it’s simplifying complex enterprise software or shaping new product experiences from the ground up, my goal is always the same: turn complexity into clarity and create tools that genuinely improve people’s lives.
        </p>
        <p>
          If that resonates, let’s talk.
        </p>
        <div>
          <Link href="https://www.linkedin.com/in/jerushaholsinger" target="_blank">LinkedIn</Link>
          <Link href="https://jerushaholsinger.com/resume_2026.pdf" target="_blank">Resume</Link>
          <Link href="https://jerushaholsinger.com/portfolio_2026.pdf" target="_blank">Portfolio</Link>
        </div>
      </main>
      <SiteNav />
    </div>
  );
}