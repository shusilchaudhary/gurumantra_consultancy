import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, CheckCircle, School, Globe, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Gurumantra Education Consultancy — Study Abroad in Nepal",
  description:
    "Learn about Gurumantra Education Consultancy's mission and history. We have guided over 2,000 Nepali students to top universities in Australia, Canada, UK, and USA.",
};

const stats = [
  { value: "2,000+", label: "Students Placed",     sub: "Since 2010",          icon: Users       },
  { value: "98%",    label: "Visa Success Rate",    sub: "First attempt",       icon: CheckCircle },
  { value: "200+",   label: "Partner Universities", sub: "Across 8 countries",  icon: School      },
  { value: "8",      label: "Countries",             sub: "Study destinations",  icon: Globe       },
];

const values = [
  { icon: Target,      title: "Student-First",   description: "Every recommendation is guided by what's genuinely best for the student — not commission-driven placements." },
  { icon: Eye,         title: "Transparency",    description: "No hidden fees, no unrealistic promises. Honest timelines, real costs, and truthful success rates." },
  { icon: CheckCircle, title: "Result-Oriented", description: "Our 98% visa success rate is built on thorough preparation and genuine student profiles — not shortcuts." },
  { icon: Globe,       title: "Global Network",  description: "Partnerships with 200+ universities across 8 countries give students access to the best programs." },
];

