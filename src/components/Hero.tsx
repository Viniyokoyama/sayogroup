import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrubSequence } from "@/components/ScrubSequence";
import { BlurText } from "@/components/BlurText";
import { FRAMES_PATH, FRAME_COUNT, FRAME_EXT } from "@/lib/constants";
import React from "react";

type HeroProps = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export function Hero({ scrollRef }: HeroProps) {
  return (
    <section ref={scrollRef as any} className="relative h-[250vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Frame sequence canvas */}
        <ScrubSequence
          framesPath={FRAMES_PATH}
          frameCount={FRAME_COUNT}
          ext={FRAME_EXT}
          scrollTargetRef={scrollRef}
          className="absolute inset-0 w-full h-full z-0"
        />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(120%_80%_at_50%_60%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-[40vh] z-[2] gradient-fade-b" />
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>
            <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2">
              <span className="bg-foreground text-background rounded-full px-3 py-1 text-xs font-semibold">Novo</span>
              <span className="pr-3 text-sm text-foreground/85">Seu HUB de soluções</span>
            </div>
          </motion.div>

          <BlurText
            text="conectando você ao sucesso."
            as="h1"
            className="mt-6 font-display uppercase text-[clamp(56px,9vw,144px)] leading-[0.92] tracking-[-0.02em] text-foreground max-w-[14ch]"
            delay={0.09}
            startDelay={0.15}
          />

          <motion.p
            initial={{filter:"blur(10px)", opacity:0, y:16}}
            animate={{filter:"blur(0)", opacity:1, y:0}}
            transition={{delay:0.9, duration:0.7, ease:[0.22,1,0.36,1]}}
            className="mt-6 font-body text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed"
          >
            Tudo para o seu negócio escalar sem atritos.
          </motion.p>

          <motion.div
            initial={{opacity:0, y:12}}
            animate={{opacity:1, y:0}}
            transition={{delay:1.1, duration:0.6}}
            className="mt-10 flex items-center gap-3"
          >
            <a href="#contato" className={buttonVariants({ variant: "hero" })}>
              Falar com Especialista <ArrowUpRight className="ml-1 size-4" />
            </a>
            <Button variant="heroGlass">
              <Play className="mr-1.5 size-4 fill-current" /> Ver o filme
            </Button>
          </motion.div>

          {/* Partners row — absolute bottom */}
          <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-4">
            <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/80">
              Eles confiam em nós
            </span>
            <div className="flex items-center gap-8 md:gap-14 flex-wrap justify-center px-6">
              {["Microsoft", "Amazon", "Google", "Stripe", "Vercel"].map(p => (
                <span key={p} className="font-display italic text-xl md:text-2xl text-foreground/70 tracking-tight">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
