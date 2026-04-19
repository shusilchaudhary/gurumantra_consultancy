import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, DollarSign, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Test Preparation — IELTS, PTE, TOEFL Classes in Kathmandu",
  description: "Expert IELTS, PTE, TOEFL preparation classes in Kathmandu. Small batches, experienced trainers, flexible timings. Achieve your target score on the first attempt with Gurumantra Education Consultancy.",
};

const tests = [
  {
    name: "IELTS",
    color: "#1565C0",
    fullName: "International English Language Testing System",
    description: "The world's most widely accepted English test — required for Australia, UK, Canada, and New Zealand. Available in Academic and General Training formats.",
    format: "Listening (30 min) + Reading (60 min) + Writing (60 min) + Speaking (11–14 min)",
    scoring: "Band 1–9 · Most universities require 6.0–7.0",
    duration: "2 hours 45 minutes",
    fee: "NPR 29,500",
    features: ["Small batch of 10–15 students", "2 full mock tests per week", "Individual speaking practice", "Score guarantee program", "Flexible morning/evening batches"],
  },
  {
    name: "PTE Academic",
    color: "#7B1FA2",
    fullName: "Pearson Test of English Academic",
    description: "Computer-based test popular for Australia and New Zealand. Fully AI-scored — fast results in 48 hours and no examiner bias.",
    format: "Speaking & Writing (54–67 min) + Reading (29–30 min) + Listening (30–43 min)",
    scoring: "10–90 · Most universities require 50–65",
    duration: "Approximately 2 hours",
    fee: "NPR 26,300",
    features: ["Computer lab with practice software", "AI scoring pattern analysis", "Template strategies for writing", "Results in 48 hours", "Unlimited practice tests on PTE platform"],
  },
  {
    name: "TOEFL iBT",
    color: "#2E7D32",
    fullName: "Test of English as a Foreign Language",
    description: "Preferred by US and Canadian universities. Internet-based test focusing on academic English proficiency in university settings.",
    format: "Reading (35 min) + Listening (36 min) + Speaking (16 min) + Writing (29 min)",
    scoring: "0–120 · Most universities require 61–100",
    duration: "Approximately 2 hours",
    fee: "NPR 28,600 (USD 205)",
    features: ["Integrated skills practice", "Note-taking strategies", "Speaking response frameworks", "Full-length practice tests", "Score improvement tracking"],
  },
];

const WHY = [
  "Certified trainers with 10+ years experience",
  "Small batches — maximum 15 students per class",
  "Flexible morning and evening timings",
  "Free diagnostic test before enrollment",
  "Score guarantee or free repeat classes",
];

export default function TestPreparationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Test Preparation</span>
          <h1 className="mt-3 mb-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
            IELTS, PTE & TOEFL Classes in Kathmandu
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            Small batches, experienced trainers, and proven strategies to hit your target score on the first attempt.
          </p>
        </div>
      </section>

      {/* ── Test Cards ── */}
      <section className="bg-background section-py">
        <div className="container-main">

          <div className="text-center section-header">
            <span className="section-label">Our Courses</span>
            <h2 className="section-title">Pick Your Test</h2>
            <p className="section-desc">We offer expert coaching for all three major English proficiency tests accepted by universities worldwide.</p>
          </div>

          <div className="flex flex-col gap-8">
            {tests.map((test) => (
              <article
                key={test.name}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Top accent bar */}
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${test.color}, ${test.color}60)` }} aria-hidden="true" />

                <div className="p-7 lg:p-9">

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${test.color}15` }}>
                        <BookOpen className="w-6 h-6" style={{ color: test.color }} aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-foreground leading-tight">{test.name}</h2>
                        <p className="text-xs text-muted-foreground mt-0.5">{test.fullName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                      <span className="text-lg font-black text-accent">{test.fee}</span>
                      <span className="text-xs text-muted-foreground">exam fee</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{test.description}</p>

                  {/* Info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
                    {[
                      { icon: BookOpen, label: "Format", value: test.format },
                      { icon: CheckCircle, label: "Scoring", value: test.scoring },
                      { icon: Clock, label: "Duration", value: test.duration },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="rounded-xl p-4 border border-border bg-muted/50">
                        <div className="flex items-center gap-1.5 mb-2">
                          <Icon className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
                          <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
                        </div>
                        <p className="text-xs text-foreground leading-snug">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <hr className="border-border mb-6" />

                  {/* Features */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      What You Get at Gurumantra
                    </h3>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" role="list">
                      {test.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-px" style={{ background: `${test.color}15` }}>
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                              <path d="M1.5 4.5l2 2L7.5 2" stroke={test.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="text-[0.8125rem] text-muted-foreground leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Why Gurumantra</span>
              <h2 className="section-title mt-3">Why Students Choose Our Test Prep</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our test prep classes are designed around one goal: your highest possible score in the shortest possible time.
              </p>
              <ul className="flex flex-col gap-4">
                {WHY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-bold text-lg text-foreground mb-6">Not Sure Which Test to Take?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our counselors will recommend the best test based on your destination country, target university, and personal strengths — completely free.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/book-consultation"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary/90 hover:shadow-md transition-all"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-primary border-2 border-primary/25 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
