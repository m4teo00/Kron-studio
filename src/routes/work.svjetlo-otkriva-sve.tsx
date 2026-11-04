import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/site-copy";
import { MarketingCampaignPhoto } from "@/components/marketing-campaign-photo";

const SEO = {
  HR: {
    title: "Svjetlo otkriva sve — marketinška kampanja | KRON Studio",
    description: "Konceptualna kreativna kampanja za premium detailing. Pogledajte tri oglasa i naš pristup od prve ideje do vizualnog rješenja.",
  },
  EN: {
    title: "Light Reveals Everything — marketing concept | KRON Studio",
    description: "A conceptual premium automotive detailing campaign. Explore three advertising visuals and the thinking behind the creative direction.",
  },
} as const;

export const Route = createFileRoute("/work/svjetlo-otkriva-sve")({
  validateSearch: (search: Record<string, unknown>) => {
    const lang = search["lang"];
    return lang === "HR" || lang === "EN" ? { lang: lang as Locale } : {};
  },
  head: ({ match }) => {
    const lang = match.search.lang === "HR" ? "HR" : "EN";
    const seo = SEO[lang];
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "https://kron-studio.vercel.app/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: "https://kron-studio.vercel.app/work/svjetlo-otkriva-sve" },
        { rel: "alternate", hrefLang: "hr", href: "https://kron-studio.vercel.app/work/svjetlo-otkriva-sve?lang=HR" },
        { rel: "alternate", hrefLang: "en", href: "https://kron-studio.vercel.app/work/svjetlo-otkriva-sve?lang=EN" },
      ],
    };
  },
  component: MarketingCaseStudy,
});

const COPY = {
  HR: {
    back: "Natrag na projekte",
    badge: "Kreativni radovi / Konceptualni projekt",
    title: "SVJETLO OTKRIVA SVE.",
    lead: "Kampanja za premium detailing studio koja pretvara jedno pitanje o stanju laka u tri koraka: pozornost, povjerenje i upit.",
    galleryTitle: "Od prvog pogleda do upita.",
    galleryLabel: "Oglasni vizuali",
    gallery: ["Privucite pozornost", "Izgradite povjerenje", "Potaknite upit"],
    posterTitles: ["SJAJ NIJE DOKAZ.", "PRVO PREGLED. ZATIM KOREKCIJA.", "VIDITE TRAGOVE NA LAKU?"],
    posterSubtitles: ["Otkrivanje tragova na površini.", "Pregled prethodi izboru postupka.", "Poziv na pregled vozila."],
    conceptTitle: "Kako kreativna ideja postaje upit.",
    story: [
      "Mnogo detailing oglasa govori o sjaju, ali vlasnika vozila često više zanima zašto na laku i nakon pranja ostaju vidljivi tragovi. Tu smo pronašli početak kampanje: sjaj nije dokaz stanja površine.",
      "Prvi oglas otvara pitanje i zaustavlja pogled. Drugi objašnjava zašto pregled dolazi prije korekcije i gradi povjerenje. Oglasi imaju različite kompozicije, ali isti sustav tipografije, boja i vizualnih oznaka.",
      "Treći oglas pretvara interes u jednostavan sljedeći korak: dogovoriti pregled vozila. To je osmišljena CTA putanja za konceptualni detailing studio, a ne tvrdnja o stvarnim upitima ili rezultatima.",
    ],
    deliverTitle: "Što smo izradili",
    deliver: ["Kreativna strategija i poruke", "3 oglasa · HR/EN", "Sustav tipografije i art direction", "CTA putanja prema upitu"],
    note: "Samostalna konceptualna kampanja, ne projekt stvarnog klijenta. Vizuali su digitalno generirani prikazi procesa, a ne stvarne fotografije izvedene usluge ili dokaz rezultata.",
    ctaTitle: "Vaša usluga zaslužuje kampanju s jasnim ciljem.",
    cta: "Zatražite koncept kampanje",
    close: "Zatvori pregled",
    prev: "Prethodni vizual",
    next: "Sljedeći vizual",
  },
  EN: {
    back: "Back to projects",
    badge: "Creative work / Concept project",
    title: "LIGHT REVEALS EVERYTHING.",
    lead: "A premium detailing concept that turns one question about paint condition into three steps: attention, trust and an enquiry.",
    galleryTitle: "From first impression to enquiry.",
    galleryLabel: "Advertising visuals",
    gallery: ["Capture attention", "Build trust", "Invite an enquiry"],
    posterTitles: ["SHINE ISN’T THE FULL PICTURE.", "INSPECT FIRST. THEN CORRECT.", "SEEING MARKS IN YOUR PAINT?"],
    posterSubtitles: ["Making surface marks visible.", "Assess before selecting a treatment.", "A clear invitation to book an inspection."],
    conceptTitle: "Turning a creative idea into an enquiry.",
    story: [
      "Most detailing ads promise shine. But a vehicle owner may be more concerned about marks that remain visible after washing. That insight became the starting point: shine alone is not evidence of paint condition.",
      "The first ad opens a question and earns attention. The second explains why inspection should come before correction. They use different compositions, tied together by a clear visual and typographic system.",
      "The third ad turns interest into one clear next step: booking an in-person vehicle inspection. This is a proposed conversion path for a concept studio, not a claim about real enquiries.",
    ],
    deliverTitle: "Project deliverables",
    deliver: ["Creative strategy and messaging", "3 ads · HR/EN", "Typography and art direction system", "Enquiry-focused CTA flow"],
    note: "Independent concept campaign, not commissioned client work. The visuals are digitally generated illustrations of the process, not photographs documenting a completed service or actual results.",
    ctaTitle: "Give your service a campaign with a clear objective.",
    cta: "Request a campaign concept",
    close: "Close gallery",
    prev: "Previous visual",
    next: "Next visual",
  },
} as const;

