import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import TestPrepTabs from "./test-prep-tabs";

export const metadata: Metadata = {
  title: "Test Preparation — IELTS, PTE, TOEFL Classes in Kathmandu | Gurumantra",
  description:
    "Expert IELTS, PTE, TOEFL preparation classes in Kathmandu. Small batches, experienced trainers, flexible timings. Achieve your target score on the first attempt with Gurumantra Education Consultancy.",
};

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
      <section
        className="bg-primary text-white relative overflow-hidden"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]"
            style={{ filter: "blur(100px)" }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]"
            style={{ filter: "blur(120px)" }}
          />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>
            Test Preparation
          </span>
          <h1 className="mt-3 mb-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
            IELTS, PTE &amp; TOEFL Classes<br className="hidden sm:block" /> in Kathmandu
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.80)" }}>
            Small batches, experienced trainers, and proven strategies to hit your target score on the first attempt.
          </p>
          {/* Quick test pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "IELTS",        color: "#1565C0" },
              { name: "PTE Academic", color: "#7B1FA2" },
              { name: "TOEFL iBT",   color: "#2E7D32" },
            ].map((t) => (
              <span
                key={t.name}
                className="px-4 py-1.5 rounded-full text-xs font-bold text-white"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tabs + Detail + Comparison ── */}
      <TestPrepTabs />

      {/* ── Why Choose Us ── */}
      <section className="bg-background section-py">
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
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-bold text-lg text-foreground mb-3">Not Sure Which Test to Take?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our counselors will recommend the best test based on your destination country, target university, and
                personal strengths — completely free.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/book-consultation"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary/90 hover:shadow-md transition-all"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm text-primary border-2 border-primary/25 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-primary section-py">
        <div className="container-main text-center">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>
            Get Started
          </span>
          <h2 className="section-title text-white mt-3 mb-4">Ready to Ace Your English Test?</h2>
          <p className="text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.78)" }}>
            Join thousands of Nepali students who achieved their target score with Gurumantra's expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 font-bold rounded-xl text-sm px-8 py-4 shadow-lg hover:opacity-90 hover:scale-105 transition-all"
              style={{ background: "#E8A317", color: "#fff" }}
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/study-destinations"
              className="inline-flex items-center gap-2 font-semibold rounded-xl text-sm px-8 py-4 border-2 text-white hover:bg-white/10 transition-all"
              style={{ borderColor: "rgba(255,255,255,0.30)" }}
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
