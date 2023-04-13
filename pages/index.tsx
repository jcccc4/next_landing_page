import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.background} />
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/static/images/logo-light.svg"
          alt="Logo"
          width={95.76}
          height={24.61}
        />
        <div className={styles.header_text}>Apply for access</div>
      </header>
      <div className={styles.section_container}>
        <div className={styles.section}>
          <div className={styles.quotes}>
            Data <span className={styles.tailored}>tailored</span> to your
            needs.
          </div>
          <button>Apply for access</button>
        </div>
      </div>
      <Image
        className={styles.hero}
        src="/static/images/image-hero.webp"
        height={184}
        width={320}
        alt="phone"
      />
      <section className={styles.characteristics}>
        <div className={styles.description}>
          <div className={styles.number}>1</div>
          <div className={styles.description_item}>Actionable insights</div>
          <div className={styles.description_paragraph}>
            Optimize your products, improve customer satisfaction and stay ahead
            of the competition with our produdct data analytics.
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.number}>2</div>
          <div className={styles.description_item}>Data-driven decisions</div>
          <div className={styles.description_paragraph}>
            Make data-driven decisions with our product data analytics. Our
            AI-genereted reports help you unlock insights hidden in your product
            data.
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.number}>3</div>
          <div className={styles.description_item}>Always affordable</div>
          <div className={styles.description_paragraph}>
            Always affordable pricing that scales with your business. Get
            top-quality product data analytics services without hidden costs or
            unexpected fees.
          </div>
        </div>
      </section>
      <div className={styles.portfolio}>
        <div className={styles.profile}>
          <Image
            className={styles.profilePic}
            src="/static/images/image-founder.webp"
            height={281}
            width={281}
            alt="phone"
          />
        </div>

        <div className={styles.profileContainer}>
          <div className={styles.profileTitle}>Be the first to test</div>
          <div className={styles.profileDescription}>
            `Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I&apos;ll be in touch to
            schedule a call.`
          </div>
          <button>Apply for access</button>
        </div>
      </div>
      <div className={styles.links}>
        <Image
          className={styles.logoDark}
          src="/static/images/logo-dark.svg"
          alt="Logo"
          width={95.76}
          height={24.61}
        />
        <div className={styles.socialLinks}>
          <Image
            className={styles.social}
            src="/static/images/icon-facebook.svg"
            alt="Logo"
            width={20}
            height={20}
          />
          <Image
            className={styles.social}
            src="/static/images/icon-twitter.svg"
            alt="Logo"
            width={20}
            height={20}
          />
          <Image
            className={styles.social}
            src="/static/images/icon-instagram.svg"
            alt="Logo"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
}
