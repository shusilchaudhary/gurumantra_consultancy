import type { Metadata } from "next";
import { Star } from "lucide-react";
import { testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Success Stories — Nepali Students Studying Abroad with Gurumantra Education Consultancy",
  description: "Read real success stories from Nepali students who achieved their study abroad dreams with Gurumantra Education Consultancy. Australia, Canada, UK, USA, Germany, Japan placements.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container-main max-w-3xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Success Stories</h1>
          <p className="text-lg opacity-80">Real stories from real Nepali students who transformed their study abroad dreams into reality with Gurumantra Education Consultancy.</p>
        </div>
      </section>

      <section className="container-main py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-xl p-6 flex flex-col">
              <div className="flex gap-1 mb-3">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-border pt-4">
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-accent">{t.destination} — {t.university}</div>
                <div className="text-xs text-muted-foreground">{t.program} • {t.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
