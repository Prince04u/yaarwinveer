import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, OL, UL, Note, InfoTable } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";

const faqs = [
  { q: "How much do I need to start playing YaarWin?", a: "The minimum deposit is ₹100. We recommend starting with the smallest unit bets on a 1-minute round to learn timing without losing your bankroll." },
  { q: "What is Big/Small in YaarWin?", a: "If the result number is 0–4 it is Small, if it is 5–9 it is Big. A correct Big or Small prediction pays roughly 2×." },
  { q: "Can I play YaarWin for free?", a: "You can browse the lobby and check round history without depositing, but placing bets requires a real-money balance." },
  { q: "What is the safest strategy for new players?", a: "Stick to 1-minute WinGo, X1 multiplier, Big/Small bets, and never risk more than 2-5% of your balance per round. Skip multipliers entirely for your first week." },
  { q: "How long is a YaarWin round?", a: "WinGo rounds come in four lengths — 30 seconds, 1 minute, 3 minutes and 5 minutes. Longer rounds give more time to read history and place a thoughtful bet." },
];

export const Route = createFileRoute("/how-to-play")({
  head: () => ({
    meta: [
      { title: "How To Play YaarWin — Complete Step-by-Step Tutorial 2026" },
      { name: "description", content: "Learn how to play YaarWin step by step: round timing, bet types, payouts, smart bankroll tips and the mistakes new players should avoid." },
      { property: "og:title", content: "How To Play YaarWin — Beginner's Tutorial" },
      { property: "og:description", content: "From your first deposit to your first winning round — the complete YaarWin tutorial." },
      { property: "og:url", content: "/how-to-play" },
    ],
    links: [{ rel: "canonical", href: "/how-to-play" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Tutorial"
      title="How To Play YaarWin — A Practical, Honest Tutorial"
      intro="A simple walk-through written for first-time YaarWin players. No jargon, no hype — just what actually works in the app."
      faqs={faqs}
    >
      <P>YaarWin looks complex on the first screen — a wall of colours, numbers, multipliers and a countdown clock ticking down. The truth is that the underlying game is one of the simplest formats in online gaming, and once you have played five rounds at the smallest stake you will understand 90% of what is happening. This tutorial walks you through the exact path from creating an account to placing your first informed bet, and then to withdrawing your first real winnings to your bank account.</P>

      <P>The goal here is not to promise you riches. It is to make sure that the time and money you spend on YaarWin is spent intelligently, that you understand the mechanics, that you avoid the common traps that wipe out new players in their first session, and that you know exactly what to do when something on the platform behaves unexpectedly. Read this page once, bookmark it, and refer back to it whenever you are unsure.</P>

      <H2>Step 1 — Create and verify your account</H2>
      <OL>
        <li>Open the YaarWin <Link to="/yaarwin-register" className="text-brand">registration page</Link> from the official link only.</li>
        <li>Enter your mobile number and verify it with the OTP that arrives by SMS within 30 seconds.</li>
        <li>Set a strong password — at least eight characters, mixing letters and numbers, and ideally one symbol.</li>
        <li>Apply an invite code if you received one from an existing player — this unlocks the agent bonus tier and makes your first deposit more valuable.</li>
        <li>Open the profile section immediately and bind your bank account details. Do this on day one, even before you win anything. Doing it later, in the middle of a withdrawal attempt, is the most common reason for a delayed pay-out.</li>
      </OL>
      <P>Keep your phone number and password somewhere safe. YaarWin support can reset a forgotten password only via the registered mobile number, so if you change SIM cards you must update the profile first.</P>

      <H2>Step 2 — Add funds responsibly</H2>
      <P>The minimum deposit is ₹100. Start with the smallest amount you are honestly comfortable losing entirely. UPI is the fastest payment method and credits in under two minutes; bank transfer takes a little longer; cards are supported but occasionally rejected by issuing banks for gaming-related merchants. If a payment fails, do not retry from a different method within the next five minutes — wait and check the wallet first, because duplicate payments are a pain to refund.</P>
      <Note><strong>Rule of thumb:</strong> Treat your deposit as the cost of entertainment, not an investment. If a session does not feel fun, stop playing immediately. The single biggest predictor of a bad outcome on platforms like YaarWin is continued play after the player has stopped enjoying it.</Note>

      <H2>Step 3 — Understand the round you are betting on</H2>
      <P>Each WinGo round shows a large countdown clock. You can place bets only while the timer is above the locked window — usually the last five seconds before the reveal. After the timer hits zero, a number between 0 and 9 is revealed along with its associated colour, and the system pays out winners instantly.</P>

      <Figure src={refImages.wingoHistory} alt="YaarWin WinGo number balls, multiplier row, and order history panel" caption="The WinGo game screen — coloured number balls, multiplier selector, Big/Small bar, and your live order history." />

      <H3>The three core bet families</H3>
      <UL>
        <li><strong>Colour:</strong> Red, Green or Violet. Violet only hits on the numbers 0 or 5 and pays a higher multiplier because of the rarity. Red typically covers even numbers and Green covers odd numbers, with 0 and 5 acting as the Violet split.</li>
        <li><strong>Big/Small:</strong> Big = 5-9, Small = 0-4. This is the closest thing on the platform to a 50/50 wager and the safest bet for new players to learn round timing without losing capital quickly.</li>
        <li><strong>Exact number:</strong> Pick a single digit 0-9 for roughly a 9× payout. High variance — wins are infrequent and a streak of losses can drain a balance faster than colour bets.</li>
      </UL>

      <H2>Step 4 — Use a small, fixed stake</H2>
      <P>Choose the X1 multiplier when you start. Higher multipliers (X5, X10, X20, X50, X100) multiply both wins and losses linearly. The most common case of a wiped balance is a new player who loses three rounds in a row at X1, gets frustrated, and jumps to X50 to "win it back". The maths is unforgiving — X50 means a single losing round destroys what fifty winning rounds at X1 would have built.</P>
      <P>Use the multiplier ladder only after you have logged at least 200 rounds and have a clear sense of how the round results actually play out over time. Even then, move up one rung at a time, never two.</P>

      <H2>Step 5 — Read the round history</H2>
      <P>The "Game history" tab shows the last several round results in chronological order. You will notice runs of Red and Green and occasional Violet results. Past results do not predict future ones — every WinGo round is statistically independent — but reviewing history helps you understand variance and the natural rhythm of the game.</P>

      <Figure src={refImages.wingoWin} alt="Successful Win Go round result showing payout, period number, tax, and status" caption="A typical win record — period number, purchase amount, tax, result, and final pay-out are all logged for your reference." />

      <H2>Smart Bankroll Plan</H2>
      <P>The single decision that separates players who last from players who burn out is bankroll management. Treat it as a hard rulebook, not a suggestion you adjust when you are emotional.</P>
      <UL>
        <li>Decide a daily session budget <em>before</em> you log in. Write it on paper if you have to.</li>
        <li>Bet no more than 2-5% of your bankroll per round.</li>
        <li>Take a 10-minute break after every 10 rounds. Stand up, drink water, look out a window.</li>
        <li>Set a "stop-win" target — log off when you hit it, even if you think the next round is "obvious".</li>
        <li>Set a "stop-loss" of 50% of your session bankroll. If you hit it, the session is done. No exceptions.</li>
      </UL>

      <InfoTable
        headers={["Bankroll", "Per-round Stake", "Stop-loss", "Stop-win Target"]}
        rows={[
          ["₹200", "₹10", "₹100", "₹300"],
          ["₹500", "₹20", "₹250", "₹750"],
          ["₹1,000", "₹40", "₹500", "₹1,500"],
          ["₹2,500", "₹100", "₹1,250", "₹3,500"],
          ["₹5,000", "₹200", "₹2,500", "₹7,000"],
        ]}
      />

      <H2>Common Mistakes to Avoid</H2>
      <UL>
        <li><strong>Doubling stakes after a loss (the Martingale trap).</strong> On paper Martingale "always wins". In practice you hit a long enough losing streak to exhaust your bankroll or hit the platform stake cap, and you lose everything in one chain.</li>
        <li><strong>Switching multipliers mid-session out of frustration.</strong> The X-button is a psychological trap — never touch it when annoyed.</li>
        <li><strong>Playing on poor mobile networks.</strong> Lag can mis-lock a bet or, worse, double-submit one.</li>
        <li><strong>Skipping bank-account binding until withdrawal day.</strong> Bind on day one.</li>
        <li><strong>Sharing OTPs or passwords.</strong> Official support will never ask.</li>
      </UL>

      <H2>Withdrawal — How to Get Paid</H2>
      <P>Bind a bank account in the profile section <em>before</em> you win, not after. The bank account holder name must match the name on the YaarWin profile exactly — even a missing initial will cause the withdrawal to bounce back. Withdrawals are processed during standard banking hours (typically 9 AM to 9 PM) and credit within 30 minutes to a few hours, depending on the bank's payout window. The minimum withdrawal is ₹110.</P>

      <Figure src={refImages.congrats} alt="YaarWin Congratulations modal showing a winning bonus of 98,000 with confetti" caption="The platform's classic Congratulations modal — a winning round displays the result, the bonus credited and the round period." />

      <H2>Final Thoughts</H2>
      <P>YaarWin is built to be fast, fun and rewarding when treated as entertainment. The mechanics are simple, the payout structure is transparent, and the platform's history logs make it one of the easier games for newcomers to learn. The traps are entirely psychological — chasing losses, raising multipliers in anger, betting with rent money. Avoid those and you will get the experience the platform was designed for.</P>
      <P>For deeper coverage, head to our <Link to="/yaarwin-bonuses" className="text-brand">bonuses</Link> guide, the <Link to="/gift-code" className="text-brand">latest gift codes</Link>, and the <Link to="/responsible-gaming" className="text-brand">responsible gaming</Link> page where we cover hard limits, self-exclusion and where to find help if play stops feeling fun.</P>
    </ContentPage>
  ),
});
