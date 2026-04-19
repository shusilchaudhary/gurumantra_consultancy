import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  tagline: string;
  features: string[];
  href: string;
}

export function ServiceCard({ icon: Icon, title, tagline, features, href }: ServiceCardProps) {
  return (
    <article
      className="group relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/25"
    >
      {/* ── Top accent bar ── */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full shrink-0 bg-gradient-to-r from-primary via-primary/70 to-primary/30
                   group-hover:from-accent group-hover:via-accent/70 group-hover:to-accent/30 transition-all duration-500"
      />

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-7 gap-0">

        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-5">
          <div
            aria-hidden="true"
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                       bg-[#E3F0FF] group-hover:bg-primary transition-colors duration-300"
          >
            <Icon
              className="w-[22px] h-[22px] text-primary group-hover:text-white transition-colors duration-300"
              strokeWidth={1.75}
            />
          </div>

          <h3 className="text-[1.05rem] font-bold text-foreground leading-snug mt-1">
            {title}
          </h3>
        </div>

        {/* Tagline */}
        <p className="text-[0.8125rem] font-medium text-foreground/75 leading-relaxed
                      border-l-[3px] border-primary/30 pl-3 mb-5">
          {tagline}
        </p>

        {/* Divider */}
        <hr className="border-border mb-5" />

        {/* Feature list */}
        <ul className="flex flex-col gap-[0.6rem] mb-7" role="list">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-3">
              {/* Custom check circle */}
              <span
                aria-hidden="true"
                className="mt-[2px] w-[18px] h-[18px] rounded-full shrink-0 flex items-center justify-center bg-[#E3F0FF]"
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                  <path
                    d="M1.5 4.5l2 2L7.5 2"
                    stroke="var(--primary)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[0.8125rem] text-muted-foreground leading-snug">{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA — pinned to bottom via mt-auto */}
        <div className="mt-auto pt-5 border-t border-border">
          <Link
            href={href}
            aria-label={`Get started with ${title}`}
            className="inline-flex items-center gap-2 px-5 py-[0.6rem] rounded-full
                       text-[0.8125rem] font-semibold text-white bg-primary
                       hover:bg-primary/90 hover:shadow-md active:scale-95
                       transition-all duration-200 focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group/btn"
          >
            Get started
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </article>
  );
}
