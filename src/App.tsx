import { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesBento } from "./components/ServicesBento";
import { Pourquoi } from "./components/Pourquoi";
import { Process } from "./components/Process";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { CtaFooter } from "./components/CtaFooter";

export default function App() {
  const heroScrollRef = useRef<HTMLElement>(null);
  
  return (
    <>
      {/* Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-primary/[0.07] blur-[180px] animate-pulse-glow" />
        <div className="absolute top-[50%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-primary/[0.04] blur-[180px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-secondary/[0.05] blur-[160px] animate-pulse-glow [animation-delay:4s]" />
      </div>

      <Navbar />
      <main>
        <Hero scrollRef={heroScrollRef} />
        <ServicesBento />
        <Pourquoi />
        <Process />
        <Stats />
        <Testimonials />
        <Faq />
      </main>
      <CtaFooter />
    </>
  );
}
