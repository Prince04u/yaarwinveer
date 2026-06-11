import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, H2, P, UL } from "@/components/ContentPage";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: "Editorial Policy — YaarWin Guide" },
      { name: "description", content: "How we research, write, fact-check and update YaarWin content. Our public editorial standards." },
      { property: "og:title", content: "Editorial Policy — YaarWin Guide" },
      { property: "og:description", content: "Our editorial standards and content workflow." },
      { property: "og:url", content: "/editorial-policy" },
    ],
    links: [{ rel: "canonical", href: "/editorial-policy" }],
  }),
  component: () => (
    <ContentPage eyebrow="Standards" title="Editorial Policy" intro="The principles and workflow behind every page on YaarWin Guide.">
      <H2>Our Mission</H2>
      <P>Provide accurate, current and honest information about the YaarWin platform — without sensational claims, without paid placements that compromise accuracy, and with clear safety messaging.</P>
      <H2>Sourcing</H2>
      <UL>
        <li>Official YaarWin announcements and in-app notices</li>
        <li>First-hand testing on the live web and Android app</li>
        <li>Verified Telegram channel @teamrolexraxi</li>
        <li>Community reports cross-verified against the platform</li>
      </UL>
      <H2>Workflow</H2>
      <P>Every article is researched, drafted by a writer, reviewed by an editor for accuracy and clarity, and finally reviewed by a safety editor. We add a "Last updated" date and re-verify content on a 30-day cadence.</P>
      <H2>Corrections</H2>
      <P>Spotted an error? Email <strong>editorial@yaarwinguide.example</strong>. Corrections are typically made within 24 hours and noted at the top of the affected page.</P>
      <H2>Independence</H2>
      <P>We may earn referral commission, but this does not influence which platforms or features we recommend. Risks and downsides are always disclosed.</P>
    </ContentPage>
  ),
});
