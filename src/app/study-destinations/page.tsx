import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Study Destinations — Study Abroad from Nepal 2026",
  description: "Explore 8 top study destinations for Nepali students: Australia, Canada, UK, USA, New Zealand, Germany, Japan, Ireland. Detailed guides with costs, visa steps, scholarships.",
};

const destinations = [
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    tagline: "World-class universities & up to 4 years post-study work rights",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    highlights: ["7 top-100 universities", "48 hrs/fortnight work", "2–4 yr post-study visa"],
    badge: "Most Popular",
    badgeColor: "#E8A317",
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    tagline: "Clear PR pathway, co-op programs & affordable world-class education",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80",
    highlights: ["3-year PGWP", "Express Entry PR", "Affordable tuition"],
    badge: "PR Friendly",
    badgeColor: "#1565C0",
  },
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    tagline: "1-year Master's, globally respected degrees & Graduate Route visa",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    highlights: ["1-year Master's", "2-yr Graduate Route", "Top 10 global unis"],
    badge: "Fast Degree",
    badgeColor: "#7B1FA2",
  },
  {
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    tagline: "Best universities globally, OPT work rights & research opportunities",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
    highlights: ["50+ top-200 unis", "3-yr STEM OPT", "Flexible curriculum"],
    badge: "Top Research",
    badgeColor: "#1565C0",
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "🇳🇿",
    tagline: "Safe, scenic & English-speaking with strong student support",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
    highlights: ["#2 safest country", "3-yr work visa", "Affordable living"],
    badge: "Safe & Scenic",
    badgeColor: "#2E7D32",
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    tagline: "Tuition-free public universities, strong engineering sector & EU access",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    highlights: ["Zero tuition (public)", "18-mo job seeker visa", "EU Blue Card"],
    badge: "Tuition Free",
    badgeColor: "#E8A317",
  },
  {
    name: "Japan",
    slug: "japan",
    flag: "🇯🇵",
    tagline: "MEXT scholarships, tech innovation & affordable national universities",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    highlights: ["MEXT full scholarship", "~NPR 5L/yr tuition", "100K+ Nepalis"],
    badge: "Scholarship",
    badgeColor: "#C62828",
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    tagline: "English-speaking EU country, tech hub & 2-year Stay Back visa",
    image: "https://images.unsplash.com/photo-1564959130747-897fb406b9af?auto=format&fit=crop&w=800&q=80",
    highlights: ["Google/Meta/Apple HQ", "2-yr Stay Back", "EU job market"],
    badge: "Tech Hub",
    badgeColor: "#2E7D32",
  },
];

const quickFacts = [
  { value: "8", label: "Study Destinations" },
  { value: "200+", label: "Partner Universities" },
  { value: "2,000+", label: "Students Placed" },
  { value: "98%", label: "Visa Success Rate" },
];

export default function StudyDestinationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-10" style={{ background: "#E8A317", filter: "blur(90px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-full opacity-10" style={{ background: "#E8A317", filter: "blur(120px)" }} />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.2)", color: "#F5C542" }}>
            2026 Intake Open
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-3 mb-5">
            Choose Your Study Destination
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            Comprehensive guides for 8 top countries — eligibility, costs in NPR, visa steps, scholarships, and 2026 intake calendars.
          </p>

          {/* Quick facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-2xl mx-auto">
            {quickFacts.map((f) => (
              <div key={f.label} className="rounded-xl py-3 px-2 text-center" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="text-2xl font-black text-white">{f.value}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.70)" }}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destinations Grid ── */}
      <section className="bg-background section-py">
        <div className="container-main">

          <div className="text-center section-header">
            <span className="section-label">All Destinations</span>
            <h2 className="section-title">Where Do You Want to Study?</h2>
            <p className="section-desc">
              Click any destination to explore detailed guides — intakes, tuition costs, living expenses, visa requirements, and top universities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/study-destinations/${d.slug}`}
                className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Photo */}
                <Image
                  src={d.image}
                  alt={`Study in ${d.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-white text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: d.badgeColor }}
                  >
                    {d.badge}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  {/* Flag + Country */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{d.flag}</span>
                    <h2 className="text-white font-extrabold text-xl leading-tight">{d.name}</h2>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.78)" }}>
                    {d.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    {d.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 shrink-0" style={{ color: "#F5C542" }} />
                        <span className="text-xs font-medium text-white/90">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.20)" }}>
                    <span className="text-xs font-bold text-white/80">Full Guide</span>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: "#E8A317" }}>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose With Us ── */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="section-label">Why Gurumantra</span>
              <h2 className="section-title mt-2">
                We Know Every Destination Inside Out
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our counselors have personally visited partner universities across all 8 countries. We don't just advise — we guide from firsthand knowledge.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Direct partnerships with 200+ universities — faster offer letters",
                  "Country-specific visa expertise with 98% success rate",
                  "Scholarship mapping for every destination",
                  "Real student success stories from each country",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2,000+", label: "Students Placed", sub: "Since 2010" },
                { value: "98%", label: "Visa Success", sub: "First attempt" },
                { value: "200+", label: "Universities", sub: "Across 8 countries" },
                { value: "Free", label: "Consultation", sub: "No obligation" },
              ].map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform">
                  <div className="text-3xl font-black text-primary mb-1">{s.value}</div>
                  <div className="font-semibold text-sm text-foreground">{s.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary section-py">
        <div className="container-main text-center">
          <div className="max-w-2xl mx-auto">
            <span className="section-label" style={{ background: "rgba(232,163,23,0.2)", color: "#F5C542" }}>
              Free Consultation
            </span>
            <h2 className="section-title text-white mt-2">
              Not Sure Which Country Is Right for You?
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
              Our counselors will evaluate your profile, budget, and career goals — then recommend the perfect destination and program.
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
                href="/scholarships"
                className="inline-flex items-center gap-2 font-semibold rounded-xl text-sm px-8 py-4 border-2 text-white hover:bg-white/10 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                View Scholarships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
