export type Locale = "EN" | "HR";

type ProjectCopy = {
  badge: string;
  category: string;
  title: string;
  description: string;
  imageAlt: string;
  stats: string[];
};

export interface SiteCopy {
  navigation: string[];
  languageLabel: string;
  menuOpen: string;
  menuClose: string;
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    projectsCta: string;
    quoteCta: string;
  };
  services: {
    badge: string;
    heading: string;
    cards: { title: string; body: string }[];
  };
  growth: { badge: string; heading: string; body: string };
  work: {
    badge: string;
    heading: string;
    creativeTitle: string;
    comingSoon: string;
    concepts: string[];
  };
  process: {
    badge: string;
    heading: string;
    phaseLabel: string;
    phases: { title: string; body: string }[];
  };
  faq: { badge: string; heading: string; items: { question: string; answer: string }[] };
  founder: {
    title: string;
    name: string;
    bio: string;
    cta: string;
    imageAlt: string;
  };
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
    projects: { cavaliero: ProjectCopy; kelava: ProjectCopy; apex: ProjectCopy };
  };
}

export const SITE_COPY: Record<Locale, SiteCopy> = {
  EN: {
    navigation: ["Services", "Work", "Approach", "Contact"],
    languageLabel: "Choose language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    hero: {
      badge: "Digital solutions for growing businesses",
      headline: "Your business deserves more than just an online presence.",
      subtitle:
        "We build websites, business apps, marketing campaigns and AI solutions that help attract customers, make a stronger impression and save time.",
      projectsCta: "View Projects",
      quoteCta: "Request a Quote",
    },
    services: {
      badge: "What we do",
      heading: "Practical digital solutions, made for your business.",
      cards: [
        {
          title: "Websites",
          body: "Modern, fast, mobile-friendly websites that build trust and make it easier for people to get in touch.",
        },
        {
          title: "Business Applications",
          body: "Ordering, booking, customer management and inventory tools shaped around the way your business works.",
        },
        {
          title: "Digital Marketing",
          body: "Social campaigns, advertising visuals and creative content—supported by a strategy with a clear purpose.",
        },
        {
          title: "AI Agents & Automation",
          body: "Helpful customer support, lead collection, product recommendations and repetitive tasks handled automatically.",
        },
      ],
    },
    growth: {
      badge: "Digital growth",
      heading: "Your customers are already online. Are you where they look?",
      body: "A first impression often happens before the first conversation. A quality website builds trust, good marketing earns attention, and thoughtful digital tools make everyday work easier. We bring these pieces together in solutions shaped around your business.",
    },
    work: {
      badge: "Selected work",
      heading: "Digital work with a clear purpose.",
      creativeTitle: "Creative Work",
      comingSoon: "Coming soon",
      concepts: ["Automotive Campaign · Concept", "Hospitality Campaign · Concept"],
    },
    process: {
      badge: "A clear, collaborative process",
      heading: "From your first idea to a solution that works.",
      phaseLabel: "Step",
      phases: [
        {
          title: "Understand the goal",
          body: "We learn about your business, your customers and what you want to improve before recommending a direction.",
        },
        {
          title: "Shape the experience",
          body: "We plan the structure and visual direction around your brand, your audience and the task at hand.",
        },
        {
          title: "Build and refine",
          body: "We develop the agreed solution, share progress and refine the details with your feedback.",
        },
        {
          title: "Launch with confidence",
          body: "We test the experience across devices, help you go live and make sure you know how to move forward.",
        },
      ],
    },
    faq: {
      badge: "Frequently asked questions",
      heading: "A few things worth knowing.",
      items: [
        {
          question: "How long does a project take?",
          answer:
            "Every project is different. After we understand the scope, we will share a realistic timeline before work begins.",
        },
        {
          question: "Will the solution fit the way my business works?",
          answer:
            "Yes. We start by understanding your goals and day-to-day needs, then shape the right solution around them.",
        },
        {
          question: "How do I get started?",
          answer:
            "Tell us a little about your idea or challenge using the inquiry form. We will get back to you to discuss the next step.",
        },
      ],
    },
    founder: {
      title: "Your digital partner",
      name: "Mateo Kelava",
      bio: "I help businesses make a thoughtful, confident move online. From the first conversation to launch, you work directly with me and get a solution shaped around what your business actually needs.",
      cta: "Let’s talk about your project",
      imageAlt: "KRON Studio founder Mateo Kelava",
    },
    inquiry: {
      badge: "Start a conversation",
      heading: "Tell us what you would like to improve.",
      description:
        "Have an idea or a problem you want to solve? Tell us what you need and we will find the right solution.",
      received: "Your message has been received.",
      response: "Thank you for reaching out. We will be in touch to discuss your project.",
      formTitle: "Project inquiry",
      formLabels: {
        name: "Name / Company",
        website: "Current website (optional)",
        contact: "Email",
        message: "What do you need?",
      },
      placeholders: {
        name: "Your name or company",
        website: "https://yourwebsite.com",
        contact: "you@example.com",
        message: "Tell us about your idea or challenge…",
      },
      submit: "Request a Quote",
    },
    footer: "Digital solutions for growing businesses",
    carousel: {
      region: "Featured studio projects",
      selectedWork: "Selected work",
      chooseProject: "Choose featured project",
      showProject: "Show project",
      howBuilt: "How It Was Built",
      liveDemo: "View Live Website",
      paused: "Paused",
      autoPlay: "Auto-advance · 5 sec",
      pause: "Pause carousel",
      resume: "Resume carousel",
      previous: "Previous project",
      next: "Next project",
      projects: {
        cavaliero: {
          badge: "Real Client Project",
          category: "Web Design & Development",
          title: "Cavaliero — Restaurant & Apartments",
          description:
            "A modern bilingual website presenting the restaurant, atmosphere and apartments through elegant design, fast loading and seamless reservation contact.",
          imageAlt: "Screenshot of the Cavaliero restaurant and apartments website homepage",
          stats: ["Real client project", "Bilingual website", "Restaurant & apartments"],
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
        apex: {
          badge: "Concept & Prototype No. 01",
          category: "Architectural Showcase & Infrastructure",
          title: "APEX — High-Performance Architectural Engine",
          description:
            "Built as the foundational internal benchmark for KRON Digital Studio. Demonstrates how complex architectural renders load instantly with zero layout shifts via Next.js React Server Components.",
          imageAlt: "Modern architectural residence framed by trees at dusk",
          stats: ["< 0.8s Load", "Next.js RSC", "Zero Layout Shift"],
        },
      },
    },
  },
  HR: {
    navigation: ["Usluge", "Projekti", "Pristup", "Kontakt"],
    languageLabel: "Odaberite jezik",
    menuOpen: "Otvori izbornik",
    menuClose: "Zatvori izbornik",
    hero: {
      badge: "Digitalna rješenja za rast poslovanja",
      headline: "Vaše poslovanje zaslužuje više od same prisutnosti na internetu.",
      subtitle:
        "Izrađujemo web-stranice, poslovne aplikacije, marketinške kampanje i AI rješenja koja pomažu privući klijente, ostaviti bolji dojam i uštedjeti vrijeme.",
      projectsCta: "Pogledajte projekte",
      quoteCta: "Zatražite ponudu",
    },
    services: {
      badge: "Čime se bavimo",
      heading: "Digitalna rješenja koja odgovaraju vašem poslovanju.",
      cards: [
        {
          title: "Web-stranice",
          body: "Moderne, brze i prilagođene mobitelima — web-stranice koje grade povjerenje i olakšavaju slanje upita.",
        },
        {
          title: "Poslovne aplikacije",
          body: "Sustavi za naručivanje, rezervacije, upravljanje klijentima i zalihama, prilagođeni načinu rada vašeg poslovanja.",
        },
        {
          title: "Digitalni marketing",
          body: "Kampanje na društvenim mrežama, oglasni vizuali i kreativni sadržaj uz strategiju koja ima jasan cilj.",
        },
        {
          title: "AI agenti i automatizacije",
          body: "Korisnička podrška, prikupljanje upita, preporuke proizvoda i ponavljajući zadaci — uz pomoć automatizacije.",
        },
      ],
    },
    growth: {
      badge: "Digitalni rast",
      heading: "Vaši klijenti već su online. Jeste li vi tamo gdje vas traže?",
      body: "Prvi dojam često nastaje prije prvog razgovora. Kvalitetna web-stranica gradi povjerenje, dobar marketing privlači pažnju, a pametna digitalna rješenja olakšavaju svakodnevni posao. Mi sve to povezujemo u rješenja prilagođena vašem poslovanju.",
    },
    work: {
      badge: "Odabrani radovi",
      heading: "Digitalni projekti s jasnom svrhom.",
      creativeTitle: "Kreativni radovi",
      comingSoon: "U pripremi",
      concepts: ["Automobilska kampanja · Koncept", "Ugostiteljska kampanja · Koncept"],
    },
    process: {
      badge: "Jasan i suradnički proces",
      heading: "Od prve ideje do rješenja koje funkcionira.",
      phaseLabel: "Korak",
      phases: [
        {
          title: "Razumijevanje cilja",
          body: "Upoznajemo vaše poslovanje, klijente i ono što želite unaprijediti prije nego što predložimo smjer.",
        },
        {
          title: "Oblikovanje iskustva",
          body: "Planiramo strukturu i vizualni smjer prema vašem brendu, publici i konkretnom cilju.",
        },
        {
          title: "Izrada i dorada",
          body: "Razvijamo dogovoreno rješenje, redovito dijelimo napredak i dorađujemo ga uz vaše povratne informacije.",
        },
        {
          title: "Sigurna objava",
          body: "Provjeravamo iskustvo na različitim uređajima, pomažemo pri objavi i objašnjavamo sljedeće korake.",
        },
      ],
    },
    faq: {
      badge: "Česta pitanja",
      heading: "Nekoliko važnih odgovora.",
      items: [
        {
          question: "Koliko traje projekt?",
          answer:
            "Svaki je projekt drukčiji. Nakon što utvrdimo opseg, prije početka rada dogovorit ćemo realan rok.",
        },
        {
          question: "Hoće li rješenje odgovarati načinu rada mog poslovanja?",
          answer:
            "Da. Najprije upoznajemo vaše ciljeve i svakodnevne potrebe, a zatim prema njima oblikujemo odgovarajuće rješenje.",
        },
        {
          question: "Kako možemo započeti?",
          answer:
            "U obrascu za upit ukratko nam opišite svoju ideju ili izazov. Javit ćemo vam se kako bismo dogovorili sljedeći korak.",
        },
      ],
    },
    founder: {
      title: "Vaš partner za digitalna rješenja",
      name: "Mateo Kelava",
      bio: "Pomažem poduzećima da se kvalitetno i s povjerenjem predstave online. Od prvog razgovora do objave surađujete izravno sa mnom, a rješenje oblikujemo prema stvarnim potrebama vašeg poslovanja.",
      cta: "Razgovarajmo o vašem projektu",
      imageAlt: "Osnivač studija KRON Mateo Kelava",
    },
    inquiry: {
      badge: "Započnimo razgovor",
      heading: "Recite nam što želite unaprijediti.",
      description:
        "Imate ideju ili problem koji želite riješiti? Recite nam što vam treba i pronaći ćemo pravo rješenje.",
      received: "Vaša je poruka zaprimljena.",
      response:
        "Hvala što ste nam se javili. Kontaktirat ćemo vas kako bismo razgovarali o projektu.",
      formTitle: "Upit o projektu",
      formLabels: {
        name: "Ime / tvrtka",
        website: "Postojeća web-stranica (nije obvezno)",
        contact: "E-pošta",
        message: "Što vam je potrebno?",
      },
      placeholders: {
        name: "Vaše ime ili naziv tvrtke",
        website: "https://vasastranica.com",
        contact: "vi@primjer.hr",
        message: "Opišite nam svoju ideju ili izazov…",
      },
      submit: "Zatražite ponudu",
    },
    footer: "Digitalna rješenja za rast poslovanja",
    carousel: {
      region: "Istaknuti projekti studija",
      selectedWork: "Odabrani radovi",
      chooseProject: "Odaberite istaknuti projekt",
      showProject: "Prikaži projekt",
      howBuilt: "Kako je nastao",
      liveDemo: "Pogledajte web-stranicu",
      paused: "Zaustavljeno",
      autoPlay: "Automatska izmjena · 5 s",
      pause: "Zaustavi vrtuljak projekata",
      resume: "Nastavi vrtuljak projekata",
      previous: "Prethodni projekt",
      next: "Sljedeći projekt",
      projects: {
        cavaliero: {
          badge: "Stvarni projekt za klijenta",
          category: "Web-dizajn i razvoj",
          title: "Cavaliero — restoran i apartmani",
          description:
            "Moderna, dvojezična web-stranica koja predstavlja restoran, ambijent i apartmane kroz elegantan dizajn, brzo učitavanje i jednostavan kontakt za rezervacije.",
          imageAlt: "Snimka početne stranice web-stranice restorana i apartmana Cavaliero",
          stats: ["Stvarni projekt", "Dvojezična web-stranica", "Restoran i apartmani"],
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
        apex: {
          badge: "Koncept i prototip br. 01",
          category: "Arhitektonska prezentacija i infrastruktura",
          title: "APEX — arhitektonska platforma visokih performansi",
          description:
            "Izrađen kao temeljni interni standard za KRON Digital Studio. Pokazuje kako se složeni arhitektonski prikazi učitavaju trenutačno, bez pomicanja sadržaja, uz Next.js React Server Components.",
          imageAlt: "Suvremena arhitektonska kuća okružena drvećem u sumrak",
          stats: ["Učitavanje < 0,8 s", "Next.js RSC", "Bez pomicanja sadržaja"],
        },
      },
    },
  },
};

function withEnglishFallback<T>(english: T, translated: unknown): T {
  if (Array.isArray(english)) {
    const translatedItems = Array.isArray(translated) ? translated : [];
    return english.map((item, index) => withEnglishFallback(item, translatedItems[index])) as T;
  }

  if (typeof english === "object" && english !== null) {
    const translatedRecord =
      typeof translated === "object" && translated !== null && !Array.isArray(translated)
        ? (translated as Record<string, unknown>)
        : {};

    return Object.fromEntries(
      Object.entries(english as Record<string, unknown>).map(([key, value]) => [
        key,
        withEnglishFallback(value, translatedRecord[key]),
      ]),
    ) as T;
  }

  if (typeof english === "string") {
    return (typeof translated === "string" && translated.trim() ? translated : english) as T;
  }

  return (translated ?? english) as T;
}

export function getSiteCopy(locale: Locale): SiteCopy {
  return locale === "HR" ? withEnglishFallback(SITE_COPY.EN, SITE_COPY.HR) : SITE_COPY.EN;
}
