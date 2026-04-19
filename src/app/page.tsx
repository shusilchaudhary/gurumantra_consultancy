"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, GraduationCap, Globe, Award, Users, CheckCircle,
  Star, ChevronRight, BookOpen, FileCheck, School, Plane,
  Phone, MapPin, Clock, ChevronDown,
} from "lucide-react";
import { testimonials, services, blogPosts } from "@/data/content";

/* ─── Data ─── */
const stats = [
  { value: "2,000+", label: "Students Placed", icon: Users },
  { value: "98%", label: "Visa Success Rate", icon: CheckCircle },
  { value: "200+", label: "Partner Universities", icon: School },
  { value: "8+", label: "Study Destinations", icon: Globe },
];

const destinations = [
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    tagline: "Top-ranked universities & post-study work rights",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    tagline: "Clear PR pathway & world-class education",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    tagline: "1-year Master's & Graduate Route visa",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    tagline: "World-class research universities & OPT",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "🇳🇿",
    tagline: "Safe, scenic & affordable education",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    tagline: "Tuition-free public universities",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Japan",
    slug: "japan",
    flag: "🇯🇵",
    tagline: "MEXT scholarships & tech innovation hub",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    tagline: "Tech HQ of Europe & fast visa processing",
    image: "https://images.unsplash.com/photo-1564959130747-897fb406b9af?auto=format&fit=crop&w=600&q=80",
  },
];

const whyUs = [
  { title: "Expert Counseling", desc: "One-on-one guidance from certified counselors with 10+ years of experience." },
  { title: "98% Visa Success", desc: "Watertight applications with thorough document prep and interview coaching." },
  { title: "200+ Universities", desc: "Direct partnerships with universities in 8 countries for faster admissions." },
  { title: "Scholarship Support", desc: "We've helped students secure over NPR 5 Crore in scholarships collectively." },
  { title: "End-to-End Service", desc: "From IELTS coaching to pre-departure briefings — everything under one roof." },
];

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, BookOpen, FileCheck, School, Award, Plane,
};

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

