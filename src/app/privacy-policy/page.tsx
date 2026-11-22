import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | WebNote Technologies",
  description: "WebNote Technologies Pvt. Ltd Privacy Policy and Data Protection Standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="wn-container max-w-4xl">
        <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#a0a0b8] mb-12">
          Effective Date: January 1, 2026 | Last Updated: November 2026
        </p>

        <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#a0a0b8] space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              {SITE_CONFIG.legalName} (&quot;WebNote Technologies&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website {SITE_CONFIG.url} and provides international software development, digital marketing, AI automation, and consulting services. We are committed to safeguarding the privacy and personal data of our website visitors, clients, and partners in compliance with global standards including GDPR, CCPA/CPRA, and relevant US state regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect personal data that you voluntarily provide to us when submitting inquiries, booking consultations, or applying for employment. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Contact Information: Full name, business email address, phone number, and physical mailing address.</li>
              <li>Professional Details: Company name, job title, industry, and project specifications.</li>
              <li>Employment Submissions: Resume files, LinkedIn profiles, portfolio URLs, and cover notes.</li>
              <li>Technical Analytics: IP address, browser type, device information, and interaction timestamps collected via strictly anonymized session cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Collected Information</h2>
            <p>We utilize your personal information exclusively for legitimate business purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To evaluate and respond to inbound project inquiries and service requests.</li>
              <li>To prepare service agreements, statements of work, and project roadmaps.</li>
              <li>To process candidate applications for employment vacancies.</li>
              <li>To maintain website security, prevent fraudulent activity, and diagnose server latency.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Information Sharing and Non-Disclosure</h2>
            <p>
              We do not sell, rent, or lease your personal information to third parties. We will never share confidential project briefs with unauthorized outside vendors. Any technical data shared during client discovery is protected under our standard Mutual Non-Disclosure Agreement (NDA).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention & Security</h2>
            <p>
              We implement industry-standard encryption (AES-256 at rest and TLS 1.3 in transit) across all data storage endpoints. Personal data is retained only for as long as necessary to fulfill the operational purposes outlined in this policy or to satisfy legal and accounting obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you retain the right to request access to, correction of, or deletion of your personal data held by us. To exercise any of these privacy rights, please email our Data Privacy Officer at <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#c5e017] underline">{SITE_CONFIG.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
