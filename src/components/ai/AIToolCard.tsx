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
  icon: Icon,
}: AIToolCardProps) {
  return (
    <article className="group rounded-xl border border-violet-800 bg-gray-900 p-6">
      <div className="mb-4 inline-flex rounded-full bg-violet-600 p-3">
        <Icon size={22} />
      </div>

      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="mt-3 text-gray-400">{description}</p>

      <div className="mt-6 inline-flex rounded-full border border-violet-700 bg-violet-900/30 px-3 py-1 text-sm font-medium text-violet-300">
        Coming Soon
      </div>
    </article>
  );
}
