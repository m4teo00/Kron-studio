import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Gauge, Globe2, Phone } from "lucide-react";
import type { Locale } from "@/lib/site-copy";

const SEO = {
  EN: {
    title: "Cavaliero — Restaurant & Apartments | KRON Studio",
    description:
      "A bilingual website for Cavaliero restaurant and apartments, designed to present its atmosphere and make reservation contact simple.",
    language: "en",
  },
  HR: {
    title: "Cavaliero — restoran i apartmani | KRON Studio",
    description:
      "Dvojezična web-stranica restorana i apartmana Cavaliero koja predstavlja njihov ambijent i olakšava kontakt za rezervacije.",
    language: "hr",
  },
} as const;

export const Route = createFileRoute("/work/cavaliero")({
  validateSearch: (search: Record<string, unknown>) => {
    const lang = search["lang"];
    return lang === "HR" || lang === "EN" ? { lang: lang as Locale } : {};
  },
  head: ({ match }) => {
    const seo = match.search.lang === "HR" ? SEO.HR : SEO.EN;
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "https://krondigital.com/cavaliero-header.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
      ],
      links: [
        { rel: "canonical", href: "https://krondigital.com/work/cavaliero" },
        {
          rel: "alternate",
          hrefLang: "en",
          href: "https://krondigital.com/work/cavaliero?lang=EN",
        },
        {
          rel: "alternate",
          hrefLang: "hr",
          href: "https://krondigital.com/work/cavaliero?lang=HR",
        },
      ],
    };
  },
  component: CavalieroCaseStudy,
});

