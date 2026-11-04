import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CalendarDays, Globe2, Megaphone, Menu, Workflow, X, type LucideIcon } from "lucide-react";
import { FeaturedWorkCarousel } from "@/components/featured-work-carousel";
import { MarketingCampaignPreview } from "@/components/marketing-campaign-preview";
import { scrollToContact } from "@/lib/contact-scroll";
import { getSiteCopy, type Locale } from "@/lib/site-copy";

const HOMEPAGE_SEO = {
  EN: {
    title: "KRON Studio | Websites, Apps, Marketing & AI Solutions",
    description:
      "KRON Studio creates modern websites, business applications, marketing campaigns and AI automation tailored to help your business grow.",
    language: "en",
  },
  HR: {
    title: "KRON Studio | Web-stranice, aplikacije, marketing i AI rješenja",
    description:
      "KRON Studio izrađuje moderne web-stranice, poslovne aplikacije, marketinške kampanje i AI automatizacije prilagođene rastu vašeg poslovanja.",
    language: "hr",
  },
} as const;

const OG_IMAGE_URL = "https://krondigital.com/og-image.png";
const SITE_KEYWORDS =
  "KRON Studio, web design, web development, business applications, digital marketing, AI automation, izrada web-stranica, poslovne aplikacije, digitalni marketing";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => {
    const lang = search["lang"];
    return lang === "HR" || lang === "EN" ? { lang: lang as Locale } : {};
  },
  head: ({ match }) => {
    const seo = match.search.lang === "HR" ? HOMEPAGE_SEO.HR : HOMEPAGE_SEO.EN;

    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { name: "keywords", content: SITE_KEYWORDS },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:url", content: "https://krondigital.com/" },
        { property: "og:image", content: OG_IMAGE_URL },
        { property: "og:image:alt", content: "High-Performance Next.js Web Development — KRON" },
        { property: "og:locale", content: seo.language === "hr" ? "hr_HR" : "en_US" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        { name: "twitter:image", content: OG_IMAGE_URL },
      ],
      links: [
        { rel: "canonical", href: "https://krondigital.com/" },
        { rel: "alternate", hrefLang: "en", href: "https://krondigital.com/?lang=EN" },
        { rel: "alternate", hrefLang: "hr", href: "https://krondigital.com/?lang=HR" },
        { rel: "alternate", hrefLang: "x-default", href: "https://krondigital.com/" },
      ],
    };
  },
  component: Index,
});

function updateMetaContent(attribute: "name" | "property", key: string, content: string) {
  const meta = Array.from(document.head.getElementsByTagName("meta")).find(
    (element) => element.getAttribute(attribute) === key,
  );
  if (meta) meta.content = content;
}

const NAV_HREFS = ["#systems", "#showcase", "#methodology", "#contact"] as const;

const SERVICES: { number: string; icon: LucideIcon }[] = [
  { number: "01", icon: Globe2 },
  { number: "02", icon: CalendarDays },
  { number: "03", icon: Megaphone },
  { number: "04", icon: Workflow },
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
    <div
      className={`reveal min-w-0 ${className}`}
      data-reveal
      style={{ animationDelay: `${delay}ms` }}
    >
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
    <p className="mb-6 whitespace-normal text-xs font-semibold uppercase tracking-[0.3em] text-accent [word-break:keep-all]">
      {children}
    </p>
  );
}

