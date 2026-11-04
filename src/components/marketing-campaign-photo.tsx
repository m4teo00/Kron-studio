import type { Locale } from "@/lib/site-copy";

const ADS = {
  HR: [
    {
      headline: "SJAJ NIJE\nDOKAZ.",
      kicker: "PREGLED LAKA",
      body: "Neke tragove na laku primijetite tek kada ih otkrije usmjereno svjetlo.",
      action: "PROVJERITE STANJE LAKA",
      alt: "Konceptualni oglas: pregled laka pod usmjerenim svjetlom",
    },
    {
      headline: "PRVO PREGLED.\nZATIM KOREKCIJA.",
      kicker: "KOREKCIJA LAKA",
      body: "Svaki lak je drukčiji. Prije odabira postupka potrebno je procijeniti stanje površine.",
      action: "ZATRAŽITE PREGLED",
      alt: "Konceptualni oglas: postupak korekcije laka",
    },
    {
      headline: "VIDITE TRAGOVE\nNA LAKU?",
      kicker: "ZAPOČNITE PREGLEDOM",
      body: "Dogovorite pregled i saznajte što vašem laku treba.",
      action: "DOGOVORITE PREGLED",
      alt: "Konceptualni oglas: fotografija automobila i poziv na procjenu",
    },
  ],
  EN: [
    {
      headline: "SHINE ISN'T\nTHE FULL PICTURE.",
      kicker: "PAINT INSPECTION",
      body: "Some marks only become visible when inspection lighting reveals them.",
      action: "CHECK YOUR PAINTWORK",
      alt: "Concept advert: paint under inspection lighting",
    },
    {
      headline: "INSPECT FIRST.\nTHEN CORRECT.",
      kicker: "PAINT CORRECTION",
      body: "Every paint finish is different. Assess the surface before choosing a treatment.",
      action: "REQUEST AN INSPECTION",
      alt: "Concept advert: precision paint correction process",
    },
    {
      headline: "SEEING MARKS\nIN YOUR PAINT?",
      kicker: "START WITH AN INSPECTION",
      body: "Book an inspection to explore the right next step.",
      action: "BOOK AN INSPECTION",
      alt: "Concept advert: car finish and assessment call to action",
    },
  ],
} as const;

const campaignName = {
  HR: "SVJETLO OTKRIVA SVE / KREATIVNI KONCEPT",
  EN: "LIGHT REVEALS ALL / CREATIVE CONCEPT",
} as const;

