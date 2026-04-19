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

/* shared table style helpers */
const TH = "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white bg-primary";
const TD = "px-5 py-3.5 text-sm";

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="container-main relative z-10">
          <Link
            href="/study-destinations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold mb-7 hover:gap-2.5 transition-all"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Destinations
          </Link>
          <div className="max-w-3xl">
            <span className="text-5xl mb-4 block" role="img" aria-label={country.name}>{country.flag}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-snug">
              {country.heroTitle}
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
              {country.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ── Page body ── */}
      <div className="bg-background">
        <div className="container-main section-py">
          <div className="flex flex-col gap-16">

            {/* ── Why Study ── */}
            <section aria-labelledby="why-heading">
              <h2 id="why-heading" className="section-title mb-8">Why Study in {country.name}?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {country.whyStudy.map((reason) => (
                  <div key={reason} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Eligibility ── */}
            <section aria-labelledby="eligibility-heading">
              <h2 id="eligibility-heading" className="section-title mb-8">Eligibility Requirements</h2>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full" role="table">
                    <thead>
                      <tr>
                        <th className={TH}>Level</th>
                        <th className={TH}>Min GPA</th>
                        <th className={TH}>IELTS</th>
                        <th className={TH}>PTE</th>
                        <th className={TH}>TOEFL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {country.eligibility.map((e, i) => (
                        <tr key={e.level} className={i % 2 === 0 ? "" : "bg-muted/40"}>
                          <td className={`${TD} font-semibold text-foreground`}>{e.level}</td>
                          <td className={TD}>{e.gpa}</td>
                          <td className={TD}>{e.ielts}</td>
                          <td className={TD}>{e.pte}</td>
                          <td className={TD}>{e.toefl}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Costs ── */}
            <section aria-labelledby="costs-heading">
              <h2 id="costs-heading" className="section-title mb-8">
                Cost of Studying in {country.name} (NPR + {country.currency})
              </h2>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full" role="table">
                    <thead>
                      <tr>
                        <th className={TH}>Expense</th>
                        <th className={TH}>NPR</th>
                        <th className={TH}>{country.currency}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {country.costs.map((c, i) => (
                        <tr key={c.item} className={i % 2 === 0 ? "" : "bg-muted/40"}>
                          <td className={`${TD} font-medium text-foreground`}>{c.item}</td>
                          <td className={TD}>{c.costNPR}</td>
                          <td className={TD}>{c.costUSD}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── Universities ── */}
            <section aria-labelledby="unis-heading">
              <h2 id="unis-heading" className="section-title mb-8">Top Universities for Nepali Students</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {country.topUniversities.map((uni, i) => (
                  <div key={uni.name} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                    <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center font-black text-primary text-sm shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{uni.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{uni.ranking} · {uni.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Visa Steps ── */}
            <section aria-labelledby="visa-heading">
              <h2 id="visa-heading" className="section-title mb-8">Student Visa — Step-by-Step Guide</h2>

              <ol className="flex flex-col gap-5 mb-7">
                {country.visaSteps.map((v) => (
                  <li key={v.step} className="flex items-start gap-5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0"
                      style={{ background: "var(--accent)" }}
                      aria-label={`Step ${v.step}`}
                    >
                      {v.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold text-sm text-foreground mb-1">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="grid sm:grid-cols-2 gap-5 bg-muted rounded-2xl p-6">
                <div>
                  <h3 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" /> Work Rights During Study
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{country.workRights}</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" /> Post-Study Visa
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{country.postStudyVisa}</p>
                </div>
              </div>
            </section>

            {/* ── Intakes ── */}
            <section aria-labelledby="intakes-heading">
              <h2 id="intakes-heading" className="section-title mb-8">{country.name} Intake Calendar 2026</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {country.intakes.map((intake) => (
                  <div
                    key={intake.intake}
                    className={`rounded-2xl p-6 border ${intake.popular ? "border-accent bg-accent/5" : "border-border bg-card"}`}
                  >
                    {intake.popular && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-accent mb-3">
                        <Star className="w-3 h-3 fill-accent" aria-hidden="true" /> Most Popular
                      </span>
                    )}
                    <h3 className="font-bold text-base text-foreground mb-3">{intake.intake}</h3>
                    <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Months: {intake.months}</span>
                      <span className="flex items-center gap-1.5"><ArrowRight className="w-3.5 h-3.5" /> Deadline: {intake.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Scholarships ── */}
            <section aria-labelledby="schol-heading">
              <h2 id="schol-heading" className="section-title mb-8">
                Scholarships for Nepali Students in {country.name}
              </h2>
              <div className="flex flex-col gap-4">
                {country.scholarships.map((s) => (
                  <div key={s.name} className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">{s.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{s.eligibility}</p>
                      </div>
                    </div>
                    <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-black text-white bg-accent shrink-0 self-start sm:self-center">
                      {s.amount}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQs ── */}
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="section-title mb-8">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-3">
                {country.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="bg-card border border-border rounded-xl group open:shadow-sm transition-all"
                  >
                    <summary className="px-6 py-4 font-semibold text-sm cursor-pointer list-none flex items-center justify-between text-foreground hover:text-primary transition-colors">
                      {faq.question}
                      <span className="text-xl leading-none text-muted-foreground group-open:text-primary transition-colors select-none" aria-hidden="true">+</span>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 mt-0">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-primary rounded-2xl p-10 lg:p-14 text-center" aria-labelledby="cta-heading">
              <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Get Started</span>
              <h2 id="cta-heading" className="section-title text-white mt-3">
                Ready to Study in {country.name}?
              </h2>
              <p className="text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.78)" }}>
                Talk to our {country.name} specialist counselor for personalised guidance — absolutely free.
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
    </>
  );
}
