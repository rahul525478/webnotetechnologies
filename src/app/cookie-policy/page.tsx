import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy | WebNote Technologies",
  description: "WebNote Technologies Cookie Policy and Tracking Transparency.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="wn-container max-w-4xl">
        <h1 className="text-4xl font-extrabold text-white mb-4">Cookie Policy</h1>
        <p className="text-sm text-[#a0a0b8] mb-12">
          Effective Date: January 1, 2026 | Last Updated: November 2026
        </p>

        <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#a0a0b8] space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you browse websites. They are widely used to make websites function properly, measure performance, and deliver personalized user experiences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How WebNote Technologies Uses Cookies</h2>
            <p>Our website utilizes cookies strictly for essential and analytical purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Strictly Necessary Cookies: Required for core site navigation, form state, and security protection.</li>
              <li>Performance & Telemetry Cookies: Anonymized analytics (such as Google Analytics 4) to monitor page load speeds, popular technology pages, and visitor bounce rates.</li>
              <li>Preference Cookies: Retaining user visual preferences (such as dark mode and reduced-motion settings).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Managing Your Cookie Preferences</h2>
            <p>
              You can configure your browser to refuse all cookies or to notify you when a cookie is set. Please note that disabling essential cookies may impact certain interactive capabilities and 3D visual rendering on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Contact Us</h2>
            <p>
              If you have questions regarding our cookie practices, please contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#c5e017] underline">{SITE_CONFIG.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
