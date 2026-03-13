import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineHub } from "react-icons/md";

export default function BonusSection() {
  const items = [
    {
      id: 1,
      icon: <FaTelegramPlane className="h-12 w-12 text-sky-500" />,
      title: "Grupo privado no Telegram",
      description:
        "Você terá acesso a um grupo VIP no telegram, para trocar network e tirar suas dúvidas!",
    },
    {
      id: 2,
      icon: <MdOutlineHub className="h-12 w-12 text-rose-400" />,
      title: "Afiliação Vitalícia",
      description:
        "Você terá acesso vitalício a produtos ocultos que vendem muito!",
    },
  ];

  return (
    <section
      id="aparecer8"
      className="w-full bg-white py-16"
    >
      <div className="mx-8 max-w-[1140px]">
        <div className="mx-auto flex max-w-[1140px] flex-col">
          <div className="w-full">
            <h2 className="mb-10 text-start text-[22px] uppercase font-extrabold leading-tight text-neutral-800 md:text-4xl">
              e o que mais você leva de bônus?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-y-10">
            {items.map((item) => (
              <div key={item.id} className="w-full bg-mist-100 py-6 px-4">
                <div className="flex items-start gap-2">
                  <div className="flex min-w-[64px] justify-center pt-1">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl text-start font-extrabold leading-tight text-neutral-900 sm:text-xl md:text-lg">
                      <b>{item.title}</b>
                    </h3>

                    <p className="mt-2 text-[16px] text-start leading-4 text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}