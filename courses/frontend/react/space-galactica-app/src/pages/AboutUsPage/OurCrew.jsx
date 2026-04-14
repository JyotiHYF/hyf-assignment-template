import styles from "./AboutUsPage.module.css";
const OurCrew = () => {
  return (
    <div className={styles.crewSection}>
      <p className={styles.label}>OUR TEAM</p>

      <h2 className={styles.heading}>Who we are</h2>

      <p className={styles.description}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries united by one goal:
        to make space travel accessible and exciting for all.
      </p>

      <div className={styles.crewGrid}>
        <div className={styles.card}>
          <img src="/crew/image-anousheh-ansari.png" alt="Sarah Vega" />
          <h3>Captain Sarah Vega</h3>
          <p>Founder + Mission Commander</p>
        </div>

        <div className={styles.card}>
          <img src="/crew/image-douglas-hurley.png" alt="Leo Redding" />
          <h3>Dr. Leo Redding</h3>
          <p>Chief Astrophysicist</p>
        </div>

        <div className={styles.card}>
          <img src="/crew/image-mark-shuttleworth.png" alt="Hana Lee" />
          <h3>Hana Lee</h3>
          <p>Chief Engineer</p>
        </div>

        <div className={styles.card}>
          <img src="/crew/image-victor-glover.png" alt="Alex Santos" />
          <h3>Alex Santos</h3>
          <p>Mission Specialist</p>
        </div>
      </div>
    </div>
  );
};
export default OurCrew;
