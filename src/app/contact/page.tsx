import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';
import SocialLinks from '@/components/SocialLinks';
import { offices } from '@/data/offices';

export const metadata: Metadata = {
  title: 'Contact Us — Free Solar Consultation',
  description:
    'Get a free consultation for rooftop solar installation in Delhi. Call, WhatsApp, or fill the form — we respond within 24 hours.',
};

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: process.env.NEXT_PUBLIC_PHONE_NUMBER
      ? `+91 ${process.env.NEXT_PUBLIC_PHONE_NUMBER}`
      : 'Available on request',
    href: process.env.NEXT_PUBLIC_PHONE_NUMBER
      ? `tel:+91${process.env.NEXT_PUBLIC_PHONE_NUMBER}`
      : undefined,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'raytrixenergy@gmail.com',
    href: 'mailto:raytrixenergy@gmail.com',
  },
  ...offices.map((office) => ({
    icon: MapPin,
    label: office.label,
    value: office.fullAddress,
    href: office.mapsUrl,
  })),
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Delhi, Faridabad, Gurgaon',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Get a free consultation — we&apos;ll tell you exactly how much you can save with rooftop solar.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form — takes 3 columns */}
            <div className="lg:col-span-3">
              <SectionHeading title="Send Us a Message" />
              <ContactForm />
            </div>

            {/* Contact info sidebar — takes 2 columns */}
            <div className="lg:col-span-2">
              <SectionHeading title="Other Ways to Reach Us" />

              {/* Quick action buttons */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <WhatsAppButton className="flex-1" />
                <CallButton className="flex-1" />
              </div>

              {/* Contact details */}
              <div className="mt-6 space-y-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <detail.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-light">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm font-medium text-text hover:text-primary"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-text">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social media */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-light">
                  Follow Us
                </p>
                <SocialLinks className="mt-2" iconClassName="text-text-light hover:text-primary" />
              </div>

              {/* Trust note */}
              <div className="mt-6 rounded-xl bg-accent/5 border border-accent/20 p-4">
                <p className="text-xs text-text-light">
                  <span className="font-semibold text-text">BSES registered vendor.</span>{' '}
                  MNRE enrolled. All installations comply with DISCOM regulations and qualify for
                  PM Surya Ghar subsidy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Offices & service area */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Our Offices & Service Area"
          subtitle="Offices in Delhi and Faridabad, serving Delhi, Faridabad, and Gurgaon — all eligible for the central PM Surya Ghar subsidy, with Delhi also getting the state top-up."
        />
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {offices.map((office) => (
              <a
                key={office.label}
                href={office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl bg-bg transition-colors hover:bg-primary/5"
              >
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Raytrix Energy ${office.label} on Google Maps`}
                  className="pointer-events-none"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-text">{office.label}</p>
                  <p className="mt-0.5 text-xs text-text-light">{office.fullAddress}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Link href="/services/residential" className="rounded-xl bg-bg p-4 text-center transition-colors hover:bg-primary/5">
              <p className="text-sm font-semibold text-text">Delhi</p>
              <p className="mt-0.5 text-xs text-accent font-medium">Up to ₹1,56,000 subsidy</p>
            </Link>
            <Link href="/service-areas/faridabad" className="rounded-xl bg-bg p-4 text-center transition-colors hover:bg-primary/5">
              <p className="text-sm font-semibold text-text">Faridabad</p>
              <p className="mt-0.5 text-xs text-accent font-medium">Up to ₹78,000 subsidy</p>
            </Link>
            <Link href="/service-areas/gurgaon" className="rounded-xl bg-bg p-4 text-center transition-colors hover:bg-primary/5">
              <p className="text-sm font-semibold text-text">Gurgaon</p>
              <p className="mt-0.5 text-xs text-accent font-medium">Up to ₹78,000 subsidy</p>
            </Link>
          </div>
          <p className="mt-3 text-center text-xs text-text-light">
            Faridabad &amp; Gurgaon (Haryana) receive the central PM Surya Ghar subsidy of up to ₹78,000. The
            additional Delhi state subsidy and GBI apply to Delhi (BSES) connections only.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
