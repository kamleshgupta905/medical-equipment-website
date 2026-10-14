import { useEffect, useState } from "react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { Layout, QuoteForm } from "../components";
import { EMAIL, PHONE_DISPLAY, defaultWa, faqs } from "../data";
import { setSEO } from "../seo";

export function Contact() {
  useEffect(() => {
    setSEO({
      title: "Contact Nexora Healthcare | WhatsApp +91 93155 15700 | X-Ray Quote",
      description:
        "Get a WhatsApp quote for X-ray installation, ultrasound, C-arm, CT, MRI and hospital equipment. Call +91 93155 15700. Okhla, New Delhi.",
      path: "/contact",
    });
  }, []);

  return (
    <Layout>
      <section className="bg-teal-deep text-paper">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold md:text-6xl">WhatsApp is the front desk.</h1>
          <p className="mt-4 max-w-xl text-sand/80">
            Send a room video. If you prefer a PDF quotation with GST, the form on this page opens the same chat with
            your details filled in.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold">Project enquiry</h2>
          <p className="mt-2 text-sm text-ink-soft">All submissions open WhatsApp at {PHONE_DISPLAY}. Nothing is stored on a server.</p>
          <div className="mt-6 rounded-3xl border border-line bg-white p-6">
            <QuoteForm context="Website contact" />
          </div>
        </div>
        <div className="space-y-5">
          <a href={defaultWa} className="block rounded-3xl bg-[#25D366] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em]">WhatsApp</p>
            <p className="mt-1 font-display text-3xl font-bold">{PHONE_DISPLAY}</p>
            <p className="mt-2 text-sm text-white/85">Typically replies within working hours. Night ICU breakdowns: call.</p>
          </a>
          <div className="rounded-3xl border border-line bg-white p-6 space-y-4 text-sm">
            <p className="flex gap-3">
              <Phone className="h-4 w-4 text-teal" />
              <a href="tel:+919315515700">{PHONE_DISPLAY}</a>
            </p>
            <p className="flex gap-3">
              <Mail className="h-4 w-4 text-teal" />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p className="flex gap-3">
              <MapPin className="h-4 w-4 text-teal" />
              Nexora Healthcare Pvt. Ltd.<br />
              Okhla Industrial Area, Phase II<br />
              New Delhi 110020, India
            </p>
            <p className="text-ink-soft">Mon–Sat 9:30–19:00 IST · Service roster 24×7 for AMC sites</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Nexora Healthcare New Delhi"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Okhla%20Industrial%20Area%20Phase%20II%20New%20Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    setSEO({
      title: "AERB, Warranty & Buying FAQ | Nexora Healthcare",
      description:
        "Answers on AERB approval, X-ray installation time, refurbished CT/MRI, AMC and pan-India service from Nexora Healthcare.",
      path: "/faq",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    });
  }, []);

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-copper">FAQ</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold">Questions purchase committees actually ask.</h1>
        <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-white">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-teal transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
