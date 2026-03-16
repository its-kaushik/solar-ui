import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Kaushik Solar Power OPC Pvt Ltd. How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-300">Last updated: March 2026</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="prose prose-sm mx-auto max-w-3xl text-text prose-headings:font-heading prose-headings:text-text prose-p:text-text-light prose-li:text-text-light prose-a:text-primary">
          <h2>1. Introduction</h2>
          <p>
            Kaushik Solar Power OPC Pvt Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is
            committed to protecting the personal information you share with us through our website
            kaushiksolarpower.com (&ldquo;the Website&rdquo;).
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use it, and your rights
            regarding your data.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect only the information you voluntarily provide through our contact form:</p>
          <ul>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address (if provided)</li>
            <li>Property type (residential or commercial)</li>
            <li>Location / area</li>
            <li>Message or requirements (if provided)</li>
          </ul>
          <p>
            We do not collect sensitive personal data such as financial information, Aadhaar numbers,
            or PAN details through the website. Any such documents required for subsidy applications
            are collected separately through secure, direct communication.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>The information you provide is used solely for the following purposes:</p>
          <ul>
            <li>Responding to your inquiry within 24 hours</li>
            <li>Providing a solar system quote and consultation</li>
            <li>Scheduling site surveys</li>
            <li>Following up on your interest in our services</li>
            <li>Improving our services and customer experience</li>
          </ul>

          <h2>4. Data Storage & Security</h2>
          <p>
            Your contact form submissions are stored securely and access is restricted to authorized
            personnel at Kaushik Solar Power. We use industry-standard security measures to protect
            your data from unauthorized access, alteration, or destruction.
          </p>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell, rent, or share your personal information with third parties for marketing
            purposes. Your information may be shared only in the following circumstances:
          </p>
          <ul>
            <li>With service providers who assist in operating our website (e.g., email delivery services)</li>
            <li>When required by law or legal process</li>
            <li>With your explicit consent</li>
          </ul>

          <h2>6. Cookies & Analytics</h2>
          <p>
            Our website may use cookies and third-party analytics services (such as Google Analytics)
            to understand how visitors use the site. These tools collect anonymous usage data such as
            pages visited, time spent, and referring sources. No personally identifiable information
            is collected through analytics.
          </p>
          <p>
            You can disable cookies through your browser settings at any time.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites such as PM Surya Ghar portal
            (pmsuryaghar.gov.in), BSES Rajdhani, or government resources. We are not responsible for
            the privacy practices of these external websites.
          </p>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Withdraw consent for us to contact you</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details provided below.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected on
            this page with an updated &ldquo;Last updated&rdquo; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how we handle your data, please
            contact us:
          </p>
          <ul>
            <li>Email: info@kaushiksolarpower.com</li>
            <li>Phone: Available on our Contact page</li>
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
