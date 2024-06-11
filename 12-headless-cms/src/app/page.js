import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1>Fetch all entries</h1>
      <Link href="/testimonial">Testimonial</Link>
    </main>
  );
}
