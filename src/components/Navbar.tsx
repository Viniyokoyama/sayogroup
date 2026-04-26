import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Serviços", href: "#services" },
  { label: "Por que nós", href: "#why-us" },
  { label: "Processo", href: "#process" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(i => i.href.substring(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100vw-32px))] transition-all duration-300"
        initial={{ top: 16 }}
        animate={{ top: scrolled ? 8 : 16 }}
        data-scrolled={scrolled}
      >
        <div className={`liquid-glass rounded-full px-2 py-2 flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "backdrop-blur-xl" : ""}`}>
          
          <div className="flex items-center gap-2 pl-3">
            {/* Fallback svg logo using lucide instead of img tag since we don't have the logo.svg file yet */}
            <div className="size-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">SG</span>
            </div>
            <span className="font-display text-lg tracking-tight">Sayo Group</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm transition-colors font-body relative flex flex-col items-center ${isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="h-1 w-1 rounded-full bg-primary absolute -bottom-1" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="heroSolid" size="sm" className="hidden md:inline-flex rounded-full px-4 py-1.5 text-sm">
              Falar com Especialista <ArrowUpRight className="ml-1 size-4" />
            </Button>
            
            <button 
              className="md:hidden p-2 text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] liquid-glass-strong flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xs">SG</span>
                </div>
                <span className="font-display text-lg tracking-tight">Sayo Group</span>
              </div>
              <button 
                className="p-2 text-foreground/80 hover:text-foreground bg-white/5 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 items-center justify-center flex-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-display uppercase tracking-tight text-foreground/90 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="heroSolid" size="lg" className="mt-8 rounded-full">
                Falar com Especialista <ArrowUpRight className="ml-1 size-5" />
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