const COPY = {
  EN: {
    back: "Back to selected projects",
    languageLabel: "Choose language",
    tag: "Real Client Project",
    category: "Web Design & Development",
    heading: "Cavaliero — Restaurant & Apartments",
    summary:
      "A modern bilingual website presenting the restaurant, atmosphere and apartments through elegant design, fast loading and seamless reservation contact.",
    website: "Visit cavaliero.ba",
    overview: "Project overview",
    metadata: [
      ["Project", "Cavaliero — Restaurant & Apartments"],
      ["Category", "Web Design & Development"],
      ["Project type", "Real client project"],
      ["Website", "cavaliero.ba"],
    ],
    storyHeading: "A welcoming first impression, online and in person.",
    story: [
      "In hospitality, a guest’s first impression often happens long before they step through a restaurant’s doors. Especially in Herzegovina, where tourists are an important part of the market, a quality digital presentation helps guests discover what is on offer and decide where to spend their time.",
      "The Cavaliero project set out to give the restaurant and apartments a modern digital home that faithfully reflects their atmosphere, offer and hospitality.",
      "We brought together elegant design, real photography, bilingual content, clear navigation and simple reservation contact. We paid particular attention to the mobile experience and loading speed.",
      "The result is a professional website that makes a strong first impression. In the Lighthouse testing conducted for the project, it achieved a Performance score of 100/100 on both mobile and desktop.",
    ],
    approachHeading: "Made to feel clear and easy to use.",
    approach:
      "The page brings the restaurant, its setting and the apartments together in one place. Visitors can explore the offer in Croatian or English and reach the team about a reservation without searching for contact details.",
    points: [
      "Bilingual presentation for local and international guests",
      "Real photography that reflects the actual venue",
      "Straightforward navigation and reservation contact",
      "A responsive layout designed for mobile and desktop",
    ],
    performance: "Historical Lighthouse results",
    mobile: "Mobile Performance",
    desktop: "Desktop Performance",
    historicalNote:
      "These scores are historical results from the project’s Lighthouse tests, not a guarantee of ongoing performance.",
    evidenceTitle: "Original Lighthouse evidence",
    evidenceMissing: "The original Lighthouse screenshot was not supplied for this project page.",
    inquiry: "Discuss a project like this",
    footer: "KRON Studio · Digital solutions for growing businesses",
  },
  HR: {
    back: "Natrag na odabrane projekte",
    languageLabel: "Odaberite jezik",
    tag: "Stvarni projekt za klijenta",
    category: "Web-dizajn i razvoj",
    heading: "Cavaliero — restoran i apartmani",
    summary:
      "Moderna, dvojezična web-stranica koja predstavlja restoran, ambijent i apartmane kroz elegantan dizajn, brzo učitavanje i jednostavan kontakt za rezervacije.",
    website: "Posjetite cavaliero.ba",
    overview: "Pregled projekta",
    metadata: [
      ["Projekt", "Cavaliero — restoran i apartmani"],
      ["Kategorija", "Web-dizajn i razvoj"],
      ["Vrsta projekta", "Stvarni projekt za klijenta"],
      ["Web-stranica", "cavaliero.ba"],
    ],
    storyHeading: "Prvi dojam koji poziva — online i uživo.",
    story: [
      "U ugostiteljstvu prvi dojam često nastaje mnogo prije nego što gost zakorači kroz vrata restorana. Posebno u Hercegovini, gdje su turisti važan dio tržišta, kvalitetna digitalna prezentacija pomaže gostima da upoznaju ponudu i lakše odluče gdje će provesti svoje vrijeme.",
      "Projekt Cavaliero nastao je s ciljem da restoran i apartmani dobiju moderan digitalni prostor koji vjerno predstavlja njihov ambijent, ponudu i gostoprimstvo.",
      "Spojili smo elegantan dizajn, stvarne fotografije, dvojezični sadržaj, preglednu navigaciju i jednostavan kontakt za rezervacije. Posebnu pozornost posvetili smo mobilnom iskustvu i brzini učitavanja.",
      "Rezultat je profesionalna web-stranica koja ostavlja snažan prvi dojam, a na provedenom Lighthouse testiranju ostvarila je Performance rezultat 100/100 na mobilnoj i stolnoj verziji.",
    ],
    approachHeading: "Jasno i jednostavno iskustvo za svakog gosta.",
    approach:
      "Stranica na jednom mjestu povezuje restoran, njegov ambijent i apartmane. Posjetitelji mogu istražiti ponudu na hrvatskom ili engleskom jeziku i jednostavno se javiti u vezi s rezervacijom.",
    points: [
      "Dvojezična prezentacija za domaće i strane goste",
      "Stvarne fotografije koje prikazuju prostor",
      "Pregledna navigacija i jednostavan kontakt za rezervacije",
      "Prilagodljiv prikaz za mobitele i računala",
    ],
    performance: "Povijesni rezultati Lighthouse testiranja",
    mobile: "Performanse na mobitelu",
    desktop: "Performanse na stolnom računalu",
    historicalNote:
      "Ovi su rezultati zabilježeni tijekom ranijeg Lighthouse testiranja projekta i ne predstavljaju jamstvo budućih performansi.",
    evidenceTitle: "Izvorni Lighthouse dokaz",
    evidenceMissing:
      "Izvorna snimka Lighthouse izvještaja nije dostavljena za ovu stranicu projekta.",
    inquiry: "Razgovarajmo o sličnom projektu",
    footer: "KRON Studio · Digitalna rješenja za rast poslovanja",
  },
} as const;

