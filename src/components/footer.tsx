import React from 'react';

const Footer = () => (
  <>
    <div className="flex-grow"></div>
    <footer className="text-center py-4 mt-8 text-gray-700">
      © {new Date().getFullYear()}, Built with love (and a bit of hackery). Find me on{' '}
      <a
        className="text-[var(--viridis-2)] hover:text-[var(--viridis-1)] underline"
        rel="me"
        href="https://linuxrocks.online/@zingbretsen"
      >
        Mastodon
      </a>
      .
    </footer>
  </>
);

export default Footer;
