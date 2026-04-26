import { motion } from "motion/react";
import { ArrowUpRight, Workflow, Layers, Building2, Globe, Briefcase, Sparkles } from "lucide-react";
import { BlurText } from "@/components/BlurText";

const SERVICES = [
  {
    icon: Workflow,
    title: "Consultoria Estratégica",
    body: "Mapeamos o cenário do seu negócio e definimos as melhores rotas para o crescimento estruturado.",
    className: "md:row-span-2 md:col-span-1 p-8 min-h-[480px]"
  },
  {
    icon: Layers,
    title: "Tecnologia",
    body: "Implementamos sistemas robustos para modernizar suas operações diárias.",
    className: "md:col-span-1 p-6 min-h-[228px]"
  },
  {
    icon: Building2,
    title: "Escritórios Virtuais",
    body: "Endereços fiscais e comerciais com gestão de correspondência impecável.",
    className: "md:col-span-1 p-6 min-h-[228px]"
  },
  {
    icon: Globe,
    title: "Internacionalização",
    body: "Estruturamos sua empresa para operar globalmente com suporte contábil e jurídico.",
    className: "md:col-span-2 p-7 min-h-[228px]"
  },
  {
    icon: Briefcase,
    title: "BPO Financeiro",
    body: "Terceirização financeira inteligente para focar no seu core business.",
    className: "md:col-span-1 p-6 min-h-[228px]"
  },
  {
    icon: Sparkles,
    title: "Soluções Sob Medida",
    body: "Cada negócio é único. Desenhamos serviços perfeitamente alinhados ao seu momento de expansão.",
    className: "md:col-span-3 p-7 min-h-[200px]"
  }
];

export function ServicesBento() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16 text-center">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">
          Nossos serviços
        </span>
        <BlurText 
          text="Tudo o que você precisa. Em um só lugar."
          as="h2"
          className="font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight max-w-[20ch] mx-auto text-foreground"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        {SERVICES.map((service, i) => (
          <motion.div
            key={i}
            className={`liquid-glass rounded-2xl relative overflow-hidden group ${service.className}`}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center mb-5">
              <service.icon className="size-5 text-foreground" />
            </div>
            <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight mb-3 max-w-[18ch]">
              {service.title}
            </h3>
            <p className="font-body text-sm text-foreground/65 max-w-[38ch] leading-relaxed">
              {service.body}
            </p>
            <ArrowUpRight className="absolute top-6 right-6 size-5 text-foreground/30 group-hover:text-foreground/80 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
