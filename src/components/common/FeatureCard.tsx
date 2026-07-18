import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500">
      <div className="mb-4 text-violet-400">{icon}</div>

      <h3 className="mb-2 text-xl font-semibold">{title}</h3>

      <p className="text-gray-400">{description}</p>
    </div>
  );
}
