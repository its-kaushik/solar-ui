import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import SectionWrapper from '@/components/SectionWrapper';
import BlogCard from '@/components/BlogCard';
import CTAButton from '@/components/CTAButton';
import { mdxComponents } from '@/components/mdx/MDXComponents';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, post.tags);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Raytrix Energy (OPC) Private Limited',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Raytrix Energy (OPC) Private Limited',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center gap-1 text-sm text-gray-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="font-heading text-2xl font-bold text-text-inverse sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          {post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-0.5 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <SectionWrapper>
        <article className="mx-auto max-w-3xl">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>
      </SectionWrapper>

      {/* End CTA */}
      <SectionWrapper className="bg-bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-text">
            Ready to Go Solar?
          </h2>
          <p className="mt-2 text-text-light">
            Get a free consultation and find out how much you can save with rooftop solar in Delhi.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CTAButton text="Get Free Consultation" href="/contact" />
            <CTAButton
              text="Calculate Your Savings"
              href="/solar-calculator"
              variant="outline"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <SectionWrapper>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 font-heading text-xl font-bold text-text">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
