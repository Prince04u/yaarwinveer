import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, UL, OL, Note, InfoTable } from "@/components/ContentPage";

const faqs = [
  { q: "What is the most important responsible-gaming habit?", a: "Setting a deposit limit before you start a session and treating it as the only money in the world for that session. The single decision separates sustainable players from problem players." },
  { q: "How do I take a break from YaarWin?", a: "Use the self-exclusion option in profile settings — 24 hours, 7 days or 30 days. During the period, login is blocked. Funds remain safe in your wallet." },
  { q: "Where can I get help in India?", a: "iCALL helpline (free, confidential): 9152987821. Available in multiple languages." },
];

export const Route = createFileRoute("/responsible-gaming")({
  head: () => ({
    meta: [
      { title: "Responsible Gaming on YaarWin — Limits, Warning Signs & Help" },
      { name: "description", content: "Practical responsible gaming guidance for YaarWin players: set limits, recognise warning signs, use self-exclusion, and where to find help." },
      { property: "og:title", content: "Responsible Gaming — YaarWin" },
      { property: "og:description", content: "Personal limits, warning signs and support resources." },
      { property: "og:url", content: "/responsible-gaming" },
    ],
    links: [{ rel: "canonical", href: "/responsible-gaming" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Player Safety"
      title="Responsible Gaming on YaarWin"
      intro="YaarWin's games are entertainment. They should never feel like an investment or a way out of financial trouble. This page is the playbook for keeping it that way."
      faqs={faqs}
    >
      <Note>If gaming is no longer fun, take a break. Sustained losses chased with bigger stakes is the most reliable warning sign of trouble. There is no shame in stopping — the platform's self-exclusion tools exist precisely for this.</Note>

      <P>The honest truth about colour-prediction games like WinGo is that the house edge is real and the variance is high. Most players lose more than they win in the long run. That is fine when play is treated as entertainment with a budget — the same way you might spend on a movie ticket or a meal out. It becomes dangerous when play is treated as a way to make rent, recover an earlier loss, or escape stress. This page exists to help you stay firmly on the "entertainment" side of that line and to give you the tools to step back if you ever cross it.</P>

      <H2>Set Limits Before You Play — Not During</H2>
      <P>The single decision that separates sustainable players from problem players is deciding limits <em>before</em> opening the app, not after the first round goes against you. Write your limits down. Treat them as non-negotiable.</P>
      <UL>
        <li><strong>Deposit limit:</strong> a fixed weekly or monthly amount you can afford to lose entirely.</li>
        <li><strong>Time limit:</strong> a maximum session length. We suggest 60 minutes.</li>
        <li><strong>Loss limit:</strong> the point at which you log off for the day. 50% of your session bankroll is a common threshold.</li>
        <li><strong>Win goal:</strong> the point at which you also log off for the day. Yes, you should stop when ahead too.</li>
      </UL>

      <H2>Recommended Bankroll Framework</H2>
      <InfoTable
        headers={["Monthly Entertainment Budget", "Per-session Bankroll", "Sessions / Month"]}
        rows={[
          ["₹2,000", "₹500", "4"],
          ["₹4,000", "₹1,000", "4"],
          ["₹8,000", "₹2,000", "4"],
        ]}
      />
      <P>Notice the framework caps you at four sessions per month, not four per week. Spacing is a feature, not a bug — frequent sessions make it harder to retain perspective.</P>

      <H2>Warning Signs</H2>
      <UL>
        <li>Borrowing money to keep playing.</li>
        <li>Lying about how much you play or spend.</li>
        <li>Chasing losses with bigger multipliers.</li>
        <li>Skipping work, sleep or meals to play.</li>
        <li>Feeling anxious when you cannot play.</li>
        <li>Hiding the app on your phone or denying account access to a partner.</li>
        <li>Telling yourself the "next round will recover everything".</li>
      </UL>
      <P>If three or more of these apply, treat the situation seriously. The platform's self-exclusion tools and the helplines listed below are the right first step.</P>

      <H2>Tools That Help</H2>
      <H3>In-app tools</H3>
      <UL>
        <li>Deposit limits — set them in profile settings and the platform enforces them.</li>
        <li>Self-exclusion — 24 hours, 7 days or 30 days. Login is blocked during the window. Funds remain in the wallet.</li>
        <li>Session timers — set a popup to remind you every 30 minutes.</li>
      </UL>
      <H3>Device-level tools</H3>
      <UL>
        <li>Android Digital Wellbeing — set a daily app timer for YaarWin.</li>
        <li>iOS Screen Time — set a limit and require a different person's passcode to extend it.</li>
        <li>Bank-side merchant blocks — many Indian banks let you block specific merchant categories via the app.</li>
      </UL>
      <H3>External tools</H3>
      <UL>
        <li>BlockSite-style apps can block the YaarWin web URL for a period of your choosing.</li>
        <li>UPI apps let you set per-day transfer limits — useful as a hard ceiling.</li>
      </UL>

      <H2>If You Need Support</H2>
      <P>Help is available and it is free. You do not need to identify yourself by name.</P>
      <UL>
        <li><strong>India:</strong> iCALL free counselling helpline — <strong>9152987821</strong>. Available in Hindi, English, Marathi and other regional languages.</li>
        <li><strong>India:</strong> Vandrevala Foundation 24/7 helpline — <strong>1860-2662-345</strong>.</li>
        <li><strong>International:</strong> <a href="https://www.gamblersanonymous.org/" className="text-brand" target="_blank" rel="noreferrer">Gamblers Anonymous</a> meeting directory.</li>
        <li><strong>Online community:</strong> r/problemgambling on Reddit — anonymous peer support.</li>
      </UL>

      <H2>Talking To Someone You Trust</H2>
      <P>Problem play thrives on secrecy. The single most effective intervention is honestly telling one person you trust — a partner, sibling, parent, or close friend — that play has stopped feeling fun. The conversation is uncomfortable. The relief of having shared it is significant. From there, decisions about budgets, self-exclusion and professional support get easier.</P>

      <H2>Eligibility</H2>
      <P>YaarWin is intended for users aged 18 and over. Do not register or deposit if you are under 18 or if real-money gaming is prohibited in your jurisdiction. The platform's verification checks include age confirmation and breaching them can result in permanent account closure with no withdrawal of remaining funds.</P>

      <H2>Our Editorial Promise</H2>
      <P>YaarWin Guide will never publish content that encourages reckless play, exaggerates win rates, or downplays variance. If you spot any page on this site that does, please flag it via the <Link to="/contact" className="text-brand">contact page</Link>. We treat such reports as priority.</P>

      <H2>A Final Word</H2>
      <P>The vast majority of players who treat YaarWin as entertainment, within a fixed budget, with hard stop-loss and stop-win limits, have a good experience over time. The small minority who do not are the ones we worry about. If anything on this page resonates uncomfortably, that is the page doing its job — please act on it.</P>
    </ContentPage>
  ),
});
