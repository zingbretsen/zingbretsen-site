import React from 'react';
import Link from 'next/link';

const BlogPostCard = ({ title, path, excerpt }) => {
  return (
    <Link href={path} className="block">
      <li
        className="bg-[var(--light-gray)] list-none p-5 rounded-2xl my-4 shadow hover:shadow-[0px_0px_2px_2px_var(--viridis-1)] transition-shadow duration-200"
        key={path}
      >
        <div className="m-2">
          <h5 className="mt-0 mb-2 text-lg font-medium text-[var(--viridis-2)]">{title}</h5>
          <p className="text-gray-700">{excerpt}</p>
        </div>
      </li>
    </Link>
  );
};

export default BlogPostCard;
