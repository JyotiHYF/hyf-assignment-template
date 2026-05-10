import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link href="/">Home</Link>
      <Link href="/cats">Cats 🐱</Link>
      <Link href="/dogs">Dogs 🐶</Link>
    </nav>
  );
}
