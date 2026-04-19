"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ─── Data ─── */
const TESTS = [
  {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    badge: "Most Popular",
    color: "#1565C0",
    colorLight: "#EBF2FF",
    colorMid: "#BFDBFE",
    description:
      "The world's most widely accepted English test — required for Australia, UK, Canada, and New Zealand. Available in Academic and General Training formats.",
    facts: [
      { label: "Format",   value: "Listening · Reading · Writing · Speaking" },
      { label: "Duration", value: "2 hours 45 minutes" },
      { label: "Scoring",  value: "Band 1–9  ·  Universities require 6.0–7.0" },
      { label: "Results",  value: "3–13 days" },
      { label: "Test Fee", value: "NPR 29,500" },
    ],
    features: [
      "Small batch — max 15 students",
      "2 full mock tests per week",
      "Individual speaking sessions",
      "Score guarantee program",
      "Flexible morning & evening batches",
    ],
  },
  {
    id: "pte",
    name: "PTE Academic",
    fullName: "Pearson Test of English Academic",
    badge: "Fastest Results",
    color: "#6D28D9",
    colorLight: "#F3EEFF",
    colorMid: "#DDD6FE",
    description:
      "Computer-based test popular for Australia and New Zealand. Fully AI-scored with results in 48 hours — no examiner bias, no waiting.",
    facts: [
      { label: "Format",   value: "Speaking & Writing · Reading · Listening" },
      { label: "Duration", value: "Approximately 2 hours" },
      { label: "Scoring",  value: "10–90  ·  Universities require 50–65" },
      { label: "Results",  value: "48 hours" },
      { label: "Test Fee", value: "NPR 26,300" },
    ],
    features: [
      "Dedicated computer lab",
      "AI scoring pattern analysis",
      "Template strategies for writing",
      "Unlimited PTE platform practice tests",
      "Fast-track preparation batches",
    ],
  },
  {
    id: "toefl",
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language",
    badge: "USA & Canada",
    color: "#065F46",
    colorLight: "#ECFDF5",
    colorMid: "#A7F3D0",
    description:
      "Preferred by US and Canadian universities. Internet-based test that measures academic English across all four skills in a university context.",
    facts: [
      { label: "Format",   value: "Reading · Listening · Speaking · Writing" },
      { label: "Duration", value: "Approximately 2 hours" },
      { label: "Scoring",  value: "0–120  ·  Universities require 61–100" },
      { label: "Results",  value: "4–8 days" },
      { label: "Test Fee", value: "NPR 28,600  (USD 205)" },
    ],
    features: [
      "Integrated skills practice",
      "Academic note-taking strategies",
      "Speaking response frameworks",
      "Full-length timed practice tests",
      "Score improvement tracking",
    ],
  },
];

const COMPARISON: { label: string; ielts: string; pte: string; toefl: string }[] = [
  { label: "Score Range",    ielts: "Band 1–9",        pte: "10–90",          toefl: "0–120"          },
  { label: "Duration",       ielts: "2 hr 45 min",     pte: "~2 hours",       toefl: "~2 hours"       },
  { label: "Results",        ielts: "3–13 days",       pte: "48 hours ⚡",    toefl: "4–8 days"       },
  { label: "Test Format",    ielts: "Paper / Computer", pte: "Computer only", toefl: "Computer only"  },
  { label: "Accepted by",    ielts: "Global",           pte: "AU / NZ / UK",  toefl: "USA / Canada"   },
  { label: "Speaking",       ielts: "Human examiner",  pte: "AI mic",         toefl: "AI mic"         },
  { label: "Fee (NPR)",      ielts: "29,500",          pte: "26,300",         toefl: "28,600"         },
];

