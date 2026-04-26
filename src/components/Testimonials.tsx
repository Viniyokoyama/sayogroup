import { BlurText } from "@/components/BlurText";

const T1 = [
  { name: "Mariana Silva", role: "CEO, TechCorp", body: "A Sayo Group transformou nossa operação do dia para a noite. Precisão absoluta." },
  { name: "Ricardo Mendes", role: "Diretor de Operações, Logistics SA", body: "Um verdadeiro hub de soluções. Eles entendem o negócio como poucos." },
  { name: "Juliana Paes", role: "Fundadora, StartUpX", body: "Não somos mais um número. O atendimento é primoroso e focado em escala." },
  { name: "Carlos Andrade", role: "CFO, Financeiro Global", body: "A reestruturação contábil foi impecável. Confiança total no time." },
  { name: "Fernanda Costa", role: "VP de Vendas, Comércio Plus", body: "Nossas metas foram atingidas 3 meses antes do previsto graças à consultoria." },
];
// Duplicamos as listas para formar a transição suave e contínua do Marquee
const TRACK_1 = [...T1, ...T1, ...T1];
const TRACK_2 = [...T1, ...T1, ...T1].reverse();

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-40 overflow-hidden">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16 text-center">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">
          Depoimentos
        </span>
        <BlurText 
          text="Não acredite apenas em nós."
          as="h2"
          className="font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-foreground"
        />
      </div>

      <div className="flex flex-col gap-5 group">
        <div className="flex w-max space-x-5 px-5 animate-marquee group-hover:[animation-play-state:paused]">
          {TRACK_1.map((t, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-7 w-[320px] md:w-[400px] shrink-0 flex flex-col justify-between gap-6">
              <p className="font-body text-base text-foreground/80 leading-relaxed">"{t.body}"</p>
              <div>
                <p className="font-display tracking-tight text-lg uppercase">{t.name}</p>
                <p className="font-body text-xs text-foreground/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-max space-x-5 px-5 animate-marquee-rev group-hover:[animation-play-state:paused]">
          {TRACK_2.map((t, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-7 w-[320px] md:w-[400px] shrink-0 flex flex-col justify-between gap-6">
              <p className="font-body text-base text-foreground/80 leading-relaxed">"{t.body}"</p>
              <div>
                <p className="font-display tracking-tight text-lg uppercase">{t.name}</p>
                <p className="font-body text-xs text-foreground/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
