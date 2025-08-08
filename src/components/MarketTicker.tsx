interface ItemProps {
  label: string;
  value: string;
  change: string;
}

const Item = ({ label, value, change }: ItemProps) => (
  <li className="flex items-center gap-2 pr-6 shrink-0">
    <span className="font-semibold">{label}</span>
    <span className="text-muted-foreground">{value}</span>
    <span className={change.startsWith("-") ? "text-destructive" : "text-[hsl(var(--success))]"}>{change}</span>
  </li>
);

export const MarketTicker = () => {
  return (
    <aside aria-label="Cotações" className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto overflow-hidden">
        <ul className="flex items-center h-12 px-4 text-sm whitespace-nowrap animate-marquee">
          <Item label="Dólar Comercial" value="R$ 5,423" change="-0,74%" />
          <Item label="Dólar Turismo" value="R$ 5,646" change="-0,48%" />
          <Item label="Euro Comercial" value="R$ 6,320" change="-0,74%" />
          <Item label="Euro Turismo" value="R$ 6,586" change="-0,68%" />
          <li className="mx-4 h-6 w-px bg-border" />
          <Item label="Ibovespa" value="136.805 pts" change="+1,69%" />
          {/* duplicated for seamless scroll */}
          <Item label="Dólar Comercial" value="R$ 5,423" change="-0,74%" />
          <Item label="Dólar Turismo" value="R$ 5,646" change="-0,48%" />
          <Item label="Euro Comercial" value="R$ 6,320" change="-0,74%" />
          <Item label="Euro Turismo" value="R$ 6,586" change="-0,68%" />
          <li className="mx-4 h-6 w-px bg-border" />
          <Item label="Ibovespa" value="136.805 pts" change="+1,69%" />
        </ul>
      </div>
    </aside>
  );
};

export default MarketTicker;
