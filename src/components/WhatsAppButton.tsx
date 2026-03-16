import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ message, className = '' }: WhatsAppButtonProps) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const defaultMessage = "Hi, I'm interested in rooftop solar installation. Please share more details.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  const href = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 font-semibold text-white transition-colors duration-200 hover:bg-[#1da851] min-h-12 h-12 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
