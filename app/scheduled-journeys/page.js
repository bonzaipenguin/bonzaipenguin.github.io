'use client'
import styles from "../studies.module.css";
import Link from 'next/link';

export default function scheduledJourneys() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Scheduled Journeys</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.pitch}>
          <p>
            <b>Use Case:</b> A marketing team wants to reach a specific audience that changes constantly and needs a marketing journey that can manage many customers in many different places within the journey.
          </p>
          <p>
            <b>Solution:</b> Use an event trigger—abandoning cart, , or large purchase, with personalized marketing campaign assets, that are ready to send when the individual customer reaches a specific step in the journey.
          </p>
        </div>
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
        <Link href="/">About</Link>
        <div className={styles.active}>
          <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        </div>
        <Link href="/push-notification">Rich Push Notification Workflow</Link>
        <Link href="/kqed-fm">KQED FM</Link>
      </footer>
    </div>
  );
}
