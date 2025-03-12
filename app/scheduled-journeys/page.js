'use client'
import styles from "../studies.module.css";
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import Image from "next/image";

export default function scheduledJourneys() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Scheduled Journeys</h1>
      </header>
      <main className={styles.main}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Image src="/imgs/scheduled/Winback.png" alt="" width={500} height={500} style={{objectFit: "cover"}}></Image>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <p>
              Journeys is a workflow application that enables clients&apos; in-house marketing teams to manage communications with targeted audiences and customers. It accomplishes this through multiple channels, including email, SMS/MMS, and push notifications. By utilizing segmentation and delays, customers are not overwhelmed with communications from the company; instead, they receive timely messaging to help them achieve specific goals.
            </p>
            <p>
              In the case of Scheduled Journeys, a journey begins with an event, such as a customer’s birthday or the creation of a new profile. The audience is declared and refined through segmentation, which can be broad—like new users in North America—or very specific, such as users whose birthdays fall in March and who are located in California. Scheduled Journeys operate continuously, with the audience constantly updating. When a user meets the specified criteria, they are funneled into the beginning of the journey. This differs from a one-time journey, where the audience is set at the outset, and once published, it does not change to include any new users.
            </p>
          </Grid>
          <Grid size={12}>
            <Image src="/imgs/scheduled/Scheduled Wizard.png" alt="" width={500} height={500} style={{objectFit: "cover"}}></Image>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <p>
              I quickly developed a New Journey Wizard to streamline this process and distinguish between one-time and scheduled journeys. I then focused on designing key features and creating a user flow for audience creation, using events like customer win-backs or audience events like birthdays. Next, I designed a flow to refine the audience split step, similar to the initial step but separating the audience into different paths. Following that, I incorporated an existing cross-product filter. After addressing all loose ends, I polished the final design, completing the project in time for a January release.
            </p>
            <p>
              However, this straightforward design process encountered challenges. I began collaborating with the Cheetah Digital team to design filters and campaign creation UIs to simplify the setup process for the assets in a Scheduled Journey. The team initially struggled to understand the technical requirements of a Scheduled Journey and how these would impact the workflow within Cheetah Digital. Due to these technical concerns, the engineering team took over the design process, shifting my role to a production designer. This involved minor adjustments like removing list items from drop-down menus, changing button designs, and adding labels to title bars. Consequently, the time required to scope and re-scope the project and the need to address technical requirements negatively affected the launch timeline, which shifted from January 2025 to the end of Q2, possibly extending into Q3.
            </p>
            <p>
              In my retrospective on the project, I identified several key design issues that could have ensured the delivery of a user-friendly feature, despite it being a cross-application product. One of the most important lessons learned is not to be afraid of pushing back against senior engineers and directors when user considerations are being overlooked. Additionally, it’s essential to visualize the ideal UI design and use it as a discussion foundation. I also emphasize the need for clarity and efficiency in planning; we don’t have three months to finalize how a product feature will be scoped. Moving forward, I have become more vocal and unafraid to push back against poorly designed user interfaces.
            </p>
          </Grid>
          <Grid size={12}>
            <Image src="/imgs/scheduled/SegmentBuilderStates.png" alt="" width={500} height={500} style={{objectFit: "cover"}}></Image>
          </Grid>
        </Grid>
      </main>
      <footer className={styles.footer}>
        <Link href="/">About</Link>
        <div className={styles.active}>
          <Link href="/scheduled-journeys" className="active">Scheduled Journeys</Link>
        </div>
        <Link href="/kqed-fm">KQED FM</Link>
        <Link href="/ymc">Youth Media Challenge</Link>
        <Link href="/create-wizard">New Journey Wizard</Link>
      </footer>
    </div>
  );
}
