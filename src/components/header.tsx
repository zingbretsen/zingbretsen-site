import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <p className="brand">Zach Ingbretsen</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
