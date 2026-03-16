'use client';

import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppFloatingButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const message = encodeURIComponent(
    "Hi, I'm interested in rooftop solar installation. Please share more details."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackWhatsAppClick('floating', 'general')}
      className="fixed bottom-20 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 lg:bottom-8 lg:right-8"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
