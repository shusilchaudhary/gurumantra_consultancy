import { blogPosts } from "@/data/content";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

**Budget Planning**: A common mistake is only considering tuition fees. You need to budget for living expenses (accommodation, food, transport), health insurance, visa fees, airfare, and an emergency fund. We recommend having 10-15% more than the minimum financial requirement.

**Timeline**: Start planning 12-18 months before your intended intake. This gives you enough time for test preparation (3-4 months), applications (2-3 months), visa processing (2-4 months), and pre-departure preparation.

**The Gurumantra Education Consultancy Advantage**: With 2,000+ successful placements and a 98% visa success rate, our counselors provide personalised guidance at every step — from choosing the right program to landing in your destination city.`,

  "ielts-vs-pte-which-english-test-nepali-students-2026": `One of the most common questions we get at Gurumantra Education Consultancy is: "Should I take IELTS or PTE?" Both are widely accepted, but they have significant differences that can affect your score and, ultimately, your university admission.

**Acceptance**: IELTS is accepted by virtually all universities worldwide. PTE Academic is accepted by 99% of Australian universities, most UK universities, and an increasing number of Canadian and US institutions. For certain specific programs or countries, always verify PTE acceptance first.

**Format**: IELTS offers both paper-based and computer-based options. PTE is entirely computer-based and AI-scored. If you are comfortable with computers and typing, PTE might suit you better. If you prefer face-to-face speaking assessment, IELTS is your choice.

**Speaking Test**: This is the biggest differentiator. IELTS speaking is with a human examiner in a private room — great if you perform well in conversations. PTE speaking is recorded through a microphone — ideal if you get nervous with people but can speak clearly to a computer.

**Results Speed**: PTE results typically arrive in 48 hours. IELTS takes 3-5 days (computer-based) or 13 days (paper-based). If you are on a tight deadline, PTE has a clear advantage.

**Our Recommendation**: At Gurumantra Education Consultancy, we evaluate each student's strengths before recommending a test. Students with strong speaking skills often score higher on IELTS. Students comfortable with technology and who need quick results tend to do better on PTE.`,

  "australia-student-visa-changes-2026-nepal": `Australia continues to be the top destination for Nepali students, but the visa landscape has changed significantly since mid-2024. Here is what you need to know for your 2026 application.

**Genuine Student (GS) Requirement**: The previous Genuine Temporary Entrant (GTE) criterion has been replaced by the Genuine Student (GS) requirement. This is a significant shift — the focus is now on whether you are a genuine student, not just a genuine temporary entrant. You need to demonstrate genuine intention to study the specific course at the specific institution.

**Increased Financial Requirements**: The minimum financial requirement has been increased to AUD 29,710 per year for living costs (up from AUD 24,505). Combined with tuition, you need to show substantially more funds than before.

**English Test Score Requirements**: Some institutions have increased their minimum English language scores. It is more important than ever to achieve a strong IELTS/PTE score rather than just meeting the bare minimum.

**Student Visa Cap Concerns**: While Australia has not formally capped student visas, processing times have increased and scrutiny is higher. A well-prepared, complete application is critical.

**How Gurumantra Education Consultancy Helps**: Our experienced counselors stay updated on every policy change. We help you craft a compelling GS statement, structure your finances correctly, and prepare a complete application that meets the latest requirements. Our 98% visa success rate in the current environment speaks to our expertise.`
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug] || "";

  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-main max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100 mb-4 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-2 text-sm opacity-70 mb-3">
            <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium text-xs">{post.category}</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold">{post.title}</h1>
        </div>
      </section>

      <article className="container-main max-w-3xl py-12">
        <div className="prose prose-lg max-w-none">
          {content.split("\n\n").map((para, i) => {
            if (para.startsWith("**") && para.includes("**:")) {
              const [bold, rest] = para.split("**:");
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">{bold.replace(/\*\*/g, "")}:</strong>{rest}</p>;
            }
            return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>;
          })}
        </div>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-accent-foreground mb-3">Have Questions?</h2>
          <p className="text-accent-foreground/80 mb-4">Our expert counselors can help you navigate every step.</p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </>
  );
}
