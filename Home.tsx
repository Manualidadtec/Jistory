import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "../data/pillars";
import ContourDivider from "../components/ContourDivider";

export default function Home() {
  return (
    <div>
      {/* Intro / masthead */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.34em] text-sage">
          A tribute to Chris Kyle · The American Sniper
        </p>
        <h1 className="animate-fade-up mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-ink sm:text-7xl md:text-[5.2rem]">
          A hero remembered, a legacy that lives on.
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Explore the biography, literature, and organization that keep the story of an
          American hero alive — told through time, with great pride.
        </p>
      </section>

      {/* Interactive category pillar strip */}
      <section aria-labelledby="pillars-heading" className="mx-auto max-w-[110rem] px-5 sm:px-8">
        <h2 id="pillars-heading" className="sr-only">
          Portfolio pillars
        </h2>

        {/* Desktop grid / mobile horizontal swipe carousel */}
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0">
          {pillars.map((pillar, i) => (
            <Link
              key={pillar.name}
              to={pillar.route}
              aria-label={`${pillar.name} — ${pillar.subtitle}`}
              className="group relative aspect-square w-[82vw] shrink-0 snap-center overflow-hidden rounded-3xl border border-black/5 bg-linen-deep sm:w-auto"
              style={{ animation: `scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s both` }}
            >
              <img
                src={pillar.image}
                alt={pillar.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
              />
              {/* Dark overlay fade-in */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

              {/* Always-visible corner label on mobile clarity */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-serif text-3xl font-normal uppercase tracking-[0.14em] text-white sm:text-4xl">
                  {pillar.name}
                </span>
                <span className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                  {pillar.subtitle}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </div>

              {/* Bottom index tag (resting state) */}
              <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur transition-opacity duration-500 group-hover:opacity-0">
                0{i + 1} · {pillar.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Organic contour section divider */}
      <ContourDivider className="mt-10" />

      {/* Editorial value proposition & capabilities */}
      <section className="mx-auto max-w-3xl px-5 pb-8 text-center sm:px-8">
        <div className="mx-auto mb-8 h-px w-16 bg-earth/50" />
        <h2 className="font-serif text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl">
          Know and learn about the american hero that his legacy lives forever.
        </h2>
        <p className="mt-6 font-serif text-2xl italic text-sage sm:text-3xl">
          His story is told through time with great pride
        </p>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          This man lived for his country and served his country. The great story, events,
          and facts that will remain about his time live on earth.
        </p>
      </section>

      {/* Capabilities strip */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.name}
              to={p.route}
              className="group rounded-3xl border border-black/5 bg-white/60 p-7 transition hover:-translate-y-1 hover:border-sage/40 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-serif text-2xl text-ink">{p.name}</h3>
                <ArrowUpRight
                  className="h-5 w-5 text-muted transition group-hover:text-sage"
                  strokeWidth={1.75}
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.subtitle}.</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
