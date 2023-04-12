import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.background} />
      <header className={styles.header}>
        <img
          className={styles.logo}
          src="/static/images/logo-light.svg"
          
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
        <div className={styles.description}>
          <div className={styles.number}>2</div>
          <div className={styles.description_item}>Data-driven decisions</div>
          <div className={styles.description_paragraph}>
            Make data-driven decisions with our product data analytics. Out
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
    </>
  );
}
