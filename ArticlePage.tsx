import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ContourDivider from "./ContourDivider";

interface Fact {
  label: string;
  value: string;
}

interface ArticlePageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  body: string;
  facts?: Fact[];
  prev?: { label: string; route: string };
  next?: { label: string; route: string };
}

export default function ArticlePage({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  body,
  facts = [],
  prev,
  next,
}: ArticlePageProps) {
  return (
    <article>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
        <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.32em] text-sage">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up mt-4 max-w-3xl font-serif text-5xl leading-[1.02] text-ink sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="animate-fade-up mt-5 max-w-xl font-serif text-xl italic text-muted sm:text-2xl">
          {subtitle}
        </p>
      </section>

      {/* Feature image */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>

      <ContourDivider className="mt-6" />

      {/* Body + facts */}
      <section className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.7fr_1fr]">
          <div>
            <div className="mb-6 h-px w-16 bg-earth/50" />
            <p className="whitespace-pre-line font-serif text-2xl leading-relaxed text-ink sm:text-[1.7rem] sm:leading-[1.55]">
              {body}
            </p>
          </div>

          {facts.length > 0 && (
            <aside aria-label="Key facts" className="md:pt-1">
              <div className="rounded-3xl border border-black/5 bg-white/60 p-7">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">
                  At a glance
                </h2>
                <dl className="mt-5 space-y-5">
                  {facts.map((f) => (
                    <div key={f.label} className="border-b border-black/5 pb-4 last:border-0 last:pb-0">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                        {f.label}
                      </dt>
                      <dd className="mt-1 font-serif text-xl text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-4 border-t border-black/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              to={prev.route}
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted transition hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" strokeWidth={2} />
              {prev.label}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={next.route}
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:text-sage"
            >
              {next.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          )}
        </div>
      </section>
    </article>
  );
}
