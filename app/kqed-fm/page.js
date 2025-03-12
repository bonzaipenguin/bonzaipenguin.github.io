'use client'
import styles from "../studies.module.css";
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>KQED FM</h1>
      </header>
      <main className={styles.main}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Image src="/imgs/kqed/landing-page.png" alt="view of the live streaming player" width={6000} height={4500} style={{objectFit: "cover"}}></Image>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <p>
              KQED FM started from scratch when the Vice President of Product requested the development of a new mobile app. I collaborated closely with the Product Manager, gathered initial feedback from other UX designers, and participated in all stakeholder meetings. With declining radio and TV audiences, KQED needed a fresh approach to engage a younger, more active audience.
            </p>
            <p>
              The process began with extensive brainstorming and research. We analyzed audience engagement data and downloaded the existing radio app to understand the current user experience. Reviewing app store comments gave us valuable insight into how users interacted with the app. Despite its bugs and minimal visibility, the existing app had a small but dedicated user base, which presented an opportunity for a significant impact with a new, polished mobile app.
            </p>
            <p>
              Following our research, I compiled a product brief for stakeholders. The feedback was overwhelmingly positive, with meaningful critiques and enthusiasm for the proposal. One key outcome from that meeting was a lengthy list of feature requests. I organized this list into a flowchart detailing the essential user journeys. After mapping these flows on a whiteboard, I streamlined the features to a clean and simple set that addressed the following questions: What’s on air right now? What’s up next? What’s something new to listen to? After that, it was time to interview customers.
            </p>
          </Grid>
          <Grid size={12}>
            <Image src="/imgs/kqed/screens.png" alt="variety of app views" width={6000} height={4500} style={{objectFit: "cover"}}></Image>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <p>
              With everyone aligned on the project, managing expectations and resisting scope creep became essential. The only addition we allowed was prioritizing one feature that initially felt out of place: including the top five most viewed articles, which connected the app to the website. This gesture acknowledged the news team and established a link between the online TV platform, news, and radio.
            </p>
            <p>
              To prepare for all possible notifications and errors a user might encounter, I mapped out every screen and user flow while discussing technical constraints with the engineering team. I also fine-tuned the media players for both live and pre-recorded audio. Quick, on-the-fly decisions were necessary to maintain a user-centric experience, avoiding any shortcuts that could compromise it.
            </p>
            <p>
              The app primarily streams live radio broadcasts and original content in the form of podcasts. It features a broadcast schedule with an option for users to set reminders for shows. In the first three weeks after its launch, the app improved from a 1-star rating to 4 stars. Daily active users increased from approximately 1,500 to 8,000. This successful launch built significant trust with the content teams, which was crucial for the product team&apos;s success.
            </p>
          </Grid>
          <Grid size={12}>
            <Image src="/imgs/kqed/screen-flow.png" alt="App screen flow" width={6500} height={4000} style={{objectFit: "cover"}}></Image>
          </Grid>
        </Grid>
      </main>
      <footer className={styles.footer}>
        <Link href="/">About</Link>
        <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        <div className={styles.active}>
          <Link href="/kqed-fm" className="active">KQED FM</Link>
        </div>
        <Link href="/ymc">Youth Media Challenge</Link>
        <Link href="/create-wizard">New Journey Wizard</Link>
      </footer>
    </div>
  );
}
