import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

// Callout component for info/warning/tip boxes
function Callout({
  type = 'info',
  children,
}: {
  type?: 'info' | 'warning' | 'tip';
  children: React.ReactNode;
}) {
  const styles = {
    info: {
      bg: 'bg-primary/5',
      border: 'border-primary/20',
      icon: <Info className="h-5 w-5 text-primary" />,
    },
    warning: {
      bg: 'bg-secondary/5',
      border: 'border-secondary/20',
      icon: <AlertTriangle className="h-5 w-5 text-secondary" />,
    },
    tip: {
      bg: 'bg-accent/5',
      border: 'border-accent/20',
      icon: <Lightbulb className="h-5 w-5 text-accent" />,
    },
  };

  const s = styles[type];

  return (
    <div className={`my-6 flex gap-3 rounded-xl border ${s.border} ${s.bg} p-4`}>
      <div className="flex-shrink-0 pt-0.5">{s.icon}</div>
      <div className="text-sm leading-relaxed text-text-light [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}

// CTA Banner for inline call-to-action in blog posts
function CTABanner({
  text = 'Ready to go solar?',
  buttonText = 'Get Free Consultation',
  href = '/contact',
}: {
  text?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <div className="my-8 rounded-2xl bg-primary p-6 text-center sm:p-8">
      <p className="font-heading text-lg font-bold text-text-inverse sm:text-xl">
        {text}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex h-12 items-center justify-center rounded-xl bg-secondary px-6 font-heading text-sm font-semibold text-text transition-colors hover:bg-secondary-light"
      >
        {buttonText}
      </Link>
    </div>
  );
}

// Subsidy table component for embedding in blog posts
function SubsidyTable({ type }: { type: 'central' | 'state' | 'gbi' }) {
  if (type === 'central') {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-primary/5">
              <th className="px-4 py-3 text-left font-semibold text-text">System Size</th>
              <th className="px-4 py-3 text-left font-semibold text-text">Subsidy per KW</th>
              <th className="px-4 py-3 text-left font-semibold text-text">Total Subsidy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 text-text-light">1 KW</td>
              <td className="px-4 py-3 text-text-light">Rs 30,000/KW</td>
              <td className="px-4 py-3 font-semibold text-accent">Rs 30,000</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 text-text-light">2 KW</td>
              <td className="px-4 py-3 text-text-light">Rs 30,000/KW</td>
              <td className="px-4 py-3 font-semibold text-accent">Rs 60,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-text-light">3 KW+</td>
              <td className="px-4 py-3 text-text-light">Rs 30,000×2 + Rs 18,000×1</td>
              <td className="px-4 py-3 font-semibold text-accent">Rs 78,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'state') {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-primary/5">
              <th className="px-4 py-3 text-left font-semibold text-text">Subsidy Type</th>
              <th className="px-4 py-3 text-left font-semibold text-text">Amount</th>
              <th className="px-4 py-3 text-left font-semibold text-text">Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 text-text-light">Capital Subsidy</td>
              <td className="px-4 py-3 text-text-light">Rs 2,000/KW (max Rs 10,000)</td>
              <td className="px-4 py-3 text-text-light">All residential</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-text-light">Additional Subsidy</td>
              <td className="px-4 py-3 font-semibold text-accent">Rs 30,000</td>
              <td className="px-4 py-3 text-text-light">3 KW+ systems</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // GBI
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-primary/5">
            <th className="px-4 py-3 text-left font-semibold text-text">System Size</th>
            <th className="px-4 py-3 text-left font-semibold text-text">GBI Rate</th>
            <th className="px-4 py-3 text-left font-semibold text-text">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="px-4 py-3 text-text-light">Up to 3 KW</td>
            <td className="px-4 py-3 font-semibold text-accent">Rs 3/kWh</td>
            <td className="px-4 py-3 text-text-light">5 years</td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-text-light">3 KW to 10 KW</td>
            <td className="px-4 py-3 font-semibold text-accent">Rs 2/kWh</td>
            <td className="px-4 py-3 text-text-light">5 years</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="mt-10 mb-4 font-heading text-2xl font-bold text-text"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="mt-8 mb-3 font-heading text-xl font-bold text-text"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="my-4 text-sm leading-relaxed text-text-light sm:text-base" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => (
    <Link
      href={href || '#'}
      className="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary-light hover:decoration-primary"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: ({ children, ...props }) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-sm text-text-light sm:text-base" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-sm text-text-light sm:text-base" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-4 border-secondary pl-4 text-sm italic text-text-light sm:text-base"
      {...props}
    >
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead {...props}>{children}</thead>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border-b border-gray-200 bg-primary/5 px-4 py-3 text-left font-semibold text-text"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border-b border-gray-100 px-4 py-3 text-text-light" {...props}>
      {children}
    </td>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-text" {...props}>
      {children}
    </strong>
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  // Custom components
  Callout,
  CTABanner,
  SubsidyTable,
};
