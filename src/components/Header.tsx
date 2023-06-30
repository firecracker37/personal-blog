import Link from "next/link";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import AuthIcon from "./AuthIcon";
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between bg-slate-950 px-4 py-2 text-gray-400">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-6">
          <li>
            <VscGithub className="text-2xl hover:text-white" />
          </li>
          <li>
            <VscTwitter className="text-2xl hover:text-white" />
          </li>
          <li>
            <AuthIcon />
          </li>
        </ul>
      </header>
    </>
  );
}
