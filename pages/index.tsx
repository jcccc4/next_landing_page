import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.background} />
      <header className={styles.header}>
        <Image
          priority
          className={styles.logo}
          src="/static/images/logo-light.svg"
          height={24.61}
          width={95.76}
          alt="Logo"
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
      </section>
    </>
  );
}