function MarketingCaseStudy() {
  const search = Route.useSearch();
  const lang: Locale = search.lang === "HR" ? "HR" : "EN";
  const copy = COPY[lang];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const steps = [0, 1, 2] as const;

  useEffect(() => {
    document.documentElement.lang = lang === "HR" ? "hr" : "en";
  }, [lang]);

  function open(i: number) {
    setActive(i);
    dialogRef.current?.showModal();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowRight") { event.preventDefault(); setActive((v) => (v + 1) % 3); }
    if (event.key === "ArrowLeft") { event.preventDefault(); setActive((v) => (v + 2) % 3); }
  }

  return (
    <main lang={lang === "HR" ? "hr" : "en"} className="min-h-screen bg-[#080a0d] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-white/10 px-4 py-5 sm:px-8">
        <a href="/" className="text-lg font-black tracking-tight">KRON.</a>
        <nav className="flex items-center gap-3 sm:gap-6">
          <a className="hidden text-xs text-white/60 transition-colors hover:text-white sm:inline" href={"/?lang=" + lang + "#showcase"}>{copy.back}</a>
          <div className="flex gap-1 rounded-full border border-white/15 p-1 text-xs" aria-label="Language">
            {(["HR", "EN"] as const).map((l) => (
              <a key={l} href={"/work/svjetlo-otkriva-sve?lang=" + l}
                aria-current={l === lang ? "page" : undefined}
                className={"rounded-full px-3 py-1.5 font-semibold " + (l === lang ? "bg-white text-black" : "text-white/60 hover:text-white")}>{l}</a>
            ))}
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.19em] text-accent">{copy.badge}</p>
          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[.99] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{copy.title}</h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{copy.lead}</p>
          <a href="#gallery" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">{copy.galleryTitle}<ArrowUpRight size={17}/></a>
        </div>
        <MarketingCampaignPhoto index={0} locale={lang} eager className="rounded-xl border border-white/10" />
      </section>

      <section id="gallery" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-5xl">{copy.galleryTitle}</h2>
            <span className="text-xs uppercase tracking-[0.18em] text-white/50">{copy.galleryLabel} / 01—03</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {steps.map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => open(index)}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left transition-all hover:-translate-y-1 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <MarketingCampaignPhoto index={index} locale={lang} className="w-full transition-transform duration-500 group-hover:scale-[1.015]" />
                <div className="flex items-center justify-between gap-4 p-5 text-sm">
                  <span>{String(index + 1).padStart(2, "0")} / {copy.gallery[index]}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 md:grid-cols-[.4fr_.6fr]">
          <h2 className="max-w-md text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">{copy.conceptTitle}</h2>
          <div className="max-w-2xl">
            {copy.story.map((p) => <p key={p} className="mb-6 text-base leading-8 text-white/65">{p}</p>)}
            <h3 className="mt-10 text-lg font-semibold">{copy.deliverTitle}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">{copy.deliver.map((item) => <li key={item} className="border-b border-white/10 pb-3 text-sm text-white/80">{item}</li>)}</ul>
            <p className="mt-10 text-xs leading-6 text-white/40">{copy.note}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 text-center sm:px-8">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{copy.ctaTitle}</h2>
        <a href={"/?lang=" + lang + "#contact"} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition-colors hover:bg-accent">{copy.cta}<ArrowUpRight size={17}/></a>
      </section>

      <dialog ref={dialogRef} onKeyDown={handleKeyDown} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}
        aria-label={copy.gallery[active]} className="fixed inset-0 m-auto max-h-[95vh] w-[min(94vw,780px)] max-w-none overflow-hidden rounded-xl border border-white/20 bg-[#07090b] p-0 text-white shadow-2xl backdrop:bg-black/90">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">{String(active + 1).padStart(2,"0")} / 03 · {copy.gallery[active]}</span>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label={copy.close} className="rounded-full p-2 hover:bg-white/10"><X size={20}/></button>
        </div>
        <div className="flex max-h-[calc(95vh-132px)] items-center justify-center overflow-auto bg-[#07090b]">
          <MarketingCampaignPhoto
            index={active as 0 | 1 | 2}
            locale={lang}
            className="mx-auto w-[min(100%,60vh)] max-w-[560px]"
          />
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2">
          <button type="button" onClick={() => setActive((a) => (a + 2) % 3)} aria-label={copy.prev} className="rounded-full p-2 hover:bg-white/10"><ArrowLeft size={20}/></button>
          <span className="text-xs text-white/50">{String(active + 1).padStart(2,"0")} / 03</span>
          <button type="button" onClick={() => setActive((a) => (a + 1) % 3)} aria-label={copy.next} className="rounded-full p-2 hover:bg-white/10"><ArrowRight size={20}/></button>
        </div>
      </dialog>
    </main>
  );
}
