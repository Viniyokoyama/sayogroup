import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurText } from "@/components/BlurText";

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
    q: "Como funciona a transição dos meus processos atuais para a Sayo?",
    a: "Atuamos com um plano de transição estruturado e de baixo atrito. Nosso time se encarrega de auditar, mapear e migrar suas operações sem interromper a sua rotina diária."
  },
  {
    q: "Quais regiões vocês atendem?",
    a: "Nossa operação centralizada permite atendermos clientes de todo o país e também suportamos o processo de internacionalização para empresas brasileiras."
  }
];

export function Faq() {
  return (
    <section id="faq" className="relative py-28 md:py-40 bg-background max-w-[800px] mx-auto px-[var(--gutter)]">
      <div className="text-center mb-16">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">
          Dúvidas Frequentes
        </span>
        <BlurText 
          text="Perguntas e Respostas"
          as="h2"
          className="font-display uppercase text-4xl md:text-5xl leading-[0.9] tracking-tight text-foreground"
        />
      </div>

      <Accordion className="w-full">
        {FAQS.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border/20">
            <AccordionTrigger className="font-display text-xl uppercase tracking-tight text-left hover:no-underline hover:text-primary transition-colors py-6">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-foreground/65 text-base leading-relaxed pb-6">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
