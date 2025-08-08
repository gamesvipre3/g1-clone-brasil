import { User } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="w-full bg-background border-b">
      <div className="container mx-auto h-10 px-4 flex items-center justify-between text-sm">
        <nav className="flex items-center gap-4">
          <a href="#" className="transition-colors text-brand-globocom hover:opacity-90">globo.com</a>
          <a href="#" className="transition-colors text-brand-g1 hover:opacity-90">g1</a>
          <a href="#" className="transition-colors text-brand-ge hover:opacity-90">ge</a>
          <a href="#" className="transition-colors text-brand-gshow hover:opacity-90">gshow</a>
          <a href="#" className="transition-colors text-brand-globoplay hover:opacity-90">globoplay</a>
          <a href="#" className="transition-colors text-brand-g1 hover:opacity-90">g1 jogos</a>
          <a href="#" className="transition-colors text-brand-oglobo hover:opacity-90">o globo</a>
          <a href="#" className="transition-colors text-brand-valor hover:opacity-90">valor</a>
        </nav>
        <div className="flex items-center gap-2 text-muted-foreground">
          <User className="h-4 w-4" />
          <a href="#" className="hover:text-foreground transition-colors">Conta Globo</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
