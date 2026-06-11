import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, OL, UL, Note, InfoTable } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";
import { REGISTER_URL } from "@/components/SiteHeader";

const faqs = [
  { q: "Is YaarWin registration free?", a: "Yes. Creating a YaarWin account costs nothing. You only need a mobile number that can receive an OTP and a secure password." },
  { q: "Do I need an invite code to register on YaarWin?", a: "An invite code is optional but recommended. Applying a valid code unlocks an additional welcome bonus when you make your first deposit." },
  { q: "What if I don't receive the YaarWin OTP?", a: "Check signal strength, ensure your inbox isn't full, and confirm the mobile number is typed correctly with the right country code. Wait 60 seconds before requesting another OTP." },
  { q: "Can one person create multiple YaarWin accounts?", a: "No. The platform's anti-abuse system blocks accounts sharing the same IP, bank details or phone number. Bonus eligibility is revoked for duplicate accounts." },
  { q: "Do I need to upload ID documents to register?", a: "Not for basic registration. Document KYC is required only when binding your bank account before the first withdrawal." },
  { q: "How long does YaarWin registration take?", a: "Under two minutes if your mobile receives the OTP on the first request." },
];

export const Route = createFileRoute("/yaarwin-register")({
  head: () => ({
    meta: [
      { title: "YaarWin Register 2026 — Free Sign-Up Guide & Welcome Bonus" },
      { name: "description", content: "How to register on YaarWin step by step: OTP verification, invite code application, secure password tips and the welcome bonus structure." },
      { property: "og:title", content: "YaarWin Register — Free Signup Guide" },
      { property: "og:description", content: "Complete YaarWin registration guide with welcome bonus tips." },
      { property: "og:url", content: "/yaarwin-register" },
    ],
    links: [{ rel: "canonical", href: "/yaarwin-register" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Get Started"
      title="YaarWin Register — Create Your Free Account"
      intro="Open your YaarWin account in under two minutes. This guide covers OTP, invite codes, password best-practice and how to qualify for the maximum welcome bonus."
      faqs={faqs}
    >
      <P>Registration is the gateway to YaarWin's games, bonuses and the agency programme. The process itself is short — under two minutes from start to finish for most users — but the details matter. Getting your registration right on the first attempt means your bank withdrawals will work smoothly later, your welcome bonus will credit correctly, and you will not have to deal with the slow and painful process of disputing a frozen account because of a mismatched detail.</P>
      <P>This guide walks you through every step, every optional field, and every "post-registration" action you should take before placing your first bet. We also cover the most common reasons registrations fail and what to do when each one happens.</P>

      <p><a href={REGISTER_URL} className="btn-brand btn-brand-hover">Open Official Registration Page →</a></p>

      <H2>YaarWin Registration — Step by Step</H2>
      <OL>
        <li>Visit the official registration page using the button above. Bookmark it the first time so you never end up on a phishing clone in future.</li>
        <li>Select country code +91 (India) — or your own country code if outside India.</li>
        <li>Enter your active mobile number. Use a number you will keep for years, not a temporary SIM.</li>
        <li>Tap <em>Send OTP</em>, then enter the 6-digit code within 60 seconds. If it does not arrive in 60 seconds, request again — but never enter the same code twice.</li>
        <li>Set a strong password (8+ characters, letters + numbers, ideally one symbol).</li>
        <li>Optional but recommended: apply an invite code to unlock the agent bonus tier.</li>
        <li>Tick the terms-of-service checkbox and tap <em>Register</em>. You land in the lobby instantly.</li>
      </OL>

      <H2>Why Use an Invite Code?</H2>
      <P>An invite code links your new account to a referring agent. Both you and the agent receive a bonus on your first qualifying recharge. No code = no extra bonus on top of the standard tier. The amount of the agent bonus depends on your first recharge tier (₹30 for ₹100-₹299, up to ₹200 for ₹1,000-₹4,999).</P>

      <Figure src={refImages.deposit} alt="YaarWin Deposit Bonus tier table showing matching member and agent bonus values" caption="The first-deposit bonus tiers — applying an invite code at registration unlocks the matching agent bonus for both sides." />

      <H2>Password Best Practices</H2>
      <UL>
        <li>At least 8 characters, mixing uppercase, lowercase, numbers and one symbol.</li>
        <li>Do not reuse your bank, email or other gaming-platform password.</li>
        <li>Avoid your date of birth, mobile number or trivial sequences like "12345678".</li>
        <li>Update it every 90 days for active accounts.</li>
        <li>Consider using a password manager (Bitwarden, 1Password) to generate and store it.</li>
      </UL>

      <H2>After You Register — Complete These Three Steps</H2>
      <OL>
        <li><strong>Bind your bank account</strong> in the profile section — needed for every future withdrawal. Do it on day one.</li>
        <li><strong>Set a withdrawal password</strong> separate from your login password. This adds a second factor protecting your wallet.</li>
        <li><strong>Verify your real name</strong> — it must match the bank account holder name exactly. Even a missing initial causes payout failures.</li>
      </OL>

      <Note><strong>Important:</strong> One person, one account, one bank, one IP. Duplicate accounts are auto-frozen and any bonus is reversed across all linked accounts. The detection runs on day one, not day thirty.</Note>

      <H2>Choosing a Mobile Number</H2>
      <P>Your mobile is the single most important identifier on the platform. It is used for login, password recovery, OTP-based withdrawals and anti-fraud checks. Pick a number you control and will continue to control. If you change SIMs later, update the profile section <em>before</em> losing access to the old number, not after.</P>

      <H2>The Welcome Bonus — How To Maximise It</H2>
      <InfoTable
        headers={["First Recharge (₹)", "Member Bonus (₹)", "Notes"]}
        rows={[
          ["100 – 299", "30", "Entry tier; good for testing"],
          ["300 – 499", "100", "Best value per rupee for many"],
          ["500 – 999", "150", "Sweet spot for serious players"],
          ["1,000 – 4,999", "200", "Maximum tier — single recharge only"],
        ]}
      />
      <P>The bonus is determined by your <strong>first</strong> recharge transaction. Splitting ₹1,000 into ten ₹100 deposits gives you the ₹30 tier, not the ₹200 tier. Make one deposit at the size you actually want.</P>

      <H2>Registration on the App vs Web</H2>
      <P>The two flows are functionally identical. The app remembers your session for longer and is faster for daily play. Web registration is convenient if you do not want to install the APK immediately. You can switch between the two at any time using the same credentials.</P>

      <H2>What If Registration Fails?</H2>
      <UL>
        <li><strong>OTP not received:</strong> Switch to mobile data, check network signal, ensure your inbox is not full, then re-request after 60 seconds.</li>
        <li><strong>"Phone already registered":</strong> The number is in use — use the <Link to="/yaarwin-login" className="text-brand">Login</Link> page or recover the password.</li>
        <li><strong>Captcha errors:</strong> Refresh the page and try again with a clean browser tab.</li>
        <li><strong>"Invalid invite code":</strong> Ask your inviter to double-check the code. Codes are case sensitive.</li>
        <li><strong>"Registration closed in your region":</strong> Real-money play is restricted in some regions. Confirm local rules before retrying with a VPN — using a VPN to circumvent regional checks can trigger an account freeze.</li>
      </UL>

      <H2>What Happens Immediately After Registration</H2>
      <OL>
        <li>You land in the lobby with a ₹0 balance.</li>
        <li>An on-screen prompt asks you to bind a bank account — do this before depositing.</li>
        <li>A welcome banner shows the deposit bonus tier you will unlock.</li>
        <li>If you applied an invite code, the agent sees your registration in their dashboard.</li>
      </OL>

      <H2>Security Checklist Before Your First Recharge</H2>
      <UL>
        <li>Login password set and stored safely.</li>
        <li>Withdrawal password set and different from login.</li>
        <li>Bank account bound and verified.</li>
        <li>Real-name verification submitted.</li>
        <li>Notifications enabled so withdrawals and bonuses alert you instantly.</li>
      </UL>

      <p>Ready? Once registration is done, head to the <Link to="/how-to-play" className="text-brand">how-to-play tutorial</Link> and check today's <Link to="/gift-code" className="text-brand">gift codes</Link> to stack a free bonus on top of your welcome bonus.</p>
    </ContentPage>
  ),
});
