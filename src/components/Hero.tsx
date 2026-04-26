import { motion, useScroll, useTransform } from "motion/react";
import { ScrubSequence } from "@/components/ScrubSequence";
import { FRAMES_PATH, FRAME_COUNT, FRAME_EXT } from "@/lib/constants";
import { BlurText } from "@/components/BlurText";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import React from "react";

type HeroProps = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export function Hero({ scrollRef }: HeroProps) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY       = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const badgeScale  = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);

  return (
    <section ref={scrollRef as any} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Frame Sequence */}
        <div className="absolute inset-0 z-0">
          <ScrubSequence framesPath={FRAMES_PATH} frameCount={FRAME_COUNT} ext={FRAME_EXT} scrollTargetRef={scrollRef as any} />
        </div>

        {/* Cinematic vignette */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_100%)]" />
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-[45vh] z-[2] gradient-fade-b" />
        
        {/* Content */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 z-10 flex flex-col items-start justify-end pb-[15vh] px-[var(--gutter)] max-w-[var(--max)] mx-auto"
        >
          {/* Badge */}
          <motion.div style={{ scale: badgeScale }}>
            <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 mb-8">
              <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">Novo</span>
              <span className="pr-3 text-sm text-foreground/70 font-body">Seu HUB de soluções integradas</span>
            </div>
          </motion.div>

          <BlurText
            text="Conectando você ao sucesso."
            as="h1"
            className="font-display uppercase text-[clamp(48px,8vw,120px)] leading-[0.88] tracking-[-0.03em] text-foreground max-w-[12ch]"
            delay={0.08}
            startDelay={0.1}
          />

          <p className="font-body text-foreground/50 mt-6 text-base md:text-lg max-w-md leading-relaxed">
            Gestão, estratégia, tração e escalabilidade para o seu negócio dominar o mercado.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a href="#contato" className={buttonVariants({ variant: "hero" })}>
              Falar com Especialista <ArrowUpRight className="ml-1.5 size-4" />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-body">Scroll</span>
          <motion.div 
            className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
