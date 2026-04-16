type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className={inverted ? "section-kicker text-white/72" : "section-kicker"}>{eyebrow}</p>
      <h2
        className={`text-balance text-4xl font-semibold leading-[1.02] sm:text-[3.15rem] ${
          inverted ? "text-white" : "text-deep"
        }`}
      >
        {title}
      </h2>
      <p className={`text-lg leading-8 ${inverted ? "text-white/76" : "text-deep/70"}`}>
        {description}
      </p>
    </div>
  );
}
