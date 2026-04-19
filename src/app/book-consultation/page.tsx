"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const TRUST_POINTS = [
  "98% visa success rate",
  "2,000+ students placed",
  "200+ university partners",
  "Free — no obligation",
  "Response within 24 hours",
];

const CONTACT = [
  { icon: Phone, label: "Phone",   value: "+977-9802356302",           href: "tel:+9779802356302" },
  { icon: Mail,  label: "Email",   value: "info@gurumantra.edu.np",    href: "mailto:info@gurumantra.edu.np" },
  { icon: MapPin, label: "Office", value: "Chabahil Central Complex, 3rd Floor, Kathmandu, Nepal", href: "https://share.google/TOTKV4Wefsk7MYnBf" },
  { icon: Clock, label: "Hours",   value: "Sun–Fri  10 AM – 5 PM",    href: undefined },
];

export default function BookConsultationPage() {

  return (
    <>
      {/* ── Hero ── */}
      <section className="text-white relative overflow-hidden" style={{ background: `linear-gradient(rgba(21,101,192,0.82), rgba(13,71,161,0.90)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=700&fit=crop&auto=format&q=80)`, backgroundSize: "cover", backgroundPosition: "center", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>100% Free</span>
          <h1 className="mt-3 mb-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
            Book a Free Consultation
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            Talk to our expert counselors about your study abroad goals. No fees, no pressure — just honest, personalised guidance.
          </p>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="bg-background section-py">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="h-[3px] w-full bg-gradient-to-r from-primary via-primary/70 to-primary/30" aria-hidden="true" />
                <iframe
                  src="https://cmst.xyz/form/7cd3a171-6d61-4da4-b24"
                  title="Book Free Consultation"
                  className="w-full border-0"
                  style={{ minHeight: 680 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-2 flex flex-col gap-6">

              {/* Why Choose Us */}
              <div className="bg-card border border-border rounded-2xl p-7">
                <h3 className="font-bold text-base text-foreground mb-5">Why Choose Gurumantra?</h3>
                <ul className="flex flex-col gap-3" role="list">
                  {TRUST_POINTS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#E3F0FF] flex items-center justify-center shrink-0">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                          <path d="M1.5 4.5l2 2L7.5 2" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="bg-card border border-border rounded-2xl p-7">
                <h3 className="font-bold text-base text-foreground mb-5">Contact Us Directly</h3>
                <ul className="flex flex-col gap-4" role="list">
                  {CONTACT.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E3F0FF] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm text-foreground">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick links */}
              <div className="bg-muted border border-border rounded-2xl p-6 flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Quick Links</p>
                {[
                  { label: "Study Destinations", href: "/study-destinations" },
                  { label: "Scholarships 2026",  href: "/scholarships"       },
                  { label: "Test Preparation",   href: "/test-preparation"   },
                  { label: "Success Stories",    href: "/success-stories"    },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center justify-between text-sm text-foreground hover:text-primary transition-colors group">
                    {label}
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