function ImagePanel({ index, className = "" }: { index: 0 | 1 | 2; className?: string }) {
  return <div
    aria-hidden="true"
    className={"absolute overflow-hidden bg-[#0b1518] " + className}
    style={{
      backgroundImage: "url('/marketing/detailing-story.svg')",
      backgroundSize: "300% auto",
      backgroundPosition: (index * 50) + "% 53%",
      backgroundRepeat: "no-repeat",
      filter: "grayscale(.73) saturate(.35) contrast(1.12)",
    }}
  />;
}

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
  const ad = ADS[locale][index];
  const isHR = locale === "HR";
  // A single visual grammar, but each ad has its own composition and funnel role.
  return (
    <div
      role="img"
      aria-label={ad.alt + ". " + ad.headline.replace("\n", " ") + ". " + ad.action}
      className={"relative aspect-[4/5] overflow-hidden " + className}
      style={{ containerType: "inline-size", backgroundColor: index === 0 ? "#0a1112" : "#eae9e3", isolation: "isolate" }}
    >
      <div className={"absolute left-[6%] right-[6%] top-[3%] z-20 flex items-center justify-between border-b pb-[2.8%] " + (index === 0 ? "border-white/35 text-[#f6f7f0]" : "border-[#1a201e]/25 text-[#202724]")}>
        <span className="font-semibold uppercase tracking-[.14em]" style={{ fontSize: "2.1cqw", lineHeight: 1.2 }}>{campaignName[locale]}</span>
        <span className="font-mono tracking-[.08em] opacity-55" style={{fontSize:"2.1cqw"}}>0{index + 1} / 03</span>
      </div>
      <div className={"absolute left-[6%] top-[9%] z-20 font-mono tracking-[.12em] " + (index === 0 ? "text-white/60" : "text-[#5a655c]")} style={{ fontSize: "1.8cqw" }}>
        {(isHR ? "KAMPANJA" : "CAMPAIGN") + "  /  0" + (index + 1) + "—03"}
      </div>
      {index === 0 && <>
        <ImagePanel index={0} className="inset-x-0 top-[31%] bottom-[24%]" />
        <div className="absolute inset-x-0 top-[31%] bottom-[24%] bg-gradient-to-b from-[#0a1112] via-transparent to-transparent" aria-hidden="true" />
        <h3 className="absolute left-[6%] right-[6%] top-[15%] z-20 whitespace-pre-line font-black uppercase tracking-[-.065em] text-[#f6f7f0]" style={{ fontSize: "11.8cqw", lineHeight: .96 }}>{ad.headline}</h3>

        <div className="absolute bottom-0 left-0 right-0 h-[24%] bg-[#eae9e3] px-[6%] pt-[4%] text-[#19211e]">
          <p className="font-semibold uppercase tracking-[.13em] text-[#667066]" style={{ fontSize: "2.3cqw" }}>{ad.kicker}</p>
          <p className="mt-[3%] font-medium leading-[1.36]" style={{ fontSize: "3.5cqw" }}>{ad.body}</p>
          <div className="absolute bottom-[7%] left-[6%] right-[6%] flex items-center justify-between border-t border-[#8e988f] pt-[3%]">
            <span className="font-bold uppercase tracking-[.035em]" style={{ fontSize: "2.75cqw" }}>{ad.action}</span>
            <span style={{ fontSize: "4cqw" }}>↗</span>
          </div>
        </div>
      </>}
      {index === 1 && <>
        <ImagePanel index={1} className="left-0 top-[18%] bottom-0 w-[52%]" />
        <div className="absolute bottom-0 left-0 top-[86%] w-[52%] bg-[#0b1111] px-[5%] pt-[3%]">
          <p className="font-mono tracking-[.08em] text-white/55" style={{ fontSize: "1.9cqw" }}>02 / {isHR ? "OBRADA POVRŠINE" : "SURFACE CORRECTION"}</p>
          <p className="mt-[5%] border-t border-white/25 pt-[4%] font-bold uppercase text-white" style={{ fontSize: "2.65cqw" }}>{ad.kicker}</p>
        </div>
        <div className="absolute bottom-0 right-0 top-[18%] w-[48%] bg-[#eae9e3] px-[4%] pt-[8%] text-[#17201d]">
          <h3 className="whitespace-pre-line font-black uppercase tracking-[-.055em]" style={{ fontSize: "5.2cqw", lineHeight: 1.07 }}>{ad.headline}</h3>
          <div className="my-[5%] h-[.65cqw] w-[25%] bg-[#17201d]" aria-hidden="true"/>
          <p className="font-medium leading-[1.35] text-[#46544b]" style={{ fontSize: "2.95cqw" }}>{ad.body}</p>
          <div className="absolute bottom-[15%] left-[8%] right-[8%]">
            {([isHR ? "PREGLED" : "INSPECTION", isHR ? "PLAN" : "PLAN", isHR ? "KOREKCIJA" : "CORRECTION"] as string[]).map((p,i)=>
              <div key={p} className="flex items-center gap-[8%] border-t border-[#a8ada5] py-[2%] font-semibold uppercase" style={{ fontSize: "2.15cqw" }}>
                <span className="font-mono font-normal text-[#7e857c]">0{i+1}</span>{p}
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex min-h-[13%] items-center justify-between gap-[4%] bg-[#c6f36d] px-[8%] py-[5%]">
            <span className="font-bold uppercase leading-tight tracking-[-.01em]" style={{ fontSize: "2.8cqw" }}>{ad.action}</span>
            <span style={{ fontSize: "3.5cqw" }}>↗</span>
          </div>
        </div>
      </>}
      {index === 2 && <>
        {/* Dedicated headline area; nothing overlaps the CTA. */}
        <div className="absolute inset-x-0 top-[14%] flex h-[28%] flex-col justify-start gap-[8%] px-[6%] text-[#151d19]">
          <h3 className="whitespace-pre-line font-black uppercase tracking-[-.045em]" style={{ fontSize: "8.8cqw", lineHeight: 1.02 }}>{ad.headline}</h3>
          <p className="font-semibold uppercase tracking-[.13em] text-[#6e756d]" style={{ fontSize: "2.2cqw" }}>{ad.kicker}</p>
        </div>
        <ImagePanel index={2} className="inset-x-0 top-[43%] bottom-[21%]" />
        {/* Fixed footer area with separate copy and action, using a vertical stack. */}
        <div className="absolute inset-x-0 bottom-0 flex h-[21%] flex-col justify-between bg-[#eae9e3] px-[6%] py-[3.5%] text-[#142018]">
          <p className="font-medium leading-[1.23]" style={{ fontSize: "3.1cqw" }}>{ad.body}</p>
          <div className="flex items-center justify-between gap-[4%] border-t border-[#777f76] pt-[3%]">
            <span className="font-bold uppercase tracking-[.03em]" style={{ fontSize: "3.05cqw" }}>{ad.action}</span>
            <span aria-hidden="true" style={{ fontSize: "4.4cqw" }}>↗</span>
          </div>
        </div>
      </>}
    </div>
  );
}
