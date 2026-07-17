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
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="mt-4 text-gray-400">{description}</p>

      <div className="mt-10">{children}</div>
    </main>
  );
}
