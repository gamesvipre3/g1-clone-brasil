import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, any>;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  image,
  type = "article",
  jsonLd,
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      let el = document.head.querySelector(
        property ? `meta[property='${name}']` : `meta[name='${name}']`
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (property) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    if (image) setMeta("og:image", image, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:image", image || "");

    if (canonical) {
      let link = document.head.querySelector(
        "link[rel='canonical']"
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [title, description, canonical, image, type, jsonLd]);

  return null;
};

export default Seo;
