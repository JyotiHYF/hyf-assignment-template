import Navbar from "../components/Navbar";
import styles from "./Cats.module.css";

export default function Cats() {
  return (
    <main className={styles.container}>
      <Navbar />

      <h1 className={styles.title}>🐱 Cats Page</h1>

      <p>Welcome to the cat gallery!</p>

      <img src="https://placecats.com/300/300" />
      <img src="https://placecats.com/301/300" />
      <img src="https://placecats.com/302/300" />

      <footer>Made with ❤️ for cats</footer>
    </main>
  );
}
