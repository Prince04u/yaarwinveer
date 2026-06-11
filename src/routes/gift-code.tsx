import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, OL, UL, InfoTable, Note } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";

const faqs = [
  { q: "What is a YaarWin gift code?", a: "A gift code is a short alphanumeric string that, when redeemed in the YaarWin app, credits free bonus balance to your account. Codes are time-limited and one-use per account." },
  { q: "How often are new YaarWin gift codes released?", a: "Working codes are usually released on weekends, on festival days and during major platform events. We refresh the list daily during peak periods." },
  { q: "Why did my YaarWin gift code fail?", a: "Most failures are because the code expired, was used by another account already, or your account does not yet meet the recharge requirement attached to the code." },
  { q: "Are gift codes the same as the welcome bonus?", a: "No. Gift codes are separate, smaller rewards that can be claimed alongside the welcome bonus. They do not consume your first-deposit bonus quota." },
  { q: "Can I share a code with friends?", a: "Yes — most codes work for many accounts up to the platform-set cap. Share fast: once the cap is hit, the code stops working for everyone." },
];

export const Route = createFileRoute("/gift-code")({
  head: () => ({
    meta: [
      { title: "YaarWin Gift Code 2026 — Latest Working Codes & Daily Updates" },
      { name: "description", content: "Latest YaarWin gift codes for 2026. Free bonus balance, redemption steps and how to spot fake codes. Updated daily." },
      { property: "og:title", content: "YaarWin Gift Code 2026 — Free Bonus" },
      { property: "og:description", content: "Daily refreshed YaarWin gift codes and step-by-step redemption guide." },
      { property: "og:url", content: "/gift-code" },
    ],
    links: [{ rel: "canonical", href: "/gift-code" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Free Bonus"
      title="YaarWin Gift Code — Latest List & Redemption Guide"
      intro="Working YaarWin gift codes you can try right now, plus the exact steps to redeem them inside the app, and a clear-eyed guide to spotting fake codes."
      faqs={faqs}
    >
      <P>Gift codes are the most popular reward on YaarWin and the single feature that keeps casual players returning daily. They drop bonus balance into your wallet either with no deposit requirement (small codes, instant credit) or after a qualifying recharge (larger codes). The catch is simple — every code has a time window and a hard usage cap. Once the time window closes or the cap is hit, the code stops working for everyone. That is why the list below is updated daily and why we recommend you redeem the moment a fresh code drops.</P>

      <Note><strong>Heads up:</strong> The codes below rotate constantly. If one says expired, try the next. We refresh this table from the official source — never trust codes posted in random WhatsApp groups, paid YouTube videos, or screenshots that ask you to "verify your account" before showing the code.</Note>

      <H2>Today's YaarWin Gift Codes</H2>
      <InfoTable
        headers={["Code", "Reward", "Status"]}
        rows={[
          ["YAARWIN26", "₹26 instant bonus", "Active"],
          ["WELCOME100", "₹100 on first ₹300 recharge", "Active"],
          ["WEEKEND50", "₹50 weekend bonus", "Limited"],
          ["FESTIVAL200", "₹200 on ₹1000 recharge", "Festival window"],
          ["DAILY10", "₹10 daily check-in", "Active"],
          ["LUCKY99", "₹99 free spin credit", "Today"],
          ["MORNING30", "₹30 morning bonus", "Today"],
        ]}
      />

      <Figure src={refImages.deposit} alt="YaarWin Deposit Bonus tiers card showing first-recharge bonus from ₹30 to ₹200" caption="Gift codes stack on top of the first-deposit bonus shown above — both rewards can be claimed in the same transaction." />

      <H2>How To Redeem a YaarWin Gift Code</H2>
      <OL>
        <li>Log into the YaarWin app or web platform with your registered mobile and password.</li>
        <li>Tap your profile icon in the top corner, then choose <em>Gift Redemption</em> from the menu.</li>
        <li>Paste the code exactly as shown — codes are case-sensitive and any trailing space will cause a failure.</li>
        <li>Tap <em>Redeem</em>. The bonus credits to your wallet instantly if the code is still active.</li>
        <li>If the code requires a qualifying recharge, complete that recharge first and the bonus drops into your bonus wallet within 60 seconds.</li>
      </OL>

      <H2>What Each Code Type Actually Does</H2>
      <H3>No-deposit codes</H3>
      <P>These are the small, daily codes — typically ₹10 to ₹30. They credit instantly, have a 1× wagering requirement, and convert to withdrawable balance after one round of betting at the matching stake. They are the easiest path to a small, no-risk bankroll for casual players.</P>
      <H3>Recharge-tied codes</H3>
      <P>These are the larger codes — ₹50 to ₹200+. They unlock only after a specified qualifying recharge (usually ₹300 to ₹1,000) and carry a higher wagering requirement (typically 3× to 5×). They are the best value if you were already planning to make a recharge.</P>
      <H3>Festival and event codes</H3>
      <P>Released around Diwali, Holi, Republic Day, Independence Day, IPL finals, the cricket World Cup and similar major events. These are the largest single-redemption codes the platform releases — sometimes worth several hundred rupees in bonus balance. They sell out fast, often within hours.</P>

      <H2>Where Do Genuine Codes Come From?</H2>
      <UL>
        <li>The official Telegram channel <a href="https://t.me/teamrolexraxi" className="text-brand" target="_blank" rel="noreferrer">@yaarwin</a> — the fastest source for fresh drops.</li>
        <li>The in-app banner notifications during scheduled events.</li>
        <li>This page (refreshed by our editorial team every morning).</li>
        <li>Verified agent shares — agents often receive codes a few minutes ahead of public release.</li>
      </UL>

      <H2>Red Flags — Fake Code Sources</H2>
      <UL>
        <li>Random YouTube comments promising ₹500+ instant codes.</li>
        <li>WhatsApp forwards from unknown numbers.</li>
        <li>Sites asking you to "verify your account" or "log in via this link" before showing a code.</li>
        <li>Codes that ask for your password, PIN or OTP at any point in the redemption flow.</li>
        <li>"Hack" tools claiming unlimited gift code generation. None of these are real; they are credential-stealing front-ends.</li>
      </UL>

      <H2>Maximising Gift Code Value</H2>
      <OL>
        <li>Enable in-app push notifications so fresh code banners trigger an alert.</li>
        <li>Join the official Telegram channel and the agent community for early drops.</li>
        <li>Bookmark this page and refresh it once a day.</li>
        <li>Stack the daily no-deposit code with your check-in bonus and your active recharge bonus — they sit in different ledgers and do not interfere.</li>
        <li>Read the wagering requirement before redeeming a large code, especially festival codes.</li>
      </OL>

      <H2>What Happens If a Code Fails</H2>
      <P>If the redemption screen returns an error, run through this quick checklist:</P>
      <UL>
        <li>Did you paste an extra space at the end? Re-type the code manually.</li>
        <li>Is the code already used on your account? Codes are one-time per account.</li>
        <li>Does the code require a recharge first? Complete the recharge and try again.</li>
        <li>Has the code expired? Check the status column above and try the next active code.</li>
        <li>Is your account in a restricted state (incomplete KYC, unresolved support ticket)? Resolve it from the profile section first.</li>
      </UL>

      <p>Want the deeper how-to? Read our <Link to="/gift-code-guide" className="text-brand">YaarWin Gift Code Guide</Link> and the <Link to="/yaarwin-working-gift-codes-2026" className="text-brand">2026 working codes archive</Link> for a month-by-month history of every code we have verified this year.</p>
    </ContentPage>
  ),
});
