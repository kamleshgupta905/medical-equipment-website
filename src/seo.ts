import { SITE } from "./data";

export function setSEO(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonld?: object;
}) {
  document.title = opts.title;
  const set = (name: string, content: string, attr: "name" | "property" = "name") => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.content = content;
  };
  set("description", opts.description);
  set("og:title", opts.title, "property");
  set("og:description", opts.description, "property");
  set("og:url", `${SITE}/#${opts.path}`, "property");
  if (opts.image) set("og:image", opts.image.startsWith("http") ? opts.image : `${SITE}${opts.image}`, "property");
  set("twitter:title", opts.title);
  set("twitter:description", opts.description);

  let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `${SITE}/#${opts.path}`;

  const id = "page-jsonld";
  let script = document.getElementById(id);
  if (opts.jsonld) {
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      (script as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(opts.jsonld);
  } else if (script) {
    script.remove();
  }
}
