'use client'

import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

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

export default function SigaPlano() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-[1.9rem] font-extrabold uppercase leading-[1.15] tracking-tight text-neutral-900 sm:text-[2.6rem] lg:text-[3rem]">
            SIGA UM PLANO{" "}
            <span className="text-[#159E42]">COMPROVADO</span> E A PROVA DE{" "}
            <span className="inline-block bg-[#D71A1A] px-2 py-1 text-white">
              FALHAS
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-6 max-w-4xl text-center sm:mt-8">
          <p className="text-[1rem] leading-7 text-neutral-800 sm:text-[1.1rem] sm:leading-8 lg:text-[1.2rem]">
            O Máquina de Vendas Online é uma metodologia de vendas simples e
            eficaz que pode ser aplicada por qualquer um para vender
            literalmente qualquer produto como afiliado ou produtor através da
            internet.
          </p>

          <p className="mt-5 text-[1rem] leading-7 text-neutral-800 sm:text-[1.1rem] sm:leading-8 lg:text-[1.2rem]">
            Foi a mesma estratégia que utilizei desde a minha primeira venda
            como afiliado, até os mais de 15 milhões em vendas na internet.
          </p>

          <p className="mt-5 text-[1rem] leading-7 text-neutral-800 sm:text-[1.1rem] sm:leading-8 lg:text-[1.2rem]">
            Atualmente é a maneira mais rápida, objetiva e segura de se ganhar
            dinheiro na internet, contendo as melhores estratégias do marketing
            digital no momento.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
          <h3 className="mb-6 text-center text-[1.5rem] font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:mb-8 sm:text-[2rem] lg:text-[2.2rem]">
            RESULTADOS DOS <span className="text-[#159E42]">ALUNOS</span> NO
            CANAL DO TELEGRAM
          </h3>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            speed={500}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="telegram-results-swiper"
          >
            {telegramResultsImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden bg-white">
                  <div className="relative aspect-[1242/2208] w-full">
                    <img
                      src={src}
                      alt={`Resultado no Telegram ${index + 1}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}