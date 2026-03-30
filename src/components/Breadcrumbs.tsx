import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

const BASE_URL = 'https://www.raytrixenergy.com';

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  // Only include items with URLs + the last item (current page) in JSON-LD
  const schemaItems = allItems.filter((item, i) => item.href || i === allItems.length - 1);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-300">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1;
            return (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-400" />}
                {isLast || !item.href ? (
                  <span className={isLast ? 'text-white font-medium' : ''}>{item.label}</span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
