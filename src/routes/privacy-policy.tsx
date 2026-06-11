import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, H2, P, UL } from "@/components/ContentPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — YaarWin Guide" },
      { name: "description", content: "What data YaarWin Guide collects, how we use it, and your rights." },
      { property: "og:title", content: "Privacy Policy — YaarWin Guide" },
      { property: "og:description", content: "Our privacy practices, cookies and data rights." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <ContentPage eyebrow="Legal" title="Privacy Policy" intro="A plain-language explanation of what we collect and why.">
      <H2>Information We Collect</H2>
      <UL>
        <li>Analytics data (page views, device type, country) via Google Analytics 4</li>
        <li>Contact form messages you choose to send us</li>
        <li>Cookies for preferences and analytics</li>
      </UL>
      <H2>How We Use It</H2>
      <P>To improve content, fix broken pages, and respond to your messages. We never sell personal data.</P>
      <H2>Third Parties</H2>
      <P>Analytics is processed by Google. Our official Telegram is hosted by Telegram. Outbound links may use their own tracking — please review their privacy notices.</P>
      <H2>Your Rights</H2>
      <P>You may request deletion of any contact-form data you have sent us by emailing <strong>privacy@yaarwinguide.example</strong>.</P>
      <H2>Children</H2>
      <P>This site is not directed at users under 18.</P>
      <H2>Updates</H2>
      <P>We update this policy as needed. Significant changes are noted at the top of the page.</P>
    </ContentPage>
  ),
});
