import type { LucideIcon } from 'lucide-react';

interface USPCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function USPCard({ title, description, icon: Icon }: USPCardProps) {
  return (
    <div className="rounded-2xl bg-bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-heading text-lg font-bold text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-light">{description}</p>
    </div>
  );
}
