import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, OL, UL, Note, InfoTable } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";

const faqs = [
  { q: "Can a YaarWin gift code be used twice?", a: "No. Each code is one-use per account. Some bulk-distribution codes can be claimed by many different accounts until the campaign cap is hit." },
  { q: "Do YaarWin gift codes expire?", a: "Yes. Most codes are valid for 24-72 hours from release. Festival codes often have longer windows but smaller payouts." },
  { q: "Are stacking multiple codes allowed?", a: "Only one active code at a time can be applied. After a code's bonus is used or settled, you can redeem the next one." },
  { q: "Do gift codes affect my first deposit bonus?", a: "No — the welcome bonus and gift codes sit in different ledgers. You can claim both on the same recharge." },
  { q: "What is the maximum value of a YaarWin gift code?", a: "Codes in the wild range from ₹10 to roughly ₹500 for festival drops. Anything larger advertised online is almost certainly a scam." },
];

export const Route = createFileRoute("/gift-code-guide")({
  head: () => ({
    meta: [
      { title: "YaarWin Gift Code Guide 2026 — Find, Redeem & Avoid Scams" },
      { name: "description", content: "The complete YaarWin gift code guide: where to find genuine codes, how to redeem them, expiry rules, and how to spot scams." },
      { property: "og:title", content: "YaarWin Gift Code Guide 2026" },
      { property: "og:description", content: "Everything about YaarWin gift codes — discovery, redemption, and safety." },
      { property: "og:url", content: "/gift-code-guide" },
    ],
    links: [{ rel: "canonical", href: "/gift-code-guide" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Definitive Guide"
      title="YaarWin Gift Code Guide — Everything You Need"
      intro="A long-form guide covering how YaarWin gift codes actually work, where to find legitimate ones, the four code types, the wagering rules, and the safest way to redeem each one."
      faqs={faqs}
    >
      <P>YaarWin gift codes are not all created equal. There are no-deposit codes, recharge-linked codes, event codes and agent-share codes. Knowing the type tells you whether you can claim it right away, whether you need to recharge first, and how big the wagering requirement attached to it is likely to be. Knowing where each type actually comes from tells you whether the code in your hand is even real. This guide covers all of that.</P>

      <P>If you only remember one thing from this page, remember this — every legitimate YaarWin code can be redeemed inside the app under <em>Profile → Gift Redemption</em>. If a source ever asks you to redeem somewhere else, type your password into a third-party site, or pay a fee to "unlock" a code, it is a scam. There are no exceptions.</P>

      <H2>The Four Types of YaarWin Codes</H2>
      <UL>
        <li><strong>Welcome Codes:</strong> Tied to your very first deposit — biggest payout but only redeemable once.</li>
        <li><strong>Daily Login Codes:</strong> Small ₹5-₹15 codes for active users, refreshed every day.</li>
        <li><strong>Festival Codes:</strong> Released around Diwali, Holi, Republic Day, Independence Day, IPL finals etc. Mid-to-large rewards with a longer window.</li>
        <li><strong>Agent-Share Codes:</strong> Distributed by top agents to their teams; usually capped at a few hundred claims.</li>
      </UL>

      <H3>How they differ in practice</H3>
      <InfoTable
        headers={["Type", "Typical Value", "Wagering", "Source"]}
        rows={[
          ["Welcome", "₹100-₹200", "1×", "Onboarding email or banner"],
          ["Daily Login", "₹5-₹15", "1×", "In-app daily check-in"],
          ["Festival", "₹50-₹500", "3-5×", "Official Telegram + this page"],
          ["Agent-Share", "₹20-₹100", "1-3×", "Your inviting agent"],
        ]}
      />

      <H2>How to Redeem (Detailed)</H2>
      <OL>
        <li>Log in to the YaarWin app.</li>
        <li>Tap your profile icon → <em>Gift Redemption</em> (or <em>Promo Code</em> on older app versions).</li>
        <li>Paste the code without leading or trailing spaces. Use the in-app paste button rather than long-press to avoid invisible characters.</li>
        <li>Tap <em>Redeem</em> — a confirmation popup shows the credited amount and any wagering requirement.</li>
        <li>Open your wallet to confirm the bonus appears under <em>Bonus Balance</em>.</li>
      </OL>

      <Figure src={refImages.congrats} alt="YaarWin reward modal showing congratulations and credited bonus amount" caption="The reward modal that appears immediately after a successful redemption — it shows the bonus value and the round period the code is associated with." />

      <H2>Reading the Fine Print</H2>
      <P>Every code has wagering or unlock conditions. A ₹100 bonus often requires 1× turnover before it converts to withdrawable balance — meaning you have to wager the bonus amount once across any games. Larger codes may need 3-5× turnover. Always read the popup that appears right after redemption; the exact figure is displayed there, not buried in terms of service.</P>

      <H3>What "wagering requirement" actually means</H3>
      <P>If your bonus is ₹100 with a 3× wagering requirement, you need to place ₹300 of total bets (winning or losing) before that ₹100 converts to withdrawable cash. The bets count whether you win or lose — wagering is about turnover, not profit. Until the requirement is met the bonus sits in the bonus wallet, not the main wallet.</P>

      <H2>Spotting Fake Codes</H2>
      <UL>
        <li>Genuine codes are short — usually 6-12 characters, all uppercase letters and digits.</li>
        <li>Sources outside our <Link to="/gift-code" className="text-brand">official list</Link> or @yaarrwin Telegram are unverified.</li>
        <li>No real giveaway asks for your password, OTP or "verification fee".</li>
        <li>If a screenshot shows a code in a chat with no expiry information, it is most likely already used.</li>
        <li>"₹10,000 working code" YouTube thumbnails are clickbait. Real codes max out in the hundreds.</li>
      </UL>

      <H2>The Common Scam Patterns</H2>
      <H3>Scam 1 — The "verify your account" link</H3>
      <P>A fake site shows a code but says "log in below to claim". The login form harvests your YaarWin credentials. The real platform never works this way — codes are redeemed inside the app, not on third-party sites.</P>
      <H3>Scam 2 — The Telegram "support" DM</H3>
      <P>Someone messages claiming to be YaarWin support with a "VIP code" if you pay a one-time activation fee via UPI. Block immediately.</P>
      <H3>Scam 3 — The fake APK with "unlimited codes"</H3>
      <P>A modded APK is offered with a built-in "code generator". The APK is a credential stealer. Use only the official <Link to="/download-app" className="text-brand">APK download guide</Link>.</P>
      <H3>Scam 4 — Cloned websites</H3>
      <P>A look-alike site harvests passwords. Always check the URL in the address bar. Bookmark the official login once and never log in from a search result link again.</P>

      <H2>Increase Your Chances of Catching New Codes</H2>
      <OL>
        <li>Enable in-app notifications.</li>
        <li>Join the official Telegram and mute everything except @yaarrwin.</li>
        <li>Check this page during late evenings (most codes drop 8-11 PM IST).</li>
        <li>Follow major festivals — code drops cluster around holidays.</li>
        <li>If you have an inviting agent, join their member group for early agent-share codes.</li>
        <li>Set a phone reminder for daily check-in so you never miss the daily login code.</li>
      </OL>

      <H2>What To Do If a Code Fails</H2>
      <UL>
        <li>Re-type the code manually to rule out invisible characters.</li>
        <li>Confirm the code is still active on this page.</li>
        <li>Check if the code requires a recharge — make the recharge if needed.</li>
        <li>Confirm your account is fully verified (KYC complete).</li>
        <li>If the code is festival-tied, check whether the campaign window has closed.</li>
      </UL>

      <p>Quick links: <Link to="/yaarwin-giftcode-today" className="text-brand">Today's codes</Link> · <Link to="/yaarwin-working-gift-codes-2026" className="text-brand">2026 archive</Link> · <Link to="/yaarwin-bonuses" className="text-brand">Full bonus rules</Link></p>
    </ContentPage>
  ),
});
