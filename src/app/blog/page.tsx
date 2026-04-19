import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog — Study Abroad Tips, Visa Updates & Guides for Nepali Students",
  description: "Latest articles on studying abroad from Nepal — visa updates, scholarship guides, IELTS vs PTE comparisons, and destination-specific tips for 2026.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-main max-w-3xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-lg opacity-80">Insights, guides, and updates to help Nepali students navigate their study abroad journey.</p>
        </div>
      </section>

      <section className="container-main py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all">
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors leading-snug">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
