import styles from "./AboutUsPage.module.css";
const OurValues = () => {
  return (
    <div className={styles.valuesSection}>
      <p className={styles.label}>OUR VALUES</p>

      <h2 className={styles.heading}>Rules to Live By</h2>

      <div className={styles.valuesGrid}>
        <div className={styles.valueItem}>
          <span className={styles.number}>01</span>
          <h3>Exploration</h3>
          <p>
            We are driven by a deep-seated desire to explore the unknown. We
            believe discovery is at the heart of human nature.
          </p>
        </div>

        <div className={styles.valueItem}>
          <span className={styles.number}>02</span>
          <h3>Innovation</h3>
          <p>
            We prioritize cutting-edge technology and continuously improve our
            spacecraft, safety, and experience.
          </p>
        </div>

        <div className={styles.valueItem}>
          <span className={styles.number}>03</span>
          <h3>Sustainability</h3>
          <p>
            We design missions to minimize environmental impact and protect
            future generations.
          </p>
        </div>

        <div className={styles.valueItem}>
          <span className={styles.number}>04</span>
          <h3>Community</h3>
          <p>
            We build a global community of space enthusiasts who share a passion
            for exploration.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurValues;
