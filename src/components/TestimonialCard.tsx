import { Star, MapPin, Zap } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="w-[300px] flex-shrink-0 snap-center rounded-2xl bg-bg-white p-6 shadow-md sm:w-[350px]">
      {/* Stars */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-secondary text-secondary' : 'text-gray-200'}`}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm leading-relaxed text-text-light">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      {/* Customer info */}
      <div className="mt-4 border-t border-gray-100 pt-4">
        <p className="font-heading text-sm font-bold text-text">{testimonial.name}</p>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-text-light">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {testimonial.area}
          </span>
          <span className="inline-flex items-center gap-1">
            <Zap className="h-3 w-3" />
            {testimonial.systemSize}
          </span>
        </div>
      </div>
    </div>
  );
}
