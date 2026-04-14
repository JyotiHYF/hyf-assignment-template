import styles from "./AboutUsPage.module.css";
const OurPartners = () => {
  return (
    <div className={styles.partners}>
      <p className={styles.label}>OUR PARTNERS</p>

      <h2 className={styles.heading}>
        We collaborate with progressive, ambitious brands we believe in.
      </h2>

      <div className={styles.partnerLogos}>
        <img src="/business_partners/alphabet-logo.png" alt="Alphabet" />
        <img src="/business_partners/amazon_logo.png" alt="Amazon" />
        <img src="/business_partners/CBC_Logo_White.png" alt="CBC" />
        <img
          src="/business_partners/Microsoft-Logo-white.png"
          alt="Microsoft"
        />
        <img src="/business_partners/nyu-logo.png" alt="NYU" />
        <img
          src="/business_partners/QueensLogo_white.png"
          alt="Queens University"
        />
        <img src="/business_partners/samsung-logo.png" alt="Samsung" />
        <img src="/business_partners/sodexo-logo.png" alt="Sodexo" />
      </div>
    </div>
  );
};
export default OurPartners;
