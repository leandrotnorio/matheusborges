

import { IoCheckboxSharp } from "react-icons/io5";
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

export default function ItemsProdutos(){
    return (

    <section className="mx-auto md:mt-16 bg-mist-100 py-6 sm:px-8 lg:px-96">
        <SectionTitle
          title="ADQUIRA AGORA OU VOCÊ IRÁ IMPLORAR PARA PAGAR MAIS CARO DEPOIS..."
        />

        <div className="mt-12 mx-10 grid md:grid-cols-1">
          {offerItems.map((item) => (
            <div key={item.title} className="flex items-start gap-2 border-b border-neutral-400 bg-white p-2 text-lg text-neutral-800">
              <span className="font-semibold"><IoCheckboxSharp className="h-8 w-8 text-green-500"/></span>
              <div className="flex flex-wrap gap-1">
                <h3 className="font-extrabold text-neutral-700 text-2xl">{item.title}</h3>
                <p className="text-xl font-bold text-neutral-600">{item.description}<span className="text-2xl font-extrabold text-red-700 line-through">{item.beforePrice}</span><span className="text-xl font-bold text-neutral-600"> Por </span><span className="text-2xl font-black text-black">{item.price}</span></p>
              </div>
            </div>
          ))}
        </div>
    </section>
    );
}