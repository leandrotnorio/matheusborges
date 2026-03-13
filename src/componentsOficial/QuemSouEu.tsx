import Image from "next/image";

export default function QuemSouEuSection() {
  return (
    <section
      id="aparecer3"
      className="w-full bg-white px-4 py-10 sm:px-6 md:px-14 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden bg-mist-100 shadow-sm">
          <div className="flex flex-col mx-8">
            <div className="w-full">
              <Image
                src="https://matheus-borges.com/wp-content/uploads/2025/04/Quem-sou22-1.png"
                alt="Quem sou eu"
                width={1536}
                height={864}
                className="h-auto w-full object-cover"
                unoptimized
                priority
              />
            </div>

            <div className="p-4 sm:p-6 md:p-8 text-start">
              <h3 className="text-[23px] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
                QUEM SOU EU?
              </h3>

              <div className="mt-4 space-y-5 text-[16px] leading-6 text-neutral-800 sm:text-base md:text-lg md:leading-7">
                <p>
                  Me chamo Matheus (<strong>@matheus.borges</strong>) e tenho 25
                  anos… Se você assistiu ao vídeo, te provei que vim de família de
                  baixa renda, porém desde cedo tive em mente que um dia gostaria
                  de ter dinheiro e liberdade financeira para realizar meus sonhos.
                  Desde então, já vendi doces na escola, fui entregador de marmita
                  e já vendi cobre em ferro velho…
                </p>

                <p>
                  No começo de 2020, mesmo quebrado e com a conta bancária no
                  vermelho, em meio a uma situação onde me vi sem saídas, decidi
                  começar no marketing digital como uma forma de conseguir uma renda
                  extra para ajudar minha família e melhorar minha situação.
                </p>

                <p>
                  Desde então, após 4 anos nesse mercado, o que era apenas para ser
                  uma renda extra se tornou um negócio multimilionário. Já faturei
                  mais de 50 milhões de reais e pude trazer muitos resultados
                  através das minhas estratégias para meus primeiros mentorados.
                  Hoje você está tendo a oportunidade de fazer o mesmo e mudar de
                  vida. Aproveite, antes que seja tarde demais e você se arrependa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}