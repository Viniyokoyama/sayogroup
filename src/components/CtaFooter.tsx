import { BlurText } from "@/components/BlurText";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";

export function CtaFooter() {
  return (
    <footer id="contato" className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pb-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        className="absolute inset-0 w-full h-full object-cover saturate-0 opacity-30 mix-blend-luminosity pointer-events-none"
      />
      
      {/* Fades & Vignettes */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(120%_80%_at_50%_50%,transparent_20%,hsl(var(--background))_100%)]" />
      <div className="absolute top-0 inset-x-0 h-[30vh] z-[2] gradient-fade-t" />

      {/* Main CTA block */}
      <div className="text-center max-w-3xl mx-auto px-6 relative z-10 mb-20 flex flex-col items-center">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">
          Próximo passo
        </span>
        <BlurText 
          text="O sucesso não espera."
          as="h2"
          className="font-display uppercase text-5xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-tight text-foreground mb-10"
        />
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#contato" className={buttonVariants({ variant: "hero" })}>
            Falar com Especialista <ArrowUpRight className="ml-1 size-4" />
          </a>
          <Button variant="heroGlass">
            <Play className="mr-1.5 size-4 fill-current" /> Ver o filme
          </Button>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="border-t border-border/20 pt-8 mt-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50 w-full max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
        <p className="font-body">&copy; {new Date().getFullYear()} Sayo Group. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6 font-body">
          <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}
