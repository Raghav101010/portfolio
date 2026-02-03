import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-black border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Raghwendra
        </Link>

        <div className="space-x-6">
          <Link href="/projects">Projects</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
