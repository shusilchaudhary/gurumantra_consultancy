import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Scholarships 2026 — Study Abroad Scholarships for Nepali Students",
  description: "Comprehensive list of scholarships for Nepali students studying in Australia, Canada, UK, USA, Germany, Japan, New Zealand, and Ireland. Updated for 2026 intakes.",
};

const HERO_STATS = [
  { value: "NPR 5 Cr+", label: "Scholarships Won"  },
  { value: "30+",        label: "Scholarship Types" },
  { value: "8",          label: "Countries Covered" },
];

export default function ScholarshipsPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{
        background: `linear-gradient(rgba(21,101,192,0.82), rgba(13,71,161,0.90)), url(https://images.unsplash.com/photo-1627556704302-624286467c65?w=1400&h=700&fit=crop&auto=format&q=80)`,
        backgroundSize: "cover", backgroundPosition: "center",
        color: "#fff", paddingTop: "5rem", paddingBottom: "5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.06, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>2026 Scholarships</span>
          <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Scholarships for Nepali Students
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: "2rem" }}>
            Explore merit-based, need-based, and government scholarships across 8 countries. We&apos;ve helped students secure over{" "}
            <strong style={{ color: "#fff" }}>NPR 5 Crore</strong> in collective scholarship funding.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", maxWidth: 480, marginInline: "auto" }}>
            {HERO_STATS.map(({ value, label }) => (
              <div key={label} style={{ borderRadius: "0.875rem", padding: "0.875rem 0.5rem", textAlign: "center", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <div style={{ fontSize: "1.375rem", fontWeight: 900, color: "#fff" }}>{value}</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.72)", marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SCHOLARSHIP TABLES ══════ */}
      <div style={{ background: "var(--background)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">By Country</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Scholarships Available in 2026
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              Click any destination for the full guide including eligibility criteria, application tips, and deadlines.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {countries.map((country) => (
              <div key={country.slug} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", overflow: "hidden" }}>

                {/* Country header */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: "1rem", padding: "1.25rem 1.75rem",
                  background: "var(--muted)", borderBottom: "1px solid var(--border)",
                  flexWrap: "wrap",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <span style={{ fontSize: "2rem" }} aria-hidden="true">{country.flag}</span>
                    <div>
                      <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--foreground)" }}>{country.name} Scholarships</h2>
                      <p style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", marginTop: 2 }}>{country.scholarships.length} scholarships listed</p>
                    </div>
                  </div>
                  <Link href={`/study-destinations/${country.slug}`} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.375rem",
                    fontSize: "0.78rem", fontWeight: 700, color: "var(--primary)", textDecoration: "none",
                  }}>
                    Full {country.name} Guide <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>

                {/* Table */}
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <th style={{ padding: "0.75rem 1.75rem", textAlign: "left", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>Scholarship</th>
                        <th style={{ padding: "0.75rem 1.75rem", textAlign: "left", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>Amount</th>
                        <th style={{ padding: "0.75rem 1.75rem", textAlign: "left", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted-foreground)" }}>Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      {country.scholarships.map((s, i) => (
                        <tr key={s.name} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--muted)" }}>
                          <td style={{ padding: "1rem 1.75rem" }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                              <Award style={{ width: 15, height: 15, color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                              <span style={{ fontWeight: 600, color: "var(--foreground)" }}>{s.name}</span>
                            </div>
                          </td>
                          <td style={{ padding: "1rem 1.75rem" }}>
                            <span style={{ display: "inline-flex", padding: "0.25rem 0.75rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 800, color: "#fff", background: "var(--accent)" }}>
                              {s.amount}
                            </span>
                          </td>
                          <td style={{ padding: "1rem 1.75rem", color: "var(--muted-foreground)", fontSize: "0.85rem" }}>{s.eligibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ CTA ══════ */}
      <div style={{ background: "var(--muted)", borderTop: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ background: "var(--primary)", borderRadius: "1.25rem", padding: "3rem 2.5rem", textAlign: "center" }}>
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Free Scholarship Help</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              Need Help Finding the Right Scholarship?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "50ch", marginInline: "auto" }}>
              Our counselors identify the best opportunities for your profile and help you prepare winning applications — completely free.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
              <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", background: "#E8A317", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(232,163,23,0.45)" }}>
                Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link href="/study-destinations" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", border: "1.5px solid rgba(255,255,255,0.30)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
