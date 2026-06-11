import { createFileRoute, Link } from "@tanstack/react-router";
import { Gift, Smartphone, Shield, Trophy, Zap, Users, BookOpen, CheckCircle2, Sparkles, Award, Coins, TrendingUp } from "lucide-react";
import { CTASection, FAQList, InfoTable, faqSchema } from "@/components/PageShell";
import { LOGIN_URL, REGISTER_URL } from "@/components/SiteHeader";
import logo from "@/assets/yaarwin-logo.asset.json";
import { Figure, refImages } from "@/components/RefImage";

const homeFaqs = [
  { q: "What is YaarWin?", a: "YaarWin is an online colour prediction and lottery-style gaming platform popular in India. It offers WinGo, K3, 5D and other quick-round games with daily bonuses, gift codes and an agent referral programme." },
  { q: "Is YaarWin safe to use?", a: "YaarWin uses HTTPS encryption, secure bank-grade payment gateways and account verification. Always download the app only from the official YaarWin website and never share your password or OTP." },
  { q: "How do I register on YaarWin?", a: "Visit the official YaarWin registration page, enter your phone number, verify with OTP, create a password and optionally apply an invite code to claim the new-user bonus." },
  { q: "Where do I get a YaarWin gift code?", a: "Working YaarWin gift codes are posted on our Gift Code page, the official Telegram channel @yaarrwin and through agent referrals. Redeem them inside the app under Gift Redemption." },
  { q: "How much bonus can I earn on first deposit?", a: "First-recharge bonuses start at ₹30 for ₹100–299 deposits and go up to ₹200 for ₹1,000–4,999 deposits. Both the member and the referring agent receive the bonus." },
  { q: "Can I withdraw winnings from YaarWin?", a: "Yes. After binding a verified bank account in your YaarWin profile, you can request withdrawals which are processed during standard banking hours." },
  { q: "Does YaarWin have an Android app?", a: "Yes, YaarWin offers an Android APK from the official site. iOS users can play directly via the mobile web version. Always avoid third-party APK mirrors." },
  { q: "What is the YaarWin agent programme?", a: "The agency programme rewards you with a share of your referred members' activity — daily salary based on team size and deposits, plus referral super-jackpots up to ₹3,50,000." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YaarWin — Official Login, Register, Gift Codes & Bonuses 2026" },
      { name: "description", content: "Official YaarWin guide for 2026: step-by-step login, registration, latest working gift codes, deposit bonuses, agent programme and safe APK download." },
      { name: "keywords", content: "yaarwin, yaarwin login, yaarwin register, yaarwin gift code, yaarwin app, yaarwin bonus" },
      { property: "og:title", content: "YaarWin — Login, Register, Gift Codes & Bonuses 2026" },
      { property: "og:description", content: "The complete trusted YaarWin guide: login, signup, working gift codes, bonuses, and responsible play." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs)) }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-white to-surface">
        <div className="container-page py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <Sparkles size={14} /> Updated for 2026 · Trusted Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              The Official <span className="text-brand">YaarWin</span> Guide — Login, Register, Win More.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Everything you need to start with YaarWin: secure registration, working gift codes, deposit bonuses up to ₹200, daily salary system and a safe app download — all explained step by step.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={REGISTER_URL} className="btn-brand btn-brand-hover">Register Free →</a>
              <a href={LOGIN_URL} className="btn-outline">YaarWin Login</a>
              <Link to="/gift-code" className="btn-outline">Get Gift Code</Link>
            </div>
            <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Shield size={14} className="text-brand" /> HTTPS Secure</span>
              <span className="flex items-center gap-1.5"><Users size={14} className="text-brand" /> 1M+ Members</span>
              <span className="flex items-center gap-1.5"><Trophy size={14} className="text-brand" /> Daily Payouts</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-brand/20 blur-3xl rounded-full" />
              <img src={logo.url} alt="YaarWin official platform logo" width={360} height={360} className="relative rounded-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-white">
        <div className="container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "1M+", l: "Active Players" },
            { n: "₹200", l: "Max First Deposit Bonus" },
            { n: "30 sec", l: "Fastest Game Round" },
            { n: "24/7", l: "Customer Support" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-2xl md:text-3xl font-bold text-brand">{s.n}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Platform Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What is YaarWin and why are players switching?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              YaarWin is a fast-paced online colour prediction platform built for Indian players. The platform combines short 30-second to 5-minute prediction rounds with classic K3, 5D and Trx Win Go games, all wrapped inside a clean mobile-first interface. What makes YaarWin stand out is the generous reward structure — you earn from playing, from referring friends and from building an agency team that pays a real daily salary.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This page is your single trusted source. We update gift codes regularly, walk you through login and registration, explain the deposit bonus tiers in plain language and warn you about the common mistakes new members make. Bookmark it. Every number, table and rule on this site is re-verified against the live platform on a weekly cadence, and our editorial team logs every change with a timestamp so you always know how current the information is.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              YaarWin's appeal is simple. Most quick-game platforms either over-promise on bonuses and under-deliver on reliability, or run a tight ship that pays consistently but offers little reward beyond the game itself. YaarWin is one of the few platforms that does both at once — paying real bonuses, running a daily salary for agents, processing withdrawals during banking hours without manual delays, and keeping the game UI itself fast enough for the 30-second rounds to feel fair.
            </p>
          </div>

          <InfoTable
            headers={["Feature", "Details"]}
            rows={[
              ["Platform Name", "YaarWin"],
              ["Game Types", "WinGo, K3, 5D, Trx Win Go, Lottery"],
              ["Min Recharge", "₹100"],
              ["Min Withdrawal", "₹110"],
              ["First Deposit Bonus", "₹30 – ₹200"],
              ["Referral Jackpot", "Up to ₹3,50,000"],
              ["Agency Daily Salary", "Up to ₹50,000 / day"],
              ["App Type", "Android APK (official)"],
              ["Support", "24/7 in-app chat + Telegram"],
            ]}
          />
        </div>
      </section>

      {/* DEPOSIT BONUS FEATURED */}
      <section className="py-14 bg-gradient-to-b from-surface to-white">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Deposit Bonus</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Earn More, Win More — First Recharge Tiers</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Both the member and the referring agent are rewarded on the very first recharge. The size of the bonus is decided by a single first transaction, so make your initial deposit at the size you actually want to claim against — splitting it across smaller payments locks you into the lowest tier permanently.
            </p>
            <InfoTable
              headers={["First Recharge (₹)", "Member Bonus", "Agent Bonus"]}
              rows={[
                ["100 – 299", "₹30", "₹30"],
                ["300 – 499", "₹100", "₹100"],
                ["500 – 999", "₹150", "₹150"],
                ["1,000 – 4,999", "₹200", "₹200"],
              ]}
            />
            <Link to="/yaarwin-bonuses" className="text-brand font-semibold">Full bonus rules →</Link>
          </div>
          <Figure src={refImages.deposit} alt="YaarWin Deposit Bonus tiers with matching member and agent rewards from ₹30 to ₹200" caption="The official Deposit Bonus card from the YaarWin platform." />
        </div>
      </section>

      {/* GAMES OVERVIEW */}
      <section className="py-14 bg-surface">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-bold">Games You Can Play on YaarWin</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Quick rounds, simple rules, transparent results. Pick a game style that matches your pace.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              { t: "WinGo 30s / 1m / 3m / 5m", d: "Predict colour (Red, Green, Violet), number 0–9 or Big/Small. Round ends in seconds.", i: Zap },
              { t: "K3 Lottery", d: "Three-dice prediction game with multiple bet patterns and faster payouts.", i: Trophy },
              { t: "5D Lottery", d: "Five-digit prediction game. Pick any position, sum or pattern.", i: Sparkles },
              { t: "Trx Win Go", d: "Provably fair version of Win Go using TRX blockchain hashes.", i: Shield },
              { t: "Lottery Classics", d: "Traditional lottery rounds with scheduled draws and large prize pools.", i: Gift },
              { t: "Mini Games", d: "Quick-play arcade titles inside the YaarWin lobby.", i: CheckCircle2 },
            ].map((g) => (
              <div key={g.t} className="bg-white p-6 rounded-xl border border-border hover:shadow-md hover:-translate-y-1 transition">
                <g.i className="text-brand mb-3" size={28} />
                <h3 className="font-semibold text-lg">{g.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{g.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/games" className="text-brand font-semibold">See the full game catalogue →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 md:py-20">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-bold">How YaarWin Works — Step by Step</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">From account creation to your first withdrawal — the entire flow takes under thirty minutes if you have your bank details handy.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {[
              { n: "01", t: "Register", d: "Sign up free with your mobile number, OTP and a strong password. Apply an invite code if you have one." },
              { n: "02", t: "Recharge", d: "Add ₹100 or more using UPI, bank transfer or card. Bonus is credited automatically." },
              { n: "03", t: "Play", d: "Pick WinGo, K3 or 5D. Place a small first bet to learn the round timing." },
              { n: "04", t: "Withdraw", d: "Bind your bank account, request withdrawal, get paid during banking hours." },
            ].map((s) => (
              <div key={s.n} className="bg-surface p-6 rounded-xl border border-border">
                <p className="text-3xl font-bold text-brand">{s.n}</p>
                <h3 className="mt-2 font-semibold">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY PROGRAMME */}
      <section className="py-14 bg-gradient-to-b from-white to-surface">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <Figure src={refImages.salary} alt="YaarWin Daily Salary System tier table from 10 to 500 deposit members" caption="The Daily Salary System tiers — recalculated every 24 hours from your team's verified activity." />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Agency Programme</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Build a team, get paid daily</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The YaarWin agency programme rewards you with a real daily salary based on the activity of your referred team — not a one-time referral bonus. Tiers start at ₹600 per day for a 10-member team and climb to ₹50,000 per day for a 500-member team that meets the activity rules.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Award className="text-brand mt-0.5" size={18} /> Daily salary up to ₹50,000</li>
              <li className="flex gap-2"><Coins className="text-brand mt-0.5" size={18} /> Referral super-jackpot up to ₹3,50,000</li>
              <li className="flex gap-2"><TrendingUp className="text-brand mt-0.5" size={18} /> Recalculated every 24 hours</li>
            </ul>
            <Link to="/yaarwin-agency-programme" className="btn-brand btn-brand-hover mt-6">Read the full agency guide</Link>
          </div>
        </div>
      </section>

      {/* REFERRAL JACKPOT */}
      <section className="py-14">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Referral Super Jackpot</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">One-time bonuses up to ₹3,50,000</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Hit specific referral milestones and unlock progressively larger one-time bonuses. These do not reset — once you cross 100 referrals you have unlocked the ₹20,000 reward forever, regardless of later team activity.
            </p>
            <InfoTable
              headers={["Referral Members", "Bonus (₹)"]}
              rows={[
                ["10", "1,500"], ["25", "5,000"], ["50", "8,000"], ["100", "20,000"],
                ["250", "50,000"], ["500", "1,00,000"], ["2,000", "2,00,000"], ["5,000", "3,50,000"],
              ]}
            />
          </div>
          <Figure src={refImages.jackpot} alt="YaarWin Referral Super Jackpot tier table from 10 referrals up to 5000 referrals with rewards up to ₹350000" caption="Referral Super Jackpot ladder — milestones do not reset." />
        </div>
      </section>

      {/* GUIDES GRID */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-bold">Quick Start Guides</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Pick a guide. We have written one for every step of the YaarWin experience.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              { to: "/how-to-play", t: "How to Play YaarWin", d: "Round timing, bet types, payout multipliers and Big/Small basics.", i: BookOpen },
              { to: "/yaarwin-register", t: "Registration Guide", d: "Full step-by-step with screenshots and common signup errors fixed.", i: Users },
              { to: "/yaarwin-login", t: "Login Guide", d: "Login on web and app, password recovery and 2FA tips.", i: Shield },
              { to: "/gift-code-guide", t: "Gift Code Guide", d: "How to find, copy and redeem YaarWin gift codes safely.", i: Gift },
              { to: "/download-app", t: "Download App", d: "Install the official Android APK without warnings or risks.", i: Smartphone },
              { to: "/yaarwin-agency-programme", t: "Agency Programme", d: "Daily salary tiers, jackpot rewards and referral payout rules.", i: Trophy },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="block bg-white p-6 rounded-xl border border-border hover:border-brand hover:shadow-md transition">
                <c.i className="text-brand mb-3" size={28} />
                <h3 className="font-semibold text-lg">{c.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
                <span className="text-sm font-semibold text-brand mt-3 inline-block">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WINGO PREVIEW */}
      <section className="py-14">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <Figure src={refImages.wingoHistory} alt="YaarWin WinGo lobby with coloured number balls, multiplier ladder, Big/Small bar and order history" caption="The WinGo lobby — coloured balls, multiplier ladder, and the order history panel that lets you audit every round." />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">WinGo — the signature game</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Simple rules, transparent results</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The platform's signature game is also its simplest. A countdown timer runs, the system reveals a number 0-9, and pay-outs are decided by colour and size. Four round lengths give you the choice between fast-tempo sessions and slower, more strategic play.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Beginners should stick to the 1-minute round, X1 multiplier and Big/Small bets for the first 200 rounds. Move up only after you have a sense of natural variance.
            </p>
            <Link to="/how-to-play" className="btn-outline mt-5">Read the full tutorial →</Link>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-14 bg-surface">
        <div className="container-page grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Is YaarWin Safe?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              YaarWin operates over HTTPS with bank-grade payment processing. Withdrawals require KYC-level verification of a bank account that matches the registered profile. The platform is intended for users aged 18+ in regions where this format is permitted.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Encrypted login and payment flow","Verified bank-account binding before withdrawal","Anti-abuse rules to block duplicate accounts","24/7 in-app and Telegram support"].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="text-brand mt-0.5" size={18}/> {t}</li>
              ))}
            </ul>
            <Link to="/responsible-gaming" className="btn-outline mt-6">Responsible Play Guidelines</Link>
          </div>
          <div className="bg-white p-6 rounded-xl border border-border">
            <h3 className="font-semibold text-lg">Common Mistakes to Avoid</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Sharing OTP:</strong> Support staff will never ask for your OTP or password.</li>
              <li><strong className="text-foreground">Third-party APKs:</strong> Always download from <Link to="/download-app" className="text-brand">our official guide</Link>.</li>
              <li><strong className="text-foreground">Wrong bank name:</strong> The bank account holder name must match your profile.</li>
              <li><strong className="text-foreground">Multiple accounts:</strong> Same IP, phone or bank = bonus disqualification.</li>
              <li><strong className="text-foreground">Chasing losses:</strong> Switch to bigger multipliers when angry is the fastest path to a wiped balance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WIN PREVIEW */}
      <section className="py-14">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Winning Rounds</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Every round is audited</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every wager you place generates a permanent record — period number, purchase amount, tax, result and pay-out — visible in your account history. Trx Win Go takes it further by deriving every result from a public TRX blockchain block, making the outcome verifiable by anyone.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              That audit trail is what separates YaarWin from anonymous "tap-and-win" platforms. You can always reconstruct exactly what happened in any round, in any session.
            </p>
            <Link to="/games" className="btn-outline mt-5">See all games →</Link>
          </div>
          <Figure src={refImages.congrats} alt="YaarWin Congratulations modal with winning bonus 98,000 confetti" caption="The platform's win modal — round period, result and credited bonus are all logged automatically." />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-muted-foreground">The most common YaarWin questions, answered honestly.</p>
          <FAQList items={homeFaqs} />
          <Link to="/faq" className="text-brand font-semibold">See full FAQ →</Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
