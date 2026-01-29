import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  path: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export default function BlogPostCard({ title, path, date, excerpt, tags }: BlogPostCardProps) {
  return (
    <article className="post-card">
      <Link href={path} className="post-card__link">
        {tags && tags.length > 0 && (
          <span className="post-card__tag">{tags[0]}</span>
        )}
        <h2 className="post-card__title">{title}</h2>
        <p className="post-card__meta">{date}</p>
        <p className="post-card__excerpt">{excerpt}</p>
        <span className="post-card__read-more">Read more →</span>
      </Link>
    </article>
  );
}
