import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { scrollToContact } from "@/lib/contact-scroll";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Check,
  Gauge,
  Globe2,
  Layers3,
  Server,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/work/apex")({
  head: () => ({
    meta: [
      { title: "APEX — Architectural Engine | KRON Digital Studio" },
      {
        name: "description",
        content:
          "Inside APEX, KRON's architectural rendering benchmark: edge-delivered imagery, zero layout shift, and a 100/100 Lighthouse score.",
      },
      { property: "og:title", content: "APEX — Architectural Engine | KRON" },
      {
        property: "og:description",
        content: "A foundational prototype for zero-latency architectural imagery.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: ApexCaseStudy,
});

type Locale = "EN" | "HR";
type Metric = { value: string; label: string; icon: LucideIcon };

const COPY = {
  EN: {
    back: "Back to Selected Work",
    language: "Language",
    ordinal: "KRON / SELECTED WORK 01",
    category: "Concept & Prototype No. 01",
    engineTitle: "Architectural Engine",
    subtitle:
      "Foundational architectural prototype engineered to prove zero-latency rendering for heavy spatial imagery.",
    liveDemo: "Launch Live Demo",
    overview: "Project overview",
    imageEyebrow: "INTERNAL BENCHMARK / 2026",
    imageTitle: "Space, without the wait.",
    metadata: [
      ["Project", "APEX Concept"],
      ["Focus", "High-Density Architectural Renders"],
      ["Tech Stack", "Next.js (RSC), Tailwind CSS, Vercel Edge"],
      ["Type", "Internal Benchmark"],
    ],
    resultsEyebrow: "PERFORMANCE / 01",
    resultsTitle: "Fast is the foundation.",
    performanceNote: "Measured at the edge",
    metrics: [
      { value: "< 0.8s", label: "Global Edge Render", icon: Zap },
      { value: "100/100", label: "Lighthouse Score", icon: Gauge },
      { value: "0ms", label: "Layout Shift (CLS)", icon: Layers3 },
    ],
    purposeLabel: "01 / Purpose & vision",
    purposeTitle: "A benchmark for the built world.",
    purpose:
      "APEX was created as KRON's internal benchmark for handling the visual weight of architecture. It tests how far a digital experience can go with dense, high-resolution renders and spatial photography—without asking visitors to wait for the spaces to appear.",
    purposeHighlight:
      "The goal: let the architecture make the first impression, not the loading state.",
    executionLabel: "02 / Architecture & execution",
    executionTitle: "Complex assets. Simple arrival.",
    execution:
      "Next.js React Server Components keep the initial experience lean, while build-time image transformation prepares responsive WebP and AVIF assets before they reach the browser. The result is distributed through Vercel's edge CDN, bringing imagery closer to every visitor.",
    executionHighlight:
      "Fluid navigation, optimized imagery, and stable space reserved for every render—all working together from the first frame.",
    principles: [
      "Server-rendered foundations with Next.js RSC",
      "Responsive WebP and AVIF asset delivery",
      "Edge-distributed imagery with zero layout shift",
    ],
    ctaEyebrow: "A considered digital foundation",
    ctaTitle: "Interested in building a zero-latency digital platform?",
    ctaBody:
      "Tell us what you are building. We will help you shape a fast, thoughtful experience around it.",
    intro: "Send a Message ↗",
    demo: "Launch Live Demo",
    footer: "Independent digital studio · Built with intention",
    demoLabel: "APEX architectural prototype",
  },
  HR: {
    back: "Natrag na odabrane projekte",
    language: "Jezik",
    ordinal: "KRON / ODABRANI RADOVI 01",
    category: "Koncept i prototip br. 01",
    engineTitle: "Arhitektonski pokretač",
    subtitle:
      "Temeljni arhitektonski prototip razvijen kako bi dokazao trenutačno učitavanje zahtjevnih prostornih prikaza.",
    liveDemo: "Pokreni demo uživo",
    overview: "Pregled projekta",
    imageEyebrow: "INTERNO MJERILO / 2026",
    imageTitle: "Prostor bez čekanja.",
    metadata: [
      ["Projekt", "APEX koncept"],
      ["Fokus", "Arhitektonski prikazi visoke gustoće"],
      ["Tehnologije", "Next.js (RSC), Tailwind CSS, Vercel Edge"],
      ["Vrsta", "Interno mjerilo"],
    ],
    resultsEyebrow: "PERFORMANSE / 01",
    resultsTitle: "Brzina je temelj.",
    performanceNote: "Mjereno na rubu mreže",
    metrics: [
      { value: "< 0.8s", label: "Globalno rubno iscrtavanje", icon: Zap },
      { value: "100/100", label: "Lighthouse rezultat", icon: Gauge },
      { value: "0ms", label: "Pomak sadržaja (CLS)", icon: Layers3 },
    ],
    purposeLabel: "01 / Svrha i vizija",
    purposeTitle: "Mjerilo za izgrađeni svijet.",
    purpose:
      "APEX je nastao kao interno KRON-ovo mjerilo za prikaz vizualno zahtjevne arhitekture. Ispituje koliko daleko digitalno iskustvo može ići s detaljnim prikazima visoke rezolucije i prostornom fotografijom — bez čekanja da se prostor pojavi.",
    purposeHighlight: "Cilj: neka arhitektura ostavi prvi dojam, a ne zaslon učitavanja.",
    executionLabel: "02 / Arhitektura i izvedba",
    executionTitle: "Zahtjevni prikazi. Trenutačan doživljaj.",
    execution:
      "Next.js React Server Components održavaju početno iskustvo laganim, dok se slikovni resursi pripremaju pri izgradnji u prilagodljivim WebP i AVIF formatima, prije nego što stignu do preglednika. Vercelova rubna CDN mreža isporučuje ih bliže svakom posjetitelju.",
    executionHighlight:
      "Fluidna navigacija, optimizirane slike i stabilan prostor za svaki prikaz — usklađeni od prvog kadra.",
    principles: [
      "Temelj na poslužitelju uz Next.js RSC",
      "Prilagodljiva isporuka WebP i AVIF slika",
      "Slike distribuirane na rubu mreže, bez pomaka sadržaja",
    ],
    ctaEyebrow: "Promišljen digitalni temelj",
    ctaTitle: "Želite izgraditi digitalnu platformu bez čekanja?",
    ctaBody:
      "Recite nam što gradite. Pomoći ćemo vam oblikovati brzo i promišljeno digitalno iskustvo.",
    intro: "Pošalji Poruku ↗",
    demo: "Pokreni demo uživo",
    footer: "Neovisni digitalni studio · Izrađeno s namjerom",
    demoLabel: "APEX arhitektonski prototip",
  },
} as const;

const REVEAL: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const DEMO_URL = "https://apex-estates-seven.vercel.app";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=88";

function ApexCaseStudy() {
  const [locale, setLocale] = useState<Locale>("EN");
  const copy = COPY[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "HR" ? "hr" : "en";
  }, [locale]);

  return (
    <main
      lang={locale === "HR" ? "hr" : "en"}
      className="relative min-h-screen overflow-x-hidden bg-[#09090b] text-white selection:bg-amber-200 selection:text-black"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="arch-grid absolute inset-0 opacity-[0.13]" />
        <div className="absolute -top-56 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-amber-200/[0.055] blur-[130px]" />
        <div className="absolute right-[-20rem] top-[55rem] h-[32rem] w-[32rem] rounded-full bg-sky-200/[0.035] blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/[0.08] bg-[#09090b]/70 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            hash="showcase"
            className="group inline-flex min-h-11 items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            <ArrowLeft
              className="size-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            <span>{copy.back}</span>
          </Link>

          <div className="flex items-center gap-3" role="group" aria-label={copy.language}>
            {(["EN", "HR"] as const).map((language, index) => (
              <span key={language} className="flex items-center gap-3">
                {index > 0 && <span className="h-3 w-px bg-white/15" aria-hidden="true" />}
                <button
                  type="button"
                  aria-pressed={locale === language}
                  onClick={() => setLocale(language)}
                  className={`min-h-11 px-1 text-xs font-semibold tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 ${
                    locale === language ? "text-amber-100" : "text-white/40 hover:text-white/75"
                  }`}
                >
                  {language}
                </button>
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.section
          className="grid gap-10 pb-16 pt-16 sm:pb-20 sm:pt-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end lg:gap-16 lg:pb-24 lg:pt-32"
          initial="hidden"
          animate="visible"
          variants={REVEAL}
          aria-labelledby="apex-title"
        >
          <div>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-100/20 bg-amber-100/[0.055] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.17em] text-amber-100/90 sm:text-xs">
              <Sparkles className="size-3.5" aria-hidden="true" />
              {copy.category}
            </div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              {copy.ordinal}
            </p>
            <h1
              id="apex-title"
              className="max-w-5xl whitespace-normal [word-break:keep-all] text-[clamp(2.5rem,7vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em] text-white"
            >
              APEX <span className="text-white/45">—</span>
              <br className="hidden sm:block" />
              <span className="text-white/70">{copy.engineTitle}</span>
            </h1>
          </div>
          <div className="min-w-0 max-w-xl border-l border-amber-100/40 pl-5 sm:pl-7 lg:mb-2">
            <p className="whitespace-normal [word-break:keep-all] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              {copy.subtitle}
            </p>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy.liveDemo}: ${copy.demoLabel} (opens in a new tab)`}
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-amber-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              {copy.liveDemo}
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.section>

        <motion.section
          className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-[0_35px_100px_-55px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL}
          aria-labelledby="project-overview"
        >
          <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[2.15/1] lg:aspect-[2.45/1]">
            <img
              src={HERO_IMAGE}
              alt="Contemporary architectural residence surrounded by trees at dusk"
              fetchPriority="high"
              className="absolute inset-0 size-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-[#09090b]/5" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/55">
                  {copy.imageEyebrow}
                </p>
                <h2
                  id="project-overview"
                  className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-4xl"
                >
                  {copy.imageTitle}
                </h2>
              </div>
              <span className="hidden items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl sm:inline-flex">
                <span className="size-1.5 rounded-full bg-emerald-300" />
                {copy.overview}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
            {copy.metadata.map(([label, value], index) => (
              <div
                key={label}
                className={`flex min-w-0 flex-col gap-3 p-4 sm:p-6 lg:p-7 ${index > 0 ? "border-t border-white/[0.08] md:border-t-0" : ""} ${index % 2 === 1 ? "md:border-l md:border-white/[0.08] lg:border-l-0" : ""} ${index >= 2 ? "md:border-t md:border-white/[0.08] lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-white/[0.08]" : ""}`}
              >
                <p className="whitespace-normal text-[10px] font-medium uppercase tracking-[0.14em] text-white/40 sm:text-xs [word-break:keep-all]">
                  {label}
                </p>
                <p className="max-w-xs whitespace-normal [word-break:keep-all] text-sm leading-5 text-white/85 sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="py-20 sm:py-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={REVEAL}
          aria-labelledby="results-heading"
        >
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-amber-100/75">
                {copy.resultsEyebrow}
              </p>
              <h2
                id="results-heading"
                className="text-2xl font-medium tracking-tight text-white sm:text-3xl"
              >
                {copy.resultsTitle}
              </h2>
            </div>
            <div className="hidden items-center gap-2 text-xs text-white/35 sm:flex">
              <Globe2 className="size-4" aria-hidden="true" />
              {copy.performanceNote}
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl md:grid-cols-3">
            {copy.metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>
        </motion.section>

        <section className="grid min-w-0 grid-cols-1 gap-5 border-t border-white/[0.08] py-16 sm:py-24 md:grid-cols-2 md:gap-8">
          <StoryCard
            icon={Boxes}
            number={copy.purposeLabel}
            title={copy.purposeTitle}
            body={copy.purpose}
            highlight={copy.purposeHighlight}
          />
          <StoryCard
            icon={Server}
            number={copy.executionLabel}
            title={copy.executionTitle}
            body={copy.execution}
            highlight={copy.executionHighlight}
            principles={copy.principles}
          />
        </section>

        <motion.section
          className="relative mb-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] px-4 py-10 backdrop-blur-xl sm:mb-16 sm:px-6 sm:py-14 lg:px-16 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL}
          aria-labelledby="apex-cta-title"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full bg-amber-100/[0.07] blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative z-10 grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="min-w-0 max-w-3xl">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-amber-100/75">
                {copy.ctaEyebrow}
              </p>
              <h2
                id="apex-cta-title"
                className="whitespace-normal [word-break:keep-all] text-3xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
              >
                {copy.ctaTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                {copy.ctaBody}
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <a
                href="/#contact"
                onClick={scrollToContact}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.09] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all hover:border-amber-100/50 hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100 sm:px-6"
              >
                {copy.intro}
              </a>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${copy.demo}: ${copy.demoLabel} (opens in a new tab)`}
                className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-100"
              >
                {copy.demo}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      <footer className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Link to="/" className="font-semibold tracking-[0.2em] text-white/75">
            KRON<span className="text-amber-100">.</span>
          </Link>
          <span>{copy.footer}</span>
          <span>© 2026 KRON Digital Studio</span>
        </div>
      </footer>
    </main>
  );
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const Icon = metric.icon;
  return (
    <motion.article
      className={`relative p-6 sm:p-8 ${index > 0 ? "border-t border-white/[0.08] md:border-l md:border-t-0" : ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-center justify-between">
        <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-amber-100/85">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
          0{index + 1}
        </span>
      </div>
      <p className="mt-8 text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl">
        {metric.value}
      </p>
      <p className="mt-2 text-xs text-white/45 sm:text-sm">{metric.label}</p>
      <div
        className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden"
        aria-hidden="true"
      />
    </motion.article>
  );
}

function StoryCard({
  icon: Icon,
  number,
  title,
  body,
  highlight,
  principles,
}: {
  icon: LucideIcon;
  number: string;
  title: string;
  body: string;
  highlight: string;
  principles?: readonly string[];
}) {
  return (
    <motion.article
      className="flex h-full min-w-0 flex-col gap-4 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-xl sm:p-6 lg:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={REVEAL}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-full border border-amber-100/20 bg-amber-100/[0.05] text-amber-100">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
          {number}
        </span>
      </div>
      <h2 className="max-w-lg whitespace-normal [word-break:keep-all] text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-3xl">
        {title}
      </h2>
      <p className="whitespace-normal [word-break:keep-all] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
        {body}
      </p>
      <p className="whitespace-normal [word-break:keep-all] border-l border-amber-100/50 pl-4 text-sm leading-7 text-white/80 sm:text-base">
        {highlight}
      </p>
      {principles && (
        <ul className="flex flex-col gap-3 border-t border-white/[0.08] pt-6">
          {principles.map((principle) => (
            <li key={principle} className="flex items-start gap-3 text-sm text-white/55">
              <Check className="mt-0.5 size-4 shrink-0 text-amber-100/80" aria-hidden="true" />
              {principle}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
