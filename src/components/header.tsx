'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          <span className="site-header__name">Zach</span>
          <span className="site-header__name--light">Ingbretsen</span>
        </Link>

        <button
          className="site-header__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/" className="site-nav__link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/blog/" className="site-nav__link" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/tags/" className="site-nav__link" onClick={() => setMenuOpen(false)}>Tags</Link>
        </nav>
      </div>
    </header>
  );
}
