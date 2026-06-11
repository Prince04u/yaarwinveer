import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, H2, P, UL } from "@/components/ContentPage";

export const Route = createFileRoute("/content-review-policy")({
  head: () => ({
    meta: [
      { title: "Content Review Policy — YaarWin Guide" },
      { name: "description", content: "How and how often YaarWin Guide reviews, updates and retires published content." },
      { property: "og:title", content: "Content Review Policy" },
      { property: "og:description", content: "Our review cadence, criteria and update flow." },
      { property: "og:url", content: "/content-review-policy" },
    ],
    links: [{ rel: "canonical", href: "/content-review-policy" }],
  }),
  component: () => (
    <ContentPage eyebrow="Standards" title="Content Review Policy" intro="A transparent look at how we keep YaarWin Guide content fresh, accurate and useful.">
      <H2>Review Cadence</H2>
      <UL>
        <li><strong>Gift codes:</strong> daily during peak periods, weekly otherwise.</li>
        <li><strong>Bonus tiers:</strong> weekly cross-check against the live app.</li>
        <li><strong>Tutorials & guides:</strong> 30-day review cycle.</li>
        <li><strong>Policies (this page included):</strong> 90-day review cycle.</li>
      </UL>
      <H2>What Triggers an Out-of-Cycle Update</H2>
      <UL>
        <li>YaarWin announces a feature change</li>
        <li>A reader-reported correction is confirmed</li>
        <li>A new gift code campaign is released</li>
        <li>A safety risk requires immediate notice</li>
      </UL>
      <H2>Retirement</H2>
      <P>Content that no longer matches the live platform is retired or rewritten — never silently deleted. We add a "Last updated" stamp on every page so readers can judge freshness.</P>
      <H2>Quality Bar</H2>
      <P>Every page must be useful to a first-time reader, free of filler, and supported by at least one verifiable on-platform reference.</P>
    </ContentPage>
  ),
});
