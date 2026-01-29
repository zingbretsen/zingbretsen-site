import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  path: string;
  excerpt: string;
}

export default function BlogPostCard({ title, path, excerpt }: BlogPostCardProps) {
  return (
    <Link href={path}>
      <li className="blogpost">
        <div>
          <h5>{title}</h5>
          <p>{excerpt}</p>
        </div>
      </li>
    </Link>
  );
}
