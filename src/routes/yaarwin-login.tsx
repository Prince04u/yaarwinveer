import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, OL, UL, Note, InfoTable } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";
import { LOGIN_URL } from "@/components/SiteHeader";

const faqs = [
  { q: "I forgot my YaarWin password — what do I do?", a: "On the login page tap 'Forgot password', enter your registered mobile number, verify the OTP and set a new password. Use a memorable but secure replacement." },
  { q: "Why is my YaarWin login not working?", a: "Most login failures are caused by typing the wrong country code, an expired OTP, or a poor network. Switch to mobile data, try again, and clear the app cache if the issue persists." },
  { q: "Can I log in to YaarWin on two devices?", a: "Yes. You can be logged in on the YaarWin app and the web at the same time, but for security you may be asked to re-verify with OTP when switching devices." },
  { q: "Is my YaarWin login session encrypted?", a: "Yes — every login uses HTTPS with TLS 1.2 or newer. Credentials are never sent in plain text." },
  { q: "How do I log out of YaarWin?", a: "Tap your profile icon and choose Log Out. On shared devices, do this immediately after every session." },
];

export const Route = createFileRoute("/yaarwin-login")({
  head: () => ({
    meta: [
      { title: "YaarWin Login 2026 — Step-by-Step Guide & Troubleshooting" },
      { name: "description", content: "Official YaarWin login guide: web and app login steps, password recovery, OTP issues, security tips and direct login link." },
      { property: "og:title", content: "YaarWin Login Guide 2026" },
      { property: "og:description", content: "How to log in to YaarWin safely on web and app, plus fixes for the most common login problems." },
      { property: "og:url", content: "/yaarwin-login" },
    ],
    links: [{ rel: "canonical", href: "/yaarwin-login" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="Account Access"
      title="YaarWin Login — Web & App Complete Guide"
      intro="A trustworthy walk-through of the YaarWin login process with fixes for every common access issue, security best-practice and a fast recovery flow."
      faqs={faqs}
    >
      <P>Logging into YaarWin should take under 30 seconds. If it is taking longer, one of three things is usually wrong: a mistyped country code, an expired OTP, or a blocked SMS carrier. This guide covers all three plus the dozen other ways logins fail and how to fix each one. It also covers the security practices that matter most — the ones that prevent account hijacks, not the cosmetic ones that just slow you down.</P>

      <H2>Direct YaarWin Login Link</H2>
      <P>Use only the official link below. Bookmark it on your phone and your laptop the first time you log in, so you never end up on a phishing clone in the future. Phishing clones of popular Indian gaming platforms are common and the visual differences are often impossible to spot at a glance.</P>
      <p><a href={LOGIN_URL} className="btn-brand btn-brand-hover">Open Official YaarWin Login →</a></p>

      <H2>Login on Web — Step by Step</H2>
      <OL>
        <li>Open the official YaarWin login URL above from a trusted device.</li>
        <li>Select your country code (+91 for India). This step traps a lot of new users — the wrong code silently sends OTPs to the wrong country.</li>
        <li>Enter your registered mobile number — no spaces, no dashes.</li>
        <li>Type your password (case sensitive). Use the show-password eye icon to verify your typing before submitting.</li>
        <li>Solve the slider or image captcha. The slider must be fully aligned, not approximately.</li>
        <li>Tap <em>Login</em>. You should land on the lobby in 2-3 seconds.</li>
      </OL>

      <H2>Login on the YaarWin App</H2>
      <P>The app uses the same credentials as the web. On first launch, allow notification access so you can receive gift-code alerts and withdrawal confirmations in real time. The app also supports biometric login (fingerprint or face unlock) after the first successful password login — turn this on in the settings to make subsequent logins instant.</P>

      <Figure src={refImages.wingoHistory} alt="YaarWin app interface after login showing WinGo lobby with timer and balls" caption="The lobby you land on immediately after login — round timer, coloured balls, and your wallet balance in the header." />

      <H2>Password Recovery</H2>
      <OL>
        <li>Tap <em>Forgot password</em> on the login screen.</li>
        <li>Enter your registered mobile number and request an OTP.</li>
        <li>Enter the 6-digit code within 60 seconds.</li>
        <li>Set a new password (8+ characters, mix of letters and numbers).</li>
        <li>You are logged in automatically with the new password.</li>
      </OL>
      <Note>If you no longer have access to the registered mobile number, password recovery is not possible from outside the platform. Contact official support through the in-app chat with proof of identity to start the manual recovery flow — it takes several days.</Note>

      <H2>Common Login Errors and Fixes</H2>
      <InfoTable
        headers={["Error", "Likely Cause", "Fix"]}
        rows={[
          ["User does not exist", "Account never registered or wrong country code", "Sign up or correct the country code"],
          ["Verification code error", "OTP expired or mistyped", "Wait 30s, re-request, type without spaces"],
          ["Wrong password", "Caps-lock on, password reused", "Verify with show-password, try recovery"],
          ["Account frozen", "Anti-fraud trigger", "Contact official support with ID"],
          ["App login loop", "Corrupted local session", "Clear app cache or reinstall the latest APK"],
          ["Captcha keeps failing", "Slider not aligned, low network", "Refresh page, switch to better connection"],
          ["SMS not arriving", "Carrier filter or DND", "Switch to mobile data, retry after 60s"],
        ]}
      />

      <H2>Login Security Best Practices</H2>
      <H3>Never share these — ever</H3>
      <UL>
        <li>Your password</li>
        <li>Your OTP (support will never ask for it)</li>
        <li>Your withdrawal password</li>
        <li>Your bank OTP</li>
      </UL>
      <H3>Always do these</H3>
      <UL>
        <li>Use a unique password (not the one on your email or banking app).</li>
        <li>Avoid logging in on public Wi-Fi without a VPN.</li>
        <li>Log out of shared devices immediately after the session.</li>
        <li>Keep your phone OS and the YaarWin app on the latest version.</li>
        <li>Enable biometric login on the app for daily use.</li>
      </UL>

      <H2>Recognising a Phishing Site</H2>
      <UL>
        <li>Check the URL bar — official YaarWin URLs use HTTPS and a known domain. A typo'd domain is the most common attack.</li>
        <li>The official site never asks you to "verify your identity" via WhatsApp or Telegram before login.</li>
        <li>Login pages never ask for your bank PIN or full card details.</li>
        <li>If a "support agent" on social media asks for your password, they are not from YaarWin.</li>
      </UL>

      <H2>Multi-Device Login</H2>
      <P>You can be logged in on the YaarWin web and the app simultaneously. For security, switching to a brand new device triggers an extra OTP verification on the registered mobile. If you receive an unexpected OTP, treat it as a warning — someone may be attempting to log into your account.</P>

      <H3>Trouble Persists?</H3>
      <Note>Reach out via the in-app live chat or our official Telegram <a href="https://t.me/yaarrwin" className="text-brand" target="_blank" rel="noreferrer">@yaarrwin</a>. Never DM unofficial accounts that claim to "unlock" your login — they are scams. The official support team operates inside the app first; everything else is secondary.</Note>

      <P>After a successful login, claim today's <Link to="/gift-code" className="text-brand">gift codes</Link>, check the <Link to="/yaarwin-bonuses" className="text-brand">bonus rules</Link>, and review the <Link to="/responsible-gaming" className="text-brand">responsible gaming</Link> guidelines before starting a session.</P>
    </ContentPage>
  ),
});
