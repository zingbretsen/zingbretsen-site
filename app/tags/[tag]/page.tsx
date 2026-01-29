import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllTags } from '@/utils/blog';
import BlogPostCard from '@/components/blogpostcard';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(({ tag }) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Posts tagged "${tag}"`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getAllPosts().filter((post) => post.tags?.includes(tag));

  return (
    <>
      <div className="tag-page-header">
        <Link href="/tags/" className="tag-page-header__back">&larr;</Link>
        <span className="tag-page-header__tag">{tag}</span>
      </div>
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
