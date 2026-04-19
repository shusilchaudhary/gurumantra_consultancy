"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, GraduationCap, Globe, Users, CheckCircle,
  Star, ChevronRight, BookOpen, FileCheck, School, Award, Plane,
  Phone, MapPin, Clock, ChevronDown, Shield,
} from "lucide-react";
import { testimonials, services, blogPosts } from "@/data/content";

/* ── Images ── */
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
const BLOG_IMAGES: Record<string, string> = {
  "Guide":        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=200&fit=crop&auto=format&q=80",
  "Test Prep":    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=200&fit=crop&auto=format&q=80",
  "Visa Updates": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=200&fit=crop&auto=format&q=80",
};

/* ── Data ── */
const TRUST = [
  { icon: Users,       value: "2,000+", label: "Students Placed"     },
  { icon: Shield,      value: "98%",    label: "Visa Success Rate"    },
  { icon: School,      value: "200+",   label: "Partner Universities" },
  { icon: CheckCircle, value: "15+",    label: "Years Experience"     },
];

const destinations = [
  { name: "Australia",      slug: "australia",   flag: "🇦🇺", tagline: "Top-ranked universities & post-study work rights",  color: "#1565C0", color2: "#0D47A1" },
  { name: "Canada",         slug: "canada",      flag: "🇨🇦", tagline: "Clear PR pathway & world-class education",          color: "#B71C1C", color2: "#7F0000" },
  { name: "United Kingdom", slug: "uk",          flag: "🇬🇧", tagline: "1-year Master's & Graduate Route visa",             color: "#4A148C", color2: "#1A0050" },
  { name: "United States",  slug: "usa",         flag: "🇺🇸", tagline: "World-class research universities & OPT",           color: "#1B5E20", color2: "#003300" },
  { name: "New Zealand",    slug: "new-zealand", flag: "🇳🇿", tagline: "Safe, scenic & affordable education",               color: "#006064", color2: "#00363a" },
  { name: "Germany",        slug: "germany",     flag: "🇩🇪", tagline: "Tuition-free public universities",                 color: "#E65100", color2: "#8D3100" },
  { name: "Japan",          slug: "japan",       flag: "🇯🇵", tagline: "MEXT scholarships & tech innovation hub",          color: "#880E4F", color2: "#4a0028" },
  { name: "Ireland",        slug: "ireland",     flag: "🇮🇪", tagline: "Tech HQ of Europe & fast visa processing",         color: "#2E7D32", color2: "#005005" },
];

const whyUs = [
  { title: "Expert Counseling",   desc: "One-on-one guidance from certified counselors with 10+ years of experience." },
  { title: "98% Visa Success",    desc: "Watertight applications with thorough document prep and interview coaching."  },
  { title: "200+ Universities",   desc: "Direct partnerships with universities in 8 countries for faster admissions."  },
  { title: "Scholarship Support", desc: "We've helped students secure over NPR 5 Crore in scholarships collectively." },
  { title: "End-to-End Service",  desc: "From IELTS coaching to pre-departure briefings — everything under one roof." },
];

const STEPS = [
  { n: "01", title: "Free Consultation",   desc: "Discuss your goals, budget & dream destination with our experts."        },
  { n: "02", title: "University Selection",desc: "We shortlist universities & craft compelling applications for you."        },
  { n: "03", title: "Test Preparation",    desc: "IELTS, PTE, TOEFL coaching to hit your target score."                    },
  { n: "04", title: "Visa Application",    desc: "Document prep, financial structuring & interview coaching."               },
  { n: "05", title: "Pre-Departure",       desc: "Airport briefing, accommodation & student community connections."         },
];

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap, BookOpen, FileCheck, School, Award, Plane,
};

const INPUT: React.CSSProperties = {
  width: "100%", padding: "0.65rem 1rem", borderRadius: "0.75rem",
  border: "1px solid var(--border)", background: "var(--background)",
  color: "var(--foreground)", fontSize: "0.875rem", outline: "none",
  boxSizing: "border-box",
};

