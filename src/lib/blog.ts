import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPostMeta, BlogPost } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      featuredImage: data.featuredImage || '/images/blog/placeholder.jpg',
      tags: data.tags || [],
    } as BlogPostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime,
    featuredImage: data.featuredImage || '/images/blog/placeholder.jpg',
    tags: data.tags || [],
    content,
  };
}

export function getRelatedPosts(
  currentSlug: string,
  currentTags: string[],
  limit = 3
): BlogPostMeta[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== currentSlug);

  // Score by number of shared tags
  const scored = allPosts.map((post) => ({
    post,
    score: post.tags.filter((t) => currentTags.includes(t)).length,
  }));

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}
