import Button from "@/components/common/Button";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        Modern developer tools
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Fast, free and easy-to-use tools for developers.
      </p>

      <div className="mt-10">
        <Button href="/tools">Explore Tools</Button>
      </div>
    </section>
  );
}
