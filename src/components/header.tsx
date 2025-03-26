import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="h-12 flex flex-row bg-[var(--light-gray)]">
      <p className="brand m-2 text-center text-[var(--viridis-2)] p-2">Zach Ingbretsen</p>
      <ul className="flex flex-row">
        <li className="list-none m-2 text-center text-[var(--viridis-2)] p-2">
          <Link href="/" className="hover:bg-[var(--lighter-gray)] hover:text-[var(--viridis-1)]">
            Home
          </Link>
        </li>
        <li className="list-none m-2 text-center text-[var(--viridis-2)] p-2">
          <Link
            href="/blog/"
            className="hover:bg-[var(--lighter-gray)] hover:text-[var(--viridis-1)]"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
