"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Moon, Sun, Phone, Mail } from "lucide-react";
import { useTheme } from "next-themes";

/* ── Social SVG icons (lucide removed brand icons) ── */
const FbIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IgIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const TkIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>;

const SOCIAL_LINKS = [
  { label: "Facebook",  icon: FbIcon, href: "https://www.facebook.com/gurumantraeducational/" },
  { label: "Instagram", icon: IgIcon, href: "https://www.instagram.com/gurumantra_edu?igsh=MWluYnkyemJrajA0Zg%3D%3D&utm_source=qr" },
  { label: "TikTok",    icon: TkIcon, href: "https://www.tiktok.com/@guru.mantra3" },
];

const destinations = [
  { name: "South Korea",    slug: "south-korea",flag: "🇰🇷" },
  { name: "Australia",      slug: "australia",  flag: "🇦🇺" },
  { name: "Canada",         slug: "canada",     flag: "🇨🇦" },
  { name: "United Kingdom", slug: "uk",         flag: "🇬🇧" },
  { name: "United States",  slug: "usa",        flag: "🇺🇸" },
  { name: "New Zealand",    slug: "new-zealand",flag: "🇳🇿" },
  { name: "Germany",        slug: "germany",    flag: "🇩🇪" },
];

const navLinks = [
  { label: "About Us",     href: "/about" },
  { label: "Destinations", href: "/study-destinations",
    children: destinations.map((d) => ({ label: `${d.flag}  ${d.name}`, href: `/study-destinations/${d.slug}` })) },
  { label: "Services",     href: "/services" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Test Prep",    href: "/test-preparation" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const ddRef = useRef<HTMLDivElement>(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ── close dropdown on outside click ── */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node))
        setOpenDropdown(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* ── lock body scroll when drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 9999, width: "100%" }}>

        {/* ══════ TOP BAR — MOBILE ONLY (WhatsApp + Email) ══════ */}
        <div
          className="flex md:hidden"
          style={{
            background: "var(--primary)",
            padding: "6px clamp(1rem, 5vw, 1.5rem)",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 11,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {/* Call */}
          <a
            href="tel:+9779802356302"
            style={{
              display: "flex", alignItems: "center", gap: 5,
              color: "inherit", textDecoration: "none", fontWeight: 600,
            }}
          >
            <Phone size={12} />
            Call Us
          </a>

          {/* Divider */}
          <span style={{ opacity: 0.3 }}>|</span>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9779802356302"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 5,
              color: "inherit", textDecoration: "none", fontWeight: 600,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          {/* Divider */}
          <span style={{ opacity: 0.3 }}>|</span>

          {/* Email */}
          <a
            href="mailto:info@gurumantra.edu.np"
            style={{
              display: "flex", alignItems: "center", gap: 5,
              color: "inherit", textDecoration: "none",
            }}
          >
            <Mail size={12} />
            Email
          </a>
        </div>

        {/* ══════ TOP UTILITY BAR (desktop only) ══════ */}
        <div className="hidden md:block" style={{ background: "var(--primary)" }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto",
            padding: "0 clamp(1rem,5vw,3rem)",
            height: 40, display: "flex", alignItems: "center",
            justifyContent: "space-between",
            fontSize: 12, color: "rgba(255,255,255,0.82)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <a href="tel:+9779802356302" style={{ display: "flex", alignItems: "center", gap: 6, color: "inherit", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}>
                <Phone size={12} /> +977-9802356302
              </a>
              <a href="mailto:info@gurumantra.edu.np" style={{ display: "flex", alignItems: "center", gap: 6, color: "inherit", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}>
                <Mail size={12} /> info@gurumantra.edu.np
              </a>
              <span style={{ opacity: 0.3 }}>|</span>
              <span style={{ opacity: 0.65 }}>Sun – Fri &nbsp;6 AM – 5 PM</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, opacity: 0.75 }}>
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  style={{ color: "inherit", display: "flex" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "inherit"; (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ══════ MAIN NAV ══════ */}
        <nav style={{
          background: "#fff",
          borderBottom: "1px solid #e8ecf0",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,.09)" : "none",
          transition: "box-shadow .2s",
        }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto",
            padding: "0 clamp(1rem,5vw,3rem)",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>

            {/* ── Logo ── */}
            <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Image
                src="/gurumantra.jpeg"
                alt="Gurumantra Educational Consultancy"
                width={48}
                height={48}
                style={{ borderRadius: 10, objectFit: "contain" }}
                priority
              />
            </Link>

            {/* ── Desktop Nav links (centered) ── */}
            <div
              ref={ddRef}
              className="hidden md:flex"
              style={{ alignItems: "stretch", height: 64, gap: 0, flex: 1, justifyContent: "center" }}
            >
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    style={{ position: "relative", display: "flex", alignItems: "stretch" }}
                  >
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      style={{
                        display: "flex", alignItems: "center", gap: 4,
                        padding: "0 20px", height: "100%",
                        background: "none", border: "none",
                        borderBottom: openDropdown === link.label ? "2px solid var(--primary)" : "2px solid transparent",
                        fontSize: 14, fontWeight: 500,
                        color: openDropdown === link.label ? "var(--primary)" : "#374151",
                        cursor: "pointer", whiteSpace: "nowrap",
                        transition: "color .15s, border-color .15s",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        if (openDropdown !== link.label) { el.style.color = "var(--primary)"; el.style.borderBottomColor = "var(--primary)"; }
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        if (openDropdown !== link.label) { el.style.color = "#374151"; el.style.borderBottomColor = "transparent"; }
                      }}
                    >
                      {link.label}
                      <ChevronDown size={13} style={{
                        transition: "transform .2s",
                        transform: openDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)",
                      }} />
                    </button>

                    {openDropdown === link.label && (
                      <div style={{
                        position: "absolute", top: "100%", left: 0,
                        minWidth: 280, background: "#fff",
                        border: "1px solid #e8ecf0", borderRadius: 12,
                        boxShadow: "0 8px 40px rgba(0,0,0,.12)",
                        zIndex: 9999, overflow: "hidden",
                      }}>
                        <p style={{ padding: "10px 16px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", borderBottom: "1px solid #f3f4f6" }}>
                          Study Destinations
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                          {link.children.map((child) => (
                            <Link
                              key={child.href} href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              style={{ padding: "12px 16px", fontSize: 13, color: "#374151", textDecoration: "none", transition: "background .1s, color .1s" }}
                              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#eff6ff"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)"; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#374151"; }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        <div style={{ borderTop: "1px solid #f3f4f6", padding: "10px 16px", background: "#f9fafb" }}>
                          <Link href="/study-destinations" onClick={() => setOpenDropdown(null)}
                            style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", textDecoration: "none" }}>
                            View all destinations →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label} href={link.href}
                    style={{
                      display: "flex", alignItems: "center",
                      padding: "0 20px", height: "100%",
                      fontSize: 14, fontWeight: 500, color: "#374151",
                      textDecoration: "none", borderBottom: "2px solid transparent",
                      whiteSpace: "nowrap", transition: "color .15s, border-color .15s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "var(--primary)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#374151"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent"; }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* ── Desktop CTA + Theme ── */}
            <div className="hidden md:flex" style={{ alignItems: "center", gap: 10, flexShrink: 0 }}>
              <a href="tel:+9779802356302" title="+977-9802356302"
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--primary)", transition: "background .15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#dbeafe")}
                onMouseLeave={e => (e.currentTarget.style.background = "#eff6ff")}
              >
                <Phone size={14} />
              </a>

              <Link href="/book-consultation"
                style={{
                  fontSize: 13, fontWeight: 700, color: "#fff",
                  background: "var(--primary)", padding: "9px 20px",
                  borderRadius: 999, textDecoration: "none", whiteSpace: "nowrap",
                  boxShadow: "0 2px 8px rgba(21,101,192,.3)",
                  transition: "opacity .15s, box-shadow .15s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = ".88"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(21,101,192,.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 8px rgba(21,101,192,.3)"; }}
              >
                Book Free Consultation
              </Link>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "#f3f4f6", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#6b7280", transition: "background .15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#e5e7eb")}
                onMouseLeave={e => (e.currentTarget.style.background = "#f3f4f6")}
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>

            {/* ── Mobile: Hamburger at TOP-RIGHT ── */}
            <button
              className="flex md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                width: 42, height: 42, borderRadius: 10, border: "none",
                background: mobileOpen ? "#eff6ff" : "transparent",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: mobileOpen ? "var(--primary)" : "#374151",
                transition: "background .15s, color .15s",
                flexShrink: 0,
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </nav>
      </header>

      {/* ══════ MOBILE BACKDROP ══════ */}
      {mobileOpen && (
        <div
          className="md:hidden"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9998,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* ══════ MOBILE SLIDE-IN DRAWER (from right) ══════ */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(85vw, 340px)",
          zIndex: 9999,
          background: "#fff",
          boxShadow: "-4px 0 32px rgba(0,0,0,0.14)",
          display: "flex",
          flexDirection: "column",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
        }}
      >
        {/* Drawer Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 16px", height: 64, borderBottom: "1px solid #e8ecf0",
          background: "#fff", flexShrink: 0,
        }}>
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image src="/gurumantra.jpeg" alt="Gurumantra" width={36} height={36} style={{ borderRadius: 8, objectFit: "contain" }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0B1D33", lineHeight: 1.2 }}>Gurumantra</div>
              <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--accent)", lineHeight: 1.2 }}>Education Consultancy</div>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              width: 36, height: 36, borderRadius: 8, border: "none",
              background: "#f3f4f6", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#374151",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Contact strip */}
        <div style={{
          display: "flex", flexDirection: "column", gap: 8,
          padding: "12px 16px", background: "#f9fafb",
          borderBottom: "1px solid #e8ecf0", fontSize: 12, flexShrink: 0,
        }}>
          <a href="tel:+9779802356302" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
            <Phone size={13} /> +977-9802356302
          </a>
          <a href="mailto:info@gurumantra.edu.np" style={{ display: "flex", alignItems: "center", gap: 8, color: "#6b7280", textDecoration: "none" }}>
            <Mail size={13} /> info@gurumantra.edu.np
          </a>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "8px 12px", display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
          {[{ label: "Home", href: "/" }, ...navLinks, { label: "Success Stories", href: "/success-stories" }].map((link) =>
            "children" in link && link.children ? (
              <div key={link.label}>
                <Link href={link.href} onClick={() => setMobileOpen(false)}
                  style={{ display: "flex", alignItems: "center", padding: "11px 14px", fontSize: 15, fontWeight: 700, color: "#1f2937", textDecoration: "none", borderRadius: 10 }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#eff6ff")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {link.label}
                </Link>
                <div style={{ marginLeft: 14, paddingLeft: 12, borderLeft: "2px solid #e5e7eb", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 0", marginBottom: 4 }}>
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                      style={{ padding: "7px 10px", fontSize: 13, color: "#6b7280", textDecoration: "none", borderRadius: 6 }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", padding: "11px 14px", fontSize: 15, fontWeight: 700, color: "#1f2937", textDecoration: "none", borderRadius: 10 }}
                onMouseEnter={e => (e.currentTarget.style.background = "#eff6ff")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Drawer Footer CTAs */}
        <div style={{ padding: "12px 16px 24px", borderTop: "1px solid #e8ecf0", display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
          <Link href="/book-consultation" onClick={() => setMobileOpen(false)}
            style={{
              display: "block", textAlign: "center", padding: "13px",
              background: "var(--primary)", color: "#fff",
              fontWeight: 700, fontSize: 14, borderRadius: 12,
              textDecoration: "none", boxShadow: "0 2px 8px rgba(21,101,192,.3)",
            }}
          >
            Book Free Consultation
          </Link>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 16, color: "#9ca3af" }}>
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", display: "flex" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
                  <Icon />
                </a>
              ))}
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                display: "flex", alignItems: "center", gap: 6, fontSize: 12,
                color: "#6b7280", background: "#f3f4f6", border: "none",
                borderRadius: 8, padding: "7px 12px", cursor: "pointer",
              }}
            >
              {theme === "dark" ? <><Sun size={13}/> Light</> : <><Moon size={13}/> Dark</>}
            </button>
          </div>
        </div>
      </div>


    </>
  );
}
