export type Locale = "EN" | "HR";

export interface SiteCopy {
  navigation: string[];
  headerCta: string;
  languageLabel: string;
  menuOpen: string;
  menuClose: string;
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    cta: string;
  };
  services: {
    badge: string;
    heading: string;
    cards: { title: string; body: string; imageAlt: string }[];
  };
  work: { badge: string; heading: string };
  process: {
    badge: string;
    heading: string;
    phaseLabel: string;
    phases: { title: string; body: string }[];
  };
  faq: { badge: string; heading: string; items: { question: string; answer: string }[] };
  inquiry: {
    badge: string;
    heading: string;
    description: string;
    received: string;
    response: string;
    formTitle: string;
    formLabels: { name: string; website: string; contact: string; message: string };
    placeholders: { name: string; website: string; contact: string; message: string };
    submit: string;
  };
  footer: string;
  carousel: {
    region: string;
    selectedWork: string;
    chooseProject: string;
    showProject: string;
    howBuilt: string;
    liveDemo: string;
    paused: string;
    autoPlay: string;
    pause: string;
    resume: string;
    previous: string;
    next: string;
    projects: {
      apex: {
        badge: string;
        category: string;
        title: string;
        description: string;
        imageAlt: string;
        stats: string[];
      };
      kelava: {
        badge: string;
        category: string;
        title: string;
        description: string;
        imageAlt: string;
        stats: string[];
      };
    };
  };
}

