/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CaseStudy } from "./CaseStudy";
import styles from "./portfolio.module.css";

const asset = (name: string) => `/figma-assets/${name}`;

const shareWillowScreens = [
  "sharewillow-home.png",
  "sharewillow-current-period-modal.png",
  "sharewillow-jobs.png",
  "sharewillow-payouts.png",
  "sharewillow-plans.png",
  "sharewillow-plan-payouts.png",
  "sharewillow-more-menu.png",
  "sharewillow-notification.png",
];

const hereScreens = [
  "here-home-1.png",
  "here-home-2.png",
  "here-home-3.png",
  "here-home-4.png",
  "here-home-5.png",
];

function Header() {
  return (
    <header className={styles.header} aria-label="Site header">
      <div />
      <div className={styles.ctas}>
        <a
          className={styles.iconButton}
          href="https://www.linkedin.com/in/daveocal/"
          aria-label="LinkedIn"
        >
          <img src={asset("linkedin.svg")} alt="" />
        </a>
        <a className={styles.contactButton} href="mailto:daveo@hey.com">
          Get in touch
        </a>
      </div>
    </header>
  );
}

function PhoneStrip({ screens }: { screens: string[] }) {
  return (
    <>
      {screens.map((screen) => (
        <img
          className={styles.phoneScreen}
          key={screen}
          src={asset(screen)}
          alt=""
        />
      ))}
    </>
  );
}

function BuzzCarousel() {
  return (
    <>
      <div className={`${styles.webCard} ${styles.buzzWide}`}>
        <img className={styles.cardBg} src={asset("buzz-bg.png")} alt="" />
        <img
          className={styles.buzzIssueDetail}
          src={asset("buzz-issue-detail.png")}
          alt=""
        />
      </div>
      <div className={styles.webCard}>
        <img className={styles.cardBg} src={asset("buzz-bg.png")} alt="" />
        <img
          className={styles.buzzIssuesBoard}
          src={asset("buzz-issues-board.png")}
          alt=""
        />
      </div>
      <div className={styles.webCard}>
        <img className={styles.cardBg} src={asset("buzz-bg.png")} alt="" />
        <img
          className={styles.buzzAgentOverview}
          src={asset("buzz-agent-overview.png")}
          alt=""
        />
      </div>
      <div className={styles.webCard}>
        <img className={styles.cardBg} src={asset("buzz-bg.png")} alt="" />
        <img className={styles.buzzCallLogs} src={asset("buzz-call-logs.png")} alt="" />
      </div>
    </>
  );
}

function LynqCarousel() {
  return (
    <>
      <div className={`${styles.webCard} ${styles.lynqWide}`}>
        <img className={styles.cardBg} src={asset("lynq-bg.png")} alt="" />
        <img
          className={styles.lynqPrompt}
          src={asset("lynq-comparison-prompt.png")}
          alt=""
        />
        <img
          className={styles.lynqResults}
          src={asset("lynq-comparison-results.png")}
          alt=""
        />
      </div>
      <div className={styles.webCardWide}>
        <img className={styles.cardBg} src={asset("lynq-bg.png")} alt="" />
        <img className={styles.lynqLandscape} src={asset("lynq-pre-call.png")} alt="" />
      </div>
      <div className={styles.webCardWide}>
        <img className={styles.cardBg} src={asset("lynq-bg.png")} alt="" />
        <img
          className={styles.lynqLandscape}
          src={asset("lynq-active-call.png")}
          alt=""
        />
      </div>
      <div className={styles.webCardWide}>
        <img className={styles.cardBg} src={asset("lynq-bg.png")} alt="" />
        <img className={styles.lynqPostCall} src={asset("lynq-post-call.png")} alt="" />
      </div>
    </>
  );
}

