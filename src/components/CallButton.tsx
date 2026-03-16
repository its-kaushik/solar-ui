import { Phone } from 'lucide-react';

interface CallButtonProps {
  className?: string;
}

export default function CallButton({ className = '' }: CallButtonProps) {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';
  const href = `tel:+91${phone}`;

  return (
    <a
      href={href}
      aria-label="Call us"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 font-semibold text-text-inverse transition-colors duration-200 hover:bg-primary-light min-h-12 h-12 ${className}`}
    >
      <Phone className="h-5 w-5" />
      <span className="hidden sm:inline">Call Us</span>
    </a>
  );
}
