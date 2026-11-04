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
    lead: "Koncept kampanje za premium detailing studio. Tri kadra prate ono što profesionalna korekcija laka podrazumijeva: pregled, obradu i završnu provjeru.",
    galleryTitle: "Jedna ideja. Tri precizna kadra.",
    galleryLabel: "Oglasni vizuali",
    gallery: ["Pregled laka", "Korekcija laka", "Završna provjera"],
    posterTitles: ["SVJETLO OTKRIVA SVE.", "KOREKCIJA LAKA.", "ZAVRŠNA PROVJERA."],
    posterSubtitles: ["Svjetlo otkriva stanje površine.", "Precizan rad pod kontroliranim svjetlom.", "Odraz potvrđuje završnu obradu."],
    conceptTitle: "Ideja koja proizlazi iz same usluge.",
    story: [
      "U oglašavanju automobilske njege često se ponavljaju iste poruke o sjaju i čistoći. Za ovaj koncept krenuli smo od konkretne radnje koju profesionalci koriste pri provjeri površine — promatranja laka pod kontroliranim svjetlom.",
      "Uska linija svjetla otkriva ono što je pri običnom pogledu lako previdjeti. Taj je trenutak postao središte kampanje: od kratkog naslova do kontrasta, kompozicije i precizne tipografije.",
      "Kampanja se razvija kroz tri povezana kadra: pregled površine, korekciju laka i završnu provjeru. Svaki kadar ima jasnu ulogu, a sve ih povezuje isto kontrolirano svjetlo.",
    ],
    deliverTitle: "Što smo izradili",
    deliver: ["Kreativni koncept i slogan", "3 oglasa za društvene mreže", "Art direction i tekstovi", "Dvojezični portfolio prikaz"],
    note: "Samostalna konceptualna kampanja, ne projekt stvarnog klijenta. Vizuali su digitalno generirani prikazi procesa, a ne stvarne fotografije izvedene usluge ili dokaz rezultata.",
    ctaTitle: "Vaš proizvod zaslužuje jasnu ideju.",
    cta: "Razgovarajmo o kampanji",
    close: "Zatvori pregled",
    prev: "Prethodni vizual",
    next: "Sljedeći vizual",
  },
  EN: {
    back: "Back to projects",
    badge: "Creative work / Concept project",
    title: "LIGHT REVEALS EVERYTHING.",
    lead: "A premium detailing campaign concept. Three connected frames follow the process: inspection, correction and final quality control.",
    galleryTitle: "One idea. Three precise frames.",
    galleryLabel: "Advertising visuals",
    gallery: ["Paint inspection", "Paint correction", "Final inspection"],
    posterTitles: ["LIGHT REVEALS EVERYTHING.", "PAINT CORRECTION.", "FINAL INSPECTION."],
    posterSubtitles: ["Inspection light reveals the surface.", "Controlled, precise paint correction.", "The reflection confirms the finish."],
    conceptTitle: "An idea rooted in the service itself.",
    story: [
      "Automotive detailing ads often rely on the same promises of shine and cleanliness. This concept starts with an action professionals actually use to assess the finish: examining paintwork under controlled light.",
      "A narrow strip of light reveals what an everyday glance can miss. We built the campaign around that moment, from the concise headline to the contrast, composition and typography.",
      "The campaign unfolds in three connected frames: surface inspection, paint correction and final quality control. Each frame has a distinct purpose, linked by the same controlled light.",
    ],
    deliverTitle: "Project deliverables",
    deliver: ["Creative idea and campaign line", "3 social media advertisements", "Art direction and copywriting", "Bilingual portfolio presentation"],
    note: "Independent concept campaign, not commissioned client work. The visuals are digitally generated illustrations of the process, not photographs documenting a completed service or actual results.",
    ctaTitle: "Your product deserves a clear idea.",
    cta: "Discuss a campaign",
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
