import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="max-w-4xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-700">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mx-4 text-xl font-extrabold leading-tight tracking-tight text-neutral-800 sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="my-4 mx-3 font-bold text-neutral-700 text-sm sm:text-lg md:text-2xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}