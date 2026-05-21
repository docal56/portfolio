/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "../portfolio.module.css";

const asset = (name: string) => `/figma-assets/${name}`;

function Header() {
  return (
    <header className={styles.header} aria-label="Site header">
      <Link className={styles.homeButton} href="/">
        <span className={styles.arrowLeft}>
          <ArrowRight aria-hidden="true" size={20} strokeWidth={2} />
        </span>
        <span>Home</span>
      </Link>
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

function ProcessSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.processSection}>
      <h2>{title}</h2>
      <div className={styles.processBody}>{children}</div>
    </section>
  );
}

export default function ProcessPage() {
  return (
    <main className={styles.processPage}>
      <Header />
      <article className={styles.processArticle}>
        <section className={styles.processIntro}>
          <p className={styles.eyebrow}>Process</p>
          <h1>
            In a world where you can build anything, building the right thing is more
            important than ever.
          </h1>
          <div className={styles.largeBody}>
            <p>
              In order to build a successful product, it&apos;s essential to have a
              deep understanding of your users perspective, where you fit in their
              workflows and the value perception, they have of your product. Basically,
              what jobs-to-be-done does the product fulfil.
            </p>
            <p>
              This isn&apos;t about months of research, this is about consistently
              talking to users and getting feedback on what you create as fast as
              possible.
            </p>
          </div>
        </section>

        <ProcessSection title="Understanding the our business goals">
          <p>
            I start by understanding what we want to do as a business. Is the focus on
            growth, retention, increasing activation etc. This will dictate the types
            on conversations I have with users.
          </p>
        </ProcessSection>

        <ProcessSection title="Understanding the demand">
          <p>
            I start having conversations with users, the details depend on the business
            goals. But the core goals tend to be to understand where the product fits
            into their workflows, what other products does it have overlap with, what
            their expected outcomes, when they use the product and most importantly -
            what&apos;s the value of the product.
          </p>
          <p>
            Once I have a clear picture, I look for opportunities where we could either
            expand the product surface area, or if we need to improve on what we already
            have based on the initial feedback, and what aligns best with the business
            goals.
          </p>
        </ProcessSection>

        <ProcessSection title="Understanding the demand">
          <p>
            I start having conversations with users, the details depend on the business
            goals. But the core goals tend to be to understand where the product fits
            into their workflows, what other products does it have overlap with, what
            their expected outcomes, when they use the product and most importantly -
            what&apos;s the value of the product.
          </p>
          <p>
            Once I have a clear picture, I look for opportunities where we could either
            expand the product surface area, or if we need to improve on what we already
            have based on the initial feedback, and what aligns best with the business
            goals.
          </p>
        </ProcessSection>

        <ProcessSection title="Working out the solution">
          <p>
            I&apos;ve found that different roles, see problems from different angles,
            so it&apos;s really important to make sure that I talk to different people
            around possible solutions.
          </p>
          <p>
            For example, the support team are engaging with customers on a daily basis,
            engineering help me understand what&apos;s possible and I&apos;ve often found
            that something I planned to include the experience didn&apos;t need to be
            there because we can handle that for the user.
          </p>
        </ProcessSection>

        <ProcessSection title="Design process">
          <p>
            The type of prototype I work on depends on the value I&apos;m trying to
            create. Here are a few examples:
          </p>
          <ol>
            <li>
              At vidIQ the core value was giving users video ideas. So I started by
              creating ideas using ChatGPT and research from their channel and emailed
              them over to get immediate feedback on what the users cared about most.
            </li>
            <li>
              For Buzz, the value was in the Voice Agent so I worked on an Eleven Labs
              voice agent and got feedback on that first.
            </li>
            <li>
              Other times the value is in the UI so I&apos;ll get into Figma and then
              Cursor to work on a working prototype that users can engage with and try
              in their actual workflows as soon as possible.
            </li>
          </ol>
          <p>
            It&apos;s really easy to focus on the UI, but it&apos;s critical to
            understand what the product actually delivers and build the experience
            around that. If you&apos;re not delivering the core value, the best UI in
            the world won&apos;t save your product.
          </p>
          <p>
            Once the core value is feeling good, I start to build the experience around
            that. This is a blend between Figma and Cursor so I can get a real feel for
            how the experience will work in the real world, not just perfect conditions.
          </p>
        </ProcessSection>

        <ProcessSection title="Shipping">
          <p>
            When shipping, I work closely engineers to support and ensure what we ship
            is the same quality as the designs. I&apos;m also there to help out with
            anything that might pop up along the way.
          </p>
        </ProcessSection>
      </article>
    </main>
  );
}
