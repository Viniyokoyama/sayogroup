import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: "10k+", label: "Clientes Ativos" },
  { value: "99%",  label: "Taxa de Sucesso" },
  { value: "24/7", label: "Suporte" },
  { value: "15 anos", label: "Experiência" }
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={ref}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        className="absolute inset-0 w-full h-full object-cover saturate-0 opacity-40 mix-blend-luminosity pointer-events-none"
      />
      
      {/* Top and Bottom Fades */}
      <div className="absolute top-0 inset-x-0 h-[200px] z-[1] gradient-fade-t" />
      <div className="absolute bottom-0 inset-x-0 h-[200px] z-[1] gradient-fade-b" />

      {/* Content */}
      <div className="liquid-glass rounded-3xl p-10 md:p-14 mx-[var(--gutter)] max-w-[var(--max)] md:mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
          
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-px h-12 bg-border left-[25%]" />
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-px h-12 bg-border left-[50%]" />
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-px h-12 bg-border left-[75%]" />

          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
              <motion.span 
                className="font-display italic text-5xl md:text-6xl lg:text-7xl leading-none text-foreground"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {mounted ? stat.value : "0"}
              </motion.span>
              <span className="font-body text-sm text-foreground/60 mt-3 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
