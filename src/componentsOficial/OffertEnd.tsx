import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/componentsClient/CtaButton"

export default function OfertaFinalSection() {
  return (
    <section
      id="aparecer9"
      className="w-full bg-mist-100 py-12 sm:px-6 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-[23px] uppercase font-extrabold leading-tight text-neutral-900 sm:text-3xl md:text-4xl">
            E agora, de qual lado você irá ficar?
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">
              Do lado daqueles que:
            </h3>

            <p className="text-base leading-7 text-neutral-700 sm:text-lg">
              Vão continuar perdendo tempo e sendo iludidos com estratégias
              inúteis de marketing digital, vão continuar seguindo a boiada e no
              final se frustrando com resultados ruins ou inexistentes...
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">
              Ou do lado daqueles que:
            </h3>

            <p className="text-base leading-7 text-neutral-700 sm:text-lg">
              Sabem dominar os segredos das ferramentas de tráfego que poucos
              afiliados dominam e sabem estruturar um negócio fácil, mas que
              vende no automático todos os dias.
            </p>

            <p className="text-base font-semibold leading-7 text-neutral-800 sm:text-lg">
              Bom, não preciso responder, acho que você já sabe pra qual caminho
              deve ir...
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-6 text-center">
            <div className="rounded-t-2xl bg-green-500 px-4 py-5 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] rounded-sm mx-6 bg-neutral-800  text-white">
                Oferta limitada
              </p>
              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Entre Para O Time!
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-bold uppercase text-neutral-700 sm:text-xl">
                De{" "}
                <span className="text-red-700 line-through">R$1099,60</span> por
              </p>

              <p className="text-base font-bold uppercase text-neutral-700 sm:text-lg">
                Apenas 12x de
              </p>

              <p className="text-4xl font-black leading-none text-green-600 sm:text-5xl">
                R$29,02
              </p>

              <p className="text-lg font-semibold text-neutral-800 sm:text-xl">
                ou R$289,90 à vista
              </p>
            </div>

            <CtaButton />

            <div className="flex justify-center">
              <Image
                src="https://matheus-borges.com/wp-content/uploads/2025/04/compra-segura-2.png"
                alt="Compra segura"
                width={413}
                height={38}
                className="h-auto w-full max-w-[413px]"
                unoptimized
              />
            </div>

            <div className="flex justify-center">
              <Link href="https://api.whatsapp.com/send?phone=5574981265336&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20%22M%C3%A9todo%20M%C3%A1quina%20de%20Vendas%20Online%22%20ou%20preciso%20de%20suporte%20para%20concluir%20minha%20compra">
                <Image
                  src="https://matheus-borges.com/wp-content/uploads/2025/04/whatsapp.png"
                  alt="Suporte via WhatsApp"
                  width={425}
                  height={124}
                  className="h-auto w-full max-w-[425px] transition hover:scale-[1.02]"
                  unoptimized
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}