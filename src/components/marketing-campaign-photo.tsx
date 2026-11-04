import type { Locale } from "@/lib/site-copy";

const CAMPAIGN_STEPS = {
  HR: [
    {
      headline: "SVJETLO OTKRIVA SVE.",
      subtitle: "PREGLED LAKA",
      alt: "Konceptualni prikaz inspekcije laka crnog automobila pod kontroliranim svjetlom",
    },
    {
      headline: "KOREKCIJA LAKA.",
      subtitle: "PRECIZNA OBRADA POVRŠINE",
      alt: "Konceptualni prikaz detaljera koji polirkom obrađuje lak automobila",
    },
    {
      headline: "ZAVRŠNA PROVJERA.",
      subtitle: "KONTROLA ODRAZA",
      alt: "Konceptualni prikaz obrađene površine automobila pod kontroliranim svjetlom",
    },
  ],
  EN: [
    {
      headline: "LIGHT REVEALS EVERYTHING.",
      subtitle: "PAINT INSPECTION",
      alt: "Concept image showing black automotive paint under inspection lighting",
    },
    {
      headline: "PAINT CORRECTION.",
      subtitle: "PRECISION SURFACE WORK",
      alt: "Concept image of a detailer polishing a car panel",
    },
    {
      headline: "FINAL INSPECTION.",
      subtitle: "REFLECTION CHECK",
      alt: "Concept image showing the finish of a black car under studio lighting",
    },
  ],
} as const;

export function MarketingCampaignPhoto({
  index,
  locale,
  eager = false,
  className = "",
}: {
  index: 0 | 1 | 2;
  locale: Locale;
  eager?: boolean;
  className?: string;
}) {
  const copy = CAMPAIGN_STEPS[locale][index];
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-[#080b0e] ${className}`}>
      <img
        src="/marketing/detailing-story.svg"
        alt={copy.alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
        width={1500}
        height={750}
        className="absolute top-0 h-full max-w-none object-cover"
        style={{ width: "300%", left: `-${index * 100}%` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020406]/90 via-[#020406]/10 via-45% to-[#020406]/45"
      />
      <div className="pointer-events-none absolute left-[7%] right-[7%] top-[7%]">
        <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
          {String(index + 1).padStart(2, "0")} / 03
        </p>
        <h3 className="max-w-[94%] text-[clamp(1.1rem,3.1vw,2.3rem)] font-black uppercase leading-[1.1] tracking-[-0.035em] text-white">
          {copy.headline}
        </h3>
        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-xs">
          {copy.subtitle}
        </p>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[6%] left-[7%] right-[7%] border-t border-white/35 pt-3 text-[9px] font-medium uppercase tracking-[0.14em] text-white/70">
        {locale === "HR" ? "Kreativni koncept / Premium detailing" : "Creative concept / Premium detailing"}
      </div>
    </div>
  );
}
