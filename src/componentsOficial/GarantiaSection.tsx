import Image from "next/image";

export default function GarantiaSection() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-14 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-6 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm md:grid-cols-2 md:p-6">
          <div className="flex justify-center">
            <Image
              src="https://matheus-borges.com/wp-content/uploads/2025/04/satisfacao.png"
              alt="Garantia de satisfação"
              width={540}
              height={452}
              className="h-auto w-full max-w-[540px] object-contain"
              unoptimized
            />
          </div>

          <div className="text-start">
            <h3 className="text-lg font-bold leading-7 text-neutral-800 sm:text-xl md:text-2xl">
              Sim, você tem{" "}
              <span className="font-extrabold text-green-600">
                7 dias de garantia incondicional
              </span>{" "}
              e estou dando de bônus mais{" "}
              <span className="font-extrabold text-green-600">
                30 dias de garantia condicional
              </span>
              . Confio tanto em meu método que, caso você estude, aplique e não
              obtenha resultados, devolvemos seu dinheiro.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}