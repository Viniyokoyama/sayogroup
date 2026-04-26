import { BlurText } from "@/components/BlurText";

const PROCESS_STEPS = [
  { n: "1", title: "Diagnóstico", body: "Entendemos profundamente os gargalos atuais e objetivos da sua operação." },
  { n: "2", title: "Planejamento", body: "Construímos o plano de ação estratégico, desenhado especificamente para o seu cenário." },
  { n: "3", title: "Execução", body: "Nosso time atua com precisão, implementando as soluções com o mínimo de fricção." },
  { n: "4", title: "Escala", body: "Monitoramento e otimização contínua para garantir que seu negócio avance sem tetos." }
];

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-20 text-center">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">
          Como trabalhamos
        </span>
        <BlurText 
          text="Método. Precisão. Entrega."
          as="h2"
          className="font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight max-w-[20ch] mx-auto text-foreground"
        />
      </div>

      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative">
        <div className="hidden md:block absolute top-20 -right-0 h-px w-full bg-gradient-to-r from-border via-border to-transparent" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative px-6 md:px-10 py-10 md:py-14 flex flex-col gap-4 items-start">
              <span className="font-display text-[96px] md:text-[140px] leading-none text-primary/25 -mb-6 select-none">
                {step.n.padStart(2, "0")}
              </span>
              <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight z-10">
                {step.title}
              </h3>
              <p className="font-body text-sm text-foreground/65 leading-relaxed max-w-[30ch] z-10">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
