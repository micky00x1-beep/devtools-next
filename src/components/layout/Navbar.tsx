"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/80 bg-black/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight transition-all duration-300 hover:scale-105 hover:text-violet-400"
        >
          DeToolBoost
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {[
            { href: "/tools", label: "Tools" },
            { href: "/ai", label: "AI" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition-all duration-300 hover:text-violet-400"
            >
              {item.label}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-violet-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <a
          href="https://github.com/micky00x1-beep/devtools-next"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl border border-gray-700 px-4 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-500 hover:text-white lg:block"
        >
          GitHub
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl lg:hidden"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-800 bg-black lg:hidden">
          <div className="flex flex-col px-6 py-4">
            <Link
              href="/tools"
              className="py-3"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </Link>

            <Link href="/ai" className="py-3" onClick={() => setIsOpen(false)}>
              AI
            </Link>

            <Link
              href="/about"
              className="py-3"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <a
              href="https://github.com/micky00x1-beep/devtools-next"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
