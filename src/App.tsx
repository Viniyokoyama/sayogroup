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
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[140px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[140px] mix-blend-screen" />
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
