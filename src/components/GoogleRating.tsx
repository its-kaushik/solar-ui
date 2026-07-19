import { Star } from 'lucide-react';
import { googleReviews } from '@/data/reviews';

interface GoogleRatingProps {
  /** Use on dark backgrounds (e.g. the hero). */
  dark?: boolean;
  className?: string;
}

/**
 * Trust strip showing the live Google Business Profile rating.
 * Links out to the public profile so visitors can verify the reviews.
 */
export default function GoogleRating({ dark = false, className = '' }: GoogleRatingProps) {
  const { rating, count, profileUrl } = googleReviews;

  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${rating.toFixed(1)} out of 5 stars from ${count} Google reviews — read them on Google`}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
        dark
          ? 'border-white/20 bg-white/10 text-gray-100 hover:bg-white/20'
          : 'border-gray-200 bg-bg-white text-text hover:border-primary/40'
      } ${className}`}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
        ))}
      </span>
      <span className="font-semibold">{rating.toFixed(1)} on Google</span>
      <span className={dark ? 'text-gray-300' : 'text-text-light'}>· {count} reviews</span>
    </a>
  );
}
