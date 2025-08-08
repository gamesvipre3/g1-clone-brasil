import { Menu, Search, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="w-full border-b bg-primary text-primary-foreground sticky top-0 z-30 shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Menu" className="p-2 rounded-md hover:bg-white/10 transition-colors"><Menu className="h-5 w-5" /></button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0 border-r">
                <nav className="px-6 py-6">
                  <ul className="space-y-1">
                    {[
                      { label: "editorias" },
                      { label: "jogos", badge: "NOVO" },
                      { label: "guia de compras" },
                      { label: "carros" },
                      { label: "regiões" },
                      { label: "telejornais" },
                      { label: "globonews" },
                      { label: "blogs e colunas" },
                      { label: "podcasts" },
                      { label: "serviços" },
                      { label: "vídeos" },
                      { label: "webstories" },
                      { label: "especial publicitário" },
                      { label: "princípios editoriais" },
                      { label: "sobre o g1" },
                    ].map((item) => (
                      <li key={item.label}>
                        <a href="#" className="flex items-center justify-between py-3 text-lg">
                          <span className="text-foreground/90">{item.label}</span>
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-success/15 text-success font-semibold">{item.badge}</span>
                            )}
                            <ChevronRight className="h-5 w-5 text-primary" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
            <a href="/" className="font-extrabold text-xl leading-none">g1</a>
          </div>
          <div className="text-sm md:text-base uppercase tracking-widest font-semibold font-globo-condensed">ECONOMIA</div>
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <input
                aria-label="Buscar"
                placeholder="Buscar"
                className="h-9 w-44 md:w-56 rounded-md bg-white/15 text-primary-foreground placeholder:text-primary-foreground/80 pl-9 pr-3 text-sm outline-none focus:ring-2 ring-ring/40"
              />
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
