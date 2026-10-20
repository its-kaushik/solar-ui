'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Mail, MessageCircle, Send } from 'lucide-react';
import type { CalculatorInput, CalculatorResult } from '@/types';
import { trackCalculatorCTA } from '@/lib/analytics';
import { formatCurrency } from '@/lib/format';

interface CalculatorLeadCaptureProps {
  input: CalculatorInput;
  result: CalculatorResult;
}

const AREA_LABELS: Record<CalculatorInput['area'], string> = {
  'south-delhi': 'Delhi',
  faridabad: 'Faridabad',
  gurgaon: 'Gurgaon',
};

const inputClassName =
  'h-12 w-full rounded-xl border border-gray-300 bg-bg-white px-4 text-base text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

function buildSummary(input: CalculatorInput, result: CalculatorResult): string[] {
  const lines = [
    `Monthly usage: ${input.monthlyUnits} units`,
    `Area: ${AREA_LABELS[input.area]}`,
    `Property: ${input.propertyType === 'residential' ? 'Residential' : 'Commercial'}`,
    `Suggested system: ${result.systemSizeKW} KW`,
  ];
  if (result.totalSubsidy > 0) {
    lines.push(`Estimated subsidy: ${formatCurrency(result.totalSubsidy)}`);
  }
  return lines;
}

export default function CalculatorLeadCapture({ input, result }: CalculatorLeadCaptureProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const summary = buildSummary(input, result);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    trackCalculatorCTA(result.systemSizeKW, 'whatsapp');
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
    const message = `Hi Raytrix, I used your solar calculator:\n${summary
      .map((line) => `• ${line}`)
      .join('\n')}\n\nPlease share my exact price.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
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
          email: formData.email,
          propertyType: input.propertyType,
          location: AREA_LABELS[input.area],
          message: `Solar calculator: wants exact price by email. ${summary.join(' · ')}`,
          source: 'calculator',
        }),
      });

      if (res.ok) {
        setStatus('success');
        trackCalculatorCTA(result.systemSizeKW, 'email');
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
        <CheckCircle2 className="mx-auto h-8 w-8 text-accent" />
        <p className="mt-2 font-heading text-lg font-bold text-accent">Thank you, {formData.name}!</p>
        <p className="mt-1 text-sm text-text-light">
          We&apos;ll email your exact price to {formData.email} within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-primary/5 p-6">
      <p className="font-heading text-base font-bold text-text">Get your exact price</p>
      <p className="mt-0.5 text-sm text-text-light">
        Your price depends on your roof, panel brand and inverter. Free, no obligation.
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
        >
          <MessageCircle className="h-5 w-5" />
          Get it on WhatsApp
        </button>
        <button
          type="button"
          onClick={() => setShowEmailForm(true)}
          aria-expanded={showEmailForm}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary px-5 font-heading text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          <Mail className="h-5 w-5" />
          Get it by Email
        </button>
      </div>

      {showEmailForm && (
        <form onSubmit={handleSubmit} className="mt-5 space-y-3 border-t border-primary/10 pt-5">
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

          <div>
            <label htmlFor="calc-name" className="mb-1 block text-sm font-medium text-text">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="calc-name"
              name="name"
              required
              minLength={2}
              maxLength={100}
              autoFocus
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="calc-email" className="mb-1 block text-sm font-medium text-text">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="calc-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="calc-phone" className="mb-1 block text-sm font-medium text-text">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="calc-phone"
              name="phone"
              required
              pattern="[6-9]\d{9}"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={inputClassName}
            />
            <p className="mt-1 text-xs text-text-light">In case we need to check a detail about your roof.</p>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 font-heading text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-light disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Email Me My Price
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-sm text-red-500">
              Something went wrong. Please try WhatsApp or call us directly.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
