"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const SocialYoutube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);
const SocialLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const SocialX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const footerLinks = {
  studyAbroad: [
    { label: "🇦🇺 Australia", href: "/study-destinations/australia" },
    { label: "🇨🇦 Canada", href: "/study-destinations/canada" },
    { label: "🇬🇧 United Kingdom", href: "/study-destinations/uk" },
    { label: "🇺🇸 United States", href: "/study-destinations/usa" },
    { label: "🇳🇿 New Zealand", href: "/study-destinations/new-zealand" },
    { label: "🇩🇪 Germany", href: "/study-destinations/germany" },
    { label: "🇯🇵 Japan", href: "/study-destinations/japan" },
    { label: "🇮🇪 Ireland", href: "/study-destinations/ireland" },
  ],
  services: [
    { label: "Career Counselling", href: "/services" },
    { label: "University Admissions", href: "/services" },
    { label: "Visa Assistance", href: "/services" },
    { label: "Test Preparation", href: "/test-preparation" },
    { label: "Scholarship Guidance", href: "/scholarships" },
    { label: "Pre-Departure Support", href: "/services" },
  ],
  resources: [
    { label: "Scholarships 2026", href: "/scholarships" },
    { label: "IELTS Preparation", href: "/test-preparation" },
    { label: "PTE Preparation", href: "/test-preparation" },
    { label: "TOEFL Preparation", href: "/test-preparation" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Latest Blog", href: "/blog" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Book Consultation", href: "/book-consultation" },
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Disclaimer", href: "/" },
  ],
};

const socialLinks = [
  { icon: SocialFacebook, label: "Facebook", href: "#", color: "#1877F2" },
  { icon: SocialInstagram, label: "Instagram", href: "#", color: "#E1306C" },
  { icon: SocialYoutube, label: "YouTube", href: "#", color: "#FF0000" },
  { icon: SocialLinkedin, label: "LinkedIn", href: "#", color: "#0A66C2" },
  { icon: SocialX, label: "Twitter / X", href: "#", color: "#1DA1F2" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">

      {/* ─── Newsletter / CTA Strip ─── */}
      <div style={{ background: "var(--primary)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-base">Ready to Study Abroad?</p>
            <p className="text-white/75 text-sm">Book a FREE consultation with our expert counselors today.</p>
          </div>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 font-bold text-sm rounded-full px-6 py-2.5 whitespace-nowrap hover:scale-105 transition-all shadow-lg"
            style={{ background: "#E8A317", color: "#ffffff" }}
          >
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ─── Main Footer ─── */}
      <div className="container-main" style={{ paddingTop: "5rem", paddingBottom: "4.5rem" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-10">

          {/* Brand Column (spans 2 cols) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 shrink-0">
                <Image
                  src="/gurumantra.jpeg"
                  alt="Gurumantra Education Consultancy"
                  fill
                  sizes="44px"
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <div className="font-extrabold text-lg text-white leading-tight">Gurumantra</div>
                <div className="text-xs font-medium leading-tight" style={{ color: "#F5C542" }}>Education Consultancy</div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Nepal&apos;s trusted study abroad consultancy since 2010. Over 2,000 students
              placed in top universities across 8 countries with a 98% visa success rate.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="tel:+97714000000"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.10)" }}>
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="group-hover:text-white transition-colors">+977-01-4XXXXXX</span>
              </a>
              <a
                href="mailto:info@gurumantra.edu.np"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.10)" }}>
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="group-hover:text-white transition-colors">info@gurumantra.edu.np</span>
              </a>
              <div
                className="flex items-start gap-2.5 text-sm"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(255,255,255,0.10)" }}>
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Putalisadak, Kathmandu,<br />Nepal</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = s.color; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Study Abroad */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "#F5C542" }}>
              Study Abroad
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.studyAbroad.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white hover:translate-x-0.5 inline-block transition-all"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "#F5C542" }}>
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all hover:text-white inline-block"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "#F5C542" }}>
              Resources
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all hover:text-white inline-block"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "#F5C542" }}>
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all hover:text-white inline-block"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Office Hours */}
            <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">Office Hours</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.60)" }}>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.60)" }}>Saturday: 10:00 AM – 4:00 PM</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          <p>© {new Date().getFullYear()} Gurumantra Education Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
