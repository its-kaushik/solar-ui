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

import SocialLinks from '@/components/SocialLinks';
import HeroSection from '@/components/HeroSection';
import SubsidyStrip from '@/components/SubsidyStrip';
import BrandsSection from '@/components/BrandsSection';
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
  title: 'RS Solar Infrastructure — Rooftop Solar in Faridabad, Palwal & Gurugram',
  description:
    'Switch to rooftop solar across South Haryana and claim up to ₹78,000 under PM Surya Ghar. DHBVN registered and MNRE enrolled, with a free site visit and 5 years of maintenance.',
  openGraph: {
    title: 'RS Solar Infrastructure — Rooftop Solar in Faridabad, Palwal & Gurugram',
    description:
      'Rooftop solar installation across South Haryana with up to ₹78,000 PM Surya Ghar subsidy.',
    type: 'website',
  },
};

const uspItems = [
  {
    icon: Shield,
    title: 'DHBVN Registered',
    description: 'An approved vendor with DHBVN, so your net meter and subsidy paperwork move smoothly across Faridabad, Palwal, and Gurugram.',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: Award,
    title: 'MNRE Enrolled',
    description: 'Our enrolment with the Ministry of New and Renewable Energy means every system is built to certified quality and compliance norms.',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
  },
  {
    icon: Wrench,
    title: 'Turnkey Installation',
    description: 'Mounting structure, panels, inverter, earthing, lightning arrestor, and the net meter — the entire setup is delivered by one team.',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
  },
  {
    icon: FileCheck,
    title: 'Subsidy Handled For You',
    description: 'We file your PM Surya Ghar claim, coordinate with HAREDA, and complete the DHBVN net-metering formalities end to end.',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/10',
  },
  {
    icon: HeartHandshake,
    title: '5 Years Free Maintenance',
    description: 'Three service visits each year cover panel cleaning, inverter checks, an overall health review, and performance tracking.',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
  },
  {
    icon: Banknote,
    title: 'Easy Financing',
    description: 'Need funding? We guide you through solar loan applications so you can get started with very little money down.',
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-500/10',
  },
];

const serviceItems = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'On-grid, off-grid, and hybrid setups for homes, with PM Surya Ghar subsidy eligibility built in.',
    href: '/services/residential',
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Rooftop systems that scale for shops, factories, and group housing — cut your monthly power bills sharply.',
    href: '/services/commercial',
  },
  {
    icon: Settings,
    title: 'Maintenance & AMC',
    description: 'Five years of upkeep at no cost, with affordable AMC plans afterward to keep output at its peak.',
    href: '/services/maintenance',
  },
];

const stepItems = [
  {
    icon: PhoneIcon,
    title: 'Free Consultation',
    description: 'Reach out by phone, WhatsApp, or the form. We listen to what you need and clear up every question you have.',
  },
  {
    icon: ClipboardCheck,
    title: 'Site Survey & Design',
    description: 'We come to your rooftop, check the structure, study the shadow pattern, and draw up the best-fit layout.',
  },
  {
    icon: HardHat,
    title: 'Installation',
    description: 'Skilled technicians fit the structure, panels, inverter, safety gear, and wiring — usually wrapped up in a day or two.',
  },
  {
    icon: Gauge,
    title: 'Net Metering & Approval',
    description: 'The net meter goes in and we liaise with DHBVN for grid sync and the official inspection.',
  },
  {
    icon: FileText,
    title: 'Subsidy Application',
    description: 'Your PM Surya Ghar claim and HAREDA documentation are prepared and submitted entirely by us.',
  },
  {
    icon: Sun,
    title: 'Enjoy Clean Solar Power',
    description: 'Your bills start dropping right away, and every install comes with five years of free maintenance.',
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
            name: 'RS Solar Infrastructure Private Limited',
            description: 'Rooftop solar panel installation across South Haryana with government subsidy assistance.',
            url: 'https://www.rssolarinfrastructure.com',
            telephone: phone ? `+91${phone}` : undefined,
            email: 'rssolarinfra@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Faridabad',
              addressRegion: 'Haryana',
              addressCountry: 'IN',
            },
            areaServed: [
              { '@type': 'City', name: 'Faridabad' },
              { '@type': 'City', name: 'Palwal' },
              { '@type': 'City', name: 'Gurugram' },
            ],
            hasMap: 'https://maps.app.goo.gl/Uq22636vrX41PDYP9',
            serviceType: 'Solar Panel Installation',
            sameAs: [
              'https://www.instagram.com/rssolarinfra',
              'https://www.facebook.com/rssolarinfra/',
              'https://x.com/rssolarinfra',
            ],
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
          title="Why Choose RS Solar Infrastructure?"
          subtitle="Verified credentials, a single team for the whole job, and quality we stand behind."
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {uspItems.map((item) => (
            <USPCard key={item.title} {...item} />
          ))}
        </div>
      </SectionWrapper>

      {/* 3b. Brands / Equipment We Install */}
      <SectionWrapper>
        <SectionHeading
          title="Equipment & Brands We Install"
          subtitle="We fit tier-1 solar panels and inverters from trusted manufacturers — so you get reliable, warranty-backed hardware."
        />
        <div className="mt-8">
          <BrandsSection />
        </div>
      </SectionWrapper>

      {/* 4. Our Services */}
      <SectionWrapper className="bg-bg-white">
        <SectionHeading
          title="Our Services"
          subtitle="Full-stack solar solutions for households and businesses alike."
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
          subtitle="Six straightforward steps take you from first call to clean rooftop power."
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
          subtitle="See how quickly a standard 3KW home system earns back its cost."
        />
        <SavingsSnapshot />
      </SectionWrapper>

      {/* 7. Testimonials */}
      <SectionWrapper>
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Honest feedback from families who made the move to solar."
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
          subtitle="A look at recent rooftop installations across South Haryana."
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
          subtitle="Guides on solar technology, subsidy schemes, and how the savings add up."
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
          subtitle="Drop your details in the form, or just call or WhatsApp us directly."
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
                  href="mailto:rssolarinfra@gmail.com"
                  className="flex items-center gap-3 rounded-xl bg-primary/10 p-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <Mail className="h-5 w-5" />
                  rssolarinfra@gmail.com
                </a>

                <div className="flex items-start gap-3 rounded-xl bg-primary/10 p-3 text-sm text-text">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Faridabad, Haryana</span>
                </div>

                <SocialLinks iconClassName="text-text-light hover:text-primary" />
              </div>

              {/* Service area note */}
              <div className="mt-6 rounded-xl border border-secondary/30 bg-secondary/5 p-3">
                <p className="text-xs text-text-light">
                  <span className="font-semibold text-text">Service Areas:</span> Faridabad, Palwal &amp; Gurugram across South Haryana, including Ballabgarh, Sohna &amp; Manesar
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
