import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Belly",
  description: "Fullfill your belly everyday.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  dark:bg-neutral-950 dark:text-white`}>
        <header className="hidden xl:block max-w-screen-xl mx-auto p-6 space-y-5">
          <Logo className="text-7xl" />
          <h2 className="text-center uppercase text-2xl leading-none">
            Fullfill
            <br />
            <span className="font-extralight">your</span> belly
          </h2>
          <Menu />
        </header>
        <div className="xl:hidden md:flex hidden justify-between items-center p-2">
          <Logo className="text-4xl" />
          <Menu />
        </div>
        <div className="md:hidden flex justify-between items-center p-2">
          <Logo className="text-3xl" />
          <button class="flex items-center rounded border-2 border-black px-3 py-2">
            <svg
              class="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <main className="max-w-screen-xl mx-auto p-6">{children}</main>
        <footer className="text-center mt-24">
          <p className="bg-neutral-950 text-white py-6">© 2024 FullBelly ❤️ </p>
        </footer>
      </body>
    </html>
  );
}
