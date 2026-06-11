import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, UL, OL, InfoTable, Note } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";

const faqs = [
  { q: "What games can I play on YaarWin?", a: "WinGo (30s, 1m, 3m, 5m), K3 Lottery, 5D Lottery, Trx Win Go, and several lottery classics. WinGo is the most popular." },
  { q: "Which YaarWin game is easiest for beginners?", a: "WinGo 1 minute is the friendlier starting point — slow enough to think, simple Red/Green/Violet and Big/Small bets, and small minimum stakes." },
  { q: "Are YaarWin games fair?", a: "Trx Win Go uses public TRX block hashes for verifiable randomness. Other games use server-side RNG with audited result history visible inside the app." },
  { q: "What is the smallest bet I can place?", a: "The minimum stake is ₹1 in most WinGo rounds with the X1 multiplier. K3 and 5D minimums are similar, varying by bet pattern." },
  { q: "Can I play multiple games at once?", a: "Yes — you can switch between WinGo, K3 and 5D without losing your wallet balance. Just remember each game uses its own round timer." },
];

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "YaarWin Games — WinGo, K3, 5D & Trx Win Go Complete Guide" },
      { name: "description", content: "Full list of YaarWin games: WinGo 30 second to 5 minute rounds, K3 dice, 5D lottery, Trx Win Go and how each one works." },
      { property: "og:title", content: "YaarWin Games — Complete List & Rules" },
      { property: "og:description", content: "Every YaarWin game explained: timing, bet types, multipliers and beginner tips." },
      { property: "og:url", content: "/games" },
    ],
    links: [{ rel: "canonical", href: "/games" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Game Catalogue"
      title="YaarWin Games — The Complete Lineup"
      intro="From 30-second colour prediction to multi-digit lottery, here is every YaarWin game with its rules, payouts, and beginner pointers."
      faqs={faqs}
    >
      <P>YaarWin packs several game formats into a single mobile lobby. Each game has its own round timing, bet structure, and risk profile. Below is the complete catalogue along with practical advice on which game to start with, what payout multipliers to expect, and how to size your bets to make your bankroll last. We have tested every game type personally and the recommendations here reflect what consistently works for sustainable play, not what makes for an exciting story.</P>

      <H2>1. WinGo (Colour Prediction)</H2>
      <P>WinGo is YaarWin's signature game and the entry point for almost every new player. A countdown timer runs out, the system reveals a number between 0 and 9, and pay-outs are decided by the colour and size of that number. Four round lengths are available — 30 seconds, 1 minute, 3 minutes, and 5 minutes — so you can pick a tempo that matches your patience and decision-making style.</P>

      <Figure src={refImages.wingoHistory} alt="YaarWin WinGo coloured number balls, multiplier selector, Big/Small bar and order history" caption="The WinGo lobby — number balls, multiplier ladder, Big/Small bar and a clear order history panel." />

      <InfoTable
        headers={["Bet Type", "Result Range", "Multiplier (approx.)"]}
        rows={[
          ["Green", "1, 3, 7, 9 (or 5)", "2× (1.5× if 5)"],
          ["Red", "2, 4, 6, 8 (or 0)", "2× (1.5× if 0)"],
          ["Violet", "0 or 5", "4.5×"],
          ["Number 0–9", "Exact number", "9×"],
          ["Big", "5, 6, 7, 8, 9", "2×"],
          ["Small", "0, 1, 2, 3, 4", "2×"],
        ]}
      />
      <P><strong>Beginner tip:</strong> Stick to Big/Small or single-colour bets on the 1-minute round. Avoid chasing losses with X10, X50 or X100 multipliers until you have logged at least 200 rounds and understand the natural variance.</P>
      <H3>Choosing a WinGo round length</H3>
      <UL>
        <li><strong>30 seconds:</strong> Very fast. Best for experienced players who want high session volume. New players burn out quickly here.</li>
        <li><strong>1 minute:</strong> The recommended starting tempo. Enough time to glance at history, choose deliberately, and breathe.</li>
        <li><strong>3 minutes:</strong> Slower, more strategic feel. Pairs well with bigger stakes because you have time to think between rounds.</li>
        <li><strong>5 minutes:</strong> The lowest-pressure option. Many regulars use the 5-minute round for larger bets while filling the gap with social or work tasks.</li>
      </UL>

      <H2>2. K3 Lottery</H2>
      <P>K3 is a three-dice game. You bet on the sum of three dice (3 to 18), on specific triples, on total Big/Small or on odd/even combinations. Rounds are quick and payouts scale with rarity — predicting a triple-six is rare but pays significantly more than a Big/Small bet. K3 suits players who enjoy choosing between many bet types in a single round, because each round offers a fresh menu of patterns. The variance is higher than WinGo, so smaller stakes are recommended.</P>
      <H3>K3 bet families</H3>
      <UL>
        <li><strong>Sum:</strong> Bet on a specific total of the three dice. Mid totals (10, 11) are the most common; extreme totals (3 or 18) are very rare and pay high multipliers.</li>
        <li><strong>Triple:</strong> All three dice show the same number — extremely rare, very high payout.</li>
        <li><strong>Big/Small/Odd/Even:</strong> Coarse-grain bets, similar in spirit to WinGo Big/Small.</li>
        <li><strong>Two same / Three different:</strong> Bets on the dice composition rather than the sum.</li>
      </UL>

      <H2>3. 5D Lottery</H2>
      <P>5D rolls five digits (A, B, C, D, E) plus a sum. You can bet on any individual digit, on the sum being Big/Small or Odd/Even, or on multi-position combinations. 5D suits players who prefer placing many small wagers per round and watching several results land at once. Because each digit is an independent draw, 5D is one of the most statistically transparent games in the lobby — the maths is straightforward and the result panel makes it easy to audit your wins and losses over time.</P>

      <H2>4. Trx Win Go</H2>
      <P>Trx Win Go works exactly like WinGo, but the round result is derived from a TRX blockchain block hash. That makes the outcome publicly verifiable — anyone can take the block hash, apply the documented formula, and confirm the result. Choose this game when you want maximum transparency and are comfortable with the same betting mechanics as classic WinGo.</P>
      <Note>Trx Win Go is the game we recommend for players who are sceptical about RNG fairness. Every round result corresponds to a public block, so there is no way for any party to manipulate the outcome after a bet is locked in.</Note>

      <H2>5. Lottery Classics & Mini Games</H2>
      <P>The lobby also hosts traditional draw-style lotteries with larger prize pools and quick-play mini games for casual sessions. Classic lotteries have scheduled draw times and prize pools that grow with participation — useful when you want a slower, more event-driven experience. Mini games are short, often single-screen wagers designed for filling a couple of minutes between bigger rounds.</P>

      <H2>Game-By-Game Comparison</H2>
      <InfoTable
        headers={["Game", "Round Length", "Variance", "Best For"]}
        rows={[
          ["WinGo 30s", "30 sec", "Medium", "High-volume sessions"],
          ["WinGo 1m", "1 min", "Medium", "Beginners"],
          ["WinGo 3m / 5m", "3–5 min", "Medium", "Larger stakes, slower play"],
          ["K3", "1 min", "High", "Pattern bettors"],
          ["5D", "1 min", "Medium-High", "Multi-bet enthusiasts"],
          ["Trx Win Go", "1 min", "Medium", "Transparency-first players"],
          ["Lottery Classics", "Scheduled", "High", "Big-prize hunters"],
        ]}
      />

      <H2>Choosing Your First Game — A Quick Flow</H2>
      <OL>
        <li>If you have never played any colour-prediction game before → start with <strong>WinGo 1 minute</strong> at X1, Big/Small bets only.</li>
        <li>If you are comfortable with WinGo and want verifiable randomness → switch to <strong>Trx Win Go</strong>.</li>
        <li>If you want more decision-making per round → try <strong>K3</strong> with Sum and Big/Small bets.</li>
        <li>If you enjoy multi-bet rounds and digit-level analysis → try <strong>5D</strong>.</li>
        <li>For event-style play with bigger prize pools → check the <strong>Lottery Classics</strong> schedule.</li>
      </OL>

      <H3>Where to go next</H3>
      <UL>
        <li><Link to="/how-to-play" className="text-brand">How to Play YaarWin</Link> — a full tutorial</li>
        <li><Link to="/yaarwin-bonuses" className="text-brand">Bonuses</Link> — boost your starting bankroll</li>
        <li><Link to="/responsible-gaming" className="text-brand">Responsible Gaming</Link> — set personal limits before you start</li>
      </UL>
    </ContentPage>
  ),
});
