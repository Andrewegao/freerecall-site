import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FreeRecall handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      meta={`${COMPANY} · Last updated June 20, 2026`}
    >
      <p>
        FreeRecall respects your privacy. There is no account and no sign-in,
        and we collect as little as possible to run the app.
      </p>

      <h2>Data stored on your device</h2>
      <ul>
        <li>
          <strong>Saved recalls and your recovered total:</strong> stored
          locally on your device only. We never upload them.
        </li>
        <li>
          <strong>App settings:</strong> such as your notification and
          appearance preferences, stored locally.
        </li>
      </ul>

      <h2>Anonymous diagnostics</h2>
      <p>
        With your consent, FreeRecall sends anonymous, aggregate usage and crash
        data to Google Firebase to help us improve stability and the experience.
        This data is not linked to your identity and contains no advertising
        identifiers. You can decline, and you can turn it off at any time in
        Settings.
      </p>

      <h2>Recall feed and product images</h2>
      <p>
        The app loads the public recall feed and product photos over secure
        (HTTPS) connections. Product images are served by third-party hosts
        (such as manufacturer, retailer, and government image servers). When an
        image loads, that host can see your device&rsquo;s IP address and which
        image was requested, exactly as any website that displays an image can.
        We send these hosts no account or personal information.
      </p>

      <h2>Data we do NOT collect</h2>
      <ul>
        <li>No account, name, email, or sign-in</li>
        <li>No advertising identifiers &mdash; FreeRecall shows no ads</li>
        <li>No financial information or government ID numbers</li>
        <li>We never sell, rent, or share your personal information</li>
      </ul>

      <h2>Your rights</h2>
      <ul>
        <li>Turn anonymous diagnostics on or off in Settings</li>
        <li>
          Delete everything via Settings &rarr; Delete Data, or by removing the
          app
        </li>
        <li>
          <strong>GDPR (EEA/UK):</strong> Right to access, rectify, erase, and
          restrict processing
        </li>
        <li>
          <strong>CCPA (California):</strong> Right to know, delete, and opt out
          of sale (we do not sell data)
        </li>
      </ul>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        FreeRecall is not intended for children under 13. We do not knowingly
        collect data from children.
      </p>

      <h2>Disclaimer</h2>
      <p>
        FreeRecall is an independent app, not a government service, and does not
        provide legal or safety advice. TO THE MAXIMUM EXTENT PERMITTED BY LAW,{" "}
        {COMPANY.toUpperCase()} SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM
        YOUR USE OF THE APP.
      </p>

      <p>&copy; 2026 {COMPANY}</p>
    </LegalShell>
  );
}
