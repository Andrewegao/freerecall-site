import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/layout/LegalShell";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description: "FreeRecall support: frequently asked questions.",
};

export default function SupportPage() {
  return (
    <LegalShell eyebrow="Support" title="How can we help?" meta={COMPANY}>
      <h2>Frequently Asked Questions</h2>

      <h3>What is FreeRecall?</h3>
      <p>
        FreeRecall helps you find U.S. government product recalls on things you
        already own and claim the refund, free repair, or replacement on the
        official agency site. Most recalls go unnoticed and the money goes
        unclaimed &mdash; FreeRecall changes that.
      </p>

      <h3>How does FreeRecall work?</h3>
      <p>
        Browse a feed of real recalls with product photos, recognize something
        you own, and tap through to the official agency page (CPSC, FDA, USDA,
        or NHTSA) to claim. We point you to the source; you get the remedy.
      </p>

      <h3>Where does the recall data come from?</h3>
      <p>
        Recall information comes from official U.S. government sources,
        including the CPSC, FDA, USDA, and NHTSA. Every recall shows its source
        agency, recall ID, and date, with a link to the official notice.
      </p>

      <h3>Do I need a receipt to claim?</h3>
      <p>
        Often not. Many recall remedies need only the product or its model
        number. Each recall explains exactly what&rsquo;s required, straight
        from the agency.
      </p>

      <h3>How much money can I get?</h3>
      <p>
        It depends on the recall. Outcomes range from a full refund to a free
        repair or replacement. Each listing shows the remedy the agency or
        manufacturer is offering.
      </p>

      <h3>Is my data safe?</h3>
      <p>
        Yes. There is no account and no sign-in, and your saved recalls stay on
        your device. See our <Link href="/privacy">Privacy Policy</Link> for
        full details.
      </p>

      <h3>How do I delete my data?</h3>
      <p>
        Go to Settings &gt; Delete Data, or simply delete the app. Either one
        permanently removes everything stored on your device, including saved
        recalls and your recovered total.
      </p>

      <h3>The app isn&rsquo;t showing any recalls.</h3>
      <p>
        Make sure you have an internet connection. The app fetches recall data
        on launch. If you&rsquo;re seeing cached data, pull down to refresh on
        the feed.
      </p>

      <h3>I found a bug or have a suggestion.</h3>
      <p>
        We&rsquo;d love to hear from you. You can leave feedback through the App
        Store or Google Play listing for FreeRecall.
      </p>

      <h2>Legal Disclaimers</h2>
      <p className="disclaimer">
        FreeRecall is an independent app. It is not a government service and is
        not affiliated with, endorsed by, or connected to the CPSC, FDA, USDA,
        NHTSA, or any other agency, manufacturer, or retailer.
      </p>
      <p className="disclaimer">
        Recall information displayed in the app is sourced from publicly
        available government records. While we strive for accuracy, {COMPANY}{" "}
        makes no representations or warranties regarding the completeness,
        accuracy, reliability, or availability of any recall information. Always
        confirm details and eligibility with the issuing agency before acting.
      </p>
      <p className="disclaimer">
        Claiming a remedy through information found on FreeRecall does not
        guarantee any refund, repair, or replacement. All remedies are provided
        by the issuing agency or manufacturer, not by {COMPANY}.
      </p>
    </LegalShell>
  );
}
