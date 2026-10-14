import { useEffect } from "react";
import { ArrowUpRight, FileCheck, HeartPulse, ScanLine, Truck, Wrench, Zap } from "lucide-react";
import { Layout } from "../components";
import { defaultWa, services } from "../data";
import { Link } from "../router";
import { setSEO } from "../seo";

const icons = { ScanLine, Bolt: Zap, FileCheck, Wrench, HeartPulse, Truck };

export default function Services() {
  useEffect(() => {
    setSEO({
      title: "Hospital Equipment Services | X-Ray Installation, AERB, AMC | Nexora",
      description:
        "Turnkey radiology, X-ray installation, AERB site planning, AMC/CMC, ICU & OT fit-out and equipment relocation across India. WhatsApp +91 93155 15700.",
      path: "/services",
    });
  }, []);

  return (
    <Layout>
      <section className="bg-teal-deep text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">
            Installation, licensing and uptime — not just supply.
          </h1>
          <p className="mt-5 max-w-2xl text-sand/80">
            Buy a machine from anyone. Buy a working, inspectable, trained department from Nexora.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons] || ScanLine;
            return (
              <article key={s.slug} id={s.slug} className="rounded-3xl border border-line bg-white p-8">
                <Icon className="h-7 w-7 text-teal" />
                <h2 className="mt-4 font-display text-2xl font-bold">{s.title}</h2>
                <p className="mt-2 text-ink-soft">{s.summary}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <a href={defaultWa} className="inline-flex items-center gap-2 rounded-full bg-teal-deep px-6 py-3 font-semibold text-paper">
            Discuss a project <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link to="/installation" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold">
            Installation timeline
          </Link>
        </div>
      </section>
    </Layout>
  );
}
