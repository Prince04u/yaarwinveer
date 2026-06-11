import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, H2, P, UL } from "@/components/ContentPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact YaarWin Guide — Support, Feedback & Press" },
      { name: "description", content: "Reach the YaarWin Guide editorial team for content corrections, partnership questions, or community support links." },
      { property: "og:title", content: "Contact YaarWin Guide" },
      { property: "og:description", content: "Get in touch with the YaarWin editorial team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Get in Touch"
      title="Contact Us"
      intro="We answer every legitimate question. Pick the right channel below for the fastest response."
    >
      <H2>Editorial Corrections</H2>
      <P>If a number, rule or step on any page looks outdated, email <strong>editorial@yaarwinguide.example</strong> with the page URL and the change you noticed. We aim to verify within 24 hours.</P>

      <H2>Community Channels</H2>
      <UL>
        <li>Official Telegram: <a href="https://t.me/yaarrwin" className="text-brand" target="_blank" rel="noreferrer">@yaarrwin</a></li>
        <li>In-platform help: open the YaarWin app and tap the headset icon (top-right)</li>
      </UL>

      <H2>Press, Partnerships & Advertising</H2>
      <P>Reach us at <strong>partnerships@yaarwinguide.example</strong>. We respond within two business days. We do not accept paid placements that compromise editorial accuracy.</P>

      <H2>Account & Payment Issues</H2>
      <P>YaarWin Guide is an independent editorial site and cannot access your YaarWin account, recover passwords or process payouts. Please use the in-app support for those issues — it is the only secure channel.</P>
    </ContentPage>
  ),
});
