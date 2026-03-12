import { IoCheckboxSharp } from "react-icons/io5";

const benefitItems = [
  {
    text: (
      <>
        Faça <strong>R$2.000</strong> na primeira semana, sem investir.
      </>
    ),
  },
  {
    text: (
      <>
        Estruture um negócio online que te gera de{" "}
        <strong>30 a 50 mil por mês</strong> no automático.
      </>
    ),
  },
  {
    text: (
      <>
        Receba produtos validados e com <strong>altíssima comissão</strong> para
        vender no automático e lucrar muito.
      </>
    ),
  },
  {
    text: (
      <>
        Sem precisar <strong>aparecer</strong> ou mostrar o rosto.
      </>
    ),
  },
  {
    text: (
      <>
        Sem ter milhões de <strong>seguidores</strong>.
      </>
    ),
  },
];

export default function LeiaParaPouparSection() {
  return (
    <section
      id="aparecer2"
      className="w-full mt-20 bg-mist-100 px-4 py-8 sm:px-6 md:px-14 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-[23px] uppercase font-extrabold  text-neutral-900 sm:text-3xl md:text-4xl">
              Leia para poupar o seu tempo:
            </h2>

            <p
              id="aparecer5"
              className="mx-auto max-w-4xl text-lg leading-6 text-neutral-800 sm:text-base md:text-lg md:leading-7"
            >
              Você vai aprender com uma pessoa que já trilhou o caminho das
              pedras e passou pelo processo difícil do início de qualquer
              jornada. Nesse processo, descobriu o que funciona e o que não
              funciona, para ensinar de uma forma que vai te poupar tempo e
              dinheiro.
            </p>
          </div>

          <div className=" sm:py-6 md:p-3">
            <ul className="space-y-6">
              {benefitItems.map((item, index) => (
                <li key={index} className="flex space-y-3 border-t border-neutral-600 items-center gap-2">
                  <span className="mt-2.5 shrink-0">
                    <IoCheckboxSharp className="h-8 w-8 text-green-500 sm:h-7 sm:w-7" />
                  </span>

                  <span className="text-[16px] text-start leading-6 text-neutral-800 md:text-lg md:leading-7">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}