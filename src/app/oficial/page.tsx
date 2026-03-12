'use client'

import SectionTitle from "@/componentsOficial/SectionTitle";
import VideoComPlayCentral from "@/componentsClient/VideoComPlayCentral";
import CtaButton from "@/componentsClient/CtaButton";
import PoupeSection from "@/componentsOficial/PoupeSection";
import QuemSouEu from "@/componentsOficial/QuemSouEu";
import ResultSection from "@/componentsOficial/ResultSection";
import PlanSection from "@/componentsOficial/PlanSection";
import MembersSection from "@/componentsOficial/MembersSection";
import BonusSection from "@/componentsOficial/BonusSection";
import ItemProducts from "@/componentsOficial/ItemProducts";
import OffertEnd from "@/componentsOficial/OffertEnd";
import GarantiaSection from "@/componentsOficial/GarantiaSection";




    export default function Page() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-mist-100 text-white">
            <section className="bg-white from-neutral-900 via-neutral-950 to-neutral-950">
                <div className="mx-auto max-w-7xl pt-24 sm:px-6 lg:px-56 lg:pt-24">
                    <div className="mx-auto max-w-5xl text-center">
                    <SectionTitle/>
                    <VideoComPlayCentral />
                    <div className="mx-3">
                    <CtaButton />
                    </div>
                    <PoupeSection />
                    <QuemSouEu/>
                    <ResultSection />
                    <PlanSection />
                    <MembersSection />
                    <BonusSection />
                    <ItemProducts />
                    <OffertEnd />
                    <GarantiaSection />
                    </div>
                </div>
            </section>
        </main>
  );
}