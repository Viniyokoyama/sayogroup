import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import React from "react";

type HeroProps = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export function Hero({ scrollRef }: HeroProps) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  // Rotates the king piece in 3D (Y axis) based on scroll
  const rotateYScroll = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  // Tilt interativo com o mouse
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 30, stiffness: 200, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateXMouse = useTransform(smoothMouseY, [0, 1], [15, -15]);
  const rotateYMouse = useTransform(smoothMouseX, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

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
        
        {/* Background glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        {/* 3D Interactive Chess Piece Wrapper */}
        <div 
          className="relative z-10 w-[280px] h-[280px] md:w-[450px] md:h-[450px]"
          style={{ perspective: "1200px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            style={{ 
              rotateY: rotateYScroll, 
              scale,
              transformStyle: "preserve-3d"
            }} 
            className="w-full h-full flex items-center justify-center"
          >
            {/* The actual image tilting to the mouse */}
            <motion.img 
              style={{
                rotateX: rotateXMouse,
                rotateY: rotateYMouse,
              }}
              src="/images/prompt1_1.png" 
              alt="O Rei do Xadrez"
              className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] mix-blend-screen pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Scrolling Texts */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute z-20 pointer-events-none text-center px-6 mt-[22rem] md:mt-[32rem]">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-foreground">Gestão</h2>
          <p className="font-body text-foreground/60 mt-4 text-lg md:text-xl max-w-[30ch]">O controle absoluto do seu tabuleiro.</p>
        </motion.div>

        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute z-20 pointer-events-none text-center px-6 mt-[22rem] md:mt-[32rem]">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-foreground">Estratégia</h2>
          <p className="font-body text-foreground/60 mt-4 text-lg md:text-xl max-w-[30ch]">Antecipe os movimentos do mercado.</p>
        </motion.div>

        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute z-20 pointer-events-none text-center px-6 mt-[22rem] md:mt-[32rem]">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-foreground">Tração</h2>
          <p className="font-body text-foreground/60 mt-4 text-lg md:text-xl max-w-[30ch]">Acelere com base sólida e previsível.</p>
        </motion.div>

        <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute z-20 pointer-events-none text-center px-6 mt-[22rem] md:mt-[32rem]">
          <h2 className="font-display uppercase text-5xl md:text-7xl tracking-tight text-foreground">Escalabilidade</h2>
          <p className="font-body text-foreground/60 mt-4 text-lg md:text-xl max-w-[30ch]">Cresça sem limites. Seu próximo xeque-mate.</p>
        </motion.div>

        {/* Transition fade to next section */}
        <div className="absolute bottom-0 inset-x-0 h-[20vh] z-30 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