/* ─── Component ─── */
export default function TestPrepTabs() {
  const [activeId, setActiveId] = useState("ielts");
  const t = TESTS.find((x) => x.id === activeId)!;

  return (
    <div className="bg-background">

      {/* ══════════════════════════════════════════
          TEST SELECTOR — 3 large selector cards
      ══════════════════════════════════════════ */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--muted)" }}>
        <div className="container-main" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {TESTS.map((test) => {
              const isActive = activeId === test.id;
              return (
                <button
                  key={test.id}
                  onClick={() => setActiveId(test.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    padding: "1.25rem 1.5rem",
                    borderRadius: "1rem",
                    border: isActive ? `2px solid ${test.color}` : "2px solid var(--border)",
                    background: isActive ? test.colorLight : "var(--card)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    boxShadow: isActive ? `0 4px 20px ${test.color}25` : "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Active top bar */}
                  {isActive && (
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0,
                      height: 3, background: test.color,
                    }} />
                  )}
                  {/* Badge */}
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
                    letterSpacing: "0.08em", padding: "0.2rem 0.6rem",
                    borderRadius: 999,
                    background: isActive ? test.color : test.colorMid,
                    color: isActive ? "#fff" : test.color,
                  }}>
                    {test.badge}
                  </span>
                  {/* Name */}
                  <span style={{
                    fontSize: "1rem", fontWeight: 800,
                    color: isActive ? test.color : "var(--foreground)",
                    lineHeight: 1.2,
                  }}>
                    {test.name}
                  </span>
                  {/* Full name */}
                  <span style={{
                    fontSize: "0.7rem", color: "var(--muted-foreground)",
                    lineHeight: 1.4,
                  }}>
                    {test.fullName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TEST DETAIL PANEL
      ══════════════════════════════════════════ */}
      <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

        {/* ── Top accent bar ── */}
        <div style={{
          height: 4, borderRadius: 999, marginBottom: "2rem",
          background: `linear-gradient(90deg, ${t.color}, ${t.colorMid})`,
        }} />

        {/* ── Header row ── */}
        <div style={{
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between", gap: "1.5rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <h2 style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900,
                color: t.color, letterSpacing: "-0.02em", lineHeight: 1.1,
              }}>
                {t.name}
              </h2>
              <span style={{
                fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase",
                letterSpacing: "0.08em", padding: "0.3rem 0.8rem",
                borderRadius: 999, background: t.colorLight, color: t.color,
                border: `1px solid ${t.colorMid}`,
              }}>
                {t.badge}
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
              {t.fullName}
            </p>
          </div>
          <Link
            href="/book-consultation"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 1.75rem", borderRadius: "0.875rem",
              background: t.color, color: "#fff",
              fontWeight: 700, fontSize: "0.875rem", textDecoration: "none",
              whiteSpace: "nowrap", flexShrink: 0,
              boxShadow: `0 4px 14px ${t.color}40`,
              transition: "opacity 0.15s, transform 0.15s",
            }}
          >
            Enroll Now <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>

        {/* ── Description ── */}
        <p style={{
          fontSize: "1rem", color: "var(--muted-foreground)",
          lineHeight: 1.8, marginBottom: "2.5rem",
          maxWidth: "70ch",
          padding: "1rem 1.25rem",
          borderLeft: `3px solid ${t.color}`,
          background: t.colorLight,
          borderRadius: "0 0.75rem 0.75rem 0",
        }}>
          {t.description}
        </p>

        {/* ── Two-column: Features | Key Facts ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }}
          className="test-detail-grid"
        >

          {/* LEFT: What You Get */}
          <div style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "1rem",
            padding: "2rem",
          }}>
            <p style={{
              fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "0.12em", color: t.color, marginBottom: "1.25rem",
            }}>
              What You Get at Gurumantra
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {t.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                    background: t.colorLight,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1.5px solid ${t.colorMid}`,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                      <path d="M2 5.5l2.5 2.5 4.5-5" stroke={t.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "var(--foreground)", lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Key Facts */}
          <div style={{
            background: t.colorLight,
            border: `1px solid ${t.colorMid}`,
            borderRadius: "1rem",
            padding: "2rem",
          }}>
            <p style={{
              fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "0.12em", color: t.color, marginBottom: "1.25rem",
            }}>
              Key Facts
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {t.facts.map((fact, i) => (
                <div key={fact.label} style={{
                  padding: "0.875rem 0",
                  borderBottom: i < t.facts.length - 1 ? `1px solid ${t.colorMid}` : "none",
                  display: "flex", flexDirection: "column", gap: "0.2rem",
                }}>
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
                    letterSpacing: "0.1em", color: t.color, opacity: 0.8,
                  }}>
                    {fact.label}
                  </span>
                  <span style={{
                    fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)",
                    lineHeight: 1.5,
                  }}>
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════ */}
      <div style={{ background: "var(--muted)", borderTop: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Side by Side</span>
            <h2 className="section-title" style={{ marginTop: "0.5rem" }}>Compare All Three Tests</h2>
            <p className="section-desc">Not sure which to take? Use this table to find your best fit.</p>
          </div>

          {/* Table */}
          <div style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "1.25rem",
            overflow: "hidden",
          }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                <thead>
                  <tr>
                    <th style={{
                      padding: "1rem 1.5rem", textAlign: "left",
                      fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase",
                      letterSpacing: "0.1em", color: "var(--muted-foreground)",
                      borderBottom: "2px solid var(--border)",
                      width: "28%", background: "var(--muted)",
                    }}>
                      Feature
                    </th>
                    {TESTS.map((test) => (
                      <th key={test.id} style={{
                        padding: "1rem 1.5rem", textAlign: "left",
                        borderBottom: "2px solid var(--border)",
                        background: activeId === test.id ? test.colorLight : "var(--card)",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{
                            width: 10, height: 10, borderRadius: "50%",
                            background: test.color, flexShrink: 0,
                          }} />
                          <span style={{
                            fontWeight: 800, fontSize: "0.875rem",
                            color: activeId === test.id ? test.color : "var(--foreground)",
                          }}>
                            {test.name}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.label} style={{
                      borderBottom: i < COMPARISON.length - 1 ? "1px solid var(--border)" : "none",
                      background: i % 2 === 0 ? "transparent" : "var(--muted)",
                    }}>
                      <td style={{
                        padding: "0.875rem 1.5rem",
                        fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.07em", color: "var(--muted-foreground)",
                      }}>
                        {row.label}
                      </td>
                      {(["ielts", "pte", "toefl"] as const).map((key, j) => {
                        const test = TESTS[j];
                        const isActive = activeId === test.id;
                        return (
                          <td key={key} style={{
                            padding: "0.875rem 1.5rem",
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? test.color : "var(--foreground)",
                            background: isActive ? `${test.colorLight}` : "transparent",
                          }}>
                            {row[key]}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 640px) {
          .test-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
