import { BlurText } from "@/components/BlurText";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function CtaFooter() {
  return (
    <footer id="contato" className="relative overflow-hidden">
      {/* Large CTA Section */}
      <div className="relative py-40 md:py-56">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-primary/8 blur-[200px]" />
        </div>

        <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10 text-center flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-body mb-8 block">
            Próximo passo
          </span>

          <BlurText 
            text="O sucesso não espera."
            as="h2"
            className="font-display uppercase text-5xl md:text-7xl lg:text-[100px] leading-[0.85] tracking-[-0.02em] text-foreground mb-6"
          />

          <p className="font-body text-foreground/35 text-base md:text-lg max-w-md leading-relaxed mb-12">
            Uma conversa. Um plano. Uma transformação completa para o seu negócio.
          </p>
          
          <a href="#contato" className={buttonVariants({ variant: "hero" })}>
            Falar com Especialista <ArrowUpRight className="ml-1.5 size-4" />
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-white/[0.06] py-8">
        <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-5 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-[9px]">SG</span>
            </div>
            <span className="font-body text-xs text-foreground/30">
              &copy; {new Date().getFullYear()} Sayo Group. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex items-center gap-8 font-body text-xs text-foreground/30">
            <a href="#" className="hover:text-foreground/60 transition-colors duration-300">Termos de Uso</a>
            <a href="#" className="hover:text-foreground/60 transition-colors duration-300">Privacidade</a>
            <a href="#" className="hover:text-foreground/60 transition-colors duration-300">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
