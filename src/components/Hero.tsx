import { motion, useScroll, useTransform } from "motion/react";
import { ScrubSequence } from "@/components/ScrubSequence";
import React from "react";

type HeroProps = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export function Hero({ scrollRef }: HeroProps) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  // Gestão
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 0, -50]);
  
  // Estratégia
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [50, 0, -50]);

  // Tração
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.65, 0.75], [50, 0, -50]);

  // Escalabilidade
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.9, 1], [50, 0, 0]);

  return (
    <section ref={scrollRef as any} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Frame Sequence Animation (EZgif frames) */}
        <div className="absolute inset-0 z-0">
          <ScrubSequence />
        </div>

        {/* Dark radial glow to blend the text with the video */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(120%_80%_at_50%_60%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

        {/* Scrolling Texts */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute z-20 pointer-events-none text-center px-6 mt-64 md:mt-80">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-foreground">Gestão</h2>
          <p className="font-body text-foreground/60 mt-4 text-lg md:text-xl max-w-[30ch]">O controle absoluto do seu tabuleiro.</p>
        </motion.div>

        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute z-20 pointer-events-none text-center px-6 mt-64 md:mt-80">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-foreground">Estratégia</h2>
          <p className="font-body text-foreground/60 mt-4 text-lg md:text-xl max-w-[30ch]">Antecipe os movimentos do mercado.</p>
        </motion.div>

        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute z-20 pointer-events-none text-center px-6 mt-64 md:mt-80">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-foreground">Tração</h2>
          <p className="font-body text-foreground/60 mt-4 text-lg md:text-xl max-w-[30ch]">Acelere com base sólida e previsível.</p>
        </motion.div>

        <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute z-20 pointer-events-none text-center px-6 mt-64 md:mt-80">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-foreground">Escalabilidade</h2>
          <p className="font-body text-foreground/60 mt-4 text-lg md:text-xl max-w-[30ch]">Cresça sem limites. Seu próximo xeque-mate.</p>
        </motion.div>

        {/* Transition fade to next section */}
        <div className="absolute bottom-0 inset-x-0 h-[20vh] z-30 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
