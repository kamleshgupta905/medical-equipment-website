import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { EMAIL, PHONE_DISPLAY, categories, defaultWa, nav, waLink } from "./data";
import { Link, useRouter } from "./router";

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  const ink = light ? "#F6F3EE" : "#0B3D38";
  const copper = "#C46A3A";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" aria-hidden>
        <rect width="64" height="64" rx="14" fill={light ? "#14665C" : "#0B3D38"} />
        <path
          d="M18 44V20h10.4c6.2 0 10.2 3.4 10.2 8.6 0 3.4-1.8 6-4.7 7.3L40.6 44h-6.2l-6-8.4H24V44H18zm6-13.4h4.2c3.1 0 5-1.5 5-4.1s-1.9-4.1-5-4.1H24v8.2z"
          fill="#F6F3EE"
        />
        <path d="M44 20v24" stroke={copper} strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="44" cy="32" r="3.2" fill={copper} />
      </svg>
      {!compact && (
        <span className="leading-none">
          <span className="font-display block text-[15px] font-extrabold tracking-tight" style={{ color: ink }}>
            NEXORA
          </span>
          <span className={`block text-[10px] tracking-[0.22em] uppercase ${light ? "text-sand/80" : "text-teal"}`}>
            Healthcare
          </span>
        </span>
      )}
    </Link>
  );
}

function WhatsAppGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.25-8.24 8.25zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74 1.76.76 2.2.82 2.99.69.48-.08 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={defaultWa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp +91 93155 15700"
      className="wa-fab fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#1ebe5d]"
    >
      <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
      <WhatsAppGlyph className="relative h-7 w-7" />
    </a>
  );
}

export function Topbar() {
  return (
    <div className="hidden border-b border-teal-deep/20 bg-teal-deep text-[12px] text-sand/90 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <p className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-copper" /> AERB-ready layouts
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-copper" /> Mon–Sat 9:30–19:00 IST
          </span>
        </p>
        <p className="flex items-center gap-5">
          <a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5" /> {EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}

export function Navbar() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [path]);

  return (
    <header className={`sticky top-0 z-40 ${scrolled ? "nav-blur shadow-[0_8px_30px_-18px_rgba(16,34,38,0.45)]" : "bg-paper"}`}>
      <Topbar />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.href === "/products" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-[13.5px] font-medium ${
                    path.startsWith("/products") ? "text-teal" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label} <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {mega && (
                  <div className="absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-line bg-white p-4 shadow-xl shadow-teal-deep/10">
                      <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                        Equipment categories
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {categories.map((c) => (
                          <Link
                            key={c.id}
                            to={`/products?cat=${c.id}`}
                            className="rounded-xl px-3 py-2.5 hover:bg-mist"
                          >
                            <span className="block text-sm font-semibold text-ink">{c.name}</span>
                            <span className="text-xs text-ink-soft">{c.blurb}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-full px-3 py-2 text-[13.5px] font-medium ${
                  path === item.href ? "text-teal" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={defaultWa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-teal-deep px-4 py-2.5 text-[13px] font-semibold text-paper sm:inline-flex hover:bg-teal"
          >
            WhatsApp quote <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-teal-deep text-paper lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <Logo light />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-full p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3.5 font-display text-2xl"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={defaultWa}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 font-semibold"
            >
              <WhatsAppGlyph /> Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand/70">
            X-ray installation, ultrasound, C-arm, CT/MRI, ICU and hospital furniture — specified, installed and serviced
            for Indian hospitals and diagnostic centres.
          </p>
          <a
            href={defaultWa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-sand"
          >
            <WhatsAppGlyph className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">Equipment</p>
          <ul className="mt-4 space-y-2 text-sm text-sand/75">
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}>
                <Link to={`/products?cat=${c.id}`} className="hover:text-paper">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-sand/75">
            <li>
              <Link to="/about" className="hover:text-paper">
                About Nexora
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-paper">
                Services
              </Link>
            </li>
            <li>
              <Link to="/installation" className="hover:text-paper">
                Installation process
              </Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-paper">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-paper">
                AERB & FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-paper">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">Visit / write</p>
          <ul className="mt-4 space-y-3 text-sm text-sand/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-copper" />
              Okhla Industrial Area, Phase II, New Delhi 110020
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-copper" />
              <a href="tel:+919315515700">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-copper" />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-sand/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Nexora Healthcare Pvt. Ltd. All rights reserved.</p>
          <p>X-ray · Ultrasound · C-Arm · CT · MRI · ICU · OT · Furniture</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  kicker,
  title,
  text,
  image,
}: {
  kicker: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-teal-deep text-paper">
      <img src={image} alt="" className="ken absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/88 to-teal-deep/40" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="reveal text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">{kicker}</p>
        <h1 className="reveal reveal-d1 mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] md:text-6xl">
          {title}
        </h1>
        <p className="reveal reveal-d2 mt-5 max-w-2xl text-base leading-relaxed text-sand/85 md:text-lg">{text}</p>
      </div>
    </section>
  );
}

export function QuoteForm({ context }: { context?: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const hospital = String(fd.get("hospital") || "");
    const city = String(fd.get("city") || "");
    const need = String(fd.get("need") || "");
    const msg = `Nexora Healthcare enquiry${context ? ` (${context})` : ""}
Name: ${name}
Hospital / Centre: ${hospital}
City: ${city}
Requirement: ${need}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm" />
        <input name="hospital" required placeholder="Hospital / diagnostic centre" className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm" />
      </div>
      <input name="city" required placeholder="City" className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm" />
      <textarea
        name="need"
        required
        rows={4}
        placeholder="X-ray DR room, C-arm, ultrasound, ICU package…"
        className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm"
      />
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-deep px-5 py-3.5 text-sm font-semibold text-paper hover:bg-teal"
      >
        <WhatsAppGlyph className="h-4 w-4" /> {sent ? "Opening WhatsApp…" : "Send on WhatsApp"}
      </button>
      <p className="text-center text-xs text-ink-soft">No spam. A project engineer replies on {PHONE_DISPLAY}.</p>
    </form>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-copper focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
