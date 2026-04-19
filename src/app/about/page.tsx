import type { Metadata } from "next";
import { Users, Target, Eye, CheckCircle, School, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Gurumantra Education Consultancy — Study Abroad Consultancy in Nepal",
  description: "Learn about Gurumantra Education Consultancy's mission and history. We have guided over 2,000 Nepali students to top universities in Australia, Canada, UK, and USA.",
};

const stats = [
  { value: "2,000+", label: "Students Placed", icon: Users },
  { value: "98%", label: "Visa Success", icon: CheckCircle },
  { value: "200+", label: "Universities", icon: School },
  { value: "8", label: "Countries", icon: Globe },
];

const values = [
  { icon: Target, title: "Student-First Approach", description: "Every recommendation we make is guided by what is genuinely best for the student's career and future — not commission-driven placements." },
  { icon: Eye, title: "Transparency", description: "No hidden fees, no unrealistic promises. We share honest timelines, real costs, and truthful success rates so you can make informed decisions." },
  { icon: CheckCircle, title: "Result-Oriented", description: "Our 98% visa success rate is built on thorough preparation, complete documentation, and genuine student profiles — not shortcuts." },
  { icon: Globe, title: "Global Network", description: "Partnerships with 200+ universities across 8 countries ensure our students get access to the best programs and faster processing." },
];

const milestones = [
  { year: "2018", event: "Founded in Kathmandu with a vision to provide honest, student-first guidance" },
  { year: "2019", event: "First 100 students placed in Australia and Canada" },
  { year: "2020", event: "Expanded test preparation services — IELTS, PTE, TOEFL" },
  { year: "2021", event: "Crossed 500 student placements, added UK and USA destinations" },
  { year: "2022", event: "Launched Germany and Japan programs with scholarship focus" },
  { year: "2023", event: "Reached 1,000+ students placed, 98% visa success rate" },
  { year: "2024", event: "Added Ireland and New Zealand, expanded university partnerships to 200+" },
  { year: "2025–26", event: "2,000+ cumulative students placed across 8 countries" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent rounded-full blur-[100px]" />
          <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-accent/60 rounded-full blur-[120px]" />
        </div>
        <div className="container-main max-w-4xl text-center relative z-10">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl lg:text-7xl font-sans font-extrabold mb-6 tracking-tight">About Gurumantra Education Consultancy</h1>
          <p className="text-xl lg:text-2xl opacity-80 leading-relaxed font-light">
            Founded with a vision to make global education accessible, affordable, and transparent for every Nepali student.
          </p>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="container-main section-py">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">Our Mission</span>
            <h2 className="text-4xl font-sans font-extrabold mb-6 tracking-tight">Guiding Dreams Since 2018</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Gurumantra Education Consultancy, we believe that studying abroad shouldn&apos;t be a privilege reserved for the few, but an opportunity accessible to anyone with the drive and academic capability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our counselors have guided over 2,000 students to their dream destinations — Australia, Canada, USA, UK, and beyond. We replace confusion with clarity, ensuring your application process is smooth, ethical, and highly successful.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card border border-border p-8 rounded-3xl premium-shadow hover:-translate-y-1 transition-transform">
                <stat.icon className="w-10 h-10 text-accent mb-4" />
                <div className="text-4xl font-sans font-black tracking-tight mb-2">{stat.value}</div>
                <div className="text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <h2 className="section-title text-center">What Guides Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 mt-12">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-2xl p-8">
                <v.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-main section-py">
        <h2 className="section-title text-center mb-16">Our Journey</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-4 items-start">
              <div className="w-20 shrink-0 text-right font-bold text-accent">{m.year}</div>
              <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
