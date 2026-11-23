import { Metadata } from "next";
import { COMPANY_CONTACT } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Engagement | WebNote Technologies",
  description: "WebNote Technologies Private Limited Terms of Service and Master Services Agreement framework.",
};

export default function TermsPage() {
  return (
    <div className="py-20 relative overflow-hidden gradient-mesh-blue text-[#0f172a] min-h-[85vh]">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl glass-surface shadow-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">Terms of Engagement</h1>
          <p className="text-sm font-semibold text-slate-500 mb-12">
            Effective Date: January 1, 2026 | Last Updated: November 2026
          </p>

          <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">1. Agreement to Terms</h2>
              <p>
                By accessing the website of WebNote Technologies Private Limited or contracting our digital engineering, software architecture, and marketing services, you agree to be bound by these Terms of Engagement and our project-specific Statements of Work (SOW).
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">2. Intellectual Property Rights</h2>
              <p>
                Upon complete milestone settlement, 100% of all custom source code, documentation, assets, and design systems developed specifically for the client are assigned in full to the client. WebNote Technologies retains no proprietary claims over custom client deliverables.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">3. Confidentiality & Non-Disclosure</h2>
              <p>
                Both parties agree to treat all business information, source code, data schemas, and growth strategies as confidential under mutual non-disclosure protections.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">4. Inquiries & Legal Governance</h2>
              <p>
                For any legal or contractual questions, contact our corporate office at:
              </p>
              <div className="mt-4 p-6 rounded-2xl bg-white/80 border border-slate-200/80 text-sm space-y-1.5 shadow-2xs">
                <div className="font-bold text-slate-900">WebNote Technologies Private Limited</div>
                <div>Email: <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-blue-700 font-semibold hover:underline">{COMPANY_CONTACT.email}</a></div>
                <div>Office: {COMPANY_CONTACT.address.full}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
