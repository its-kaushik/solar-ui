import type { LucideIcon } from 'lucide-react';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function StepCard({ step, title, description, icon: Icon }: StepCardProps) {
  return (
    <div className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
      {/* Step number + icon */}
      <div className="relative flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-text-inverse">
          <Icon className="h-6 w-6" />
        </div>
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-text">
          {step}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-heading text-base font-bold text-text">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-text-light">{description}</p>
      </div>
    </div>
  );
}
