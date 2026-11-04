import type { Locale } from "@/lib/site-copy";
import { ArrowUpRight } from "lucide-react";

const COPY = {
  HR: {
    eyebrow: "Kreativni radovi / Konceptualna kampanja",
    title: "SVJETLO OTKRIVA SVE.",
    text: "Kampanja za premium njegu automobila, izgrađena oko jednog prepoznatljivog trenutka — provjere završne obrade pod kontroliranim svjetlom.",
    action: "Istražite kampanju",
    note: "Kreativni koncept · 3 oglasna vizuala",
    alt: "Fotografija crnog automobila u studiju, vizual konceptualne kampanje",
  },
  EN: {
    eyebrow: "Creative work / Concept campaign",
    title: "LIGHT REVEALS EVERYTHING.",
    text: "A premium automotive detailing concept built around one unmistakable moment — inspecting the finish under controlled light.",
    action: "Explore the campaign",
    note: "Creative concept · 3 advertising visuals",
    alt: "Photograph of a black car in a studio for a conceptual campaign",
  },
} as const;

export function MarketingCampaignPreview({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <div className="mt-16 border-t border-border pt-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        {c.eyebrow}
      </p>
      <a
        href={"/work/svjetlo-otkriva-sve?lang=" + locale}
        className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:grid-cols-[0.42fr_0.58fr]"
      >
        <div className="relative min-h-[300px] overflow-hidden bg-[#090d11] sm:min-h-[400px]">
          <img
            src="https://images.pexels.com/photos/6969032/pexels-photo-6969032.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt={c.alt}
            loading="lazy"
            decoding="async"
            width={1080}
            height={1350}
            className="absolute inset-0 h-full w-full object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-[1.025]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090c]/60 via-transparent to-black/35" />
        </div>
        <div className="flex flex-col justify-center px-6 py-12 sm:px-9 lg:px-14">
          <span className="mb-6 inline-flex w-fit rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            {locale === "HR" ? "Konceptualni projekt" : "Concept project"}
          </span>
          <h3 className="max-w-xl text-3xl font-semibold uppercase leading-tight tracking-[-0.045em] text-white sm:text-4xl">
            {c.title}
          </h3>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">{c.text}</p>
          <p className="mt-7 text-xs font-medium uppercase tracking-[0.14em] text-white/50">{c.note}</p>
          <span className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-accent">
            {c.action} <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </div>
      </a>
    </div>
  );
}
