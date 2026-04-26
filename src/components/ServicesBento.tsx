import { motion } from "motion/react";
import { Workflow, Layers, Building2, Globe, Briefcase, Sparkles } from "lucide-react";
import { BlurText } from "@/components/BlurText";

const SERVICES = [
  {
    icon: Workflow,
    title: "Consultoria Estratégica",
    body: "Mapeamos o cenário do seu negócio e definimos as melhores rotas para o crescimento estruturado.",
    className: "md:col-span-2 md:row-span-2",
    image: "/images/prompt2_3.png"
  },
  {
    icon: Layers,
    title: "Tecnologia & Sistemas",
    body: "Implementamos sistemas robustos para modernizar suas operações diárias e ganhar eficiência.",
    className: "md:col-span-1",
    image: "/images/prompt2_1.png"
  },
  {
    icon: Building2,
    title: "Escritórios Virtuais",
    body: "Endereços fiscais e comerciais com gestão de correspondência impecável.",
    className: "md:col-span-1",
    image: "/images/prompt3_2.png"
  },
  {
    icon: Globe,
    title: "Internacionalização",
    body: "Estruturamos sua empresa para operar globalmente com total suporte contábil e jurídico.",
    className: "md:col-span-1",
    image: "/images/prompt2_4.png"
  },
  {
    icon: Briefcase,
    title: "BPO Financeiro",
    body: "Terceirização financeira inteligente para você focar no seu core business.",
    className: "md:col-span-1",
    image: "/images/prompt3_4.png"
  },
  {
    icon: Sparkles,
    title: "Soluções Sob Medida",
    body: "Cada negócio é único. Desenhamos serviços perfeitamente alinhados ao seu momento de expansão.",
    className: "md:col-span-2",
    image: "/images/prompt4_2.png"
  }
];

export function ServicesBento() {
  return (
    <section id="services" className="relative py-32 md:py-48">
      {/* Section header — left aligned, editorial */}
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-body mb-4 block">
              Nossos serviços
            </span>
            <BlurText 
              text="Tudo o que você precisa. Em um só lugar."
              as="h2"
              className="font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.88] tracking-tight text-foreground max-w-[18ch]"
            />
          </div>
          <p className="font-body text-foreground/45 text-sm md:text-base max-w-sm leading-relaxed md:text-right">
            Um ecossistema completo de soluções para que sua empresa escale sem limites e sem atritos.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-3 max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        {SERVICES.map((service, i) => (
          <motion.div
            key={i}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${service.className}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={service.image} 
                alt="" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ink))] via-[hsl(var(--ink)/0.7)] to-transparent" />
            </div>

            {/* Glass border on hover */}
            <div className="absolute inset-0 z-[1] rounded-2xl border border-white/0 group-hover:border-white/10 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500">
                <service.icon className="size-4 text-foreground/80 group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="font-display uppercase text-xl md:text-2xl leading-[0.95] tracking-tight mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-foreground/40 leading-relaxed max-w-[35ch] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {service.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
