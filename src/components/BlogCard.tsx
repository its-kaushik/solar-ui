import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '@/types';

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-2xl bg-bg-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
    >
      {/* Image placeholder */}
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <p className="text-xs text-text-light">Featured Image</p>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-3 text-xs text-text-light">
          <span>
            {new Date(post.date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-heading text-base font-bold text-text line-clamp-2 group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-text-light line-clamp-2">{post.excerpt}</p>

        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Read More
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
