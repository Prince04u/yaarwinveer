import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { LOGIN_URL, REGISTER_URL } from "./SiteHeader";

interface Crumb { label: string; to?: string }

export function PageHero({ eyebrow, title, intro, crumbs }: { eyebrow?: string; title: string; intro?: string; crumbs?: Crumb[] }) {
  return (
    <section className="bg-gradient-to-b from-surface to-white border-b border-border">
      <div className="container-page py-10 md:py-16">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-4">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c.to ? <Link to={c.to} className="hover:text-brand">{c.label}</Link> : <span>{c.label}</span>}
                {i < crumbs.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">{eyebrow}</p>}
        <h1 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl">{title}</h1>
        {intro && <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl">{intro}</p>}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="container-page py-10 md:py-14">
      <article className="max-w-3xl mx-auto prose-content">
        {children}
      </article>
    </div>
  );
}

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-brand to-brand-dark text-white">
      <div className="container-page py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to get started with YaarWin?</h2>
        <p className="mt-2 opacity-90 max-w-xl mx-auto">Create your free account, claim your welcome bonus and start playing in minutes.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href={REGISTER_URL} className="bg-white text-brand-dark font-semibold px-6 py-3 rounded-md hover:bg-surface transition">Register Now</a>
          <a href={LOGIN_URL} className="border border-white/70 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition">Login</a>
        </div>
      </div>
    </section>
  );
}

export function InfoTable({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead className="bg-surface">
          <tr>
            {headers.map((h) => (<th key={h} className="text-left font-semibold p-3 text-foreground">{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border">
              {r.map((c, j) => (<td key={j} className="p-3 text-muted-foreground">{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3 my-6">
      {items.map((it, i) => (
        <details key={i} className="group rounded-lg border border-border bg-white p-4 open:bg-surface">
          <summary className="cursor-pointer font-semibold text-foreground list-none flex justify-between items-center">
            <span>{it.q}</span>
            <span className="text-brand text-xl group-open:rotate-45 transition">+</span>
          </summary>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path,
    })),
  };
}
