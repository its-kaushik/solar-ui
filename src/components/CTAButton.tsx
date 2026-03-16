import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    'bg-primary text-text-inverse hover:bg-primary-light',
  secondary:
    'bg-secondary text-text hover:bg-secondary-light',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-text-inverse',
};

export default function CTAButton({
  text,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl px-6 font-heading text-base font-semibold transition-colors duration-200 min-h-12 h-12';

  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </Link>
  );
}
