import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
    >
      {children}
    </Link>
  );
}
