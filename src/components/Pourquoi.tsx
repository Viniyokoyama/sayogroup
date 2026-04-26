import { ShieldCheck, Clock, TrendingUp, Award } from "lucide-react";
import { BlurText } from "@/components/BlurText";

const REASONS = [
  { 
    icon: ShieldCheck, 
    title: "Segurança Absoluta", 
    body: "Seus dados e operações protegidos pelos mais rigorosos padrões do mercado." 
  },
  { 
    icon: Clock,       
    title: "Agilidade",            
    body: "Respostas rápidas e execuções precisas, sem burocracia que atrasa seu time." 
  },
  { 
    icon: TrendingUp,        
    title: "Crescimento Escalável",       
    body: "Processos desenhados para suportar o seu aumento de demanda organicamente." 
  },
  { 
    icon: Award,       
    title: "Time Especializado", 
    body: "Profissionais de elite focados exclusivamente nos resultados do seu negócio." 
  },
];

export function Pourquoi() {
  return (
    <section id="why-us" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] text-center">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">
          Por que a Sayo Group
        </span>
        <BlurText 
          text="Não somos fornecedores. Somos parceiros."
          as="h2"
          className="font-display uppercase text-4xl md:text-6xl leading-[0.9] max-w-[18ch] mx-auto tracking-tight"
        />
        <p className="font-body text-foreground/65 mt-6 max-w-xl mx-auto">
          Elevamos o padrão de entrega do mercado porque sabemos que o seu sucesso dita o nosso.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        {REASONS.map((r, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-7 flex flex-col gap-5 min-h-[260px]">
            <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center">
              <r.icon className="size-5 text-foreground" />
            </div>
            <h3 className="font-display uppercase text-xl tracking-tight">
              {r.title}
            </h3>
            <p className="font-body text-sm text-foreground/65 leading-relaxed">
              {r.body}
            </p>
            <div className="mt-auto h-px w-10 bg-gradient-to-r from-primary to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
