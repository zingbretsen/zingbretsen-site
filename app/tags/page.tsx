import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTags } from '@/utils/blog';

export const metadata: Metadata = {
  title: 'Blog Tags',
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <>
      <h1>Tags</h1>
      <ul className="taglist">
        {tags.map(({ tag, count }) => (
          <li key={tag} className="tag-item">
            <Link href={`/tags/${tag}`} className="tag-link">
              {tag}
              <span className="tag-count">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
