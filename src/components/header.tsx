import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-4 py-2 bg-[var(--light-gray)]">
      <ul className="flex flex-row space-x-6 mt-2 sm:mt-0">
        <div className="text-xl font-semibold text-center text-[var(--viridis-2)]">
          Zach Ingbretsen
        </div>
        <li className="list-none text-center text-[var(--viridis-2)]">
          <Link
            href="/"
            className="hover:bg-[var(--lighter-gray)] hover:text-[var(--viridis-1)] px-2 py-1 rounded"
          >
            Home
          </Link>
        </li>
        <li className="list-none text-center text-[var(--viridis-2)]">
          <Link
            href="/blog/"
            className="hover:bg-[var(--lighter-gray)] hover:text-[var(--viridis-1)] px-2 py-1 rounded"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
