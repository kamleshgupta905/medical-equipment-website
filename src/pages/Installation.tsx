import { useEffect } from "react";
import { Layout } from "../components";
import { defaultWa, processSteps } from "../data";
import { setSEO } from "../seo";

export default function Installation() {
  useEffect(() => {
    setSEO({
      title: "X-Ray & Radiology Equipment Installation Process India | Nexora Healthcare",
      description:
        "See how Nexora installs digital X-ray, C-arm, CT and ultrasound: site survey, AERB layout, lead lining, calibration, radiation survey and operator training.",
      path: "/installation",
      image: "/images/installation-team.jpg",
    });
  }, []);

  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <img src="/images/installation-team.jpg" alt="X-ray machine installation in progress" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">Installation</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">
            The week between delivery and the first patient.
          </h1>
          <p className="mt-5 max-w-xl text-sand/85">
            A machine that is not collimated, not in DICOM, not in the AERB file, is not installed. This is the sequence
            we run on every fixed X-ray and imaging project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ol className="space-y-8">
          {processSteps.map((s) => (
            <li key={s.n} className="grid gap-6 border-b border-line pb-8 md:grid-cols-12">
              <p className="font-display text-5xl text-copper md:col-span-2">{s.n}</p>
              <div className="md:col-span-10">
                <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                <p className="mt-2 max-w-2xl text-ink-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-mist/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold">What you must prepare</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed">
              <li className="rounded-2xl bg-white p-4">Dedicated earthing pit and a stabilizer sized to the generator — not a shared UPS with the lift.</li>
              <li className="rounded-2xl bg-white p-4">Door width and corridor clear for the largest crate (C-arm and CT fail here more than on kW).</li>
              <li className="rounded-2xl bg-white p-4">Lead / barium plaster as per the drawing we issue — not “contractor ke hisaab se 2mm everywhere”.</li>
              <li className="rounded-2xl bg-white p-4">RSO nomination and a person who will sit through training, not just sign the attendance sheet.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold">Typical durations</h2>
            <dl className="mt-6 divide-y divide-line rounded-3xl bg-white">
              {[
                ["Portable / mobile X-ray", "Same day – 1 day"],
                ["Fixed HF + CR", "2–4 days after civil"],
                ["Digital radiography room", "4–7 days after civil"],
                ["C-arm in an existing OT", "1–2 days"],
                ["Ultrasound + probes", "Half day + applications"],
                ["CT turnkey", "3–6 weeks including civil"],
                ["MRI turnkey", "Project plan, not a week"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-6 py-4 text-sm">
                  <dt>{k}</dt>
                  <dd className="font-semibold text-teal">{v}</dd>
                </div>
              ))}
            </dl>
            <a href={defaultWa} className="mt-8 inline-flex rounded-full bg-teal-deep px-6 py-3 text-sm font-semibold text-paper">
              Share a floor plan on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
