'use client'

import { before } from "node:test";
import { IoCheckboxSharp } from "react-icons/io5";
import VideoComPlayCentral from "@/componentsClient/VideoComPlayCentral";
import ItemsProdutos from "@/componentsServer/ItemsProdutos";
import SessaoTerceira from "@/componentsClient/SessaoTerceira";
import ResultadoAlunos from "@/componentsClient/ResultadoAlunos";
import SwiperAlunos from "@/componentsClient/SwiperAlunos";
import SobreMim from "@/componentsServer/SobreMim";
import ResultadosExpressivos from "@/componentsServer/ResultadosExpressivos";
import AindaNaoConhece from "@/componentsServer/AindaNaoConhece";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import SigaPlano from "@/componentsClient/SigaPlano";

type Benefit = {
  title: string
  description: string
}

type ResultCard = {
  title: string
  embedUrl?: string
}

const offerItems = [
    {
        title: 'MVO 3.0',
        description: ' O Método Máquina de Vendas Online 100% atualizado e com novas estratégias.'
    },
    {
        title: 'Renda Turbo',
        description: 'Um método que te ensina a levantar 2 mil por semana sem investir nada, usado por alunos que precisam levantar caixa rápido.'
    },
    {
        title: '3 lives exclusivas',
        description: 'Segredos do Mindset Milionário; Segredos dos anúncios milionários; Segredos dos top afiliados.'
    },
    {
        title: 'Concorrer a 1 hora de mentoria',
        description: 'Individual comigo comigo(valor de R$40.000).'
    },
    {
        title: 'Desconto no preço',
        description: 'Nunca abaixei o preço do MVO antes e nunca farei isto de novo. De ',
        price: 'R$289,90.',
        beforePrice:'R$359,90'

    }

]

const painPoints = [
  'Você não teve direcionamento ou caiu em promessas vazias.',
  'Você não tinha acesso privilegiado a produtos ocultos e com alto comissionamento.',
  'Não te entregaram uma jornada real de execução.',
  'Você não tinha caixa para investir e escalar com segurança.'
]



const bonusItems: Benefit[] = [
  {
    title: 'Grupo privado no Telegram',
    description: 'Networking, suporte e interação com outros alunos.'
  },
  {
    title: 'Curso de Google Ads',
    description: 'Estratégias complementares para aquisição de tráfego no ecossistema Google.'
  },
  {
    title: 'Criação rápida de sites',
    description: 'Base para estruturar páginas e funis de vendas com velocidade.'
  },
  {
    title: 'Afiliação exclusiva',
    description: 'Acesso a produtos e oportunidades selecionadas.'
  }
]

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

const studentResultsImages = [
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-1.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-13.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-12.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-11.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-10.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-9.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-8.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-7.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-6.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-5.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-4.jpeg",
  "https://mentorborges.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-16-at-10.13.54-3.jpeg",
]

const faq = [
  {
    q: 'Funciona para quem não conhece nada de marketing digital?',
    a: 'Sim. A proposta é levar do básico ao avançado, com aplicação prática.'
  },
  {
    q: 'Funciona para quem não tem produto?',
    a: 'Sim. A estrutura contempla seleção de produtos e operação como afiliado.'
  },
  {
    q: 'O curso é somente para afiliados?',
    a: 'Não. Também atende produtores e infoprodutores que desejam vender com anúncios.'
  },
  {
    q: 'Como recebo o acesso?',
    a: 'O acesso é enviado por e-mail após a compra, com suporte complementar.'
  },
  {
    q: 'Existe garantia?',
    a: 'A página original menciona garantia incondicional de 7 dias e condicional adicional.'
  }
]

const telegramResultsImages = [
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_8202.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6369.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6368.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6366.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6365.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6359.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6360.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6361.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6362.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6363.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6364.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6358-1.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6357.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6356.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6355.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6354.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6353.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6352.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6351.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6350.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6349.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6348.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_6347.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_1435.png",
  "https://mentorborges.com.br/wp-content/uploads/2022/05/IMG_0002-1.png",
]

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-neutral-700 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-neutral-300 sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}

function Card({ title, description }: Benefit) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-300">{description}</p>
    </div>
  )
}

function CallButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="https://api.whatsapp.com/send?phone=557481265336&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20M%C3%A9todo%20M%C3%A1quina%20de%20Vendas%20Online"
        className="inline-flex rounded-2xl border border-white/15 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/5"
      >
        Dúvidas? Clique aqui
      </a>
    </div>
  )
}


