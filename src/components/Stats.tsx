import { motion, useInView } from "motion/react";
import { useRef } from "react";

const STATS = [
  { value: "10k+", label: "Clientes Ativos" },
  { value: "99%",  label: "Taxa de Sucesso" },
  { value: "24/7", label: "Suporte Dedicado" },
  { value: "15+",  label: "Anos de Mercado" }
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative py-32 md:py-44" ref={ref}>
      <div className="section-line max-w-[var(--max)] mx-auto mb-32" />

      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="relative md:border-l md:first:border-l-0 border-white/[0.06] md:pl-10 md:first:pl-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display text-5xl md:text-6xl lg:text-7xl leading-none text-foreground tracking-tight">
                {stat.value}
              </span>
              <span className="block font-body text-[11px] uppercase tracking-[0.25em] text-foreground/35 mt-3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
