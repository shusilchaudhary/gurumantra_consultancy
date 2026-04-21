"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

/* ── Social SVG icons ── */
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const TkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const socialLinks = [
  { icon: FbIcon, label: "Facebook",  href: "https://www.facebook.com/gurumantraeducational/",                                                     color: "#1877F2" },
  { icon: IgIcon, label: "Instagram", href: "https://www.instagram.com/gurumantra_edu?igsh=MWluYnkyemJrajA0Zg%3D%3D&utm_source=qr",               color: "#E1306C" },
  { icon: TkIcon, label: "TikTok",    href: "https://www.tiktok.com/@guru.mantra3",                                                                color: "#010101" },
];

const footerLinks = {
  studyAbroad: [
    { label: "🇰🇷 South Korea",     href: "/study-destinations/south-korea" },
    { label: "🇦🇺 Australia",      href: "/study-destinations/australia"  },
    { label: "🇨🇦 Canada",          href: "/study-destinations/canada"     },
    { label: "🇬🇧 United Kingdom",  href: "/study-destinations/uk"         },
    { label: "🇺🇸 United States",   href: "/study-destinations/usa"        },
    { label: "🇳🇿 New Zealand",     href: "/study-destinations/new-zealand"},
    { label: "🇩🇪 Germany",         href: "/study-destinations/germany"    },
  ],
  services: [
    { label: "Career Counselling",    href: "/services"          },
    { label: "University Admissions", href: "/services"          },
    { label: "Visa Assistance",       href: "/services"          },
    { label: "Test Preparation",      href: "/test-preparation"  },
    { label: "Scholarship Guidance",  href: "/scholarships"      },
    { label: "Pre-Departure Support", href: "/services"          },
  ],
  resources: [
    { label: "Scholarships 2026",  href: "/scholarships"     },
    { label: "IELTS Preparation",  href: "/test-preparation" },
    { label: "PTE Preparation",    href: "/test-preparation" },
    { label: "TOEFL Preparation",  href: "/test-preparation" },
    { label: "Success Stories",    href: "/success-stories"  },
    { label: "Latest Blog",        href: "/blog"             },
  ],
  company: [
    { label: "About Us",          href: "/about"              },
    { label: "Our Team",          href: "/about"              },
    { label: "Book Consultation", href: "/book-consultation"  },
    { label: "Privacy Policy",    href: "/"                   },
    { label: "Terms of Service",  href: "/"                   },
    { label: "Disclaimer",        href: "/"                   },
  ],
};

const LINK_COLOR = "rgba(255,255,255,0.65)";
const MUTED      = "rgba(255,255,255,0.45)";
const BORDER     = "rgba(255,255,255,0.10)";
const ICON_BG    = "rgba(255,255,255,0.10)";

