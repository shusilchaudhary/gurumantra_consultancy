import type { Metadata } from "next";
import { Users, Target, Eye, CheckCircle, School, Globe } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Gurumantra Education Consultancy — Study Abroad Consultancy in Nepal",
  description: "Learn about Gurumantra Education Consultancy's mission and history. We have guided over 2,000 Nepali students to top universities in Australia, Canada, UK, and USA.",
};

const stats = [
  { value: "2,000+", label: "Students Placed",    sub: "Since 2010",         icon: Users        },
  { value: "98%",    label: "Visa Success Rate",   sub: "First attempt",      icon: CheckCircle  },
  { value: "200+",   label: "Partner Universities",sub: "Across 8 countries", icon: School       },
  { value: "8",      label: "Countries",            sub: "Study destinations", icon: Globe        },
];

const values = [
  { icon: Target,       title: "Student-First",   description: "Every recommendation is guided by what's genuinely best for the student — not commission-driven placements." },
  { icon: Eye,          title: "Transparency",    description: "No hidden fees, no unrealistic promises. Honest timelines, real costs, and truthful success rates." },
  { icon: CheckCircle,  title: "Result-Oriented", description: "Our 98% visa success rate is built on thorough preparation and genuine student profiles — not shortcuts." },
  { icon: Globe,        title: "Global Network",  description: "Partnerships with 200+ universities across 8 countries give students access to the best programs." },
];

const milestones = [
  { year: "2010", event: "Founded in Kathmandu with a vision to provide honest, student-first guidance" },
  { year: "2012", event: "First 100 students placed in Australia and Canada" },
  { year: "2014", event: "Expanded test preparation services — IELTS, PTE, TOEFL" },
  { year: "2016", event: "Crossed 500 student placements, added UK and USA destinations" },
  { year: "2018", event: "Launched Germany and Japan programs with scholarship focus" },
  { year: "2020", event: "Reached 1,000+ students placed, 98% visa success rate" },
  { year: "2022", event: "Added Ireland and New Zealand, expanded university partnerships to 200+" },
  { year: "2025–26", event: "2,000+ cumulative students placed across 8 countries" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5.5rem" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Our Story</span>
          <h1 className="mt-3 mb-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
            About Gurumantra Education Consultancy
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            Founded with a vision to make global education accessible, affordable, and transparent for every Nepali student.
          </p>
        </div>
      </section>

      {/* ── Mission + Stats ── */}
      <section className="bg-background section-py">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title mt-3">Guiding Dreams Since 2010</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                At Gurumantra Education Consultancy, we believe that studying abroad shouldn&apos;t be a privilege reserved for the few — it should be an opportunity accessible to anyone with drive and academic capability.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our counselors have guided over 2,000 students to Australia, Canada, USA, UK, and beyond. We replace confusion with clarity, ensuring your application process is smooth, ethical, and highly successful.
              </p>
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label, sub, icon: Icon }) => (
                <div key={label} className="bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 transition-transform">
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <div className="text-3xl font-black tracking-tight text-foreground mb-0.5">{value}</div>
                  <div className="text-sm font-semibold text-foreground">{label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <div className="text-center section-header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Guides Everything We Do</h2>
            <p className="section-desc">Four principles that shape every interaction, every recommendation, and every outcome for our students.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-7 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#E3F0FF] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-background section-py">
        <div className="container-main">
          <div className="text-center section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">15 Years of Changing Lives</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-border" aria-hidden="true" />

              <div className="flex flex-col gap-8">
                {milestones.map(({ year, event }) => (
                  <div key={year} className="flex items-start gap-6">
                    <div className="w-16 shrink-0 text-right">
                      <span className="text-sm font-bold text-accent">{year}</span>
                    </div>
                    <div className="relative z-10 w-4 h-4 rounded-full bg-accent border-4 border-background shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary section-py">
        <div className="container-main text-center">
          <div className="max-w-xl mx-auto">
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Work With Us</span>
            <h2 className="section-title text-white mt-3">Ready to Start Your Journey?</h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.78)" }}>
              Join 2,000+ Nepali students who trusted Gurumantra to guide them to their dream university.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 font-bold rounded-xl text-sm px-8 py-4 shadow-lg hover:opacity-90 hover:scale-105 transition-all"
              style={{ background: "#E8A317", color: "#fff" }}
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
