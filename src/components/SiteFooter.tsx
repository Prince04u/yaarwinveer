import { Link } from "@tanstack/react-router";
import logo from "@/assets/yaarwin-logo.asset.json";

const cols = [
  {
    title: "Platform",
    links: [
      { to: "/", label: "Home" },
      { to: "/games", label: "Games" },
      { to: "/how-to-play", label: "How To Play" },
      { to: "/download-app", label: "Download App" },
    ],
  },
  {
    title: "Rewards",
    links: [
      { to: "/gift-code", label: "Gift Code" },
      { to: "/gift-code-guide", label: "Gift Code Guide" },
      { to: "/yaarwin-bonuses", label: "Bonuses" },
      { to: "/yaarwin-agency-programme", label: "Agency Programme" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact Us" },
      { to: "/blog", label: "Blog" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Policies",
    links: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/disclaimer", label: "Disclaimer" },
      { to: "/responsible-gaming", label: "Responsible Gaming" },
      { to: "/editorial-policy", label: "Editorial Policy" },
      { to: "/content-review-policy", label: "Content Review Policy" },
      { to: "/sitemap", label: "HTML Sitemap" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-surface border-t border-border mt-16">
      <div className="container-page py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo.url} alt="YaarWin" width={36} height={36} className="rounded-full" />
            <span className="font-display font-bold text-lg">Yaar<span className="text-brand">Win</span></span>
          </Link>
          <p className="text-sm text-muted-foreground">Your trusted guide to the YaarWin platform — login, registration, gift codes, bonuses and responsible play.</p>
          <a href="https://t.me/teamrolexraxi" className="text-sm text-brand font-medium mt-3 inline-block" target="_blank" rel="noreferrer">Join us on Telegram →</a>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-semibold mb-3 text-foreground">{c.title}</h3>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-brand">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} YaarWin Guide. All rights reserved.</p>
          <p>
            Site developed by{" "}
            <a href="https://t.me/veeranjan_solutions" target="_blank" rel="noreferrer" className="text-brand font-medium">
              Veeranjan Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
