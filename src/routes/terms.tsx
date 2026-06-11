import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, H2, P, UL } from "@/components/ContentPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — YaarWin Guide" },
      { name: "description", content: "The rules for using YaarWin Guide content, links and community channels." },
      { property: "og:title", content: "Terms & Conditions — YaarWin Guide" },
      { property: "og:description", content: "Usage rules, liability and acceptable use." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <ContentPage eyebrow="Legal" title="Terms & Conditions" intro="By using this website you agree to the terms below.">
      <H2>Acceptable Use</H2>
      <UL>
        <li>Do not copy our content without permission.</li>
        <li>Do not use this site if you are under 18.</li>
        <li>Do not impersonate our editorial team.</li>
      </UL>
      <H2>Disclaimers</H2>
      <P>YaarWin Guide is an independent editorial resource. We are not the YaarWin platform itself. Real-money gaming carries risk; consult our <a href="/responsible-gaming" className="text-brand">Responsible Gaming</a> page before depositing.</P>
      <H2>Limitation of Liability</H2>
      <P>We do not accept liability for losses arising from the use of any third-party platform discussed on this site. All gameplay decisions are yours.</P>
      <H2>Changes</H2>
      <P>These terms may change. Continued use of the site after updates means you accept the revised terms.</P>
      <H2>Governing Law</H2>
      <P>These terms are interpreted under the laws of India. Disputes are subject to the exclusive jurisdiction of competent Indian courts.</P>
    </ContentPage>
  ),
});
