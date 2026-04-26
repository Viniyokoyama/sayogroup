import { motion, useInView } from "motion/react";
import { useRef } from "react";

const STEPS = [
  { n: "01", title: "Diagnóstico", body: "Entendemos profundamente os gargalos atuais e objetivos da sua operação." },
  { n: "02", title: "Planejamento", body: "Construímos o plano de ação estratégico, desenhado especificamente para o seu cenário." },
  { n: "03", title: "Execução", body: "Nosso time atua com precisão, implementando as soluções com o mínimo de fricção." },
  { n: "04", title: "Escala", body: "Monitoramento e otimização contínua para garantir que seu negócio avance sem tetos." }
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="relative py-32 md:py-48" ref={ref}>
      <div className="section-line max-w-[var(--max)] mx-auto mb-32" />

      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-body mb-4 block">
              Como trabalhamos
            </span>
            <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.88] tracking-tight text-foreground max-w-[16ch]">
              Método. Precisão. Entrega.
            </h2>
          </div>
          <p className="font-body text-foreground/45 text-sm max-w-xs leading-relaxed md:text-right">
            Um processo cirúrgico em quatro etapas, projetado para resultados reais.
          </p>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-[52px] left-0 right-0 h-px bg-gradient-to-r from-white/[0.06] via-primary/20 to-white/[0.06]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="relative md:px-8 first:md:pl-0 last:md:pr-0"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Dot on timeline */}
                <div className="hidden md:flex absolute top-[46px] left-8 first:left-0 w-3 h-3 rounded-full border-2 border-primary/40 bg-background z-10 items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                </div>

                <span className="font-display text-primary/30 text-[11px] uppercase tracking-[0.3em] mb-4 block">
                  Passo {step.n}
                </span>

                <div className="pt-10 md:pt-16">
                  <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/40 leading-relaxed max-w-[28ch]">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
