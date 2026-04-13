'use client'
import Grid from '@mui/material/Grid2';
import PageTitle from "../components/pageTitle";
import Carousel from '../components/carousel';
import StudyOverview from "../components/studyOverview";
import ProblemStatement from "../components/problemStatement";
import MyRole from "../components/myRole";
import SiteNav from "../components/siteNav";

import styles from "../studies.module.css";


export default function scheduledJourneys() {
  return (
    <div className={styles.page}>
      <PageTitle
        study="Scheduled Journeys"
        subtitle="Bringing clarity to continuous, event-driven marketing workflows"
      />
      <main className={styles.main}>
        <Grid size={12}>
          <Carousel images={[
            "/imgs/scheduled/Winback.png",
            "/imgs/scheduled/SegmentBuilderStates.png",
            "/imgs/scheduled/ScheduledWizard.png"
          ]} />
        </Grid>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 12 }} offset={{ md: 1 }}>
            <StudyOverview
              product="Journeys (cross-channel marketing workflow tool)"
              role="Lead Product Designer"
              scope="End-to-end design for Scheduled Journeys"
              timeline="Q4 2024 – Q2 2025 (extended due to technical complexity)"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <ProblemStatement
              problem="Marketing teams relied on Journeys to orchestrate customer communications across email, SMS, and push. However, the system lacked a clear way to support continuous, event-driven campaigns—such as birthdays or lifecycle triggers—without creating confusion or operational overhead."
              struggles={[
                "Understand the difference between one-time vs ongoing campaigns",
                "Define audiences that update dynamically over time",
                "Manage complex segmentation without overwhelming setup flows"
              ]}
              impact={[
                "Increased setup friction for marketers",
                "Risk of over- or under-communicating with users",
                "Reduced confidence in campaign configuration"
              ]}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <MyRole
              role="I led the design of Scheduled Journeys from concept to delivery, including:"
              highlights={[
                "Defining the interaction model for continuous journeys",
                "Designing the creation and audience configuration flows",
                "Aligning with Product and Engineering across multiple systems",
                "Driving clarity in a technically complex, evolving space"
              ]}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Approach</h2>
            <div>
              <h2>1. Establishing a Clear Mental Model</h2>
              <p>The first challenge was conceptual:<br />Users needed to clearly understand how Scheduled Journeys differ from one-time journeys.</p>
            </div>
            <div>
              <p>I introduced a distinct entry point via a New Journey Wizard, guiding users to:</p>
              <ul>
                <li>Choose between one-time and scheduled journeys</li>
                <li>Understand how audiences behave over time</li>
                <li>Configure event-based triggers upfront</li>
              </ul>
            </div>
            <div>
              <p><b>Why this mattered:</b> Without a strong mental model, downstream configuration becomes error-prone and confusing.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>2. Simplifying Audience Creation</h2>
              <p>Scheduled Journeys required dynamic audiences that continuously update.</p>
            </div>
            <div>
              <p>I designed a flexible system that allowed users to:</p>
              <ul>
                <li>Define audiences broadly (e.g., new users in North America)</li>
                <li>Refine them with precise filters (e.g., March birthdays in California)</li>
                <li>Trigger journeys based on real-time events (e.g., profile creation)</li>
              </ul>
            </div>
            <div>
              <p>To reduce cognitive load, I:</p>
              <ul>
                <li>Structured the flow step-by-step</li>
                <li>Reused familiar patterns where possible</li>
                <li>Introduced progressive disclosure for advanced segmentation</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>3. Designing for Branching Logic</h2>
            </div>
            <div>
              <p>To support more advanced use cases, I designed an audience split step, enabling:</p>
              <ul className={styles.listPad0}>
                <li>Conditional branching within journeys</li>
                <li>Different messaging paths based on user attributes</li>
              </ul>
            </div>
            <div>
              <p>This extended the initial audience logic into a scalable system for personalization.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>4. Leveraging Existing Systems</h2>
              <p>Rather than reinventing filtering logic, I incorporated an existing cross-product filter system.</p>
            </div>
            <div>
              <h4>Tradeoff:</h4>
              <ul className={styles.listPad0}>
                <li>✅ Faster implementation and consistency across tools</li>
                <li>⚠️ Less flexibility in tailoring the experience specifically for journeys</li>
              </ul>
              <p>This required careful adaptation to ensure usability within a new context.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Challenge</h2>
            <div>
              <h2>Misalignment Between UX and Technical Constraints</h2>
            </div>
            <div>
              <p>As the project progressed, significant technical challenges emerged:</p>
              <ul>
                <li>Real-time audience updates introduced system complexity</li>
                <li>Dependencies across multiple products impacted feasibility</li>
                <li>Engineering began proposing solutions that prioritized implementation over usability</li>
              </ul>
            </div>
            <div>
              <p>This created tension between:</p>
              <ul>
                <li><b>What was ideal for users</b></li>
                <li><b>What was feasible within system constraints</b></li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Outcome</h2>
            <div>
              <ul>
                <li>Delivered a foundational model for continuous, event-driven journeys</li>
                <li>Established clearer differentiation between static vs dynamic campaigns</li>
                <li>Informed cross-team understanding of how Scheduled Journeys should function</li>
              </ul>
            </div>
            <div>
              <p>While the launch timeline extended due to technical complexity, the design work:</p>
              <ul>
                <li>Created a shared framework for future iterations</li>
                <li>Highlighted key system-level considerations for scaling the product</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Key Learnings</h2>
            <div>
              <h2>1. Align on System Behavior Early</h2>
              <p>In complex products, the biggest UX risk isn’t UI—it’s unclear system logic.</p>
            </div>
            <div>
              <p>Establishing how the system behaves over time (e.g., how users enter and move through journeys) is critical before refining interface details.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>2. Advocate for the User in Technical Conversations</h2>
              <p>When constraints emerge, UX can quickly become reactive.</p>
            </div>
            <div>
              <p>I learned the importance of:</p>
              <ul>
                <li>Anchoring discussions in user clarity</li>
                <li>Using prototypes and flows to guide alignment</li>
                <li>Confidently pushing back when usability is at risk</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <div>
              <h2>3. Design is a Leadership Function at Senior Level</h2>
            </div>
            <div>
              <p>This project reinforced that senior designers must:</p>
              <ul>
                <li>Drive alignment across disciplines</li>
                <li>Navigate ambiguity and competing priorities</li>
                <li>Maintain a clear vision, even under constraints</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Reflection</h2>
            <div>
              <p>If I were to approach this again, I would:</p>
              <ul>
                <li>Push earlier for alignment on the interaction model before UI exploration</li>
                <li>Facilitate more structured collaboration between Product and Engineering</li>
                <li>Use high-fidelity prototypes sooner to reduce ambiguity</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </main>
      <SiteNav />
    </div>
  );
}
