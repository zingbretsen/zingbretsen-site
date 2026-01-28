import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTags } from '@/utils/blog';

export const metadata: Metadata = {
  title: 'Blog Tags',
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <ul className="taglist">
      {tags.map(({ tag, count }) => (
        <Link key={tag} href={`/tags/${tag}`}>
          <p>
            {tag} ({count})
          </p>
        </Link>
      ))}
    </ul>
  );
}
