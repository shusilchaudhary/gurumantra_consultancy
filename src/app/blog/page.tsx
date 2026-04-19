import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog — Study Abroad Tips, Visa Updates & Guides for Nepali Students",
  description: "Latest articles on studying abroad from Nepal — visa updates, scholarship guides, IELTS vs PTE comparisons, and destination-specific tips for 2026.",
};

const CATEGORY_COLORS: Record<string, string> = {
  "Guide":        "#1565C0",
  "Test Prep":    "#7B1FA2",
  "Visa Updates": "#2E7D32",
};

export default function BlogPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{
        background: "var(--primary)", color: "#fff",
        paddingTop: "5rem", paddingBottom: "5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: "-5rem", right: "-5rem", width: "32rem", height: "32rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.06, filter: "blur(120px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Latest Updates</span>
          <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Study Abroad Guides &amp; Insights
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)" }}>
            Visa updates, scholarship tips, test prep guides, and expert advice to help Nepali students navigate every step of the study abroad journey.
          </p>
        </div>
      </section>

      {/* ══════ BLOG GRID ══════ */}
      <div style={{ background: "var(--background)" }}>
        <div className="container-main" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>

          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Articles</span>
            <h2 style={{ marginTop: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Latest from Our Blog
            </h2>
            <p style={{ marginTop: "0.75rem", fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: "54ch", marginInline: "auto" }}>
              Expert-written guides updated regularly to reflect the latest visa rules, intakes, and scholarship opportunities.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="blog-grid">
            {blogPosts.map((post) => {
              const color = CATEGORY_COLORS[post.category] ?? "#1565C0";
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <article style={{
                    display: "flex", flexDirection: "column", height: "100%",
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: "1rem", overflow: "hidden",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}>
                    {/* Coloured top bar */}
                    <div style={{ height: 3, background: `linear-gradient(90deg, ${color}, ${color}80)`, flexShrink: 0 }} />

                    {/* Image area */}
                    <div style={{
                      height: 160, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)`,
                    }}>
                      <span style={{
                        fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase",
                        letterSpacing: "0.1em", padding: "0.375rem 0.875rem",
                        borderRadius: 999, color: "#fff", background: color,
                      }}>
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "1.5rem" }}>
                      {/* Meta */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                        <Clock style={{ width: 12, height: 12, color: "var(--muted-foreground)" }} />
                        <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{post.readTime}</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", opacity: 0.4 }}>•</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{post.date}</span>
                      </div>

                      {/* Title */}
                      <h2 style={{
                        fontSize: "0.95rem", fontWeight: 800, color: "var(--foreground)",
                        lineHeight: 1.45, marginBottom: "0.75rem",
                        display: "-webkit-box", WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                      }}>
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p style={{
                        fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.7,
                        flex: 1, marginBottom: "1.25rem",
                        display: "-webkit-box", WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                      }}>
                        {post.excerpt}
                      </p>

                      {/* CTA pinned bottom */}
                      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                        <span style={{ fontSize: "0.82rem", fontWeight: 700, color }}>Read Article</span>
                        <ArrowRight style={{ width: 13, height: 13, color }} />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════ CTA ══════ */}
      <div style={{ background: "var(--muted)", borderTop: "1px solid var(--border)" }}>
        <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{ background: "var(--primary)", borderRadius: "1.25rem", padding: "3rem 2.5rem", textAlign: "center" }}>
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Free Guidance</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              Have Questions About Studying Abroad?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "50ch", marginInline: "auto" }}>
              Our expert counselors can answer every question — from choosing a country to surviving your first week abroad.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.875rem" }}>
              <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", background: "#E8A317", color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(232,163,23,0.45)" }}>
                Book Free Consultation <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link href="/study-destinations" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 2rem", borderRadius: "0.875rem", border: "1.5px solid rgba(255,255,255,0.30)", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
