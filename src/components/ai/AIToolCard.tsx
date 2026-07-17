import Link from "next/link";
import { LucideIcon } from "lucide-react";

type AIToolCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export default function AIToolCard({
  title,
  description,
  href,
  icon: Icon,
}: AIToolCardProps) {
  return (
    <Link href={href}>
      <article className="group rounded-xl border border-violet-800 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-900/30">
        <div className="mb-4 inline-flex rounded-full bg-violet-600 p-3 transition-transform duration-300 group-hover:scale-110">
          <Icon size={22} />
        </div>

        <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-violet-400">
          {title}
        </h2>

        <p className="mt-3 text-gray-400">{description}</p>

        <div className="mt-6 inline-flex rounded-full border border-violet-700 bg-violet-900/30 px-3 py-1 text-sm font-medium text-violet-300">
          Coming Soon
        </div>
      </article>
    </Link>
  );
}
