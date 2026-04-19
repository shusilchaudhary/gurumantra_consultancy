"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { consultationSchema, type ConsultationFormData } from "@/lib/schemas";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const DESTINATIONS = ["Australia", "Canada", "UK", "USA", "New Zealand", "Germany", "Japan", "Ireland", "Not Sure Yet"];
const EDUCATION_LEVELS = ["+2 / High School", "Bachelor's Running", "Bachelor's Completed", "Master's Completed", "Other"];

const TRUST_POINTS = [
  "98% visa success rate",
  "2,000+ students placed",
  "200+ university partners",
  "Free — no obligation",
  "Response within 24 hours",
];

const CONTACT = [
  { icon: Phone, label: "Phone",   value: "+977-01-4XXXXXX",          href: "tel:+97714000000" },
  { icon: Mail,  label: "Email",   value: "info@gurumantra.edu.np",    href: "mailto:info@gurumantra.edu.np" },
  { icon: MapPin, label: "Office", value: "Putalisadak, Kathmandu",    href: undefined },
  { icon: Clock, label: "Hours",   value: "Sun–Fri  10 AM – 5 PM",    href: undefined },
];

const INPUT_CLS = `w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm
  placeholder:text-muted-foreground
  focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
  transition-all`;

const SELECT_CLS = `${INPUT_CLS} appearance-none cursor-pointer`;

export default function BookConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = (_data: ConsultationFormData) => setSubmitted(true);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
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
                {/* Card top bar */}
                <div className="h-[3px] w-full bg-gradient-to-r from-primary via-primary/70 to-primary/30" aria-hidden="true" />

                <div className="p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                        <CheckCircle className="w-9 h-9 text-green-500" aria-hidden="true" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                      <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-8">
                        We&apos;ve received your details. Our counselor will contact you within 24 hours to schedule your free consultation.
                      </p>
                      <Link
                        href="/study-destinations"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white bg-primary hover:bg-primary/90 transition-all"
                      >
                        Explore Destinations <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-foreground mb-1">Your Details</h2>
                      <p className="text-sm text-muted-foreground mb-7">Fill in the form and we&apos;ll get back to you within 24 hours.</p>

                      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

                        {/* Full name */}
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input id="fullName" {...register("fullName")} className={INPUT_CLS} placeholder="Your full name" />
                          {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName.message}</p>}
                        </div>

                        {/* Email + Phone */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input id="email" type="email" {...register("email")} className={INPUT_CLS} placeholder="you@email.com" />
                            {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <input id="phone" {...register("phone")} className={INPUT_CLS} placeholder="+977 98XXXXXXXX" />
                            {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>}
                          </div>
                        </div>

                        {/* Destination + Education */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="destination" className="block text-sm font-semibold text-foreground mb-1.5">
                              Preferred Destination <span className="text-red-500">*</span>
                            </label>
                            <select id="destination" {...register("destination")} className={SELECT_CLS}>
                              <option value="">Select destination</option>
                              {DESTINATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                            </select>
                            {errors.destination && <p className="text-red-500 text-xs mt-1.5">{errors.destination.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="education" className="block text-sm font-semibold text-foreground mb-1.5">
                              Education Level <span className="text-red-500">*</span>
                            </label>
                            <select id="education" {...register("education")} className={SELECT_CLS}>
                              <option value="">Select level</option>
                              {EDUCATION_LEVELS.map((e) => <option key={e} value={e}>{e}</option>)}
                            </select>
                            {errors.education && <p className="text-red-500 text-xs mt-1.5">{errors.education.message}</p>}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
                            Message <span className="text-muted-foreground font-normal">(optional)</span>
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            {...register("message")}
                            className={`${INPUT_CLS} resize-none`}
                            placeholder="Tell us about your goals, current qualifications, budget..."
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary/90 hover:shadow-lg active:scale-[0.99] transition-all
                                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          Submit — Get Free Consultation
                        </button>

                        <p className="text-xs text-muted-foreground text-center">
                          100% free · No obligation · We respond within 24 hours
                        </p>
                      </form>
                    </>
                  )}
                </div>
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
