import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, UL, OL, InfoTable, Note } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";

const faqs = [
  { q: "How is the YaarWin daily salary calculated?", a: "Salary is based on the number of valid deposit members in your team and the total deposit amount they generate. Higher member counts and higher deposit totals unlock higher salary tiers." },
  { q: "What counts as a 'valid' team member?", a: "A real, verified person who recharged at least three times and actively plays. Duplicate, fake or inactive accounts are excluded." },
  { q: "When is the agency salary credited?", a: "Salaries are calculated each day and credited the following day after audit checks." },
  { q: "Can I lose agency status?", a: "Yes — sustained inactivity, low recharge frequency or detected fake accounts in your team will downgrade or freeze your status." },
  { q: "Do I need a minimum recharge to become an agent?", a: "You need to apply for agent status from your profile after registration. There is no hard recharge minimum to apply, but most successful agents have a personal recharge of at least ₹500 to build credibility with referrals." },
];

export const Route = createFileRoute("/yaarwin-agency-programme")({
  head: () => ({
    meta: [
      { title: "YaarWin Agency Programme — Daily Salary & Referral Jackpot 2026" },
      { name: "description", content: "How the YaarWin agency programme pays: daily salary tiers, referral super-jackpot up to ₹3,50,000 and complete eligibility rules." },
      { property: "og:title", content: "YaarWin Agency Programme — Earn Daily" },
      { property: "og:description", content: "Daily salary tiers and referral jackpot details." },
      { property: "og:url", content: "/yaarwin-agency-programme" },
    ],
    links: [{ rel: "canonical", href: "/yaarwin-agency-programme" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Earn With YaarWin"
      title="YaarWin Agency Programme — Daily Salary System"
      intro="Build a team, get paid daily. Here is exactly how YaarWin's agency tiers and referral super-jackpot work — every rule, every threshold and every payout window."
      faqs={faqs}
    >
      <P>The YaarWin agency programme is the most lucrative income channel the platform offers, and it is also the most misunderstood. Most new players assume it is a flat percentage on every referred deposit. It is actually a tiered, recalculated-daily structure that rewards the size and activity of your team rather than a single referral event. Get the structure right and you can build a meaningful side income; get it wrong and you spend months recruiting members who never qualify.</P>

      <P>This page covers everything — the daily salary tiers, the one-time referral super-jackpot, the eligibility rules, the disqualifiers, the application process and the playbook that successful agents follow. Read it once end-to-end before applying for agent status.</P>

      <H2>How the agency programme is structured</H2>
      <P>There are two parallel reward systems for agents. They run independently — you can hit milestones in one without affecting the other.</P>
      <OL>
        <li><strong>Daily Salary System</strong> — a per-day payment based on the count of currently active deposit members in your team and the rolling team deposit total.</li>
        <li><strong>Referral Super Jackpot</strong> — a one-time bonus paid when your cumulative referral count crosses specific milestones.</li>
      </OL>

      <H2>Daily Salary Tiers</H2>
      <P>The salary table below is the official agency tier ladder. Your placement is recalculated every 24 hours based on yesterday's verified activity, so your tier can move up or down day-to-day depending on how active your team is.</P>

      <Figure src={refImages.salary} alt="YaarWin Daily Salary System tier table from 10 deposit members up to 500 deposit members with salaries from ₹600 to ₹50000" caption="The Daily Salary System — recalculated every day from your team's verified deposit and activity numbers." />

      <InfoTable
        headers={["Active Members", "Team Deposit (₹)", "Daily Salary (₹)"]}
        rows={[
          ["10", "5,000", "600"],
          ["25", "10,000", "1,500"],
          ["50", "30,000", "3,500"],
          ["80", "60,000", "6,000"],
          ["100", "80,000", "8,000"],
          ["150", "1,30,000", "13,000"],
          ["200", "2,00,000", "20,000"],
          ["350", "3,50,000", "30,000"],
          ["500", "5,00,000", "50,000"],
        ]}
      />

      <H2>Referral Super Jackpot</H2>
      <P>Separate from the daily salary, the Super Jackpot pays a one-time bonus when your total referred-and-verified member count crosses specific milestones. These milestones do not reset — once you hit 100 referrals you have unlocked the ₹20,000 reward forever, even if some of those members later go inactive.</P>

      <Figure src={refImages.jackpot} alt="YaarWin Referral Super Jackpot table with milestones from 10 referrals to 5000 referrals and bonus amounts from ₹1500 to ₹350000" caption="The Referral Super Jackpot ladder — the larger the milestone, the larger the lump-sum bonus." />

      <InfoTable
        headers={["Referral Members", "Bonus (₹)"]}
        rows={[
          ["10", "1,500"], ["25", "5,000"], ["50", "8,000"], ["100", "20,000"],
          ["250", "50,000"], ["500", "1,00,000"], ["2,000", "2,00,000"], ["5,000", "3,50,000"],
        ]}
      />

      <H2>Eligibility Rules</H2>
      <UL>
        <li>Members must be real and verified.</li>
        <li>Valid bank account required — duplicate or repeated information is not allowed.</li>
        <li>Each member must recharge at least three times and play actively.</li>
        <li>Same IP, same bank, same phone disqualifies the bonus.</li>
        <li>Team top-up frequency must exceed 40% of unique top-ups.</li>
        <li>Total betting amount must exceed 3× of total team deposit.</li>
        <li>Fake or shell members result in frozen accounts and forfeited salary.</li>
      </UL>

      <Note><strong>Why the rules are strict:</strong> The agency programme is the platform's biggest cost centre. Loose rules invite a flood of fake-account farms which would make the model unsustainable. The 3× betting rule, the unique-IP rule and the verified-bank rule together kill almost every common fraud pattern.</Note>

      <H2>How to Become an Agent</H2>
      <OL>
        <li>Register a normal YaarWin account from the official <Link to="/yaarwin-register" className="text-brand">registration page</Link>.</li>
        <li>Complete KYC — bind a bank account that matches your profile name.</li>
        <li>Open the profile section → "Become an Agent" → submit the short application.</li>
        <li>Once approved (usually within 24 hours) you receive a unique invite code and a referral link.</li>
        <li>Share the link via WhatsApp, Telegram, Instagram or the official <a href="https://t.me/yaarrwin" className="text-brand" target="_blank" rel="noreferrer">@yaarrwin</a> community.</li>
        <li>Help your referrals complete their first recharge — the bonus is split between you and the new member.</li>
      </OL>

      <H2>The Agent Playbook</H2>
      <H3>1. Recruit deliberately, not in bulk</H3>
      <P>A team of 50 active members who each recharge regularly will out-earn a team of 500 inactive members every single day. Focus your outreach on people who actually enjoy quick-game play, not random contact lists. The 3× betting requirement guarantees that inactive teams pay nothing.</P>
      <H3>2. Onboard properly</H3>
      <P>Walk every new member through the <Link to="/how-to-play" className="text-brand">how-to-play</Link> guide and the responsible-gaming rules. Members who lose their bankroll on day one churn immediately and never recharge again — bad for them, bad for your salary tier.</P>
      <H3>3. Communicate gift codes promptly</H3>
      <P>Forward verified gift codes from the official Telegram into your own member group. Members who feel they are getting an information edge stick around longer and recharge more.</P>
      <H3>4. Avoid every shortcut</H3>
      <P>Do not buy referral lists, do not create alt accounts, do not split a single recharge across multiple bank accounts. Every one of these is detectable and every one of them ends the same way — frozen accounts and forfeited rewards. The agency programme is a long game.</P>

      <H2>Realistic Earning Examples</H2>
      <InfoTable
        headers={["Team Size", "Avg Member Deposit (₹)", "Tier", "Monthly Salary (₹)"]}
        rows={[
          ["10", "500", "₹600/day", "~18,000"],
          ["50", "600", "₹3,500/day", "~1,05,000"],
          ["100", "800", "₹8,000/day", "~2,40,000"],
          ["200", "1,000", "₹20,000/day", "~6,00,000"],
        ]}
      />
      <P>These figures assume your team's activity meets the eligibility rules every day. In practice you should expect 70-80% of the headline tier monthly, because the lower-activity days drag the average down. Even discounted, the model rewards consistent recruitment and member retention more than any other channel on the platform.</P>

      <H2>Common Failure Modes</H2>
      <UL>
        <li><strong>Recruiting friends who do not enjoy the platform.</strong> They register, recharge once, and never come back. The 3× betting rule disqualifies them and your salary stays at zero.</li>
        <li><strong>Trying to manufacture accounts.</strong> Same IP, same bank or same phone is detected on day one. You lose the entire team, not just the fake accounts.</li>
        <li><strong>Ignoring the member-support side of the role.</strong> Your salary depends on member retention. Treat your team like a small community, not a number.</li>
        <li><strong>Letting team activity lapse.</strong> Salary recalculates daily — a quiet week drops you a tier or two.</li>
      </UL>

      <P>The agency programme rewards patient, honest recruitment more than aggressive scale. Build slowly, treat your team well, follow the rules, and the daily salary tier will climb on its own.</P>
    </ContentPage>
  ),
});
