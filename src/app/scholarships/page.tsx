import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Scholarships 2026 — Study Abroad Scholarships for Nepali Students",
  description: "Comprehensive list of scholarships for Nepali students studying in Australia, Canada, UK, USA, Germany, Japan, New Zealand, and Ireland. Updated for 2026 intakes.",
};

export default function ScholarshipsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-main max-w-3xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Scholarships for Nepali Students 2026</h1>
          <p className="text-lg opacity-80">Explore merit-based, need-based, and government scholarships across 8 countries. Gurumantra Education Consultancy has helped students secure over NPR 5 Crore in collective scholarship funding.</p>
        </div>
      </section>

      <section className="container-main py-16 space-y-12">
        {countries.map((country) => (
          <div key={country.slug}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{country.flag}</span>
              <h2 className="text-2xl font-extrabold">{country.name} Scholarships</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Scholarship</th>
                    <th className="px-4 py-3 text-left font-semibold">Amount</th>
                    <th className="px-4 py-3 text-left font-semibold">Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  {country.scholarships.map((s, i) => (
                    <tr key={s.name} className={i % 2 === 0 ? "bg-card" : "bg-muted"}>
                      <td className="px-4 py-3 font-medium">{s.name}</td>
                      <td className="px-4 py-3 text-accent font-semibold">{s.amount}</td>
                      <td className="px-4 py-3 text-muted-foreground">{s.eligibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href={`/study-destinations/${country.slug}`} className="inline-flex items-center gap-1 text-sm text-accent mt-3 hover:underline">
              View full {country.name} guide <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </section>

      <section className="bg-accent py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl font-extrabold text-accent-foreground mb-4">Need Help Finding Scholarships?</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">Our counselors identify the best scholarship opportunities for your profile and help you prepare winning applications.</p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
