'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function MobileCTABar() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const message = encodeURIComponent(
    "Hi, I'm interested in rooftop solar installation. Please share more details."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-14 border-t border-gray-200 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] lg:hidden">
      <a
        href={`tel:+91${phone}`}
        aria-label="Call us"
        className="flex flex-1 items-center justify-center gap-2 font-semibold text-primary transition-colors active:bg-gray-50"
      >
        <Phone className="h-5 w-5" />
        <span>Call Now</span>
      </a>
      <div className="w-px bg-gray-200" />
      <a
        href={`https://wa.me/${whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex flex-1 items-center justify-center gap-2 font-semibold text-[#25D366] transition-colors active:bg-gray-50"
      >
        <MessageCircle className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