export default function Footer() {
  return (
    <footer style={{ background: "#0D1B3E", color: "#fff", marginTop: "auto" }}>

      {/* ══════ CTA STRIP ══════ */}
      <div style={{ background: "#1565C0", borderBottom: `1px solid ${BORDER}` }}>
        <div className="container-main" style={{
          paddingTop: "1.75rem", paddingBottom: "1.75rem",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{
              width: 48, height: 48, borderRadius: "0.875rem", flexShrink: 0,
              background: "rgba(255,255,255,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.375rem",
            }}>🎓</div>
            <div>
              <p style={{ fontWeight: 800, color: "#fff", fontSize: "1.05rem", lineHeight: 1.2 }}>
                Ready to Study Abroad?
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                Book a FREE consultation with our expert counselors today.
              </p>
            </div>
          </div>
          <Link href="/book-consultation" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.875rem 1.75rem", borderRadius: "0.875rem",
            background: "#D32F2F", color: "#fff",
            fontWeight: 700, fontSize: "0.875rem", textDecoration: "none",
            whiteSpace: "nowrap", flexShrink: 0,
            boxShadow: "0 4px 16px rgba(211,47,47,)",
          }}>
            Book Free Consultation <ArrowRight style={{ width: 15, height: 15 }} />
          </Link>
        </div>
      </div>

      {/* ══════ MAIN FOOTER ══════ */}
      <div className="container-main" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "2.5rem" }} className="footer-grid">

          {/* ── Brand column ── */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", marginBottom: "1.25rem" }}>
              <div style={{ position: "relative", width: 44, height: 44, flexShrink: 0 }}>
                <Image src="/gurumantra.jpeg" alt="Gurumantra Educational Consultancy" fill sizes="44px" style={{ objectFit: "contain", borderRadius: 10 }} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", lineHeight: 1.2 }}>Gurumantra</div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#E53935", lineHeight: 1.2 }}>Education Consultancy</div>
              </div>
            </Link>

            <p style={{ fontSize: "0.85rem", color: LINK_COLOR, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Nepal&apos;s trusted study abroad consultancy. Over 2,000 students placed in top universities across 7 countries with a 98% visa success rate.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[
                { icon: <Phone style={{ width: 13, height: 13 }} />, label: "+977-9802356302",                    href: "tel:+9779802356302" },
                { icon: <Mail  style={{ width: 13, height: 13 }} />, label: "info@gurumantra.edu.np",             href: "mailto:info@gurumantra.edu.np" },
                { icon: <MapPin style={{ width: 13, height: 13 }} />, label: "Chabahil Central Complex, 3rd Floor, Kathmandu", href: "https://share.google/TOTKV4Wefsk7MYnBf" },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: LINK_COLOR, textDecoration: "none", fontSize: "0.82rem" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
                >
                  <span style={{ width: 26, height: 26, borderRadius: "0.5rem", flexShrink: 0, background: ICON_BG, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: "0.625rem", display: "flex", alignItems: "center", justifyContent: "center", background: ICON_BG, border: `1px solid ${BORDER}`, color: "#fff", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = s.color; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = ICON_BG; }}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Study Abroad ── */}
          <div>
            <h3 style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#E53935", marginBottom: "1.25rem" }}>
              Study Abroad
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", listStyle: "none", padding: 0 }}>
              {footerLinks.studyAbroad.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: LINK_COLOR, textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
                  >{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#E53935", marginBottom: "1.25rem" }}>
              Our Services
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", listStyle: "none", padding: 0 }}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: LINK_COLOR, textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
                  >{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Resources ── */}
          <div>
            <h3 style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#E53935", marginBottom: "1.25rem" }}>
              Resources
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", listStyle: "none", padding: 0 }}>
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: LINK_COLOR, textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
                  >{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h3 style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#E53935", marginBottom: "1.25rem" }}>
              Company
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: LINK_COLOR, textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
                  >{link.label}</Link>
                </li>
              ))}
            </ul>

            {/* Office hours card */}
            <div style={{ background: ICON_BG, border: `1px solid ${BORDER}`, borderRadius: "0.875rem", padding: "1rem" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.625rem" }}>
                Office Hours
              </p>
              <p style={{ fontSize: "0.78rem", color: LINK_COLOR, marginBottom: "0.25rem" }}>Sun – Fri: 6:00 AM – 5:00 PM</p>
              <p style={{ fontSize: "0.78rem", color: MUTED }}>Saturday: Closed</p>
            </div>
          </div>

        </div>
      </div>

      {/* ══════ BOTTOM BAR ══════ */}
      <div style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="container-main" style={{
          paddingTop: "1.25rem", paddingBottom: "1.25rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "1rem", flexWrap: "wrap",
        }}>
          <p style={{ fontSize: "0.78rem", color: MUTED }}>
            © {new Date().getFullYear()} Gurumantra Educational Consultancy. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((label) => (
              <Link key={label} href="/" style={{ fontSize: "0.78rem", color: MUTED, textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
        @media (max-width: 700px)  { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
