import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <p>Admin dashboard</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
