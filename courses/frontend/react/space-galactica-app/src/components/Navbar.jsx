import classNames from "classnames";
import { useLocation, Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import styles from "./Navbar.module.css";
import { useWishlist } from "../contexts/WishlistContext";
const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const { wishlistCount } = useWishlist();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <NavItem
              key={item.link}
              title={item.title}
              link={item.link}
              index={index}
              isActive={item.link === currentPath}
            />
          ))}
          <li className={styles.wishlistBadge} aria-label="Wishlist"></li>
        </ul>

        <Badge count={wishlistCount}>
          <Planet color="white" />
        </Badge>
      </nav>
    </header>
  );
};
