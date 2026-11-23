import { Metadata } from "next";
import { COMPANY_CONTACT } from "@/data/company";

export const metadata: Metadata = {
  title: "Cookie Policy | WebNote Technologies",
  description: "WebNote Technologies Private Limited Cookie Usage and Session Transparency Policy.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-20 relative overflow-hidden gradient-mesh-cyan text-[#0f172a] min-h-[85vh]">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl glass-surface shadow-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">Cookie Policy</h1>
          <p className="text-sm font-semibold text-slate-500 mb-12">
            Effective Date: January 1, 2026 | Last Updated: November 2026
          </p>

          <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">1. How We Use Cookies</h2>
              <p>
                WebNote Technologies Private Limited uses strictly essential cookies and anonymized analytics to deliver secure, responsive web experiences. We do not use intrusive cross-site tracking cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">2. Essential & Performance Cookies</h2>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-slate-600 font-normal">
                <li>Essential Session Cookies: Required for navigation, security token validation, and form submission resilience.</li>
                <li>Anonymized Telemetry: Performance cookies that aggregate page render times and edge cache hit ratios without identifying individuals.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">3. Managing Preferences</h2>
              <p>
                You can instruct your browser to refuse all cookies or notify you when a cookie is being set. Essential platform functions will remain accessible even with third-party cookies disabled.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">4. Contact Information</h2>
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
