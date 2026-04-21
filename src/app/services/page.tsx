import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, BookOpen, FileCheck, School, Award, Plane, ArrowRight, Users, Shield, Star, CheckCircle } from "lucide-react";
import { services } from "@/data/content";
import { ServiceCard } from "@/components/services/service-card";

export const metadata: Metadata = {
  title: "Our Services — Study Abroad Services for Nepali Students",
  description: "Gurumantra Educational Consultancy offers career counselling, university admission, visa assistance, test preparation (IELTS/PTE), scholarship guidance, and pre-departure support.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap, BookOpen, FileCheck, School, Award, Plane,
};

const TRUST = [
  { icon: Users,       value: "2,000+", label: "Students Placed"     },
  { icon: Shield,      value: "98%",    label: "Visa Success Rate"    },
  { icon: Star,        value: "200+",   label: "Partner Universities" },
  { icon: CheckCircle, value: "15+",    label: "Years Experience"     },
];

const STEPS = [
  { n: "01", title: "Free Consultation",    desc: "Tell us your goals, budget and timeline. We evaluate your profile and recommend the right path." },
  { n: "02", title: "University Selection", desc: "We shortlist universities matching your profile and craft compelling applications and SOPs." },
  { n: "03", title: "Visa & Documents",     desc: "We build a watertight visa file — documents, finances, and mock interview coaching." },
  { n: "04", title: "Pre-Departure",        desc: "Arrival briefings, accommodation, banking, SIM card and student community connections." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{
        background: `linear-gradient(rgba(21,101,192,0.82), rgba(13,71,161,0.90)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=700&fit=crop&auto=format&q=80)`,
        backgroundSize: "cover", backgroundPosition: "center",
        color: "#fff", paddingTop: "5rem", paddingBottom: "5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.06, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(211,47,47,)", color: "#E53935" }}>What We Offer</span>
          <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            End-to-End Study Abroad Services
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)" }}>
            From your first counselling session to landing at your dream university — we handle every step with expertise and care.
          </p>
        </div>
      </section>

      {/* ══════ TRUST STATS BAR ══════ */}
      <div style={{ background: "#0D47A1", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="trust-grid">
            {TRUST.map(({ icon: Icon, value, label }, i) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "1.25rem 1.5rem",
                borderRight: i < TRUST.length - 1 ? "1px solid rgba(255,255,255,0.10)" : "none",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "0.625rem", flexShrink: 0,
                  background: "rgba(211,47,47,)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon style={{ width: 16, height: 16, color: "#E53935" }} />
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

      {/* ══════ SERVICES GRID ══════ */}
      <div style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Our Services</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Everything Under One Roof
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "52ch", marginInline: "auto" }}>
              Six specialised services designed to take you from Nepal to your dream university — seamlessly, ethically, and successfully.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="services-grid">
            {services.map((svc) => (
              <ServiceCard
                key={svc.title}
                icon={ICON_MAP[svc.icon] ?? GraduationCap}
                title={svc.title}
                tagline={svc.tagline}
                features={svc.features}
                href={svc.href}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ══════ HOW WE WORK ══════ */}
      <div style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Our Process</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              How We Work With You
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "52ch", marginInline: "auto" }}>
              A structured, step-by-step journey that removes confusion and keeps you on track.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }} className="steps-grid">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} style={{
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: "1rem", padding: "1.75rem",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  fontSize: "3rem", fontWeight: 900, lineHeight: 1, marginBottom: "1rem",
                  color: "transparent", WebkitTextStroke: "2px var(--primary)", opacity: 0.2,
                  userSelect: "none",
                }} aria-hidden="true">{n}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ CTA ══════ */}
      <div style={{ background: "var(--muted)" }}>
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ background: "var(--primary)", borderRadius: "1.25rem", padding: "3rem 2.5rem", textAlign: "center" }}>
            <span className="section-label" style={{ background: "rgba(211,47,47,)", color: "#E53935" }}>Get Started Today</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              Need Personalised Guidance?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "48ch", marginInline: "auto" }}>
              Our expert counselors will assess your profile and recommend the best path forward — completely free, no obligation.
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
        @media (max-width: 900px)  { .services-grid { grid-template-columns: 1fr 1fr !important; } .steps-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px)  { .services-grid { grid-template-columns: 1fr !important; } .steps-grid { grid-template-columns: 1fr !important; } .trust-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </>
  );
}
