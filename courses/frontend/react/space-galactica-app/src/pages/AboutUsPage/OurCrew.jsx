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
          <h3>Captain - Sarah Vega</h3>
          <p>
            A former NASA astronaut with over 15 years of experience, Captain
            Vega leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </div>

        <div className={styles.card}>
          <img src="/crew/image-douglas-hurley.png" alt="Leo Redding" />
          <h3>Chief Astrophysicist - Leo Redding</h3>
          <p>
            Our chief astrophysicist, Dr. Redding, is a renowned scientist who
            has contributed to major space discoveries. He ensures that every
            journey is as educational as it is exhilarating.
          </p>
        </div>

        <div className={styles.card}>
          <img src="/crew/image-mark-shuttleworth.png" alt="Hana Lee" />
          <h3>Chief Engineer - Victor Lee</h3>
          <p>
            With his extensive background in aerospace engineering, Victor Lee
            is responsible for the state-of-the-art technology that powers our
            spacecraft. His innovation ensures that our travelers are always in
            safe hands.
          </p>
        </div>

        <div className={styles.card}>
          <img src="/crew/image-victor-glover.png" alt="Alex Santos" />
          <h3>Mission Specialist - Alex Santos</h3>
          <p>
            As a mission specialist, Alex’s job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurCrew;
