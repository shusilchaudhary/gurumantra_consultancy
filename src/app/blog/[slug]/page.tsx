import { blogPosts } from "@/data/content";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const raw = blogContent[slug] ?? "";
  const paragraphs = raw.split("\n\n").filter(Boolean);

  const CATEGORY_COLORS: Record<string, string> = {
    "Guide": "#1565C0", "Test Prep": "#7B1FA2", "Visa Updates": "#2E7D32",
  };
  const catColor = CATEGORY_COLORS[post.category] ?? "#1565C0";

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary text-white relative overflow-hidden" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent opacity-[0.08]" style={{ filter: "blur(100px)" }} />
        </div>
        <div className="container-main max-w-3xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold mb-6 transition-all hover:gap-2.5"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
              style={{ background: catColor }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
              <Clock className="w-3 h-3" aria-hidden="true" /> {post.readTime}
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="bg-background section-py">
        <div className="container-main max-w-3xl">

          {/* Lead paragraph */}
          <p className="text-base text-muted-foreground leading-relaxed mb-8 pb-8 border-b border-border font-medium">
            {post.excerpt}
          </p>

          {/* Body */}
          <div className="flex flex-col gap-5">
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.includes("**:")) {
                const colonIdx = para.indexOf("**:");
                const heading = para.slice(2, colonIdx);
                const body = para.slice(colonIdx + 3).trim();
                return (
                  <div key={i} className="flex flex-col gap-1.5">
                    <h2 className="text-base font-bold text-foreground">{heading}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                );
              }
              return (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">{para}</p>
              );
            })}
          </div>

          {/* In-article CTA */}
          <div className="mt-14 bg-primary rounded-2xl p-8 lg:p-10 text-center">
            <span className="section-label" style={{ background: "rgba(232,163,23,0.18)", color: "#F5C542" }}>Free Guidance</span>
            <h2 className="text-xl font-extrabold text-white mt-3 mb-3">Have Questions?</h2>
            <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.78)" }}>
              Our expert counselors can help you navigate every step — from test prep to visa approval.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 font-bold rounded-xl text-sm px-7 py-3.5 shadow-lg hover:opacity-90 hover:scale-105 transition-all"
                style={{ background: "#E8A317", color: "#fff" }}
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-semibold rounded-xl text-sm px-7 py-3.5 border-2 text-white hover:bg-white/10 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.30)" }}
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
