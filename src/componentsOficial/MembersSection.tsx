import Image from "next/image";

type BonusItem = {
  title: string;
  description: string;
};

const bonusItems: BonusItem[] = [
  {
    title: "Bônus 01",
    description: "Descrição do bônus aqui.",
  },
  {
    title: "Bônus 02",
    description: "Descrição do bônus aqui.",
  },
  {
    title: "Bônus 03",
    description: "Descrição do bônus aqui.",
  },
];

export default function MembersSection() {
  return (
      <section
        id="aparecer7"
        className="w-full bg-mist-100 px-3 py-12 sm:px-4 md:px-6 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6 text-center">
            <h2 className="text-[23px] uppercase font-extrabold leading-tight text-neutral-900 sm:text-2xl md:text-4xl">
              Adquira hoje e receba acesso vitalício à nossa área de membros
              premium
            </h2>

            <h3 className="text-xl font-bold leading-tight text-neutral-900 sm:text-2xl md:text-4xl">
              <span className="text-green-600">MVO + Renda Turbo</span>{" "}
              contando com mais de 120 aulas!
            </h3>

            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <Image
                src="https://matheus-borges.com/wp-content/uploads/2025/04/MVO-1-1024x582.jpeg"
                alt="Área de membros premium MVO + Renda Turbo"
                width={1024}
                height={582}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
  );
}