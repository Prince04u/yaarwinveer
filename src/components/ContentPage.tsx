import type { ReactNode } from "react";
import { PageHero, Prose, CTASection, FAQList, faqSchema, InfoTable } from "./PageShell";

export interface ContentPageProps {
  title: string;
  intro?: string;
  eyebrow?: string;
  children: ReactNode;
  faqs?: { q: string; a: string }[];
}

export function ContentPage(p: ContentPageProps) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} crumbs={[{ label: "Home", to: "/" }, { label: p.title }]} />
      <Prose>
        {p.children}
        {p.faqs && (
          <>
            <h2 className="text-2xl font-bold mt-10 mb-2">Frequently Asked Questions</h2>
            <FAQList items={p.faqs} />
          </>
        )}
      </Prose>
      <CTASection />
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3 text-foreground">{children}</h2>;
}
export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">{children}</h3>;
}
export function P({ children }: { children: ReactNode }) {
  return <p className="text-base text-muted-foreground leading-relaxed my-3">{children}</p>;
}
export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 my-3 space-y-1.5 text-muted-foreground">{children}</ul>;
}
export function OL({ children }: { children: ReactNode }) {
  return <ol className="list-decimal pl-6 my-3 space-y-1.5 text-muted-foreground">{children}</ol>;
}
export function Note({ children }: { children: ReactNode }) {
  return <div className="my-5 p-4 rounded-lg border-l-4 border-brand bg-surface text-sm">{children}</div>;
}

export { faqSchema, InfoTable };
