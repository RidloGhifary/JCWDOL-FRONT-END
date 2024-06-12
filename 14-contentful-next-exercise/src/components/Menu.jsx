import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Menu() {
  return (
    <div className="flex items-center justify-center gap-4">
      <nav>
        <ul className="flex gap-4">
          {[
            ["🏠", "/"],
            ["Kitchen Tips", "#"],
            ["Cuisines", "#"],
            ["About Us", "#"],
          ].map((menu, i) => (
            <li key={i}>
              <Link
                href={menu[1]}
                className="border-2 border-black p-3 rounded-full dark:border-white">
                {menu[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
}
