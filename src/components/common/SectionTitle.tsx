type SectionTitleProps = {
  title: string;
  description?: string;
};

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>

      {description && (
        <p className="mt-4 text-lg text-gray-400">{description}</p>
      )}
    </div>
  );
}
