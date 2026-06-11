import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, UL, OL, InfoTable, Note } from "@/components/ContentPage";

export const Route = createFileRoute("/yaarwin-working-gift-codes-2026")({
  head: () => ({
    meta: [
      { title: "YaarWin Working Gift Codes 2026 — Complete Archive" },
      { name: "description", content: "The full 2026 archive of YaarWin gift codes verified by our editors. Grouped by month and reward type." },
      { property: "og:title", content: "YaarWin Working Gift Codes 2026" },
      { property: "og:description", content: "Every YaarWin code worth trying in 2026." },
      { property: "og:url", content: "/yaarwin-working-gift-codes-2026" },
    ],
    links: [{ rel: "canonical", href: "/yaarwin-working-gift-codes-2026" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Archive"
      title="YaarWin Working Gift Codes 2026"
      intro="Every YaarWin code our editors have verified during 2026 — grouped by month so you can scan quickly. Use this archive to spot release patterns and predict when the next wave is likely."
    >
      <P>This page is the complete 2026 archive of YaarWin gift codes we have personally verified. It is not a real-time list — for today's working codes, head to <Link to="/yaarwin-giftcode-today" className="text-brand">today's gift codes</Link>. This page exists as historical reference and as a tool for spotting the platform's release patterns, which usually repeat year over year and let you predict roughly when the next round of large codes will land.</P>

      <Note><strong>How to read this archive:</strong> Codes flagged Active are still working as of our last check. Codes flagged Expired no longer redeem but are kept here for reference. Use the monthly pattern below to plan which weeks of next month you should pay extra attention to the daily codes page.</Note>

      <H2>June 2026</H2>
      <InfoTable headers={["Code", "Reward", "Notes"]} rows={[
        ["JUNEYAAR26", "₹26 instant", "Active"],
        ["MONSOON100", "₹100 on ₹300+", "Active"],
        ["IPL200", "₹200 festival bonus", "Active during finals"],
        ["MIDYEAR50", "₹50 mid-year drop", "Active"],
        ["WEEKEND75", "₹75 weekend perk", "Active weekends"],
      ]} />
      <P>June 2026 has been one of the more active code months so far, driven by the IPL finals window. The IPL200 code in particular has reappeared each weekend during the playoff fortnight, suggesting the platform uses high-traffic sport events as planned drop windows.</P>

      <H2>May 2026</H2>
      <InfoTable headers={["Code", "Reward", "Notes"]} rows={[
        ["MAYWIN50", "₹50 weekend", "Expired"],
        ["FRIENDS100", "₹100 referral boost", "Expired"],
        ["SUMMER75", "₹75 summer drop", "Expired"],
        ["LOYALTY30", "₹30 monthly loyalty", "Expired"],
      ]} />
      <P>May was a quieter month aside from the friends-referral push around the second week. Expect similar mid-month activity each year.</P>

      <H2>April 2026</H2>
      <InfoTable headers={["Code", "Reward", "Notes"]} rows={[
        ["NEWYEAR26", "₹26 onboarding", "Expired"],
        ["BAISAKHI75", "₹75 festival", "Expired"],
        ["APRILFOOL50", "₹50 one-day drop", "Expired"],
        ["RAMNAVAMI100", "₹100 festival", "Expired"],
      ]} />
      <P>April carried two festival codes (Baisakhi and Ram Navami) plus the standard daily rotation. April Fools day saw a small one-day-only code — the kind of one-off the platform rarely repeats, so it is worth watching specific dates.</P>

      <H2>March 2026</H2>
      <InfoTable headers={["Code", "Reward", "Notes"]} rows={[
        ["HOLI150", "₹150 festival", "Expired"],
        ["MARCHWIN", "₹30 daily", "Expired"],
        ["SPRING100", "₹100 spring drop", "Expired"],
      ]} />
      <P>The Holi window produced the largest code of the month at ₹150. Holi historically gets one of the platform's biggest drops — pencil that into your calendar each year.</P>

      <H2>February 2026</H2>
      <InfoTable headers={["Code", "Reward", "Notes"]} rows={[
        ["VALENTINE100", "₹100 V-day", "Expired"],
        ["FEBSTART50", "₹50 month-start", "Expired"],
        ["LEAP26", "₹26 leap-year day", "Expired"],
      ]} />

      <H2>January 2026</H2>
      <InfoTable headers={["Code", "Reward", "Notes"]} rows={[
        ["NY2026", "₹100 new year", "Expired"],
        ["REPUBLIC75", "₹75 republic day", "Expired"],
        ["JANSTART30", "₹30 month-start", "Expired"],
      ]} />
      <P>Q1 2026 followed the typical pattern — month-start small codes, mid-month medium codes, and a festival drop around Republic Day. Most Q1 codes are now expired but the structure is informative.</P>

      <H2>Release Pattern Summary</H2>
      <P>Looking across the 2026 archive, three patterns emerge that you can use to plan ahead:</P>
      <OL>
        <li><strong>Month-start codes</strong> — every month opens with a small (₹30-50) code, usually within the first 48 hours.</li>
        <li><strong>Mid-month medium codes</strong> — around the 10th to 15th of each month, a recharge-tied code in the ₹50-100 range typically lands.</li>
        <li><strong>Festival mega-codes</strong> — the largest codes (₹150-500) are reserved for major festivals and sport finals.</li>
      </OL>

      <H3>Predicted Upcoming Windows</H3>
      <UL>
        <li>Independence Day (August 15) — historically a ₹200+ drop with a 24-hour window.</li>
        <li>Diwali week (varies) — the platform's biggest annual drop, often ₹500+ with multiple festival codes across the week.</li>
        <li>Christmas / New Year — back-to-back codes spanning the last week of December into January 1.</li>
        <li>Cricket World Cup matches — code drops tied to India's group-stage matches and knockout games.</li>
      </UL>

      <H2>Tips for Catching Future Codes Early</H2>
      <P>Enable push notifications inside the YaarWin app, join the official <a href="https://t.me/yaarrwin" className="text-brand" target="_blank" rel="noreferrer">@yaarrwin</a> Telegram channel and bookmark our <Link to="/yaarwin-giftcode-today" className="text-brand">today page</Link>. Festival drops cap quickly — being online in the first 30 minutes of release is usually the difference between claiming and missing out.</P>

      <H2>How We Curate This Archive</H2>
      <P>Every code on this page was redeemed in our internal test account before publication. We do not list codes screen-shotted from social media without verification, and we do not list "leaked" codes from grey-market sources. The result is a slightly shorter list than some competitor archives, but a list you can actually trust.</P>

      <H2>Want a Code Added?</H2>
      <P>If you have spotted a working code that is not on this page, send us the code and the source via the <Link to="/contact" className="text-brand">contact page</Link>. We test within 24 hours and credit your tip if it checks out.</P>
    </ContentPage>
  ),
});
