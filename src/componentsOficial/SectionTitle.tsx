import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
};

export default function SectionTitle({ eyebrow }: SectionTitleProps) {
  return (
    <div className="mx-auto text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-700">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="text-xl font-extrabold leading-tight tracking-tight text-neutral-700 mx-3  lg:mx-86 sm:text-2xl md:text-3xl">
        REVELEI O SISTEMA QUE ME{" "}
        <span className="text-green-600">
          PAGA DE 300 A 1000 REAIS POR DIA
        </span>{" "}
        100% NO AUTOMÁTICO
      </h1>

      <p className="my-4 font-bold text-neutral-700 text-sm sm:text-lg md:text-2xl">
        Gerando renda já nas{" "}
        <span className="text-green-600">próximas 24 horas</span>{" "}
        sem aparecer, sem produzir conteúdo
      </p>
    </div>
  );
}