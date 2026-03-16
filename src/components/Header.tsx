'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services/residential',
    children: [
      { label: 'Residential Solar', href: '/services/residential' },
      { label: 'Commercial Solar', href: '/services/commercial' },
      { label: 'Maintenance & AMC', href: '/services/maintenance' },
    ],
  },
  { label: 'Subsidy Guide', href: '/subsidy-guide' },
  { label: 'Solar Calculator', href: '/solar-calculator' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold text-primary sm:text-xl">
            Kaushik Solar Power
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text transition-colors hover:bg-bg hover:text-primary"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-48 rounded-xl border border-gray-200 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-text transition-colors hover:bg-bg hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:+91${phone}`}
            aria-label="Call us"
            className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-primary transition-colors hover:bg-bg"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1da851]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile: call button + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:+91${phone}`}
            aria-label="Call us"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-bg"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-bg"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden">
          <nav className="flex flex-col p-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 items-center rounded-lg px-4 text-base font-medium text-text transition-colors active:bg-bg"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex h-12 items-center rounded-lg px-4 text-sm text-text-light transition-colors active:bg-bg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile menu CTA buttons */}
            <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] font-semibold text-white transition-colors hover:bg-[#1da851]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+91${phone}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary font-semibold text-text-inverse transition-colors hover:bg-primary-light"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
