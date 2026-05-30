import type { LucideIcon } from 'lucide-react';

interface USPCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind text-color class for the icon, e.g. "text-amber-500". */
  iconColor?: string;
  /** Tailwind bg-color class for the icon tile, e.g. "bg-amber-500/10". */
  iconBg?: string;
}

export default function USPCard({
  title,
  description,
  icon: Icon,
  iconColor = 'text-primary',
  iconBg = 'bg-primary/10',
}: USPCardProps) {
  return (
    <div className="rounded-2xl bg-bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="font-heading text-lg font-bold text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-light">{description}</p>
    </div>
  );
}
