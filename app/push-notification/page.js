'use client'
import styles from "../studies.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Rich Push Notification Workflow</h1>
      </header>
      <main className={styles.main}>
        <p>
          Subway tile dreamcatcher prism knausgaard migas. Coloring book DIY cloud bread hammock venmo literally. Activated charcoal twee tumeric, cloud bread fit tacos edison bulb af four loko chia crucifix. Chicharrones solarpunk shoreditch man braid.
        </p>
        <p>
          Marfa af everyday carry franzen. Truffaut chartreuse ascot skateboard asymmetrical twee. JOMO fixie dreamcatcher church-key helvetica letterpress knausgaard health goth keytar gatekeep. Hoodie beard af ramps lo-fi wolf. Pabst tattooed slow-carb keytar, selfies godard celiac succulents intelligentsia.
        </p>
        <p>
          Semiotics gatekeep blackbird spyplane, kombucha 8-bit tumeric farm-to-table. Synth lumbersexual ugh vice gentrify celiac shoreditch banjo four loko. Humblebrag tacos green juice DIY, kombucha poke you probably havent heard of them. Small batch tbh viral kinfolk DSA, artisan art party pour-over asymmetrical yr VHS leggings dreamcatcher tattooed. Af cloud bread bruh snackwave prism, marxism vexillologist helvetica. Succulents cornhole slow-carb VHS. Offal beard polaroid, organic edison bulb cliche chambray kickstarter.
        </p>
      </main>
      <footer className={styles.footer}>
        <Link href="/">Jerusha Holsinger</Link>
        <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        <Link href="/journeys-redesign">Journeys Redesign</Link>
        <Link href="/advanced-reporting">Advanced Reporting</Link>
        <Link href="/kqed-fm">KQED FM</Link>
      </footer>
    </div>
  );
}
