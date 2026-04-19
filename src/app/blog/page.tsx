import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
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
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.06]" style={{ filter: "blur(120px)" }} />
        </div>
        <div className="container-main max-w-3xl text-center relative z-10">
          <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Latest Updates</span>
          <h1 className="mt-3 mb-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
            Study Abroad Guides & Insights
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            Visa updates, scholarship tips, test prep guides, and expert advice to help Nepali students navigate every step of the study abroad journey.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="bg-background section-py">
        <div className="container-main">

          <div className="text-center section-header">
            <span className="section-label">Articles</span>
            <h2 className="section-title">Latest from Our Blog</h2>
            <p className="section-desc">Expert-written guides updated regularly to reflect the latest visa rules, intakes, and scholarship opportunities.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {blogPosts.map((post) => {
              const color = CATEGORY_COLORS[post.category] ?? "#1565C0";
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/25 transition-all duration-300"
                >
                  {/* Coloured top bar */}
                  <div className="h-[3px] w-full shrink-0" style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }} />

                  {/* Image area */}
                  <div
                    className="h-44 flex items-center justify-center relative shrink-0"
                    style={{ background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)` }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
                      style={{ background: color }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" aria-hidden="true" /> {post.readTime}
                      </span>
                      <span className="text-muted-foreground/40 text-xs">•</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-base font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[0.8125rem] text-muted-foreground leading-relaxed line-clamp-3 mb-5 flex-1">
                      {post.excerpt}
                    </p>

                    {/* CTA pinned to bottom */}
                    <div className="mt-auto pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-primary group-hover:gap-2.5 transition-all">
                        Read Article <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-muted section-py">
        <div className="container-main">
          <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Free Guidance</span>
            <h2 className="section-title text-white mt-3">Have Questions About Studying Abroad?</h2>
            <p className="text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.78)" }}>
              Our expert counselors can answer every question — from choosing a country to surviving your first week abroad.
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
