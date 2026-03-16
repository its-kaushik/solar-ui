import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

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
    value: 'info@kaushiksolarpower.com',
    href: 'mailto:info@kaushiksolarpower.com',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'South Delhi, Faridabad, Gurgaon',
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

              {/* Trust note */}
              <div className="mt-6 rounded-xl bg-accent/5 border border-accent/20 p-4">
                <p className="text-xs text-text-light">
                  <span className="font-semibold text-text">BSES Rajdhani registered vendor.</span>{' '}
                  MNRE enrolled. All installations comply with DISCOM regulations and qualify for
                  PM Surya Ghar subsidy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map placeholder */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Service Area"
          subtitle="We serve South Delhi (subsidy-eligible via BSES Rajdhani), Faridabad, and Gurgaon."
        />
        <div className="mx-auto max-w-3xl">
          <div className="flex h-64 items-center justify-center rounded-2xl bg-bg">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-primary/30" />
              <p className="mt-2 text-sm text-text-light">Google Maps embed will be added here</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-bg p-4 text-center">
              <p className="text-sm font-semibold text-text">South Delhi</p>
              <p className="mt-0.5 text-xs text-accent font-medium">Subsidy Eligible</p>
            </div>
            <div className="rounded-xl bg-bg p-4 text-center">
              <p className="text-sm font-semibold text-text">Faridabad</p>
              <p className="mt-0.5 text-xs text-text-light">Non-subsidy</p>
            </div>
            <div className="rounded-xl bg-bg p-4 text-center">
              <p className="text-sm font-semibold text-text">Gurgaon</p>
              <p className="mt-0.5 text-xs text-text-light">Non-subsidy</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
