'use client'
import styles from "../studies.module.css";
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Youth Media Challenge</h1>
      </header>
      <main className={styles.main}>
        <Grid container spacing={3}>
          <Grid size={12}>
              <Image src="/imgs/ymc/Challenge.png" alt="Example of a challenge" width={800} height={600} style={{objectFit: "cover"}}></Image>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <p>
              KQED’s education team is dedicated to teaching media literacy and providing a platform for student voices. Over the years, the program has thrived, especially in recent times. One of its initiatives, the Youth Media Challenge, emerged from the unique circumstances of COVID remote schooling. Through this challenge, teachers can assign topics that allow students to express their views on issues that matter to them.
            </p>
            <p>
              We designed the initiative for three distinct audiences: teachers, students, and family members (like grandmothers). Teachers need to be able to set up challenges, access tools for students to complete their submissions, and review their students’ entries. Students should be able to upload submissions and edit their existing entries. Additionally, family members want a user-friendly interface to easily find their grandchildren’s submissions, which is where an Elastic Search feature with straightforward filtering options comes into play. I was excited to take on this project because I saw significant room for improvement.
            </p>
            <p>
              Initially, I created a proof of concept (POC) for the teacher and student experiences, using my understanding of user behaviors and expectations. I then presented these POCs to teachers and students to gather feedback. I conducted multiple interviews throughout the process to gain deeper insights into their needs. I also received input from various stakeholders, requiring me to navigate some pushback. The original design was heavily influenced by some stakeholders who had a personal investment in it. Our small team consisted of two back-end engineers and one full-stack engineer, which allowed us to effectively tackle the more complex aspects of the teacher and student experiences. However, we had to postpone addressing the needs of family members initially.
            </p>
          </Grid>
          <Grid size={12}>
            <Image src="/imgs/ymc/Submission.png" alt="Submission flow" width={800} height={600} style={{objectFit: "cover"}}></Image>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <p>
              Teachers prioritized understanding the challenge&apos;s core intentions: What is it about? How does it fit into my curriculum? How long will it take? Are there resources available for me and my students? We ensured that joining the challenge was straightforward and that there were no negative consequences for opting out.
            </p>
            <p>
              I designed the submission form for students to be easy to complete and well-organized, minimizing the chances of missing any required fields.
            </p>
            <p>
              The search functionality was developed quickly. The engineering team built the back end to integrate with elastic search from the start. The user interface was designed to be simple, featuring a reverse chronological order display, fuzzy search capability, and basic filters for city, school, topic, student name, and teacher name.
            </p>
            <p>
              The initial results in the days following the launch were promising. Sign-ups and returning users increased, and teachers reported positive feedback regarding the ease of use in follow-up interviews. The early metrics looked very encouraging, especially given that this was a rolling challenge measured over the school year. Despite some engineering delays, the project&apos;s overall success helped build trust between the Education and Product teams.
            </p>
          </Grid>
          <Grid size={12}>
            <Image src="/imgs/ymc/AdvancedFilters.png" alt="Example of the advanced filters" width={800} height={600} style={{objectFit: "cover"}}></Image>
          </Grid>
        </Grid>
      </main>
      <footer className={styles.footer}>
        <Link href="/">About</Link>
        <Link href="/scheduled-journeys">Scheduled Journeys</Link>
        <Link href="/kqed-fm">KQED FM</Link>
        <div className={styles.active}>
          <Link href="/ymc" className="active">Youth Media Challenge</Link>
        </div>
        <Link href="/create-wizard">New Journey Wizard</Link>
      </footer>
    </div>
  );
}
