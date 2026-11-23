import { Metadata } from "next";
import { COMPANY_CONTACT } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | WebNote Technologies",
  description: "WebNote Technologies Private Limited Privacy Policy and Data Protection Standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 relative overflow-hidden gradient-mesh-indigo text-[#0f172a] min-h-[85vh]">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl glass-surface shadow-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-sm font-semibold text-slate-500 mb-12">
            Effective Date: January 1, 2026 | Last Updated: November 2026
          </p>

          <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">1. Introduction</h2>
              <p>
                WebNote Technologies Private Limited (&quot;WebNote Technologies&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates this website and provides global software engineering, digital marketing, AI automation, and consulting services. We are dedicated to safeguarding client confidentiality and data security in compliance with international privacy frameworks including GDPR, CCPA/CPRA, and applicable regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">2. Information We Collect</h2>
              <p>We collect information voluntarily submitted during technical inquiries, proposal requests, or job applications:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-600 font-normal">
                <li>Contact Information: Full name, business email address, and direct phone number.</li>
                <li>Project Specifications: Company name, technical scope, budget ranges, and architecture constraints.</li>
                <li>Career Submissions: Portfolios, resume links, and project samples.</li>
                <li>Anonymous Technical Metrics: Anonymized browser headers and performance telemetry to guarantee uptime.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">3. How We Use Collected Information</h2>
              <p>We process collected data exclusively for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-600 font-normal">
                <li>Preparing architectural proposals and scheduling technical scoping meetings.</li>
                <li>Executing client project deliverables under mutual non-disclosure and confidentiality agreements.</li>
                <li>Operating, protecting, and optimizing our web platforms and cloud infrastructure.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">4. Information Sharing & Security</h2>
              <p>
                We do not sell, rent, or trade your personal or business data. All data shared with WebNote Technologies is stored within encrypted cloud databases behind SOC2-compliant firewalls.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">5. Contact Information</h2>
              <p>
                For inquiries regarding data privacy or to exercise your data subject rights, please contact our data protection team:
              </p>
              <div className="mt-4 p-6 rounded-2xl bg-white/80 border border-slate-200/80 text-sm space-y-1.5 shadow-2xs">
                <div className="font-bold text-slate-900">WebNote Technologies Private Limited</div>
                <div>Email: <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-blue-700 font-semibold hover:underline">{COMPANY_CONTACT.email}</a></div>
                <div>US Phone: {COMPANY_CONTACT.usPhoneDisplay} | IN Phone: {COMPANY_CONTACT.indiaPhone1Display}</div>
                <div>Office: {COMPANY_CONTACT.address.full}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