export const SITE_COPY: Record<Locale, SiteCopy> = {
  EN: {
    navigation: ["Services", "Work", "Process", "Contact"],
    headerCta: "Book 5-Min Intro Call",
    languageLabel: "Choose language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    hero: {
      badge: "High-Performance Web Architecture",
      headline: "We build zero-latency digital platforms for ambitious brands.",
      subtitle:
        "Next.js, Tailwind CSS, and Edge CDN solutions focused on speed, aesthetic precision, and mobile conversion.",
      cta: "Book 5-Min Intro Call",
    },
    services: {
      badge: "Core Expertise",
      heading: "Systems we build.",
      cards: [
        {
          title: "Bespoke Web Architecture",
          body: "Custom React / Next.js platforms built from scratch for lightning performance and conversion.",
          imageAlt: "Website analytics dashboard with performance metrics",
        },
        {
          title: "Instagram Direct Response Systems",
          body: "Always-on lead intake via DM & comments. Converts social engagement and story replies directly into structured client inquiries.",
          imageAlt: "Instagram content and direct response campaign",
        },
        {
          title: "Visual Brand Identity",
          body: "Complete luxury design systems, editorial typography, color theory and digital guidelines.",
          imageAlt: "Editorial brand identity and design guidelines",
        },
      ],
    },
    work: { badge: "Selected Work", heading: "Crafted for Speed & Conversion" },
    process: {
      badge: "The KRON 4-Step Engineering Protocol",
      heading: "Our Methodology: From Blueprint to Launch",
      phaseLabel: "Phase",
      phases: [
        {
          title: "Strategy & Digital Blueprint",
          body: "In-depth analysis of business objectives, conversion funnels and customer journeys. We map out a bespoke architectural blueprint designed to convert visitors into clients.",
        },
        {
          title: "Visual & Interface Engineering",
          body: "Custom Swiss-editorial design crafted from scratch. High-contrast typography, brand elements and fluid layouts with zero generic templates.",
        },
        {
          title: "Full-Stack Development & Pipeline Setup",
          body: "Custom Next.js / React engineering with sub-second performance. In parallel we configure the 24/7 Instagram DM & comment lead routing system.",
        },
        {
          title: "Rigorous QA & 100% Asset Ownership Handoff",
          body: "Comprehensive cross-device testing, speed optimization and live deployment. Full transfer of code, digital assets — zero agency lock-in.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      heading: "Essentials.",
      items: [
        {
          question: "How long does a typical project take?",
          answer:
            "Most bespoke web platforms and Instagram pipelines are delivered fully functional in 7 to 14 days.",
        },
        {
          question: "Do I own the platform after launch?",
          answer:
            "Yes. You receive 100% full ownership of the code, digital assets, and infrastructure.",
        },
        {
          question: "How do we get started?",
          answer:
            "Fill out the private inquiry form below. We review your goals and get back to you within 24 hours.",
        },
      ],
    },
    inquiry: {
      badge: "Executive Private Inquiry",
      heading: "Let's discuss your next digital platform.",
      description:
        "Direct communication. No intermediate account managers. Tell us about your project scope.",
      received: "Inquiry Received.",
      response: "Our engineering team will review your site and respond within 24 hours.",
      formTitle: "PRIVATE INQUIRY",
      formLabels: {
        name: "Name / Company",
        website: "Current Website URL",
        contact: "Email",
        message: "Project Scope & Goals",
      },
      placeholders: {
        name: "Your Name",
        website: "https://yourwebsite.com",
        contact: "Your Email",
        message: "Project details or questions...",
      },
      submit: "Send Inquiry",
    },
    footer: "Digital Architecture & Growth Studio",
    carousel: {
      region: "Featured studio projects",
      selectedWork: "Selected Work",
      chooseProject: "Choose featured project",
      showProject: "Show project",
      howBuilt: "How it was built",
      liveDemo: "Launch Live Demo",
      paused: "Paused",
      autoPlay: "Auto play · 5 sec",
      pause: "Pause carousel",
      resume: "Resume carousel",
      previous: "Previous featured project",
      next: "Next featured project",
      projects: {
        apex: {
          badge: "Concept & Prototype No. 01",
          category: "Architectural Showcase & Infrastructure",
          title: "APEX — High-Performance Architectural Engine",
          description:
            "Built as the foundational internal benchmark for KRON Digital Studio. Demonstrates how complex architectural renders load instantly with zero layout shifts via Next.js React Server Components.",
          imageAlt: "Modern architectural residence framed by trees at dusk",
          stats: ["< 0.8s Load", "Next.js RSC", "Zero Layout Shift"],
        },
        kelava: {
          badge: "Client Case Study · Heritage & Craft",
          category: "Local Business Platform",
          title: "Restauracija Kelava — Custom Craft & Restoration",
          description:
            "High-conversion digital platform engineered for a specialized furniture restoration business. Built to solve high-resolution image rendering bottlenecks and deliver direct mobile WhatsApp/Call leads.",
          imageAlt: "Carefully crafted furniture in a warm, contemporary interior",
          stats: ["99/100 Lighthouse", "< 0.8s Load", "Mobile Lead Optimized"],
        },
      },
    },
  },
  HR: {
    navigation: ["Usluge", "Radovi", "Proces", "Kontakt"],
    headerCta: "Dogovori 5-Min Poziv",
    languageLabel: "Odaberite jezik",
    menuOpen: "Otvori izbornik",
    menuClose: "Zatvori izbornik",
    hero: {
      badge: "Web Arhitektura Visokih Performansi",
      headline: "Gradimo ultra-brze digitalne platforme za ambiciozne brendove.",
      subtitle:
        "Next.js, Tailwind CSS i Edge CDN rješenja fokusirana na brzinu, estetsku preciznost i mobilne konverzije.",
      cta: "Dogovori 5-Min Poziv",
    },
    services: {
      badge: "Naša Stručnost",
      heading: "Sustavi koje gradimo.",
      cards: [
        {
          title: "Prilagođena web arhitektura",
          body: "React / Next.js platforme izrađene od nule za vrhunske performanse i konverzije.",
          imageAlt: "Nadzorna ploča web analitike s pokazateljima performansi",
        },
        {
          title: "Instagram sustavi izravnog odgovora",
          body: "Stalan priljev upita putem poruka i komentara. Pretvara angažman na društvenim mrežama u strukturirane upite klijenata.",
          imageAlt: "Instagram sadržaj i kampanja izravnog odgovora",
        },
        {
          title: "Vizualni identitet brenda",
          body: "Cjeloviti luksuzni dizajnerski sustavi, urednička tipografija, teorija boja i digitalne smjernice.",
          imageAlt: "Urednički vizualni identitet brenda i dizajnerske smjernice",
        },
      ],
    },
    work: { badge: "Odabrani Radovi", heading: "Izrađeno za Brzinu i Konverziju" },
    process: {
      badge: "KRON-ov inženjerski proces u 4 koraka",
      heading: "Naša metodologija: od nacrta do lansiranja",
      phaseLabel: "Faza",
      phases: [
        {
          title: "Strategija i digitalni nacrt",
          body: "Detaljna analiza poslovnih ciljeva, prodajnih tokova i korisničkih putovanja. Izrađujemo prilagođeni arhitektonski nacrt koji posjetitelje pretvara u klijente.",
        },
        {
          title: "Vizualni dizajn i razvoj sučelja",
          body: "Jedinstven dizajn u švicarskom uredničkom stilu. Izražajna tipografija, elementi brenda i fluidni rasporedi bez generičkih predložaka.",
        },
        {
          title: "Full-stack razvoj i postavljanje sustava upita",
          body: "Razvoj u Next.jsu i Reactu s učitavanjem kraćim od sekunde. Paralelno postavljamo Instagram sustav za usmjeravanje upita putem poruka i komentara.",
        },
        {
          title: "Temeljito testiranje i potpuna predaja imovine",
          body: "Testiranje na svim uređajima, optimizacija brzine i objava. Preuzimate sav kod i digitalnu imovinu — bez vezivanja uz agenciju.",
        },
      ],
    },
    faq: {
      badge: "ČPP",
      heading: "Najvažnije informacije.",
      items: [
        {
          question: "Koliko obično traje projekt?",
          answer:
            "Većina prilagođenih web platformi i Instagram sustava upita spremna je za rad u roku od 7 do 14 dana.",
        },
        {
          question: "Postaje li platforma moja nakon objave?",
          answer:
            "Da. Dobivate potpuno vlasništvo nad kodom, digitalnom imovinom i infrastrukturom.",
        },
        {
          question: "Kako možemo započeti?",
          answer:
            "Ispunite obrazac za privatni upit u nastavku. Pregledat ćemo vaše ciljeve i odgovoriti u roku od 24 sata.",
        },
      ],
    },
    inquiry: {
      badge: "Privatni Upit za Suradnju",
      heading: "Razgovarajmo o vašoj sljedećoj digitalnoj platformi.",
      description:
        "Izravna komunikacija, bez posrednika. Recite nam više o opsegu svojeg projekta.",
      received: "Upit je zaprimljen.",
      response: "Naš inženjerski tim pregledat će vašu stranicu i odgovoriti u roku od 24 sata.",
      formTitle: "PRIVATNI UPIT",
      formLabels: {
        name: "Ime / Tvrtka",
        website: "Trenutni URL web-stranice",
        contact: "E-pošta",
        message: "Opseg projekta i ciljevi",
      },
      placeholders: {
        name: "Vaše Ime",
        website: "https://vasastranica.com",
        contact: "Vaš Email",
        message: "Detalji projekta ili pitanja...",
      },
      submit: "Pošalji Upit",
    },
    footer: "Studio za digitalnu arhitekturu i rast",
    carousel: {
      region: "Istaknuti projekti studija",
      selectedWork: "Odabrani radovi",
      chooseProject: "Odaberite istaknuti projekt",
      showProject: "Prikaži projekt",
      howBuilt: "Kako je izrađeno",
      liveDemo: "Otvori demo uživo",
      paused: "Zaustavljeno",
      autoPlay: "Automatski prikaz · 5 s",
      pause: "Zaustavi vrtuljak projekata",
      resume: "Nastavi vrtuljak projekata",
      previous: "Prethodni istaknuti projekt",
      next: "Sljedeći istaknuti projekt",
      projects: {
        apex: {
          badge: "Koncept i prototip br. 01",
          category: "Arhitektonska prezentacija i infrastruktura",
          title: "APEX — arhitektonska platforma visokih performansi",
          description:
            "Izrađen kao temeljni interni standard za KRON Digital Studio. Pokazuje kako se složeni arhitektonski prikazi učitavaju trenutačno, bez pomicanja sadržaja, uz Next.js React Server Components.",
          imageAlt: "Suvremena arhitektonska kuća okružena drvećem u sumrak",
          stats: ["Učitavanje < 0,8 s", "Next.js RSC", "Bez pomicanja sadržaja"],
        },
        kelava: {
          badge: "Studija slučaja · Baština i obrt",
          category: "Platforma za lokalno poslovanje",
          title: "Restauracija Kelava — obnova namještaja i ručni rad",
          description:
            "Digitalna platforma visokih konverzija za specijalizirani obrt za restauraciju namještaja. Uklanja uska grla pri prikazu fotografija visoke rezolucije i omogućuje izravne upite putem WhatsAppa i poziva s mobitela.",
          imageAlt: "Pažljivo izrađen namještaj u toplom, suvremenom interijeru",
          stats: ["Lighthouse 99/100", "Učitavanje < 0,8 s", "Upiti s mobitela"],
        },
      },
    },
  },
};
