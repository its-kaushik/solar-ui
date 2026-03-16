import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="font-heading text-6xl font-bold text-primary sm:text-8xl">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-text sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-2 text-text-light">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 font-heading text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-light"
          >
            <Home className="h-4 w-4" />
            Go to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-xl border-2 border-primary px-6 font-heading text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-text-inverse"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
