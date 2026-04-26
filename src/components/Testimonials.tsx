import { BlurText } from "@/components/BlurText";

const T1 = [
  { name: "Mariana Silva", role: "CEO, TechCorp", body: "A Sayo Group transformou nossa operação do dia para a noite. Precisão absoluta." },
  { name: "Ricardo Mendes", role: "Dir. Operações, Logistics SA", body: "Um verdadeiro hub de soluções. Eles entendem o negócio como poucos no mercado." },
  { name: "Juliana Paes", role: "Fundadora, StartUpX", body: "Não somos mais um número. O atendimento é primoroso e focado em escala." },
  { name: "Carlos Andrade", role: "CFO, Financeiro Global", body: "A reestruturação contábil foi impecável. Confiança total no time deles." },
  { name: "Fernanda Costa", role: "VP de Vendas, Comércio Plus", body: "Nossas metas foram atingidas 3 meses antes do previsto graças à consultoria." },
  { name: "Lucas Ferreira", role: "CTO, DataFlow", body: "Integração de sistemas perfeita. Parece que sempre fizeram parte do nosso time." },
];

const TRACK_1 = [...T1, ...T1, ...T1];
const TRACK_2 = [...T1, ...T1, ...T1].reverse();

function TestimonialCard({ t }: { t: typeof T1[0] }) {
  return (
    <div className="w-[360px] md:w-[420px] shrink-0 rounded-2xl p-8 border border-white/[0.04] bg-white/[0.02] hover:border-primary/15 transition-colors duration-500 flex flex-col justify-between gap-8">
      <p className="font-body text-base text-foreground/60 leading-relaxed italic">
        "{t.body}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
          <span className="font-display text-sm text-primary">{t.name[0]}</span>
        </div>
        <div>
          <p className="font-display tracking-tight text-base uppercase">{t.name}</p>
          <p className="font-body text-[11px] text-foreground/35">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 md:py-48 overflow-hidden">
      <div className="section-line max-w-[var(--max)] mx-auto mb-32" />

      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-body mb-4 block">
          Depoimentos
        </span>
        <BlurText 
          text="Não acredite apenas em nós."
          as="h2"
          className="font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.88] tracking-tight text-foreground"
        />
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-4 group">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max space-x-4 px-4 animate-marquee group-hover:[animation-play-state:paused]">
          {TRACK_1.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
        <div className="flex w-max space-x-4 px-4 animate-marquee-rev group-hover:[animation-play-state:paused]">
          {TRACK_2.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}
