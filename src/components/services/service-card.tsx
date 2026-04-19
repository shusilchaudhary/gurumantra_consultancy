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
    <article style={{
      display: "flex", flexDirection: "column", height: "100%",
      background: "var(--card)", border: "1px solid var(--border)",
      borderRadius: "1rem", overflow: "hidden",
    }}>
      {/* Top accent bar */}
      <div aria-hidden="true" style={{ height: 3, background: "linear-gradient(90deg, var(--primary), rgba(21,101,192,0.3))", flexShrink: 0 }} />

      {/* Card body */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "1.75rem", gap: 0 }}>

        {/* Icon + Title */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
          <div aria-hidden="true" style={{
            width: 48, height: 48, borderRadius: "0.75rem", flexShrink: 0,
            background: "#E3F0FF", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icon style={{ width: 22, height: 22, color: "var(--primary)" }} strokeWidth={1.75} />
          </div>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--foreground)", lineHeight: 1.4, marginTop: 4 }}>
            {title}
          </h3>
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: "0.8125rem", fontWeight: 500, color: "var(--muted-foreground)", lineHeight: 1.7,
          borderLeft: "3px solid rgba(21,101,192,0.30)", paddingLeft: "0.75rem", marginBottom: "1.25rem",
        }}>
          {tagline}
        </p>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "1.25rem" }} />

        {/* Feature list */}
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem", listStyle: "none", padding: 0 }} role="list">
          {features.map((feat) => (
            <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <span aria-hidden="true" style={{
                marginTop: 2, width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center", background: "#E3F0FF",
              }}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                  <path d="M1.5 4.5l2 2L7.5 2" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span style={{ fontSize: "0.8125rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA pinned to bottom */}
        <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid var(--border)" }}>
          <Link href={href} aria-label={`Get started with ${title}`} style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.6rem 1.25rem", borderRadius: 999,
            fontSize: "0.8125rem", fontWeight: 600, color: "#fff",
            background: "var(--primary)", textDecoration: "none",
          }}>
            Get started
            <ArrowRight style={{ width: 14, height: 14 }} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </article>
  );
}
