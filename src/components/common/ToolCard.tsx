import Link from "next/link";
import type { Tool } from "@/types/tool";

export default function ToolCard({ title, description, href }: Tool) {
  return (
    <Link href={href}>
      <article className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all duration-300 hover:scale-105 hover:border-gray-600">
        <h2 className="text-xl font-bold">{title}</h2>

        <p className="mt-3 text-gray-400">{description}</p>
      </article>
    </Link>
  );
}
