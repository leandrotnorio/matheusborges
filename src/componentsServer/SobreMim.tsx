



export default function SobreMim() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <img
            src="https://mentorborges.com.br/wp-content/uploads/2023/08/Quem-sou22.png"
            alt="Quem sou eu"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-8">
          <h3 className="text-3xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-4xl">
            QUEM SOU EU?
          </h3>

          <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700 sm:text-lg">
            <p>
              Me chamo Matheus (<strong>@matheus.borges</strong>) e tenho 25 anos…
              Se você assistiu ao vídeo, te provei que vim de família de baixa renda,
              porém desde cedo tive em mente que um dia gostaria de ter dinheiro e
              liberdade financeira para realizar meus sonhos. Desde então, já vendi
              doces na escola, fui entregador de marmita e já vendi cobre em ferro
              velho…
            </p>

            <p>
              No começo de 2020, mesmo quebrado e com a conta bancária no vermelho,
              em meio a uma situação aonde me vi sem saídas, decidi começar no
              marketing digital como uma forma de conseguir uma renda extra para
              ajudar minha família e melhorar minha situação.
            </p>

            <p>
              Desde então, após 4 anos nesse mercado, o que era apenas para ser uma
              renda extra se tornou um negócio multimilionário. Já faturei mais de
              50 milhões de reais e pude trazer muitos resultados através das minha
              estratégias para meus primeiros mentorados. Hoje você está tendo a
              oportunidade de fazer o mesmo e mudar de vida. Aproveite, antes que
              seja tarde de mais e você se arrependa.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6">
          <a
            href="https://www.instagram.com/matheus.borges"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-neutral-900 transition hover:opacity-80"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 448 512"
                className="h-5 w-5 fill-current"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>

            <span className="text-xl font-bold">@matheus.borges</span>
          </a>
        </div>
      </div>
    </section>
    );
}