import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  path: string;
  date: string;
}

export default function BlogPostCard({ title, path, date }: BlogPostCardProps) {
  return (
    <li className="blog-list-item">
      <Link href={path} className="blog-list-link">
        <h2 className="blog-list-title">{title}</h2>
        <p className="blog-list-date">{date}</p>
      </Link>
    </li>
  );
}
