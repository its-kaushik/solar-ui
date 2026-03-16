'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    location: '',
    message: '',
    website: '', // honeypot
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          propertyType: formData.propertyType,
          location: formData.location,
          message: formData.message || undefined,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', propertyType: '', location: '', message: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-accent/10 p-6 text-center">
        <p className="font-heading text-lg font-bold text-accent">Thank you!</p>
        <p className="mt-2 text-sm text-text-light">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className="absolute -left-[9999px] opacity-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-text">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-text">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[6-9]\d{9}"
            maxLength={10}
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-text">
            Email <span className="text-text-light">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      )}

      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <div>
          <label htmlFor="propertyType" className="mb-1 block text-sm font-medium text-text">
            Property Type <span className="text-red-500">*</span>
          </label>
          <select
            id="propertyType"
            name="propertyType"
            required
            value={formData.propertyType}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="mb-1 block text-sm font-medium text-text">
            Location / Area <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            minLength={3}
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Saket, South Delhi"
            className="h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-text">
            Message <span className="text-text-light">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            maxLength={500}
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            className="w-full rounded-xl border border-gray-300 bg-bg-white px-4 py-3 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 font-heading text-base font-semibold text-text-inverse transition-colors hover:bg-primary-light disabled:opacity-50 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Get Free Consultation
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try WhatsApp or call us directly.
        </p>
      )}
    </form>
  );
}
