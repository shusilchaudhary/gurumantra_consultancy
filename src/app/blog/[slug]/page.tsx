import { blogPosts } from "@/data/content";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

const blogContent: Record<string, string> = {
  "complete-guide-studying-abroad-nepal-2026": `Studying abroad is one of the most transformative decisions a Nepali student can make. With over 55,000 Nepali students heading overseas annually, 2026 brings even more opportunities — and some critical changes you need to know about.

This comprehensive guide covers everything from choosing the right country to landing your first job overseas. Whether you are a +2 graduate, bachelor's holder, or working professional looking for a career change, this guide is for you.

**Choosing Your Destination**: The first step is understanding what matters most to you. If cost is your priority, Germany (tuition-free public universities) and Japan (MEXT scholarships) are hard to beat. For post-study work and PR pathways, Canada and Australia lead the way. For prestige and speed, the UK's 1-year Master's programs are unmatched.

**Budget Planning**: A common mistake is only considering tuition fees. You need to budget for living expenses (accommodation, food, transport), health insurance, visa fees, airfare, and an emergency fund. We recommend having 10–15% more than the minimum financial requirement.

**Timeline**: Start planning 12–18 months before your intended intake. This gives you enough time for test preparation (3–4 months), applications (2–3 months), visa processing (2–4 months), and pre-departure preparation.

**The Gurumantra Advantage**: With 2,000+ successful placements and a 98% visa success rate, our counselors provide personalised guidance at every step — from choosing the right program to landing in your destination city.`,

  "ielts-vs-pte-which-english-test-nepali-students-2026": `One of the most common questions we get at Gurumantra Education Consultancy is: "Should I take IELTS or PTE?" Both are widely accepted, but they have significant differences that can affect your score and, ultimately, your university admission.

**Acceptance**: IELTS is accepted by virtually all universities worldwide. PTE Academic is accepted by 99% of Australian universities, most UK universities, and an increasing number of Canadian and US institutions. For certain specific programs or countries, always verify PTE acceptance first.

**Format**: IELTS offers both paper-based and computer-based options. PTE is entirely computer-based and AI-scored. If you are comfortable with computers and typing, PTE might suit you better. If you prefer face-to-face speaking assessment, IELTS is your choice.

**Speaking Test**: This is the biggest differentiator. IELTS speaking is with a human examiner in a private room — great if you perform well in conversations. PTE speaking is recorded through a microphone — ideal if you get nervous with people but can speak clearly to a computer.

**Results Speed**: PTE results typically arrive in 48 hours. IELTS takes 3–5 days (computer-based) or 13 days (paper-based). If you are on a tight deadline, PTE has a clear advantage.

**Our Recommendation**: At Gurumantra, we evaluate each student's strengths before recommending a test. Students with strong speaking skills often score higher on IELTS. Students comfortable with technology and who need quick results tend to do better on PTE.`,

  "australia-student-visa-changes-2026-nepal": `Australia continues to be the top destination for Nepali students, but the visa landscape has changed significantly since mid-2024. Here is what you need to know for your 2026 application.

**Genuine Student (GS) Requirement**: The previous Genuine Temporary Entrant (GTE) criterion has been replaced by the Genuine Student (GS) requirement. This is a significant shift — the focus is now on whether you are a genuine student. You need to demonstrate genuine intention to study the specific course at the specific institution.

**Increased Financial Requirements**: The minimum financial requirement has been increased to AUD 29,710 per year for living costs (up from AUD 24,505). Combined with tuition, you need to show substantially more funds than before.

**English Test Score Requirements**: Some institutions have increased their minimum English language scores. It is more important than ever to achieve a strong IELTS/PTE score rather than just meeting the bare minimum.

**Student Visa Cap Concerns**: While Australia has not formally capped student visas, processing times have increased and scrutiny is higher. A well-prepared, complete application is critical.

**How Gurumantra Helps**: Our experienced counselors stay updated on every policy change. We help you craft a compelling GS statement, structure your finances correctly, and prepare a complete application that meets the latest requirements.`,
};

const CATEGORY_COLORS: Record<string, string> = {
  "Guide": "#1565C0", "Test Prep": "#7B1FA2", "Visa Updates": "#2E7D32",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const raw = blogContent[slug] ?? "";
  const paragraphs = raw.split("\n\n").filter(Boolean);
  const catColor = CATEGORY_COLORS[post.category] ?? "#1565C0";

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{
        background: "var(--primary)", color: "#fff",
        paddingTop: "4rem", paddingBottom: "4rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "24rem", height: "24rem", borderRadius: "50%", background: "var(--accent)", opacity: 0.08, filter: "blur(100px)" }} />
        </div>
        <div className="container-main" style={{ maxWidth: 720, position: "relative", zIndex: 10 }}>
          <Link href="/blog" style={{
            display: "inline-flex", alignItems: "center", gap: "0.375rem",
            fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.72)",
            textDecoration: "none", marginBottom: "1.5rem",
          }}>
            <ArrowLeft style={{ width: 14, height: 14 }} /> Back to Blog
          </Link>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", padding: "0.3rem 0.875rem", borderRadius: 999, color: "#fff", background: catColor }}>
              {post.category}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.68)" }}>
              <Clock style={{ width: 12, height: 12 }} /> {post.readTime}
            </span>
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.68)" }}>{post.date}</span>
          </div>

          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* ══════ ARTICLE ══════ */}
      <div style={{ background: "var(--background)" }}>
        <div className="container-main" style={{ maxWidth: 720, paddingTop: "3rem", paddingBottom: "3rem" }}>

          {/* Lead */}
          <p style={{
            fontSize: "1.05rem", color: "var(--muted-foreground)", lineHeight: 1.8,
            marginBottom: "2rem", paddingBottom: "2rem",
            borderBottom: "1px solid var(--border)", fontWeight: 500,
          }}>
            {post.excerpt}
          </p>

          {/* Body */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.includes("**:")) {
                const colonIdx = para.indexOf("**:");
                const heading = para.slice(2, colonIdx);
                const body = para.slice(colonIdx + 3).trim();
                return (
                  <div key={i}>
                    <h2 style={{
                      fontSize: "1rem", fontWeight: 800, color: "var(--foreground)",
                      marginBottom: "0.5rem",
                      paddingLeft: "0.875rem",
                      borderLeft: `3px solid ${catColor}`,
                    }}>{heading}</h2>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>{body}</p>
                  </div>
                );
              }
              return (
                <p key={i} style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.8 }}>{para}</p>
              );
            })}
          </div>

          {/* In-article CTA */}
          <div style={{ marginTop: "3.5rem", background: "var(--primary)", borderRadius: "1.25rem", padding: "2.5rem", textAlign: "center" }}>
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Free Guidance</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "0.75rem", fontSize: "1.375rem", fontWeight: 900, color: "#fff" }}>Have Questions?</h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              Our expert counselors can help you navigate every step — from test prep to visa approval.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
              <Link href="/book-consultation" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", borderRadius: "0.875rem", background: "#E8A317", color: "#fff", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(232,163,23,0.40)" }}>
                Book Free Consultation <ArrowRight style={{ width: 15, height: 15 }} />
              </Link>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", borderRadius: "0.875rem", border: "1.5px solid rgba(255,255,255,0.28)", color: "#fff", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", background: "rgba(255,255,255,0.08)" }}>
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