const milestones = [
  { year: "2010", event: "Founded in Kathmandu with a vision to provide honest, student-first guidance" },
  { year: "2012", event: "First 100 students placed in Australia and Canada" },
  { year: "2014", event: "Expanded test preparation services — IELTS, PTE, TOEFL" },
  { year: "2016", event: "Crossed 500 student placements, added UK and USA destinations" },
  { year: "2018", event: "Launched Germany and Japan programs with scholarship focus" },
  { year: "2020", event: "Reached 1,000+ students placed, 98% visa success rate" },
  { year: "2022", event: "Added Ireland and New Zealand, expanded university partnerships to 200+" },
  { year: "2025–26", event: "2,000+ cumulative students placed across 8 countries" },
];

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{
        background: "var(--primary)", color: "#fff",
        paddingTop: "5rem", paddingBottom: "5.5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.06, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Our Story</span>
          <h1 style={{
            marginTop: "0.75rem", marginBottom: "1.25rem",
            fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900,
            letterSpacing: "-0.03em", lineHeight: 1.1,
          }}>
            About Gurumantra<br />Education Consultancy
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)" }}>
            Founded with a vision to make global education accessible, affordable, and transparent for every Nepali student.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MISSION  +  STATS
      ══════════════════════════════════════════ */}
      <div style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            className="about-two-col">

            {/* Left — Mission */}
            <div>
              <span className="section-label">Our Mission</span>
              <h2 style={{
                marginTop: "0.5rem", marginBottom: "1.25rem",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900,
                color: "var(--foreground)", letterSpacing: "-0.02em", lineHeight: 1.15,
              }}>
                Guiding Dreams Since 2010
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1rem" }}>
                At Gurumantra Education Consultancy, we believe that studying abroad shouldn&apos;t be a privilege reserved for the few — it should be an opportunity accessible to anyone with drive and academic capability.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our counselors have guided over 2,000 students to Australia, Canada, USA, UK, and beyond. We replace confusion with clarity, ensuring your application process is smooth, ethical, and highly successful.
              </p>
              <Link href="/book-consultation" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.75rem", borderRadius: 999,
                background: "var(--primary)", color: "#fff",
                fontWeight: 700, fontSize: "0.875rem", textDecoration: "none",
                boxShadow: "0 4px 14px rgba(21,101,192,0.30)",
              }}>
                Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </div>

            {/* Right — Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map(({ value, label, sub, icon: Icon }) => (
                <div key={label} style={{
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: "1rem", padding: "1.5rem",
                  display: "flex", flexDirection: "column", gap: "0.5rem",
                }}>
                  <Icon style={{ width: 28, height: 28, color: "var(--accent)" }} />
                  <div style={{ fontSize: "1.875rem", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {value}
                  </div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--foreground)" }}>{label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          VALUES
      ══════════════════════════════════════════ */}
      <div style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Our Values</span>
            <h2 style={{
              marginTop: "0.5rem", marginBottom: "0.75rem",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900,
              color: "var(--foreground)", letterSpacing: "-0.02em",
            }}>
              What Guides Everything We Do
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "52ch", marginInline: "auto" }}>
              Four principles that shape every interaction, every recommendation, and every outcome.
            </p>
          </div>

          {/* 4 cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}
            className="values-grid">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: "1rem", padding: "1.75rem",
                display: "flex", flexDirection: "column", gap: "0",
              }}>
                {/* Top bar */}
                <div style={{ height: 3, borderRadius: 999, background: "var(--primary)", marginBottom: "1.25rem" }} />
                <div style={{
                  width: 44, height: 44, borderRadius: "0.75rem",
                  background: "#EBF2FF", display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem", flexShrink: 0,
                }}>
                  <Icon style={{ width: 22, height: 22, color: "var(--primary)" }} />
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════════ */}
      <div style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Our Journey</span>
            <h2 style={{
              marginTop: "0.5rem",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900,
              color: "var(--foreground)", letterSpacing: "-0.02em",
            }}>
              15 Years of Changing Lives
            </h2>
          </div>

          {/* Timeline */}
          <div style={{ maxWidth: 640, marginInline: "auto", position: "relative" }}>
            {/* vertical line */}
            <div style={{
              position: "absolute", left: "5.25rem", top: 0, bottom: 0,
              width: 2, background: "var(--border)",
            }} aria-hidden="true" />

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {milestones.map(({ year, event }, i) => (
                <div key={year} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  {/* Year */}
                  <div style={{ width: "4.5rem", flexShrink: 0, textAlign: "right" }}>
                    <span style={{
                      fontSize: "0.8rem", fontWeight: 800,
                      color: i === milestones.length - 1 ? "var(--primary)" : "var(--accent)",
                    }}>
                      {year}
                    </span>
                  </div>
                  {/* Dot */}
                  <div style={{
                    width: 14, height: 14, borderRadius: "50%", flexShrink: 0, marginTop: 3,
                    background: i === milestones.length - 1 ? "var(--primary)" : "var(--accent)",
                    border: "3px solid var(--background)",
                    position: "relative", zIndex: 1,
                    boxShadow: `0 0 0 2px ${i === milestones.length - 1 ? "var(--primary)" : "var(--accent)"}`,
                  }} aria-hidden="true" />
                  {/* Event */}
                  <p style={{
                    fontSize: "0.9rem", lineHeight: 1.65,
                    fontWeight: i === milestones.length - 1 ? 600 : 400,
                    color: i === milestones.length - 1 ? "var(--foreground)" : "var(--muted-foreground)",
                  } as React.CSSProperties}>
                    {event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <div style={{ background: "var(--muted)", borderTop: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{
            background: "var(--primary)", borderRadius: "1.25rem",
            padding: "3rem 2.5rem", textAlign: "center",
          }}>
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>
              Work With Us
            </span>
            <h2 style={{
              marginTop: "0.75rem", marginBottom: "1rem",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900,
              color: "#fff", letterSpacing: "-0.02em",
            }}>
              Ready to Start Your Journey?
            </h2>
            <p style={{
              fontSize: "1rem", color: "rgba(255,255,255,0.80)",
              lineHeight: 1.75, marginBottom: "2rem",
              maxWidth: "48ch", marginInline: "auto",
            }}>
              Join 2,000+ Nepali students who trusted Gurumantra to guide them to their dream university.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
              <Link href="/book-consultation" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.9rem 2rem", borderRadius: "0.875rem",
                background: "#E8A317", color: "#fff",
                fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(232,163,23,0.45)",
              }}>
                Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link href="/study-destinations" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.9rem 2rem", borderRadius: "0.875rem",
                border: "1.5px solid rgba(255,255,255,0.30)",
                color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                background: "rgba(255,255,255,0.08)",
              }}>
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .about-two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .values-grid   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .values-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
