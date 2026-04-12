import styles from "../styles/Newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles.newsletterWrapper}>
      <div className={styles.newsletter}>
        <img src="/icons/dotsIcon5x5.svg" alt="" className={styles.dotsIcon5} />
        <div className={styles.newsletterTitle}>Newsletter</div>
        <div className={styles.newsletterDescription}>
          Be the first to hear about deals, offers and upcoming collections.
        </div>
        <div className={styles.emailInputButton}>
          <div className={styles.emailArea}>
            <input
              type="text"
              placeholder="Enter your email"
              className={`${styles.emailRow} ${styles.input}`}
            />
          </div>
          <div className={styles.buttonLineWrapper}>
            <button className={styles.button}>Subscribe</button>
            <div className={styles.buttonLine}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
