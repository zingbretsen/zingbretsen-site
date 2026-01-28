import type { Metadata } from 'next';
import { getAllPosts } from '@/utils/blog';
import BlogPostCard from '@/components/blogpostcard';

export const metadata: Metadata = {
  title: 'Blog Posts',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <ul className="blogposts">
      {posts.map((post) => (
        <BlogPostCard
          key={post.slug}
          title={post.title}
          path={`/blog/${post.slug}`}
          excerpt={post.excerpt}
        />
      ))}
    </ul>
  );
}
