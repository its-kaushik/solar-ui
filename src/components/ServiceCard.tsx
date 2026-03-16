import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl bg-bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
        <Icon className="h-6 w-6 text-secondary" />
      </div>
      <h3 className="font-heading text-lg font-bold text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-light">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-primary-light">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