/* ─── Consultation Form ─── */
function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", message: "" });

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          We&apos;ve received your enquiry. Our counselor will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
          <input
            required
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
          <input
            required
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
        <input
          required
          type="tel"
          placeholder="+977 98XXXXXXXX"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Destination</label>
        <div className="relative">
          <select
            value={form.destination}
            onChange={(e) => setForm({ ...form, destination: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
          >
            <option value="">Select destination...</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>{d.flag} {d.name}</option>
            ))}
            <option value="Not decided">Not decided yet</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Your Message</label>
        <textarea
          rows={3}
          placeholder="Tell us about your education goals, current qualifications, budget..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
      >
        Get Free Consultation →
      </button>
      <p className="text-xs text-muted-foreground text-center">
        100% free. No obligation. We respond within 24 hours.
      </p>
    </form>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
          alt="Students celebrating graduation"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(21,101,192,0.92) 0%, rgba(21,101,192,0.75) 50%, rgba(13,71,161,0.88) 100%)",
          }}
        />

        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", top: "-8rem", right: "10%", width: "24rem", height: "24rem", background: "#E8A317", borderRadius: "50%", filter: "blur(80px)" }}
          />
        </div>

        <div className="relative container-main flex flex-col justify-center" style={{ minHeight: "92vh", paddingTop: "5rem", paddingBottom: "8rem", zIndex: 10 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-white text-sm font-medium rounded-full mb-8"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(12px)", padding: "0.5rem 1.25rem" }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8A317", display: "inline-block" }} />
              Nepal&apos;s Most Trusted Study Abroad Partner Since 2010
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Your Dream University
              <span className="block mt-2" style={{ color: "#F5C542" }}>
                Awaits — We Guide the Way
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed font-light">
              Over 2,000 Nepali students placed in top universities across 8 countries.
              Expert counseling, IELTS prep, visa assistance &amp; full scholarship support.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/book-consultation"
                className="group inline-flex items-center gap-3 font-bold rounded-2xl text-white hover:scale-105 transition-all text-base shadow-xl"
                style={{ padding: "0.875rem 2rem", background: "#E8A317" }}
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/study-destinations"
                className="inline-flex items-center gap-3 rounded-2xl text-white hover:bg-white/10 transition-colors text-base font-medium"
                style={{ padding: "0.875rem 2rem", border: "2px solid rgba(255,255,255,0.3)", backdropFilter: "blur(4px)" }}
              >
                Explore Destinations
                <Globe className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick stats strip */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "1rem", padding: "0.875rem 0.5rem", backdropFilter: "blur(8px)" }}>
                  <div className="text-2xl font-black text-white mb-0.5">{s.value}</div>
                  <div className="text-xs text-white/75 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ANNOUNCEMENT BAR
      ════════════════════════════════════════════ */}
      <div className="bg-accent text-white py-3">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0" />
            <span>
              <strong>July 2026 Intake</strong> applications are now open — Australia, Canada &amp; UK.
            </span>
          </div>
          <Link href="/book-consultation" className="flex items-center gap-1 font-bold text-white underline underline-offset-2 whitespace-nowrap hover:no-underline transition-all">
            Apply Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          STUDY DESTINATIONS
      ════════════════════════════════════════════ */}
      <section className="bg-background section-py">
        <div className="container-main">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center section-header"
          >
            <span className="section-label">Study Destinations</span>
            <h2 className="section-title">
              Choose Where You Want to Study
            </h2>
            <p className="section-desc">
              Explore detailed guides for 8 top study destinations — eligibility, costs, visa steps, and scholarship opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
            {destinations.map((d, i) => (
              <motion.div
                key={d.slug}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={`/study-destinations/${d.slug}`}
                  className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src={d.image}
                    alt={`Study in ${d.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-2xl mb-1.5">{d.flag}</div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{d.name}</h3>
                    <p className="text-white/75 text-xs leading-snug mb-3 line-clamp-2">{d.tagline}</p>
                    <div className="inline-flex items-center gap-1 text-accent text-xs font-bold">
                      Explore <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/study-destinations"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all text-sm"
            >
              View All Destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS BAND
      ════════════════════════════════════════════ */}
      <section style={{ background: "var(--primary)" }} className="section-py-sm">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          OUR SERVICES
      ════════════════════════════════════════════ */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center section-header"
          >
            <span className="section-label">Our Services</span>
            <h2 className="section-title">
              Everything You Need Under One Roof
            </h2>
            <p className="section-desc">
              From your first consultation to landing in your dream country — we handle every step of the process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon] || GraduationCap;
              return (
                <motion.div
                  key={svc.title}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300"
                    style={{ background: "var(--primary-light, #E3F0FF)" }}
                  >
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-5 hover:gap-2.5 transition-all"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════ */}
      <section className="bg-background section-py">
        <div className="container-main">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center section-header"
          >
            <span className="section-label">How It Works</span>
            <h2 className="section-title">
              Your Journey to Study Abroad
            </h2>
            <p className="section-desc">
              A simple 5-step process — from your first consultation to landing at your dream university.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div
              className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"
              style={{ marginLeft: "10%", marginRight: "10%" }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: 1, title: "Free Consultation", desc: "Discuss your goals, budget & dream destination with our experts." },
                { step: 2, title: "University Selection", desc: "We shortlist universities & craft compelling applications for you." },
                { step: 3, title: "Test Preparation", desc: "IELTS, PTE, TOEFL coaching to hit your target score." },
                { step: 4, title: "Visa Application", desc: "Document prep, financial structuring & interview coaching." },
                { step: 5, title: "Pre-Departure", desc: "Airport briefing, accommodation & student community connections." },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  transition={{ delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white mb-5 shadow-lg relative z-10"
                    style={{ background: "var(--primary)" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl text-sm"
            >
              Start Your Journey Today <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════ */}
      <section style={{ background: "var(--primary)" }} className="section-py">
        <div className="container-main">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center section-header"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full" style={{ background: "rgba(232,163,23,0.2)", color: "#F5C542", letterSpacing: "0.12em" }}>
              Student Stories
            </span>
            <h2 className="section-title text-white">
              Real Students. Real Success.
            </h2>
            <p className="section-desc" style={{ color: "rgba(255,255,255,0.75)" }}>
              Hear from the 2,000+ Nepali students who achieved their study abroad dreams with Gurumantra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic flex-1" style={{ color: "rgba(255,255,255,0.88)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "1rem" }}>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#F5C542" }}>
                    {t.program} — {t.university}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-sm"
            >
              Read All Success Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONSULTATION FORM + WHY US
      ════════════════════════════════════════════ */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left: Why Choose Us */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4 px-4 py-1.5 rounded-full bg-accent/10">
                Why Choose Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
                Nepal&apos;s Most Trusted <br />
                <span className="text-primary">Study Abroad Partner</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 15 years of experience and 2,000+ successful students, we provide
                the most comprehensive study abroad support in Nepal.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                {whyUs.map((w, i) => (
                  <motion.div
                    key={w.title}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-0.5">{w.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact info */}
              <div className="flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Call Us Directly</div>
                    <a href="tel:+97714000000" className="text-primary hover:underline">+977-01-4XXXXXX</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Visit Our Office</div>
                    <span>Chabahil Central Complex, 3rd Floor, Nearby KL Tower, Opp. Smart Palace, Chabahil, Kathmandu</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Office Hours</div>
                    <span>Mon–Fri 9:00 AM–6:00 PM &nbsp;|&nbsp; Sat 10:00 AM–4:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-3xl p-10 shadow-xl"
            >
              <h3 className="text-2xl font-extrabold text-foreground mb-2">
                Get a Free Consultation
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill in the form and one of our expert counselors will get back to you within 24 hours.
              </p>
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BLOG / LATEST NEWS
      ════════════════════════════════════════════ */}
      <section className="bg-background section-py">
        <div className="container-main">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 section-header"
          >
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-3 px-4 py-1.5 rounded-full bg-accent/10">
                Latest Updates
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
                News &amp; Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm border border-primary/30 px-6 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all whitespace-nowrap"
            >
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Blog image placeholder */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, var(--primary) 0%, #1E88E5 100%)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <BookOpen className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden section-py">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
          alt="Graduates celebrating"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,71,161,0.94) 0%, rgba(21,101,192,0.88) 100%)" }} />

        <div className="relative container-main text-center" style={{ zIndex: 10 }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Your Global Future Starts Today
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Join 2,000+ Nepali students who trusted Gurumantra to take them from Kathmandu to the world&apos;s best universities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-3 font-bold rounded-2xl text-white hover:scale-105 transition-all shadow-xl text-base"
                style={{ padding: "1rem 2.25rem", background: "#E8A317" }}
              >
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+97714000000"
                className="inline-flex items-center gap-3 rounded-2xl text-white font-bold hover:bg-white/10 transition-colors text-base"
                style={{ padding: "1rem 2.25rem", border: "2px solid rgba(255,255,255,0.3)" }}
              >
                <Phone className="w-5 h-5" /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Gurumantra Education Consultancy",
            url: "https://gurumantra.com.np",
            description: "Nepal's premium study abroad consultancy with 2,000+ students placed worldwide.",
            address: { "@type": "PostalAddress", streetAddress: "Chabahil Central Complex, 3rd Floor, Nearby KL Tower, Opp. Smart Palace", addressLocality: "Chabahil, Kathmandu", addressCountry: "NP" },
            telephone: "+977-01-4XXXXXX",
            areaServed: "Nepal",
          }),
        }}
      />
    </div>
  );
}
