import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <p className="brand">Zach Ingbretsen</p>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
