import React from 'react';

const Footer = () => (
  <>
    <div className="push"></div>
    <footer>
      © {new Date().getFullYear()}, Built with love (and a bit of hackery). Find me on{' '}
      <a rel="me" href="https://linuxrocks.online/@zingbretsen">
        Mastodon
      </a>
      .
    </footer>
  </>
);

export default Footer;
