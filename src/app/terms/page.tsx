import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for using the Raytrix Energy website and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-gray-300">Last updated: March 2026</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="prose prose-sm mx-auto max-w-3xl text-text prose-headings:font-heading prose-headings:text-text prose-p:text-text-light prose-li:text-text-light prose-a:text-primary">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the website of Raytrix Energy (OPC) Private Limited
            (&ldquo;raytrixenergy.com&rdquo;), you agree to be bound by these Terms and Conditions. If you
            do not agree with any part of these terms, please do not use the website.
          </p>

          <h2>2. About the Company</h2>
          <p>
            Raytrix Energy (OPC) Private Limited is a registered One Person Company providing solar power
            system installation services. The company is registered with BSES Rajdhani Power Ltd
            (BRPL) as an authorized solar installation vendor and is enrolled with the Ministry of
            New and Renewable Energy (MNRE).
          </p>

          <h2>3. Services</h2>
          <p>
            The website provides information about our solar installation services, government
            subsidies, and related products. The information on this website is for general
            informational purposes only and does not constitute a binding offer or contract.
          </p>
          <p>
            Actual service terms, pricing, system specifications, and timelines are agreed upon
            through separate written agreements between the customer and Raytrix Energy.
          </p>

          <h2>4. Subsidy & Financial Information</h2>
          <p>
            All subsidy amounts, Generation-Based Incentive (GBI) rates, and financial estimates
            mentioned on this website are based on current government policies and are subject to
            change without notice. Specifically:
          </p>
          <ul>
            <li>PM Surya Ghar subsidy amounts are determined by the central government and may be revised</li>
            <li>Delhi state subsidy and GBI rates are subject to the Delhi government&apos;s solar policy</li>
            <li>Savings estimates from the solar calculator are approximate and depend on actual site conditions, electricity consumption patterns, roof orientation, shading, and other factors</li>
            <li>Subsidy disbursement timelines are indicative and depend on government processing</li>
          </ul>
          <p>
            Raytrix Energy does not guarantee specific subsidy amounts or disbursement
            timelines, as these are controlled by government authorities.
          </p>

          <h2>5. Solar Calculator</h2>
          <p>
            The solar calculator tool on this website provides approximate estimates only. Actual
            system costs, generation, savings, and payback periods may vary based on:
          </p>
          <ul>
            <li>Roof area, orientation, and shading conditions</li>
            <li>Actual electricity consumption patterns</li>
            <li>Equipment chosen (panel brand, inverter type, battery)</li>
            <li>Current electricity tariff rates</li>
            <li>Weather and seasonal variations</li>
          </ul>
          <p>
            For accurate quotations, please contact us for a free site survey and consultation.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and design — is
            the property of Raytrix Energy (OPC) Private Limited and is protected by applicable
            intellectual property laws. You may not reproduce, distribute, or use any content from
            this website without our prior written consent.
          </p>

          <h2>7. User Submissions</h2>
          <p>
            When you submit information through our contact form, you agree that:
          </p>
          <ul>
            <li>The information you provide is accurate and complete</li>
            <li>You consent to being contacted by Raytrix Energy regarding your inquiry</li>
            <li>Your submission is subject to our Privacy Policy</li>
          </ul>

          <h2>8. Limitation of Liability</h2>
          <p>
            Raytrix Energy makes every effort to ensure the accuracy of information on this
            website. However, we do not warrant that the content is error-free, complete, or
            up-to-date at all times. We shall not be liable for any loss or damage arising from the
            use of information provided on this website.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            This website may contain links to external websites such as government portals (PM Surya
            Ghar, BSES Rajdhani). These links are provided for convenience only. We have no control
            over the content or availability of external sites and are not responsible for their
            content or practices.
          </p>

          <h2>10. Warranty & After-Sales</h2>
          <p>
            Warranty terms for solar equipment (panels, inverters, batteries) are provided by the
            respective manufacturers. Maintenance and after-sales service terms from Raytrix Energy
            are outlined in the installation agreement provided at the time of purchase.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of
            India. Any disputes arising from the use of this website shall be subject to the
            exclusive jurisdiction of courts in Delhi.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be
            effective immediately upon posting on this page. Continued use of the website after
            changes constitutes acceptance of the revised terms.
          </p>

          <h2>13. Contact</h2>
          <p>
            For questions about these Terms and Conditions, please contact us:
          </p>
          <ul>
            <li>Email: raytrixenergy@gmail.com</li>
            <li>Phone: Available on our Contact page</li>
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
