import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { scrollToContact } from "@/lib/contact-scroll";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  MoveUpRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/work/restauracija-kelava")({
  head: () => ({
    meta: [
      { title: "Restauracija Kelava — KRON Case Study" },
      {
        name: "description",
        content:
          "How KRON engineered a high-performance digital showcase and direct mobile lead system for Restauracija Kelava.",
      },
      { property: "og:title", content: "Restauracija Kelava — KRON Case Study" },
      {
        property: "og:description",
        content: "A fast, focused digital home for furniture restoration, heritage, and craft.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: RestauracijaKelavaCaseStudy,
});

type Locale = "EN" | "HR";

const COPY = {
  EN: {
    back: "Back to Selected Work",
    languageLabel: "Language",
    workOrdinal: "KRON / SELECTED WORK 02",
    digitalPresence: "DIGITAL PRESENCE / 2026",
    projectTitle: "A new home for timeless work.",
    projectStatus: "Live project",
    outcomeLabel: "OUTCOME / 01",
    performanceNote: "Performance by design",
    category: "Client Case Study · Heritage & Craft",
    subtitle:
      "Engineered for ultra-fast high-resolution image rendering and frictionless direct mobile lead generation.",
    overview: "Project overview",
    metadata: [
      ["Client", "Restauracija Kelava"],
      ["Industry", "Furniture & Antique Restoration"],
      ["Technology", "Next.js (RSC), Tailwind CSS, Vercel Edge"],
      ["Year", "2026"],
    ],
    results: "The result, at a glance",
    metrics: [
      { value: "< 0.8s", label: "DOM Load Time", icon: Clock3 },
      { value: "99/100", label: "Google Lighthouse Score", icon: Gauge },
      { value: "0", label: "Plugins · Clean Codebase", icon: Code2 },
    ],
    challengeLabel: "01 / The opportunity",
    challengeTitle: "Craft deserves a better stage.",
    challenge:
      "A Facebook page can help a business get found, but it puts the work inside a crowded feed, limits how a portfolio is experienced, and offers little control over the first impression. For high-value restoration, every detail matters—from the finish on a restored piece to the way a prospective client gets in touch.",
    challengeStrong:
      "Kelava needed an authoritative digital showcase that loads instantly, lets the craftsmanship lead, and turns interest into a direct conversation.",
    buildLabel: "02 / Engineering & execution",
    buildTitle: "Every pixel earns its place.",
    build:
      "The experience is built around the work itself: high-resolution before-and-after photography, a calm editorial layout, and an image pipeline designed to deliver the right asset at the right size. Lightweight rendering keeps the interface responsive while reserving space for media to prevent layout shifts.",
    buildStrong:
      "On mobile, clear WhatsApp and call actions remove the detour between discovering a restoration and asking about it—routing each lead straight to the craftsperson.",
    principles: [
      "High-resolution craft, without the wait",
      "Stable layouts from first paint",
      "Direct WhatsApp & call actions",
    ],
    ctaEyebrow: "Build something considered",
    ctaTitle: "Need a high-performance platform for your craft?",
    ctaBody:
      "Let’s talk through the work, the audience, and what a more thoughtful digital home could do for your business.",
    intro: "Send a Message ↗",
    demo: "Launch Live Demo",
    footer: "Independent digital studio · Built with intention",
  },
  HR: {
    back: "Natrag na odabrane projekte",
    languageLabel: "Jezik",
    workOrdinal: "KRON / ODABRANI RADOVI 02",
    digitalPresence: "DIGITALNA PREZENTACIJA / 2026",
    projectTitle: "Novi dom za bezvremenski rad.",
    projectStatus: "Aktivan projekt",
    outcomeLabel: "REZULTAT / 01",
    performanceNote: "Performanse po mjeri",
    category: "Studija slučaja · Baština i obrt",
    subtitle:
      "Izrađeno za iznimno brzo prikazivanje fotografija visoke rezolucije i jednostavno prikupljanje upita s mobitela.",
    overview: "Pregled projekta",
    metadata: [
      ["Klijent", "Restauracija Kelava"],
      ["Djelatnost", "Restauracija namještaja i antikviteta"],
      ["Tehnologija", "Next.js (RSC), Tailwind CSS, Vercel Edge"],
      ["Godina", "2026"],
    ],
    results: "Rezultati na prvi pogled",
    metrics: [
      { value: "< 0.8s", label: "Vrijeme učitavanja DOM-a", icon: Clock3 },
      { value: "99/100", label: "Google Lighthouse rezultat", icon: Gauge },
      { value: "0", label: "Dodataka · Čist kod", icon: Code2 },
    ],
    challengeLabel: "01 / Prilika",
    challengeTitle: "Vještina zaslužuje bolju pozornicu.",
    challenge:
      "Facebook stranica može pomoći da vas klijenti pronađu, ali vaš rad smješta u pretrpani sadržaj, ograničava doživljaj portfolija i pruža malo kontrole nad prvim dojmom. Kod restauracije vrijednih komada svaki je detalj važan — od završne obrade do načina na koji budući klijent stupa u kontakt.",
    challengeStrong:
      "Kelavi je trebala vjerodostojna digitalna prezentacija koja se učitava trenutačno, stavlja obrt u prvi plan i pretvara interes u izravan razgovor.",
    buildLabel: "02 / Inženjering i izvedba",
    buildTitle: "Svaki piksel ima svoju svrhu.",
    build:
      "Iskustvo je oblikovano oko samog rada: fotografije prije i poslije visoke rezolucije, smiren urednički raspored i optimizirana isporuka slika u odgovarajućoj veličini. Lagano iscrtavanje održava sučelje responzivnim, a rezervirani prostor za medije sprječava pomicanje sadržaja.",
    buildStrong:
      "Na mobitelu jasni WhatsApp i telefonski pozivi uklanjaju prepreke između otkrivanja restauracije i upita — svaki kontakt vodi izravno do majstora.",
    principles: [
      "Fotografije visoke rezolucije bez čekanja",
      "Stabilan raspored od prvog prikaza",
      "Izravni WhatsApp i telefonski pozivi",
    ],
    ctaEyebrow: "Stvorimo nešto promišljeno",
    ctaTitle: "Trebate brzu digitalnu platformu za svoj obrt?",
    ctaBody:
      "Razgovarajmo o vašem radu, klijentima i mogućnostima kvalitetnije digitalne prezentacije vašeg poslovanja.",
    intro: "Pošalji Poruku ↗",
    demo: "Otvori demo uživo",
    footer: "Neovisni digitalni studio · Izrađeno s namjerom",
  },
} as const;

const REVEAL: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function RestauracijaKelavaCaseStudy() {
  const [locale, setLocale] = useState<Locale>("EN");
  const copy = COPY[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "HR" ? "hr" : "en";
  }, [locale]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-white selection:bg-amber-200 selection:text-black">
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="arch-grid absolute inset-0 opacity-[0.13]" />
        <div className="absolute -top-56 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-amber-200/[0.055] blur-[130px]" />
        <div className="absolute right-[-20rem] top-[55rem] h-[32rem] w-[32rem] rounded-full bg-sky-200/[0.035] blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/[0.08] bg-[#09090b]/70 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
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

          <div className="flex items-center gap-3" aria-label={copy.languageLabel}>
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.section
          className="grid gap-12 pb-16 pt-16 sm:pb-20 sm:pt-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end lg:gap-16 lg:pb-24 lg:pt-32"
          initial="hidden"
          animate="visible"
          variants={REVEAL}
        >
          <div>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-100/20 bg-amber-100/[0.055] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.17em] text-amber-100/90 sm:text-xs">
              <Sparkles className="size-3.5" aria-hidden="true" />
              {copy.category}
            </div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              {copy.workOrdinal}
            </p>
            <h1 className="max-w-5xl text-[clamp(3.25rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em] text-white">
              Restauracija <span className="text-white/45">Kelava</span>
            </h1>
          </div>
          <div className="max-w-xl border-l border-amber-100/40 pl-5 sm:pl-7 lg:mb-2">
            <p className="text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              {copy.subtitle}
            </p>
            <a
              href="https://restauracijakelava.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-amber-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              {copy.demo}
              <MoveUpRight
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
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=88"
              alt="Restored wood furniture displayed in a warm, considered interior"
              fetchPriority="high"
              className="absolute inset-0 size-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/15 to-[#09090b]/5" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/55">
                  {copy.digitalPresence}
                </p>
                <h2
                  id="project-overview"
                  className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-4xl"
                >
                  {copy.projectTitle}
                </h2>
              </div>
              <span className="hidden items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl sm:inline-flex">
                <span className="size-1.5 rounded-full bg-emerald-300" />
                {copy.projectStatus}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-white/[0.08] lg:grid-cols-4">
            {copy.metadata.map(([label, value], index) => (
              <div
                key={label}
                className={`min-h-[7.4rem] p-5 sm:p-7 ${index % 2 === 1 ? "border-l border-white/[0.08] lg:border-l-0" : ""} ${index >= 2 ? "border-t border-white/[0.08] lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-white/[0.08]" : ""}`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                  {label}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-5 text-white/85 sm:text-base">
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
                {copy.outcomeLabel}
              </p>
              <h2
                id="results-heading"
                className="text-2xl font-medium tracking-tight text-white sm:text-3xl"
              >
                {copy.results}
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

        <section className="grid gap-5 border-t border-white/[0.08] py-16 sm:py-24 lg:grid-cols-2 lg:gap-8">
          <StoryCard
            icon={Layers3}
            number={copy.challengeLabel}
            title={copy.challengeTitle}
            body={copy.challenge}
            highlight={copy.challengeStrong}
          />
          <StoryCard
            icon={Code2}
            number={copy.buildLabel}
            title={copy.buildTitle}
            body={copy.build}
            highlight={copy.buildStrong}
            principles={copy.principles}
          />
        </section>

        <motion.section
          className="relative mb-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] px-6 py-10 backdrop-blur-xl sm:mb-16 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full bg-amber-100/[0.07] blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative z-10 grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-amber-100/75">
                {copy.ctaEyebrow}
              </p>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
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
                href="https://restauracijakelava.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
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

type Metric = { value: string; label: string; icon: LucideIcon };

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
      className="flex h-full flex-col rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8 lg:p-9"
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
      <h2 className="mt-9 max-w-lg text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">{body}</p>
      <p className="mt-5 border-l border-amber-100/50 pl-4 text-sm leading-7 text-white/80 sm:text-base">
        {highlight}
      </p>
      {principles && (
        <ul className="mt-8 flex flex-col gap-3 border-t border-white/[0.08] pt-6">
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
