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
          I&apos;m a product designer who believes great products start with empathy. My work has always been about understanding how people think, where they get stuck, and what they need—even when they can&apos;t quite articulate it.
        </p>
        <p>
          I&apos;ve designed products for marketers growing their businesses, public media audiences discovering trustworthy information, and educators and students creating meaningful learning experiences. No matter the domain, I&apos;m driven by solving real problems for real people.
        </p>
        <p>
          I lead by listening, collaborating closely with cross-functional teams, and turning complexity into clarity. Whether I&apos;m simplifying enterprise workflows or building new products from the ground up, my goal is to create thoughtful, intuitive experiences that make people&apos;s work—and lives—a little better.
        </p>
        <p>
          If you&apos;re looking for someone who combines systems thinking, strategic product design, and a deep commitment to users, I&apos;d love to connect.
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