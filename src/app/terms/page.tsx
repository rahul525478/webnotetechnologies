import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions | WebNote Technologies",
  description: "Terms and Conditions governing the use of WebNote Technologies Pvt. Ltd web properties and service engagements.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="wn-container max-w-4xl">
        <h1 className="text-4xl font-extrabold text-white mb-4">Terms and Conditions</h1>
        <p className="text-sm text-[#a0a0b8] mb-12">
          Effective Date: January 1, 2026 | Last Updated: November 2026
        </p>

        <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#a0a0b8] space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of {SITE_CONFIG.legalName} (&quot;WebNote Technologies&quot;), you acknowledge and agree to be bound by these Terms and Conditions and all applicable international laws. If you do not agree with any of these terms, you are prohibited from using this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Intellectual Property Rights</h2>
            <p>
              All proprietary materials on this website, including but not limited to brand trademarks, logos, copy, 3D animations, code samples, design system assets, and visual layouts, are the exclusive property of {SITE_CONFIG.legalName} or licensed to us, and are protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Professional Services Engagements</h2>
            <p>
              Any software development, consulting, cloud infrastructure, or digital growth project undertaken by WebNote Technologies is governed by an executed Master Services Agreement (MSA) and project Statement of Work (SOW). Nothing on this informational website constitutes a formal commercial contract or guarantee of specific ranking positions or advertising revenue.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
            <p>
              In no event shall WebNote Technologies, its directors, or its software engineers be liable for any indirect, consequential, punitive, or incidental damages arising out of the use or inability to use this website or any referenced third-party technologies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws governing international business contracts without giving effect to conflict-of-law principles.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
