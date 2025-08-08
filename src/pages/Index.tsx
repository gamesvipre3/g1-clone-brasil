import Header from "@/components/Header";
import MarketTicker from "@/components/MarketTicker";
import Seo from "@/components/Seo";
import TopBar from "@/components/TopBar";
import AdBanner from "@/components/AdBanner";
import heroImage from "@/assets/article-hero.jpg";
import { Facebook, Link as LinkIcon, Share2, MessageCircle } from "lucide-react";

const Index = () => {
  const title = "Lista de 'bets' autorizadas até 2029 — Clone g1";
  const description =
    "Lista atualizada de casas de apostas autorizadas no Brasil até 2029. Entenda a decisão e veja os detalhes.";

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    datePublished: '2025-02-11T07:59:00-03:00',
    dateModified: '2025-02-11T09:59:00-03:00',
    author: { '@type': 'Person', name: 'Redação' },
    image: [heroImage],
    publisher: {
      '@type': 'Organization',
      name: 'g1 clone',
      logo: {
        '@type': 'ImageObject',
        url: window.location.origin + '/favicon.ico',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      <Seo
        title={title}
        description={description}
        canonical={window.location.href}
        image={heroImage}
        jsonLd={jsonLd}
      />

      <TopBar />
      <Header />
      <MarketTicker />
      <AdBanner />

      <main className="container mx-auto px-4">
        <article className="mx-auto max-w-3xl py-8">
          <header className="mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Governo publica nova lista de 'bets' autorizadas a atuar no Brasil até 2029
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Secretaria de Prêmios e Apostas do Ministério da Fazenda publicou portarias que permitem
              funcionamento de 37 sites de apostas em caráter definitivo.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Por <span className="font-medium text-foreground">Redação g1</span> — 11/02/2025 07h59 · Atualizado há 3 meses
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <a
                className="flex items-center justify-center gap-2 h-12 rounded-full bg-secondary hover:bg-accent transition-[background-color] duration-200"
                href="#"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a
                className="flex items-center justify-center gap-2 h-12 rounded-full bg-secondary hover:bg-accent transition-[background-color] duration-200"
                href="#"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                className="flex items-center justify-center gap-2 h-12 rounded-full bg-secondary hover:bg-accent transition-[background-color] duration-200"
                href="#"
                aria-label="Compartilhar"
              >
                <Share2 className="h-4 w-4" /> Compartilhar
              </a>
            </div>
          </header>

          <figure className="my-8 overflow-hidden rounded-lg shadow-[var(--shadow-glow)]">
            <img
              src={heroImage}
              alt="Celular exibindo interface genérica de apostas, representando casas de apostas autorizadas"
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              Imagem ilustrativa — interface de apostas em dispositivo móvel
            </figcaption>
          </figure>

          <section className="prose prose-neutral max-w-none dark:prose-invert">
            <p>
              A Secretaria de Prêmios e Apostas do Ministério da Fazenda publicou novas portarias no Diário Oficial
              da União que autorizam, em caráter definitivo, o funcionamento de plataformas de apostas esportivas no Brasil
              até 31 de dezembro de 2029.
            </p>
            <p>
              Cada empresa passou pelo processo de outorga e regulação previsto na legislação, incluindo o pagamento de
              R$ 30 milhões e a comprovação de requisitos técnicos e de integridade. A maior parte das casas já possuía
              autorização temporária e agora migra para a operação plena.
            </p>
            <h2>O que muda na prática</h2>
            <ul>
              <li>Operação regular válida por cinco anos, com término em 31/12/2029;</li>
              <li>Exigência de políticas de jogo responsável e verificação de idade;</li>
              <li>Regras de publicidade e patrocínios mais rígidas;</li>
              <li>Fiscalização contínua da Secretaria de Prêmios e Apostas.</li>
            </ul>
            <p>
              A lista completa contém 37 sites autorizados. Esta página é um clone visual para fins educacionais, sem
              vínculo com a marca original.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Index;
