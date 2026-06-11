import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

const faqs = [
  { q: "What is YaarWin?", a: "YaarWin is an online colour-prediction and lottery-style gaming platform popular in India, offering WinGo, K3, 5D and Trx Win Go rounds with bonuses, gift codes and an agent referral programme." },
  { q: "Is YaarWin legal?", a: "Online prediction games operate in a grey legal area in many Indian states. Players are responsible for checking their local rules. The platform is intended for users 18+." },
  { q: "How do I register on YaarWin?", a: "Visit the official registration page, verify your mobile number with OTP, create a password and optionally apply an invite code." },
  { q: "How do I log in to YaarWin?", a: "Use the official login page with your registered mobile number and password. See our YaarWin Login guide for troubleshooting." },
  { q: "What is the minimum deposit on YaarWin?", a: "₹100." },
  { q: "What is the minimum withdrawal on YaarWin?", a: "₹110, after the first qualifying turnover requirement is met." },
  { q: "How long do YaarWin withdrawals take?", a: "Typically 30 minutes to a few hours during banking hours. Larger amounts may require manual review." },
  { q: "Are YaarWin gift codes free?", a: "Yes, the gift codes themselves are free. Some larger codes unlock only after a qualifying recharge." },
  { q: "What is the YaarWin first-deposit bonus?", a: "₹30 for ₹100–299 recharges, scaling to ₹200 for ₹1,000–4,999 recharges. Agent and member both receive the bonus." },
  { q: "Can I have two YaarWin accounts?", a: "No. Duplicate accounts sharing IP, phone or bank details are blocked and bonuses are reversed." },
  { q: "Does YaarWin have a referral programme?", a: "Yes — the Agency Programme pays daily salary based on team size and deposits plus referral super-jackpots up to ₹3,50,000." },
  { q: "Where do I download the YaarWin app?", a: "Only from the official YaarWin website. See our Download App guide for safe install steps." },
  { q: "Is YaarWin safe?", a: "It uses HTTPS, encrypted payments and verified bank-account binding before withdrawals. Never share your OTP or password." },
  { q: "What happens if I forget my password?", a: "Use the Forgot Password link, verify your phone with OTP, and set a new password." },
  { q: "How do I contact YaarWin support?", a: "In-app live chat or the official Telegram channel @yaarrwin. Never DM unofficial 'support' accounts." },
  { q: "Can I play YaarWin on iOS?", a: "Yes — through the optimised mobile web version. Add to home screen for an app-like experience." },
  { q: "Are WinGo results random?", a: "Yes. Trx Win Go uses public TRX block hashes for verifiable randomness; other modes use server-side audited RNG." },
  { q: "What is Big and Small?", a: "Big = numbers 5–9, Small = numbers 0–4." },
  { q: "What is the safest YaarWin bet for beginners?", a: "Big/Small or single colour bets on the 1-minute round at X1 multiplier." },
  { q: "Where can I find responsible-gaming tools?", a: "See our Responsible Gaming page for tips on session limits, deposit limits and self-exclusion." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "YaarWin FAQ — Every Question Answered" },
      { name: "description", content: "20+ YaarWin FAQs covering login, registration, bonuses, gift codes, withdrawals, app install and safety." },
      { property: "og:title", content: "YaarWin FAQ" },
      { property: "og:description", content: "Detailed answers to the most-asked YaarWin questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Knowledge Base"
      title="YaarWin FAQ — Every Common Question, Answered"
      intro="Browse the most-asked YaarWin questions, grouped by topic and updated regularly by our editorial team."
      faqs={faqs}
    >
      <p>If your question isn't covered here, message us via the <a href="/contact" className="text-brand">contact page</a> or our official Telegram <a href="https://t.me/yaarrwin" className="text-brand" target="_blank" rel="noreferrer">@yaarrwin</a>.</p>
    </ContentPage>
  ),
});
