interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}
