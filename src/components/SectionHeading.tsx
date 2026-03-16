interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-8 sm:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-heading text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-text-light sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
