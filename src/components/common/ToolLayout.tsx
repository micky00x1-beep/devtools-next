import ToolSeoContent from "@/components/tools/ToolSeoContent";
import { tools } from "@/data/tools";

type ToolLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ToolLayout({
  title,
  description,
  children,
}: ToolLayoutProps) {
  const tool = tools.find(
    (item) =>
      item.title === title ||
      (item.title === "Base64 Encoder" && title === "Base64 Encoder & Decoder")
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">{title}</h1>

      <p className="mt-4 text-gray-400">{description}</p>

      <div className="mt-10">{children}</div>

      {tool && <ToolSeoContent tool={tool} />}
    </main>
  );
}
