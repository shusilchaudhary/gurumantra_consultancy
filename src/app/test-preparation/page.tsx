import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TestPrepTabs from "./test-prep-tabs";

export const metadata: Metadata = {
  title: "Test Preparation — IELTS, PTE, TOEFL Classes in Kathmandu | Gurumantra",
  description:
    "Expert IELTS, PTE, TOEFL preparation classes in Kathmandu. Small batches, experienced trainers, flexible timings. Achieve your target score on the first attempt with Gurumantra Education Consultancy.",
};

const WHY = [
  { label: "Certified trainers with 10+ years experience" },
  { label: "Small batches — maximum 15 students per class" },
  { label: "Flexible morning and evening timings" },
  { label: "Free diagnostic test before enrollment" },
  { label: "Score guarantee or free repeat classes" },
];

export default function TestPreparationPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{
        background: "var(--primary)", color: "#fff",
        paddingTop: "5rem", paddingBottom: "5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "-10rem", left: "-10rem",
            width: "24rem", height: "24rem", borderRadius: "50%",
            background: "var(--accent)", opacity: 0.08, filter: "blur(100px)",
          }} />
          <div style={{
            position: "absolute", bottom: "-5rem", right: "-5rem",
            width: "32rem", height: "32rem", borderRadius: "50%",
            background: "var(--accent)", opacity: 0.06, filter: "blur(120px)",
          }} />
        </div>
        <div className="container-main" style={{ maxWidth: 768, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>
            Test Preparation
          </span>
          <h1 style={{
            marginTop: "0.75rem", marginBottom: "1.25rem",
            fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900,
            letterSpacing: "-0.03em", lineHeight: 1.1,
          }}>
            IELTS, PTE &amp; TOEFL<br />Classes in Kathmandu
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: "2rem" }}>
            Small batches, experienced trainers, and proven strategies to hit your target score on the first attempt.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.625rem" }}>
            {["IELTS", "PTE Academic", "TOEFL iBT"].map((name) => (
              <span key={name} style={{
                padding: "0.375rem 1.125rem", borderRadius: 999,
                fontSize: "0.8rem", fontWeight: 700, color: "#fff",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.28)",
              }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TABS + DETAIL + COMPARISON (client)
      ══════════════════════════════════════════ */}
      <TestPrepTabs />

      {/* ══════════════════════════════════════════
          WHY CHOOSE US  +  NOT SURE CARD
      ══════════════════════════════════════════ */}
      <div style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          {/* Section label */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Why Gurumantra</span>
            <h2 style={{
              marginTop: "0.5rem",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900,
              color: "var(--foreground)", letterSpacing: "-0.02em", lineHeight: 1.15,
            }}>
              Why Students Choose Our Test Prep
            </h2>
            <p style={{
              marginTop: "0.75rem", fontSize: "1rem",
              color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "52ch",
            }}>
              Our test prep classes are designed around one goal: your highest possible score in the shortest possible time.
            </p>
          </div>

          {/* Two columns */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            alignItems: "start",
          }}
            className="why-grid"
          >

            {/* LEFT — checklist */}
            <div style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              padding: "2rem",
            }}>
              <p style={{
                fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
                letterSpacing: "0.12em", color: "var(--primary)", marginBottom: "1.25rem",
              }}>
                What Makes Us Different
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {WHY.map(({ label }) => (
                  <li key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 2,
                      background: "#EBF2FF",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "1.5px solid #BFDBFE",
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 5l2.5 2.5 4-4.5" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "var(--foreground)", lineHeight: 1.6 }}>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — Not Sure card */}
            <div style={{
              background: "var(--primary)",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}>
              {/* Top accent */}
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 48, height: 48, borderRadius: "0.875rem",
                background: "rgba(255,255,255,0.12)",
                fontSize: "1.5rem",
              }}>
                🤔
              </div>

              <div>
                <h3 style={{
                  fontSize: "1.2rem", fontWeight: 800,
                  color: "#fff", lineHeight: 1.2, marginBottom: "0.5rem",
                }}>
                  Not Sure Which Test to Take?
                </h3>
                <p style={{
                  fontSize: "0.9rem", color: "rgba(255,255,255,0.80)",
                  lineHeight: 1.7,
                }}>
                  Our counselors will recommend the best test based on your destination country, target university, and personal strengths — completely free.
                </p>
              </div>

              {/* Trust badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["100% Free", "No Obligation", "Expert Advice"].map((tag) => (
                  <span key={tag} style={{
                    fontSize: "0.7rem", fontWeight: 700,
                    padding: "0.25rem 0.75rem", borderRadius: 999,
                    background: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginTop: "0.25rem" }}>
                <Link
                  href="/book-consultation"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "0.5rem", padding: "0.875rem 1.5rem",
                    borderRadius: "0.875rem", textDecoration: "none",
                    background: "#E8A317", color: "#fff",
                    fontWeight: 700, fontSize: "0.9rem",
                    boxShadow: "0 4px 14px rgba(232,163,23,0.40)",
                    transition: "opacity 0.15s",
                  }}
                >
                  Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
                <Link
                  href="/services"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "0.5rem", padding: "0.875rem 1.5rem",
                    borderRadius: "0.875rem", textDecoration: "none",
                    background: "rgba(255,255,255,0.10)",
                    color: "#fff", fontWeight: 600, fontSize: "0.9rem",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    transition: "background 0.15s",
                  }}
                >
                  View All Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FINAL CTA STRIP
      ══════════════════════════════════════════ */}
      <div style={{
        background: "var(--muted)", borderTop: "1px solid var(--border)",
      }}>
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{
            background: "var(--primary)", borderRadius: "1.25rem",
            padding: "3rem 2.5rem", textAlign: "center",
          }}>
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>
              Get Started
            </span>
            <h2 style={{
              marginTop: "0.75rem", marginBottom: "1rem",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900,
              color: "#fff", letterSpacing: "-0.02em",
            }}>
              Ready to Ace Your English Test?
            </h2>
            <p style={{
              fontSize: "1rem", color: "rgba(255,255,255,0.80)",
              lineHeight: 1.75, marginBottom: "2rem",
              maxWidth: "50ch", marginInline: "auto",
            }}>
              Join thousands of Nepali students who achieved their target score with Gurumantra&apos;s expert coaching.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
              <Link
                href="/book-consultation"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9rem 2rem", borderRadius: "0.875rem",
                  background: "#E8A317", color: "#fff",
                  fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(232,163,23,0.45)",
                  transition: "opacity 0.15s, transform 0.15s",
                }}
              >
                Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link
                href="/study-destinations"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9rem 2rem", borderRadius: "0.875rem",
                  border: "1.5px solid rgba(255,255,255,0.30)",
                  color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                  background: "rgba(255,255,255,0.08)",
                  transition: "background 0.15s",
                }}
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 640px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
