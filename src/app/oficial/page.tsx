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
import { useEffect, useState } from "react";




    export default function Page() {

         const [isReleased, setIsReleased] = useState(false);

            useEffect(() => {
                const timer = setTimeout(() => {
                setIsReleased(true);
                }, 3000);

                return () => clearTimeout(timer);
            }, []);

    return (
        <main className="min-h-screen overflow-x-hidden text-white">
            <section className="bg-white from-neutral-900 via-neutral-950 to-neutral-950">
                <div className="mx-auto pt-24 lg:pt-24">
                    <div className="mx-auto text-center">
                    <SectionTitle/>
                    <VideoComPlayCentral />
                    {isReleased && (
                    <>
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
                    </>)}
                    </div>
                </div>
            </section>
        </main>
  );
}