import Link from "next/link";

import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-800 bg-black">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold transition-colors hover:text-violet-400"
            >
              DeToolBoost
            </Link>

            <p className="mt-4 max-w-sm text-gray-400">
              Modern developer tools built to boost your productivity.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-violet-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/tools"
                  className="transition-colors duration-300 hover:text-violet-400"
                >
                  Tools
                </Link>
              </li>

              <li>
                <Link
                  href="/ai"
                  className="transition-colors duration-300 hover:text-violet-400"
                >
                  AI
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors duration-300 hover:text-violet-400"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          © 2026 DeToolBoost. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
