import Image from "next/image";

type VideoResult = {
  prefix: string;
  highlight: string;
  suffix: string;
  subtitle?: string;
  youtubeId: string;
};

const videoResults: VideoResult[] = [
  {
    prefix: "Ele fez mais de ",
    highlight: "R$3.000",
    suffix: " na primeira semana!",
    youtubeId: "2eYUhPOvfac",
  },
  {
    prefix: "Ele fez mais de ",
    highlight: "R$30.000",
    suffix: " nos primeiros 30 dias.",
    youtubeId: "-wTOlDP-vC4",
  },
  {
    prefix: "Ele se destacou muito e fez mais de ",
    highlight: "10 milhões",
    suffix: "!",
    subtitle: "(Atenção: este é um caso fora da curva)",
    youtubeId: "FP1FhH2t2uM",
  },
];

export default function ResultsSection() {
  return (
    <section
      id="aparecer4"
      className="w-full bg-mist-100 py-12 sm:px-4 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8">
          <div className="space-y-3 text-center">
            <h2 className="text-[22px] font-extrabold uppercase leading-tight text-neutral-900 sm:text-2xl md:text-4xl">
              Confira um dos meus resultados abaixo:
            </h2>

            <h3 className="text-lg font-bold leading-tight text-neutral-800 sm:text-2xl md:text-4xl">
              Mais de <span className="text-green-600">R$100.000</span> por dia...
            </h3>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 mx-3 shadow-sm">
            <Image
              src="https://matheus-borges.com/wp-content/uploads/2025/04/Print-2.jpeg"
              alt="Resultado de faturamento"
              width={1593}
              height={831}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-[16px] px-3 leading-6 text-neutral-800 sm:text-base md:text-lg md:leading-7">
            <p>
              Atualmente, possuo vários <strong>negócios</strong> na internet.
              Como você pode ver acima, alguns deles fazem até mais de{" "}
              <strong>100 mil reais</strong> em um único dia no{" "}
              <strong>automático</strong>. Parece um número assustador, mas é
              apenas fruto da consistência de <strong>4 anos</strong> executando
              a mesma <strong>estratégia</strong> que irei te ensinar, com
              maestria.
            </p>

            <p>
              Eu gosto de ser <strong>honesto</strong> e <strong>realista</strong>.
              Como já disse, você poderá fazer inicialmente de{" "}
              <strong>30 a 50 mil</strong> por mês com ela. No entanto, estes{" "}
              <strong>resultados provam</strong> que o que ensino gera resultado,
              e dependerá apenas de você chegar nesses resultados um dia.
            </p>
          </div>

          <div className="pt-4 bg-mist-100 text-center">
            <h3 className="text-[22px] font-extrabold uppercase leading-tight text-neutral-800 sm:text-2xl md:text-4xl">
              Confira alguns dos resultados dos alunos:
            </h3>
          

            <div className="space-y-10">
              {videoResults.map((video) => (
                <div key={video.youtubeId} className="space-y-4">
                  <div className="text-center bg-white rounded-t-2xl shadow-sm mx-4 px-4 py-4 mt-2">
                    <h4 className="text-[17px] font-bold text-start leading-tight text-neutral-800 sm:text-xl md:text-3xl">
                      {video.prefix}
                      <span className="text-green-600">{video.highlight}</span>
                      {video.suffix}
                    </h4>

                    {video.subtitle && (
                      <p className="mt-2 text-sm font-semibold text-neutral-600 sm:text-sm md:text-base">
                        {video.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="overflow-hidden mx-4 shadow-sm">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={`${video.prefix}${video.highlight}${video.suffix}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}