import { motion } from "motion/react";
import { Workflow, Layers, Building2, Globe, Briefcase, Sparkles } from "lucide-react";
import { BlurText } from "@/components/BlurText";

const SERVICES = [
  {
    icon: Workflow,
    title: "Consultoria Estratégica",
    body: "Mapeamos o cenário do seu negócio e definimos as melhores rotas para o crescimento estruturado.",
    className: "md:row-span-2 md:col-span-1 min-h-[480px]",
    image: "/images/prompt2_3.png"
  },
  {
    icon: Layers,
    title: "Tecnologia",
    body: "Implementamos sistemas robustos para modernizar suas operações diárias e ganhar eficiência.",
    className: "md:col-span-1 min-h-[260px]",
    image: "/images/prompt2_1.png"
  },
  {
    icon: Building2,
    title: "Escritórios Virtuais",
    body: "Endereços fiscais e comerciais com gestão de correspondência impecável.",
    className: "md:col-span-1 min-h-[260px]",
    image: "/images/prompt3_2.png"
  },
  {
    icon: Globe,
    title: "Internacionalização",
    body: "Estruturamos sua empresa para operar globalmente com total suporte.",
    className: "md:col-span-2 min-h-[260px]",
    image: "/images/prompt2_4.png"
  },
  {
    icon: Briefcase,
    title: "BPO Financeiro",
    body: "Terceirização financeira inteligente para você focar no seu core business.",
    className: "md:col-span-1 min-h-[260px]",
    image: "/images/prompt3_4.png"
  },
  {
    icon: Sparkles,
    title: "Soluções Sob Medida",
    body: "Cada negócio é único. Desenhamos serviços perfeitamente alinhados ao seu momento de expansão.",
    className: "md:col-span-3 min-h-[300px]",
    image: "/images/prompt4_2.png"
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
            className={`rounded-2xl relative overflow-hidden group cursor-pointer border border-border/10 bg-background/5 ${service.className}`}
            whileHover={{ y: -8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Imagem de Fundo Interativa */}
            {service.image && (
              <motion.div 
                className="absolute inset-0 z-0"
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent group-hover:from-background group-hover:via-background/90 transition-all duration-700" />
              </motion.div>
            )}

            {/* Conteúdo que revela no hover */}
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
              <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="size-5 text-foreground" />
              </div>
              <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight mb-3">
                {service.title}
              </h3>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                <div className="overflow-hidden">
                  <p className="font-body text-sm text-foreground/80 leading-relaxed pt-2">
                    {service.body}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
