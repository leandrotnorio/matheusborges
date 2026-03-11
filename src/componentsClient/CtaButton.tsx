

export default function CTAButtons() {
  const handleClick = () => {
    window.open('https://clkdmg.site/subscribe/mvo-mais-ia-master', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="mt-10">
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        type="button"
        onClick={handleClick}
        className="cursor-pointer inline-flex rounded-2xl bg-green-600 mx-3 px-3 py-2 md:py-4 md:px-36 text-center shadow-lg shadow-green-800/100 text-base font-bold uppercase tracking-wide text-white transition hover:bg-green-700"
      >
        Quero adquirir por menos de R$1,27 por dia
      </button>
    </div>
    </div>
  )
}