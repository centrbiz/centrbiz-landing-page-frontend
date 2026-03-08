import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cb-border/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cb-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-cb-green" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-cb-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-cb-muted md:text-lg">{description}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
