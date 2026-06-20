import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "FreeRecall terms of use.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Use"
      meta={`${COMPANY} · Last updated June 20, 2026`}
    >
      <p>
        By downloading, accessing, or using FreeRecall (&ldquo;App&rdquo;), you
        agree to be bound by these Terms of Use. If you do not agree, do not use
        the App.
      </p>

      <h2>1. Informational service only</h2>
      <p>
        FreeRecall is a free information service. We surface publicly available
        product-recall information and link you to the official agency or
        manufacturer pages. FreeRecall is NOT a government service and does NOT
        provide legal, safety, or professional advice.
      </p>

      <h2>2. Not affiliated with any agency</h2>
      <p>
        FreeRecall is an independent app and is not affiliated with, endorsed
        by, or connected to the CPSC, FDA, USDA, NHTSA, or any other agency,
        manufacturer, or retailer.
      </p>

      <h2>3. No warranties</h2>
      <p>
        THE APP IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE&rdquo; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND. We make no
        guarantees about the accuracy, completeness, or timeliness of recall
        information. Always verify details on the official agency website.
      </p>

      <h2>4. No liability for remedies</h2>
      <p>
        Claiming a remedy through a link in FreeRecall creates a direct
        relationship between you and the issuing agency or manufacturer.
        FreeRecall and {COMPANY} are not a party to any claim and bear no
        responsibility for the outcome of any refund, repair, or replacement.
      </p>

      <h2>5. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, {COMPANY.toUpperCase()}, ITS
        OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
        LOSS OF PROFITS, REVENUES, DATA, USE, GOODWILL, OR OTHER INTANGIBLE
        LOSSES, RESULTING FROM YOUR USE OF THE APP.
      </p>

      <h2>6. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless {COMPANY} and its
        officers, directors, employees, and agents from any claims, liabilities,
        damages, losses, and expenses (including reasonable attorneys&rsquo;
        fees) arising from your use of the App.
      </p>

      <h2>7. Assumption of risk</h2>
      <p>
        You acknowledge and agree that you use the App at your own risk. You are
        solely responsible for verifying recall information and for any claim you
        choose to file.
      </p>

      <h2>8. Dispute resolution &amp; arbitration</h2>
      <p>
        Any disputes arising from these Terms or your use of the App shall be
        resolved through binding arbitration in the State of Delaware, in
        accordance with the rules of the American Arbitration Association.
      </p>

      <h2>9. Class action waiver</h2>
      <p>
        YOU AND {COMPANY.toUpperCase()} AGREE THAT EACH MAY BRING CLAIMS AGAINST
        THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF
        OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms shall be governed by the laws of the State of Delaware.
      </p>

      <p>&copy; 2026 {COMPANY}</p>
    </LegalShell>
  );
}
