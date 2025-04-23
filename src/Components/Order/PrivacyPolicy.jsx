import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen px-4 sm:px-6 lg:px-10 py-10 space-y-10">
      <div className="p-6 bg-white shadow-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-[#784421]">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              1. Introduction
            </h2>
            <p>
              At Frame Digital Solution Pvt. Ltd., we are committed to
              protecting your privacy and ensuring that your personal
              information is handled securely. This Privacy Policy explains how
              we collect, use, store, and protect your data when you use our
              website, software, and services.
            </p>
            <p>
              By accessing our services, you agree to the collection and use of
              information in accordance with this policy. If you do not agree,
              please discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              2. Information We Collect
            </h2>
            <p className="font-semibold">2.1 Personal Information:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Billing and payment details</li>
              <li>Government-issued identification (if required)</li>
            </ul>

            <p className="font-semibold mt-4">2.2 Non-Personal Information:</p>
            <ul className="list-disc list-inside ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Cookies and usage data</li>
            </ul>

            <p className="font-semibold mt-4">2.3 Business Information:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Company details</li>
              <li>Service usage patterns</li>
              <li>Project-related information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              3. How We Collect Information
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                Directly from users when they register, subscribe, or contact
                us.
              </li>
              <li>Automatically through cookies and tracking technologies.</li>
              <li>
                From third parties such as analytics tools and payment
                providers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              4. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>To provide and improve our services</li>
              <li>To process transactions</li>
              <li>To personalize user experience</li>
              <li>To send updates, offers, and notifications</li>
              <li>To ensure security and legal compliance</li>
            </ul>
            <p>
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              5. Cookies & Tracking
            </h2>
            <p>
              We use cookies and similar technologies to enhance user experience
              and analytics.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Essential Cookies</li>
              <li>Analytics Cookies</li>
              <li>Marketing Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              6. Data Sharing
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>With service providers and partners</li>
              <li>With legal authorities when required</li>
              <li>During mergers or acquisitions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              7. Data Security
            </h2>
            <p>
              We implement encryption, access control, and audits to protect
              your information. Users are also encouraged to use strong
              passwords and enable 2FA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              8. Data Retention
            </h2>
            <p>
              We retain data only as long as necessary for services, legal
              compliance, and dispute resolution. Users can request deletion by
              contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              9. Your Rights
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Access, correct, or delete your data</li>
              <li>Opt-out of marketing</li>
              <li>Restrict processing</li>
            </ul>
            <p>
              To exercise rights, email us at{" "}
              <a
                href="mailto:framedigital.solutions@gmail.com"
                className="text-[#D87F30] underline"
              >
                framedigital.solutions@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              10. Third-Party Links
            </h2>
            <p>
              Our services may link to external sites. We are not responsible
              for their practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              11. Legal Compliance
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>IT Act 2000 (India)</li>
              <li>GDPR (EU)</li>
              <li>CCPA (California, USA)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              12. Children’s Privacy
            </h2>
            <p>
              We do not knowingly collect data from individuals under 18.
              Parents can request deletion if data has been submitted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              13. Changes to Policy
            </h2>
            <p>
              This policy may be updated from time to time. Continued use
              implies acceptance of changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
