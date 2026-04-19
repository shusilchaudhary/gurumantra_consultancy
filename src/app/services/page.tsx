import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, BookOpen, FileCheck, School, Award, Plane, ArrowRight, CheckCircle, Users, Star, Shield } from "lucide-react";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Services — Study Abroad Services for Nepali Students",
  description: "Gurumantra Education Consultancy offers career counselling, university admission, visa assistance, test preparation (IELTS/PTE), scholarship guidance, and pre-departure support for Nepali students.",
};

const iconMap: Record<string, React.ElementType> = { GraduationCap, BookOpen, FileCheck, School, Award, Plane };

const trustStats = [
  { icon: Users, value: "2,000+", label: "Students Placed" },
  { icon: Shield, value: "98%", label: "Visa Success Rate" },
  { icon: Star, value: "200+", label: "Partner Universities" },
  { icon: CheckCircle, value: "15+", label: "Years Experience" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent rounded-full opacity-10" style={{ filter: "blur(100px)" }} />
          <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-accent/40 rounded-full opacity-10" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.2)", color: "#F5C542" }}>
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 mt-2">
            End-to-End Study Abroad Services
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            From your first counselling session to landing at your dream university — we handle every step with expertise and care.
          </p>
        </div>
      </section>

      {/* ── Trust Stats Bar ── */}
      <div style={{ background: "#0D47A1", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {trustStats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 py-5 px-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(232,163,23,0.18)" }}>
                  <s.icon className="w-4 h-4" style={{ color: "#F5C542" }} />
                </div>
                <div>
                  <div className="text-xl font-black text-white leading-none">{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="bg-background section-py">
        <div className="container-main">

          <div className="text-center section-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Everything Under One Roof</h2>
            <p className="section-desc">
              Six specialised services designed to take you from Nepal to your dream university — seamlessly, ethically, and successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {services.map((svc) => {
              const Icon = iconMap[svc.icon] || GraduationCap;
              const href = "href" in svc ? (svc.href as string) : "/book-consultation";
              const tagline = "tagline" in svc ? (svc.tagline as string) : "";
              const features = "features" in svc && Array.isArray(svc.features) ? (svc.features as string[]) : [];
              return (
                <div
                  key={svc.title}
                  className="group bg-card border border-border rounded-2xl flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
                >
                  {/* Coloured top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/50 group-hover:from-accent group-hover:to-accent/60 transition-all duration-500" />

                  <div className="p-7 flex flex-col flex-1">

                    {/* Icon + title row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300"
                        style={{ background: "var(--primary-light, #E3F0FF)" }}
                      >
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h2 className="text-lg font-bold text-foreground leading-snug pt-1">{svc.title}</h2>
                    </div>

                    {/* Tagline — the hook sentence */}
                    <p className="text-sm font-medium text-foreground leading-relaxed mb-5 pl-1 border-l-2 border-primary/30">
                      {tagline}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-border mb-5" />

                    {/* Feature bullets */}
                    {features.length > 0 && (
                      <ul className="flex flex-col gap-3 mb-6">
                        {features.map((f) => (
                          <li key={f} className="flex items-center gap-3">
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: "var(--primary-light, #E3F0FF)" }}
                            >
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M2 5l2.5 2.5L8 3" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span className="text-sm text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA — pushed to bottom */}
                    <div className="mt-auto pt-5 border-t border-border">
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary/90 hover:shadow-md transition-all duration-200 group/btn"
                      >
                        Get started
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <div className="text-center section-header">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We Work With You</h2>
            <p className="section-desc">A structured, step-by-step journey that removes confusion and keeps you on track.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { step: "01", title: "Free Consultation", desc: "Tell us your goals, budget, and timeline. We evaluate your profile and recommend the right path." },
              { step: "02", title: "University Selection", desc: "We shortlist universities matching your profile, craft compelling applications and SOPs." },
              { step: "03", title: "Visa & Documentation", desc: "We prepare a watertight visa file — documents, finances, and mock interviews covered." },
              { step: "04", title: "Pre-Departure", desc: "Arrival briefings, accommodation, banking, SIM card, and student community connections." },
            ].map((s) => (
              <div key={s.step} className="bg-card border border-border rounded-2xl p-7 relative">
                <div className="text-5xl font-black mb-4 leading-none" style={{ color: "var(--primary-light, #E3F0FF)", WebkitTextStroke: "2px var(--primary)" }}>
                  {s.step}
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-primary section-py">
        <div className="container-main text-center">
          <div className="max-w-2xl mx-auto">
            <span className="section-label" style={{ background: "rgba(232,163,23,0.2)", color: "#F5C542" }}>
              Get Started Today
            </span>
            <h2 className="section-title text-white mt-2">
              Need Personalised Guidance?
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
              Our expert counselors will assess your profile and recommend the best path forward — completely free, no obligation.
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
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
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
