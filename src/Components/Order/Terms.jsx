import React from "react";

const Terms = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen px-4 sm:px-6 lg:px-10 py-10 space-y-10">
      <div className="p-6 bg-white shadow-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-[#784421]">
          Terms & Conditions
        </h1>
        <div className="space-y-6 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to Frame Digital Solution Pvt. Ltd. By accessing and using
              our website, software, and services, you acknowledge that you have
              read, understood, and agree to comply with these Terms &
              Conditions. If you do not agree with any part of these terms, you
              should discontinue use immediately.
            </p>
            <p>
              These Terms & Conditions constitute a legally binding agreement
              between Frame Digital Solution Pvt. Ltd. (referred to as "the
              Company," "we," "us," or "our") and any individual or entity using
              our services (referred to as "User," "Client," or "you").
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              2. Definitions
            </h2>
            <p>For clarity, the following terms are defined:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                “Company” refers to Frame Digital Solution Pvt. Ltd., including
                its subsidiaries, affiliates, and employees.
              </li>
              <li>
                “Services” refers to all IT solutions, SaaS platforms, digital
                consulting, and software development services offered by the
                Company.
              </li>
              <li>
                “User” refers to any individual, business, or organization
                accessing or using our services, either directly or indirectly.
              </li>
              <li>
                “Agreement” refers to this document and any additional service
                agreements between the Company and the User.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              3. Scope of Services
            </h2>
            <p>Frame Digital Solution Pvt. Ltd. provides:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Custom Software Development (Web, Mobile, Cloud, Enterprise
                Solutions)
              </li>
              <li>SaaS Solutions (Software as a Service)</li>
              <li>AI & Machine Learning Applications</li>
              <li>Cloud Migration, Management, and Security</li>
              <li>IT Consulting, Cybersecurity, and Digital Transformation</li>
              <li>
                Enterprise Resource Planning (ERP) and Automation Solutions
              </li>
              <li>E-commerce, FinTech, and Payment Gateway Solutions</li>
            </ul>
            <p>
              All services are provided in accordance with agreed-upon project
              timelines, specifications, and contractual obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              4. User Obligations
            </h2>
            <p>By accessing our services, you agree to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Provide accurate, current, and complete information during
                registration or when required.
              </li>
              <li>
                Maintain the confidentiality of your account credentials and be
                responsible for all activities under your account.
              </li>
              <li>
                Comply with all applicable laws and regulations related to
                software usage, cybersecurity, and data privacy.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
