import Navbar from "../components/Navbar";
import styles from "./Dogs.module.css";

export default function Dogs() {
  return (
    <main className={styles.container}>
      <Navbar />

      <h1 className={styles.title}>🐶 Dogs Page</h1>

      <p>Welcome to the dog gallery!</p>

      <img src="https://placedog.net/300/300" />
      <img src="https://placedog.net/301/300" />
      <img src="https://placedog.net/302/300" />

      <footer>Made with ❤️ for dogs</footer>
    </main>
  );
}