function ServiceIllustration({ icon: Icon, number }: { icon: LucideIcon; number: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[16/9] items-center justify-between overflow-hidden border-b border-border bg-gradient-to-br from-white/[0.045] via-transparent to-accent/[0.06] px-6 sm:px-8"
    >
      <div className="flex size-16 items-center justify-center rounded-2xl border border-accent/25 bg-accent/[0.08] text-accent transition-transform duration-500 group-hover:scale-105 sm:size-20">
        <Icon className="size-7 sm:size-8" strokeWidth={1.5} />
      </div>
      <div className="flex w-1/2 flex-col gap-3 opacity-70">
        <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          KRON STUDIO / {number}
        </span>
        <span className="h-px w-full bg-border" />
        <span className="flex gap-2">
          <span className="h-1.5 w-2/5 rounded-full bg-accent/45" />
          <span className="h-1.5 w-1/4 rounded-full bg-foreground/15" />
        </span>
        <span className="h-1.5 w-3/5 rounded-full bg-foreground/10" />
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const { lang } = Route.useSearch();
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>(lang ?? "EN");
  const copy = getSiteCopy(locale);

  useEffect(() => {
    const seo = HOMEPAGE_SEO[locale];
    document.documentElement.lang = seo.language;
    document.title = seo.title;
    updateMetaContent("name", "description", seo.description);
    updateMetaContent("property", "og:title", seo.title);
    updateMetaContent("property", "og:description", seo.description);
    updateMetaContent("property", "og:locale", locale === "HR" ? "hr_HR" : "en_US");
    updateMetaContent("name", "twitter:title", seo.title);
    updateMetaContent("name", "twitter:description", seo.description);
  }, [locale]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KRON Studio",
            url: "https://krondigital.com/",
            logo: "https://krondigital.com/logo.png",
            description: HOMEPAGE_SEO[locale].description,
          }),
        }}
      />
      <div className="arch-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
                onClick={NAV_HREFS[index] === "#contact" ? scrollToContact : undefined}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center rounded-full border border-border bg-white/[0.035] p-1 backdrop-blur-xl"
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
          <nav className="flex flex-col border-t border-border bg-background px-4 py-4 sm:px-6 lg:hidden">
            {copy.navigation.map((label, index) => (
              <a
                key={NAV_HREFS[index]}
                href={NAV_HREFS[index]}
                onClick={(event) => {
                  if (NAV_HREFS[index] === "#contact") scrollToContact(event);
                  setOpen(false);
                }}
                className="border-b border-border py-4 font-display text-xl font-bold last:border-0"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main
        id="top"
        lang={locale === "HR" ? "hr" : "en"}
        className="relative min-w-0 overflow-x-hidden"
      >
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 md:pb-36 md:pt-32">
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
            <h1 className="max-w-6xl whitespace-normal text-3xl font-black leading-[1.02] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
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
            <div className="flex flex-wrap items-end gap-3 lg:col-span-6 lg:justify-end">
              <a
                href="#showcase"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {copy.hero.projectsCta}
              </a>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-5 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {copy.hero.quoteCta}
              </a>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section id="systems" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <Reveal>
              <Label>{copy.services.badge}</Label>
              <h2 className="mb-14 text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {copy.services.heading}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {copy.services.cards.map((card, i) => {
                const service = SERVICES[i];
                if (!service) return null;
                const Icon = service.icon;

                return (
                  <Reveal key={service.number} delay={i * 90}>
                    <article className="group h-full min-w-0 overflow-hidden border border-border bg-card transition-colors duration-300 hover:border-accent/35">
                      <ServiceIllustration icon={Icon} number={service.number} />
                      <div className="p-5 sm:p-6">
                        <span className="font-display text-xs font-semibold tracking-[0.16em] text-accent">
                          {service.number}
                        </span>
                        <h3 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
                          {card.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">{card.body}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card/35">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-12 md:items-end lg:px-8 md:py-28">
            <Reveal className="md:col-span-7">
              <Label>{copy.growth.badge}</Label>
              <h2 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                {copy.growth.heading}
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                {copy.growth.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* SHOWCASE */}
        <section id="showcase" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <Reveal>
              <Label>{copy.work.badge}</Label>
              <h2 className="mb-14 max-w-4xl whitespace-normal [word-break:keep-all] text-3xl font-black uppercase tracking-tighter md:text-6xl">
                {copy.work.heading}
              </h2>
            </Reveal>
            <Reveal>
              <FeaturedWorkCarousel locale={locale} />
            </Reveal>
            <Reveal delay={120}>
              <MarketingCampaignPreview locale={locale} />
            </Reveal>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section id="methodology" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <Reveal>
              <Label>{copy.process.badge}</Label>
              <h2 className="mb-14 max-w-4xl whitespace-normal [word-break:keep-all] text-3xl font-black uppercase tracking-tighter md:text-6xl">
                {copy.process.heading}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 border-l border-t border-border lg:grid-cols-4">
              {copy.process.phases.map((phase, i) => (
                <Reveal
                  key={`phase-${i}`}
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
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-8">
            <Reveal className="lg:col-span-4">
              <Label>{copy.faq.badge}</Label>
              <h2 className="text-3xl font-black uppercase tracking-tighter md:text-5xl">
                {copy.faq.heading}
              </h2>
            </Reveal>
            <div className="lg:col-span-8">
              {copy.faq.items.map((item, i) => (
                <Reveal key={`faq-${i}`} delay={i * 80}>
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

        <FounderSection locale={locale} />
        <Inquiry locale={locale} />
      </main>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
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

function FounderSection({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale).founder;

  return (
    <section id="founder" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 md:py-28">
        <Reveal>
          <div className="grid min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-md md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#09090b]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly_Gemini%20Flash_Key%20Preservations-__Keep%20his%20original%20facial%20structure%2C%20expression%2C%20and%20skin%20texture%2C%20165454-mDXUiopAMeLPvhElBfedBm2pKwX01S.png"
                alt={copy.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b]/55 via-transparent to-transparent"
              />
            </div>

            <div className="flex min-w-0 flex-col justify-center gap-4 p-4 sm:p-6 md:p-12 lg:p-16">
              <h2 className="inline-flex w-fit max-w-full items-center gap-2 whitespace-normal rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs [word-break:keep-all]">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {copy.title}
              </h2>
              <h3 className="max-w-xl whitespace-normal [word-break:keep-all] text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl lg:text-4xl">
                {copy.name}
              </h3>
              <p className="max-w-xl whitespace-normal [word-break:keep-all] text-base leading-8 text-muted-foreground sm:text-lg">
                {copy.bio}
              </p>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex min-h-12 w-fit max-w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-accent/60 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {copy.cta}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const WEB3FORMS_KEY = "dfc1fd0e-5a8e-4cff-8bb4-330ba42abeae";
const FALLBACK_REDIRECT = "https://kron-studio.vercel.app/?submitted=true";

function Inquiry({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale).inquiry;
  const redirectRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fill the post-submit return URL without React state — the form itself
    // stays a fully native POST to Web3Forms.
    if (redirectRef.current) {
      redirectRef.current.value = `${window.location.origin}/?submitted=true&lang=${locale}#contact`;
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
  const label = "text-xs font-medium uppercase tracking-widest text-muted-foreground";

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-24 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="min-w-0">
          <Reveal>
            <Label>{copy.badge}</Label>
            <h2 className="whitespace-normal [word-break:keep-all] text-3xl font-black uppercase tracking-tighter md:text-6xl">
              {copy.heading}
            </h2>
            <p className="mt-6 max-w-md whitespace-normal [word-break:keep-all] leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
          </Reveal>
        </div>
        <div className="min-w-0">
          <Reveal>
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
            <div className="w-full min-w-0 border border-border bg-card p-4 shadow-2xl sm:p-6 md:p-10">
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-light tracking-tight md:text-2xl">
                  {copy.formTitle}
                </h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  KRON · {getSiteCopy(locale).footer}
                </p>
              </div>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex flex-col gap-6"
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                <input
                  ref={redirectRef}
                  type="hidden"
                  name="redirect"
                  defaultValue={FALLBACK_REDIRECT}
                />
                <input type="hidden" name="subject" value="New KRON Private Inquiry" />
                <div className="flex flex-col gap-2">
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
                <div className="flex flex-col gap-2">
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
                <div className="flex flex-col gap-2">
                  <label htmlFor="f-contact" className={label}>
                    {copy.formLabels.contact}
                  </label>
                  <input
                    id="f-contact"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    aria-required="true"
                    placeholder={copy.placeholders.contact}
                    className={input}
                  />
                </div>
                <div className="flex flex-col gap-2">
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
      </div>
    </section>
  );
}
