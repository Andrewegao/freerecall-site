import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Marquee } from "@/components/sections/Marquee";
import { Showcase } from "@/components/sections/Showcase";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <HowItWorks />
      <Marquee />
      <Showcase />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
