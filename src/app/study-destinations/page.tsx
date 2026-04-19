import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Study Destinations — Study Abroad from Nepal 2026",
  description: "Explore 8 top study destinations for Nepali students: Australia, Canada, UK, USA, New Zealand, Germany, Japan, Ireland. Detailed guides with costs, visa steps, scholarships.",
};

const destinations = [
  { name: "Australia", slug: "australia", flag: "🏢", tagline: "World-class universities, post-study work up to 4 years, vibrant multicultural life", highlights: ["7 top-100 universities", "48 hrs/fortnight work", "2–4 year post-study visa"] },
  { name: "Canada", slug: "canada", flag: "🍁", tagline: "Affordable education, clear PR pathway, co-op programs", highlights: ["3-year PGWP", "Express Entry PR", "Affordable tuition"] },
  { name: "United Kingdom", slug: "uk", flag: "🏛️", tagline: "1-year Master's, globally respected degrees, Graduate Route visa", highlights: ["1-year Master's", "2-year Graduate Route", "Top 10 global unis"] },
  { name: "United States", slug: "usa", flag: "🎓", tagline: "Best universities globally, OPT work rights, research opportunities", highlights: ["50+ top-200 unis", "3-year STEM OPT", "Flexible curriculum"] },
  { name: "New Zealand", slug: "new-zealand", flag: "🏔️", tagline: "Safe, affordable, English-speaking with strong student support", highlights: ["#2 safest country", "3-year work visa", "Affordable living"] },
  { name: "Germany", slug: "germany", flag: "⚙️", tagline: "Tuition-free public universities, strong engineering sector", highlights: ["Zero tuition (public)", "18-month job seeker visa", "EU Blue Card pathway"] },
  { name: "Japan", slug: "japan", flag: "🌸", tagline: "MEXT scholarships, tech innovation, affordable national universities", highlights: ["MEXT full scholarship", "~NPR 5L/year tuition", "100K+ Nepalis in Japan"] },
  { name: "Ireland", slug: "ireland", flag: "☘️", tagline: "English-speaking EU country, tech hub, 2-year Stay Back visa", highlights: ["Google/Meta/Apple HQ", "2-year Stay Back", "EU job market access"] },
];

export default function StudyDestinationsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-main max-w-3xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Study Destinations</h1>
          <p className="text-lg opacity-80">Comprehensive guides for 8 top study destinations — eligibility, costs in NPR, visa steps, scholarships, and 2026 intake calendars.</p>
        </div>
      </section>

      <section className="container-main py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <Link key={d.slug} href={`/study-destinations/${d.slug}`} className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all">
              <span className="text-5xl block mb-4">{d.flag}</span>
              <h2 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">{d.name}</h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{d.tagline}</p>
              <ul className="space-y-1.5 mb-4">
                {d.highlights.map((h) => (
                  <li key={h} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{h}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                View Full Guide <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
