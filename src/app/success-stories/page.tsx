import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Success Stories — Nepali Students Studying Abroad with Gurumantra",
  description: "Real success stories from Nepali students who achieved their study abroad dreams with Gurumantra Educational Consultancy.",
};

const DEST_COLORS: Record<string, string> = {
  Australia: "#1565C0", Canada: "#C62828", UK: "#7B1FA2",
  USA: "#1B5E20", Germany: "#D32F2F", Japan: "#C62828",
};

const HERO_STATS = [
  { value: "2,000+", label: "Students Placed" },
  { value: "98%",    label: "Visa Success"    },
  { value: "8",      label: "Countries"       },
];

export default function SuccessStoriesPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{
        background: `linear-gradient(rgba(21,101,192,0.82), rgba(13,71,161,0.90)), url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1400&h=700&fit=crop&auto=format&q=80)`,
        backgroundSize: "cover", backgroundPosition: "center",
        color: "#fff", paddingTop: "5rem", paddingBottom: "5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.06, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(211,47,47,)", color: "#E53935" }}>Real Students</span>
          <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Success Stories
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: "2rem" }}>
            Real stories from Nepali students who transformed their study abroad dreams into reality — with a little help from Gurumantra.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", maxWidth: 400, marginInline: "auto" }}>
            {HERO_STATS.map(({ value, label }) => (
              <div key={label} style={{ borderRadius: "0.875rem", padding: "0.875rem 0.5rem", textAlign: "center", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff" }}>{value}</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.72)", marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ STORIES GRID ══════ */}
      <div style={{ background: "var(--background)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Student Stories</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Real Students. Real Success.
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              Every story below is from a real Gurumantra student — their words, their journey, their achievement.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="stories-grid">
            {testimonials.map((t) => {
              const color = DEST_COLORS[t.destination] ?? "#1565C0";
              return (
                <article key={t.name} style={{
                  display: "flex", flexDirection: "column",
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: "1rem", overflow: "hidden",
                }}>
                  {/* Top accent bar */}
                  <div style={{ height: 3, background: `linear-gradient(90deg, ${color}, ${color}60)`, flexShrink: 0 }} />

                  <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "1.75rem" }}>
                    {/* Stars */}
                    <div style={{ display: "flex", gap: 2, marginBottom: "1rem" }} aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote style={{
                      fontSize: "0.875rem", color: "var(--muted-foreground)",
                      lineHeight: 1.75, flex: 1, marginBottom: "1.25rem",
                      fontStyle: "italic",
                    }}>
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                        background: color, display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", fontWeight: 700, fontSize: "0.9rem",
                      }}>
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--foreground)" }}>{t.name}</div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color, marginTop: 1 }}>{t.destination} — {t.university}</div>
                        <div style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", marginTop: 1 }}>{t.program} · {t.year}</div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════ CTA ══════ */}
      <div style={{ background: "var(--muted)", borderTop: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ background: "var(--primary)", borderRadius: "1.25rem", padding: "3rem 2.5rem", textAlign: "center" }}>
            <span className="section-label" style={{ background: "rgba(211,47,47,)", color: "#E53935" }}>Your Turn</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              Write Your Own Success Story
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "50ch", marginInline: "auto" }}>
              Join 2,000+ Nepali students who trusted Gurumantra to take them from Kathmandu to the world&apos;s best universities.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
              <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", background: "#D32F2F", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(211,47,47,)" }}>
                Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link href="/study-destinations" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", border: "1.5px solid rgba(255,255,255,0.30)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .stories-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .stories-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
