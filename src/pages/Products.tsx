import { useEffect, useMemo } from "react";
import { Layout, QuoteForm } from "../components";
import { SITE, categories, products, waLink } from "../data";
import { Link, useRouter } from "../router";
import { setSEO } from "../seo";

function catFromPath(path: string) {
  const q = path.split("?")[1] || "";
  return new URLSearchParams(q).get("cat") || "all";
}

export function Products() {
  const { path, navigate } = useRouter();
  const cat = catFromPath(path);

  const list = useMemo(
    () => (cat === "all" ? products : products.filter((p) => p.category === cat)),
    [cat]
  );

  useEffect(() => {
    const c = categories.find((x) => x.id === cat);
    setSEO({
      title: c
        ? `${c.name} | Hospital Equipment | Nexora Healthcare`
        : "Hospital Equipment Catalogue | X-Ray, Ultrasound, C-Arm, ICU | Nexora",
      description: c
        ? `${c.seo}. Request a WhatsApp quote from Nexora Healthcare at +91 93155 15700.`
        : "Browse digital X-ray, ultrasound, C-arm, CT, MRI, patient monitors, OT tables, ICU ventilators and hospital furniture. Installed pan-India.",
      path: cat === "all" ? "/products" : `/products?cat=${cat}`,
    });
  }, [cat]);

  return (
    <Layout>
      <section className="border-b border-line bg-mist/60">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-copper">Equipment</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">The catalogue, without 40 PDFs.</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Every SKU below is something we have installed in an Indian hospital or diagnostic centre. Specs are
            typical configurations — we size generators, probes and shielding to your room.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className={`rounded-full px-4 py-2 text-sm font-medium ${cat === "all" ? "bg-teal-deep text-paper" : "border border-line bg-white"}`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => navigate(`/products?cat=${c.id}`)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${cat === c.id ? "bg-teal-deep text-paper" : "border border-line bg-white"}`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.slug} className="card-lift overflow-hidden rounded-3xl border border-line bg-white">
              <Link to={`/products/${p.slug}`} className="img-zoom block">
                <div className="aspect-[16/10] overflow-hidden bg-sand">
                  <img src={p.image} alt={`${p.name} ${p.model} hospital equipment`} className="h-full w-full object-cover" />
                </div>
              </Link>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
                  {p.model} · {p.tag}
                </p>
                <h2 className="mt-1 font-display text-xl font-bold">
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </h2>
                <p className="mt-2 text-sm text-ink-soft line-clamp-3">{p.short}</p>
                <div className="mt-4 flex items-center justify-between">
                  <Link to={`/products/${p.slug}`} className="text-sm font-semibold text-teal">
                    Specs & uses →
                  </Link>
                  <a
                    href={waLink(`I want a quote for ${p.name} (${p.model}).`)}
                    className="text-sm font-semibold text-copper"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        {list.length === 0 && (
          <p className="py-20 text-center text-ink-soft">This category is quoted as a custom package. WhatsApp the room details.</p>
        )}
      </section>
    </Layout>
  );
}

export function ProductDetail({ slug }: { slug: string }) {
  const p = products.find((x) => x.slug === slug);

  useEffect(() => {
    if (!p) return;
    setSEO({
      title: `${p.name} (${p.model}) | ${categories.find((c) => c.id === p.category)?.name} | Nexora Healthcare`,
      description: p.short,
      path: `/products/${p.slug}`,
      image: p.image,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${p.name} ${p.model}`,
        description: p.short,
        image: p.image.startsWith("http") ? p.image : `${SITE}${p.image}`,
        brand: { "@type": "Brand", name: "Nexora Healthcare" },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR", url: `${SITE}/#/products/${p.slug}` },
      },
    });
  }, [p]);

  if (!p) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-bold">Equipment not found</h1>
          <Link to="/products" className="mt-4 inline-block text-teal">
            Back to catalogue
          </Link>
        </div>
      </Layout>
    );
  }

  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  return (
    <Layout>
      <article className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-copper">
            <Link to="/products">Equipment</Link> / {categories.find((c) => c.id === p.category)?.name}
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">{p.name}</h1>
          <p className="mt-2 text-teal font-semibold">{p.model}</p>
          <div className="mt-6 overflow-hidden rounded-[1.8rem]">
            <img src={p.image} alt={`${p.name} ${p.model}`} className="w-full object-cover" />
          </div>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">{p.body}</p>
          <h2 className="mt-10 font-display text-2xl font-bold">Typical specification</h2>
          <dl className="mt-4 divide-y divide-line rounded-2xl border border-line bg-white">
            {p.specs.map((s) => (
              <div key={s.k} className="grid grid-cols-2 px-5 py-3 text-sm">
                <dt className="text-ink-soft">{s.k}</dt>
                <dd className="font-medium">{s.v}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-10 font-display text-2xl font-bold">Where it is used</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.uses.map((u) => (
              <li key={u} className="rounded-full bg-mist px-3 py-1 text-sm">
                {u}
              </li>
            ))}
          </ul>
        </div>
        <aside className="lg:col-span-5">
          <div className="sticky top-28 rounded-3xl border border-line bg-white p-6">
            <h2 className="font-display text-2xl font-bold">Get a site-specific quote</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Price depends on generator kW, probes, lead work and city. Send the room — we reply with a PI, not a
              range so wide it is useless.
            </p>
            <div className="mt-5">
              <QuoteForm context={p.model} />
            </div>
          </div>
        </aside>
      </article>
      {related.length > 0 && (
        <section className="border-t border-line bg-mist/50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="font-display text-2xl font-bold">Related equipment</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/products/${r.slug}`} className="overflow-hidden rounded-2xl bg-white">
                  <img src={r.image} alt={r.name} className="h-40 w-full object-cover" />
                  <p className="p-4 font-semibold">{r.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
