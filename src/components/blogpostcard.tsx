import React from 'react';
import Link from 'next/link';

const BlogPostCard = ({ title, path, excerpt }) => {
  return (
    <Link href={path}>
      <li className="blogpost" key={path}>
        <div>
          <h5>{title}</h5>
          <p>{excerpt} </p>
        </div>
      </li>
    </Link>
  );
};

export default BlogPostCard;
