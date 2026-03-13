import { IoCheckboxSharp } from "react-icons/io5";

type ItemProductProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

function ItemProduct({ eyebrow, title, subtitle }: ItemProductProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-lg font-semibold uppercase tracking-[0.2em] text-neutral-700">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-[22px] font-extrabold leading-tight tracking-tight text-neutral-800 sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-lg text-neutral-600 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

type OfferItem = {
  title: string;
  description: string;
  price?: string;
  beforePrice?: string;
};

const offerItems: OfferItem[] = [
  {
    title: "Renda Turbo 2.0",
    description:
      "O método que te ensina a levantar 2 mil por semana sem investir nada, usado por alunos que precisam levantar caixa rápido",
    beforePrice: "R$299,00",
  },
  {
    title: "MVO 3.0",
    description:
      "O Método Máquina de Vendas Online 100% atualizado e com novas estratégias.",
    beforePrice: "R$399,90",
  },
  {
    title: "3 lives exclusivas",
    description:
      "Segredos do Mindset Milionário; Segredos dos anúncios milionários; Segredos dos Top afiliados",
    beforePrice: "R$199,90",
  },
  {
    title: "Acesso a Lives Semanais",
    description:
      "Você terá um acesso VIP a lives de suporte semanais comigo e com a minha equipe",
    beforePrice: "R$199,90",
  },
  {
    title: "Desconto no preço",
    description: "individual comigo (valor de R$40.000)",
  },
];

export default function ItemProducts() {
  return (
    <section className="mx-auto w-full bg-white py-6 sm:px-6 md:py-14 lg:px-8">
      <div className="mx-8 max-w-5xl">
        <ItemProduct title="ADQUIRA AGORA OU VOCÊ IRÁ IMPLORAR PARA PAGAR MAIS CARO DEPOIS..." />

        <div className="px-4 mt-10 grid grid-cols-1">
          {offerItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-2 border-b border-neutral-300 bg-mist-100 p-4 text-neutral-800 shadow-sm"
            >
              <span className="shrink-0">
                <IoCheckboxSharp className="h-7 w-7 text-green-500 sm:h-8 sm:w-8" />
              </span>

              <div className="min-w-0">
                <h3 className="text-xl text-start font-extrabold leading-tight text-neutral-900 sm:text-xl md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-1 text-[16px] text-start leading-4 text-neutral-600 sm:text-base md:text-lg">
                  {item.description}
                </p>

                {item.beforePrice && !item.price ? (
                  <p className=" text-lg text-start font-semibold sm:text-base md:text-lg">
                    <span className="font-extrabold line-through text-red-700">
                      {item.beforePrice}
                    </span>
                  </p>
                ) : null}

                {item.beforePrice && item.price ? (
                  <p className="mt-2 text-sm font-semibold sm:text-base md:text-lg">
                    <span className="text-neutral-600">De </span>
                    <span className="font-extrabold line-through text-red-700 line-through">
                      {item.beforePrice}
                    </span>
                    <span className="text-neutral-600"> por </span>
                    <span className="text-xl font-black text-black sm:text-2xl">
                      {item.price}
                    </span>
                  </p>
                ) : null}
              </div>
            </div>
          ))}

          <div className="bg-mist-100 p-4 text-neutral-800 shadow-sm">
            <div className="pt-3">
              <div className="text-center">
                <h3 className="text-[23px] font-bold text-neutral-900 sm:text-3xl">
                  total:{" "}
                  <span className="text-red-700 line-through">R$1099,60</span>
                </h3>

                <h3 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">
                  apenas hoje:{" "}
                  <span className="text-green-600">R$289,90</span>
                </h3>

                <p className="mt-3 text-lg font-semibold text-neutral-700 sm:text-xl">
                  (ou menos de <span className="font-extrabold">R$0,94</span> por
                  dia)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


