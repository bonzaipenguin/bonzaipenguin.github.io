'use client'
import Grid from '@mui/material/Grid2';
import PageTitle from "../components/pageTitle";
import Carousel from '../components/carousel';
import MyRole from "../components/myRole";
import SiteNav from "../components/siteNav";

import styles from "../studies.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <PageTitle
        study="Youth Media Challenge"
        subtitle="Empowering student voices through a scalable, multi-audience platform"
      />
      <main className={styles.main}>
        <Grid container spacing={3}>
          <Carousel images={[
            "/imgs/ymc/Challenge.jpg",
            "/imgs/ymc/Submission.jpg",
            "/imgs/ymc/AdvancedFilters.jpg"
          ]} />
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Overview</h2>
            <div>
              <p>KQED’s Education team focuses on media literacy and amplifying student perspectives. During the shift to remote learning, the <b>Youth Media Challenge</b> was created to give students a structured way to share their voices on meaningful topics.</p>
              <p>However, the initial experience lacked clarity, scalability, and usability across its three core audiences: <b>teachers, students, and families.</b></p>
              <p>I led the design of a more intuitive, flexible platform that simplified participation, improved submission workflows, and laid the groundwork for discovery through search.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>The Challenge</h2>
            <div>
              <p>Design a system that effectively serves <b>three distinct user groups</b> with very different needs:</p>
              <ul>
                <li><b>Teachers</b> → Create and manage challenges, guide students, review submissions</li>
                <li><b>Students</b> → Submit and edit work easily with minimal friction</li>
                <li><b>Families</b> → Discover and view student work (e.g., finding a child&apos;s submission)</li>
              </ul>
            </div>
            <div>
              <p>At the same time, we had to:</p>
              <ul>
                <li>Align with evolving stakeholder expectations</li>
                <li>Work within a small engineering team (2 backend, 1 full-stack)</li>
                <li>Deliver quickly during an active school year</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <MyRole
              role="Lead Product Designer"
              highlights={[
                "Defined product direction and user flows",
                "Designed teacher and student experiences end-to-end",
                "Conducted user interviews and usability testing",
                "Collaborated closely with Product, Engineering, and stakeholders",
                "Balanced user needs with technical constraints and timelines"
              ]}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Approach</h2>
            <div>
              <h2>1. Rapid Concepting & Validation</h2>
              <p>I started by creating <b>proofs of concept (POCs)</b> for both teacher and student experiences based on expected behaviors and mental models.</p>
            </div>
            <div>
              <p>These were:</p>
              <ul className={styles.listPad0}>
                <li>Presented directly to teachers and students</li>
                <li>Iterated through multiple rounds of feedback</li>
                <li>Refined through qualitative interviews</li>
              </ul>
              <p>This allowed us to validate assumptions early and avoid overbuilding.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>2. Navigating Stakeholder Influence</h2>
              <p>The initial product direction was heavily shaped by stakeholders with strong personal investment.</p>
            </div>
            <div>
              <p>I:</p>
              <ul className={styles.listPad0}>
                <li>Facilitated discussions to refocus on user needs</li>
                <li>Used research insights to support design decisions</li>
                <li>Balanced stakeholder vision with usability and scalability</li>
              </ul>
              <p>This helped align the team around a <b>more user-centered approach</b> without derailing progress.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>3. Prioritization Under Constraints</h2>
            </div>
            <div>
              <p>Given limited engineering resources, we focused on delivering <b>core functionality first:</b></p>
              <ul className={styles.listPad0}>
                <li>Teacher onboarding and challenge creation</li>
                <li>Student submission flow</li>
                <li>Foundational search experience</li>
              </ul>
              <p>The <b>family experience was intentionally scoped for a later phase,</b> ensuring we shipped a strong MVP.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Key Design Solutions</h2>
            <div>
              <h2>Teacher Experience</h2>
              <p>Teachers needed quick clarity before committing</p>
            </div>
            <div>
              <p>I designed flows that answered critical questions upfront:</p>
              <ul>
                <li>What is this challenge about?</li>
                <li>How does it fit into my curriculum?</li>
                <li>How much time will this take?</li>
                <li>What resources are available?</li>
              </ul>
            </div>
            <div>
              <p>The onboarding flow made it:</p>
              <ul>
                <li>Easy to join</li>
                <li>Low-risk to explore (no penalty for opting out)</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>Student Submission Flow</h2>
              <p>Students needed a <b>frictionless way to submit work.</b></p>
            </div>
            <div>
              <p>I designed a:</p>
              <ul className={styles.listPad0}>
                <li>Clean, structured submission form</li>
                <li>Step-by-step input experience</li>
                <li>Clear required fields to prevent incomplete submissions</li>
              </ul>
              <p>This reduced confusion and increased completion rates.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>Search & Discovery (Elastic Search)</h2>
            </div>
            <div>
              <p>To support families and broader discovery, we implemented a lightweight search experience:</p>
              <ul className={styles.listPad0}>
                <li>Reverse chronological feed</li>
                <li>Fuzzy search capability</li>
                <li>Simple filters:
                  <ul className={styles.nestedUL}>
                    <li>City</li>
                    <li>School</li>
                    <li>Topic</li>
                    <li>Student name</li>
                    <li>Teacher name</li>
                  </ul>
                </li>
              </ul>
              <p>The UI was intentionally minimal to ensure fast adoption and easy navigation.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Collaboration with Engineering</h2>
            <div>
              <p>The team structure (2 backend, 1 full-stack engineer) required tight alignment.</p>
              <ul className={styles.listPad0}>
                <li>Engineering integrated <b>Elastic Search</b> from the start</li>
                <li>I worked closely with them to keep UI simple and feasible</li>
                <li>We prioritized speed and scalability over complexity</li>
              </ul>
              <p>This collaboration allowed us to deliver quickly without sacrificing core usability.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Impact</h2>
            <div>
              <p>Early results post-launch showed strong momentum:</p>
              <ul>
                <li>📈 Increase in sign-ups and returning users</li>
                <li>👍 Positive teacher feedback in follow-up interviews</li>
                <li>🚀 Smooth adoption despite being a rolling, year-long challenge</li>
              </ul>
            </div>
            <div>
              <p>Beyond metrics, the project had a broader impact:</p>
              <ul>
                <li>Strengthened trust between <b>Education and Product teams</b></li>
                <li>Established a scalable foundation for future iterations</li>
                <li>Demonstrated the value of user-centered design in an education context</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Key Takeaways</h2>
            <div>
              <ul>
                <li><b>Designing for multiple audiences requires ruthless prioritization</b></li>
                <li><b>Early user validation prevents costly misalignment</b></li>
                <li><b>Simple, clear flows outperform feature-heavy solutions</b></li>
                <li><b>Strong cross-functional collaboration is critical in small teams</b></li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>What I’d Do Next</h2>
            <div>
              <ul>
                <li>Expand and refine the <b>family-facing experience</b></li>
                <li>Introduce personalization and saved searches</li>
                <li>Add richer media browsing and storytelling features</li>
                <li>Continue iterative testing with teachers and students</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </main>
      <SiteNav />
    </div>
  );
}