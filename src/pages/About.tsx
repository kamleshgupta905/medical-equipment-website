import { useEffect } from "react";
import { Layout } from "../components";
import { defaultWa } from "../data";
import { setSEO } from "../seo";

export default function About() {
  useEffect(() => {
    setSEO({
      title: "About Nexora Healthcare | X-Ray & Hospital Equipment Company India",
      description:
        "Nexora Healthcare is a Delhi-based medical equipment company installing digital X-ray, ultrasound, C-arm, CT, MRI and ICU systems across 22 Indian states with in-house biomedical engineers.",
      path: "/about",
      image: "/images/installation-team.jpg",
    });
  }, []);

  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-teal-deep text-paper">
        <img
          src="https://images.pexels.com/photos/6129450/pexels-photo-6129450.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hospital clinical team"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/90 to-teal-deep/50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">Since 2014 · New Delhi</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">
            A biomedical company that still answers the phone after installation.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-sand/85">
            Nexora Healthcare Pvt. Ltd. supplies and commissions diagnostic imaging and hospital equipment for Indian
            institutions that cannot afford a two-vendor circus — one for the crate, another for the licence.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold">The work, without the brochure fog</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            We started with 100 mA and 300 mA X-ray rooms in North India because that is where most new diagnostic
            centres actually begin. Ultrasound, C-arm, ICU monitoring and OT fit-outs followed because the same
            promoter who bought an X-ray asked, three months later, for a six-bed HDU.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Today the team covers 22 states. The headquarters is in Okhla, New Delhi. Spares for DR panels, C-arm
            cameras, ECG paper and monitor probes sit in our own store — not on a distributor’s “8–10 weeks” list.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            We will not pretend to manufacture every SKU. We do specify, import or source type-approved systems,
            take responsibility for site, install, train and service. If a refurbished CT is the wrong clinical
            answer, we say so on the first call.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src="/images/installation-team.jpg" alt="Engineers installing imaging equipment" className="h-56 w-full rounded-3xl object-cover md:h-full" />
          <img src="/images/xray-digital-dr.jpg" alt="Completed digital X-ray room" className="mt-8 h-56 w-full rounded-3xl object-cover md:h-full" />
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-3xl font-extrabold">How the company is built</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Applications & sales", d: "Clinically literate, not commission-only. They will walk away from a 80 kW DR in a 12-patient centre." },
              { t: "Field engineering", d: "Sixty-plus biomedical engineers who carry collimators, multimeters and the patience to train night-shift radiographers." },
              { t: "Regulatory desk", d: "AERB drawings, RSO file checklists, NABH QA folders. Paperwork is a department, not an afterthought." },
            ].map((x) => (
              <article key={x.t} className="rounded-3xl bg-white p-7">
                <h3 className="font-display text-xl font-bold">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-teal-deep px-8 py-12 text-paper md:px-14">
          <h2 className="font-display text-3xl font-extrabold">Values we will be measured on</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            <li>
              <p className="font-semibold text-copper">No surprise accessories</p>
              <p className="mt-1 text-sm text-sand/75">If a DR room needs a UPS, lead door and aprons, they are on the first quote.</p>
            </li>
            <li>
              <p className="font-semibold text-copper">Hindi on the shop floor</p>
              <p className="mt-1 text-sm text-sand/75">Training is for the operator present at 7 a.m., not for the purchase manager.</p>
            </li>
            <li>
              <p className="font-semibold text-copper">Refurbished with a report</p>
              <p className="mt-1 text-sm text-sand/75">Tube hours, detector map, helium — written. Or we sell new.</p>
            </li>
            <li>
              <p className="font-semibold text-copper">Service that boards a train</p>
              <p className="mt-1 text-sm text-sand/75">Remote first, then an engineer. Not a ticket that ages in a portal.</p>
            </li>
          </ul>
          <a href={defaultWa} className="mt-10 inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold">
            Talk to the Delhi desk
          </a>
        </div>
      </section>
    </Layout>
  );
}
