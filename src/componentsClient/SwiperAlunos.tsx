import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const studentResultsImagess = [
  "/aluno1.png",
  "/aluno2.png",
  "/aluno3.png",
  "/aluno4.png",
  "/aluno5.png",
  "/aluno6.png",
];

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

    export default function SwiperAlunos() {
        return (
           <section className="bg-white py-16">
                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                   <div className="mx-auto max-w-4xl">
                     <h2 className="text-center text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                       Resultado dos alunos nos primeiros 7 dias
                     </h2>
                   </div>
           
                   <div className="mx-auto mt-10 max-w-3xl">
                     <Swiper
                       modules={[Navigation, Pagination, Autoplay]}
                       navigation
                       pagination={{ clickable: true }}
                       autoplay={{
                         delay: 5000,
                         disableOnInteraction: false,
                         pauseOnMouseEnter: true,
                       }}
                       loop
                       spaceBetween={27}
                       slidesPerView={1}
                       breakpoints={{
                         640: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                         },
                         1024: {
                           slidesPerView: 3,
                           spaceBetween: 27,
                         },
                       }}
                       className="student-results-swiper !pb-12"
                     >
                       {studentResultsImages.map((src, index) => (
                         <SwiperSlide key={index}>
                           <div className="overflow-hidden bg-white">
                             <div className="relative aspect-[738/1456] w-full">
                               <Image
                                 src={src}
                                 alt={`Resultado do aluno ${index + 1}`}
                                 fill
                                 className="object-cover"
                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                               />
                             </div>
                           </div>
                         </SwiperSlide>
                       ))}
                     </Swiper>
                   </div>
                 </div>
               </section>
    );
    }
