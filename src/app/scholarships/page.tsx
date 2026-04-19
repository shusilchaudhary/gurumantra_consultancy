import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Scholarships 2026 — Study Abroad Scholarships for Nepali Students",
  description: "Comprehensive list of scholarships for Nepali students studying in Australia, Canada, UK, USA, Germany, Japan, New Zealand, and Ireland. Updated for 2026 intakes.",
};

export default function ScholarshipsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>2026 Scholarships</span>
          <h1 className="mt-3 mb-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
            Scholarships for Nepali Students
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            Explore merit-based, need-based, and government scholarships across 8 countries. We&apos;ve helped students secure over <strong className="text-white">NPR 5 Crore</strong> in collective scholarship funding.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg mx-auto">
            {[["NPR 5 Cr+", "Scholarships Won"], ["30+", "Scholarship Types"], ["8", "Countries Covered"]].map(([v, l]) => (
              <div key={l} className="rounded-xl py-3 px-2 text-center" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="text-xl font-black text-white">{v}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.70)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scholarship Tables ── */}
      <section className="bg-background section-py">
        <div className="container-main">

          <div className="text-center section-header">
            <span className="section-label">By Country</span>
            <h2 className="section-title">Scholarships Available in 2026</h2>
            <p className="section-desc">Click any destination for the full guide including eligibility criteria, application tips, and deadlines.</p>
          </div>

          <div className="flex flex-col gap-12">
            {countries.map((country) => (
              <div key={country.slug} className="bg-card border border-border rounded-2xl overflow-hidden">

                {/* Country header */}
                <div className="flex items-center justify-between gap-4 px-7 py-5 bg-muted border-b border-border">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">{country.flag}</span>
                    <div>
                      <h2 className="text-lg font-extrabold text-foreground">{country.name} Scholarships</h2>
                      <p className="text-xs text-muted-foreground mt-0.5">{country.scholarships.length} scholarships listed</p>
                    </div>
                  </div>
                  <Link
                    href={`/study-destinations/${country.slug}`}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline whitespace-nowrap"
                  >
                    Full {country.name} Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" role="table">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-7 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Scholarship</th>
                        <th className="px-7 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Amount</th>
                        <th className="px-7 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Eligibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {country.scholarships.map((s, i) => (
                        <tr key={s.name} className={`transition-colors hover:bg-muted/60 ${i % 2 === 0 ? "" : "bg-muted/30"}`}>
                          <td className="px-7 py-4">
                            <div className="flex items-start gap-2.5">
                              <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="font-medium text-foreground">{s.name}</span>
                            </div>
                          </td>
                          <td className="px-7 py-4">
                            <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-bold text-white bg-accent">
                              {s.amount}
                            </span>
                          </td>
                          <td className="px-7 py-4 text-muted-foreground hidden sm:table-cell">{s.eligibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile link */}
                <div className="sm:hidden px-7 py-4 border-t border-border">
                  <Link href={`/study-destinations/${country.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    Full {country.name} Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary section-py">
        <div className="container-main text-center">
          <div className="max-w-2xl mx-auto">
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Free Scholarship Help</span>
            <h2 className="section-title text-white mt-3">Need Help Finding the Right Scholarship?</h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.78)" }}>
              Our counselors identify the best opportunities for your profile and help you prepare winning applications — completely free.
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
        </div>
      </section>
    </>
  );
}
