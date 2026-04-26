import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ShieldCheck, Clock, TrendingUp, Award } from "lucide-react";

const REASONS = [
  { icon: ShieldCheck, title: "Segurança", body: "Seus dados e operações protegidos pelos mais rigorosos padrões do mercado.", num: "01" },
  { icon: Clock, title: "Agilidade", body: "Respostas rápidas e execuções precisas, sem burocracia que atrasa seu time.", num: "02" },
  { icon: TrendingUp, title: "Escalabilidade", body: "Processos desenhados para suportar o seu aumento de demanda organicamente.", num: "03" },
  { icon: Award, title: "Excelência", body: "Profissionais de elite focados exclusivamente nos resultados do seu negócio.", num: "04" },
];

export function Pourquoi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="why-us" className="relative py-32 md:py-48" ref={ref}>
      {/* Divider */}
      <div className="section-line max-w-[var(--max)] mx-auto mb-32" />

      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left — Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-body mb-4 block">
              Por que a Sayo Group
            </span>
            <h2 className="font-display uppercase text-4xl md:text-5xl leading-[0.88] tracking-tight text-foreground mb-6">
              Não somos fornecedores. Somos parceiros.
            </h2>
            <p className="font-body text-foreground/45 text-sm leading-relaxed max-w-sm">
              Elevamos o padrão de entrega do mercado porque sabemos que o seu sucesso dita o nosso.
            </p>
          </div>

          {/* Right — Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {REASONS.map((r, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl p-8 min-h-[280px] flex flex-col justify-between border border-white/[0.04] hover:border-primary/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Large number watermark */}
                <span className="absolute top-6 right-8 font-display text-[80px] leading-none text-white/[0.03] select-none group-hover:text-primary/10 transition-colors duration-700">
                  {r.num}
                </span>

                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500">
                    <r.icon className="size-4 text-foreground/70 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="font-display uppercase text-2xl tracking-tight mb-3">
                    {r.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/40 leading-relaxed max-w-[30ch]">
                    {r.body}
                  </p>
                </div>

                <div className="h-px w-12 bg-gradient-to-r from-primary/40 to-transparent mt-6 group-hover:w-20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
