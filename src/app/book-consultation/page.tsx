"use client";
import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

const destinations = [
  { slug: "south-korea",   name: "South Korea",     flag: "🇰🇷" },
  { slug: "australia",   name: "Australia",      flag: "🇦🇺" },
  { slug: "canada",      name: "Canada",          flag: "🇨🇦" },
  { slug: "uk",          name: "United Kingdom",  flag: "🇬🇧" },
  { slug: "usa",         name: "United States",   flag: "🇺🇸" },
  { slug: "new-zealand", name: "New Zealand",     flag: "🇳🇿" },
  { slug: "germany",     name: "Germany",         flag: "🇩🇪" },
  { slug: "japan",       name: "Japan",           flag: "🇯🇵" },
];

const TRUST_POINTS = [
  "98% visa success rate",
  "2,000+ students placed",
  "200+ university partners",
  "Free — no obligation",
  "Response within 24 hours",
];

const CONTACT = [
  { icon: Phone,  label: "Phone",  value: "+977-9802356302",                                  href: "tel:+9779802356302" },
  { icon: Mail,   label: "Email",  value: "info@gurumantra.edu.np",                           href: "mailto:info@gurumantra.edu.np" },
  { icon: MapPin, label: "Office", value: "Chabahil Central Complex, 3rd Floor, Kathmandu",  href: "https://maps.google.com" },
  { icon: Clock,  label: "Hours",  value: "Sun–Fri  10 AM – 5 PM",                           href: undefined },
];

const INPUT: React.CSSProperties = {
  width: "100%", padding: "0.7rem 1rem", borderRadius: "0.75rem",
  border: "1px solid var(--border)", background: "var(--background)",
  color: "var(--foreground)", fontSize: "0.875rem", outline: "none",
  boxSizing: "border-box",
};

function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", message: "" });

  if (submitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "3.5rem 0", textAlign: "center" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
          <CheckCircle style={{ width: 30, height: 30, color: "#16a34a" }} />
        </div>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "0.5rem" }}>Thank You!</h3>
        <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", maxWidth: "30ch", lineHeight: 1.6 }}>Our counselor will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Full Name *</label>
          <input required type="text" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={INPUT} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Email Address *</label>
          <input required type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={INPUT} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Phone Number *</label>
          <input required type="tel" placeholder="+977 98XXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={INPUT} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Preferred Destination</label>
          <div style={{ position: "relative" }}>
            <select value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} style={{ ...INPUT, appearance: "none" as const }}>
              <option value="">Select destination…</option>
              {destinations.map((d) => <option key={d.slug} value={d.name}>{d.flag} {d.name}</option>)}
              <option value="Not decided">Not decided yet</option>
            </select>
            <ChevronDown style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "var(--muted-foreground)", pointerEvents: "none" }} />
          </div>
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.375rem" }}>Your Message</label>
        <textarea rows={4} placeholder="Tell us about your goals, qualifications, preferred budget…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...INPUT, resize: "none" }} />
      </div>
      <button type="submit" style={{ width: "100%", padding: "0.95rem", borderRadius: "0.875rem", background: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(21,101,192,0.30)" }}>
        Get Free Consultation →
      </button>
      <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", textAlign: "center" }}>100% free. No obligation. We respond within 24 hours.</p>
    </form>
  );
}

export default function BookConsultationPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{
        background: `linear-gradient(rgba(21,101,192,0.82), rgba(13,71,161,0.90)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=700&fit=crop&auto=format&q=80)`,
        backgroundSize: "cover", backgroundPosition: "center",
        color: "#fff", paddingTop: "5rem", paddingBottom: "5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.06, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(211,47,47,)", color: "#E53935" }}>100% Free</span>
          <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Book a Free Consultation
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)" }}>
            Talk to our expert counselors about your study abroad goals. No fees, no pressure — just honest, personalised guidance.
          </p>
        </div>
      </section>

      {/* ══════ FORM + SIDEBAR ══════ */}
      <div style={{ background: "var(--background)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "2.5rem", alignItems: "start" }} className="consult-grid">

            {/* ── Form ── */}
            <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1.25rem", overflow: "hidden" }}>
              <div style={{ height: 3, background: "linear-gradient(90deg, var(--primary), rgba(21,101,192,0.3))" }} />
              <div style={{ padding: "2rem" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--foreground)", marginBottom: "0.375rem" }}>Tell Us About Your Goals</h2>
                <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", marginBottom: "1.75rem" }}>Fill in the form below and our counselor will call you within 24 hours.</p>
                <ConsultationForm />
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Why Choose Us */}
              <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.75rem" }}>
                <div style={{ height: 3, background: "linear-gradient(90deg, var(--primary), rgba(21,101,192,0.3))", borderRadius: "2px 2px 0 0", margin: "-1.75rem -1.75rem 1.5rem" }} />
                <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--foreground)", marginBottom: "1.25rem" }}>Why Choose Gurumantra?</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem", listStyle: "none", padding: 0, margin: 0 }}>
                  {TRUST_POINTS.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#E3F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <CheckCircle style={{ width: 12, height: 12, color: "var(--primary)" }} />
                      </div>
                      <span style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.75rem" }}>
                <div style={{ height: 3, background: "linear-gradient(90deg, var(--primary), rgba(21,101,192,0.3))", borderRadius: "2px 2px 0 0", margin: "-1.75rem -1.75rem 1.5rem" }} />
                <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--foreground)", marginBottom: "1.25rem" }}>Contact Us Directly</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1.1rem", listStyle: "none", padding: 0, margin: 0 }}>
                  {CONTACT.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                      <div style={{ width: 34, height: 34, borderRadius: "0.625rem", background: "#E3F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon style={{ width: 15, height: 15, color: "var(--primary)" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--muted-foreground)", marginBottom: "0.2rem" }}>{label}</p>
                        {href ? (
                          <a href={href} style={{ fontSize: "0.85rem", color: "var(--foreground)", textDecoration: "none" }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground)")}>{value}</a>
                        ) : (
                          <p style={{ fontSize: "0.85rem", color: "var(--foreground)", margin: 0 }}>{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div style={{ background: "var(--muted)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.5rem" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--muted-foreground)", marginBottom: "1rem" }}>Quick Links</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { label: "Study Destinations", href: "/study-destinations" },
                    { label: "Scholarships 2026",  href: "/scholarships"       },
                    { label: "Test Preparation",   href: "/test-preparation"   },
                    { label: "Success Stories",    href: "/success-stories"    },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--foreground)", textDecoration: "none", padding: "0.5rem 0", borderBottom: "1px solid var(--border)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground)")}>
                      {label}
                      <ArrowRight style={{ width: 13, height: 13, flexShrink: 0 }} />
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .consult-grid  { grid-template-columns: 1fr !important; }
          .form-2col     { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
