import Link from "next/link";

export default function Logo({ className }) {
  return (
    <Link href={"/"}>
      <h1 className={`text-center ${className}`}>
        Full
        <span className="font-bold">Belly</span>
      </h1>
    </Link>
  );
}
