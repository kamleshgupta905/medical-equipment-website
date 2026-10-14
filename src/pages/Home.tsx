import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  Headphones,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { Layout } from "../components";
import {
  SITE,
  articles,
  categories,
  cities,
  defaultWa,
  processSteps,
  products,
  stats,
  testimonials,
  waLink,
} from "../data";
import { Link } from "../router";
import { setSEO } from "../seo";

function useCount(end: number, start: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, start]);
  return n;
}

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCount(value, start);
  return (
    <div>
      <p className="font-display text-4xl font-extrabold text-paper md:text-5xl">
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-sand/70">{label}</p>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setOn(true), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((s) => (
        <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} start={on} />
      ))}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    setSEO({
      title: "X-Ray Machine Installation & Hospital Equipment Supplier India | Nexora Healthcare",
      description:
        "Install digital X-ray, ultrasound, C-arm, CT, MRI, ICU monitors and hospital furniture across India. AERB-compliant turnkey radiology. WhatsApp +91 93155 15700.",
      path: "/",
      image: "/images/xray-digital-dr.jpg",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Hospital diagnostic equipment",
        itemListElement: products.slice(0, 8).map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE}/#/products/${p.slug}`,
          name: p.name,
        })),
      },
    });
  }, []);

  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-teal-deep grain">
        <div className="absolute inset-0">
          <img
            src="/images/xray-digital-dr.jpg"
            alt="Digital radiography X-ray room installed by Nexora Healthcare"
            className="ken h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/80 to-teal-deep/30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-6 pb-16 pt-16 md:grid-cols-12 md:pb-24 md:pt-24">
          <div className="md:col-span-8">
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand">
              <span className="h-1.5 w-1.5 rounded-full bg-copper" /> India · AERB layouts · 24×7 service
            </p>
            <h1 className="reveal reveal-d1 mt-6 font-display text-[2.35rem] font-extrabold leading-[1.05] text-paper sm:text-5xl md:text-7xl">
              X-ray se ICU tak.
              <span className="mt-2 block text-sand/90">Ek team, poori zimmedari.</span>
            </h1>
            <p className="reveal reveal-d2 mt-6 max-w-xl text-base leading-relaxed text-sand/85 md:text-lg">
              Digital X-ray installation, ultrasound, C-arm, CT/MRI, patient monitors, OT and hospital furniture —
              specified for Indian diagnostic centres and nursing homes, commissioned on site, serviced on AMC.
            </p>
            <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-3">
              <a
                href={defaultWa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-semibold text-white hover:bg-copper-deep"
              >
                WhatsApp +91 93155 15700 <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-paper hover:bg-white/10"
              >
                Browse equipment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="reveal reveal-d4 md:col-span-4">
            <div className="rounded-3xl border border-white/15 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-copper">Most requested</p>
              <ul className="mt-4 space-y-3">
                {[
                  ["Digital X-ray DR room", "/products/digital-radiography-dr-500"],
                  ["Color Doppler ultrasound", "/products/color-doppler-ultrasound"],
                  ["9\" HF C-arm", "/products/digital-c-arm"],
                  ["6-bed ICU package", "/products/multipara-patient-monitor"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="group flex items-center justify-between text-sm text-paper">
                      {label}
                      <ArrowRight className="h-4 w-4 opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <Stats />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-copper">Catalogue</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-5xl">Hospital ke har corner ka machine.</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-teal link-underline">
            All equipment →
          </Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/products?cat=${c.id}`}
              className="card-lift rounded-2xl border border-line bg-white p-5"
            >
              <p className="font-display text-lg font-bold">{c.name}</p>
              <p className="mt-1 text-sm text-ink-soft">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-copper">Who we equip</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Diagnostic centre se 200-bed hospital tak.</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Diagnostic centres", "DR rooms, CR retrofit, ultrasound, portable X-ray, AERB file."],
              ["Ortho & trauma", "C-arm, OT table, mobile X-ray, crash cart, C-arm compatible furniture."],
              ["ICU / HDU", "Monitors, ventilators, pumps, electric beds, defibrillator network."],
              ["Women’s hospitals", "Mammography, TVS ultrasound, fetal Doppler, labour OT lights."],
              ["Nursing homes", "50-bed starter kits: X-ray, ECG, autoclave, ward furniture."],
              ["PHC & camps", "Battery portable X-ray, handheld ultrasound, 12-channel ECG."],
              ["Veterinary", "Portable X-ray and ultrasound with animal APR charts."],
              ["New hospitals", "Turnkey radiology + OT + ICU from DPR to first case."],
            ].map(([t, d]) => (
              <div key={t} className="bg-white p-6">
                <h3 className="font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-copper">In stock & project</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Machines we actually install this quarter.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="card-lift img-zoom group overflow-hidden rounded-3xl border border-line bg-white">
                <div className="aspect-[16/10] overflow-hidden bg-sand">
                  <img src={p.image} alt={`${p.name} ${p.model}`} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">{p.tag}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.model} · {p.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="img-zoom overflow-hidden rounded-[2rem]">
          <img
            src="/images/installation-team.jpg"
            alt="Nexora biomedical engineers installing a digital X-ray machine"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-copper">Why hospitals stay</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">We sell an installed, licensed room — not a crate.</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Traders disappear after the truck leaves. Nexora stays for collimation, AERB drawings, radiographer training
            and the first AMC visit. That is why 60% of new orders come from a hospital we already serve.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              [ShieldCheck, "AERB layout, shielding note and inspection walk-through"],
              [Wrench, "In-house biomedical engineers, not a call-centre ticket"],
              [ClipboardCheck, "NABH-friendly installation & QA file"],
              [Headphones, "Hindi + English training for the people who actually run the machine"],
            ].map(([Icon, t]) => (
              <li key={t as string} className="flex gap-3 text-sm">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span>{t as string}</span>
              </li>
            ))}
          </ul>
          <Link to="/installation" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal">
            See the installation process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-teal-deep text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-copper">Five steps</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">From WhatsApp photo to first exposure.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {processSteps.map((s) => (
              <div key={s.n} className="border-t border-white/15 pt-5">
                <p className="font-display text-3xl text-copper">{s.n}</p>
                <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/75">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-10">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
          Engineers travel these cities every month
        </p>
        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-10 pr-10 text-2xl font-display font-bold text-ink/15">
            {[...cities, ...cities].map((c, i) => (
              <span key={i} className="whitespace-nowrap">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">Doctors, not marketing quotes.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-3xl border border-line bg-white p-7">
              <p className="text-[17px] leading-relaxed text-ink">“{t.quote}”</p>
              <footer className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-ink-soft">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-mist/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-extrabold">Guides that rank because they are useful.</h2>
            <Link to="/insights" className="hidden text-sm font-semibold text-teal sm:block">
              All insights →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="card-lift img-zoom overflow-hidden rounded-3xl bg-white">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={a.cover} alt={a.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink-soft">
                    {a.date} · {a.read}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src="/images/ct-scanner.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-paper md:text-5xl">Room photo bhejiye.<br />Kal tak short-list mil jayegi.</h2>
            <p className="mt-3 max-w-lg text-sand/80">
              No form-filling theatre. WhatsApp a video of the room, the speciality and the budget band.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink("Namaste, room photo bhej raha/rahi hoon. Quotation chahiye.")}
              className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 font-semibold text-white"
            >
              Open WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold text-paper">
              Formal enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-14 sm:grid-cols-3">
        {[
          [BadgeCheck, "Type-approved models only"],
          [Truck, "Pan-India delivery & rigging"],
          [Wrench, "AMC that includes a real visit"],
        ].map(([Icon, label]) => (
          <div key={label as string} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4">
            <Icon className="h-5 w-5 text-teal" />
            <span className="text-sm font-medium">{label as string}</span>
          </div>
        ))}
      </section>
    </Layout>
  );
}
