import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import SocialMediaItem from "./SocialMediaItem";
export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* 🧑🏽‍🚀 Task - Week 2 */}
      {/* Create a new list for the Pages. */}
      {/* We need to use the <Link /> component here. */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destinations</Link>
          </li>
        </ul>
      </div>
      {/* Docs for the Link: https://reactrouter.com/api/components/Link#link. */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url="https://facebook.com"
            title="Facebook"
            icon="/social media/facebook.png"
          />

          <SocialMediaItem
            url="https://instagram.com"
            title="Instagram"
            icon="/social media/instagram.png"
          />

          <SocialMediaItem
            url=""
            title="Tiktok"
            icon="/social media/tiktok.png"
          />

          <SocialMediaItem
            url="https://LinkedIn.com"
            title="LinkedIn"
            icon="/social media/linkedin.png"
          />

          <SocialMediaItem
            url="https://google.com"
            title="On the streets at night"
            icon="/social media/chrome.png"
          />
        </ul>
      </div>
    </footer>
  );
};
