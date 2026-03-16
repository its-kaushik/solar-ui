import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'Residential Solar', href: '/services/residential' },
      { label: 'Commercial Solar', href: '/services/commercial' },
      { label: 'Maintenance & AMC', href: '/services/maintenance' },
    ],
  },
  subsidy: {
    title: 'Subsidy Guide',
    links: [
      { label: 'PM Surya Ghar Yojana', href: '/subsidy-guide/pm-surya-ghar' },
      { label: 'Delhi State Subsidy', href: '/subsidy-guide/delhi-state-subsidy' },
      { label: 'How to Apply', href: '/subsidy-guide/how-to-apply' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Work', href: '/our-work' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
};

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  return (
    <footer className="bg-primary-dark pb-16 text-text-inverse lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top section: brand + link columns */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-xl font-bold text-white">
              Kaushik Solar Power
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              Powering Delhi, One Rooftop at a Time
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              {phone && (
                <a
                  href={`tel:+91${phone}`}
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +91 {phone}
                </a>
              )}
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              )}
              <a
                href="mailto:info@kaushiksolar.com"
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@kaushiksolar.com
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>South Delhi, New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Credentials & badges */}
        <div className="mt-10 border-t border-gray-700 pt-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
            <span>MNRE Enrolled</span>
            <span className="hidden sm:inline">|</span>
            <span>BSES Rajdhani Registered</span>
            <span className="hidden sm:inline">|</span>
            <span>PM Surya Ghar Empaneled</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kaushik Solar Power OPC Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
