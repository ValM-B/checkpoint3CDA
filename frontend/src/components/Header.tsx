import Link from "next/link";

export default function Header() {
  return (
    <header className="header text-center py-5">
      <h1 className="text-white">Checkpoint : frontend</h1>
      <Link href="/" className="link">Countries</Link>
    </header>
  );
}
