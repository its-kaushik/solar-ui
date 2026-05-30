import { Sun, Zap, BatteryCharging } from 'lucide-react';
import { brandCategories, type BrandCategory } from '@/data/brands';

const ICONS: Record<BrandCategory['id'], typeof Sun> = {
  panels: Sun,
  inverters: Zap,
  batteries: BatteryCharging,
};

export default function BrandsSection() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {brandCategories.map((category) => {
          const Icon = ICONS[category.id];
          return (
            <div
              key={category.id}
              className="rounded-2xl border border-gray-200 bg-bg-white p-6"
            >
              <div className="mb-5 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-bold text-text">
                  {category.title}
                </h3>
              </div>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.brands.map((brand) => (
                  <li
                    key={brand.name}
                    className="flex h-16 items-center justify-center rounded-xl border border-gray-100 bg-bg p-3"
                  >
                    {brand.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-h-8 w-auto max-w-[100px] object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-heading text-sm font-bold uppercase tracking-wide text-text-light">
                        {brand.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs leading-relaxed text-text-light">
        We supply and install equipment from India&rsquo;s leading manufacturers. The final
        brand depends on your budget, roof, and stock availability &mdash; we recommend the
        best fit during your free site survey.
      </p>
    </div>
  );
}
