import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FeaturedWorkCarousel } from "@/components/featured-work-carousel";
import { SITE_COPY, type Locale } from "@/lib/site-copy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRON — Digital Architecture & Growth Studio" },
      {
        name: "description",
        content:
          "A boutique studio crafting bespoke web platforms, high-end visual identities and direct-response Instagram lead systems.",
      },
      { property: "og:title", content: "KRON — Digital Architecture & Growth Studio" },
      {
        property: "og:description",
        content:
          "Bespoke web platforms, visual identities and direct social pipelines for ambitious market leaders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_HREFS = ["#systems", "#showcase", "#methodology", "#inquiry"] as const;

const SERVICES = [
  {
    n: "01",
    title: "Bespoke Web Architecture",
    body: "Custom React / Next.js platforms built from scratch for lightning performance and conversion.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    span: "lg:col-span-2",
  },
  {
    n: "02",
    title: "Instagram Direct Response Systems",
    body: "Always-on lead intake via DM & comments. Converts social engagement and story replies directly into structured client inquiries.",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
  {
    n: "03",
    title: "Visual Brand Identity",
    body: "Complete luxury design systems, editorial typography, color theory and digital guidelines.",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1800&q=80",
    span: "lg:col-span-3",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} data-reveal style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-accent">{children}</p>
  );
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("EN");
  const copy = SITE_COPY[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "HR" ? "hr" : "en";
  }, [locale]);

  useEffect(() => {
    const submittedLocale = new URLSearchParams(window.location.search).get("lang");
    if (submittedLocale === "EN" || submittedLocale === "HR") setLocale(submittedLocale);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="arch-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="KRON mark" className="h-9 w-9 rounded-md" />
            <span className="font-display text-2xl font-black tracking-tighter">
              KRON<span className="text-accent">.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {copy.navigation.map((label, index) => (
              <a
                key={NAV_HREFS[index]}
                href={NAV_HREFS[index]}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center rounded-full border border-border p-1"
              role="group"
              aria-label={copy.languageLabel}
            >
              {(["EN", "HR"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={locale === option}
                  onClick={() => setLocale(option)}
                  className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold tracking-wide transition-colors ${locale === option ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <a
              href="#inquiry"
              className="hidden bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent sm:inline-block"
            >
              {copy.headerCta}
            </a>
            <button
              className="p-2 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? copy.menuClose : copy.menuOpen}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-border bg-background px-5 py-4 lg:hidden">
            {copy.navigation.map((label, index) => (
              <a
                key={NAV_HREFS[index]}
                href={NAV_HREFS[index]}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-xl font-bold last:border-0"
              >
                {label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-xl font-bold last:border-0"
            >
              {copy.headerCta}
            </a>
          </nav>
        )}
      </header>

      <main id="top" className="relative">
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 md:px-10 md:pb-36 md:pt-32">
          <Reveal>
            <div className="mb-10 inline-flex items-center gap-3 border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.18em]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              {copy.hero.badge}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-6xl text-3xl font-black uppercase leading-[0.95] tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {copy.hero.headline}
            </h1>
          </Reveal>
          <Reveal
            delay={200}
            className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-8 lg:grid-cols-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-6">
              {copy.hero.subtitle}
            </p>
            <div className="flex items-end lg:col-span-6 lg:justify-end">
              <a
                href="#systems"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
              >
                {copy.hero.cta}{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section id="systems" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <Reveal>
              <Label>{copy.services.badge}</Label>
              <h2 className="mb-14 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {copy.services.heading}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {copy.services.cards.map((card, i) => {
                const service = SERVICES[i];
                if (!service) return null;

                return (
                  <Reveal key={service.n} delay={i * 120} className={service.span}>
                    <article className="group h-full overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-gold">
                      <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-72">
                        <img
                          src={service.img}
                          alt={card.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </div>
                      <div className="p-7 md:p-9">
                        <span className="font-display text-sm font-bold text-accent">
                          {service.n}
                        </span>
                        <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                          {card.title}
                        </h3>
                        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                          {card.body}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section id="showcase" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <Reveal>
              <Label>{copy.work.badge}</Label>
              <h2 className="mb-14 max-w-4xl text-3xl font-black uppercase tracking-tighter md:text-6xl">
                {copy.work.heading}
              </h2>
            </Reveal>
            <Reveal>
              <FeaturedWorkCarousel locale={locale} />
            </Reveal>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section id="methodology" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <Reveal>
              <Label>{copy.process.badge}</Label>
              <h2 className="mb-14 max-w-4xl text-3xl font-black uppercase tracking-tighter md:text-6xl">
                {copy.process.heading}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 border-l border-t border-border lg:grid-cols-4">
              {copy.process.phases.map((phase, i) => (
                <Reveal
                  key={phase.title}
                  delay={i * 100}
                  className="border-b border-r border-border p-7 transition-colors hover:bg-card md:p-9"
                >
                  <span className="font-display text-5xl font-black text-accent">0{i + 1}</span>
                  <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {copy.process.phaseLabel} 0{i + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold leading-tight">{phase.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-24 md:px-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Label>{copy.faq.badge}</Label>
              <h2 className="text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {copy.faq.heading}
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              {copy.faq.items.map((item, i) => (
                <Reveal key={item.question} delay={i * 80}>
                  <details className="group border-b border-border py-6 first:border-t">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold md:text-xl">
                      {item.question}
                      <span className="shrink-0 text-2xl text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Inquiry locale={locale} />
      </main>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <span className="flex items-center gap-2 font-display text-xl font-black tracking-tighter text-foreground">
            <img src="/logo.png" alt="KRON mark" className="h-7 w-7 rounded" />
            KRON<span className="text-accent">.</span>
          </span>
          <span>
            {copy.footer} © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}

const WEB3FORMS_KEY = "dfc1fd0e-5a8e-4cff-8bb4-330ba42abeae";
const FALLBACK_REDIRECT = "https://kron-studio.vercel.app/?submitted=true";

function Inquiry({ locale }: { locale: Locale }) {
  const copy = SITE_COPY[locale].inquiry;
  const redirectRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fill the post-submit return URL without React state — the form itself
    // stays a fully native POST to Web3Forms.
    if (redirectRef.current) {
      redirectRef.current.value = `${window.location.origin}/?submitted=true&lang=${locale}#inquiry`;
    }
    // Show the gold confirmation when redirected back with ?submitted=true.
    if (
      doneRef.current &&
      new URLSearchParams(window.location.search).get("submitted") === "true"
    ) {
      doneRef.current.hidden = false;
    }
  }, [locale]);

  const input =
    "w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200";
  const label = "mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground";

  return (
    <section id="inquiry" className="scroll-mt-16 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-24 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Label>{copy.badge}</Label>
          <h2 className="text-3xl font-black uppercase tracking-tighter md:text-6xl">
            {copy.heading}
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{copy.description}</p>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <div
            ref={doneRef}
            hidden
            role="status"
            className="mb-6 border border-accent bg-accent/10 p-6 shadow-gold"
            style={{ animation: "rise 0.6s ease-out both" }}
          >
            <p className="font-display text-xl font-black text-accent">{copy.received}</p>
            <p className="mt-2 text-foreground">{copy.response}</p>
          </div>
          <div className="w-full border border-border bg-card p-8 shadow-2xl md:p-10">
            <div className="mb-8">
              <h3 className="mb-2 text-xl font-light tracking-tight md:text-2xl">
                {copy.formTitle}
              </h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                KRON · {SITE_COPY[locale].footer}
              </p>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <input
                ref={redirectRef}
                type="hidden"
                name="redirect"
                defaultValue={FALLBACK_REDIRECT}
              />
              <input type="hidden" name="subject" value="New KRON Private Inquiry" />
              <div>
                <label htmlFor="f-name" className={label}>
                  {copy.formLabels.name}
                </label>
                <input
                  id="f-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={copy.placeholders.name}
                  className={input}
                />
              </div>
              <div>
                <label htmlFor="f-web" className={label}>
                  {copy.formLabels.website}
                </label>
                <input
                  id="f-web"
                  type="url"
                  name="website"
                  autoComplete="url"
                  placeholder={copy.placeholders.website}
                  className={input}
                />
              </div>
              <div>
                <label htmlFor="f-contact" className={label}>
                  {copy.formLabels.contact}
                </label>
                <input
                  id="f-contact"
                  type="text"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={copy.placeholders.contact}
                  className={input}
                />
              </div>
              <div>
                <label htmlFor="f-msg" className={label}>
                  {copy.formLabels.message}
                </label>
                <textarea
                  id="f-msg"
                  name="message"
                  rows={4}
                  required
                  placeholder={copy.placeholders.message}
                  className={`${input} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full cursor-pointer bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                {copy.submit}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
