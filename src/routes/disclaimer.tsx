import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, H2, P } from "@/components/ContentPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — YaarWin Guide" },
      { name: "description", content: "Important disclaimers about YaarWin Guide content, real-money gaming risk and independence from YaarWin." },
      { property: "og:title", content: "Disclaimer — YaarWin Guide" },
      { property: "og:description", content: "Editorial, financial and affiliate disclaimers." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <ContentPage eyebrow="Legal" title="Disclaimer" intro="Please read these disclaimers before acting on anything you find on this site.">
      <H2>Editorial Independence</H2>
      <P>YaarWin Guide is an independent editorial site and is not owned, operated by, or officially affiliated with the YaarWin platform.</P>
      <H2>No Financial Advice</H2>
      <P>Nothing on this site constitutes financial, legal or tax advice. Real-money gaming carries the risk of loss. Do not deposit money you cannot afford to lose.</P>
      <H2>Affiliate Links</H2>
      <P>Some outbound links may earn us a referral commission. This never alters our editorial recommendations.</P>
      <H2>Accuracy</H2>
      <P>We work hard to keep content current, but features, bonuses and gift codes change frequently. Verify critical details on the official platform before acting.</P>
      <H2>Age</H2>
      <P>You must be 18+ to play real-money games featured on this site. If you are under 18, please leave.</P>
    </ContentPage>
  ),
});
