import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Success Stories — Nepali Students Studying Abroad with Gurumantra Education Consultancy",
  description: "Read real success stories from Nepali students who achieved their study abroad dreams with Gurumantra Education Consultancy. Australia, Canada, UK, USA, Germany, Japan placements.",
};

const DEST_COLORS: Record<string, string> = {
  Australia: "#1565C0", Canada: "#C62828", UK:      "#7B1FA2",
  USA:       "#1B5E20", Germany: "#E8A317", Japan:  "#C62828",
};

export default function SuccessStoriesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Real Students</span>
          <h1 className="mt-3 mb-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
            Success Stories
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            Real stories from Nepali students who transformed their study abroad dreams into reality — with a little help from Gurumantra.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg mx-auto">
            {[["2,000+", "Students Placed"], ["98%", "Visa Success"], ["8", "Countries"]].map(([v, l]) => (
              <div key={l} className="rounded-xl py-3 px-2 text-center" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="text-2xl font-black text-white">{v}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.70)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stories Grid ── */}
      <section className="bg-background section-py">
        <div className="container-main">

          <div className="text-center section-header">
            <span className="section-label">Student Stories</span>
            <h2 className="section-title">Real Students. Real Success.</h2>
            <p className="section-desc">Every story below is from a real Gurumantra student — their words, their journey, their achievement.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {testimonials.map((t) => {
              const color = DEST_COLORS[t.destination] ?? "#1565C0";
              return (
                <article
                  key={t.name}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Top accent bar */}
                  <div className="h-[3px] w-full shrink-0" style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }} />

                  <div className="flex flex-col flex-1 p-7">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>

                    {/* Quote icon */}
                    <Quote className="w-6 h-6 mb-3 opacity-20" style={{ color }} aria-hidden="true" />

                    {/* Quote text — flex-1 so cards stretch equally */}
                    <blockquote className="text-[0.8125rem] text-muted-foreground leading-relaxed flex-1 mb-5 italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Author — pinned to bottom */}
                    <footer className="mt-auto pt-5 border-t border-border">
                      <div className="flex items-start gap-3">
                        {/* Avatar initials */}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                          style={{ background: color }}
                          aria-hidden="true"
                        >
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-foreground">{t.name}</div>
                          <div className="text-xs font-medium mt-0.5" style={{ color }}>{t.destination} — {t.university}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{t.program} · {t.year}</div>
                        </div>
                      </div>
                    </footer>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary section-py">
        <div className="container-main text-center">
          <div className="max-w-2xl mx-auto">
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Your Turn</span>
            <h2 className="section-title text-white mt-3">Write Your Own Success Story</h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.78)" }}>
              Join 2,000+ Nepali students who trusted Gurumantra to take them from Kathmandu to the world's best universities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 font-bold rounded-xl text-sm px-8 py-4 shadow-lg hover:opacity-90 hover:scale-105 transition-all"
                style={{ background: "#E8A317", color: "#fff" }}
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/study-destinations"
                className="inline-flex items-center gap-2 font-semibold rounded-xl text-sm px-8 py-4 border-2 text-white hover:bg-white/10 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.30)" }}
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
