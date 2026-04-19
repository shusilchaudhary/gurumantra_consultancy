import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Test Preparation — IELTS, PTE, TOEFL Classes in Kathmandu",
  description: "Expert IELTS, PTE, TOEFL preparation classes in Kathmandu. Small batches, experienced trainers, flexible timings. Achieve your target score on the first attempt with Gurumantra Education Consultancy.",
};

const tests = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "The most widely accepted English test for Australia, UK, Canada, and New Zealand. Available in Academic and General Training formats.",
    format: "Listening (30 min) + Reading (60 min) + Writing (60 min) + Speaking (11–14 min)",
    scoring: "Band 1–9 (most universities require 6.0–7.0)",
    duration: "2 hours 45 minutes",
    fee: "NPR 29,500",
    features: ["Small batch of 10–15 students", "2 full mock tests per week", "Individual speaking practice", "Score guarantee program", "Flexible morning/evening batches"],
  },
  {
    name: "PTE Academic",
    fullName: "Pearson Test of English Academic",
    description: "Computer-based test popular for Australia and New Zealand. Fast results (typically 48 hours) and fully automated scoring for consistency.",
    format: "Speaking & Writing (54–67 min) + Reading (29–30 min) + Listening (30–43 min)",
    scoring: "10–90 (most universities require 50–65)",
    duration: "Approximately 2 hours",
    fee: "NPR 26,300",
    features: ["Computer lab with practice software", "AI scoring pattern analysis", "Template strategies for writing", "Results in 48 hours", "Unlimited practice tests on PTE platform"],
  },
  {
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language",
    description: "Preferred by US and Canadian universities. Internet-based test focusing on academic English proficiency in university settings.",
    format: "Reading (35 min) + Listening (36 min) + Speaking (16 min) + Writing (29 min)",
    scoring: "0–120 (most universities require 61–100)",
    duration: "Approximately 2 hours",
    fee: "NPR 28,600 (USD 205)",
    features: ["Integrated skills practice", "Note-taking strategies", "Speaking response frameworks", "Full-length practice tests", "Score improvement tracking"],
  },
];

export default function TestPreparationPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-main max-w-3xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Test Preparation</h1>
          <p className="text-lg opacity-80">Expert coaching for IELTS, PTE, and TOEFL in Kathmandu. Small batches, experienced trainers, and proven strategies to hit your target score.</p>
        </div>
      </section>

      <section className="container-main section-py space-y-10">
        {tests.map((test) => (
          <div key={test.name} className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-primary/5 px-6 py-4 border-b border-border">
              <h2 className="text-2xl font-extrabold">{test.name} <span className="text-sm font-normal text-muted-foreground">— {test.fullName}</span></h2>
            </div>
            <div className="p-8 space-y-5">
              <p className="text-muted-foreground leading-relaxed">{test.description}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-muted rounded-lg p-3"><span className="text-xs font-semibold text-muted-foreground block mb-1">Format</span><span className="text-sm">{test.format}</span></div>
                <div className="bg-muted rounded-lg p-3"><span className="text-xs font-semibold text-muted-foreground block mb-1">Scoring</span><span className="text-sm">{test.scoring}</span></div>
                <div className="bg-muted rounded-lg p-3"><span className="text-xs font-semibold text-muted-foreground block mb-1">Duration</span><span className="text-sm">{test.duration}</span></div>
                <div className="bg-muted rounded-lg p-3"><span className="text-xs font-semibold text-muted-foreground block mb-1">Test Fee</span><span className="text-sm font-semibold text-accent">{test.fee}</span></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What You Get at Gurumantra Education Consultancy</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {test.features.map((f) => <li key={f} className="text-sm text-muted-foreground flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />{f}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-accent py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-extrabold text-accent-foreground mb-4">Not Sure Which Test to Take?</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">Our counselors will recommend the best test based on your destination country and target university.</p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
