import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  path: string;
  excerpt: string;
}

export default function BlogPostCard({ title, path, excerpt }: BlogPostCardProps) {
  return (
    <li className="blogpost">
      <Link href={path} className="blogpost-link">
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </Link>
    </li>
  );
}
