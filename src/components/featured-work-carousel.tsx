import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { SITE_COPY, type Locale } from "@/lib/site-copy";

const ROTATION_DURATION = 5;

const PROJECTS = [
  {
    id: "apex",
    badge: "Concept & Prototype No. 01",
    category: "Architectural Showcase & Infrastructure",
    title: "APEX — High-Performance Architectural Engine",
    description:
      "Built as the foundational internal benchmark for KRON Digital Studio. Demonstrates how complex architectural renders load instantly with zero layout shifts via Next.js React Server Components.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Modern architectural residence framed by trees at dusk",
    stats: ["< 0.8s Load", "Next.js RSC", "Zero Layout Shift"],
    detailsHref: "/work/apex",
    demoHref: "https://apex-estates-seven.vercel.app",
  },
  {
    id: "kelava",
    badge: "Client Case Study · Heritage & Craft",
    category: "Local Business Platform",
    title: "Restauracija Kelava — Custom Craft & Restoration",
    description:
      "High-conversion digital platform engineered for a specialized furniture restoration business. Built to solve high-resolution image rendering bottlenecks and deliver direct mobile WhatsApp/Call leads.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Carefully crafted furniture in a warm, contemporary interior",
    stats: ["99/100 Lighthouse", "< 0.8s Load", "Mobile Lead Optimized"],
    detailsHref: "/work/restauracija-kelava",
    demoHref: "https://restauracijakelava.vercel.app",
  },
] as const;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

export function FeaturedWorkCarousel({ locale = "EN" }: { locale?: Locale }) {
  const copy = SITE_COPY[locale].carousel;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const remainingTimeRef = useRef(ROTATION_DURATION * 1000);
  const timerRef = useRef<number | null>(null);
  const timerStartedAtRef = useRef(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const project = PROJECTS[activeIndex] ?? PROJECTS[0];
  const isPaused = isManuallyPaused || isHovered || isFocused || isTouching;

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    timerStartedAtRef.current = performance.now();
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      remainingTimeRef.current = ROTATION_DURATION * 1000;
      setActiveIndex((current) => (current + 1) % PROJECTS.length);
    }, remainingTimeRef.current);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        remainingTimeRef.current = Math.max(
          0,
          remainingTimeRef.current - (performance.now() - timerStartedAtRef.current),
        );
        timerRef.current = null;
      }
    };
  }, [activeIndex, isPaused, prefersReducedMotion]);

  function showProject(index: number) {
    const nextIndex = (index + PROJECTS.length) % PROJECTS.length;
    if (nextIndex === activeIndex) return;

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    remainingTimeRef.current = ROTATION_DURATION * 1000;
    setActiveIndex(nextIndex);
  }

  return (
    <div
      lang={locale === "HR" ? "hr" : "en"}
      className="featured-carousel-glow relative isolate"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.region}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
      onPointerDown={(event) => {
        if (event.pointerType === "touch") setIsTouching(true);
      }}
      onPointerUp={() => setIsTouching(false)}
      onPointerCancel={() => setIsTouching(false)}
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-[0_24px_90px_-48px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_24px_90px_-42px_rgba(213,173,80,0.24)]">
        <div className="relative h-px overflow-hidden bg-white/[0.06]" aria-hidden="true">
          {!prefersReducedMotion && (
            <div
              key={activeIndex}
              className="featured-carousel-progress absolute inset-y-0 left-0 w-full bg-accent shadow-[0_0_16px_var(--accent)]"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            />
          )}
        </div>

        <article
          key={project.id}
          className="featured-carousel-slide grid min-h-[34rem] grid-cols-1 lg:min-h-[38rem] lg:grid-cols-2"
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} / ${PROJECTS.length}: ${copy.projects[project.id].title}`}
        >
          <div className="group relative min-h-64 overflow-hidden lg:min-h-full">
            <img
              src={project.image}
              alt={copy.projects[project.id].imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#09090b]/35" />
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75 sm:inset-x-8 sm:bottom-8">
              <span>KRON / {project.id === "apex" ? "01" : "02"}</span>
              <span className="h-px flex-1 bg-white/20" />
              <span>{copy.selectedWork}</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-9 p-6 sm:p-9 lg:p-12 xl:p-14">
            <div>
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-xs">
                  {copy.projects[project.id].badge}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                  {activeIndex + 1} / {PROJECTS.length}
                </span>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                {copy.projects[project.id].category}
              </p>
              <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl xl:text-[2.7rem]">
                {copy.projects[project.id].title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                {copy.projects[project.id].description}
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {copy.projects[project.id].stats.map((stat) => (
                  <li
                    key={stat}
                    className="flex min-h-12 items-center rounded-xl border border-white/[0.08] bg-black/20 px-3.5 py-3 text-xs font-medium text-white/75 backdrop-blur-md sm:justify-center sm:px-2 sm:text-center lg:justify-start lg:px-4 lg:text-left xl:justify-center xl:px-2 xl:text-center"
                  >
                    {stat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={project.detailsHref}
                className="group/button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.09] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-accent/60 hover:bg-white/[0.14] hover:shadow-[0_0_30px_-12px_var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] sm:w-fit sm:px-6"
              >
                {copy.howBuilt}
                <ArrowUpRight
                  className="size-4 transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={project.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] sm:w-fit sm:px-6"
              >
                {copy.liveDemo}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-5 px-1 sm:px-2">
        <div className="flex items-center gap-2.5" role="group" aria-label={copy.chooseProject}>
          {PROJECTS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`${copy.showProject} ${index + 1}: ${copy.projects[item.id].title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => showProject(index)}
              className="group/dot flex min-h-11 items-center justify-center rounded-full px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-9 bg-accent shadow-[0_0_14px_var(--accent)]"
                    : "w-1.5 bg-white/25 group-hover/dot:bg-white/60"
                }`}
              />
            </button>
          ))}
          <span className="ml-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
            {isPaused ? copy.paused : copy.autoPlay}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isManuallyPaused ? copy.resume : copy.pause}
            aria-pressed={isManuallyPaused}
            onClick={() => setIsManuallyPaused((paused) => !paused)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isManuallyPaused ? (
              <Play className="size-4" aria-hidden="true" />
            ) : (
              <Pause className="size-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-label={copy.previous}
            onClick={() => showProject(activeIndex - 1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/70 transition-all hover:border-accent/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_22px_-12px_var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={copy.next}
            onClick={() => showProject(activeIndex + 1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/70 transition-all hover:border-accent/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_22px_-12px_var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
