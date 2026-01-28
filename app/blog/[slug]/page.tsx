import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/utils/blog';
import CodeHighlighter from '@/components/CodeHighlighter';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Content = (await import(`@/content/blog/${slug}.mdx`)).default;

  return (
    <CodeHighlighter>
      <h1 className="blogtitle">{post.title}</h1>
      {post.date && <p className="blogdate">Posted: {post.date}</p>}
      {post.tags && post.tags.length > 0 && (
        <p>
          Tags:{' '}
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} className="blog-tag">
              {tag}
            </Link>
          ))}
        </p>
      )}
      <Content />
    </CodeHighlighter>
  );
}