/* ── Consultation form (client component stays inside "use client" page) ── */
function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", message: "" });

  if (submitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "3rem 0", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
          <CheckCircle style={{ width: 28, height: 28, color: "#16a34a" }} />
        </div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "0.5rem" }}>Thank You!</h3>
        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", maxWidth: "28ch" }}>Our counselor will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Full Name *</label>
          <input required type="text" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={INPUT} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Email Address *</label>
          <input required type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={INPUT} />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Phone Number *</label>
        <input required type="tel" placeholder="+977 98XXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={INPUT} />
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Preferred Destination</label>
        <div style={{ position: "relative" }}>
          <select value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} style={{ ...INPUT, appearance: "none" as const }}>
            <option value="">Select destination...</option>
            {destinations.map((d) => <option key={d.slug} value={d.name}>{d.flag} {d.name}</option>)}
            <option value="Not decided">Not decided yet</option>
          </select>
          <ChevronDown style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "var(--muted-foreground)", pointerEvents: "none" }} />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Your Message</label>
        <textarea rows={3} placeholder="Tell us about your goals, qualifications, budget..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...INPUT, resize: "none" }} />
      </div>
      <button type="submit" style={{ width: "100%", padding: "0.9rem", borderRadius: "0.875rem", background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(21,101,192,0.30)" }}>
        Get Free Consultation →
      </button>
      <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", textAlign: "center" }}>100% free. No obligation. We respond within 24 hours.</p>
    </form>
  );
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{ background: "var(--primary)", color: "#fff", paddingTop: "5rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.06, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 760, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Nepal&apos;s Most Trusted Since 2010</span>
          <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Your Dream University<br />
            <span style={{ color: "#F5C542" }}>Awaits — We Guide the Way</span>
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: "2rem" }}>
            Over 2,000 Nepali students placed in top universities across 8 countries.
            Expert counseling, IELTS prep, visa assistance &amp; full scholarship support.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
            <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", background: "#E8A317", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(232,163,23,0.45)" }}>
              Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link href="/study-destinations" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", border: "1.5px solid rgba(255,255,255,0.30)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
              Explore Destinations <Globe style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ TRUST STATS BAR ══════ */}
      <div style={{ background: "#0D47A1", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="trust-grid">
            {TRUST.map(({ icon: Icon, value, label }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1.25rem 1.5rem", borderRight: i < TRUST.length - 1 ? "1px solid rgba(255,255,255,0.10)" : "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: "0.625rem", flexShrink: 0, background: "rgba(232,163,23,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon style={{ width: 16, height: 16, color: "#F5C542" }} />
                </div>
                <div>
                  <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ ANNOUNCEMENT BAR ══════ */}
      <div style={{ background: "var(--accent)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="container-main" style={{ paddingTop: "0.75rem", paddingBottom: "0.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff" }}>
            <strong>July 2026 Intake</strong> applications are now open — Australia, Canada &amp; UK.
          </span>
          <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.875rem", fontWeight: 700, color: "#fff", textDecoration: "underline", whiteSpace: "nowrap" }}>
            Apply Now <ChevronRight style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </div>

      {/* ══════ STUDY DESTINATIONS ══════ */}
      <div style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Study Destinations</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Choose Where You Want to Study
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              Explore detailed guides for 8 top study destinations — eligibility, costs, visa steps, and scholarship opportunities.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }} className="dest-grid">
            {destinations.map((d) => (
              <Link key={d.slug} href={`/study-destinations/${d.slug}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--border)" }}>
                {/* Image banner */}
                <div style={{ height: 120, background: `linear-gradient(135deg, ${d.color}CC 0%, ${d.color2}CC 100%), url(${DEST_IMAGES[d.slug]})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem", flexShrink: 0 }}>
                  {d.flag}
                </div>
                {/* Content */}
                <div style={{ background: "var(--card)", padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ color: "var(--foreground)", fontWeight: 800, fontSize: "0.95rem", marginBottom: "0.375rem" }}>{d.name}</h3>
                  <p style={{ color: "var(--muted-foreground)", fontSize: "0.78rem", lineHeight: 1.6, flex: 1, marginBottom: "0.875rem" }}>{d.tagline}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: d.color, fontSize: "0.78rem", fontWeight: 700 }}>
                    Explore <ChevronRight style={{ width: 13, height: 13 }} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/study-destinations" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: 999, border: "2px solid var(--primary)", color: "var(--primary)", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
              View All Destinations <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════ OUR SERVICES ══════ */}
      <div style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Our Services</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Everything You Need Under One Roof
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              From your first consultation to landing in your dream country — we handle every step.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="services-grid">
            {services.map((svc) => {
              const Icon = ICON_MAP[svc.icon] || GraduationCap;
              return (
                <div key={svc.title} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.75rem", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: 3, background: "linear-gradient(90deg, var(--primary), rgba(21,101,192,0.3))", borderRadius: "2px 2px 0 0", margin: "-1.75rem -1.75rem 1.5rem" }} />
                  <div style={{ width: 48, height: 48, borderRadius: "0.875rem", background: "#E3F0FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon style={{ width: 22, height: 22, color: "var(--primary)" }} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>{svc.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.75, flex: 1 }}>{svc.description}</p>
                  <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "1.25rem" }}>
                    Learn more <ChevronRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════ HOW IT WORKS ══════ */}
      <div style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">How It Works</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Your Journey to Study Abroad
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              A simple 5-step process — from your first consultation to landing at your dream university.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }} className="steps-grid">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.75rem", color: "transparent", WebkitTextStroke: "2px var(--primary)", opacity: 0.15, userSelect: "none" }} aria-hidden="true">{n}</div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: 999, background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(21,101,192,0.30)" }}>
              Start Your Journey Today <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════ TESTIMONIALS ══════ */}
      <div style={{ background: "var(--primary)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Student Stories</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              Real Students. Real Success.
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              Hear from the 2,000+ Nepali students who achieved their study abroad dreams with Gurumantra.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="testi-grid">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} style={{ borderRadius: "1rem", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div style={{ display: "flex", gap: 3 }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} style={{ width: 14, height: 14, fill: "#FBBF24", color: "#FBBF24" }} />
                  ))}
                </div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.8, fontStyle: "italic", color: "rgba(255,255,255,0.88)", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1rem" }}>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.875rem" }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#F5C542", marginTop: 2 }}>{t.program} — {t.university}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/success-stories" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.30)", color: "#fff", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
              Read All Success Stories <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════ WHY US + FORM ══════ */}
      <div style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }} className="why-form-grid">

            {/* Left */}
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 style={{ marginTop: "0.75rem", marginBottom: "0.75rem", fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
                Nepal&apos;s Most Trusted <span style={{ color: "var(--primary)" }}>Study Abroad Partner</span>
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                With over 15 years of experience and 2,000+ successful students, we provide the most comprehensive study abroad support in Nepal.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.75rem" }}>
                {whyUs.map((w) => (
                  <div key={w.title} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                    <div style={{ width: 34, height: 34, borderRadius: "0.625rem", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCircle style={{ width: 16, height: 16, color: "#fff" }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--foreground)", marginBottom: "0.2rem" }}>{w.title}</h4>
                      <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Contact card */}
              <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { icon: <Phone style={{ width: 14, height: 14, color: "var(--primary)" }} />, label: "Call Us",      value: "+977-9802356302",                                     href: "tel:+9779802356302" },
                  { icon: <MapPin style={{ width: 14, height: 14, color: "var(--primary)" }} />, label: "Visit Us",    value: "Chabahil Central Complex, 3rd Floor, Kathmandu" },
                  { icon: <Clock style={{ width: 14, height: 14, color: "var(--primary)" }} />,  label: "Hours",       value: "Sun – Fri  9:00 AM – 6:00 PM" },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "0.5rem", background: "#E3F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.78rem", color: "var(--foreground)" }}>{label}</div>
                      {href
                        ? <a href={href} style={{ fontSize: "0.82rem", color: "var(--primary)", textDecoration: "none" }}>{value}</a>
                        : <span style={{ fontSize: "0.82rem", color: "var(--muted-foreground)" }}>{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "2.25rem", boxShadow: "0 8px 32px rgba(0,0,0,0.07)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--foreground)", marginBottom: "0.375rem" }}>Get a Free Consultation</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
                One of our expert counselors will get back to you within 24 hours.
              </p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>

      {/* ══════ BLOG ══════ */}
      <div style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <div>
              <span className="section-label">Latest Updates</span>
              <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.375rem, 3vw, 2rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>News &amp; Guides</h2>
            </div>
            <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", borderRadius: 999, border: "1.5px solid rgba(21,101,192,0.30)", color: "var(--primary)", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", whiteSpace: "nowrap" }}>
              View All Articles <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="blog-home-grid">
            {blogPosts.map((post) => (
              <div key={post.slug} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 3, background: "linear-gradient(90deg, var(--primary), rgba(21,101,192,0.3))" }} />
                <div style={{ height: 160, background: `linear-gradient(135deg, rgba(21,101,192,0.72) 0%, rgba(30,136,229,0.65) 100%), url(${BLOG_IMAGES[post.category] ?? BLOG_IMAGES["Guide"]})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ position: "absolute", top: "1rem", left: "1rem", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff", padding: "0.3rem 0.75rem", borderRadius: 999, background: "rgba(255,255,255,0.18)" }}>{post.category}</span>
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>
                    <span>{post.date}</span><span style={{ opacity: 0.4 }}>•</span><span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--foreground)", lineHeight: 1.45, marginBottom: "0.75rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.7, flex: 1, marginBottom: "1.25rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt}</p>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                    <Link href={`/blog/${post.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", color: "var(--primary)", fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>
                      Read Article <ArrowRight style={{ width: 13, height: 13 }} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ CTA ══════ */}
      <div style={{ background: "var(--muted)" }}>
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ background: "var(--primary)", borderRadius: "1.25rem", padding: "3rem 2.5rem", textAlign: "center" }}>
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Get Started Today</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              Your Global Future Starts Today
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "50ch", marginInline: "auto" }}>
              Join 2,000+ Nepali students who trusted Gurumantra to take them from Kathmandu to the world&apos;s best universities.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
              <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", background: "#E8A317", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(232,163,23,0.45)" }}>
                Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <a href="tel:+9779802356302" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", border: "1.5px solid rgba(255,255,255,0.30)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
                <Phone style={{ width: 16, height: 16 }} /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>


      <style>{`
        @media (max-width: 1024px) {
          .dest-grid      { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-grid     { grid-template-columns: repeat(3, 1fr) !important; }
          .why-form-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .services-grid  { grid-template-columns: 1fr 1fr !important; }
          .testi-grid     { grid-template-columns: 1fr !important; }
          .blog-home-grid { grid-template-columns: 1fr 1fr !important; }
          .steps-grid     { grid-template-columns: 1fr 1fr !important; }
          .trust-grid     { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .dest-grid      { grid-template-columns: 1fr 1fr !important; }
          .services-grid  { grid-template-columns: 1fr !important; }
          .blog-home-grid { grid-template-columns: 1fr !important; }
          .steps-grid     { grid-template-columns: 1fr !important; }
          .form-row       { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
