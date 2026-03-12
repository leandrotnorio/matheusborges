import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

type BonusItem = {
  title: string;
  description: string;
};

const bonusItems: BonusItem[] = [
  {
    title: "Grupo privado no Telegram",
    description:
      "Você terá acesso a um grupo VIP no Telegram para trocar network e tirar suas dúvidas.",
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

export default function OfferBonusSection() {
  return (
    <>
    <section
        id="aparecer8"
        className="w-full bg-white px-3 pb-12 sm:px-4 md:px-6 md:pb-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm sm:p-8 md:p-10">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-xl font-extrabold leading-tight text-neutral-900 sm:text-2xl md:text-4xl">
                  E o que mais você leva de bônus?
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {bonusItems.map((bonus) => (
                  <div
                    key={bonus.title}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mt-0.5 shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-neutral-900 sm:text-lg">
                        {bonus.title}
                      </h3>

                      <p className="text-sm leading-6 text-neutral-600 sm:text-base">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}