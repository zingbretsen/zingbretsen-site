import React from 'react';
import { Link } from 'gatsby';

const BlogPostCard = ({ post, excerpt }) => {
  return (
    <li className="blogpost" key={post.path} onClick={() => navigate(post.path)}>
      <div>
        <Link to={post.path}>{post.title}</Link>
        <p>{excerpt}</p>
      </div>
    </li>
  );
};

export default BlogPostCard;
