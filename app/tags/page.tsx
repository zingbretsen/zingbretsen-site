import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTags } from '@/utils/blog';

export const metadata: Metadata = {
  title: 'Tags',
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <>
      <h1>Tags</h1>
      <ul className="tag-list">
        {tags.map(({ tag, count }) => (
          <li key={tag} className="tag-list-item">
            <Link href={`/tags/${tag}`} className="tag-pill">
              {tag}
              <span className="tag-pill-count">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
