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
      <Link href="/tags/">back to tags</Link>
      <h1>Posts tagged &quot;{tag}&quot;</h1>
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
    </>
  );
}
