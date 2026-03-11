






{/*'use client';

import { FaTelegramPlane } from "react-icons/fa";
import { useEffect, useMemo, useState } from 'react';
import Script from 'next/script';
import VslPlayer from '@/components/VslPlayer';

type Bullet = {
  text: string;
};

type Bonus = {
  title: string;
  description: string;
};

type IncludedItem = {
  text: string;
};

const primaryCta = 'https://clkdmg.site/subscribe/principal01mvo';
const whatsappHref =
  'https://api.whatsapp.com/send?phone=5574981265336&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20%22M%C3%A9todo%20M%C3%A1quina%20de%20Vendas%20Online%22%20ou%20preciso%20de%20suporte%20para%20concluir%20minha%20compra';

const introBullets: Bullet[] = [
  { text: 'Faça R$2.000 na primeira semana, sem investir.' },
  { text: 'Estruture um negócio online que te gera de 30 a 50 mil por mês no automático.' },
  { text: 'Receba produtos validados e com altíssima comissão para vender no automático e lucrar muito.' },
  { text: 'Sem precisar aparecer ou mostrar o rosto.' },
  { text: 'Sem ter milhões de seguidores.' },
];

const bonusCards: Bonus[] = [
  {
    title: 'Grupo privado no Telegram',
    description: 'Você terá acesso a um grupo VIP no Telegram para trocar network e tirar suas dúvidas.',
  },
  {
    title: 'Afiliação vitalícia',
    description: 'Você terá acesso vitalício a produtos ocultos que vendem muito.',
  },
];

const includedItems: IncludedItem[] = [
  {
    text: 'Renda Turbo 2.0 – O método que te ensina a levantar 2 mil por semana sem investir nada, usado por alunos que precisam levantar caixa rápido. R$299,90.',
  },
  {
    text: 'MVO 3.0 – O Método Máquina de Vendas Online 100% atualizado e com novas estratégias. R$399,90.',
  },
  {
    text: '3 lives exclusivas: Segredos do Mindset Milionário; Segredos dos anúncios milionários; Segredos dos Top afiliados. R$199,90.',
  },
  {
    text: 'Acesso a lives semanais: acesso VIP a lives de suporte semanais comigo e com a minha equipe. R$199,90.',
  },
  {
    text: 'Concorrer a 1 hora de mentoria individual comigo (valor de R$40.000).',
  },
];

const revealIds = [
  'aparecer1',
  'aparecer2',
  'aparecer3',
  'aparecer4',
  'aparecer5',
  'aparecer6',
  'aparecer7',
  'aparecer8',
  'aparecer9',
  'aparecer10',
  'aparecer11',
  'aparecer12',
  'aparecer13',
] as const;

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
      ✓
    </span>
  );
}

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl shadow-black/30">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function Reveal({ active, children, id }: { active: boolean; children: React.ReactNode; id: string }) {
  if (!active) return null;

  return (
    <div id={id} className="animate-[fadeIn_0.5s_ease-out]">
      {children}
    </div>
  );
}

export default function Page() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const initial = revealIds.reduce<Record<string, boolean>>((acc, id) => {
      acc[id] = false;
      return acc;
    }, {});

    setRevealed(initial);

    const timer = window.setTimeout(() => {
      const allVisible = revealIds.reduce<Record<string, boolean>>((acc, id) => {
        acc[id] = true;
        return acc;
      }, {});
      setRevealed(allVisible);
    }, 1 * 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const allRevealed = useMemo(() => Object.values(revealed).every(Boolean), [revealed]);

  /* scripts se for utilizado fora do body
  <Script id="utmify-script" strategy="afterInteractive">
        {`
          (function () {
            var s = document.createElement('script');
            s.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
            s.async = true;
            s.defer = true;
            s.setAttribute('data-utmify-prevent-xcod-sck', '');
            s.setAttribute('data-utmify-prevent-subids', '');
            document.head.appendChild(s);
          })();
        `}
      </Script>

      <Script id="utmify-pixel" strategy="afterInteractive">
        {`
          window.pixelId = '6982413fb4e212558d62839e';
          var a = document.createElement('script');
          a.setAttribute('async', '');
          a.setAttribute('defer', '');
          a.setAttribute('src', 'https://cdn.utmify.com.br/scripts/pixel/pixel.js');
          document.head.appendChild(a);
        `}
      </Script>

      <Script
        src="https://midas.ticto.app/oneclickbuy.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://scripts.converteai.net/1fb21d75-5ccd-4d69-8903-25608648d696/players/69855963d5ae9a7c5fdab6e2/v4/player.js"
        strategy="afterInteractive"
      />
*/




/*
  return (
    <>
      

      <main className="min-h-screen bg-[#050816] text-white">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(21,158,66,0.22),transparent_30%),linear-gradient(180deg,#081120_0%,#050816_100%)]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Máquina de Vendas Online
              </p>
              <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-6xl">
                Revelei o sistema que me{' '}
                <span className="text-emerald-400">paga de 300 a 1000 reais por dia</span>{' '}
                100% no automático
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-200 sm:text-xl">
                Gerando renda já <span className="font-bold text-emerald-400">nas próximas 24 horas</span> sem aparecer,
                sem produzir conteúdo.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <div className="aspect-video w-full">
                <VslPlayer />
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-center text-base font-medium leading-7 text-zinc-300 sm:text-lg">
              <strong>Detalhe:</strong> Mesmo que esteja começando do zero, sem aparecer e sem investir.
            </p>

            <Reveal active={!!revealed.aparecer1} id="aparecer1">
              <div className="mt-8 flex justify-center">
                <a
                  href={primaryCta}
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02] hover:bg-emerald-400"
                >
                  Quero adquirir por menos de R$0,94 por dia
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal active={!!revealed.aparecer2} id="aparecer2">
          <section className="border-b border-white/10 bg-[#091224] py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
                <SectionTitle
                  eyebrow="Leia para poupar o seu tempo"
                  title="Você vai aprender com uma pessoa que já trilhou o caminho das pedras"
                  subtitle="Passou pelo processo difícil do início de qualquer jornada e descobriu o que funciona e o que não funciona, para ensinar de uma forma que vai poupar tempo e dinheiro."
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {introBullets.map((item) => (
                    <div key={item.text} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-5">
                      <CheckIcon />
                      <p className="text-sm leading-7 text-zinc-100 sm:text-base">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal active={!!revealed.aparecer3} id="aparecer3">
          <section className="relative overflow-hidden border-b border-white/10 bg-[#050816] py-16">
            <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src="https://matheus-borges.com/wp-content/webp-express/webp-images/uploads/2025/04/Quem-sou22-1.png.webp"
                  alt="Quem sou eu"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">Quem sou eu?</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">Matheus Borges</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-zinc-300">
                  <p>
                    Me chamo Matheus (<span className="font-semibold text-white">@matheus.borges</span>) e tenho 25 anos.
                    Vim de família de baixa renda, mas desde cedo tive em mente que um dia gostaria de ter dinheiro e
                    liberdade financeira para realizar meus sonhos.
                  </p>
                  <p>
                    Já vendi doces na escola, fui entregador de marmita e vendi cobre em ferro velho. No começo de 2020,
                    mesmo quebrado e com a conta bancária no vermelho, decidi começar no marketing digital como forma de
                    conseguir uma renda extra para ajudar minha família e melhorar minha situação.
                  </p>
                  <p>
                    Após 4 anos nesse mercado, o que era para ser apenas uma renda extra se tornou um negócio multimilionário.
                    Já faturei mais de 50 milhões de reais e pude trazer muitos resultados através das minhas estratégias para
                    meus primeiros mentorados.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal active={!!revealed.aparecer4} id="aparecer4">
          <section className="border-b border-white/10 bg-[#091224] py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Resultados"
                title="Confira um dos meus resultados abaixo"
                subtitle="Mais de R$100.000 por dia. Resultado construído com consistência ao longo de 4 anos executando a mesma estratégia com maestria."
              />

              <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src="https://matheus-borges.com/wp-content/webp-express/webp-images/uploads/2025/04/Print-2.jpeg.webp"
                  alt="Resultado acima de 100 mil reais por dia"
                  className="w-full object-cover"
                />
              </div>

              <div className="mx-auto mt-8 max-w-4xl text-center text-base leading-8 text-zinc-300 md:text-lg">
                <p>
                  Atualmente, possuo vários negócios na internet. Alguns deles fazem mais de 100 mil reais em um único dia
                  no automático. Estes resultados provam que o que ensino gera resultado, embora os resultados variem conforme
                  execução, contexto e consistência.
                </p>
              </div>

              <div className="mt-14 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-center text-2xl font-black text-white">Ele fez mais de <span className="text-emerald-400">R$3.000</span> na primeira semana</h3>
                  <YouTubeEmbed videoId="2eYUhPOvfac" title="Resultado aluno 1" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-center text-2xl font-black text-white">Ele fez mais de <span className="text-emerald-400">R$30.000</span> nos primeiros 30 dias</h3>
                  <YouTubeEmbed videoId="-wTOlDP-vC4" title="Resultado aluno 2" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-center text-2xl font-black text-white">Ele se destacou muito e fez mais de <span className="text-emerald-400">10 milhões</span></h3>
                  <p className="text-center text-sm text-zinc-400">(Atenção: este é um caso fora da curva)</p>
                  <YouTubeEmbed videoId="FP1FhH2t2uM" title="Resultado aluno 3" />
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal active={!!revealed.aparecer6} id="aparecer6">
          <section className="border-b border-white/10 bg-[#050816] py-16">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Plano comprovado"
                title="Siga um plano comprovado e à prova de falhas"
                subtitle="O Máquina de Vendas Online 3.0 é uma metodologia de vendas simples e eficaz para vender produtos ocultos na internet, com uma jornada estruturada para reduzir erro operacional."
              />

              <div className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
                <p className="text-base leading-8 text-zinc-300 md:text-lg">
                  A Jornada OCR é uma metodologia entregue dentro da área de membros que possibilita trilhar um caminho mais
                  objetivo. Segundo a própria oferta, atualmente ela é posicionada como uma maneira rápida, objetiva e segura
                  de ganhar dinheiro na internet, reunindo estratégias de marketing digital ensinadas na formação.
                </p>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                  <h3 className="text-xl font-black text-white">Em quanto tempo você terá resultados?</h3>
                  <p className="mt-3 text-base leading-8 text-zinc-300">
                    Essa é uma pergunta relativa. O material argumenta que alunos têm resultados já nos primeiros dias ou semanas,
                    mas isso depende de execução, contexto, oferta e consistência de cada pessoa.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal active={!!revealed.aparecer7} id="aparecer7">
          <section className="border-b border-white/10 bg-[#091224] py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Área de membros"
                title="Adquira hoje e receba acesso vitalício à nossa área de membros premium"
                subtitle="MVO + Renda Turbo contando com mais de 120 aulas."
              />

              <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src="https://matheus-borges.com/wp-content/webp-express/webp-images/uploads/2025/04/MVO-1-1024x582.jpeg.webp"
                  alt="Área de membros MVO"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal active={!!revealed.aparecer8} id="aparecer8">
          <section className="border-b border-white/10 bg-[#050816] py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Bônus"
                title="E o que mais você leva de bônus?"
                subtitle="Camada adicional de comunidade, acesso e suporte para sustentar a jornada do aluno."
              />

              <div className="mt-10 grid gap-6 md:grid-cols-2">
  {bonusCards.map((item) => (
    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
        {item.title === "Grupo privado no Telegram" ? (
          <FaTelegramPlane className="h-6 w-6" />
        ) : (
          <span className="text-xl">★</span>
        )}
      </div>

      <h3 className="text-xl font-black text-white">{item.title}</h3>
      <p className="mt-3 text-base leading-8 text-zinc-300">{item.description}</p>
    </div>
  ))}
</div>

              <div className="mt-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 md:p-10">
                <h3 className="text-center text-2xl font-black text-white md:text-3xl">
                  Adquira agora ou você irá implorar para pagar mais caro depois
                </h3>

                <div className="mt-8 space-y-4">
                  {includedItems.map((item) => (
                    <div key={item.text} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-5">
                      <CheckIcon />
                      <p className="text-sm leading-7 text-zinc-100 sm:text-base">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-8 text-center">
                  <p className="text-lg font-bold uppercase tracking-wide text-zinc-300">
                    Total: <span className="text-red-400 line-through">R$1099,60</span>
                  </p>
                  <p className="mt-3 text-3xl font-black text-white md:text-5xl">
                    Apenas hoje: <span className="text-emerald-400">R$289,90</span>
                  </p>
                  <p className="mt-2 text-lg text-zinc-300">(ou menos de <strong>R$0,94</strong> por dia)</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal active={!!revealed.aparecer9} id="aparecer9">
          <section className="border-b border-white/10 bg-[#091224] py-16">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">Decisão</p>
                <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">E agora, de qual lado você irá ficar?</h2>

                <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300">
                  <div>
                    <h3 className="text-xl font-black text-white">Do lado daqueles que:</h3>
                    <p className="mt-2">
                      Vão continuar perdendo tempo e sendo iludidos com estratégias inúteis de marketing digital, vão continuar
                      seguindo a boiada e no final se frustrando com resultados ruins ou inexistentes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">Ou do lado daqueles que:</h3>
                    <p className="mt-2">
                      Sabem dominar os segredos das ferramentas de tráfego que poucos afiliados dominam e sabem estruturar um
                      negócio simples, mas que vende no automático todos os dias.
                    </p>
                  </div>

                  <p className="font-semibold text-white">
                    Bom, não preciso responder. Acho que você já sabe para qual caminho deve ir.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/15 to-white/5 p-6 shadow-2xl shadow-black/30 md:p-10">
                <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Oferta limitada</p>
                <h2 className="mt-3 text-center text-3xl font-black text-white md:text-4xl">Entre para o time</h2>

                <div className="mt-8 text-center">
                  <p className="text-lg font-bold uppercase tracking-wide text-zinc-300">
                    De <span className="text-red-400 line-through">R$1099,60</span> por
                  </p>
                  <p className="mt-4 text-lg font-bold uppercase tracking-wide text-zinc-300">Apenas 12x de</p>
                  <p className="mt-2 text-5xl font-black text-emerald-400 md:text-6xl">R$29,02</p>
                  <p className="mt-3 text-lg text-zinc-200">ou R$289,90 à vista</p>
                </div>

                <a
                  href={primaryCta}
                  className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02] hover:bg-emerald-400"
                >
                  Quero adquirir por menos de R$0,94 por dia
                </a>

                <img
                  src="https://matheus-borges.com/wp-content/webp-express/webp-images/uploads/2025/04/compra-segura-2.png.webp"
                  alt="Compra segura"
                  className="mx-auto mt-6 w-full max-w-xs"
                />

                <a href={whatsappHref} className="mt-6 block transition hover:scale-[1.01]">
                  <img
                    src="https://matheus-borges.com/wp-content/webp-express/webp-images/uploads/2025/04/whatsapp.png.webp"
                    alt="Suporte via WhatsApp"
                    className="mx-auto w-full max-w-sm"
                  />
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal active={!!revealed.aparecer10} id="aparecer10">
          <section className="bg-[#050816] py-16">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
                <div className="grid items-center gap-8 md:grid-cols-[260px_1fr]">
                  <img
                    src="https://matheus-borges.com/wp-content/webp-express/webp-images/uploads/2025/04/satisfacao.png.webp"
                    alt="Garantia"
                    className="mx-auto w-full max-w-[240px] md:max-w-full"
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">Garantia</p>
                    <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                      Você tem 7 dias de garantia incondicional e mais 30 dias de garantia condicional
                    </h2>
                    <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
                      Segundo a própria oferta, se você estudar, aplicar e não obtiver resultados dentro das condições prometidas,
                      existe devolução do dinheiro conforme a política apresentada na página.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
*/}
