import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap, BookOpen, FileCheck,
  School, Award, Plane, ArrowRight,
  Users, Shield, Star, CheckCircle,
} from "lucide-react";
import { services } from "@/data/content";
import { ServiceCard } from "@/components/services/service-card";

export const metadata: Metadata = {
  title: "Our Services — Study Abroad Services for Nepali Students",
  description:
    "Gurumantra Education Consultancy offers career counselling, university admission, visa assistance, test preparation (IELTS/PTE), scholarship guidance, and pre-departure support for Nepali students.",
};

/* ─── icon lookup ─── */
const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap, BookOpen, FileCheck, School, Award, Plane,
};

/* ─── trust strip ─── */
const TRUST = [
  { icon: Users,       value: "2,000+", label: "Students Placed"    },
  { icon: Shield,      value: "98%",    label: "Visa Success Rate"   },
  { icon: Star,        value: "200+",   label: "Partner Universities" },
  { icon: CheckCircle, value: "15+",    label: "Years Experience"    },
];

/* ─── process steps ─── */
const STEPS = [
  { n: "01", title: "Free Consultation",   desc: "Tell us your goals, budget and timeline. We evaluate your profile and recommend the right path." },
  { n: "02", title: "University Selection", desc: "We shortlist universities matching your profile and craft compelling applications and SOPs."       },
  { n: "03", title: "Visa & Documents",    desc: "We build a watertight visa file — documents, finances, and mock interview coaching."               },
  { n: "04", title: "Pre-Departure",       desc: "Arrival briefings, accommodation, banking, SIM card and student community connections."            },
];

export default function ServicesPage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section
        className="bg-primary text-white relative overflow-hidden"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        {/* decorative blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]" style={{ filter: "blur(120px)" }} />
        </div>

        <div className="container-main max-w-3xl text-center relative z-10">
          <span
            className="section-label"
            style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}
          >
            What We Offer
          </span>

          <h1 className="mt-3 mb-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
            End-to-End Study&nbsp;Abroad&nbsp;Services
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            From your first counselling session to landing at your dream university —
            we handle every step with expertise and care.
          </p>
        </div>
      </section>

      {/* ════════ TRUST STATS BAR ════════ */}
      <div
        role="region"
        aria-label="Key statistics"
        style={{ background: "#0D47A1", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="container-main">
          <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {TRUST.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 py-5 px-6">
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(232,163,23,0.18)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#F5C542" }} />
                </div>
                <div>
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-xl font-black text-white leading-none">{value}</dd>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>{label}</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ════════ SERVICES GRID ════════ */}
      <section className="bg-background section-py" aria-labelledby="services-heading">
        <div className="container-main">

          {/* section header */}
          <header className="text-center section-header">
            <span className="section-label">Our Services</span>
            <h2 id="services-heading" className="section-title">Everything Under One Roof</h2>
            <p className="section-desc">
              Six specialised services designed to take you from Nepal to your dream
              university — seamlessly, ethically, and successfully.
            </p>
          </header>

          {/* equal-height card grid — items-stretch keeps every row uniform */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {services.map((svc) => (
              <ServiceCard
                key={svc.title}
                icon={ICON_MAP[svc.icon] ?? GraduationCap}
                title={svc.title}
                tagline={"tagline" in svc ? (svc.tagline as string) : svc.description.slice(0, 80)}
                features={"features" in svc ? (svc.features as string[]) : []}
                href={"href" in svc ? (svc.href as string) : "/book-consultation"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ HOW WE WORK ════════ */}
      <section className="bg-muted section-py" aria-labelledby="process-heading">
        <div className="container-main">

          <header className="text-center section-header">
            <span className="section-label">Our Process</span>
            <h2 id="process-heading" className="section-title">How We Work With You</h2>
            <p className="section-desc">
              A structured, step-by-step journey that removes confusion and keeps you on track.
            </p>
          </header>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 list-none">
            {STEPS.map(({ n, title, desc }) => (
              <li key={n} className="bg-card border border-border rounded-2xl p-7">
                {/* outline number */}
                <p
                  aria-hidden="true"
                  className="text-[3.25rem] font-black leading-none mb-4 select-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px var(--primary)",
                    opacity: 0.25,
                  }}
                >
                  {n}
                </p>
                <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="bg-primary section-py" aria-labelledby="cta-heading">
        <div className="container-main text-center">
          <div className="max-w-2xl mx-auto">

            <span
              className="section-label"
              style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}
            >
              Get Started Today
            </span>

            <h2
              id="cta-heading"
              className="section-title text-white mt-3"
            >
              Need Personalised Guidance?
            </h2>

            <p
              className="text-base lg:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Our expert counselors will assess your profile and recommend the best
              path forward — completely free, no obligation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 font-bold rounded-xl text-sm
                           px-8 py-4 shadow-lg transition-all hover:opacity-90 hover:scale-105
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                style={{ background: "#E8A317", color: "#fff" }}
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/study-destinations"
                className="inline-flex items-center gap-2 font-semibold rounded-xl text-sm
                           px-8 py-4 border-2 text-white transition-all hover:bg-white/10
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
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
