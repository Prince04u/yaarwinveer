import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, UL, OL, InfoTable, Note } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";

const faqs = [
  { q: "Can I claim more than one YaarWin bonus?", a: "Yes — different bonuses (welcome, gift code, daily check-in, referral) stack as long as you only redeem each one once and respect the rules." },
  { q: "What is the wagering requirement on YaarWin bonuses?", a: "Most welcome bonuses unlock after 1× turnover. Larger campaign bonuses can require 3× to 5× turnover. The exact figure is shown when the bonus is credited." },
  { q: "Can I withdraw bonus money directly?", a: "No. Bonus balance converts to withdrawable balance only after the wagering requirement is met." },
  { q: "When does the first deposit bonus credit?", a: "Instantly — usually within 60 seconds of the recharge completing. If it has not arrived after 10 minutes, contact in-app support with your transaction ID." },
  { q: "Are bonuses available on all payment methods?", a: "Yes, but UPI is the fastest. Card payments are sometimes held for additional verification before bonus credit." },
];

export const Route = createFileRoute("/yaarwin-bonuses")({
  head: () => ({
    meta: [
      { title: "YaarWin Bonuses 2026 — Welcome, Daily, Gift Code & Referral" },
      { name: "description", content: "Every YaarWin bonus explained: first-deposit tiers up to ₹200, daily check-in, gift code rewards, referral jackpot and wagering rules." },
      { property: "og:title", content: "YaarWin Bonuses 2026" },
      { property: "og:description", content: "Full bonus structure, eligibility and wagering rules." },
      { property: "og:url", content: "/yaarwin-bonuses" },
    ],
    links: [{ rel: "canonical", href: "/yaarwin-bonuses" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Rewards"
      title="YaarWin Bonuses — The Complete 2026 Playbook"
      intro="Welcome tiers, daily rewards, gift codes, and the agency super-jackpot — every YaarWin bonus explained with its rules, wagering requirements and claim path."
      faqs={faqs}
    >
      <P>YaarWin runs one of the more generous bonus structures in the Indian quick-game category. There are five active reward types that any member can unlock — first-deposit bonus, daily check-in, gift code bonus, referral bonus and the agency daily salary. Each has its own rules, its own wagering requirement and its own claim path. This page is the single source of truth for how each one works, what you have to do to qualify, and where players most often get tripped up.</P>

      <P>Before we dive into the tables, one principle to keep in mind. Bonus money on any gaming platform is not the same as deposit money. It exists in a separate ledger inside your wallet and only converts to withdrawable balance after you have wagered the bonus a certain number of times. That number is called the wagering requirement, and on YaarWin it is typically 1× for the welcome bonus and 3-5× for larger campaign promotions. We flag the exact requirement next to every bonus on this page.</P>

      <H2>1. First Deposit Bonus</H2>
      <P>The first deposit bonus is your headline reward as a new player. It scales with the size of your first recharge, and crucially, both the member and the referring agent are credited at the same rate — so the player who invited you also benefits, which is why agents are so motivated to help new members complete a deposit.</P>

      <Figure src={refImages.deposit} alt="YaarWin Deposit Bonus table — first recharge tiers from ₹100 to ₹4999 with matching member and agent bonus values" caption="The official YaarWin Deposit Bonus tier card — both the member and the agent earn at the same rate." />

      <InfoTable
        headers={["First Recharge (₹)", "Member Bonus (₹)", "Agent Bonus (₹)"]}
        rows={[["100 – 299", "30", "30"], ["300 – 499", "100", "100"], ["500 – 999", "150", "150"], ["1,000 – 4,999", "200", "200"]]}
      />

      <H3>How to claim it</H3>
      <OL>
        <li>Complete <Link to="/yaarwin-register" className="text-brand">registration</Link> and verify your mobile via OTP.</li>
        <li>Bind a bank account in the profile section. This is non-negotiable for the bonus to be valid.</li>
        <li>Make a single recharge in the ₹100-₹4,999 range. The tier you land in is decided by that single first transaction — splitting deposits does not stack the bonus.</li>
        <li>The bonus credits to your wallet within 60 seconds.</li>
      </OL>

      <H2>2. Daily Check-in Bonus</H2>
      <P>Logging in daily adds a small bonus to your wallet. The base reward is between ₹5 and ₹15, and a continuous 7-day streak unlocks a meaningfully larger reward at the end of the week. Missing a day resets the streak, so set a reminder if you want to maximise this one.</P>
      <Note>The daily bonus is one of the most under-claimed rewards on the platform. It takes 10 seconds and over a month delivers a non-trivial bankroll boost — especially when paired with active gift codes.</Note>

      <H2>3. Gift Code Bonuses</H2>
      <P>Gift codes are short alphanumeric strings that, when redeemed inside the app, credit free bonus balance to your wallet. Some codes are no-deposit codes (small, instant) and some are recharge-tied (larger, conditional on a qualifying recharge of a specific size). See <Link to="/gift-code" className="text-brand">today's gift codes</Link> and the <Link to="/gift-code-guide" className="text-brand">full redemption guide</Link>.</P>
      <UL>
        <li>No-deposit codes — typically ₹10 to ₹30, available daily.</li>
        <li>Recharge-tied codes — ₹50 to ₹200+, conditional on a ₹300-₹1,000 recharge.</li>
        <li>Festival codes — released around Diwali, Republic Day, IPL finals and similar events; usually the largest rewards.</li>
      </UL>

      <H2>4. Referral Bonus</H2>
      <P>Every friend who registers with your invite code and makes a qualifying recharge earns you a one-time bonus. Sustained team building unlocks the <Link to="/yaarwin-agency-programme" className="text-brand">Agency Programme</Link> with daily salary and super-jackpot rewards that go well beyond casual referrals.</P>

      <Figure src={refImages.jackpot} alt="YaarWin Referral Super Jackpot table from 10 referrals to 5000 referrals with rewards up to 350000" caption="The Referral Super Jackpot ladder — milestones from 10 to 5,000 referrals unlock progressively larger one-time rewards." />

      <H2>5. Agency Daily Salary</H2>
      <P>The agency programme pays a daily salary based on the number of active members and the total deposit volume in your team. This is the most lucrative bonus on the platform and is detailed in full on the <Link to="/yaarwin-agency-programme" className="text-brand">Agency Programme</Link> page. The headline numbers — a 100-member, ₹80,000-deposit team pays ₹8,000 per day — should give you a sense of what is possible at scale.</P>

      <Figure src={refImages.salary} alt="YaarWin Daily Salary System table with deposit member tiers from 10 to 500 and matching daily salary up to ₹50,000" caption="The Daily Salary System — your agency tier is recalculated daily based on yesterday's verified team activity." />

      <H2>Bonus Terms (Read Before Claiming)</H2>
      <UL>
        <li>Members must bind a verified bank card before any bonus becomes withdrawable.</li>
        <li>One person, one account — duplicates void every bonus across all linked accounts.</li>
        <li>Same IP, same bank or same phone are disqualified from claiming multiple new-member bonuses.</li>
        <li>No "brush" or fake-betting allowed. The platform detects collusive betting patterns automatically and flagged accounts forfeit bonus and balance.</li>
        <li>Wagering requirements must be met before withdrawal. Most welcome bonuses are 1×; larger campaign bonuses are 3-5×.</li>
        <li>Bonuses expire if unused. The default expiry window is 14 days unless the campaign page states otherwise.</li>
      </UL>

      <H2>Putting It All Together — A Realistic Bonus Roadmap</H2>
      <OL>
        <li>Day 1 — Register, bind bank, recharge ₹1,000 → claim ₹200 first-deposit bonus.</li>
        <li>Day 1 — Apply that day's no-deposit gift code → add ₹10-30 bonus.</li>
        <li>Days 1-7 — Log in every day for the daily check-in → add ₹35-105 across the week.</li>
        <li>Days 1-30 — Share your invite code with two real friends → unlock the first referral payouts.</li>
        <li>Days 30+ — If your referred team passes 10 active members, apply for the agency programme to unlock daily salary.</li>
      </OL>

      <P>Stacked correctly and played responsibly, the bonus structure can meaningfully cushion early variance and accelerate the path to the agency programme. The most important rule is the boring one — never deposit beyond your entertainment budget to chase a bigger bonus tier.</P>
    </ContentPage>
  ),
});
