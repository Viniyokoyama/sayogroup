import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Quais soluções a Sayo Group oferece?",
    a: "Oferecemos desde consultoria estratégica e implementação de tecnologias até gestão contábil, BPO financeiro e escritórios virtuais. Somos um verdadeiro hub para escalar o seu negócio."
  },
  {
    q: "Vocês atendem pequenas e médias empresas?",
    a: "Sim. Nossos processos são adaptáveis ao momento do seu negócio, garantindo que as soluções entreguem valor real, independentemente do seu tamanho atual."
  },
  {
    q: "Como funciona a transição dos meus processos?",
    a: "Atuamos com um plano de transição estruturado e de baixo atrito. Nosso time se encarrega de auditar, mapear e migrar suas operações sem interromper a sua rotina diária."
  },
  {
    q: "Quais regiões vocês atendem?",
    a: "Nossa operação centralizada permite atendermos clientes de todo o país e também suportamos o processo de internacionalização para empresas brasileiras."
  },
  {
    q: "Existe um contrato mínimo de permanência?",
    a: "Trabalhamos com contratos flexíveis e adaptáveis à sua necessidade. Nosso foco é criar valor contínuo para que a parceria seja uma escolha natural."
  }
];

export function Faq() {
  return (
    <section id="faq" className="relative py-32 md:py-48">
      <div className="section-line max-w-[var(--max)] mx-auto mb-32" />

      <div className="max-w-[900px] mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Header */}
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-body mb-4 block">
              FAQ
            </span>
            <h2 className="font-display uppercase text-4xl md:text-5xl leading-[0.88] tracking-tight text-foreground">
              Dúvidas frequentes
            </h2>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-8">
            <Accordion className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/[0.06]">
                  <AccordionTrigger className="font-display text-lg md:text-xl uppercase tracking-tight text-left hover:no-underline hover:text-primary transition-colors py-7">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-foreground/45 text-base leading-relaxed pb-7">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
