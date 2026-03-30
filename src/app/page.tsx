import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Award,
  Wrench,
  FileCheck,
  HeartHandshake,
  Banknote,
  Home,
  Building2,
  Settings,
  Phone as PhoneIcon,
  ClipboardCheck,
  HardHat,
  Gauge,
  FileText,
  Sun,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import SubsidyStrip from '@/components/SubsidyStrip';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import USPCard from '@/components/USPCard';
import ServiceCard from '@/components/ServiceCard';
import StepCard from '@/components/StepCard';
import SavingsSnapshot from '@/components/SavingsSnapshot';
import TestimonialCard from '@/components/TestimonialCard';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import ContactForm from '@/components/ContactForm';
import CTAButton from '@/components/CTAButton';

import { testimonials } from '@/data/testimonials';
import { projects } from '@/data/projects';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Raytrix Energy — Rooftop Solar Installation in Delhi',
  description:
    'Get rooftop solar panels installed in Delhi with up to ₹1,08,000 government subsidy. BSES registered, MNRE enrolled. Free consultation & 5 years maintenance.',
  openGraph: {
    title: 'Raytrix Energy — Rooftop Solar Installation in Delhi',
    description:
      'Get rooftop solar panels installed in Delhi with up to ₹1,08,000 government subsidy.',
    type: 'website',
  },
};

const uspItems = [
  {
    icon: Shield,
    title: 'BSES Registered',
    description: 'Officially registered with BSES DISCOM for net metering and subsidy projects in Delhi.',
  },
  {
    icon: Award,
    title: 'MNRE Enrolled',
    description: 'Enrolled with the Ministry of New and Renewable Energy, ensuring quality standards and compliance.',
  },
  {
    icon: Wrench,
    title: 'End-to-End Installation',
    description: 'From structure and panels to inverter, earthing, lightning arrestor, and net meter — we handle everything.',
  },
  {
    icon: FileCheck,
    title: 'Full Subsidy Assistance',
    description: 'We manage the complete subsidy application process — PM Surya Ghar, Delhi state subsidy, and DISCOM paperwork.',
  },
  {
    icon: HeartHandshake,
    title: '5 Years Free Maintenance',
    description: '3 visits per year for panel cleaning, system health check, inverter inspection, and performance monitoring.',
  },
  {
    icon: Banknote,
    title: 'Loan & Financing Help',
    description: 'We help you apply for solar loans so you can go solar with minimal upfront investment.',
  },
];

const serviceItems = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'On-Grid, Off-Grid, and Hybrid systems for homes. Subsidy eligible under PM Surya Ghar Yojana.',
    href: '/services/residential',
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Scalable rooftop solar for offices, factories, and housing societies. Reduce electricity costs significantly.',
    href: '/services/commercial',
  },
  {
    icon: Settings,
    title: 'Maintenance & AMC',
    description: '5 years free maintenance included. Paid AMC options after that. Keep your system running at peak efficiency.',
    href: '/services/maintenance',
  },
];

const stepItems = [
  {
    icon: PhoneIcon,
    title: 'Free Consultation',
    description: 'Contact us via call, WhatsApp, or form. We understand your requirements and answer all your questions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Site Survey & Design',
    description: 'Our team visits your site, inspects the roof, analyzes shading, and designs the optimal system layout.',
  },
  {
    icon: HardHat,
    title: 'Installation',
    description: 'Professional installation of structure, panels, inverter, safety equipment, and wiring. Typically 1-2 days.',
  },
  {
    icon: Gauge,
    title: 'Net Metering & Approval',
    description: 'We install the net meter and coordinate with BSES for grid synchronization and DISCOM inspection.',
  },
  {
    icon: FileText,
    title: 'Subsidy Application',
    description: 'We handle the complete PM Surya Ghar and Delhi state subsidy paperwork on your behalf.',
  },
  {
    icon: Sun,
    title: 'Enjoy Free Solar Power',
    description: 'Start saving on electricity bills from day one. 5 years free maintenance included with every installation.',
  },
];

const blogPosts = getAllPosts().slice(0, 3);

