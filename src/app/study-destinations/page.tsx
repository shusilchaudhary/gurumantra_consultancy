import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Study Destinations — Study Abroad from Nepal 2026",
  description: "Explore 8 top study destinations for Nepali students: Australia, Canada, UK, USA, New Zealand, Germany, Japan, Ireland.",
};

const DEST_IMAGES: Record<string, string> = {
  "australia":   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=160&fit=crop&auto=format&q=80",
  "canada":      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=160&fit=crop&auto=format&q=80",
  "uk":          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=160&fit=crop&auto=format&q=80",
  "usa":         "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=400&h=160&fit=crop&auto=format&q=80",
  "new-zealand": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=160&fit=crop&auto=format&q=80",
  "germany":     "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=160&fit=crop&auto=format&q=80",
  "japan":       "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=160&fit=crop&auto=format&q=80",
  "ireland":     "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=400&h=160&fit=crop&auto=format&q=80",
};

const destinations = [
  { name: "Australia",      slug: "australia",   flag: "🇦🇺", tagline: "World-class universities & up to 4 years post-study work rights",      color: "#1565C0", color2: "#0D47A1", highlights: ["7 top-100 universities", "48 hrs/fortnight work", "2–4 yr post-study visa"], badge: "Most Popular",  badgeColor: "#E8A317" },
  { name: "Canada",         slug: "canada",      flag: "🇨🇦", tagline: "Clear PR pathway, co-op programs & affordable world-class education",    color: "#B71C1C", color2: "#7F0000", highlights: ["3-year PGWP", "Express Entry PR", "Affordable tuition"],                    badge: "PR Friendly",  badgeColor: "#1565C0" },
  { name: "United Kingdom", slug: "uk",          flag: "🇬🇧", tagline: "1-year Master's, globally respected degrees & Graduate Route visa",      color: "#4A148C", color2: "#1A0050", highlights: ["1-year Master's", "2-yr Graduate Route", "Top 10 global unis"],            badge: "Fast Degree",  badgeColor: "#7B1FA2" },
  { name: "United States",  slug: "usa",         flag: "🇺🇸", tagline: "Best universities globally, OPT work rights & research opportunities",   color: "#1B5E20", color2: "#003300", highlights: ["50+ top-200 unis", "3-yr STEM OPT", "Flexible curriculum"],               badge: "Top Research", badgeColor: "#1565C0" },
  { name: "New Zealand",    slug: "new-zealand", flag: "🇳🇿", tagline: "Safe, scenic & English-speaking with strong student support",             color: "#006064", color2: "#00363a", highlights: ["#2 safest country", "3-yr work visa", "Affordable living"],               badge: "Safe & Scenic",badgeColor: "#2E7D32" },
  { name: "Germany",        slug: "germany",     flag: "🇩🇪", tagline: "Tuition-free public universities, strong engineering sector & EU access", color: "#E65100", color2: "#8D3100", highlights: ["Zero tuition (public)", "18-mo job seeker visa", "EU Blue Card"],         badge: "Tuition Free", badgeColor: "#E8A317" },
  { name: "Japan",          slug: "japan",       flag: "🇯🇵", tagline: "MEXT scholarships, tech innovation & affordable national universities",   color: "#880E4F", color2: "#4a0028", highlights: ["MEXT full scholarship", "~NPR 5L/yr tuition", "100K+ Nepalis"],           badge: "Scholarship",  badgeColor: "#C62828" },
  { name: "Ireland",        slug: "ireland",     flag: "🇮🇪", tagline: "English-speaking EU country, tech hub & 2-year Stay Back visa",           color: "#2E7D32", color2: "#005005", highlights: ["Google/Meta/Apple HQ", "2-yr Stay Back", "EU job market"],               badge: "Tech Hub",     badgeColor: "#2E7D32" },
];

const quickFacts = [
  { value: "8",      label: "Study Destinations"   },
  { value: "200+",   label: "Partner Universities" },
  { value: "2,000+", label: "Students Placed"      },
  { value: "98%",    label: "Visa Success Rate"    },
];

const whyPoints = [
  "Direct partnerships with 200+ universities — faster offer letters",
  "Country-specific visa expertise with 98% success rate",
  "Scholarship mapping for every destination",
  "Real student success stories from each country",
];

const whyStats = [
  { value: "2,000+", label: "Students Placed", sub: "Since 2010"         },
  { value: "98%",    label: "Visa Success",    sub: "First attempt"      },
  { value: "200+",   label: "Universities",    sub: "Across 8 countries" },
  { value: "Free",   label: "Consultation",    sub: "No obligation"      },
];

