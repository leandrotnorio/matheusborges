
type ResultCard = {
  title: string
  embedUrl?: string
}

const results: ResultCard[] = [
  {
    title: 'Mais de R$3.000 na primeira semana',
    embedUrl: 'https://player-vz-683c5929-38f.tv.pandavideo.com.br/embed/?v=a27dd490-7ca7-4d7e-8f9b-ede329d94889'
  },
  {
    title: 'Mais de R$30.000 nos primeiros 30 dias',
    embedUrl: 'https://player-vz-683c5929-38f.tv.pandavideo.com.br/embed/?v=e2305f56-dbf5-420e-ae5f-56f29871f20b'
  },
  {
    title: 'Caso fora da curva: mais de 10 milhões',
    embedUrl: 'https://player-vz-683c5929-38f.tv.pandavideo.com.br/embed/?v=eda7c527-ecd1-46be-9645-8092428d9c6a'
  }
]

export default function ResultadoAlunos(){

    return(

<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl">
            Confira alguns dos resultado dos alunos:
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-8">
          <h3 className="text-center text-2xl font-extrabold text-neutral-700 sm:text-3xl">
            Ele fez mais de <span className="text-green-500">R$3.000</span> na primeira semana!
          </h3>

          <div className="relative w-full overflow-hidden rounded-none">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={results[0]?.embedUrl}
                title={results[0]?.title ?? "Resultado 1"}
                className="absolute left-0 top-0 h-full w-full border-0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <h3 className="text-center text-2xl font-extrabold text-neutral-700 sm:text-3xl">
            Ele fez mais de <span className="text-green-500">R$30.000</span> nos primeiros 30 dias.
          </h3>

          <div className="relative w-full overflow-hidden rounded-none">
            <div className="relative w-full pt-[50%] sm:pt-[50%]">
              <iframe
                src={results[1]?.embedUrl}
                title={results[1]?.title ?? "Resultado 2"}
                className="absolute left-0 top-0 h-full w-full border-0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <h3 className="text-center text-2xl font-extrabold text-neutral-700 sm:text-3xl">
            Ele se destacou muito e fez mais de 10 milhões!
            <br />
            <span className="text-lg font-bold">
              (<strong>Atenção</strong>: este é um caso fora da curva)
            </span>
          </h3>

          <div className="relative w-full overflow-hidden rounded-none">
            <div className="relative w-full pt-[50%] sm:pt-[50%]">
              <iframe
                src={results[2]?.embedUrl}
                title={results[2]?.title ?? "Resultado 3"}
                className="absolute left-0 top-0 h-full w-full border-0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    );
}