import { useEffect } from "react";
import { Layout } from "../components";
import { SITE, articles } from "../data";
import { Link } from "../router";
import { setSEO } from "../seo";

export function Insights() {
  useEffect(() => {
    setSEO({
      title: "Radiology & Hospital Equipment Insights | Nexora Healthcare",
      description:
        "Practical guides on buying X-ray machines, AERB compliance, DR vs CR, C-arm selection and 50-bed hospital equipment lists for Indian healthcare.",
      path: "/insights",
    });
  }, []);

  return (
    <Layout>
      <section className="border-b border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-copper">Insights</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">Written for the person who signs the PO.</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            No keyword stuffing dressed as a blog. These are the same notes our engineers send on WhatsApp, expanded.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((a) => (
            <Link key={a.slug} to={`/insights/${a.slug}`} className="card-lift img-zoom overflow-hidden rounded-3xl border border-line bg-white">
              <div className="aspect-[16/8] overflow-hidden">
                <img src={a.cover} alt={a.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs text-ink-soft">
                  {a.date} · {a.read} · {a.tags.join(" · ")}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold leading-snug">{a.title}</h2>
                <p className="mt-2 text-sm text-ink-soft">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export function Article({ slug }: { slug: string }) {
  const a = articles.find((x) => x.slug === slug);

  useEffect(() => {
    if (!a) return;
    setSEO({
      title: `${a.title} | Nexora Healthcare`,
      description: a.excerpt,
      path: `/insights/${a.slug}`,
      image: a.cover,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: a.title,
        datePublished: a.date,
        author: { "@type": "Organization", name: "Nexora Healthcare" },
        publisher: { "@type": "Organization", name: "Nexora Healthcare" },
        description: a.excerpt,
        mainEntityOfPage: `${SITE}/#/insights/${a.slug}`,
      },
    });
  }, [a]);

  if (!a) {
    return (
      <Layout>
        <div className="px-6 py-24 text-center">
          <Link to="/insights">Back to insights</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
          <Link to="/insights">Insights</Link> · {a.date} · {a.read}
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">{a.title}</h1>
        <p className="mt-4 text-lg text-ink-soft">{a.excerpt}</p>
        <img src={a.cover} alt={a.title} className="mt-8 w-full rounded-3xl object-cover" />
        <div
          className="article-body mt-10 space-y-4 text-[17px] leading-relaxed text-ink [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_li]:text-[16px]"
          dangerouslySetInnerHTML={{ __html: a.html }}
        />
        <div className="mt-12 rounded-3xl bg-teal-deep p-8 text-paper">
          <p className="font-display text-2xl font-bold">Need this applied to your room?</p>
          <p className="mt-2 text-sm text-sand/80">Send a photo and patient load. We will answer in the same tone as this article — specific.</p>
          <Link to="/contact" className="mt-5 inline-flex rounded-full bg-copper px-5 py-2.5 text-sm font-semibold">
            Contact / WhatsApp
          </Link>
        </div>
      </article>
    </Layout>
  );
}
