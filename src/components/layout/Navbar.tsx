import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <Link href="/">DevBoost</Link>
        </div>

        <div className="flex gap-6">
          <Link href="/tools">Tools</Link>
          <Link href="/ai">AI</Link>
          <Link href="/about">About</Link>
        </div>

        <div>
          <a
            href="https://github.com/micky00x1-beep/devtools-next"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
