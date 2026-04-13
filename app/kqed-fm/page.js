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
        study="KQED FM Mobile App"
        subtitle="Designing a modern listening experience for a new generation of public media users"
      />
      <main className={styles.main}>
        <Grid size={12}>
          <Carousel images={[
            "/imgs/kqed/landing-page.png",
            "/imgs/kqed/screens.png",
            "/imgs/kqed/screen-flow.png"
          ]} />
        </Grid>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Overview</h2>
            <div>
              <p>KQED FM set out to rebuild its mobile presence from the ground up. With declining engagement across traditional radio and TV, the organization needed a modern, mobile-first experience that could attract and retain a younger, more active audience.</p>
              <p>As the Lead UX Designer, I partnered closely with Product, Engineering, and cross-functional stakeholders to define the product vision, design the experience, and ship a fully functional mobile app.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>The Challenge</h2>
            <div>
              <p>KQED’s existing radio app was underperforming—buggy, hard to discover, and poorly rated—yet it still retained a small but loyal user base.</p>
            </div>
            <div>
              <p>We needed to answer a fundamental question:</p>
            </div>
            <div>
              <p><b>How might we create a simple, engaging listening experience that meets users where they are today?</b></p>
            </div>
            <div>
              <p>Key challenges:</p>
              <ul>
                <li>Declining traditional media engagement</li>
                <li>Fragmented content across radio, podcasts, and news</li>
                <li>Feature-heavy stakeholder requests</li>
                <li>Need to rebuild trust with users and internal teams</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <MyRole
              highlights={[
                "Led end-to-end product design",
                "Partnered with Product Manager on strategy and prioritization",
                "Facilitated stakeholder alignment and design reviews",
                "Conducted research synthesis and user interviews",
                "Collaborated closely with Engineering on feasibility and implementation"
              ]}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Research & Discovery</h2>
            <div>
              <p>We grounded the work in real user insights and existing product signals:</p>
            </div>
            <div>
              <h4>What we did:</h4>
              <ul>
                <li>Analyzed audience engagement data</li>
                <li>Reviewed App Store feedback to identify pain points</li>
                <li>Audited the existing app experience</li>
                <li>Conducted stakeholder interviews</li>
                <li>Ran user interviews to validate assumptions</li>
                <li>Mapped the competitive landscape of audio apps</li>
              </ul>
            </div>
            <div>
              <h4>Key insight:</h4>
              <p>Despite poor execution, users valued <b>quick access to live radio and relevant content.</b> The opportunity wasn’t to add more—it was to <b>simplify and focus.</b></p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Defining the Product</h2>
            <div>
              <p>I translated research into a clear product direction through a stakeholder-facing brief that aligned the team around a simple core experience.</p>
            </div>
            <div>
              <p>From a long list of feature requests, I distilled the product down to three essential user needs:</p>
              <ul className={styles.listPad0 }>
                <li><b>What’s on air right now?</b></li>
                <li><b>What’s up next?</b></li>
                <li><b>What’s something new to listen to?</b></li>
              </ul>
              <p>This became the foundation for all design decisions.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Design Process</h2>
            <div className={styles.designProcessSpacing}>
              <h2>1. Simplifying Complexity</h2>
              <p>I mapped all requested features into user flows, then systematically reduced them to a streamlined, intuitive experience.</p>
            </div>
            <div className={styles.designProcessSpacing}>
              <h2>2. Managing Scope</h2>
              <p>Stakeholder enthusiasm created pressure to expand scope. I held a strong product line, allowing only one strategic addition:</p>
              <p><b>→ Top 5 News Articles</b><br/>This bridged radio with KQED’s broader content ecosystem and aligned cross-team priorities.</p>
            </div>
            <div className={styles.designProcessSpacing}>
              <h2>3. Designing for Real-World Use</h2>
              <ul>
                <li>Built complete end-to-end flows, including edge cases and error states</li>
                <li>Collaborated with Engineering to align on technical constraints early</li>
                <li>Refined media player interactions for both live and on-demand listening</li>
                <li>Made fast calls to preserve UX quality under deadlines</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>The Solution</h2>
            <div>
              <p>A focused, fast, and intuitive listening experience:</p>
              <ul className={styles.listPad0 }>
                <li><b>Immediate playback</b> of live radio</li>
                <li>Clear <b>what’s on / what’s next</b> context</li>
                <li>Seamless shift between <b>live and on-demand</b></li>
                <li>Lightweight <b>content discovery</b> without overwhelm</li>
              </ul>
              <p>Everything ladders back to one goal:</p>
              <p><b>👉 Get users listening in seconds</b></p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Impact</h2>
            <div>
              <p>Within 3 weeks of launch:</p>
              <ul className={styles.listPad0 }>
                <li>⭐ Rating improved from <b>1.0 → 4.0</b></li>
                <li>📈 DAUs increased <b>5x (1.5K → 8K)</b></li>
                <li>🤝 Earned trust from content + editorial teams</li>
              </ul>
              <p>This wasn’t just a redesign—it reset how KQED thought about mobile.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>What This Project Demonstrates</h2>
            <div>
              <ul>
                <li><b>Product thinking &gt; feature delivery</b></li>
                <li>Ability to <b>simplify complex systems under pressure</b></li>
                <li>Strong <b>cross-functional leadership</b></li>
                <li>Knowing when to <b>push back—and when to align</b></li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ md: 1 }}>
            <h2 className={styles.sectionHead}>Reflection</h2>
            <p>Looking back, the biggest shift wasn’t visual—it was strategic.</p>
            <div>
            <div>
              I stopped thinking like a designer solving screens, and started thinking like a product owner defining <b>what deserves to exist.</b>
            </div>
              <p>If I were to take this further today:</p>
              <ul>
                <li>Personalization driven by listening behavior</li>
                <li>Smarter “resume listening” and recommendations</li>
                <li>Deeper integration across KQED’s content ecosystem</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </main>
      <SiteNav />
    </div>
  );
}
