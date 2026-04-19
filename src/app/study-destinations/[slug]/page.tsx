import { countries } from "@/data/countries";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

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

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-5xl mb-4 block">{country.flag}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">{country.heroTitle}</h1>
            <p className="text-lg opacity-80 leading-relaxed">{country.heroDescription}</p>
          </div>
        </div>
      </section>

      <div className="container-main py-12 lg:py-16 space-y-16">
        {/* Why Study */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Why Study in {country.name}?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.whyStudy.map((reason) => (
              <div key={reason} className="flex gap-3 items-start bg-muted rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Eligibility Requirements for Nepali Students</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Level</th>
                  <th className="px-4 py-3 text-left font-semibold">Min GPA</th>
                  <th className="px-4 py-3 text-left font-semibold">IELTS</th>
                  <th className="px-4 py-3 text-left font-semibold">PTE</th>
                  <th className="px-4 py-3 text-left font-semibold">TOEFL</th>
                </tr>
              </thead>
              <tbody>
                {country.eligibility.map((e, i) => (
                  <tr key={e.level} className={i % 2 === 0 ? "bg-card" : "bg-muted"}>
                    <td className="px-4 py-3 font-medium">{e.level}</td>
                    <td className="px-4 py-3">{e.gpa}</td>
                    <td className="px-4 py-3">{e.ielts}</td>
                    <td className="px-4 py-3">{e.pte}</td>
                    <td className="px-4 py-3">{e.toefl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Costs */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Cost of Studying in {country.name} (NPR + {country.currency})</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Expense</th>
                  <th className="px-4 py-3 text-left font-semibold">Cost (NPR)</th>
                  <th className="px-4 py-3 text-left font-semibold">Cost ({country.currency})</th>
                </tr>
              </thead>
              <tbody>
                {country.costs.map((c, i) => (
                  <tr key={c.item} className={i % 2 === 0 ? "bg-card" : "bg-muted"}>
                    <td className="px-4 py-3 font-medium">{c.item}</td>
                    <td className="px-4 py-3">{c.costNPR}</td>
                    <td className="px-4 py-3">{c.costUSD}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Universities */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Top Universities in {country.name} for Nepali Students</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {country.topUniversities.map((uni, i) => (
              <div key={uni.name} className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-sm">{uni.name}</h3>
                  <p className="text-xs text-muted-foreground">{uni.ranking} • {uni.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visa Steps */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">{country.name} Student Visa — Step-by-Step Guide</h2>
          <div className="space-y-4">
            {country.visaSteps.map((v) => (
              <div key={v.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0">{v.step}</div>
                <div>
                  <h3 className="font-bold mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 bg-muted rounded-xl p-6">
            <div className="flex-1">
              <h3 className="font-bold mb-1">Work Rights During Study</h3>
              <p className="text-sm text-muted-foreground">{country.workRights}</p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Post-Study Visa</h3>
              <p className="text-sm text-muted-foreground">{country.postStudyVisa}</p>
            </div>
          </div>
        </section>

        {/* Intakes */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">{country.name} Intake Calendar 2026</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.intakes.map((intake) => (
              <div key={intake.intake} className={`border rounded-xl p-5 ${intake.popular ? "border-accent bg-accent/5" : "border-border bg-card"}`}>
                {intake.popular && <span className="text-xs font-semibold text-accent mb-2 block">⭐ Most Popular</span>}
                <h3 className="font-bold text-lg">{intake.intake}</h3>
                <p className="text-sm text-muted-foreground mt-1">Months: {intake.months}</p>
                <p className="text-sm text-muted-foreground">Deadline: {intake.deadline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scholarships */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Scholarships for Nepali Students in {country.name} (2026)</h2>
          <div className="space-y-4">
            {country.scholarships.map((s) => (
              <div key={s.name} className="bg-card border border-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-bold">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.eligibility}</p>
                  </div>
                  <span className="text-sm font-semibold text-accent whitespace-nowrap">{s.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {country.faqs.map((faq) => (
              <details key={faq.question} className="bg-card border border-border rounded-xl group">
                <summary className="px-5 py-4 font-semibold cursor-pointer list-none flex items-center justify-between hover:text-accent transition-colors">
                  {faq.question}
                  <span className="text-accent">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-accent-foreground mb-3">Ready to Study in {country.name}?</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">Talk to our {country.name} specialist counselor for personalised guidance — absolutely free.</p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: country.faqs.map((f) => ({
          "@type": "Question", name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer }
        }))
      })}} />
    </>
  );
}