export default function StudyDestinationsPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{
        background: `linear-gradient(rgba(21,101,192,0.82), rgba(13,71,161,0.90)), url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&h=700&fit=crop&auto=format&q=80)`,
        backgroundSize: "cover", backgroundPosition: "center",
        color: "#fff", paddingTop: "5rem", paddingBottom: "5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-8rem", left: "-8rem", width: "20rem", height: "20rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.1, filter: "blur(90px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "30rem", height: "30rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.1, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(232,163,23,0.20)", color: "#F5C542" }}>2026 Intake Open</span>
          <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Choose Your Study Destination
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: "2rem" }}>
            Comprehensive guides for 8 top countries — eligibility, costs in NPR, visa steps, scholarships, and 2026 intake calendars.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", maxWidth: 560, marginInline: "auto" }} className="facts-grid">
            {quickFacts.map(({ value, label }) => (
              <div key={label} style={{ borderRadius: "0.875rem", padding: "0.875rem 0.5rem", textAlign: "center", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <div style={{ fontSize: "1.375rem", fontWeight: 900, color: "#fff" }}>{value}</div>
                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.72)", marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ DESTINATIONS GRID ══════ */}
      <div style={{ background: "var(--background)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">All Destinations</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Where Do You Want to Study?
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              Click any destination to explore detailed guides — intakes, tuition costs, living expenses, visa requirements, and top universities.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }} className="dest-grid">
            {destinations.map((d) => (
              <Link key={d.slug} href={`/study-destinations/${d.slug}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--border)" }}>
                {/* Image banner */}
                <div style={{ background: `linear-gradient(135deg, ${d.color}CC 0%, ${d.color2}CC 100%), url(${DEST_IMAGES[d.slug]})`, backgroundSize: "cover", backgroundPosition: "center", padding: "1.75rem 1.25rem 1.25rem", position: "relative", flexShrink: 0 }}>
                  <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "0.68rem", fontWeight: 800, color: "#fff", padding: "0.2rem 0.6rem", borderRadius: 999, background: d.badgeColor }}>
                    {d.badge}
                  </span>
                  <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{d.flag}</div>
                  <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>{d.name}</h2>
                </div>
                {/* Content */}
                <div style={{ background: "var(--card)", padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", lineHeight: 1.6, marginBottom: "0.875rem" }}>{d.tagline}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", flex: 1, marginBottom: "1rem" }}>
                    {d.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                        <CheckCircle style={{ width: 12, height: 12, color: d.color, flexShrink: 0 }} />
                        <span style={{ fontSize: "0.75rem", color: "var(--foreground)" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.75rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: d.color }}>Full Guide</span>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#E8A317", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ChevronRight style={{ width: 13, height: 13, color: "#fff" }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ WHY GURUMANTRA ══════ */}
      <div style={{ background: "var(--muted)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="why-grid">

            <div>
              <span className="section-label">Why Gurumantra</span>
              <h2 style={{ marginTop: "0.5rem", marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                We Know Every Destination Inside Out
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                Our counselors have personally visited partner universities across all 8 countries. We don&apos;t just advise — we guide from firsthand knowledge.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {whyPoints.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 2, background: "#EBF2FF", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #BFDBFE" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 4-4.5" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <p style={{ fontSize: "0.9rem", color: "var(--foreground)", lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {whyStats.map(({ value, label, sub }) => (
                <div key={label} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.875rem", fontWeight: 900, color: "var(--primary)", letterSpacing: "-0.02em", lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--foreground)", marginTop: "0.375rem" }}>{label}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", marginTop: "0.2rem" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════ CTA ══════ */}
      <div style={{ background: "var(--muted)" }}>
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ background: "var(--primary)", borderRadius: "1.25rem", padding: "3rem 2.5rem", textAlign: "center" }}>
            <span className="section-label" style={{ background: "rgba(232,163,23,0.20)", color: "#F5C542" }}>Free Consultation</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              Not Sure Which Country Is Right for You?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "50ch", marginInline: "auto" }}>
              Our counselors will evaluate your profile, budget, and career goals — then recommend the perfect destination and program.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
              <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", background: "#E8A317", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(232,163,23,0.45)" }}>
                Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link href="/scholarships" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", border: "1.5px solid rgba(255,255,255,0.30)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
                View Scholarships
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px)  { .dest-grid { grid-template-columns: 1fr 1fr !important; } .why-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
        @media (max-width: 600px)  { .dest-grid { grid-template-columns: 1fr !important; } .facts-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </>
  );
}