function CTAButtons() {
  const handleClick = () => {
    window.open('https://clkdmg.site/subscribe/mvo-mais-ia-master', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        type="button"
        onClick={handleClick}
        className="cursor-pointer inline-flex rounded-2xl bg-green-600 mx-3 px-3 py-2 md:py-4 md:px-36 text-center shadow-lg shadow-green-800/100 text-base font-bold uppercase tracking-wide text-white transition hover:bg-green-700"
      >
        Quero adquirir por menos de R$0,94 por dia
      </button>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-mist-100 text-white">
      <section className="bg-mist-100 from-neutral-900 via-neutral-950 to-neutral-950">
        <div className="mx-auto max-w-7xl px-2 mt-8 sm:mt-8 sm:px-6 lg:px-56 lg:py-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.2em] text-neutral-950 hidden">
              Oferta especial por tempo limitado
            </p>
            <h1 className="text-[23px] mx-1 font-extrabold font-leading-tight tracking-tight text-neutral-700 sm:text-4xl lg:text-4xl">
              SOMENTE ESTA SEMANA VOCÊ LEVA 4 ACESSOS EXCLUSIVOS, PELO PREÇO DE 1
            </h1>
            
            <VideoComPlayCentral />

            <div className="mt-6 md:mt-10">
              <CTAButtons />
            </div>
          </div>
        </div>
      </section>

      <ItemsProdutos />

      {/*<SessaoTerceira/>*/}

      <ResultadoAlunos/>

      <SwiperAlunos />

      <SobreMim/>

      <SigaPlano/>

      <ResultadosExpressivos/>
      <AindaNaoConhece/>

      
      <section className="bg-white py-12 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#1f1f1f] sm:text-[2.6rem] lg:text-[3rem]">
        Um pouco do que você vai aprender no método mvo 3.0:
      </h2>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-2">
      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 576 512"
              className="h-12 w-12 fill-[#1f1f1f] sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5.1-235.8-404.6z" />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              Mindset Avançado
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Sem lorotas e motivação fraca, irei te ensinar de uma vez por
              todas a como desenvolver a mentalidade que me tornou
              multimilionário em pouco tempo através da internet.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 512 512"
              className="h-12 w-12 sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path
                fill="#eabc6b"
                d="m313.801 94.915s49.06-63.674 34.953-81.941c-4.808-6.225-8.908 2.229-18.851 2.229-11.683 0-11.683-7.644-23.367-7.644-11.682 0-11.682 7.644-23.364 7.644-11.681 0-11.681-7.644-23.362-7.644s-11.681 7.644-23.363 7.644c-9.955 0-14.038-8.564-18.878-2.336-14.114 18.166 34.229 82.047 34.229 82.047-213.505 140.358-144.664 331.239-18.607 331.239h99.973c126.437 0 194.852-190.415-19.363-331.238z"
              />
              <path
                fill="#ffe07d"
                d="m322.923 117.562c-28.507 7.199-56.671 7.2-85.183 0-9.924-2.506-15.549-13.665-11.978-23.808.04-.113.08-.227.12-.34 2.994-8.504 11.486-13.276 19.809-11.187 23.343 5.861 45.932 5.862 69.282 0 8.323-2.09 16.814 2.683 19.809 11.187.04.113.08.227.12.34 3.57 10.144-2.055 21.302-11.979 23.808z"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              Pilares do Marketing Digital
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Inicialmente vou te ensinar de uma forma que você nunca viu, os 3
              principais pilares do marketing digital.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 512 512"
              className="h-12 w-12 sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path fill="#FFDD09" d="M392.708 178.2H275.802L384.175 7.533H247.642l-128 256h100.693L119.642 502.467 392.708 178.2z" />
              <path fill="#FD9808" d="M350.042 178.2l-204.8 243.2-34.133 81.067L384.175 178.2H350.042z" />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              Levantamento de caixa Rápido
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Aqui você irá aprender uma estratégia única para levantar no mínimo
              R$2000 em até uma semana sem precisar investir nada, apenas
              aplicando um conhecimento simples secreto.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 408.788 408.788"
              className="h-12 w-12 sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path
                fill="#475993"
                d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951c-4.932 0-8.935-3.988-8.954-8.92l-.182-47.087c-.019-4.959 3.996-8.989 8.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65c4.945 0 8.955 4.009 8.955 8.955v39.704c0 4.944-4.007 8.952-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087c-.534 4.506-4.355 7.901-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              O principal componente da Máquina de Vendas
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Irei te ensinar Facebook ADS Completo, do básico ao avançado, sem
              censura e mostrando todas as minhas estratégias.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 512 512"
              className="h-12 w-12 fill-blue-400 sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6z" />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              Criação de estrutura profissional de vendas
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Aqui irei te ensinar a criar de forma rápida e descomplicada sua
              estrutura de vendas no automático.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 448 512"
              className="h-12 w-12 fill-[#1f1f1f] sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1z" />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              Nicho Black Completo
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Irei te ensinar a ganhar dinheiro com os nichos mais lucrativos do
              mercado digital.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 512 512"
              className="h-12 w-12 sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path fill="#FFDD09" d="M392.708 178.2H275.802L384.175 7.533H247.642l-128 256h100.693L119.642 502.467 392.708 178.2z" />
              <path fill="#FD9808" d="M350.042 178.2l-204.8 243.2-34.133 81.067L384.175 178.2H350.042z" />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              Metodologia de Produtos
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Além de te dar acesso a produtos exclusivos, também vou te ensinar
              o meu método secreto de escolha de produtos nas plataformas.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 256 256"
              className="h-12 w-12 sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path fill="#526faa" d="m215.778 89.924-71.099 106.956v32.535l-40.678 22.585v-55.12l-71.099-106.956z" />
              <path fill="#fcc24c" d="m177.136 65.639v-17.686h-9.787c-1.137-5.559-3.331-10.73-6.353-15.307l6.93-6.93-12.506-12.506-6.93 6.93c-4.577-3.022-9.748-5.216-15.307-6.353v-9.787h-17.686v9.787c-5.559 1.137-10.73 3.331-15.307 6.353l-6.929-6.93-12.507 12.507 6.93 6.93c-3.022 4.577-5.216 9.748-6.353 15.307h-9.787v17.686h9.787c1.137 5.559 3.332 10.73 6.353 15.307l-6.93 6.93 12.506 12.506 6.929-6.93c4.577 3.021 9.748 5.216 15.307 6.353v9.787h17.686v-9.787c5.559-1.137 10.73-3.332 15.307-6.353l6.929 6.93 12.506-12.506-6.93-6.93c3.022-4.577 5.216-9.748 6.353-15.307h9.789z" />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              Funis de Vendas Milionários
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Irei te mostrar os únicos dois funis que já colocaram mais de 10
              milhões de reais no meu bolso e como você poderá utilizá-los.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-mist-200 px-5 py-6 shadow-sm sm:px-6 lg:col-span-2">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg
              viewBox="0 0 511.038 511.038"
              className="h-12 w-12 sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <path fill="#97da7b" d="M477.867 23.89c6.055 0 10.965 4.909 10.965 10.965v201.36c0 6.055-4.909 10.964-10.965 10.964H33.17c-6.055 0-10.964-4.909-10.964-10.964v-201.36C22.206 28.799 27.115 23.89 33.17 23.89z" />
              <circle cx="255.581" cy="130.805" r="58.465" fill="#97da7b" />
            </svg>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-extrabold leading-tight text-[#1f1f1f] sm:text-[1.45rem]">
              Contingência Avançada
            </h3>
            <p className="mt-2 text-xl leading-7 text-neutral-600">
              Aqui irei te ensinar minha estratégia de contingência que suporta
              milhões de reais por mês em vendas e como você pode copiá-la.
            </p>
          </div>
        </div>
      </article>
    </div>

    <div className="mt-12 text-center sm:mt-14">
      <h2 className="mx-auto max-w-4xl text-[1.2rem] font-bold leading-[1.6] text-[#1f1f1f] sm:text-[1.45rem] lg:text-[1.6rem]">
        E não para por aqui...
        <br />
        <br />
        O curso contém mais de <b>120 aulas práticas</b> e <b>sem enrolação</b>.
        <br />
        <br />
        Além disso, o curso está sempre sendo <b>atualizado</b> com novas aulas
        e <b>aprimoramento</b> de <b>estratégias novas</b>.
        <br />
        <br />
        No entanto, todos os alunos do curso <b>recebem</b> acesso às{" "}
        <b>atualizações gratuitamente.</b>
      </h2>
    </div>
  </div>
</section>

      <section className="border-y border-white/10 bg-gradient-to-b from-emerald-500/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Área de membros premium"
            title="Adquira hoje e receba acesso vitalício à área de membros"
            subtitle="MVO + Renda Turbo 3.0 + IA Masters, consolidando a oferta principal em uma composição premium."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="https://mentorborges.com.br/wp-content/uploads/2024/12/MVO-1024x582.jpeg"
              alt="Área de membros"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Bônus" title="O que mais você leva" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bonusItems.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
              <h3 className="text-2xl font-bold text-white">Do lado daqueles que...</h3>
              <p className="mt-4 text-neutral-300">
                Vão continuar perdendo tempo, sendo iludidos por estratégias fracas e acumulando frustração com resultados ruins ou inexistentes.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <h3 className="text-2xl font-bold text-white">Ou do lado daqueles que...</h3>
              <p className="mt-4 text-neutral-300">
                Seguem uma jornada comprovada, dominam ferramentas de tráfego e estruturam um negócio que vende no automático todos os dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Oferta consolidada</p>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white">De R$2453 por apenas 12x de R$40,32</h2>
        <p className="mt-4 text-lg text-neutral-300">ou R$389,90 à vista</p>
        <div className="mt-10">
          <CTAButtons />
          <CallButtons />
        </div>
        <div className="mt-10 flex justify-center">
          <img
            src="https://mentorborges.com.br/wp-content/uploads/2022/05/compra-segura-2.png"
            alt="Compra segura"
            className="h-auto max-w-full"
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Perguntas frequentes" title="FAQ" />
          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer list-none text-left text-base font-semibold text-white">{item.q}</summary>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">✓ 7 dias de garantia</h3>
            <p className="mt-4 text-neutral-300">
              A comunicação da página original informa 7 dias de garantia incondicional e uma camada adicional condicional mediante aplicação do método.
            </p>
          </div>
        </div>
      </section>

      <footer className="px-4 py-10 text-center text-sm text-neutral-500 sm:px-6 lg:px-8">
        Copyright 2024 © | Máquina de Vendas Online | Todos os direitos reservados
      </footer>
    </main>
  )
}







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
