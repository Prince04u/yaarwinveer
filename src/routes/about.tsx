import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, UL, OL } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About YaarWin Guide — Who We Are, What We Do, How We Verify" },
      { name: "description", content: "About the YaarWin Guide team: our mission to deliver accurate YaarWin tutorials, gift codes and responsible-gaming content." },
      { property: "og:title", content: "About YaarWin Guide" },
      { property: "og:description", content: "Our mission, editorial team and content standards." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="About"
      title="About YaarWin Guide"
      intro="An independent editorial resource dedicated to clear, honest and current information about the YaarWin platform."
    >
      <P>YaarWin Guide exists because the YaarWin community deserves a single trustworthy source — somewhere players can find clear login instructions, verified gift codes, real bonus rules and balanced safety advice without sifting through clickbait or paid promotions. We are not the YaarWin platform itself; we are an independent editorial site staffed by writers and reviewers who use the platform and document what we learn so other players do not have to repeat our mistakes.</P>

      <P>The Indian quick-game space is noisy. There are hundreds of websites, Telegram channels and YouTube videos competing for player attention, and most of them are either out of date, paid advertorials wearing the costume of independent journalism, or outright scams using the YaarWin name to harvest credentials. We are not any of those. Every page on this site is signed off by at least two editors before publishing, every number we quote is verified against the live platform, and we do not publish gift codes we have not personally tested first.</P>

      <H2>Our Mission</H2>
      <P>To make the YaarWin experience safer, clearer and more rewarding for every player who lands on this site. That means three things in practice — write tutorials a first-time user can follow without asking a follow-up question, verify reward numbers weekly so our tables never lie, and call out risky behaviour plainly rather than pretending it does not exist. When the platform does something well, we say so. When it does something poorly or changes a rule unfavourably, we say that too.</P>

      <H2>What We Cover</H2>
      <UL>
        <li>Step-by-step login and registration tutorials for the web and the Android APK.</li>
        <li>Daily-refreshed working gift codes with status flags and wagering rules.</li>
        <li>Plain-language bonus and agency programme rules with worked examples.</li>
        <li>Official APK download and installation guidance, including the iOS workaround.</li>
        <li>Responsible play guidelines for new and experienced users.</li>
        <li>Honest, beginner-first strategy notes — no "guaranteed win system" nonsense.</li>
        <li>Long-form archives so historical pricing, bonuses and rule changes stay searchable.</li>
      </UL>

      <Figure src={refImages.salary} alt="YaarWin Daily Salary System table showing agency tier structure" caption="One example of the data we keep current — every reward table on the platform is re-verified weekly." />

      <H2>Our Editorial Principles</H2>
      <H3>Verification</H3>
      <P>Every published page is reviewed by at least two editors before going live. Numbers, prices and bonus tiers are cross-checked against the official platform every week. When a rule changes, we update the relevant pages within 24 hours and add a "Last updated" stamp.</P>
      <H3>Honesty about uncertainty</H3>
      <P>When something is unclear — for example, the exact internal RNG formula used for non-Trx rounds — we say so. We do not invent confident answers to fill gaps in our knowledge.</P>
      <H3>No clickbait</H3>
      <P>Article titles describe what the article actually contains. If a page is a tutorial, the title says tutorial. If it is a list of codes, the title says codes. We never use fake countdowns, fake "exclusive" labels or fake "only-5-left" urgency tactics.</P>
      <H3>Reader safety first</H3>
      <P>If a feature or third-party site is risky, we say so clearly. If a strategy is statistically broken (yes, including the Martingale variants), we say that too. Reader trust is worth more than ad revenue.</P>

      <H2>The Team</H2>
      <P>Our small team includes writers experienced in fintech and gaming editorial, a product-savvy reviewer who tests every flow on Android and iOS, and a safety editor who keeps our responsible-gaming content current with industry guidance. We are intentionally small so our standards stay consistent.</P>
      <UL>
        <li><strong>Editor-in-Chief</strong> — owns final sign-off on every page.</li>
        <li><strong>Product Reviewer</strong> — re-tests login, recharge, withdrawal and gift redemption on a rotating schedule.</li>
        <li><strong>Bonus Analyst</strong> — verifies every reward table and gift code weekly.</li>
        <li><strong>Safety Editor</strong> — maintains the responsible-gaming page and updates external helpline information.</li>
        <li><strong>Community Lead</strong> — monitors the @yaarrwin Telegram and player feedback channels.</li>
      </UL>

      <H2>How We Stay Independent</H2>
      <P>We may receive referral compensation when readers register through our links, but this never affects whether we recommend a feature or warn about a risk. Reviews are not for sale. If a YaarWin update introduces a problem — a withdrawal delay, a confusing bonus rule, a buggy app version — we say so plainly on the affected pages.</P>

      <H2>Our Update Cadence</H2>
      <UL>
        <li>Gift codes — checked every morning, expired codes removed by 9 AM IST.</li>
        <li>Bonus tables — re-verified every Monday against the live app.</li>
        <li>Tutorials — re-tested every two weeks for UI changes.</li>
        <li>Policies (privacy, terms, responsible gaming) — reviewed quarterly.</li>
        <li>App download guide — re-tested with each major APK release.</li>
      </UL>

      <H2>What We Do Not Do</H2>
      <UL>
        <li>We do not run player accounts, process payments, or handle withdrawals — only the platform does that.</li>
        <li>We do not sell "winning systems" or "predicted numbers". Anyone who does is a scam.</li>
        <li>We do not publish unverified codes or screenshots from random Telegram groups.</li>
        <li>We do not accept payment for positive reviews.</li>
      </UL>

      <H2>Contact & Community</H2>
      <P>Spot an outdated price, a broken code or a missing instruction? Use our <Link to="/contact" className="text-brand">contact page</Link> or join the official Telegram. We read every message. Constructive corrections are welcomed and credited.</P>

      <H2>Final Note</H2>
      <P>The YaarWin platform is entertainment. It should be enjoyed within personal limits and within the legal framework of your region. Everything on this site exists to make that experience clearer, safer and more rewarding — never to push you to deposit more than you intended or to chase losses. If anything we publish ever feels like it crosses that line, please tell us. We will fix it.</P>
    </ContentPage>
  ),
});
