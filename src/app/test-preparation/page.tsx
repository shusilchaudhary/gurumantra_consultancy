import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Test Preparation — IELTS, PTE, TOEFL, Languages | Gurumantra",
  description:
    "Expert IELTS, PTE, TOEFL, Duolingo, Korean, and Japanese preparation classes in Kathmandu. Small batches, experienced trainers, flexible timings.",
};

const COURSES = [
  { 
    name: "Korean Language", 
    fullName: "TOPIK & EPS-TOPIK", 
    icon: "🇰🇷", 
    tagline: "Essential for South Korean universities and D-4/D-2 visa success.", 
    color: "#D32F2F", 
    color2: "#B71C1C", 
    highlights: ["Native-tier instructors", "TOPIK 1-4 prep", "Interview training"], 
    badge: "Our Specialty", 
    badgeColor: "#D32F2F" 
  },
  { 
    name: "IELTS", 
    fullName: "International English Language Testing System", 
    icon: "🇬🇧", 
    tagline: "The world's most widely accepted English test for global universities.", 
    color: "#1565C0", 
    color2: "#0D47A1", 
    highlights: ["Max 15 students", "2 mock tests/wk", "Score guarantee"], 
    badge: "Most Popular", 
    badgeColor: "#1565C0" 
  },
  { 
    name: "PTE Academic", 
    fullName: "Pearson Test of English", 
    icon: "💻", 
    tagline: "Computer-based test with rapid results in just 48 hours.", 
    color: "#6D28D9", 
    color2: "#4C1D95", 
    highlights: ["AI scoring analysis", "48hr results", "Template strategies"], 
    badge: "Fastest Results", 
    badgeColor: "#6D28D9" 
  },
  { 
    name: "Japanese Language", 
    fullName: "JLPT & NAT-TEST", 
    icon: "🇯🇵", 
    tagline: "Comprehensive preparation from N5 basics up to N3 intermediate.", 
    color: "#880E4F", 
    color2: "#4a0028", 
    highlights: ["JLPT & NAT focus", "Kanji mastery", "Speaking drills"], 
    badge: "Trending", 
    badgeColor: "#C62828" 
  },
  { 
    name: "Duolingo (DET)", 
    fullName: "Duolingo English Test", 
    icon: "🦉", 
    tagline: "Fast, convenient, and affordable online test accepted widely in North America.", 
    color: "#2E7D32", 
    color2: "#1B5E20", 
    highlights: ["Fast-track training", "Home testing prep", "High scoring tricks"], 
    badge: "Most Convenient", 
    badgeColor: "#2E7D32" 
  },
  { 
    name: "TOEFL iBT", 
    fullName: "Test of English as a Foreign Language", 
    icon: "🇺🇸", 
    tagline: "The gold standard for universities across the USA and Canada.", 
    color: "#065F46", 
    color2: "#064E3B", 
    highlights: ["Academic context", "Full-length mocks", "Speaking frames"], 
    badge: "USA & Canada", 
    badgeColor: "#065F46" 
  },
];

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
        background: `linear-gradient(rgba(21,101,192,0.88), rgba(13,71,161,0.92)), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&h=700&fit=crop&auto=format&q=80)`,
        backgroundSize: "cover", backgroundPosition: "center",
        color: "#fff", paddingTop: "5rem", paddingBottom: "5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.15, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.15, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 768, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(211,47,47,)", color: "#E53935" }}>
            Test Preparation &amp; Languages
          </span>
          <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Master Your Tests. <br/> Secure Your Visa.
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: "2rem" }}>
            From elite English proficiency to intensive Korean and Japanese language training, we equip you for absolute success on your first attempt.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.625rem" }}>
            {["IELTS", "PTE", "TOEFL", "Duolingo", "Korean TOPIK", "Japanese JLPT"].map((name) => (
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
          COURSES GRID (Replaces old tabs)
      ══════════════════════════════════════════ */}
      <div style={{ background: "var(--background)" }}>
        <div className="container-main" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Classes</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Explore Our Training Programs
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              Tailored preparation courses designed around one goal: your highest possible score in the shortest possible time.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="courses-grid">
            {COURSES.map((course) => (
              <div key={course.name} style={{ display: "flex", flexDirection: "column", borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--border)", background: "var(--card)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                
                {/* Header Banner */}
                <div style={{ background: `linear-gradient(135deg, ${course.color} 0%, ${course.color2} 100%)`, padding: "1.5rem", position: "relative", flexShrink: 0 }}>
                  <span style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "0.68rem", fontWeight: 800, color: "#fff", padding: "0.25rem 0.75rem", borderRadius: 999, background: "rgba(0,0,0,0.25)" }}>
                    {course.badge}
                  </span>
                  <div style={{ fontSize: "3rem", marginBottom: "0.75rem", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}>{course.icon}</div>
                  <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>{course.name}</h2>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", marginTop: "0.25rem", fontWeight: 500 }}>{course.fullName}</p>
                </div>
                
                {/* Body Content */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.6, marginBottom: "1.25rem" }}>{course.tagline}</p>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1, marginBottom: "1.5rem" }}>
                    {course.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <CheckCircle style={{ width: 14, height: 14, color: course.color, flexShrink: 0 }} />
                        <span style={{ fontSize: "0.85rem", color: "var(--foreground)", fontWeight: 500 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/book-consultation" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.875rem 1.25rem", borderRadius: "0.75rem", background: `${course.color}15`, color: course.color, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", transition: "background 0.2s" }}>
                    <span>Enroll Now</span>
                    <ChevronRight style={{ width: 18, height: 18 }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US  +  NOT SURE CARD
      ══════════════════════════════════════════ */}
      <div style={{ background: "var(--muted)", borderTop: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }} className="why-grid">

            {/* LEFT — checklist */}
            <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "2.5rem" }}>
              <span className="section-label" style={{ marginBottom: "1rem" }}>Why Gurumantra</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                What Makes Us Different
              </h2>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {WHY.map(({ label }) => (
                  <li key={label} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <span style={{ width: 26, height: 26, borderRadius: "50%", flexShrink: 0, background: "#EBF2FF", display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid #BFDBFE" }}>
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 4-4.5" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span style={{ fontSize: "0.95rem", color: "var(--foreground)", fontWeight: 500 }}>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — Not Sure card */}
            <div style={{ background: "var(--primary)", borderRadius: "1.25rem", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", color: "#fff" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "1rem", background: "rgba(255,255,255,0.15)", fontSize: "1.75rem" }}>
                🤔
              </div>
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
                  Not Sure Which Test to Take?
                </h3>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                  Our counselors will recommend the best language or proficiency test based on your destination country, target university, and personal strengths — completely free.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
                <Link href="/book-consultation" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "1rem 1.5rem", borderRadius: "0.875rem", background: "#D32F2F", color: "#fff", fontWeight: 700, fontSize: "1rem", boxShadow: "0 4px 14px rgba(211,47,47,)", transition: "opacity 0.15s" }}>
                  Book Free Consultation <ArrowRight style={{ width: 18, height: 18 }} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          .courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .courses-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
