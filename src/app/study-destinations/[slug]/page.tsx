import { countries } from "@/data/countries";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Star, Calendar, Award, Users, ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};
  return {
    title: `Study in ${country.name} from Nepal 2026 — Costs, Visa, Scholarships`,
    description: `Complete guide to studying in ${country.name} from Nepal. Eligibility, tuition costs in NPR, visa step-by-step, top universities, scholarships, and 2026 intakes.`,
  };
}

const thStyle: React.CSSProperties = {
  padding: "0.75rem 1.25rem", textAlign: "left",
  fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase",
  letterSpacing: "0.08em", color: "#fff", background: "var(--primary)",
};
const tdStyle: React.CSSProperties = { padding: "0.875rem 1.25rem", fontSize: "0.875rem" };

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

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
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.06, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <Link href="/study-destinations" style={{
            display: "inline-flex", alignItems: "center", gap: "0.375rem",
            fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.72)",
            textDecoration: "none", marginBottom: "1.75rem",
          }}>
            <ArrowLeft style={{ width: 14, height: 14 }} /> All Destinations
          </Link>
          <div style={{ maxWidth: 720 }}>
            <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }} role="img" aria-label={country.name}>{country.flag}</span>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              {country.heroTitle}
            </h1>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.82)" }}>
              {country.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ══════ BODY ══════ */}
      <div style={{ background: "var(--background)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

            {/* ── Why Study ── */}
            <section>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Why Study in {country.name}?
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="why-study-grid">
                {country.whyStudy.map((reason) => (
                  <div key={reason} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.75rem",
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: "0.875rem", padding: "1.25rem",
                  }}>
                    <CheckCircle style={{ width: 18, height: 18, color: "var(--accent)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    <span style={{ fontSize: "0.875rem", color: "var(--foreground)", lineHeight: 1.7 }}>{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Eligibility ── */}
            <section>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Eligibility Requirements
              </h2>
              <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", overflow: "hidden" }}>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }} role="table">
                    <thead>
                      <tr>
                        {["Level", "Min GPA", "IELTS", "PTE", "TOEFL"].map((h) => (
                          <th key={h} style={thStyle}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {country.eligibility.map((e, i) => (
                        <tr key={e.level} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--muted)" }}>
                          <td style={{ ...tdStyle, fontWeight: 600, color: "var(--foreground)" }}>{e.level}</td>
                          <td style={{ ...tdStyle, color: "var(--muted-foreground)" }}>{e.gpa}</td>
                          <td style={{ ...tdStyle, color: "var(--muted-foreground)" }}>{e.ielts}</td>
                          <td style={{ ...tdStyle, color: "var(--muted-foreground)" }}>{e.pte}</td>
                          <td style={{ ...tdStyle, color: "var(--muted-foreground)" }}>{e.toefl}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Costs ── */}
            <section>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Cost of Studying in {country.name} (NPR + {country.currency})
              </h2>
              <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", overflow: "hidden" }}>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }} role="table">
                    <thead>
                      <tr>
                        {["Expense", "NPR", country.currency].map((h) => (
                          <th key={h} style={thStyle}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {country.costs.map((c, i) => (
                        <tr key={c.item} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--muted)" }}>
                          <td style={{ ...tdStyle, fontWeight: 600, color: "var(--foreground)" }}>{c.item}</td>
                          <td style={{ ...tdStyle, color: "var(--muted-foreground)" }}>{c.costNPR}</td>
                          <td style={{ ...tdStyle, color: "var(--muted-foreground)" }}>{c.costUSD}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Universities ── */}
            <section>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Top Universities for Nepali Students
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="unis-grid">
                {country.topUniversities.map((uni, i) => (
                  <div key={uni.name} style={{
                    display: "flex", alignItems: "flex-start", gap: "1rem",
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: "0.875rem", padding: "1.25rem",
                  }}>
                    <span style={{
                      width: 36, height: 36, borderRadius: "0.625rem", flexShrink: 0,
                      background: "rgba(21,101,192,0.10)", display: "flex", alignItems: "center",
                      justifyContent: "center", fontWeight: 900, color: "var(--primary)", fontSize: "0.875rem",
                    }}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--foreground)" }}>{uni.name}</h3>
                      <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: 2 }}>{uni.ranking} · {uni.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Visa Steps ── */}
            <section>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Student Visa — Step-by-Step Guide
              </h2>
              <ol style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.75rem", listStyle: "none", padding: 0 }}>
                {country.visaSteps.map((v) => (
                  <li key={v.step} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 900, fontSize: "0.875rem", color: "#fff",
                      background: "var(--accent)",
                    }} aria-label={`Step ${v.step}`}>
                      {v.step}
                    </div>
                    <div style={{ paddingTop: "0.25rem" }}>
                      <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--foreground)", marginBottom: "0.25rem" }}>{v.title}</h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{v.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", background: "var(--muted)", borderRadius: "1rem", padding: "1.5rem" }} className="visa-info-grid">
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--foreground)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Users style={{ width: 16, height: 16, color: "var(--primary)" }} /> Work Rights During Study
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{country.workRights}</p>
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--foreground)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <ArrowRight style={{ width: 16, height: 16, color: "var(--primary)" }} /> Post-Study Visa
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{country.postStudyVisa}</p>
                </div>
              </div>
            </section>

            {/* ── Intakes ── */}
            <section>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                {country.name} Intake Calendar 2026
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="intakes-grid">
                {country.intakes.map((intake) => (
                  <div key={intake.intake} style={{
                    borderRadius: "1rem", padding: "1.5rem",
                    border: intake.popular ? "1.5px solid var(--accent)" : "1px solid var(--border)",
                    background: intake.popular ? "rgba(211,47,47,)" : "var(--card)",
                  }}>
                    {intake.popular && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.75rem" }}>
                        <Star style={{ width: 12, height: 12, fill: "var(--accent)", color: "var(--accent)" }} aria-hidden="true" /> Most Popular
                      </span>
                    )}
                    <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "var(--foreground)", marginBottom: "0.75rem" }}>{intake.intake}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.78rem", color: "var(--muted-foreground)" }}>
                        <Calendar style={{ width: 13, height: 13 }} /> Months: {intake.months}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.78rem", color: "var(--muted-foreground)" }}>
                        <ArrowRight style={{ width: 13, height: 13 }} /> Deadline: {intake.deadline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Scholarships ── */}
            <section>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Scholarships for Nepali Students in {country.name}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {country.scholarships.map((s) => (
                  <div key={s.name} style={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: "0.875rem", padding: "1.25rem",
                    display: "flex", alignItems: "flex-start", justifyContent: "space-between",
                    gap: "1rem", flexWrap: "wrap",
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <Award style={{ width: 18, height: 18, color: "var(--accent)", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      <div>
                        <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--foreground)" }}>{s.name}</h3>
                        <p style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", marginTop: 2, lineHeight: 1.6 }}>{s.eligibility}</p>
                      </div>
                    </div>
                    <span style={{
                      display: "inline-flex", padding: "0.25rem 0.875rem", borderRadius: 999,
                      fontSize: "0.78rem", fontWeight: 800, color: "#fff", background: "var(--accent)",
                      flexShrink: 0, alignSelf: "flex-start",
                    }}>
                      {s.amount}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQs ── */}
            <section>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {country.faqs.map((faq) => (
                  <details key={faq.question} style={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: "0.875rem", overflow: "hidden",
                  }}>
                    <summary style={{
                      padding: "1rem 1.5rem", fontWeight: 600, fontSize: "0.9rem",
                      cursor: "pointer", listStyle: "none",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      color: "var(--foreground)",
                    }}>
                      {faq.question}
                      <span style={{ fontSize: "1.25rem", lineHeight: 1, color: "var(--muted-foreground)" }} aria-hidden="true">+</span>
                    </summary>
                    <div style={{
                      padding: "1rem 1.5rem 1.25rem",
                      fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.75,
                      borderTop: "1px solid var(--border)",
                    }}>
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ background: "var(--primary)", borderRadius: "1.25rem", padding: "3.5rem 2.5rem", textAlign: "center" }}>
              <span className="section-label" style={{ background: "rgba(211,47,47,)", color: "#E53935" }}>Get Started</span>
              <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                Ready to Study in {country.name}?
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "50ch", marginInline: "auto" }}>
                Talk to our {country.name} specialist counselor for personalised guidance — absolutely free.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
                <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", background: "#D32F2F", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(211,47,47,)" }}>
                  Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
                <Link href="/study-destinations" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", border: "1.5px solid rgba(255,255,255,0.30)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
                  Other Destinations
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: country.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <style>{`
        @media (max-width: 900px) {
          .why-study-grid { grid-template-columns: 1fr 1fr !important; }
          .intakes-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .why-study-grid { grid-template-columns: 1fr !important; }
          .unis-grid { grid-template-columns: 1fr !important; }
          .intakes-grid { grid-template-columns: 1fr !important; }
          .visa-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