function CavalieroCaseStudy() {
  const { lang } = Route.useSearch();
  const [locale, setLocale] = useState<Locale>(lang ?? "EN");
  const copy = COPY[locale];

  useEffect(() => {
    document.documentElement.lang = SEO[locale].language;
    document.title = SEO[locale].title;
    const metadata = [
      ['meta[name="description"]', SEO[locale].description],
      ['meta[property="og:title"]', SEO[locale].title],
      ['meta[property="og:description"]', SEO[locale].description],
      ['meta[property="og:locale"]', locale === "HR" ? "hr_HR" : "en_US"],
      ['meta[name="twitter:title"]', SEO[locale].title],
      ['meta[name="twitter:description"]', SEO[locale].description],
    ] as const;
    metadata.forEach(([selector, content]) => {
      document.querySelector(selector)?.setAttribute("content", content);
    });
  }, [locale]);

  return (
    <main
      lang={locale === "HR" ? "hr" : "en"}
      className="min-h-screen overflow-x-hidden bg-[#09090b] text-white selection:bg-amber-200 selection:text-black"
    >
      <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#09090b]/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            hash="showcase"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {copy.back}
          </Link>
          <div className="flex items-center gap-1" role="group" aria-label={copy.languageLabel}>
            {(["HR", "EN"] as const).map((language) => (
              <button
                key={language}
                type="button"
                aria-pressed={locale === language}
                onClick={() => setLocale(language)}
                className={`min-h-11 rounded-full px-3 text-xs font-semibold tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 ${
                  locale === language ? "bg-amber-100 text-black" : "text-white/55 hover:text-white"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:py-28">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-100/25 bg-amber-100/[0.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-100 sm:text-xs">
                {copy.tag}
              </span>
              <span className="text-xs text-white/55">{copy.category}</span>
            </div>
            <h1 className="max-w-4xl text-[clamp(2.6rem,7vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.06em]">
              {copy.heading}
            </h1>
          </div>
          <div className="max-w-xl border-l border-amber-100/40 pl-5 sm:pl-7">
            <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {copy.summary}
            </p>
            <a
              href="https://www.cavaliero.ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-amber-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              {copy.website}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          aria-labelledby="cavaliero-overview"
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-[#101214] sm:aspect-[2/1]">
            <img
              src="/cavaliero-header.png"
              alt={
                locale === "HR"
                  ? "Snimka početne stranice web-stranice Cavaliero"
                  : "Screenshot of the Cavaliero website homepage"
              }
              width={1850}
              height={953}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 size-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09090b]/95 to-transparent px-5 pb-5 pt-16 sm:px-8 sm:pb-8">
              <h2
                id="cavaliero-overview"
                className="text-xl font-medium tracking-tight sm:text-2xl"
              >
                {copy.overview}
              </h2>
            </div>
          </div>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
            {copy.metadata.map(([label, value]) => (
              <div
                key={label}
                className="border-t border-white/10 p-4 sm:p-5 lg:border-l lg:first:border-l-0"
              >
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  {label}
                </dt>
                <dd className="mt-2 break-words text-sm leading-6 text-white/85">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-28">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/75">
              {locale === "HR" ? "Priča projekta" : "Project story"}
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              {copy.storyHeading}
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-base leading-8 text-white/70 lg:col-span-8">
            {copy.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-white/10 py-16 sm:py-20 md:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              {copy.approachHeading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">{copy.approach}</p>
          </div>
          <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {copy.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 py-4 text-sm leading-6 text-white/75"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-amber-100" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="performance-heading" className="pb-16 sm:pb-20 lg:pb-28">
          <div className="mb-6 flex items-center gap-3">
            <Gauge className="size-5 text-amber-100" aria-hidden="true" />
            <h2 id="performance-heading" className="text-xl font-medium tracking-tight sm:text-2xl">
              {copy.performance}
            </h2>
          </div>
          <div className="grid overflow-hidden rounded-2xl border border-amber-100/20 bg-amber-100/[0.035] sm:grid-cols-2">
            {[
              { label: copy.mobile, value: "100/100", icon: Phone },
              { label: copy.desktop, value: "100/100", icon: Globe2 },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-amber-100/15 p-5 last:border-b-0 sm:border-b-0 sm:p-7 sm:even:border-l"
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-4 text-amber-100/80" aria-hidden="true" />
                  <span className="text-sm text-white/75">{label}</span>
                </div>
                <span className="font-display text-2xl font-semibold tracking-tight text-amber-100 sm:text-3xl">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-6 text-white/50">{copy.historicalNote}</p>
          <details className="group mt-5 max-w-xl">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-xs font-medium text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200">
              {copy.evidenceTitle}
              <span aria-hidden="true" className="transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 border-l border-white/15 pl-4 text-xs leading-6 text-white/45">
              {copy.evidenceMissing}
            </p>
          </details>
        </section>

        <section className="mb-12 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:mb-16 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">{copy.inquiry}</h2>
            <p className="mt-2 text-sm text-white/55">{copy.footer}</p>
          </div>
          <a
            href="/#contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-amber-100 px-5 text-sm font-semibold text-black transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            {copy.inquiry}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </section>
      </div>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-white/45">
        {copy.footer}
      </footer>
    </main>
  );
}