export default function HomePage() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Raytrix Energy (OPC) Private Limited',
            description: 'Rooftop solar panel installation in Delhi with government subsidy assistance.',
            url: 'https://www.raytrixenergy.com',
            telephone: phone ? `+91${phone}` : undefined,
            email: 'raytrixenergy@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Delhi',
              addressRegion: 'Delhi',
              addressCountry: 'IN',
            },
            areaServed: [
              { '@type': 'City', name: 'Delhi' },
              { '@type': 'City', name: 'Faridabad' },
              { '@type': 'City', name: 'Gurgaon' },
            ],
            serviceType: 'Solar Panel Installation',
          }),
        }}
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Subsidy Highlight Strip */}
      <SubsidyStrip />

      {/* 3. Why Choose Us */}
      <SectionWrapper>
        <SectionHeading
          title="Why Choose Raytrix Energy?"
          subtitle="Trusted credentials, end-to-end service, and a commitment to quality."
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {uspItems.map((item) => (
            <USPCard key={item.title} {...item} />
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Our Services */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Our Services"
          subtitle="Complete solar solutions for homes and businesses."
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {serviceItems.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </SectionWrapper>

      {/* 5. How It Works */}
      <SectionWrapper>
        <SectionHeading
          title="How It Works"
          subtitle="From consultation to free solar power in 6 simple steps."
        />
        <div className="grid gap-8 md:gap-6 lg:grid-cols-6">
          {stepItems.map((item, i) => (
            <StepCard key={item.title} step={i + 1} {...item} />
          ))}
        </div>
      </SectionWrapper>

      {/* 6. Savings Snapshot */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Your Savings at a Glance"
          subtitle="See how a typical 3KW residential system pays for itself."
        />
        <SavingsSnapshot />
      </SectionWrapper>

      {/* 7. Testimonials */}
      <SectionWrapper>
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Real experiences from homeowners who switched to solar."
        />
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </SectionWrapper>

      {/* 8. Portfolio Preview */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Our Work"
          subtitle="Recent solar installations across Delhi-NCR."
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTAButton text="View All Projects" href="/our-work" variant="outline" />
        </div>
      </SectionWrapper>

      {/* 9. Blog Preview */}
      <SectionWrapper>
        <SectionHeading
          title="Solar Knowledge Hub"
          subtitle="Learn about solar energy, subsidies, and savings."
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light"
          >
            Read More Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* 10. Contact / Lead Capture Section */}
      <SectionWrapper id="contact" className="bg-bg-white">
        <SectionHeading
          title="Get a Free Consultation"
          subtitle="Fill the form below or reach out via WhatsApp or call."
        />
        <div className="grid gap-8 md:grid-cols-5">
          {/* Form — 60% */}
          <div className="md:col-span-3">
            <ContactForm compact />
          </div>

          {/* Contact info — 40% */}
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-bg p-6">
              <h3 className="font-heading text-lg font-bold text-text">Other Ways to Reach Us</h3>

              <div className="mt-4 space-y-4">
                {whatsapp && (
                  <a
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi, I'm interested in rooftop solar installation. Please share more details.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#25D366]/10 p-3 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                )}

                {phone && (
                  <a
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-3 rounded-xl bg-primary/10 p-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    <Phone className="h-5 w-5" />
                    +91 {phone}
                  </a>
                )}

                <a
                  href="mailto:raytrixenergy@gmail.com"
                  className="flex items-center gap-3 rounded-xl bg-primary/10 p-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <Mail className="h-5 w-5" />
                  raytrixenergy@gmail.com
                </a>

                <div className="flex items-start gap-3 rounded-xl bg-primary/10 p-3 text-sm text-text-light">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Delhi, India</span>
                </div>
              </div>

              {/* Service area note */}
              <div className="mt-6 rounded-xl border border-secondary/30 bg-secondary/5 p-3">
                <p className="text-xs text-text-light">
                  <span className="font-semibold text-text">Service Areas:</span> Delhi (subsidy projects), Faridabad & Gurgaon (non-subsidy projects)
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
