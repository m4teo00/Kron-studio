import type { Locale } from "@/lib/site-copy";
import { ArrowUpRight } from "lucide-react";
import { MarketingCampaignPhoto } from "@/components/marketing-campaign-photo";

const COPY = {
  HR: {
    eyebrow: "Kreativni radovi / Konceptualna kampanja",
    title: "SVJETLO OTKRIVA SVE.",
    text: "Tri oglasa povezuju konkretan problem, stručan postupak i poziv na pregled vozila.",
    action: "Istražite kampanju",
    note: "Kreativni koncept · 3 oglasa · HR/EN · CTA",
    alt: "Konceptualna kampanja za premium detailing",
  },
  EN: {
    eyebrow: "Creative work / Concept campaign",
    title: "LIGHT REVEALS EVERYTHING.",
    text: "Three connected ads move from a real paintwork problem to the service and a clear invitation to book an inspection.",
    action: "Explore the campaign",
    note: "Creative concept · 3 ads · HR/EN · CTA",
    alt: "Premium automotive detailing concept campaign",
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
          <MarketingCampaignPhoto index={0} locale={locale} className="absolute inset-0 !aspect-auto transition-transform duration-700 group-hover:scale-[1.025]" />
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
