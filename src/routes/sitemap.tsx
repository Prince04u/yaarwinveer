import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/PageShell";

const groups = [
  { title: "Main", links: [
    { to: "/", label: "Home" },
    { to: "/games", label: "Games" },
    { to: "/how-to-play", label: "How To Play" },
    { to: "/yaarwin-login", label: "YaarWin Login" },
    { to: "/yaarwin-register", label: "YaarWin Register" },
    { to: "/gift-code", label: "Gift Code" },
    { to: "/gift-code-guide", label: "Gift Code Guide" },
    { to: "/download-app", label: "Download App" },
  ]},
  { title: "Rewards & Programmes", links: [
    { to: "/yaarwin-bonuses", label: "YaarWin Bonuses" },
    { to: "/yaarwin-agency-programme", label: "Agency Programme" },
    { to: "/yaarwin-giftcode-today", label: "Gift Code Today" },
    { to: "/yaarwin-working-gift-codes-2026", label: "Working Codes 2026" },
  ]},
  { title: "Support", links: [
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
  ]},
  { title: "Policies", links: [
    { to: "/editorial-policy", label: "Editorial Policy" },
    { to: "/content-review-policy", label: "Content Review Policy" },
    { to: "/responsible-gaming", label: "Responsible Gaming" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/disclaimer", label: "Disclaimer" },
  ]},
];

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — YaarWin Guide" },
      { name: "description", content: "Browse every page on YaarWin Guide in one place." },
      { property: "og:title", content: "Sitemap — YaarWin Guide" },
      { property: "og:description", content: "All pages on YaarWin Guide." },
      { property: "og:url", content: "/sitemap" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
  component: () => (
    <>
      <PageHero title="HTML Sitemap" intro="Every page on YaarWin Guide in one organised list." crumbs={[{ label: "Home", to: "/" }, { label: "Sitemap" }]} />
      <div className="container-page py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="font-display font-bold text-lg mb-3 text-foreground">{g.title}</h2>
            <ul className="space-y-2">
              {g.links.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-sm text-muted-foreground hover:text-brand">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <CTASection />
    </>
  ),
});
