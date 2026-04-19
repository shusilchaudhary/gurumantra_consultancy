"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Moon, Sun, Phone, Mail } from "lucide-react";
import { useTheme } from "next-themes";

/* ── Social SVG icons (lucide removed brand icons) ── */
const FbIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IgIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const YtIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>;

const TkIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>;

const SOCIAL_LINKS = [
  { label: "Facebook",  icon: FbIcon, href: "https://www.facebook.com/gurumantraeducational/" },
  { label: "Instagram", icon: IgIcon, href: "#" },
  { label: "YouTube",   icon: YtIcon, href: "#" },
  { label: "TikTok",    icon: TkIcon, href: "https://www.tiktok.com/@guru.mantra3" },
];

const destinations = [
  { name: "Australia",      slug: "australia",  flag: "🇦🇺" },
  { name: "Canada",         slug: "canada",     flag: "🇨🇦" },
  { name: "United Kingdom", slug: "uk",         flag: "🇬🇧" },
  { name: "United States",  slug: "usa",        flag: "🇺🇸" },
  { name: "New Zealand",    slug: "new-zealand",flag: "🇳🇿" },
  { name: "Germany",        slug: "germany",    flag: "🇩🇪" },
  { name: "Japan",          slug: "japan",      flag: "🇯🇵" },
  { name: "Ireland",        slug: "ireland",    flag: "🇮🇪" },
];

const navLinks = [
  { label: "About Us",     href: "/about" },
  { label: "Destinations", href: "/study-destinations",
    children: destinations.map((d) => ({ label: `${d.flag}  ${d.name}`, href: `/study-destinations/${d.slug}` })) },
  { label: "Services",     href: "/services" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Test Prep",    href: "/test-preparation" },
  { label: "Blog",         href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node))
        setOpenDropdown(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 9999, width: "100%" }}>

      {/* ══════ TOP BAR ══════ */}
      <div style={{
        background: "var(--primary)",
        color: "rgba(255,255,255,0.85)",
        fontSize: 12,
        display: "none",
      }} className="md:flex items-center justify-between"
        css-display="flex"
      >
        {/* We use a real div with inline style so it renders correctly */}
      </div>

      {/* Top utility bar — proper implementation */}
      <div className="hidden md:block" style={{ background: "var(--primary)" }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(1rem,5vw,3rem)",
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 12,
          color: "rgba(255,255,255,0.82)",
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
            <span style={{ opacity: 0.65 }}>Mon – Sat &nbsp;9 AM – 6 PM</span>
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
        {/*
          ┌─────────────────────────────────────────────────────────┐
          │  GRID: 1fr  |  auto  |  1fr                             │
          │  [logo]     [nav links centered]        [cta right]     │
          │  Columns NEVER overlap — grid enforces hard boundaries. │
          └─────────────────────────────────────────────────────────┘
        */}
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(1rem,5vw,3rem)",
          height: 72,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}>

          {/* ── Col 1: Logo — justify-self start ── */}
          <div style={{ justifySelf: "start" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/gurumantra.jpeg"
                alt="Gurumantra Education Consultancy"
                width={50}
                height={50}
                style={{ borderRadius: 10, objectFit: "contain" }}
                priority
              />
            </Link>
          </div>

          {/* ── Col 2: Nav links — naturally centered by grid ── */}
          <div
            ref={ddRef}
            className="hidden xl:flex"
            style={{ alignItems: "stretch", height: 72, gap: 0 }}
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
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "0 20px",
                      height: "100%",
                      background: "none",
                      border: "none",
                      borderBottom: openDropdown === link.label ? "2px solid var(--primary)" : "2px solid transparent",
                      fontSize: 14,
                      fontWeight: 500,
                      color: openDropdown === link.label ? "var(--primary)" : "#374151",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
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
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      minWidth: 280,
                      background: "#fff",
                      border: "1px solid #e8ecf0",
                      borderRadius: 12,
                      boxShadow: "0 8px 40px rgba(0,0,0,.12)",
                      zIndex: 9999,
                      overflow: "hidden",
                    }}>
                      <p style={{ padding: "10px 16px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", borderBottom: "1px solid #f3f4f6" }}>
                        Study Destinations
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
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
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 20px",
                    height: "100%",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#374151",
                    textDecoration: "none",
                    borderBottom: "2px solid transparent",
                    whiteSpace: "nowrap",
                    transition: "color .15s, border-color .15s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "var(--primary)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#374151"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent"; }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* ── Col 3: CTA — justify-self end ── */}
          <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: 10 }}>

            {/* Desktop CTA */}
            <div className="hidden xl:flex" style={{ alignItems: "center", gap: 10 }}>
              <a
                href="tel:+9779802356302"
                title="+977-9802356302"
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

              <Link
                href="/book-consultation"
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

            {/* Mobile / tablet hamburger */}
            <div className="flex xl:hidden" style={{ alignItems: "center", gap: 8 }}>
              <Link
                href="/book-consultation"
                style={{
                  fontSize: 12, fontWeight: 700, color: "#fff",
                  background: "var(--primary)", padding: "7px 14px",
                  borderRadius: 999, textDecoration: "none", whiteSpace: "nowrap",
                }}
              >
                Consult
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{
                  width: 38, height: 38, borderRadius: 8, border: "none",
                  background: "transparent", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#374151", transition: "background .15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#f3f4f6")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ══════ MOBILE DRAWER ══════ */}
      {mobileOpen && (
        <div
          className="xl:hidden"
          style={{
            background: "#fff",
            borderBottom: "1px solid #e8ecf0",
            boxShadow: "0 8px 30px rgba(0,0,0,.1)",
            maxHeight: "85vh",
            overflowY: "auto",
          }}
        >
          {/* Contact strip */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "10px 20px", background: "#f9fafb",
            borderBottom: "1px solid #e8ecf0", fontSize: 12,
          }}>
            <a href="tel:+9779802356302" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
              <Phone size={13} /> +977-9802356302
            </a>
            <a href="mailto:info@gurumantra.edu.np" style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b7280", textDecoration: "none" }}>
              <Mail size={13} /> info@gurumantra.edu.np
            </a>
          </div>

          {/* Links */}
          <nav style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 2 }}>
            {[{ label: "Home", href: "/" }, ...navLinks, { label: "Success Stories", href: "/success-stories" }].map((link) =>
              "children" in link && link.children ? (
                <div key={link.label}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "12px 16px", fontSize: 15, fontWeight: 600, color: "#1f2937", textDecoration: "none", borderRadius: 10, transition: "background .1s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#eff6ff")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >{link.label}</Link>
                  <div style={{ marginLeft: 16, paddingLeft: 12, borderLeft: "2px solid #e5e7eb", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 0", marginBottom: 4 }}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                        style={{ padding: "8px 10px", fontSize: 13, color: "#6b7280", textDecoration: "none", borderRadius: 6, transition: "color .1s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                      >{child.label}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "12px 16px", fontSize: 15, fontWeight: 600, color: "#1f2937", textDecoration: "none", borderRadius: 10, transition: "background .1s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#eff6ff")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >{link.label}</Link>
              )
            )}
          </nav>

          {/* Bottom */}
          <div style={{ padding: "12px 16px 20px", borderTop: "1px solid #e8ecf0", display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href="/book-consultation" onClick={() => setMobileOpen(false)}
              style={{
                display: "block", textAlign: "center", padding: "13px",
                background: "var(--primary)", color: "#fff", fontWeight: 700,
                fontSize: 14, borderRadius: 12, textDecoration: "none",
                boxShadow: "0 2px 8px rgba(21,101,192,.3)",
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
      )}
    </header>
  );
}
