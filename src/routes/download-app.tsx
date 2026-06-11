import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, H2, H3, P, OL, UL, Note, InfoTable } from "@/components/ContentPage";
import { Figure, refImages } from "@/components/RefImage";

const faqs = [
  { q: "Why isn't YaarWin on the Google Play Store?", a: "Real-money colour prediction apps are restricted by Play Store policy in many regions, so YaarWin distributes its Android build directly as an APK from the official website." },
  { q: "Is the YaarWin APK safe?", a: "The official APK is signed and scanned. Always download from the YaarWin website only, and check that the file name and size match the version listed there." },
  { q: "Does YaarWin have an iOS app?", a: "iOS users can play YaarWin through the optimised mobile web version — open the official URL in Safari and add it to your home screen for an app-like experience." },
  { q: "Will the YaarWin APK harm my phone?", a: "The official APK from the YaarWin website is malware-free and requires only the permissions necessary for gameplay, payment processing and notifications." },
  { q: "How big is the YaarWin APK file?", a: "Around 50-80 MB depending on the version. Updates incremental and typically smaller." },
];

export const Route = createFileRoute("/download-app")({
  head: () => ({
    meta: [
      { title: "Download YaarWin App 2026 — Official Android APK & iOS Guide" },
      { name: "description", content: "Safely download the official YaarWin Android APK. Step-by-step install guide, requirements, common errors and iOS instructions." },
      { property: "og:title", content: "Download YaarWin App — Official Android APK" },
      { property: "og:description", content: "Step-by-step YaarWin APK download and installation guide." },
      { property: "og:url", content: "/download-app" },
    ],
    links: [{ rel: "canonical", href: "/download-app" }],
  }),
  component: () => (
    <ContentPage
      eyebrow="App Install"
      title="Download the YaarWin App — Safe & Official"
      intro="The right way to download, install and update the YaarWin Android APK without warnings or risk, plus a full iOS workaround that gives you an app-like experience."
      faqs={faqs}
    >
      <P>The YaarWin Android app delivers faster gameplay, push notifications for round results, near-instant biometric login, and a more reliable wallet experience than mobile web. It is also the only way to receive in-app gift-code alerts the moment they drop, which matters because the most lucrative codes sell out within minutes of release. This page walks you through every step of a safe installation, the iOS workaround, the most common error messages and exactly how to avoid the fake APK ecosystem that targets the platform's name.</P>

      <H2>Why the App Is Better Than Mobile Web</H2>
      <UL>
        <li>Push notifications for round results, gift code drops and withdrawal confirmations.</li>
        <li>Biometric login (fingerprint / face unlock) after the first password login.</li>
        <li>Lower network latency — bets lock faster, especially on the 30-second rounds.</li>
        <li>Persistent login that does not drop when you switch apps.</li>
        <li>Offline access to the history panel so you can review past rounds without connection.</li>
      </UL>

      <H2>System Requirements</H2>
      <UL>
        <li>Android 7.0 (Nougat) or newer</li>
        <li>~120 MB free storage</li>
        <li>Stable 4G or Wi-Fi connection</li>
        <li>"Install unknown apps" permission for your browser (temporary)</li>
      </UL>

      <H2>Installation Steps — Android</H2>
      <OL>
        <li>Open the official YaarWin website in Chrome (not third-party browsers).</li>
        <li>Tap the <em>Download App</em> banner — the APK saves to your <em>Downloads</em> folder.</li>
        <li>Open the file. Android prompts about "Install unknown apps". Allow only for Chrome.</li>
        <li>Tap <em>Install</em>. The app appears on your home screen within 10 seconds.</li>
        <li>Open the app and log in with your YaarWin credentials.</li>
        <li>Allow notifications when prompted — this is how gift-code alerts arrive.</li>
      </OL>

      <Note><strong>Tip:</strong> After install, disable "Install unknown apps" again for security. The permission only needed to exist for the install moment itself.</Note>

      <H2>iOS Users — The Web App Workaround</H2>
      <P>YaarWin does not ship a native iOS binary. The mobile web version on Safari is the official supported route, and it works very well. To get the closest-to-app experience, install it as a Progressive Web App.</P>
      <OL>
        <li>Open the official YaarWin URL in Safari (not Chrome on iOS).</li>
        <li>Tap the <em>Share</em> icon at the bottom of the screen.</li>
        <li>Scroll and select <em>Add to Home Screen</em>.</li>
        <li>Confirm the name and tap <em>Add</em>.</li>
        <li>Launch from the home-screen icon for a full-screen, app-like experience.</li>
        <li>Allow notifications when Safari prompts.</li>
      </OL>

      <Figure src={refImages.wingoWin} alt="YaarWin app showing successful Win Go round result with details panel" caption="The order-detail panel you can review inside the app after every round — period, purchase amount, tax, result and win/lose status." />

      <H2>Updating the App</H2>
      <OL>
        <li>Visit the official download page periodically — there is no auto-update via Play Store since the APK is sideloaded.</li>
        <li>Compare your installed version (Profile → About → Version) against the website version.</li>
        <li>If outdated, download the new APK and install over the old one — your data and login session stay intact.</li>
        <li>If a major update fails to install over the old version, uninstall first and reinstall fresh. Your account data is server-side and unaffected.</li>
      </OL>

      <H2>Common Install Errors</H2>
      <InfoTable
        headers={["Error", "Cause", "Fix"]}
        rows={[
          ["App not installed", "Older APK signature conflict", "Uninstall old version, restart phone, retry"],
          ["Parse error", "Download was interrupted or corrupted", "Re-download fully on stable Wi-Fi"],
          ["Blocked by Play Protect", "Sideload safety check", "Tap Install anyway — the official APK is safe"],
          ["Not enough storage", "Less than 120 MB free", "Clear cache, uninstall unused apps"],
          ["Permission denied", "Install Unknown Apps off for browser", "Settings → Apps → Chrome → Allow"],
        ]}
      />

      <H2>Sources to Avoid</H2>
      <UL>
        <li>Third-party APK mirrors (apkpure, apkmirror clones, etc.) — they often serve modified APKs.</li>
        <li>Telegram bots claiming "modded" versions with unlimited bonus.</li>
        <li>Cracked or hacked APKs promising guaranteed wins or "auto-bot" features.</li>
        <li>Email or WhatsApp attachments labelled as the YaarWin APK.</li>
        <li>Any download link from a YouTube comment.</li>
      </UL>

      <H2>How to Verify the APK Is Genuine</H2>
      <OL>
        <li>The file name should match the version on the official site.</li>
        <li>The file size should be within 5 MB of the listed size.</li>
        <li>The signing certificate (visible in Android settings after install) should be issued to YaarWin.</li>
        <li>After install, the launch screen and lobby should match the screenshots on the official site exactly. Any cosmetic difference is a red flag.</li>
      </OL>

      <H2>App Permissions Explained</H2>
      <UL>
        <li><strong>Storage:</strong> for the app cache and downloaded round history.</li>
        <li><strong>Notifications:</strong> for gift codes, bonuses, withdrawal confirmations.</li>
        <li><strong>Network:</strong> for the obvious — the app is online-only.</li>
        <li><strong>Biometric:</strong> optional, for faster login.</li>
      </UL>
      <P>The app does not request contact, camera, location or SMS-reading permissions. If a "YaarWin" APK asks for any of these on install, it is not the official app — uninstall immediately.</P>

      <H2>Uninstalling</H2>
      <P>Long-press the app icon → <em>Uninstall</em>. Your YaarWin account and balance are server-side and unaffected. You can reinstall later and pick up exactly where you left off.</P>

      <p>Already installed? Head to <Link to="/yaarwin-login" className="text-brand">YaarWin Login</Link> or claim your <Link to="/gift-code" className="text-brand">latest gift code</Link>.</p>
    </ContentPage>
  ),
});
