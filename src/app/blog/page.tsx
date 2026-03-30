import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeading from '@/components/SectionHeading';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Solar Knowledge Hub',
  description:
    'Learn about rooftop solar, government subsidies, savings calculations, and more. Expert guides from Raytrix Energy.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-text-inverse sm:text-4xl">
            Solar Knowledge Hub
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
            Guides, tips, and everything you need to know about going solar in Delhi.
          </p>
        </div>
      </section>

      <SectionWrapper>
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <SectionHeading
              title="Coming Soon"
              subtitle="We're working on helpful guides about solar energy, subsidies, and savings. Check back soon!"
            />
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
