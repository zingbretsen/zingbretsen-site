import type { Metadata } from 'next';
import { getAllPosts } from '@/utils/blog';
import BlogPostCard from '@/components/blogpostcard';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <h1>Blog</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <BlogPostCard
            key={post.slug}
            title={post.title}
            path={`/blog/${post.slug}`}
            date={post.date}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
    </>
  );
}