function VidIQCarousel() {
  return (
    <>
      <div className={`${styles.webCardWide} ${styles.vidiqCard}`}>
        <img className={styles.vidiqBg} src={asset("vidiq-bg.png")} alt="" />
        <img className={styles.vidiqWeb} src={asset("vidiq-web.png")} alt="" />
      </div>
      <div className={`${styles.webCardWide} ${styles.vidiqCard}`}>
        <img className={styles.vidiqBg} src={asset("vidiq-bg.png")} alt="" />
        <img
          className={styles.vidiqOverview}
          src={asset("vidiq-overview-28d.png")}
          alt=""
        />
      </div>
      <div className={`${styles.webCardWide} ${styles.vidiqCard}`}>
        <img className={styles.vidiqBg} src={asset("vidiq-bg.png")} alt="" />
        <img
          className={styles.vidiqOverview}
          src={asset("vidiq-overview-max.png")}
          alt=""
        />
      </div>
      <div className={`${styles.webCardWide} ${styles.vidiqCard}`}>
        <img className={styles.vidiqBg} src={asset("vidiq-bg.png")} alt="" />
        <img className={styles.vidiqDay} src={asset("vidiq-day-hover.png")} alt="" />
      </div>
      <div className={`${styles.webCardWide} ${styles.vidiqCard}`}>
        <img className={styles.vidiqBg} src={asset("vidiq-bg.png")} alt="" />
        <img
          className={styles.vidiqTimeline}
          src={asset("vidiq-timeline-modal.png")}
          alt=""
        />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main className={styles.homePage}>
      <Header />
      <div className={styles.signature}>
        <p>Dave O&apos;Callaghan</p>
        <p>Product Designer</p>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroIntro}>
          <h1>I help start-ups figure out what to build and ship fast.</h1>
          <p>
            I&apos;m a product designer with 12+ years of end to end experience
            building products for remote start ups. From talking to users and
            understanding opportunities and then leveraging AI to ship fast, get
            feedback early and iterate.
          </p>
          <p>
            I primarily shift between Figma & Cursor to get ideas into code and get
            real world feedback as fast as possible.
          </p>
        </div>
        <p className={styles.processLink}>
          Scroll to see my work, if you&apos;re looking for a more in depth look at
          my approach you can read about <Link href="/process">my process.</Link>
        </p>
      </section>

      <CaseStudy
        className={styles.darkSection}
          copy={{
            title: "ShareWillow - Employee App",
            problem:
              "ShareWillow is an incentive plan platform for service companies. They needed a mobile app for employees to keep track of their incentives and clearly see how it contributed to their pay.",
            solution: [
              "As this was an initial version of the app, we wanted to keep it focused to showing the employees what was important to them. We learned that they wanted to see how much they would be getting paid and what jobs and incentives contributed to that.",
            ],
          }}
      >
        <PhoneStrip screens={shareWillowScreens} />
      </CaseStudy>

      <CaseStudy
        className={styles.buzzSection}
          copy={{
            title: "Buzz - AI for Property Management",
            problem:
              "After speaking with a few real estate agents, it became clear there was a burning pain point with property management. I heard the same story time and time again; ‘I’m at capacity managing the properties I have, but the initial ROI isn’t worth hiring more support.",
            solution: [
              "An AI receptionist was the perfect solution here. It increased capacity for a fraction of a new team member and it also enabled the existing property manager to focus on the more human aspects of the role, while letting AI handled the inbound issues from tenants and then arranging a contractor to go around and fix the issue at time that suits everyone.",
              "We created a simple Kanban board for the property manager to track the progress of all the issues, and then a simple dashboard, so they could monitor calls the work of the agent.",
            ],
          }}
      >
        <BuzzCarousel />
      </CaseStudy>

      <CaseStudy
        className={styles.lynqSection}
          copy={{
            title: "Lynq - Meeting Prep",
            problem:
              "VC’s are in back to back meetings with prospective companies all day every day. They want to show up feeling well prepared, but don’t have the time to do the research.",
            solution: [
              "Lynq was designed to give them everything they need before a call. We initially worked on enrichment, to give them an overview of the company they were meeting with and the feedback was really positive, but they wanted to engage with that info.",
              "So we extended this to include an AI assistant for the users, where they could get any info they needed instantly. This made it so much easier for them to pull together investment memos and key questions they needed to ask without hiring someone to do this for them.",
            ],
          }}
      >
        <LynqCarousel />
      </CaseStudy>

      <CaseStudy
        className={styles.darkSection}
          copy={{
            title: "vidIQ - View Stats",
            problem:
              "Creators wanted to understand what was driving growth for other channels, so they could learn and and try to apply those lessons to their own channels.",
            solution: [
              "We focused showing the channels journey overtime, understanding growth trajectory and what videos contributed to key growth points was a key thing our users wanted to see.",
              "Then we surfaced all of the A/B tests and changes a channel would make to their videos, so users could get a better idea on how they could experiment with their own channels.",
            ],
          }}
      >
        <VidIQCarousel />
      </CaseStudy>

      <CaseStudy
        className={styles.hereSection}
          copy={{
            title: "Here  - Mindful Social Network",
            problem:
              "My friend was a coach and wanted a way to connect the people in his group to share perspectives and help each other through what they were going through in life.",
            solution: [
              "We created an experience for small - private groups, where anyone in the group could share a ‘Spark’. This would be a short video on what they’re feeling and a question for people to write a reflection on.",
              "Once you shared your reflection, you could see what others had shared on that same topic and it would give you a better perspective.",
              "After the first couple of months of usage, we found that people were looking to take more control over the types of conversations they were having. So we introduced a new feature where they could request a specific type of response, which would show other users what they we’re looking for.",
            ],
          }}
      >
        <PhoneStrip screens={hereScreens} />
      </CaseStudy>
    </main>
  );
}
