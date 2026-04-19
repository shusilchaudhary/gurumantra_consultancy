"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, BookOpen, BarChart2, Banknote, Zap } from "lucide-react";

const tests = [
  {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    color: "#1565C0",
    bg: "#EEF4FF",
    description:
      "The world's most widely accepted English test — required for Australia, UK, Canada, and New Zealand. Available in Academic and General Training formats.",
    metrics: [
      { icon: BookOpen,  label: "Format",       value: "Listening (30 min) + Reading (60 min) + Writing (60 min) + Speaking (11–14 min)" },
      { icon: BarChart2, label: "Scoring",      value: "Band 1–9", sub: "Most universities require 6.0–7.0" },
      { icon: Clock,     label: "Duration",     value: "2 hours 45 minutes" },
      { icon: Banknote,  label: "Test Fee",     value: "NPR 29,500" },
    ],
    features: [
      "Small batch of 10–15 students",
      "2 full mock tests per week",
      "Individual speaking practice",
      "Score guarantee program",
      "Flexible morning / evening batches",
    ],
    badge: "Most Popular",
  },
  {
    id: "pte",
    name: "PTE Academic",
    fullName: "Pearson Test of English Academic",
    color: "#7B1FA2",
    bg: "#F5EEFF",
    description:
      "Computer-based test popular for Australia and New Zealand. Fast results (typically 48 hours) and fully automated scoring for consistency.",
    metrics: [
      { icon: BookOpen,  label: "Format",       value: "Speaking & Writing (54–67 min) + Reading (29–30 min) + Listening (30–43 min)" },
      { icon: BarChart2, label: "Scoring",      value: "10–90", sub: "Most universities require 50–65" },
      { icon: Clock,     label: "Duration",     value: "Approximately 2 hours" },
      { icon: Banknote,  label: "Test Fee",     value: "NPR 26,300" },
    ],
    features: [
      "Computer lab with practice software",
      "AI scoring pattern analysis",
      "Template strategies for writing",
      "Results in 48 hours",
      "Unlimited practice tests on PTE platform",
    ],
    badge: "Fastest Results",
  },
  {
    id: "toefl",
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language",
    color: "#2E7D32",
    bg: "#EDFAEE",
    description:
      "Preferred by US and Canadian universities. Internet-based test focusing on academic English proficiency in university settings.",
    metrics: [
      { icon: BookOpen,  label: "Format",       value: "Reading (35 min) + Listening (36 min) + Speaking (16 min) + Writing (29 min)" },
      { icon: BarChart2, label: "Scoring",      value: "0–120", sub: "Most universities require 61–100" },
      { icon: Clock,     label: "Duration",     value: "Approximately 2 hours" },
      { icon: Banknote,  label: "Test Fee",     value: "NPR 28,600 (USD 205)" },
    ],
    features: [
      "Integrated skills practice",
      "Note-taking strategies",
      "Speaking response frameworks",
      "Full-length practice tests",
      "Score improvement tracking",
    ],
    badge: "USA & Canada",
  },
];

const comparison = [
  { label: "Score Range",    ielts: "Band 1–9",      pte: "10–90",          toefl: "0–120"         },
  { label: "Duration",       ielts: "2 hr 45 min",   pte: "~2 hours",       toefl: "~2 hours"      },
  { label: "Results",        ielts: "3–13 days",     pte: "48 hours",       toefl: "4–8 days"      },
  { label: "Format",         ielts: "Paper / Computer", pte: "Computer only", toefl: "Computer only"},
  { label: "Accepted by",    ielts: "Globally",      pte: "AU / NZ / UK",   toefl: "USA / Canada"  },
  { label: "Test Fee (NPR)", ielts: "29,500",        pte: "26,300",         toefl: "28,600"        },
  { label: "Speaking",       ielts: "With examiner", pte: "AI-scored mic",  toefl: "AI-scored mic" },
];

export default function TestPrepTabs() {
  const [active, setActive] = useState("ielts");
  const test = tests.find((t) => t.id === active)!;

  return (
    <>
      {/* ── Tab Navigation ── */}
      <section className="bg-background border-b border-border sticky top-[72px] z-40">
        <div className="container-main">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-none">
            {tests.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all"
                style={
                  active === t.id
                    ? { background: t.color, color: "#fff", boxShadow: `0 4px 14px ${t.color}40` }
                    : { background: "transparent", color: "var(--muted-foreground)" }
                }
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: active === t.id ? "rgba(255,255,255,0.7)" : t.color }}
                />
                {t.name}
                {t.badge && (
                  <span
                    className="hidden sm:inline text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={
                      active === t.id
                        ? { background: "rgba(255,255,255,0.2)", color: "#fff" }
                        : { background: t.bg, color: t.color }
                    }
                  >
                    {t.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Test Detail ── */}
      <section className="bg-background section-py">
        <div className="container-main">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-10">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-xl font-black text-white"
                style={{ background: test.color }}
              >
                {test.name.slice(0, 2)}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl font-extrabold text-foreground tracking-tight">{test.name}</h2>
                  <span
                    className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                    style={{ background: test.bg, color: test.color }}
                  >
                    {test.badge}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{test.fullName}</p>
              </div>
            </div>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3.5 rounded-xl text-white shrink-0 hover:opacity-90 hover:scale-105 transition-all shadow-md"
              style={{ background: test.color }}
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Description */}
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl">{test.description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {test.metrics.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="rounded-2xl p-5 border"
                style={{ background: test.bg, borderColor: `${test.color}25` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 shrink-0" style={{ color: test.color }} />
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider" style={{ color: test.color }}>
                    {label}
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground leading-snug">{value}</p>
                {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-card border border-border rounded-2xl p-7 lg:p-9">
            <h3 className="font-bold text-base text-foreground mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4" style={{ color: test.color }} />
              What You Get at Gurumantra Education Consultancy
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
              {test.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: test.bg }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke={test.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <div className="text-center section-header">
            <span className="section-label">Side by Side</span>
            <h2 className="section-title">Compare All Three Tests</h2>
            <p className="section-desc">Not sure which test to take? Compare them here to find your best fit.</p>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground w-36">Feature</th>
                    {tests.map((t) => (
                      <th key={t.id} className="px-6 py-4 text-left">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ background: t.color }}
                          />
                          <span className="font-bold text-foreground text-sm">{t.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparison.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "" : "bg-muted/40"}>
                      <td className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">{row.label}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.ielts}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.pte}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.toefl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
