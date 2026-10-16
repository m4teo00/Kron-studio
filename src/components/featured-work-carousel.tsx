import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";

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

export function FeaturedWorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const progress = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const project = PROJECTS[activeIndex] ?? PROJECTS[0];
  const isPaused = isManuallyPaused || isHovered || isFocused || isTouching;

  useEffect(() => {
    if (prefersReducedMotion) return;

    progress.set(0);
    const animation = animate(progress, 1, {
      duration: ROTATION_DURATION,
      ease: "linear",
      onComplete: () => setActiveIndex((current) => (current + 1) % PROJECTS.length),
    });
    animationRef.current = animation;

    return () => {
      animation.stop();
      animationRef.current = null;
    };
  }, [activeIndex, prefersReducedMotion, progress]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      animationRef.current?.pause();
    } else {
      animationRef.current?.play();
    }
  }, [isPaused, prefersReducedMotion]);

  function showProject(index: number) {
    setActiveIndex((index + PROJECTS.length) % PROJECTS.length);
  }

  return (
    <div
      className="featured-carousel-glow relative isolate"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured studio projects"
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
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left bg-accent shadow-[0_0_16px_var(--accent)]"
              style={{ scaleX: progress }}
            />
          )}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={project.id}
            className="grid min-h-[34rem] grid-cols-1 lg:min-h-[38rem] lg:grid-cols-2"
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeIndex + 1} of ${PROJECTS.length}: ${project.title}`}
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -22 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group relative min-h-64 overflow-hidden lg:min-h-full">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#09090b]/35" />
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75 sm:inset-x-8 sm:bottom-8">
                <span>KRON / {project.id === "apex" ? "01" : "02"}</span>
                <span className="h-px flex-1 bg-white/20" />
                <span>Selected work</span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-9 p-6 sm:p-9 lg:p-12 xl:p-14">
              <div>
                <div className="mb-7 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-xs">
                    {project.badge}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                    {activeIndex + 1} / {PROJECTS.length}
                  </span>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                  {project.category}
                </p>
                <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl xl:text-[2.7rem]">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  {project.description}
                </p>

                <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {project.stats.map((stat) => (
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
                  How it was built
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
                  Launch Live Demo
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-5 px-1 sm:px-2">
        <div
          className="flex items-center gap-2.5"
          role="group"
          aria-label="Choose featured project"
        >
          {PROJECTS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show project ${index + 1}: ${item.title}`}
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
            {isPaused ? "Paused" : "Auto play · 5 sec"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isManuallyPaused ? "Resume carousel" : "Pause carousel"}
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
            aria-label="Previous featured project"
            onClick={() => showProject(activeIndex - 1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/70 transition-all hover:border-accent/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_22px_-12px_var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next featured project"
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
