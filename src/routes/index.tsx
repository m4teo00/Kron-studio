import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
        content: "Bespoke web platforms, visual identities and direct social pipelines for ambitious market leaders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#systems", label: "Systems" },
  { href: "#showcase", label: "Concept Showcase" },
  { href: "#methodology", label: "Our Methodology" },
  { href: "#faq", label: "FAQ" },
];

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

const PHASES = [
  ["Strategy & Digital Blueprint", "In-depth analysis of business objectives, conversion funnels and customer journeys. We map out a bespoke architectural blueprint designed to convert visitors into clients."],
  ["Visual & Interface Engineering", "Custom Swiss-editorial design crafted from scratch. High-contrast typography, brand elements and fluid layouts with zero generic templates."],
  ["Full-Stack Development & Pipeline Setup", "Custom Next.js / React engineering with sub-second performance. In parallel we configure the 24/7 Instagram DM & comment lead routing system."],
  ["Rigorous QA & 100% Asset Ownership Handoff", "Comprehensive cross-device testing, speed optimization and live deployment. Full transfer of code, digital assets — zero agency lock-in."],
];

const FAQ = [
  ["How long does a typical project take?", "Most bespoke web platforms and Instagram pipelines are delivered fully functional in 7 to 14 days."],
  ["Do I own the platform after launch?", "Yes. You receive 100% full ownership of the code, digital assets, and infrastructure."],
  ["How do we get started?", "Fill out the private inquiry form below. We review your goals and get back to you within 24 hours."],
];


