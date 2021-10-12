import React from 'react';
import { Link, navigate } from 'gatsby';

const BlogPostCard = ({ post }) => {
  const { path, title } = post.frontmatter;
  return (
    <li className="blogpost" key={path} onClick={() => navigate(path)}>
      <div>
        <Link to={path}>{title}</Link>
        <p>{post.excerpt}</p>
      </div>
    </li>
  );
};

export default BlogPostCard;
