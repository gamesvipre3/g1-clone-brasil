import { User } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="w-full bg-background border-b">
      <div className="container mx-auto h-10 px-4 flex items-center justify-between text-sm">
        <nav className="flex items-center gap-4 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">globo.com</a>
          <a href="#" className="text-primary font-semibold">g1</a>
          <a href="#" className="hover:text-foreground transition-colors">ge</a>
          <a href="#" className="hover:text-foreground transition-colors">gshow</a>
          <a href="#" className="hover:text-foreground transition-colors">globoplay</a>
          <a href="#" className="hover:text-foreground transition-colors">g1 jogos</a>
          <a href="#" className="hover:text-foreground transition-colors">o globo</a>
          <a href="#" className="hover:text-foreground transition-colors">valor</a>
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