function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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
  return <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-accent">{children}</p>;
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="arch-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="KRON mark" className="h-9 w-9 rounded-md" />
            <span className="font-display text-2xl font-black tracking-tighter">KRON<span className="text-accent">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#inquiry" className="hidden bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent sm:inline-block">
              Initiate Project
            </a>
            <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-border bg-background px-5 py-4 lg:hidden">
            {[...NAV, { href: "#inquiry", label: "Initiate Project" }].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-xl font-bold last:border-0">
                {l.label}
              </a>
            ))}
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
              Q4 Client Intake: <span className="text-accent">2 Slots Remaining</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-6xl text-3xl font-black uppercase leading-[0.95] tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              We architect high-converting digital platforms <span className="text-accent">&amp;</span> direct social pipelines.
            </h1>
          </Reveal>
          <Reveal delay={200} className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-8 lg:grid-cols-12">
            <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-6">
              A boutique studio crafting bespoke web platforms, high-end visual identities, and direct-response Instagram lead systems for ambitious market leaders.
            </p>
            <div className="flex items-end lg:col-span-6 lg:justify-end">
              <a href="#systems" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]">
                Explore Systems <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section id="systems" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <Reveal>
              <Label>Core Expertise</Label>
              <h2 className="mb-14 text-3xl font-black uppercase tracking-tighter md:text-5xl">Systems we build.</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.n} delay={i * 120} className={s.span}>
                  <article className="group h-full overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-gold">
                    <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-72">
                      <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100" />
                    </div>
                    <div className="p-7 md:p-9">
                      <span className="font-display text-sm font-bold text-accent">{s.n}</span>
                      <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">{s.title}</h3>
                      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section id="showcase" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <Reveal>
              <Label>Authentic Concept Proof</Label>
              <h2 className="mb-14 text-3xl font-black uppercase tracking-tighter md:text-6xl">Concept Architecture Showcase</h2>
            </Reveal>
            <Reveal>
              <div className="group grid grid-cols-1 overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-gold lg:grid-cols-2">
                <div className="overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80" alt="Apex Estates luxury villa" loading="lazy" className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105 lg:h-full" />
                </div>
                <div className="flex flex-col justify-between gap-10 p-7 md:p-12">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Landing Page · Real Estate</span>
                    <h3 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Apex Estates — Luxury Real Estate Landing Page</h3>
                    <div className="mt-8 border-l-2 border-accent pl-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Fictional Demo Showcase</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Built completely from scratch (0 to 1) to demonstrate raw visual architecture, fast performance, and high-end UI design. This is merely a single landing page sample—representing less than 30% of a full bespoke client ecosystem. Every commercial platform we build is fully customized through direct strategy and collaboration with the client.
                      </p>
                    </div>
                  </div>
                  <a href="https://apex-estates-seven.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-accent sm:w-fit">
                    Launch Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section id="methodology" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <Reveal>
              <Label>The KRON 4-Step Engineering Protocol</Label>
              <h2 className="mb-14 max-w-4xl text-3xl font-black uppercase tracking-tighter md:text-6xl">Our Methodology: From Blueprint to Launch</h2>
            </Reveal>
            <div className="grid grid-cols-1 border-l border-t border-border lg:grid-cols-4">
              {PHASES.map(([t, b], i) => (
                <Reveal key={t} delay={i * 100} className="border-b border-r border-border p-7 transition-colors hover:bg-card md:p-9">
                  <span className="font-display text-5xl font-black text-accent">0{i + 1}</span>
                  <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">Phase 0{i + 1}</p>
                  <h3 className="mt-2 text-xl font-extrabold leading-tight">{t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-24 md:px-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Label>FAQ</Label>
              <h2 className="text-3xl font-black uppercase tracking-tighter md:text-5xl">Essentials.</h2>
            </Reveal>
            <div className="lg:col-span-8">
              {FAQ.map(([q, a], i) => (
                <Reveal key={q} delay={i * 80}>
                  <details className="group border-b border-border py-6 first:border-t">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold md:text-xl">
                      {q}
                      <span className="shrink-0 text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Inquiry />
      </main>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <span className="flex items-center gap-2 font-display text-xl font-black tracking-tighter text-foreground">
            <img src="/logo.png" alt="KRON mark" className="h-7 w-7 rounded" />
            KRON<span className="text-accent">.</span>
          </span>
          <span>Digital Architecture & Growth Studio © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

const WEB3FORMS_KEY = "dfc1fd0e-5a8e-4cff-8bb4-330ba42abeae";
const FALLBACK_REDIRECT = "https://kron-studio.vercel.app/?submitted=true";

function Inquiry() {
  const redirectRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fill the post-submit return URL without React state — the form itself
    // stays a fully native POST to Web3Forms.
    if (redirectRef.current) {
      redirectRef.current.value = `${window.location.origin}/?submitted=true#inquiry`;
    }
    // Show the gold confirmation when redirected back with ?submitted=true.
    if (doneRef.current && new URLSearchParams(window.location.search).get("submitted") === "true") {
      doneRef.current.hidden = false;
    }
  }, []);

  const input = "w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200";
  const label = "mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground";

  return (
    <section id="inquiry" className="scroll-mt-16 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-24 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Label>Executive Private Inquiry</Label>
          <h2 className="text-3xl font-black uppercase tracking-tighter md:text-6xl">Initiate a Project</h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Direct communication. No intermediate account managers. Tell us about your project scope.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <div ref={doneRef} hidden role="status" className="mb-6 border border-accent bg-accent/10 p-6 shadow-gold" style={{ animation: "rise 0.6s ease-out both" }}>
            <p className="font-display text-xl font-black text-accent">Inquiry Received.</p>
            <p className="mt-2 text-foreground">Our engineering team will review your site and respond within 24 hours.</p>
          </div>
          <div className="w-full border border-border bg-card p-8 shadow-2xl md:p-10">
            <div className="mb-8">
              <h3 className="mb-2 text-xl font-light tracking-tight md:text-2xl">PRIVATE INQUIRY</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">KRON Digital Architecture &amp; Growth Studio</p>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <input ref={redirectRef} type="hidden" name="redirect" defaultValue={FALLBACK_REDIRECT} />
              <input type="hidden" name="subject" value="New KRON Private Inquiry" />
              <div>
                <label htmlFor="f-name" className={label}>Name / Company</label>
                <input id="f-name" type="text" name="name" required autoComplete="name" placeholder="e.g. Alexander Vance / Apex Estates" className={input} />
              </div>
              <div>
                <label htmlFor="f-web" className={label}>Current Website URL</label>
                <input id="f-web" type="url" name="website" autoComplete="url" placeholder="https://yourwebsite.com" className={input} />
              </div>
              <div>
                <label htmlFor="f-contact" className={label}>Contact (Email or WhatsApp)</label>
                <input id="f-contact" type="text" name="email" required autoComplete="email" placeholder="alexander@apexestates.com or +387..." className={input} />
              </div>
              <div>
                <label htmlFor="f-msg" className={label}>Project Scope &amp; Goals</label>
                <textarea id="f-msg" name="message" rows={4} required placeholder="Tell us about your brand goals, target audience, or current bottlenecks..." className={`${input} resize-none`} />
              </div>
              <button type="submit" className="mt-4 w-full cursor-pointer bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition-colors duration-300 hover:bg-foreground hover:text-background">
                Submit Private Inquiry
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
