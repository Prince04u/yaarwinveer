import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/PageShell";

const posts = [
  { slug: "yaarwin-login-guide-2026", title: "YaarWin Login Guide 2026 — Web & App", category: "Login", excerpt: "Up-to-date YaarWin login instructions for web and mobile, with OTP troubleshooting and security tips.", to: "/yaarwin-login" },
  { slug: "yaarwin-register-step-by-step", title: "YaarWin Register: Step-by-Step Signup", category: "Register", excerpt: "Full registration walk-through including invite code, OTP and post-signup checklist.", to: "/yaarwin-register" },
  { slug: "latest-yaarwin-gift-codes", title: "Latest YaarWin Gift Codes — This Week", category: "Gift Codes", excerpt: "Daily-refreshed list of working YaarWin codes and how to redeem each one.", to: "/yaarwin-giftcode-today" },
  { slug: "yaarwin-working-codes-2026", title: "All Working YaarWin Codes in 2026", category: "Gift Codes", excerpt: "The full archive of 2026 codes, grouped by month and reward type.", to: "/yaarwin-working-gift-codes-2026" },
  { slug: "yaarwin-bonus-rules", title: "YaarWin Bonus Rules Explained", category: "Bonuses", excerpt: "First-deposit bonuses, daily salary tiers and how the agent jackpot is calculated.", to: "/yaarwin-bonuses" },
  { slug: "yaarwin-agency-programme", title: "YaarWin Agency Programme: Earn Daily", category: "Agency", excerpt: "How the daily salary tiers and referral super-jackpots actually work.", to: "/yaarwin-agency-programme" },
  { slug: "download-yaarwin-app-safely", title: "Download YaarWin App Safely", category: "App", excerpt: "Official APK install steps, iOS workaround, and how to spot a fake APK.", to: "/download-app" },
  { slug: "how-to-play-yaarwin", title: "How To Play YaarWin — A Beginner's Tutorial", category: "Strategy", excerpt: "Round timing, bet types, smart bankroll plan and common mistakes.", to: "/how-to-play" },
  { slug: "wingo-color-prediction-tips", title: "WinGo Colour Prediction — Honest Tips", category: "Strategy", excerpt: "Why no system 'beats' WinGo and which staking habits give you the longest sessions.", to: "/how-to-play" },
  { slug: "responsible-gaming-yaarwin", title: "Responsible Gaming on YaarWin", category: "Safety", excerpt: "Personal limits, self-exclusion, and warning signs to watch for.", to: "/responsible-gaming" },
  { slug: "yaarwin-fake-codes-warning", title: "Beware of Fake YaarWin Codes", category: "Safety", excerpt: "How scam sites and Telegram bots trick players with fake gift codes.", to: "/gift-code-guide" },
  { slug: "k3-lottery-rules", title: "K3 Lottery Rules on YaarWin", category: "Games", excerpt: "Bet types, payout structure and odds for the K3 dice game.", to: "/games" },
];

const categories = ["All", "Login", "Register", "Gift Codes", "Bonuses", "Agency", "App", "Strategy", "Safety", "Games"];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "YaarWin Blog — Guides, Updates & Strategy Articles" },
      { name: "description", content: "Latest YaarWin tutorials, gift-code updates, bonus deep-dives and responsible-play articles, refreshed every week." },
      { property: "og:title", content: "YaarWin Blog" },
      { property: "og:description", content: "Tutorials, codes, bonuses and platform updates." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="YaarWin Blog — Guides & Updates"
        intro="Tutorials, gift-code drops, bonus breakdowns and responsible-play articles — written by editors who actually use the platform."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />
      <div className="container-page py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <span key={c} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface border border-border text-foreground hover:bg-brand hover:text-white cursor-pointer transition">{c}</span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.slug} to={p.to} className="block bg-white rounded-xl border border-border hover:shadow-md hover:-translate-y-1 transition overflow-hidden">
              <div className="h-36 bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-display font-bold text-xl px-4 text-center">
                {p.category}
              </div>
              <div className="p-5">
                <p className="text-xs text-brand font-semibold uppercase">{p.category}</p>
                <h2 className="font-display font-bold text-lg mt-2">{p.title}</h2>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{p.excerpt}</p>
                <span className="text-sm font-semibold text-brand mt-3 inline-block">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
