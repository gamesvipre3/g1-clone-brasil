import { Menu, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full border-b bg-card/70 backdrop-blur-sm sticky top-0 z-30 shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button aria-label="Menu" className="p-2 rounded-md hover:bg-accent transition-colors"><Menu className="h-5 w-5" /></button>
            <a href="/" className="font-extrabold text-xl leading-none text-primary">g1</a>
          </div>
          <div className="text-sm uppercase tracking-widest font-semibold text-foreground/80">ECONOMIA</div>
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <input
                aria-label="Buscar"
                placeholder="Buscar"
                className="h-9 w-44 md:w-56 rounded-md bg-muted/60 pl-9 pr-3 text-sm outline-none focus:ring-2 ring-ring/40"
              />
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-primary/40" />
    </header>
  );
};

export default Header;
